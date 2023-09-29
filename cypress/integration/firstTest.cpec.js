/// <reference types="Cypress" />
import { basePage } from "../support/pages/BasePage"
import { archivePage } from "../support/pages/archive";
import { mobilePhoneReplenishment } from "../support/pages/moileReplenishment"
import { transfer } from "../support/pages/transfers"

// MOCK and STUB
// beforeEach('setou success respons with stub', ()=> {
//     cy.intercept('https://next.privat24.ua/api/p24/pub/confirm/check?', // MOCK
//     {fixture: 'confirmResponse/success.json'} )

//     cy.intercept('https://next.privat24.ua/history/transactions',
//     {fixture: 'archiveResponse/success.json'} )
// })

it.only('check succes state of payment in the archive | public session', ()=> {
//     cy.intercept('https://next.privat24.ua/history/transactions',  // Можем указывать в самом тесте для перехвата
//     {fixture: 'archiveResponse/success.json'})
//      })


    basePage.open('https://next.privat24.ua?lang=en');
        archivePage.selectArchiveMenu()
})

it.skip('check error state of payment in the archive | public session', ()=> {
    //     cy.intercept('https://next.privat24.ua/history/transactions',  // Можем передать ошибку
    //     {fixture: 'archiveResponse/error.json'})
    //      })
    
    
        basePage.open('https://next.privat24.ua?lang=en');
            archivePage.selectArchiveMenu()
    })


it.skip('Replenishment of Ukrain mobile phone namber', ()=>{
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
    cy.contains('Pay')
        .click()
})



it.skip('Money transfer brtween foreign cards', ()=>{
    basePage.open('https://next.privat24.ua/money-transfer/card?lang=en')
    basePage.typeDebitCardData('4552331448138217', '0524', '111')
    transfer.typeReceiverCard('5309233034765085')
    basePage.typeAmount('300')
    cy.wait(2000)
    basePage.submitPayment
    transfer.checkWarningMassege('Тимчасово перекази з картки можна здійснювати лише після входу в Приват24')
})


it.skip('Exemple GET request', () =>  {
    cy.request('https://next.privat24.ua')
        .then((response)=>{
            console.log(response);
        })
})


it.skip('Exemple POST request with "expect" verification', () =>  {

    const requestBody = {
        "amount":200,
        "phone":"+380686979712",
        "cardCvv":"111",
        "cardExp":"0524",
        "card":"4552331448138217",
        "action":"info",
        "xref":"6c94f9599b420bca3d8bfcbcf42a3cdd",  // не забываем обновить индификатор сессии !!!
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
        headers:headersData  // не забываем обновить cookie!!!!!
    })
        .then((response)=>{
            expect(response).to.have.property('status').to.equal(200)
            expect(response.body).to.have.property('status').to.equal('success')
            expect(response.body.data).to.have.property('amount').to.equal('200.0')

            // если data это масив то далее во вложенность можно лезьть по индексу
            // expect(response.body.data[i]).to.have.property('amount').to.equal('200.0')
            console.log(response);
        })
})




it.skip('Exemple POST request with "should" verification', () =>  {

    const requestBody = {
        "amount":200,
        "phone":"+380686979712",
        "cardCvv":"111",
        "cardExp":"0524",
        "card":"4552331448138217",
        "action":"info",
        "xref":"a15acbf536d6ae12fbf6e61094b230d6",  // не забываем обновить индификатор сессии !!!
        "_":1695832997257
    };

    const headersData = {
        cookie:
        '_gcl_au=1.1.257437460.1694957864; _fbp=fb.1.1694957864466.539974661; lsl=1; theme=light; _gid=GA1.2.2055984008.1695751007; pubkey=5a05e80a06f5a49a89d8484fbe3e8c15; _ga=GA1.2.1182981250.1694957864; fp=48; lfp=9/17/2023, 4:37:49 PM; pa=1695751011745.08370.6221533765041669next.privat24.ua0.7940169877501957+6; _ga_G0T18XQY2T=GS1.1.1695836952.25.1.1695837132.60.0.0; _gat_gtag_UA_29683426_11=1',
    }

    cy.request({
        method: 'POST',
        url: 'https://next.privat24.ua/api/p24/pub/mobipay',
        body:requestBody,
        headers:headersData  // не забываем обновить cookie!!!!!
    }).its('body').should('contain', {
        status: 'success'
    }).its('data').should('contain', {  // проваливаемся по структуре к элементу data
        status: 'ok'
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

