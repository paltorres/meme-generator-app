const createMeme = async ({command, ack, respond}) => {
    await ack()
  
    await respond(`Se creo el meme`);
  
  };


module.exports = {
    createMeme
  };