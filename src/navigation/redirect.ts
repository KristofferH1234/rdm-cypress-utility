 /**
  * Click and wait to confirm final url loads after any redirects
  * @param button 
  * @param page 
  * @param path 
  * @returns Cypress.Chainable<string>
  */
 export function clickAndWaitForFinalPage(button: string, page: string, path: string): Cypress.Chainable<string> {
    /*
       Dev note: There is a quirk in legacy code where guard pages act as an intermediary.
                 So the usual '[click] then [get path of result page]' test fails.
                 Cypress only sees the current page url so running cy.location() will 
                 only catch the intermediary page.
     */
    
    // create intercept to add a watcher for the specific pattern
    cy.intercept(`**${page}*`).as('resultPage');
    // click after intercept
    cy.get(`[id$="${button}"]`).click();
    // wait for url pattern to appear on the network
    cy.wait('@resultPage');

    // after wait complete confirm path match
    return cy.location('pathname').should('eq', `${path}`);
}

/**
 * Click and check expected result page url
 * @param button 
 * @param path 
 * @returns Cypress.Chainable<string>
 */
export function clickAndConfirmPageLoad(button: string, path: string): Cypress.Chainable<string> {
    // click for redirect
    cy.get(`[id$="${button}"]`).click();
    
    // after wait complete confirm path match
    return cy.location('pathname').should('eq', `${path}`);
}