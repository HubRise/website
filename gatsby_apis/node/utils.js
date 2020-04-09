const fs = require('fs')
const path = require('path')
const { flatten } = require('lodash')
const locales = require('../../src/i18n/locales')

/**
 * Checks whether a given path is a directory.
 *
 * @param   {string} path
 * @returns {Boolean}
 */
const isDirectory = (path) => fs.lstatSync(path).isDirectory()

/**
 * Retrives subdirectories in a given path.
 *
 * @param   {string} srcPath
 * @returns {Array[string]} List of paths to subdirectories.
 */
const getDirectories = (srcPath) => {
  return fs
    .readdirSync(srcPath)
    .map((item) => path.join(srcPath, item))
    .filter(isDirectory)
}

/**
 * Retrieves all subdirectories in a given path, including nested ones.
 *
 * @param   {string} path
 * @returns {Array[string]} List of paths to all subdirectories.
 */
const getDirectoriesRecursive = (path) => {
  return [path, ...flatten(getDirectories(path).map(getDirectoriesRecursive))]
}

/**
 * Retrieves default locale object.
 *
 * @returns {Object}
 */
const getDefaultLocale = () => {
  const [defaultLocale] = Object.values(locales).filter(
    (locale) => locale.default
  )

  return defaultLocale
}

module.exports = {
  isDirectory,
  getDefaultLocale,
  getDirectories,
  getDirectoriesRecursive
}
