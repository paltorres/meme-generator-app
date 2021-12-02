const Imgflip = require('imgflip');

const imgflipClient = new Imgflip({
  username: process.env.IMGFLIP_API_USERNAME,
  password: process.env.IMGFLIP_API_PASSWORD,
});

class MemeApi {
  async getMemes({ querySearch }) {
    // get memes response
    const responseData = [];

    if (responseData.results) {
      return this._filterSafeForWork(responseData.results);
    }

    return [];
  }

  generateMeme() {
    return null
  };  

  _filterSafeForWork(memeList) {
    return memeList.filter(meme => meme.safe_for_work === 'yes');
  }
}

module.exports = new MemeApi();
