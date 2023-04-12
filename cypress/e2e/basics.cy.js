/// <reference types="Cypress"/>

describe("tasks page", () => {
  it("should render the main image", () => {
    cy.visit("http://localhost:3000/");
    cy.get(".SectionMain_sectionMain__0qGM8").should(
      "have.css",
      "background-image"
    );
  });
  it("should display the page title", () => {
    cy.visit("http://localhost:3000");
    cy.get("h1").should("have.length", 1);
    cy.get("h1").contains("XX99 MARK II HEADPHONES");
  });
});
