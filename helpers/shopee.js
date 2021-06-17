const axios = require('axios')

const getProductMeta = async (url) => {
  try {
    const [ shopId, itemId ] = url.split('.').slice(Math.max(url.split('.').length - 2, 1))
    return { shopId, itemId }
  } catch (err) {
    // Error handling
  }
}

const getProductReviews = async (url) => {
  try {
    const limitData = 10
    const { shopId, itemId } = await getProductMeta(url)
    const resReviews = await axios.get(`https://shopee.co.id/api/v2/item/get_ratings?filter=0&flag=1&itemid=${itemId}&limit=${limitData}&offset=0&shopid=${shopId}&type=0`)    
    return { response: resReviews.data.data.ratings, limitData }
  } catch (err) {
    // Error handling
  }
}

module.exports = {
  getProductReviews
}