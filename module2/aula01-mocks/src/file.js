const { readFile } = require('fs/promises')
const { error } = require('./constants')
const User = require('./user')

const DEFAULT_OPTIONS = {
  maxLines: 3,
  fields: ["id","name","profession","age"]
}

class File {
  static async csvToJson(filePath) {
    const content = await File.getFileContent(filePath)
    const validation = File.isValid(content)
    if(!validation.valid) throw new Error(validation.error)

    const users = File.parseCSVToJSON(content)

    return users
  }

  static async getFileContent(filePath) {
    return(await readFile(filePath)).toString("utf8")
  }

  static isValid(csvToString, options = DEFAULT_OPTIONS) {
    const [header, ...fileWithoutHeader] = csvToString.split('\n')
    const isHeaderValid = header === options.fields.join(',')
    if(!isHeaderValid) {
      return {
        error: error.FILE_FIELDS_ERROR_MESSAGE,
        valid: false
      }
    }

    const isContentLengthAccepted = (
      fileWithoutHeader.length > 0 &&
      fileWithoutHeader.length <= options.maxLines
    )

    if(!isContentLengthAccepted) {
      return {
        error: error.FILE_LENGHT_ERROR_MESSAGE,
        valid: false
      }
    }

    return { valid: true }
  }
  
  static parseCSVToJSON(csvString) {
    const lines = csvString.split('\n')
    // remove o primeiro item e joga na variável
    const firstLine = lines.shift()
    const header = firstLine.split(',')
    const users = lines.map(line => {
      const columns = line.split(',')
      let user = {}
      for(const index in columns) {
        user[header[index]] = columns[index]
      }
      return new User(user)
    })
    return users
  }
}

module.exports = File