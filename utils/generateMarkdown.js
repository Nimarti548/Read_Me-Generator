// function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}
  ${data.description}
  ${data.installation}
  ${data.test}

`;
}

module.exports = generateMarkdown;
