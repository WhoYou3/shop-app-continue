/// <reference types="Cypress"/>

const customName = "jan";
const email = "janirzyk333@gmail.com";
const phone = 666309454;
const addres = "1-go Maja 100";
const zip = 32440;
const city = "sulkowice";
const country = "Poland";

describe("form inputs variants test", () => {
  it("is Form on the checkout page", () => {
    cy.visit("http://localhost:3000/Checkout");
    cy.get("form").should("exist");
  });
  it("Button Continue & Pay should be disabled untill some input is empty", () => {
    cy.visit("http://localhost:3000/headphones/XX99MARKII");
    cy.get("button").contains("ADD TO CART").click();
    cy.visit("http://localhost:3000/Checkout");
    cy.get("button").contains("CONTINUE & PAY").should("be.disabled");
    cy.get("input[id=name]").type(customName);
    cy.get("button").contains("CONTINUE & PAY").should("be.disabled");
    cy.get("input[id=email]").type(email);
    cy.get("button").contains("CONTINUE & PAY").should("be.disabled");
    cy.get("input[id=phone]").type(phone);
    cy.get("button").contains("CONTINUE & PAY").should("be.disabled");
    cy.get("input[id=addres]").type(addres);
    cy.get("button").contains("CONTINUE & PAY").should("be.disabled");
    cy.get("input[id=zipcode]").type(zip);
    cy.get("button").contains("CONTINUE & PAY").should("be.disabled");
    cy.get("input[id=city]").type(city);
    cy.get("button").contains("CONTINUE & PAY").should("be.disabled");
    cy.get("input[id=country]").type(country);
    cy.get("button").contains("CONTINUE & PAY").should("be.enabled");
    cy.get("button").contains("CONTINUE & PAY").click();
    cy.get("div").contains("THANK YOU FOR YOUR ORDER").should("be.visible");
    cy.get("div").contains("THANK YOU FOR YOUR ORDER").should("not.exist");
    cy.url().should("eq", "http://localhost:3000/");
  });
  it("form valid inputs", () => {
    cy.visit("http://localhost:3000/Checkout");
    cy.get("input[id=name]").click();
    cy.get("input[id=email]").click();
    cy.get("input[id=phone]").click();
    cy.get("input[id=addres]").click();
    cy.get("input[id=zipcode]").click();
    cy.get("input[id=city]").click();
    cy.get("input[id=country]").click();
    cy.get("input[id=name]").click();
    cy.contains("Field cant be empty");
    cy.contains("write valid email");
    cy.contains("write valid phone number");
    cy.contains("write valid addres");
    cy.contains("Write valid ZIP CODE");
    cy.contains("Write valid city");
    cy.contains("Write valid country");
  });
});
