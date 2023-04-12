Feature: Product Sort Container
  As a user
  I want to be able to sort the products
  So that I can easily find the product I want

  Scenario: Sort products by name (Z to A)
    Given user is on the inventory page
    When user selects "Name (Z to A)" option from the product sort container Z-A
    Then the products are displayed in alphabetical order (Z to A)

  Scenario: Sort products by name (A to Z)
    # Given user is on the inventory page
    When user selects "Name (A to Z)" option from the product sort container A-Z
    Then the products are displayed in alphabetical order (A to Z)

  Scenario: Sort products by price (low to high)
    # Given user is on the inventory page
    When user selects "Price (low to high)" option from the product sort container DSC
    Then the products are displayed in ascending order based on price

  Scenario: Sort products by price (high to low)
    # Given user is on the inventory page
    When user selects "Price (high to low)" option from the product sort container ASC
    Then the products are displayed in descending order based on price
