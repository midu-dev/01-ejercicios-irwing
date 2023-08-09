class ErrorInvalidData extends Error {
  constructor () {
    super()
    this.name = 'ErrorInvalidWord'
    this.message = 'No se ha especificado el string a escribir'
  }
}

class ErrorInvalidPath extends Error {
  constructor () {
    super()
    this.name = 'ErrorInvalidPath'
    this.message = 'No se ha especificado el path del archivo'
  }
}

class ErrorInvalidWord extends Error {
  constructor () {
    super()
    this.name = 'ErrorInvalidWord'
    this.message = 'No se ha especificado la palabra a buscar'
  }
}

module.exports = {
  ErrorInvalidData,
  ErrorInvalidPath,
  ErrorInvalidWord
}
