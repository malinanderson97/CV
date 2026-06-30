const puppeteer = require('puppeteer-core');
const path = require('path');

(async () => {
  try {
    const browser = await puppeteer.launch({
      executablePath: 'C:\\Program Files (x86)\\Microsoft\\Edge\\Application\\msedge.exe',
      headless: 'new'
    });
    const page = await browser.newPage();
    
    await page.setViewport({ width: 794, height: 1123, deviceScaleFactor: 2 });
    
    const filePath = 'C:/Users/Admin/Documents/CV/Working CV Folder/pdf_layout.html';
    const fileUri = 'file:///' + filePath.replace(/\\/g, '/');
    
    await page.goto(fileUri, {waitUntil: 'networkidle0'});
    
    await page.pdf({ 
        path: 'C:/Users/Admin/Documents/CV/Working CV Folder/Malin_Anderson_CV_Designed.pdf', 
        format: 'A4', 
        printBackground: true,
        margin: { top: '0', right: '0', bottom: '0', left: '0' }
    });
    
    await browser.close();
    console.log('PDF generated successfully!');
  } catch (err) {
    console.error('Error generating PDF:', err);
  }
})();
