const { parentPort, workerData } = require('worker_threads');
const sharp = require('sharp');
const path = require('path');
const fs = require('fs');

// workerData contains the data passed from the main thread
const { filePath } = workerData;

const outputFilePath = path.join('uploads', 'processed-' + path.basename(filePath));

// Process the image with sharp
sharp(filePath)
  .rotate()   // Rotating the image
  .resize(200)  // Resizing the image
  .jpeg({ mozjpeg: true })  // Converting to JPEG format with compression
  .toFile(outputFilePath)  // Save processed image to a new file
  .then(() => {
    parentPort.postMessage(`Image processed successfully: ${outputFilePath}`);
  })
  .catch((err) => {
    parentPort.postMessage(`Error processing image: ${err.message}`);
  });
