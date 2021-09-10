Feature: Swag Labs - Auth

  Scenario Outline: As a user, I can log into the secure area

    Given I am on the login page
    When I login with <username> and <password>
    Then I should see <page> page

    Examples:
      | username      | password      | page      |
      | standard_user | secret_sauce  | PRODUCTS  |
