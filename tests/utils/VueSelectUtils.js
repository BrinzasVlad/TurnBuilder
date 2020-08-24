/**
 * Selects the option in the given Vue Select instance that
 * matches the given label.
 * @param {Vue} vSelectInstance An instance of a Vue Select element, for
 * instance one obtained via a get().vm
 * @param {string} Label The label associated to the option to be selected
 */
export function selectOptionWithLabel (vSelectInstance, label) {
  const selectOptions = vSelectInstance.options
  const optionToSelect = selectOptions.find((option) => {
    return label === vSelectInstance.getOptionLabel(option)
  })

  if (typeof optionToSelect === 'undefined') {
    throw new Error('Requested option ' + label + ' was not found in list of options ' + selectOptions)
  } else vSelectInstance.select(optionToSelect)
}
