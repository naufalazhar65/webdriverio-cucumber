const { Given, When, Then } = require("@wdio/cucumber-framework");

Given(/^user is logged in to the website$/, async () => {
  await browser.url("https://www.saucedemo.com/");
  await $("#user-name").setValue("standard_user");
  await $("#password").setValue("secret_sauce");
  await $('input[type="submit"]').click();
  await expect(browser).toHaveUrlContaining("/inventory.html");
});

When(/^user adds an item to the cart$/, async () => {
  await $('button[data-test="add-to-cart-sauce-labs-backpack"]').click();
  await expect($('span[class="shopping_cart_badge"]')).toHaveText("1");
});

When(/^user proceeds to checkout$/, async () => {
  await $('a[class="shopping_cart_link"]').click();
  await expect(browser).toHaveUrlContaining("/cart.html");
  await $('button[id="checkout"]').click();
  await expect(browser).toHaveUrlContaining("/checkout-step-one.html");
});

When(/^user enters shipping information$/, async () => {
  await $("#first-name").setValue("John");
  await $("#last-name").setValue("Doe");
  await $("#postal-code").setValue("12345");
  await $("#continue").click();
});

When(/^user enters invalid shipping information$/, async () => {
    await $("#first-name").setValue("");
    await $("#last-name").setValue("");
    await $("#postal-code").setValue("");
    await $("#continue").click();
});

When(/^user places the order$/, async () => {
  await $("#finish").click();
});

Then(/^user sees the order confirmation page$/, async () => {
  await expect(browser).toHaveUrlContaining("/checkout-complete.html");
  await expect($('h2')).toHaveText("Thank you for your order!");
});

Then(/^user sees the error message$/, async () => {
  await expect($('h3')).toHaveText("Error: First Name is required");
});
