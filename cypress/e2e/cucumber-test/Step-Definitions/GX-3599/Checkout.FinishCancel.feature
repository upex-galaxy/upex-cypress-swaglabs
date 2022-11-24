Feature: ✅SwagLabs | Checkout | Finalizar o Cancelar la compra de un producto en la Website

    Background: 
        Given user must be logged in
        And user must add some items to Cart at least
        And user must complete the checkout process until step-two

    @TS_GX-3600
    Scenario: 3600 | TC1: Check Finish Checkout button when there are multiple added items.
        When user clicks on the Finish as "Finish" button
        Then user should visit the final stage complete checkout page
        And items should be bought and they should not be on cart any more

    @TS_GX-3600
    Scenario: 3600 | TC2: Check Cancel Checkout button when there are multiple added items.
        When user clicks on the Cancel as "Cancel" button
        Then user should go back to the product list page 
        And items should keep added to the cart