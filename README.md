# Micro'BOT

<p align="justify">
**Micro'BOT est un robot éducatif open-source, conçu pour l'enseignement et l'expérimentation des concepts algorithmiques dans le cadre du programme de Numérique et Sciences Informatiques (NSI).**
</p>

<p align="center">
  <img src="https://github.com/pierr-paul/Micro-BOT/blob/main/photo.png?raw=true" alt="Photo du Micro'BOT" width="500"/>
</p>

### Contexte du projet : un outil pour la recherche

<p align="justify">
Ce robot a été entièrement conçu et fabriqué dans le cadre d'un mémoire de Master MEEF NSI intitulé <strong>« Robots éducatifs et concepts algorithmiques : vers une meilleure motivation et une compréhension renforcée chez les élèves »</strong>.
</p>

<p align="justify">
L'objectif de ce travail de recherche est d'étudier l'impact de l'interaction avec un robot sur la motivation des élèves à apprendre les concepts algorithmiques. En s'appuyant sur les principes du <strong>constructivisme</strong> (Seymour Papert), le Micro'BOT a été pensé comme un médiateur tangible entre la théorie et la pratique. Il permet de matérialiser des abstractions logiques (boucles, conditions, séquençage) en actions physiques observables, transformant l'apprentissage en une expérience concrète et motivante.
</p>

<p align="justify">
La création d'un robot « sur mesure » plutôt que l'utilisation d'une solution commerciale répond à un double enjeu :
</p>

1.  **maîtriser l'outil expérimental** pour les besoins de la recherche.
2.  **garantir la reproductibilité de la recherche** en proposant une solution entièrement open-source et à faible coût.

### Description technique

Le Micro'BOT est une plateforme simple et modulaire :
-   le « cerveau » du robot est une carte **micro:bit** ;
-   le châssis, les fixations et les roues sont imprimés en 3D ;
-   une carte électronique s'interface avec la carte micro:bit pour piloter les moteurs et les capteurs.

### Contenu du dépôt

Ce dépôt contient l'ensemble des fichiers nécessaires à la fabrication du Micro'BOT :

*   **`README.md`** : ce fichier de présentation.
*   **`LICENSE`** : la licence MIT du projet.
*   **`carte.sch`, `carte.brd`** : les fichiers de conception de la carte électronique (schéma et circuit imprimé) pour le logiciel Autodesk Eagle.
*   **`fixation r....stl` (plusieurs fichiers)** : les fichiers STL pour l'impression 3D des différentes pièces du châssis.
*   **`jante.stl`, `roulette....stl`** : les fichiers STL pour l'impression 3D des roues.
*   **`JLCPCB....zip`** : l'archive contenant les fichiers Gerber pour une commande professionnelle du circuit imprimé (PCB).
*   **`actifs`, `classeur.xlsx`, `aide.txt`, `photo.png`, `.gitignore`** : les fichiers de configuration et ressources du projet.

### Licence
<p align="justify">
Ce projet est distribué sous la <strong>licence MIT</strong>. Vous êtes libre de l'utiliser, de le modifier et de le partager.
</p>

### Auteur
*   **M. Pierre PAUL**, dans le cadre du Master MEEF NSI (2024-2025) à l'INSPÉ de Lorraine - Université de Lorraine.
*   Sous la direction de **MM. David LANGLOIS et Alexis SCHEUER**.