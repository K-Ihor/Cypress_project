export class ArchivePage{
    selectArchiveMenu(){
        cy.get('[title="Archive"]')
        .click()
    }
}

export const archivePage = new ArchivePage()