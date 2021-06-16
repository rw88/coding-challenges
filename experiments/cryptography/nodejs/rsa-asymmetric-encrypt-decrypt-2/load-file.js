const path = require('path');
const fs = require('fs').promises;


const loadFile = async (filePath) => {
    const absPath = path.resolve(filePath);
    const file = await fs.readFile(absPath, "utf8");

    return file;
};


module.exports = loadFile;