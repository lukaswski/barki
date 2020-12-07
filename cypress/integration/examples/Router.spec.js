/// <reference types="Cypress" />;

const url = "http://localhost:3000";

describe("Router test", () => {
  it("test router path", () => {
    cy.visit(url);
    cy.get('[href="/about"]').click();
    cy.get(':nth-child(1) > .sc-AxjAm').contains('Rozwiązanie, którego szukałeś');
    cy.get('[href="/prices"]').click();
    cy.get(':nth-child(1) > .mt-4').contains('Ile kosztuje obroża?');
    cy.get('[href="/contact"]').click();
    cy.get('.col-md-5').contains('Poznajmy się');
    cy.get('.form-inline > .sc-AxgMl').click();
    cy.get('.notLoggedTitle').contains('Psia kość! Nie jesteś zalogowany...');
    cy.get('.mr-2').contains("Logowanie");
    cy.get('.mr-2').click();
    cy.get('.sc-fzokOt').contains('Logowanie do konta')
    cy.get('.mr-2').click();
    cy.get('.sc-fzokOt').contains('Rejestracja nowego konta');
    cy.get(':nth-child(5) > :nth-child(3) > a').click();
    cy.get('.container').contains('Regulamin używania obroży Barki');
    cy.get('.logo').click();
    cy.get('.sc-fzozJi').contains('Jedyna skuteczna obroża antyszczekowa');
    cy.get('.col-lg-6 > :nth-child(1) > a').click();
    cy.get('#root > :nth-child(2)').contains('Najczęstrze pytania:')
    cy.get('.logo').click();
    cy.get('.sc-fzoLsD').click();
    cy.get('.sc-fznxsB > :nth-child(3) > :nth-child(1)').contains("wiek");
    cy.get('.mr-2').contains('Wyloguj się');
    cy.get('.mr-2').click();
    cy.get('.sc-fzokOt').contains('Logowanie do konta');

  });
});

