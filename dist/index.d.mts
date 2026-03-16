/**
 * Checks options are available for selector by ID
 * @param selectors
 * @returns Cypress.Chainable
 */
declare function checkDropdownsForDataByID(selectors: string[]): Cypress.Chainable;

/**
 * Click and wait to confirm final url loads after any redirects
 * @param button
 * @param page
 * @param path
 * @returns Cypress.Chainable<string>
 */
declare function clickAndWaitForFinalPage(button: string, page: string, path: string): Cypress.Chainable<string>;
/**
 * Click and check expected result page url
 * @param button
 * @param path
 * @returns Cypress.Chainable<string>
 */
declare function clickAndConfirmPageLoad(button: string, path: string): Cypress.Chainable<string>;

/**
 * Get the query for selecting element by ID suffix
 * @param suffix
 * @returns CSS selector query string
 */
declare function idEndsWith(suffix: string): string;
/**
 * Get the query for selecting element by ID prefix
 * @param prefix
 * @returns CSS selector query string
 */
declare function idStartsWith(prefix: string): string;

/**
 * Generates a random number
 * @param min
 * @param max
 * @returns number
 */
declare function randomNumber(min: number, max: number): number;

/**
 *
 * @param tableID
 * @param columns
 * @returns Cypress.Chainable
 */
declare function validateTableColumnsOrder(tableID: string, columnHeaders: string[]): Cypress.Chainable;
/**
 *
 * @param tableID
 * @param columns
 * @returns Cypress.Chainable
 */
declare function validateTableColumns(tableID: string, columnHeaders: string[]): Cypress.Chainable;

export { checkDropdownsForDataByID, clickAndConfirmPageLoad, clickAndWaitForFinalPage, idEndsWith, idStartsWith, randomNumber, validateTableColumns, validateTableColumnsOrder };
