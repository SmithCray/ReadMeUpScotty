// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(Mozzila) {}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(IBM) {}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(MIT) {}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# Title: ${data.title} 
  
  # Table of Contents:
  - Description
  - Insall
  - Usage 
  - Licience
  - Mentions
  - Tests
  - Contact Us

  ## Project Description:
  ${data.description}

  ## instal information:
  #
  ${data.instal}

  ## Additional usage information:
  ${data.usage}

  ## Project licience 
  ${data.licience}

  ## Contributions and Contributors:
  #
  ${data.mentions}

  ## Tests:
  ${data.test}

  ## Additional information or comments:
  #
  ${data.comments}

  #
  ## Link me on GitHub - ${data.git}
  ## Or email me at - ${data.email}
  `;
}

module.exports = generateMarkdown;
