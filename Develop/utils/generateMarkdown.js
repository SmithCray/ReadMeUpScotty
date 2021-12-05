// Licience
function renderLicenseBadge(Mozzila) {}

function renderLicenseLink(IBM) {}

function renderLicenseSection(MIT) {}

// Generate markdown format for README
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

  ## Please contact me with any further questions here:
  #
  ## Link me on GitHub - ${data.git}
  ## Or email me at - ${data.email}
  `;
}

// Generate export
module.exports = generateMarkdown;
