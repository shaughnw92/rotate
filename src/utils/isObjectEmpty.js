/**
 * Checks whether an object is empty or not by checking the key length
 * @param {{key: value}} obj object to be checked for length
 * @returns boolean value on whether object is empty (true) or not (false)
 */

const isObjectEmpty = (obj = {}) => Object.keys(obj).length === 0

export default isObjectEmpty
