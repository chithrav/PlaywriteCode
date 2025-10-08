import { chromium, test } from "@playwright/test";
test("Test to launch a browser", async({}) => { 

    const browser = await chromium.launch({ headless: false });
    const context = await browser.newContext();
    const page = await context.newPage();

   await page.goto(`http://leaftaps.com/opentaps/control/main`);
   await page.locator(`#username`).fill(`demosalesmanager`);
   await page.locator(`#password`).fill(`crmsfa`);
   await page.locator('//input[@class="decorativeSubmit"]').click();
   await page.waitForTimeout(10000)
   console.log('Current URL:', page.url());
   await page.locator('//a[contains(text(),"CRM")]').click();
   await page.locator('//a[text()="Leads"]').click();
   await page.locator('//a[text()="Find Leads"]').click();
   await page.waitForTimeout(5000)
   await page.locator('//input[@name="id"]').fill("11380");  
   await page.locator('//button[text()="Find Leads"]').click(); 
   await page.locator('//a[text()="11380"]').click();
   await page.locator('//a[text()="Edit"]').click();
   await page.locator('#updateLeadForm_companyName').clear();
   await page.locator('#updateLeadForm_companyName').fill("HCL Tech");
   await page.locator('#updateLeadForm_annualRevenue').clear();
   await page.locator('#updateLeadForm_annualRevenue').fill("30000");
   await page.locator('#updateLeadForm_departmentName').clear();
   await page.locator('#updateLeadForm_departmentName').fill("Admin");
   await page.locator('#updateLeadForm_description').fill("Lead edited");
   await page.locator('(//input[@name="submitButton"])[1]').click();
   console.log("updated successflly");
   //await page.waitForTimeout(5000)
  
   const updatetitle= await page.title();
   console.log('Page title is:${updatetitle}');
   
   //await browser.close();

})