/**
 * Checks options are available for selector by ID
 * @param selectors
 * @returns Cypress.Chainable
 */
export function checkDropdownsForDataByID(selectors) {
    return cy.wrap(selectors).each((suffix) => {
        cy.get(`[id$="${suffix}"] option`)
            .find('option')
            .should('have.length.greaterThan', 0);
    });
}
