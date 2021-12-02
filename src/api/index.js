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

  async generateMeme({template_id, text0, text1 }) {
    const imgUrl = await imgflipClient.meme(template_id, {
      captions: [text0, text1]
    });
    return imgUrl;
  };  

  _filterSafeForWork(memeList) {
    return memeList.filter(meme => meme.safe_for_work === 'yes');
  }
}

module.exports = new MemeApi();
