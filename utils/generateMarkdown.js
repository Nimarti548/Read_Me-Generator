// function to generate markdown for README
function generateMarkdown(data) {
return `# ${data.title}
![GitHub license](https://img.shields.io/badge/license-${data.license}-blue.svg)

## Description
${data.description}
---
## Table of Contents
* [Installation](#installation)

* [Usage](#usage)

* [Liscense](#license)

* [Contributing](#contributing)

* [Tests](#tests)

* [Questions](#questions)

---

## Installation
To install necessary dependencies, run the following command :

\`\`\`
${data.installation}
\`\`\`

## Usage
${data.usage}

## License 
This project is licensed under the ${data.license} license.

## Contributing
${data.contributing}

## Test
To test application run the following command:

\`\`\`
${data.test} 
\`\`\`

## Questions
If you have any questions about the repository, please contact me directly at ${data.email}. You can find more of my work at [${data.github}](https://github.com/${data.github}/).

`;
}

module.exports = generateMarkdown;
