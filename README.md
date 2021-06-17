# SA-Shopee-Product-Reviews
Shopee Product Reviews - Sentiment Analysis

## Instalation
```sh
$ git clone https://github.com/cdw1p/SA-Shopee-Product-Reviews.git
$ cd SA-Shopee-Product-Reviews
$ npm install
$ node index.js
```

## Routes
```sh
[GET] http://localhost/?url=:productUrl
```
Response :
```javascript
{
  "productUrl": ":https://shopee.co.id/POCO-X3-Pro-(8GB-256GB)-Snapdragon™-860-48MP-AI-AI-Quad-Kamera-Layar-120Hz-6.67”-FHD-5160mAh-i.51925611.8341443334",
  "limitData": 10,
  "resAnalyzer": [
    {
      "value": "kualitas produk baik. harga juga lumayan\n. . sejauh ini suka dengan Semua productnya. Pengiriman juga lumayan cepat. Sellernya baik.mohon maaf ga bisa fotoin hp nya karena langsung dikirim ke tempat lain.",
      "response": "positive"
    },
    {
      "value": "Harga standar, lumayan, respon penjual lumayan baik, pengemasan lumayan lama, pengiriman lumayan cepat estimasi sampai tgl 6 udah sampai tgl 4, produk mendarat dengan aman, pengemasan mohon bisa ditingkatkan, bubble wrap jangan cuma selembar, krn ini produk elektronik mahal tdk tahu dalam perjalanan",
      "response": "positive"
    },
    {
      "value": "Terimakasih kak, barang sudah diterima dengan baik dan aman. Semua packing masih tersegel dengan baik dan kotak hp nya juga masih segel 🙏🙏🙏",
      "response": "positive"
    },
    {
      "value": "Pengemasan dan pengiriman sangat cepat,,, \n saran dari saya, packing harus di permantap lagi krn terlalu rawan dus penyok",
      "response": "positive"
    },
    {
      "value": "Produk benar benar ori masih tersegel barang berfungsi dengan sempurna bagus lah pokoknya Terima kasih admin xiaomi telah memberikan yang terbaik,dan pengiriman sangat singkat saya senang berbelanja disini , setelah saya pakai beberapa hari produk tetap berjalan dengan baik Terima kasih",
      "response": "positive"
    },
    {
      "value": "Aih pesen jam 9 datang jam 3 sore ah mantap pokoknya",
      "response": "neutral"
    },
    {
      "value": "agak serem liat packingannyaa... \nPelit bublewrap seller nya wkwkwkwk..\nUntungnya aman barangnyaaa..",
      "response": "positive"
    },
    {
      "value": "Packing rapih, cuma kurang kuat dus ada penyok utung dalam tidak apa \"",
      "response": "positive"
    },
    {
      "value": "pakcing rapi,pengiriman cepat,barang msh segel,utuh,tpi blm di unboxing.penjual ramah...harga bersahabat.......",
      "response": "negative"
    },
    {
      "value": "Barang sesuai deskripsi\nSudah diterima dengan selamat tanpa cacat\nPakai shopee express same day, udah deg²an nungguin ternyata nyampe malamnya\nSetelah dicoba beberapa hari ternyata puas banget pake ini\nMantap benar deh  👍 👍 👍 👍 👍 🌟 🌟 🌟 🌟 🌟",
      "response": "positive"
    }
  ],
  "summary": {
    "positive": 8,
    "neutral": 1,
    "negative": 1
  }
}
```
