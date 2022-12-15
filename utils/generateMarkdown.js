// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  //choices: ["None", "MIT", "Apache", "GNU"],
  //console.log(license);
  switch (license) {
    case "None":
      return "";
    case "MIT":
      return "![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)";

    case "Apache":
      return "![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)";
    case "IBM":
      return `![License: IPL 1.0](https://img.shields.io/badge/License-IPL_1.0-blue.svg)`;
    case "ISC":
      return `![License: ISC](https://img.shields.io/badge/License-ISC-blue.svg)`;
    default:
      return "not found";
  }
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  switch (license) {
    case "None":
      return "";
    case "MIT":
      return `https://opensource.org/licenses/MIT`;
    case "Apache":
      return `https://opensource.org/licenses/Apache-2.0`;
    case "IBM":
      return `https://opensource.org/licenses/IPL-1.0`;
    case "ISC":
      return `https://opensource.org/licenses/ISC`;
    default:
      return "not found";
  }
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  switch (license) {
    case "None":
      return "";
    case "MIT":
      return `[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)`;
    case "Apache":
      return "[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)";
    case "IBM":
      return `[![License: IPL 1.0](https://img.shields.io/badge/License-IPL_1.0-blue.svg)](https://opensource.org/licenses/IPL-1.0)`;
    case "ISC":
      return `[![License: ISC](https://img.shields.io/badge/License-ISC-blue.svg)](https://opensource.org/licenses/ISC)`;
    default:
      return "not found";
  }
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}           ${renderLicenseBadge(data.license)}

## Description

${data.description}

## Table of Contents 

- [Installation](#installation)
- [Usage](#usage)
- [License](#license)
- [Contributing](#contributing)
- [Tests](#Tests)
- [Questions](#Questions)

## Installation

${data.installation}

## Usage

${data.usage}

## License

${data.license}

${renderLicenseLink(data.license)}

${renderLicenseSection(data.license)}

## Contributing

${data.contribute}

## Tests

${data.tests}

## Questions

If have any questions contact me:

my GitHub: https://github.com/${data.github}

my Email: ${data.email}

`;
}

module.exports = generateMarkdown;
