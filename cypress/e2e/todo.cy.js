describe('Test sencillo TodoMVC', () => {

it('crear una tarea', () => {

    ImageTrack('crear una tarea en la lista', () => {
        cy.visit('https://todomvc.com/examples/react/dist/')
        cy.get('.new-todo').type('tarea1{ENTER}')
        cy.get('.todo-list').contains('tarea1')
    })
})

})
