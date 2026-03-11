/**
 *
 * @param tableID
 * @param columns
 * @returns Cypress.Chainable
 */
export function validateTableColumnsOrder(tableID, columnHeaders) {
    return cy.get(`${tableID} thead tr`).each((th, index) => {
        if (!th.hasClass('.Invisible')) {
            expect(th.text().trim()).to.eq(columnHeaders[index]);
        }
    });
}
/**
 *
 * @param tableID
 * @param columns
 * @returns Cypress.Chainable
 */
export function validateTableColumns(tableID, columnHeaders) {
    return cy.get(`${tableID} thead tr th`).each((th) => {
        if (!th.hasClass('Invisible')) {
            expect(columnHeaders).to.include(th.text().trim());
        }
    });
}
