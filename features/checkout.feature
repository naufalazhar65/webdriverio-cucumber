Feature: Checkout

  Scenario: Successful Checkout
    Given user is logged in to the website
    When user adds an item to the cart
    And user proceeds to checkout
    And user enters shipping information
    And user places the order
    Then user sees the order confirmation page

  Scenario: Unsucccessful Checkout
    Given user is logged in to the website
    When user adds an item to the cart
    And user proceeds to checkout
    And user enters invalid shipping information
    Then user sees the error message
