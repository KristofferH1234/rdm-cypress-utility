/**
 * Get the query for selecting element by ID suffix
 * @param suffix
 * @returns CSS selector query string
 */
export function idEndsWith(suffix) {
    /*
      DEV NOTE: For legacy .Net Web Forms IDs are dynamically generated.
                One consistency in the generated IDs are the suffixes.
                Though even suffixes are not always guaranteed to be unique
     */
    return `[id$="${suffix}"]`;
}
/**
 * Get the query for selecting element by ID prefix
 * @param prefix
 * @returns CSS selector query string
 */
export function idStartsWith(prefix) {
    return `[id^="${prefix}"]`;
}
