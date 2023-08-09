const fs = require('node:fs')
const fsp = require('node:fs/promises')
const path = require('node:path')

async function exists (path) {
  return await fs.existsSync(path)
}

const {
  ErrorInvalidData,
  ErrorInvalidPath,
  ErrorInvalidWord
} = require('./CustomExceptions')

// Ejercicio 2
async function writeFile (filePath, data, callback) {
  const patch = path.dirname(filePath)
  exists(patch) && await fsp.mkdir(patch, { recursive: true })

  try {
    const response = await fsp.writeFile(filePath, data)
    return callback(response)
  } catch (error) {
    return callback(new ErrorInvalidData())
  }
}

// Ejercicio 3
async function readFileAndCount (word, callback) {
  const filePath = process.argv[2] || ''

  const patchIsValid = filePath && filePath.length > 0
  if (!patchIsValid) return await callback(new ErrorInvalidPath(), 0)

  const wordIsValid = word && word.length > 0
  if (!wordIsValid) return await callback(new ErrorInvalidWord(), 0)

  const fileExists = await fs.existsSync(filePath)
  if (!fileExists) return await callback(null, 0)

  try {
    const string = await fsp.readFile(filePath, 'utf-8')
    const count = string.split(word).length - 1
    return callback(null, count)
  } catch (error) {
    return callback(error, 0)
  }
}

module.exports = {
  writeFile,
  readFileAndCount
}
