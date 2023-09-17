/// <reference types="Cypress" />


// describe("Mob phone replenishment", () => {

//     AudioContext("Replenishment less then the allowed amount", () => {
//         it("Show error: Minimum amount 1 UAH", () => {});
//     });
    
// });

// it("By id", ()=>{
//     cy.visit("https://facebook.com/")
//     cy.get('#email')
// })

// it("By class", ()=>{
//     cy.visit("https://docs.cypress.io/api/commands/and")
//     cy.get('.DocSearch-Button-Placeholder')
// })

// it("By Tag", ()=>{
//     cy.visit("https://docs.cypress.io/api/commands/and")
//     cy.get('nav')
// })

// it("By Tag value", ()=>{
//     cy.visit("https://facebook.com/")
//     cy.get('[name="pass"]')
// })

// it("By Diffend Tag", ()=>{
//     cy.visit("https://facebook.com/")
//     cy.get('[data-testid="open-registration-form-button"][role="button"]')
// })

// it("By Diffend Types", ()=>{
//     cy.visit("https://docs.cypress.io/api/commands/and")
//     cy.get('button[type="button"][aria-label="Close"]')
// })

// it.only("By Contains name", ()=>{
//     cy.visit("https://next.privat24.ua/")
//     cy.get('*[class^="card"]')
// })

it("Using Get with Find and Eq", ()=>{
    cy.visit("https://next.privat24.ua/deposit/open")
    cy.get('tbody').find('td').find('div').find('button').eq(0)
})

it.only("Using Get with Find and Eq", ()=>{
    cy.viewport(1800, 1200)
    cy.visit("https://docs.cypress.io/api/commands/and")
    cy.get('[class="table-of-contents table-of-contents__left-border"]').
    find('li').eq(0).find('a').eq(0)
})