const path = require('path')

class PathNormalizer {

    normalizePath(filePath) {
      return path.normalize(filePath)
    }
  
  
    joinPaths(...paths) {
      return path.join(...paths)
    }
  }
  
  


module.exports = PathNormalizer