import { test } from "@playwright/test";

test("Launch Salesforce Application", async({page}) => { 
    
   await page.goto('https://login.salesforce.com');
   await page.locator('#username').fill('chithrapw2025148@agentforce.com');
   await page.locator('#password').fill('Chithrajobs@123');
   await page.locator('#Login').click();
   await page.waitForTimeout(10000);
   console.log(await page.url());
   console.log(await page.title());
   await page.close();

   })