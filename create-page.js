const fs = require('fs');
const path = require('path');

const pageName = process.argv[2];

if (!pageName) {
  console.log("Usage: npm run new-page -- <nome-pagina>");
  process.exit(1);
}

const pagesDir = path.join(__dirname, 'src', 'pages');
const filePath = path.join(pagesDir, `${pageName}.njk`);

if (fs.existsSync(filePath)) {
  console.log(`La pagina ${pageName} esiste già!`);
  process.exit(1);
}

const templateContent = `{% extends "../templates/base.njk" %}

{% block content %}
<main>
  <h1>${pageName}</h1>
  <p>Contenuto della pagina ${pageName}</p>
</main>
{% endblock %}
`;

fs.writeFileSync(filePath, templateContent, 'utf8');
console.log(`Pagina ${pageName} creata in src/pages/${pageName}.njk`);