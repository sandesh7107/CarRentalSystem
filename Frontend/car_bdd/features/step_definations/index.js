const { expect } = require("chai");
const { Given, When, Then, Before, After } = require("@cucumber/cucumber");
const { Builder, By, Key, until, sleep } = require("selenium-webdriver");
const { delay } = require("../utils/delay");

Given("Test registration functionality", { timeout: 30000 }, async function () {
  let driver = await new Builder().forBrowser("chrome").build();
  await driver.get("http://localhost:3000/register");
  await driver.findElement(By.id("fname")).sendKeys("test");
  await driver.findElement(By.id("lname")).sendKeys("test");
  await driver.findElement(By.id("username")).sendKeys("test1");
  await driver.findElement(By.id("email")).sendKeys("test1@gmail.com");
  await driver.findElement(By.id("password")).sendKeys("test1234");
  await driver.sleep(delay);
  await driver.findElement(By.id("signup")).click();

  // await driver.quit();
});

Given("Test login functionality", { timeout: 100000 }, async function () {
  let driver = await new Builder().forBrowser("chrome").build();
  await driver.get("http://localhost:3000/login");
  await driver.findElement(By.id("username")).sendKeys("test1");
  await driver.findElement(By.id("password")).sendKeys("test1234");
  await driver.sleep(delay);  
  await driver.findElement(By.id("login")).click();

  
  // await driver.quit();
});

Given("Test add profile functionality", { timeout: 30000 }, async function () {
  let driver = await new Builder().forBrowser("chrome").build();
  await driver.get("http://localhost:3000/profile");
  await driver.findElement(By.id("name")).sendKeys("testprofile");
  await driver.findElement(By.id("phone")).sendKeys("12345");
  await driver.findElement(By.id("address")).sendKeys("anamnagar");
  await driver.findElement(By.id("dob")).sendKeys("3/15/2022");
  
  await driver.sleep(delay);  
  await driver.findElement(By.id("profile")).click();

  
 



  
  
  // await driver.quit();
});


Given("Test add Workers functionality", { timeout: 30000 }, async function () {
  let driver = await new Builder().forBrowser("chrome").build();
  await driver.get("http://localhost:3000/addcook");
  await driver.findElement(By.id("firstname")).sendKeys("testworkers");
  await driver.findElement(By.id("lastname")).sendKeys("banjara ");
  await driver.findElement(By.id("phone")).sendKeys("9865363101");
  await driver.findElement(By.id("address")).sendKeys("anamnagar");
  await driver.findElement(By.id("age")).sendKeys("22");
  
  await driver.sleep(delay);  
  await driver.findElement(By.id("worker")).click();

  




  
  
  // await driver.quit();
});


