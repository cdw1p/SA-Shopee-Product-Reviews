const express = require('express')
const router = express.Router()
const translatte = require('translatte')
const SW = require('stopword')
const natural = require('natural')
const aposToLexForm = require('apos-to-lex-form')
const SpellCorrector = require('spelling-corrector')
const spellCorrector = new SpellCorrector()
spellCorrector.loadDictionary()
const { getProductReviews } = require('../helpers/shopee')

module.exports.initialize = function(app) {
  app.use('/',
    router.get('/', async (req, res) => {
      const { limitData, response } = await getProductReviews(req.query.url)
      const resAnalyzer = [], summary = {}

      // Loop Data
      for (data of response) {
        // Translate to English
        const { text: translateText } = await translatte(data.comment, { to: 'en' })

        // Filter Word
        const lexedReview = aposToLexForm(translateText)
        const alphaOnlyReview = lexedReview.toLowerCase().replace(/[^a-zA-Z\s]+/g, '')
        const tokenizedReview = new natural.WordTokenizer().tokenize(alphaOnlyReview)
        tokenizedReview.forEach((word, index) => tokenizedReview[index] = spellCorrector.correct(word))
        const filteredReview = SW.removeStopwords(tokenizedReview)

        // Analysis
        const analyzer = new natural.SentimentAnalyzer('English', natural.PorterStemmer, 'afinn')
        const analysis = analyzer.getSentiment(filteredReview)
        const response = analysis > 0 ? 'positive' : analysis < 0 ? 'negative' : 'neutral'

        // Update Counter
        resAnalyzer.push({ value: data.comment, response })
        summary[response] = (summary[response] ?? 0) + 1
      }

      // Response
      return res.json({ productUrl: req.query.url, limitData, resAnalyzer, summary })
    })
  )
}