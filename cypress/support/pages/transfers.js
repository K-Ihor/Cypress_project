export class Transfers {

    typeReceiverCard(receiverCard){
        cy.get('[data-qa-node="numberreceiver"]')
        .type(receiverCard)
    }

    checkWarningMassege(warningMassege){
        // Ищем элемент, содержащий указанный текст
        cy.contains(warningMassege);
    }   

}

export const transfer = new Transfers()