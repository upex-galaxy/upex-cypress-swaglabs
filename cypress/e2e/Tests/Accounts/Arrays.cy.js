describe ('recorrido de array',()=>{

    it('Test 1',()=>{
        const array = ['A','B','C','D']
        
        expect(array[2]).equal('C')
        const cantidad = array.length
        
        for(i=0; i <= cantidad; i++){
            if (array[i] === 'C'){
                cy.log(array[i])
                cy.log('Ha encontrado el elemento C')
                break
            }      
        }

    })


    it.only('Test 2',()=>{
        cy.visit('https://demo.testim.io/')
        cy.get('[data-react-toolbox="card"]').eq(0).should('contain.text','MadanPraesent')
        cy.get('[data-react-toolbox="card"]').then((Items)=>{
            cy.log(Items)
            cy.wrap(Items).eq(0).should('contain.text','MadanPraesent')
            cy.wrap(Items).each((Element)=>{
                if(Element.text().includes('FlagstaffSed')){
                    cy.log(Element)
                }

            })
        })
        


    })
})