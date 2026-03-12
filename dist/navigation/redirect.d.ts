/**
 * Click and wait to confirm final url loads after any redirects
 * @param button
 * @param page
 * @param path
 * @returns Cypress.Chainable<string>
 */
export declare function clickAndWaitForFinalPage(button: string, page: string, path: string): Cypress.Chainable<string>;
/**
 * Click and check expected result page url
 * @param button
 * @param path
 * @returns Cypress.Chainable<string>
 */
export declare function clickAndConfirmPageLoad(button: string, path: string): Cypress.Chainable<string>;
