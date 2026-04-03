const fs = require('fs');
const path = require('path');

const pagePath = path.join(__dirname, 'src', 'pages', 'IndustriesPage.jsx');
const cardPath = path.join(__dirname, 'src', 'components', 'specific', 'industries', 'IndustryCard.jsx');

// 1. Fix IndustriesPage.jsx
let pageContent = fs.readFileSync(pagePath, 'utf8');
pageContent = pageContent.replace(
  /className="page-top-spacing mx-auto max-w-\[1160px\] px-4 pb-12 sm:px-5 sm:pb-10"/,
  'className="page-top-spacing w-full px-0 pb-12 sm:px-6 sm:pb-24 lg:mx-auto lg:max-w-7xl lg:px-8 lg:pb-32"'
);
// Try another regex if the first one fails (different versions of the file)
pageContent = pageContent.replace(
  /className="page-top-spacing w-full px-3\.5 pb-12 sm:px-6 sm:pb-20 lg:mx-auto lg:max-w-\[1240px\] lg:pb-32"/,
  'className="page-top-spacing w-full px-0 pb-12 sm:px-6 sm:pb-24 lg:mx-auto lg:max-w-7xl lg:px-8 lg:pb-32"'
);
fs.writeFileSync(pagePath, pageContent, 'utf8');

// 2. Fix IndustryCard.jsx
let cardContent = fs.readFileSync(cardPath, 'utf8');

// Match the main className with all its variations from previous steps
const cardClassRegex = /className=\{`industry-card-shell grid items-center gap-[45] rounded-\[\d+px\] border border-\[#E2EFEA\] bg-white p-[34] shadow-\[0_12px_44px_rgba\(0,0,0,0\.03\)\][^`]*`\}/;
const newCardClass = 'className={`industry-card-shell w-full grid gap-5 border-[#E2EFEA] bg-white p-4 shadow-[0_12px_44px_rgba(0,0,0,0.03)] sm:gap-6 sm:rounded-[32px] sm:border sm:p-7 md:grid-cols-2 md:items-center md:gap-10 md:p-10 lg:gap-16 lg:rounded-[48px] lg:p-16 ${reverse ? "md:[&>*:first-child]:order-2" : ""}`}';

cardContent = cardContent.replace(cardClassRegex, newCardClass);

// Fix the internal content box
cardContent = cardContent.replace(
  /className="md:px-4 lg:px-6 industry-content-box"/,
  'className="flex w-full flex-col justify-center sm:px-3 md:px-8 lg:px-12 industry-content-box"'
);
// Alternative match
cardContent = cardContent.replace(
  /className="flex flex-col justify-center sm:px-2 md:px-6 lg:px-8 industry-content-box"/,
  'className="flex w-full flex-col justify-center sm:px-3 md:px-8 lg:px-12 industry-content-box"'
);

fs.writeFileSync(cardPath, cardContent, 'utf8');

console.log('Successfully updated IndustriesPage.jsx and IndustryCard.jsx for wide mobile layout');
