export class BasePage{

    open(url){
        cy.visit(url);
    }

    typeDebitCardData(cardData, expDate, cvv){
        cy.get('[data-qa-node="numberdebitSource"]')
            .type(cardData)
            .get('[data-qa-node="expiredebitSource"]')
            .type(expDate)
            .get('[data-qa-node="cvvdebitSource"]')
            .type(cvv)
    }
    
    typeAmount(amount){
        cy.get('[data-qa-node="amount"]')
            .type(amount)
    }

    submitPayment(){
        cy.get('[data-qa-node="submit"]')
            .click()
    }

}

export const basePage = new BasePage() 