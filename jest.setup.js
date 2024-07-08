const { execSync } = require('child_process');
const path = require('path');

// // Path to your report file
const reportFilePath = path.join(__dirname, 'windows_report.txt');

// Execute the windows_report.txt
try {
  execSync(`echo "Contents of windows_report.txt:"`);
  execSync(`type "${reportFilePath}"`, { stdio: 'inherit' }); 
  console.log('Bash script executed successfully.');
} catch (error) {
  throw new Error(`Error executing the bash script.\n\n${error.toString()}`);
}
