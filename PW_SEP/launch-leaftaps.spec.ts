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
   await page.locator('//a[text()="Create Lead"]').click();
   await page.locator('#createLeadForm_companyName').fill('HCL');
   await page.locator('#createLeadForm_firstName').fill('chithra');
   await page.locator('#createLeadForm_lastName').fill('velayutham');

   await page.locator('#createLeadForm_personalTitle').fill('PW-Learning');
   await page.locator('#createLeadForm_generalProfTitle').fill('Testleaf');
   await page.locator('#createLeadForm_annualRevenue').fill('10000');
   await page.locator('#createLeadForm_departmentName').fill('Admin');
   await page.locator('#createLeadForm_primaryPhoneNumber').fill('0987654321');
   await page.locator('//input[@class="smallSubmit"]').click();
   console.log('Current URL:' ,page.url());

   await browser.close();
 })