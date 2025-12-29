const fs = require('fs');
const path = require('path');

const componentPath = process.argv[2];

if (!componentPath) {
  console.log('Usage: npm run new-component -- cartella/nome-componente');
  process.exit(1);
}

// Percorso base components
const componentsBaseDir = path.join(__dirname, 'src', 'components');

// Percorso completo del file
const fullPath = path.join(componentsBaseDir, `${componentPath}.njk`);

// Cartella del componente
const componentDir = path.dirname(fullPath);

// Se il file esiste, stop
if (fs.existsSync(fullPath)) {
  console.log(`❌ Il componente "${componentPath}" esiste già`);
  process.exit(1);
}

// Crea le cartelle mancanti (recursive = true 🔥)
fs.mkdirSync(componentDir, { recursive: true });

// Contenuto iniziale del componente
const templateContent = `<!-- Component: ${componentPath} -->\n`;

// Scrive il file
fs.writeFileSync(fullPath, templateContent, 'utf8');

console.log(`✅ Componente creato: src/components/${componentPath}.njk`);
