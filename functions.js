const fs = require('fs/promises');

const readFile = async () => {
  try {
    const file = await fs.readFile('./public/data/cft.json');

    return file.toString()
  } catch (err) {
    console.log('error');
  }
};

module.exports = {readFile};