const axios = require('axios');
const Imgflip = require('imgflip');

const imgflipClient = new Imgflip({
  username: process.env.IMGFLIP_API_USERNAME,
  password: process.env.IMGFLIP_API_PASSWORD,
});
const IMGFLIP_AJAX_URL = 'https://imgflip.com';

class MemeApi {
  async getMemes({ querySearch }) {
    const response = await axios.get(`${IMGFLIP_AJAX_URL}/ajax_meme_search_new`, { params: { q: querySearch }});
    const memes = response.data.results || [];

    return this._filterSafeForWork(memes);
  }

  async generateMeme({template_id, text0, text1 }) {
    const imgUrl = await imgflipClient.meme(template_id, {
      captions: [text0, text1]
    });
    return imgUrl;
  };  
  async getFirstMeme({querySearch, text0, text1}) {
    console.log('getFirstMeme', querySearch, text0, text1);
    const memes = await this.getMemes({querySearch});

    console.log('memes', memes);

    const url = await this.generateMeme({
      template_id: memes[0].id, 
      text0, text1 
    })
    return url;
  }
  _filterSafeForWork(memeList) {
    return memeList.filter(meme => meme.safe_for_work === 'yes');
  }
}

module.exports = new MemeApi();
