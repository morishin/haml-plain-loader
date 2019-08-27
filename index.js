const haml = require('hamljs')
const loaderUtils = require('loader-utils')

module.exports = function (source) {
  let html
  try {
    html = haml.render(source, loaderUtils.getOptions(this))
  } catch (e) {
    this.emitError('HAML:' + e)
    throw e
  }

  return html
}

