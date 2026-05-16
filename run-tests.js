const { exec } = require('child_process');

exec('npx cucumber-js features/01-login.feature features/02-compra.feature --format progress --format html:reports/cucumber-report.html --format json:reports/cucumber-report.json', (error, stdout, stderr) => {
  console.log(stdout);

  if (error) {
    console.error(`Error: ${error.message}`);
    return;
  }


  exec('start reports/cucumber-report.html');
});