# Starter pack

- "npm i" per installare 
- "npx gulp" per far partire il server locale con il watch
- "npm run new-page -- nome-pagina" per creare automaticamente nuove pagine partendo dal template base
- "npm run new-component -- nome-componente" per creare automaticamente il file vuoto .njk nella cartella components (oppure sottocartella/nome-componente)


- estendere il template: {% extends "base.njk" %}
- includere il componente/pagina {% include "header.njk" %} 

## push cartella dist su repo diverso
git add -f dist
git commit
git subtree push --prefix dist dist-repo main
git reset --hard HEAD~1
