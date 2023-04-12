const { Given, When, Then } = require("@wdio/cucumber-framework");

Given(/^user is on the inventory page$/, async () => {
  await browser.url("https://www.saucedemo.com/inventory.html");
  await $("#user-name").setValue("standard_user");
  await $("#password").setValue("secret_sauce");
  await $('input[type="submit"]').click();
  await expect(browser).toHaveUrlContaining("/inventory.html");
});

When(/^user selects "([^"]*)" option from the product sort container Z-A$/, async (sortOption) => {
  await $(".product_sort_container").click();
  await $("//option[@value='za']").click();
  await browser.pause(2000);
});

When(/^user selects "([^"]*)" option from the product sort container A-Z$/, async (sortOption) => {
  await $(".product_sort_container").click();
  await $("//option[@value='az']").click();
  await browser.pause(2000);
});

When(/^user selects "([^"]*)" option from the product sort container DSC$/, async (sortOption) => {
  await $(".product_sort_container").click();
  await $("//option[@value='lohi']").click();
  await browser.pause(2000);
});

When(/^user selects "([^"]*)" option from the product sort container ASC$/, async (sortOption) => {
  await $(".product_sort_container").click();
  await $("//option[@value='hilo']").click();
  await browser.pause(2000);
});

Then(/^the products are displayed in alphabetical order \(Z to A\)$/, async () => {
  const products = await $$(".inventory_item_name");
  const firstProduct = await products[0].getText();
  const lastProduct = await products[products.length - 1].getText();
  const compareResult = firstProduct.localeCompare(lastProduct, 'en', { sensitivity: 'base' });
  await expect(compareResult).toBeGreaterThan(-1);
});

Then(/^the products are displayed in alphabetical order \(A to Z\)$/, async () => {
  const products = await $$(".inventory_item_name");
  expect(products.length).toBeGreaterThan(0);
  const firstProduct = await products[0].getText();
  const lastProduct = await products[products.length - 1].getText();
  const compareResult = firstProduct.localeCompare(lastProduct, 'en', { sensitivity: 'base' });
  expect(compareResult).toBeLessThan(0);
});

Then(/^the products are displayed in ascending order based on price$/, async () => {
  const productPrices = await $$(".inventory_item_price");
  const pricesArr = await Promise.all(productPrices.map(async (price) => {
    const rawPrice = await price.getText();
    return Number(rawPrice.replace('$', ''));
  }));
  const sortedPrices = [...pricesArr].sort((a, b) => a - b);
  expect(pricesArr).toEqual(sortedPrices);
});

Then(/^the products are displayed in descending order based on price$/, async () => {
  const productPrices = await $$(".inventory_item_price");
  const pricesArr = await Promise.all(productPrices.map(async (price) => {
    const rawPrice = await price.getText();
    return Number(rawPrice.replace('$', ''));
  }));
  const sortedPrices = [...pricesArr].sort((a, b) => b - a);
  expect(pricesArr).toEqual(sortedPrices);
});