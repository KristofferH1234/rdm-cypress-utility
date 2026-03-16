"use strict";
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);

// src/index.ts
var index_exports = {};
__export(index_exports, {
  checkDropdownsForDataByID: () => checkDropdownsForDataByID,
  clickAndConfirmPageLoad: () => clickAndConfirmPageLoad,
  clickAndWaitForFinalPage: () => clickAndWaitForFinalPage,
  idEndsWith: () => idEndsWith,
  idStartsWith: () => idStartsWith,
  randomNumber: () => randomNumber,
  validateTableColumns: () => validateTableColumns,
  validateTableColumnsOrder: () => validateTableColumnsOrder
});
module.exports = __toCommonJS(index_exports);

// src/assertions/elements.ts
function checkDropdownsForDataByID(selectors) {
  return cy.wrap(selectors).each((suffix) => {
    cy.get(`[id$="${suffix}"]`).find("option").should("have.length.greaterThan", 0);
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
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  checkDropdownsForDataByID,
  clickAndConfirmPageLoad,
  clickAndWaitForFinalPage,
  idEndsWith,
  idStartsWith,
  randomNumber,
  validateTableColumns,
  validateTableColumnsOrder
});
