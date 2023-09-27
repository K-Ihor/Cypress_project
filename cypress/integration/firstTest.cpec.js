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


it('Exemple GET request', () =>  {
    cy.request('https://next.privat24.ua')
        .then((response)=>{
            console.log(response);
        })
})


it.only('Exemple POST request', () =>  {

    const requestBody = {
        "amount":200,
        "phone":"+380686979712",
        "cardCvv":"111",
        "cardExp":"0524",
        "card":"4552331448138217",
        "action":"info",
        "xref":"6c94f9599b420bca3d8bfcbcf42a3cdd",
        "_":1695832997257
    };

    const headersData = {
        cookie:
        '_gcl_au=1.1.257437460.1694957864; _fbp=fb.1.1694957864466.539974661; lsl=1; theme=light; _gid=GA1.2.2055984008.1695751007; pubkey=62df0097a53a8c521f5a641163e6693d; _ga=GA1.2.1182981250.1694957864; lfp=9/17/2023, 4:37:49 PM; pa=1695751011745.08370.6221533765041669next.privat24.ua0.7940169877501957+3; fp=41; _ga_G0T18XQY2T=GS1.1.1695832696.24.1.1695832725.31.0.0',
    }

    cy.request({
        method: 'POST',
        url: 'https://next.privat24.ua/api/p24/pub/mobipay',
        body:requestBody,
        headers:headersData
    })
        .then((response)=>{
            console.log(response.body);
        })
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

