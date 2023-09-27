export class MobilePhoneReplenishment{
    typePhoneNumber(phoneNumber){
        cy.get('[data-qa-node="phone-number"]')
            .type(phoneNumber)
    }

    checkDebitCard(debitCard){
        cy.get('[data-qa-node="card"]')
            .should('have.text', debitCard)
    }

    checkDebitAmount(debitAmount){
        cy.get('[data-qa-node="amount"]')
            .should('contain.text', debitAmount)
    }

    checkDebitComission(debitComission){
        cy.get('[data-qa-node="commission"]')
            .should('contain.text', debitComission)
    }

    checkPaymentCurrency(paymentCurrency){
        cy.get('[data-qa-node="amount"]')
            .should('contain.text', paymentCurrency)
    }

    checkComissionCurrency(comissionCurrency){
        cy.get('[data-qa-node="commission-currency"]')
            .should('contain.text', comissionCurrency)
    }

}

export const mobilePhoneReplenishment = new MobilePhoneReplenishment()

