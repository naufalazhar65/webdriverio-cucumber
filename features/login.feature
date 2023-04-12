Feature: Login functionality

  As a user
  I want to be able to login to the website
  So that I can access the product page

  Scenario: Successful login with valid credentials
    Given user is on login page
    When user enters valid username and password
    And click login button
    Then user is navigated to product page

  Scenario: Failed login with invalid credentials
    Given user is on login page
    When user enters invalid username and password
    And click login button
    Then error message is displayed







# Feature: Test login

#   Scenario Outline: Check login with valid credentials
#     Given user is on login page
#     When user enters <username> and <password>
#     And click login button
#     Then this <message> is displayed

#     Examples: 
#       | username | password             | message                        |
#       | tomsmith | SuperSecretPassword! | You logged into a secure area! |

#   Scenario Outline: Check login with invalid credentials
#     Given user is on login page
#     When user enters <username> and <password>
#     And click login button
#     Then this <message> is displayed

#     Examples: 
#       | username | password | message                   |
#       | user123  | pass123  | Your username is invalid! |
      