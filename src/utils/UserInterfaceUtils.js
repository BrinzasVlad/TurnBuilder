/**
 * Returns a function, that, as long as it continues to be invoked, will not
 * be triggered. The function will be called after it stops being called for
 * N milliseconds. If `immediate` is passed, trigger the function on the
 * leading edge, instead of the trailing.
 * @param {Function} functionToDebounce The function to be debounced
 * @param {number} millisDelay The amount of milliseconds between function calls
 * @param {boolean} immediate Whether to trigger on the leading edge instead
 */
export function debounce (functionToDebounce, millisDelay, immediate) {
  let timeout
  return function () {
    const context = this; const args = arguments

    const later = function () {
      timeout = null
      if (!immediate) functionToDebounce.apply(context, args)
    }

    const callNow = immediate && !timeout

    clearTimeout(timeout)
    timeout = setTimeout(later, millisDelay)

    if (callNow) functionToDebounce.apply(context, args)
  }
}
