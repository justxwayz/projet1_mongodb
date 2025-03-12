Lien vers les données :
- https://www.data.gouv.fr/fr/datasets/liste-des-festivals-en-france/
- https://www.data.gouv.fr/fr/datasets/jours-feries-en-france/

MongoDB install :
- Version : 2.3.8 
- Problèmes rencontrés : aucun

NEEDED init project from git clone :
- git clone https://github.com/justxwayz/projet1_mongodb.git
- npm install express mongoose dotenv   
- npm install express mongoose ejs   
- npm install express mongoose ejs body-parser method-override  
- npm init -y 
- node server.js

NoSQL vs SGBDR :
* Ajouter des colonnes dans un document \/
Dans MongoDB (NoSQL), il est possible d'ajouter des champs à un document sans impacter les autres. 
Contrairement à un SGBDR qui nécessite une modification du schéma (ALTER TABLE). 
Cette flexibilité permet d'adapter facilement la structure des données, mais exige une gestion constante pour éviter les incohérences.

* Gestion des frameworks dans l'évolution du schéma SGBDR \/
Dans les frameworks, l'évolution du schéma d'un SGBDR est généralement gérée par des migrations. 
Ces scripts permettent de modifier la structure de la base (ajout, suppression, modifications).
En conservant les données existantes, assurant ainsi une gestion contrôlée des évolutions.

* Précautions à prendre pour gérer l'évolution d'un schéma dans MongoDB \/
Contrairement aux SGBDR, MongoDB n'impose pas de schéma fixe, mais cette flexibilité exige des précautions :
- Gérer la compatibilité entre anciens et nouveaux documents, 
- Prévoir des valeurs par défaut pour les champs ajoutés, 
- Adapter le code pour traiter les variations de structure afin d’éviter les incohérences.