/// <reference types="Cypress"/>

describe("cart-acctions", () => {
  it("should open cart", () => {
    cy.visit("http://localhost:3000/");
    cy.get("nav a svg").click();
  });
  it(" close cart and moving to /checkout page by clicking checkout", () => {
    cy.visit("http://localhost:3000/");
    cy.get("nav a svg").click();
    cy.get(".Cart_cartContainer__d5jDY").should("exist");
    cy.get(".Cart_cartContainer__d5jDY").contains("CHECKOUT").click();
    cy.get(".Cart_cartContainer__d5jDY").should("not.exist");
    cy.url().should("include", "/Checkout");
  });
  it("close cart by clicking close", () => {
    cy.visit("http://localhost:3000/");
    cy.get("nav a svg").click();
    cy.get(".Cart_cartContainer__d5jDY").should("exist");
    cy.get(".Cart_cartContainer__d5jDY").contains("Close").click();
    cy.get(".Cart_cartContainer__d5jDY").should("not.exist");
  });
});
