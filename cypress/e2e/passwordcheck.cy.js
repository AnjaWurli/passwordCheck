/// <reference types="cypress"/>

/*Passwords are equal
  - [ ] Password contains at least one lower case character
  - [ ] Password contains at least one upper case character
  - [ ] Password contains at least one number
  - [ ] Passwort is at least 10 characters long
  */

describe("password Check", () => {
  beforeEach(() => {
    cy.visit("http://localhost:3000");
  });

  it("passwords are not equal", () => {
    cy.get("[data-cy='input1']").type("1234567891");
    cy.get("[data-cy='input2']").type("1234567890");
    cy.get("[data-cy='equal']").should("have.text", "❌");
  });

  context("with equal passwords", () => {
    beforeEach(() => {
      cy.get("[data-cy='input1']").type("123456789");
      cy.get("[data-cy='input2']").type("123456789");
    });

    it("passwords are equal", () => {
      cy.get("[data-cy='equal']").should("have.text", "✅");
    });
    it("passwords dont contain lower letter", () => {
      cy.get("[data-cy='low']").should("have.text", "❌");
    });
    it("passwords dont contain upper letter", () => {
      cy.get("[data-cy='up']").should("have.text", "❌");
    });
    it("passwords shorter than 10 characters", () => {
      cy.get("[data-cy='long']").should("have.text", "❌");
    });
  });

  it("passwords contain lower letter", () => {
    cy.get("[data-cy='input1']").type("aaaaaaaaaa");
    cy.get("[data-cy='input2']").type("aaaaaaaaaa");
    cy.get("[data-cy='low']").should("have.text", "✅");
    cy.get("[data-cy='up']").should("have.text", "❌");
    cy.get("[data-cy='num']").should("have.text", "❌");
  });

  it("passwords contain upper letter", () => {
    cy.get("[data-cy='input1']").type("AAAAAAAAAA");
    cy.get("[data-cy='input2']").type("AAAAAAAAAA");
    cy.get("[data-cy='up']").should("have.text", "✅");
    cy.get("[data-cy='low']").should("have.text", "❌");
    cy.get("[data-cy='num']").should("have.text", "❌");
  });

  it("passwords contain number", () => {
    cy.get("[data-cy='input1']").type("1234567890");
    cy.get("[data-cy='input2']").type("1234567890");
    cy.get("[data-cy='num']").should("have.text", "✅");
    cy.get("[data-cy='up']").should("have.text", "❌");
    cy.get("[data-cy='low']").should("have.text", "❌");
  });
  it("passwords is minimum 10 characters long", () => {
    cy.get("[data-cy='input1']").type("1234567890");
    cy.get("[data-cy='input2']").type("1234567890");
    cy.get("[data-cy='long']").should("have.text", "✅");
    cy.get("[data-cy='up']").should("have.text", "❌");
    cy.get("[data-cy='low']").should("have.text", "❌");
  });

  it("passwords are perfect", () => {
    cy.get("[data-cy='input1']").type("123456-aA0");
    cy.get("[data-cy='input2']").type("123456-aA0");
    cy.get("[data-cy='equal']").should("have.text", "✅");
    cy.get("[data-cy='long']").should("have.text", "✅");
    cy.get("[data-cy='up']").should("have.text", "✅");
    cy.get("[data-cy='low']").should("have.text", "✅");
    cy.get("[data-cy='num']").should("have.text", "✅");
    cy.get("[data-cy='spec']").should("have.text", "✅");
  });
});
