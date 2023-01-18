const fs = require('fs');

const readFile = () => {
  try {
    const file = fs.readFileSync('./public/data/cft.json');

    return JSON.parse(file)
  } catch (err) {
    console.log(err);
  }
};

module.exports = {readFile};