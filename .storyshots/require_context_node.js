export default (base = '.', scanSubDirectories = false, regularExpression = /\.js$/) => {
  const fs = require('fs');
  const path = require('path');
  const files = {};

  function readDirectory(directory) {
    fs.readdirSync(directory).forEach((file) => {
      const fullPath = path.resolve(directory, file);

      if (fs.statSync(fullPath).isDirectory()) {
        if (scanSubDirectories) readDirectory(fullPath);

        return;
      }

      if (!regularExpression.test(fullPath)) return;

      files[fullPath] = true;
    });
  }

  readDirectory(path.resolve(__dirname, base));

  function Module(file) {
    // eslint-disable-next-line import/no-dynamic-require
    return require(file);
  }

  Module.keys = () => Object.keys(files);

  return Module;
};

