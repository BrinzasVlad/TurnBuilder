export function addAllValuesProperty (enumObj) {
  const allValues = []
  for (const key in enumObj) {
    // Assume enum values are uppercase and methods are not
    if (key === key.toUpperCase()) allValues.push(enumObj[key])
  }
  enumObj.allValues = allValues

  return enumObj
}
