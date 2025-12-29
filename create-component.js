const fs = require('fs');
const path = require('path');

const componentName = process.argv[2];

if (!componentName) {
  console.log("Usage: npm run new-component -- <nome-componente>");
  process.exit(1);
}

const componentsDir = path.join(__dirname, 'src', 'components');
const filePath = path.join(componentsDir, `${componentName}.njk`);

if (fs.existsSync(filePath)) {
  console.log(`Il componente ${componentName} esiste già!`);
  process.exit(1);
}

const templateContent = `<!-- Componente ${componentName} -->\n`;

fs.writeFileSync(filePath, templateContent, 'utf8');
console.log(`Componente ${componentName} creato in src/components/${componentName}.njk`);
