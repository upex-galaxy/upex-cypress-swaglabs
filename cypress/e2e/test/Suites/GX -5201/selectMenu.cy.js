describe("US GX-5201 | TS: ✅ToolsQA | Widgets | Dropdown - Select Menu", () => {
    beforeEach('visit ', () => {
        cy.visit('https://demoqa.com/select-menu')
        cy.url().should('contain','select-menu')
    })

    it('select value', () => {
        
    cy.get('[class*="1hwfws3"]').eq(0).click()
    })

    it('Select One', () => {
        

    })

    it('Old Style Select Menu', () => {
        

    })

    it('Multiselect drop down', () => {
        

    })

    it('Standard multi select', () => {
        

    })


})