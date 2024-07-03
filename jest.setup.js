const { execSync } = require('child_process');

// Path to your bash script
const scriptPath = '.learn/assets/report_linux.sh';

// Execute the bash script
try {
  execSync(`bash ${scriptPath}`, { stdio: 'inherit' });
  console.log('Bash script executed successfully.');
} catch (error) {
  throw `Error executing bash script.
  
  ${error.toString()}`;
}
