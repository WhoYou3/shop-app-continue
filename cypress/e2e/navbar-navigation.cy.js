/// <reference types="Cypress"/>

describe("navbar navigation", () => {
  beforeEach(() => {
    cy.visit("http://localhost:3000");
  });

  it("Headphones dispaly after clicked headphones link", () => {
    cy.viewport(1030, 800);
    cy.get(".Navbar_navLinks__FdwH-").contains("HEADPHONES").click();
    cy.get(".Products_products__4gtdL").contains("HEADPHONES");
    cy.url().should("eq", "http://localhost:3000/headphones");
  });
  it("Earphones dispaly after clicked earphones link", () => {
    cy.viewport(1030, 800);
    cy.get(".Navbar_navLinks__FdwH-").contains("EARPHONES").click();
    cy.get(".Products_products__4gtdL").contains("EARPHONES");
    cy.url().should("eq", "http://localhost:3000/earphones");
  });
  it("Headphones dispaly after clicked speakers link", () => {
    cy.viewport(1030, 800);
    cy.get(".Navbar_navLinks__FdwH-").contains("SPEAKERS").click();
    cy.get(".Products_products__4gtdL").contains("SPEAKERS");
    cy.url().should("eq", "http://localhost:3000/speakers");
  });

  it("Headphones dispaly after clicked headphones link on devices below 1023", () => {
    cy.viewport(1023, 768);
    cy.get("nav .hambuerger").click();
    cy.get(".Navbar_menu__E26TB").contains("Headphones").click();
    cy.get(".Products_products__4gtdL").contains("HEADPHONES");
    cy.url().should("eq", "http://localhost:3000/headphones");
  });
  it("Earphones dispaly after clicked headphones link on devices below 1023", () => {
    cy.viewport(1023, 768);
    cy.get("nav .hambuerger").click();
    cy.get(".Navbar_menu__E26TB").contains("Earphones").click();
    cy.get(".Products_products__4gtdL").contains("EARPHONES");
    cy.url().should("eq", "http://localhost:3000/earphones");
  });
  it("Earphones dispaly after clicked headphones link on devices below 1023", () => {
    cy.viewport(1023, 768);
    cy.get("nav .hambuerger").click();
    cy.get(".Navbar_menu__E26TB").contains("Speakers").click();
    cy.get(".Products_products__4gtdL").contains("SPEAKERS");
    cy.url().should("eq", "http://localhost:3000/speakers");
  });
});
