/// <reference types="Cypress" />
import { basePage } from "../support/pages/BasePage"
import { mobilePhoneReplenishment } from "../support/pages/moileReplenishment"
import { transfer } from "../support/pages/transfers"

it('Replenishment of Ukrain mobile phone namber', ()=>{
    basePage.open('https://next.privat24.ua/mobile?lang=en')
    mobilePhoneReplenishment.typePhoneNumber('686979712')
    basePage.typeAmount('1')
    basePage.typeDebitCardData('4552331448138217', '0524', '111')
    cy.wait(3000)
    basePage.submitPayment()
    mobilePhoneReplenishment.checkDebitCard('4552 **** **** 8217')
    mobilePhoneReplenishment.checkDebitAmount('1 201')
    mobilePhoneReplenishment.checkDebitComission('4')
    mobilePhoneReplenishment.checkPaymentCurrency('UAH')
    mobilePhoneReplenishment.checkComissionCurrency('UAH')
})



it('Money transfer brtween foreign cards', ()=>{
    basePage.open('https://next.privat24.ua/money-transfer/card?lang=en')
    basePage.typeDebitCardData('4552331448138217', '0524', '111')
    transfer.typeReceiverCard('5309233034765085')
    basePage.typeAmount('300')
    cy.wait(2000)
    basePage.submitPayment
    transfer.checkWarningMassege('Тимчасово перекази з картки можна здійснювати лише після входу в Приват24')
})






























// // type

// it('type', ()=>{
//     cy.visit('https://next.privat24.ua/mobile?lang=en')
//         .get('[data-qa-node="phone-number"]')
//         .type(112233344)
// })

// it('focus', ()=>{
//     cy.visit('https://next.privat24.ua/mobile?lang=en')
//         .get('[data-qa-node="amount"]')
//         .focus()
//         .clear()
//         .type(200)
// })

// it('submit', ()=>{
//     cy.visit('https://next.privat24.ua/mobile?lang=en')
//         .get('form[method="post"]')
//         .submit() // только для форм    
// })

// it('click', ()=>{
//     cy.visit('https://next.privat24.ua/mobile?lang=en')
//         .get('[data-qa-value="manual"]')
//         .click()
// })


// it('rightclick', ()=>{
//     cy.visit('https://example.cypress.io/commands/actions')
//         .contains('Right click to edit')
//         .rightclick()
// })


// it('dblclick', ()=>{
//     cy.viewport(1800, 1200)
//     cy.visit('https://developer.mozilla.org/en-US/docs/Web/API/Element/dblclick_event')
//         .contains('My Card')
//         .dblclick({force: true})
// })

// it('check', ()=>{
//     cy.viewport(1800, 1200)
//     cy.visit('https://www.facebook.com/r.php?')
//         .get('input[value="2"]')
//         .check
// })

// it('uncheck', ()=>{
//     cy.viewport(1800, 1200)
//     cy.visit('https://privatbank.ua/')
//         .get('#switch-input')
//         .check({force: true})
//         .wait(2000)
//         .uncheck({force: true})
// })


// it('uncheck', ()=>{
//     cy.viewport(1800, 1200)
//     cy.visit('https://www.facebook.com/r.php?locale=en_US')
//         .get('#month')
//         .select('Feb')
//         .get('#day')
//         .select('12')
//         .get('#year')
//         .select('1991')

// })

// it('scrollIntoView', ()=>{
//     cy.viewport(1800, 1200)
//     cy.visit('https://next.privat24.ua/')
//         .get('[data-qa-node="lang"]')
//         .wait(2000)
//         .scrollIntoView()

// })


// it.only('scrollTo', ()=>{
//     cy.viewport(1800, 1200)
//     cy.visit('https://next.privat24.ua/')
//         .wait(2000)
//         .scrollTo(0, 500)

// })

// it.only('trigger', ()=>{
//     cy.viewport(1800, 1200)
//     cy.visit('https://next.privat24.ua/?lang=en')
//         .contains('Services')
//         .wait(2000)
//         .trigger('mouseover')
// })

