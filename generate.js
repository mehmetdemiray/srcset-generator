const testFolder = 'C:/Users/demiray/Desktop/Yeni klasör'; // Change 
const fs = require('fs');
const sharp = require('sharp');

fs.readdir(testFolder, (err, files) => {
  files.forEach(file => {
    sharp(testFolder + "/" + file).resize({ width: 360 }).toFile(testFolder + "/output/" + file.split(".")[0].replace("@2x","") + "@2x" + "." + file.split(".")[1])
    sharp(testFolder + "/" + file).resize({ width: 480 }).toFile(testFolder + "/output/" + file.split(".")[0].replace("@2x","") + "@3x" + "." + file.split(".")[1])
    sharp(testFolder + "/" + file).resize({ width: 760 }).toFile(testFolder + "/output/" + file.split(".")[0].replace("@2x","") + "@4x" + "." + file.split(".")[1])
    sharp(testFolder + "/" + file).resize({ width: 1000 }).toFile(testFolder + "/output/" + file.split(".")[0].replace("@2x","") + "." + file.split(".")[1])
  });
});