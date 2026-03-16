// src/assertions/elements.ts
function checkDropdownsForDataByID(selectors) {
  return cy.wrap(selectors).each((suffix) => {
    cy.get(`[id$="${suffix}"] option`).find("option").should("have.length.greaterThan", 0);
  });
}

// src/navigation/redirect.ts
function clickAndWaitForFinalPage(button, page, path) {
  cy.intercept(`**${page}*`).as("resultPage");
  cy.get(`[id$="${button}"]`).click();
  cy.wait("@resultPage");
  return cy.location("pathname").should("eq", `${path}`);
}
function clickAndConfirmPageLoad(button, path) {
  cy.get(`[id$="${button}"]`).click();
  return cy.location("pathname").should("eq", `${path}`);
}

// src/utility/id-parsing.ts
function idEndsWith(suffix) {
  return `[id$="${suffix}"]`;
}
function idStartsWith(prefix) {
  return `[id^="${prefix}"]`;
}

// src/utility/random-utils.ts
function randomNumber(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

// src/data-fixtures/tables.ts
function validateTableColumnsOrder(tableID, columnHeaders) {
  return cy.get(`${tableID} thead tr`).each((th, index) => {
    if (!th.hasClass(".Invisible")) {
      expect(th.text().trim()).to.eq(columnHeaders[index]);
    }
  });
}
function validateTableColumns(tableID, columnHeaders) {
  return cy.get(`${tableID} thead tr th`).each((th) => {
    if (!th.hasClass("Invisible")) {
      expect(columnHeaders).to.include(th.text().trim());
    }
  });
}
export {
  checkDropdownsForDataByID,
  clickAndConfirmPageLoad,
  clickAndWaitForFinalPage,
  idEndsWith,
  idStartsWith,
  randomNumber,
  validateTableColumns,
  validateTableColumnsOrder
};
