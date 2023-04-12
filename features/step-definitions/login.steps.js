const { Given, When, Then } = require("@wdio/cucumber-framework");

Given(/^user is on login page$/, async () => {
  await browser.url("https://www.saucedemo.com/");
});

When(/^user enters valid username and password$/, async () => {
  await $('#user-name').setValue('standard_user')
  await $('#password').setValue('secret_sauce')
});

When(/^user enters invalid username and password$/, async () => {
  await $('#user-name').setValue('invalid_user')
  await $('#password').setValue('invalid_password')
});

When(/^click login button$/, async () => {
  await $('input[type="submit"]').click();
});

Then(/^user is navigated to product page$/, async () => {
  await expect($('span[class="title"]')).toHaveTextContaining('Products')
});

Then(/^error message is displayed$/, async () => {
  await expect($('h3[data-test="error"]')).toHaveTextContaining('Username and password do not match any user in this service')
});