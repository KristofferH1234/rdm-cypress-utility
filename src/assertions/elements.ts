
/**
 * Checks options are available for selector by ID
 * @param selectors 
 * @returns Cypress.Chainable
 */
export function checkDropdownsForDataByID(selectors: string[]): Cypress.Chainable {
    return cy.wrap(selectors).each((suffix) => {
        cy.get(`[id$="${suffix}"]`)
            .find('option')
            .should('have.length.greaterThan', 0)
    })
}