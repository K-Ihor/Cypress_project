/// <reference types="Cypress" />

it('name_test', ()=> {
    cy.visit('https://next.privat24.ua/mobile?lang=en')
    cy.contains('Sign in')
})

it('', ()=> {
    cy.visit('https://next.privat24.ua/mobile?lang=en')
    cy.contains('div', 'Sign in')
})

it('', ()=> {
    cy.visit('https://next.privat24.ua/mobile?lang=en')
    cy.contains('SIGN IN', {matchCase: false})  // без учета регистра
})


it.only('', ()=> {
    cy.visit('https://next.privat24.ua/mobile?lang=en')
    cy.get('footer').contains('for incomming calls from abroad')
})

