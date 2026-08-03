/* ============================================================
   InfographieQuest — Données du programme DEP 5344 (Infographie)
   Données converties depuis l'app source vers le moteur web (PWA).
   Format moteur: COMPETENCIES[].tiers[].questions[] avec choices[{fr,en,correct}].
   Les questions QCM sont des EXEMPLES à valider par les enseignants du programme.
   ============================================================ */

const PROGRAM = {
  fr: { title: "Infographie", subtitle: "DEP 5344 — 1800 heures — 120 unités" },
  en: { title: "Graphic Design", subtitle: "DVS 5344 — 1800 hours — 120 credits" }
};

function ch(fr, en, correct) { return { fr, en, correct: !!correct }; }

/* Question de type vrai/faux: affirmation à juger. */
function tf(fr, en, isTrue) { return { type: "tf", fr, en, isTrue: !!isTrue }; }

/* Question de type "association de termes": l'élève touche un terme puis
   sa définition correspondante. pairs: tableau de
   { term_fr, term_en, def_fr, def_en }. Toutes les paires doivent être
   associées correctement pour que la question soit considérée réussie. */
function pair(term_fr, term_en, def_fr, def_en) { return { term_fr, term_en, def_fr, def_en }; }
function match(fr, en, pairs) { return { type: "match", fr, en, pairs }; }

/* Question de type "situation complexe" (mise en situation): un court
   scénario réaliste suivi d'un choix multiple basé sur le jugement
   professionnel. Réutilise le même format "choices" qu'un QCM standard. */
function scenario(fr, en, choices) { return { type: "scenario", fr, en, choices }; }

/* Paliers de difficulté d'une quête. Chaque compétence est maintenant
   divisée en 3 paliers progressifs (tiers[]), débloqués l'un après l'autre:
   Débutant -> Intermédiaire -> Avancé. Réussir le palier 1 d'une compétence
   déverrouille la compétence suivante sur la carte; réussir le palier 3
   (Avancé) accorde le badge de maîtrise de la compétence. */
const TIER_META = [
  { level: 1, name_fr: "Débutant", name_en: "Beginner", icon: "🌱" },
  { level: 2, name_fr: "Intermédiaire", name_en: "Intermediate", icon: "⚙️" },
  { level: 3, name_fr: "Avancé", name_en: "Advanced", icon: "🏆" }
];

/* Chaque compétence = une "quête". order = ordre de déblocage. */
const COMPETENCIES = [
 {
  "id": "info01",
  "order": 1,
  "title_fr": "Métier et formation",
  "title_en": "Trade and Training",
  "icon": "🧭",
  "tiers": [
   {
    "level": 1,
    "questions": [
     {
      "fr": "Quel diplôme obtient-on à la fin du programme Infographie 5344?",
      "en": "What diploma is awarded at the end of the Graphic Design 5344 program?",
      "choices": [
       {
        "fr": "Un diplôme d'études professionnelles (DEP)",
        "en": "A Diploma of Vocational Studies (DVS)",
        "correct": true
       },
       {
        "fr": "Un diplôme d'études collégiales (DEC)",
        "en": "A Diploma of College Studies (DEC)",
        "correct": false
       },
       {
        "fr": "Une attestation d'études collégiales (AEC)",
        "en": "An Attestation of College Studies (AEC)",
        "correct": false
       },
       {
        "fr": "Un baccalauréat",
        "en": "A Bachelor's degree",
        "correct": false
       }
      ]
     },
     {
      "fr": "Quel métier ce programme prépare-t-il principalement à exercer?",
      "en": "What trade does this program mainly prepare students for?",
      "choices": [
       {
        "fr": "Infographe",
        "en": "Graphic designer",
        "correct": true
       },
       {
        "fr": "Photographe professionnel",
        "en": "Professional photographer",
        "correct": false
       },
       {
        "fr": "Développeur web",
        "en": "Web developer",
        "correct": false
       },
       {
        "fr": "Imprimeur seul",
        "en": "Press operator only",
        "correct": false
       }
      ]
     },
     {
      "type": "tf",
      "fr": "Le programme Infographie 5344 comporte 22 modules.",
      "en": "The Graphic Design 5344 program has 22 modules.",
      "isTrue": true
     }
    ]
   },
   {
    "level": 2,
    "questions": [
     {
      "fr": "Combien d'heures totalise le programme Infographie 5344?",
      "en": "How many hours does the Graphic Design 5344 program total?",
      "choices": [
       {
        "fr": "1800 heures",
        "en": "1800 hours",
        "correct": true
       },
       {
        "fr": "1485 heures",
        "en": "1485 hours",
        "correct": false
       },
       {
        "fr": "1350 heures",
        "en": "1350 hours",
        "correct": false
       },
       {
        "fr": "900 heures",
        "en": "900 hours",
        "correct": false
       }
      ]
     },
     {
      "fr": "Combien d'unités totalise le programme (1 unité = 15 heures)?",
      "en": "How many credits does the program total (1 credit = 15 hours)?",
      "choices": [
       {
        "fr": "120 unités",
        "en": "120 credits",
        "correct": true
       },
       {
        "fr": "99 unités",
        "en": "99 credits",
        "correct": false
       },
       {
        "fr": "90 unités",
        "en": "90 credits",
        "correct": false
       },
       {
        "fr": "60 unités",
        "en": "60 credits",
        "correct": false
       }
      ]
     },
     {
      "type": "tf",
      "fr": "Le programme est structuré par compétences, formulé par objectifs et découpé en modules.",
      "en": "The program is structured by competencies, formulated as objectives, and divided into modules.",
      "isTrue": true
     }
    ]
   },
   {
    "level": 3,
    "questions": [
     {
      "fr": "Le module « Intégration au milieu de travail » dure 120 heures. Combien d'unités cela représente-t-il?",
      "en": "The 'Workplace Integration' module lasts 120 hours. How many credits does that represent?",
      "choices": [
       {
        "fr": "8 unités",
        "en": "8 credits",
        "correct": true
       },
       {
        "fr": "6 unités",
        "en": "6 credits",
        "correct": false
       },
       {
        "fr": "10 unités",
        "en": "10 credits",
        "correct": false
       },
       {
        "fr": "5 unités",
        "en": "5 credits",
        "correct": false
       }
      ]
     },
     {
      "fr": "Lequel décrit le mieux l'approche du programme Infographie?",
      "en": "Which best describes the approach of the Graphic Design program?",
      "choices": [
       {
        "fr": "Une approche par compétences tenant compte des besoins de formation et de la situation de travail",
        "en": "A competency-based approach that accounts for training needs and the work situation",
        "correct": true
       },
       {
        "fr": "Un programme théorique sans lien avec le marché du travail",
        "en": "A theoretical program with no link to the job market",
        "correct": false
       },
       {
        "fr": "Une formation universitaire menant à la maîtrise",
        "en": "University training leading to a Master's degree",
        "correct": false
       },
       {
        "fr": "Une formation improvisée par chaque enseignant",
        "en": "Training improvised by each teacher",
        "correct": false
       }
      ]
     },
     {
      "type": "tf",
      "fr": "L'obtention du DEP en Infographie donne automatiquement le titre de directeur artistique.",
      "en": "Earning the DVS in Graphic Design automatically grants the title of art director.",
      "isTrue": false
     }
    ]
   }
  ]
 },
 {
  "id": "info02",
  "order": 2,
  "title_fr": "Gestion d'un environnement informatique",
  "title_en": "Managing a Computer Environment",
  "icon": "💻",
  "tiers": [
   {
    "level": 1,
    "questions": [
     {
      "fr": "Pourquoi est-il important d'organiser ses dossiers de projet de façon cohérente?",
      "en": "Why is it important to organize project folders consistently?",
      "choices": [
       {
        "fr": "Pour retrouver rapidement les fichiers et éviter de perdre du temps",
        "en": "To quickly find files and avoid wasting time",
        "correct": true
       },
       {
        "fr": "Pour impressionner les collègues",
        "en": "To impress coworkers",
        "correct": false
       },
       {
        "fr": "Cela n'est utile que pour les très grands projets",
        "en": "It is only useful for very large projects",
        "correct": false
       },
       {
        "fr": "Pour respecter les exigences techniques du logiciel",
        "en": "To follow the software's technical requirements",
        "correct": false
       }
      ]
     },
     {
      "fr": "Quelle pratique protège un projet contre la perte de données?",
      "en": "Which practice protects a project against data loss?",
      "choices": [
       {
        "fr": "Faire des sauvegardes régulières",
        "en": "Making regular backups",
        "correct": true
       },
       {
        "fr": "Ne jamais fermer le logiciel",
        "en": "Never closing the software",
        "correct": false
       },
       {
        "fr": "Travailler uniquement sur une clé USB",
        "en": "Working only from a USB stick",
        "correct": false
       },
       {
        "fr": "Ignorer les mises à jour",
        "en": "Ignoring updates",
        "correct": false
       }
      ]
     },
     {
      "type": "tf",
      "fr": "Nommer ses fichiers de façon claire (date, client, version) facilite la collaboration.",
      "en": "Naming files clearly (date, client, version) makes collaboration easier.",
      "isTrue": true
     }
    ]
   },
   {
    "level": 2,
    "questions": [
     {
      "fr": "Que permet la gestion des versions d'un fichier (ex. v1, v2, final)?",
      "en": "What does version management of a file (e.g. v1, v2, final) allow?",
      "choices": [
       {
        "fr": "Revenir à une version antérieure si nécessaire",
        "en": "Reverting to an earlier version if needed",
        "correct": true
       },
       {
        "fr": "Supprimer l'historique du fichier",
        "en": "Deleting the file's history",
        "correct": false
       },
       {
        "fr": "Empêcher toute modification future",
        "en": "Preventing any future changes",
        "correct": false
       },
       {
        "fr": "Réduire automatiquement la qualité",
        "en": "Automatically reducing quality",
        "correct": false
       }
      ]
     },
     {
      "fr": "Pourquoi vérifier l'espace de stockage disponible avant un gros projet d'impression?",
      "en": "Why check available storage space before a large print project?",
      "choices": [
       {
        "fr": "Pour éviter un manque d'espace pendant le travail",
        "en": "To avoid running out of space during the work",
        "correct": true
       },
       {
        "fr": "Uniquement pour respecter une norme esthétique du studio",
        "en": "Only to meet the studio's appearance standards",
        "correct": false
       },
       {
        "fr": "Pour respecter les étapes de validation prévues au projet",
        "en": "To follow the project's planned validation steps",
        "correct": false
       },
       {
        "fr": "Pour augmenter le prix du projet",
        "en": "To increase the project's price",
        "correct": false
       }
      ]
     },
     {
      "type": "tf",
      "fr": "La mise à jour du système d'exploitation n'a aucun effet sur la sécurité informatique.",
      "en": "Updating the operating system has no effect on computer security.",
      "isTrue": false
     }
    ]
   },
   {
    "level": 3,
    "questions": [
     {
      "fr": "Un fichier de projet devient corrompu juste avant une échéance. Quelle pratique aurait limité l'impact?",
      "en": "A project file becomes corrupted right before a deadline. What practice would have limited the impact?",
      "choices": [
       {
        "fr": "Des sauvegardes régulières vers un support ou service distinct",
        "en": "Regular backups to a separate location or service",
        "correct": true
       },
       {
        "fr": "Travailler le plus vite possible sans jamais sauvegarder",
        "en": "Working as fast as possible without ever saving",
        "correct": false
       },
       {
        "fr": "Garder une seule copie sur le disque principal",
        "en": "Keeping a single copy on the main drive",
        "correct": false
       },
       {
        "fr": "Ignorer le problème",
        "en": "Ignoring the problem",
        "correct": false
       }
      ]
     },
     {
      "fr": "Plusieurs infographes travaillent sur le même projet en même temps. Quelle pratique évite d'écraser le travail des autres?",
      "en": "Several designers work on the same project at once. Which practice avoids overwriting each other's work?",
      "choices": [
       {
        "fr": "Utiliser un système de gestion de versions ou un dossier partagé bien organisé",
        "en": "Using a version control system or a well-organized shared folder",
        "correct": true
       },
       {
        "fr": "Travailler tous dans le même fichier en même temps sans coordination",
        "en": "Everyone working in the same file at once with no coordination",
        "correct": false
       },
       {
        "fr": "Ne jamais communiquer entre collègues",
        "en": "Never communicating between coworkers",
        "correct": false
       },
       {
        "fr": "Dupliquer le fichier au hasard",
        "en": "Randomly duplicating the file",
        "correct": false
       }
      ]
     },
     {
      "type": "tf",
      "fr": "La gestion d'un environnement informatique inclut la maintenance de base du poste de travail (mises à jour, espace disque, sauvegardes).",
      "en": "Managing a computer environment includes basic workstation maintenance (updates, disk space, backups).",
      "isTrue": true
     }
    ]
   }
  ]
 },
 {
  "id": "info03",
  "order": 3,
  "title_fr": "Images vectorielles",
  "title_en": "Vector Images",
  "icon": "🔷",
  "tiers": [
   {
    "level": 1,
    "questions": [
     {
      "fr": "Une image vectorielle est composée de...",
      "en": "A vector image is made up of...",
      "choices": [
       {
        "fr": "Formes géométriques définies par des équations mathématiques",
        "en": "Geometric shapes defined by mathematical equations",
        "correct": true
       },
       {
        "fr": "Une grille fixe de pixels",
        "en": "A fixed grid of pixels",
        "correct": false
       },
       {
        "fr": "Uniquement du texte",
        "en": "Only text",
        "correct": false
       },
       {
        "fr": "Une seule couleur unie",
        "en": "A single flat colour",
        "correct": false
       }
      ]
     },
     {
      "fr": "Quel type de logiciel est typiquement utilisé pour créer des images vectorielles?",
      "en": "What type of software is typically used to create vector images?",
      "choices": [
       {
        "fr": "Un logiciel de dessin vectoriel (ex. Illustrator)",
        "en": "Vector drawing software (e.g. Illustrator)",
        "correct": true
       },
       {
        "fr": "Un lecteur vidéo",
        "en": "A video player",
        "correct": false
       },
       {
        "fr": "Un tableur",
        "en": "A spreadsheet program",
        "correct": false
       },
       {
        "fr": "Un antivirus",
        "en": "An antivirus program",
        "correct": false
       }
      ]
     },
     {
      "type": "tf",
      "fr": "Une image vectorielle peut être agrandie sans perte de qualité.",
      "en": "A vector image can be enlarged without losing quality.",
      "isTrue": true
     }
    ]
   },
   {
    "level": 2,
    "questions": [
     {
      "fr": "Quel outil permet de dessiner des courbes précises en vectoriel?",
      "en": "Which tool is used to draw precise curves in vector software?",
      "choices": [
       {
        "fr": "L'outil plume (courbes de Bézier)",
        "en": "The pen tool (Bézier curves)",
        "correct": true
       },
       {
        "fr": "L'outil texte seul",
        "en": "The text tool alone",
        "correct": false
       },
       {
        "fr": "L'outil zoom",
        "en": "The zoom tool",
        "correct": false
       },
       {
        "fr": "La gomme à effacer",
        "en": "The eraser tool",
        "correct": false
       }
      ]
     },
     {
      "fr": "Que permet de faire un « chemin » (path) fermé en vectoriel?",
      "en": "What does a closed 'path' allow you to do in vector work?",
      "choices": [
       {
        "fr": "Définir une forme remplissable",
        "en": "Define a fillable shape",
        "correct": true
       },
       {
        "fr": "Supprimer l'image entière",
        "en": "Delete the entire image",
        "correct": false
       },
       {
        "fr": "Changer la résolution de l'écran",
        "en": "Change the screen resolution",
        "correct": false
       },
       {
        "fr": "Ajouter du son au fichier",
        "en": "Add sound to the file",
        "correct": false
       }
      ]
     },
     {
      "type": "tf",
      "fr": "Les calques ralentissent toujours le travail en illustration vectorielle et devraient être évités.",
      "en": "Layers always slow down vector illustration work and should be avoided.",
      "isTrue": false
     }
    ]
   },
   {
    "level": 3,
    "questions": [
     {
      "fr": "Un logo doit être utilisable aussi bien sur une carte professionnelle que sur un panneau publicitaire géant. Quel format convient le mieux?",
      "en": "A logo must work equally well on a business card and a giant billboard. Which format suits it best?",
      "choices": [
       {
        "fr": "Un format vectoriel",
        "en": "A vector format",
        "correct": true
       },
       {
        "fr": "Un format matriciel basse résolution",
        "en": "A low-resolution raster format",
        "correct": false
       },
       {
        "fr": "Une capture d'écran",
        "en": "A screenshot",
        "correct": false
       },
       {
        "fr": "Un fichier audio",
        "en": "An audio file",
        "correct": false
       }
      ]
     },
     {
      "fr": "Pourquoi vectoriser un logo initialement dessiné à la main et numérisé en bitmap?",
      "en": "Why redraw as a vector a logo that was originally hand-drawn and scanned as a bitmap?",
      "choices": [
       {
        "fr": "Pour permettre son agrandissement sans perte de qualité",
        "en": "To allow it to be enlarged without losing quality",
        "correct": true
       },
       {
        "fr": "Pour le rendre flou volontairement",
        "en": "To deliberately make it blurry",
        "correct": false
       },
       {
        "fr": "Pour réduire son poids de fichier à zéro",
        "en": "To reduce its file size to zero",
        "correct": false
       },
       {
        "fr": "Cela n'apporte aucun avantage",
        "en": "It offers no advantage",
        "correct": false
       }
      ]
     },
     {
      "type": "tf",
      "fr": "Le vectoriel est généralement préférable au matriciel pour les logos et les illustrations à formes nettes.",
      "en": "Vector is generally preferable to raster for logos and illustrations with clean shapes.",
      "isTrue": true
     }
    ]
   }
  ]
 },
 {
  "id": "info04",
  "order": 4,
  "title_fr": "Images matricielles",
  "title_en": "Raster Images",
  "icon": "🖼️",
  "tiers": [
   {
    "level": 1,
    "questions": [
     {
      "fr": "Une image matricielle (bitmap) est composée de...",
      "en": "A raster (bitmap) image is made up of...",
      "choices": [
       {
        "fr": "Une grille de pixels",
        "en": "A grid of pixels",
        "correct": true
       },
       {
        "fr": "Des équations mathématiques",
        "en": "Mathematical equations",
        "correct": false
       },
       {
        "fr": "Uniquement du texte vectoriel",
        "en": "Only vector text",
        "correct": false
       },
       {
        "fr": "Des sons numérisés",
        "en": "Digitized sounds",
        "correct": false
       }
      ]
     },
     {
      "fr": "Quel type de logiciel est typiquement utilisé pour retoucher des photos matricielles?",
      "en": "What type of software is typically used to retouch raster photos?",
      "choices": [
       {
        "fr": "Un logiciel de retouche d'image (ex. Photoshop)",
        "en": "Image editing software (e.g. Photoshop)",
        "correct": true
       },
       {
        "fr": "Un tableur",
        "en": "A spreadsheet program",
        "correct": false
       },
       {
        "fr": "Un lecteur de PDF seul",
        "en": "A PDF reader alone",
        "correct": false
       },
       {
        "fr": "Un logiciel de comptabilité",
        "en": "Accounting software",
        "correct": false
       }
      ]
     },
     {
      "type": "tf",
      "fr": "Agrandir fortement une image matricielle de basse résolution peut la rendre floue ou pixelisée.",
      "en": "Greatly enlarging a low-resolution raster image can make it blurry or pixelated.",
      "isTrue": true
     }
    ]
   },
   {
    "level": 2,
    "questions": [
     {
      "fr": "Que signifie la résolution d'une image exprimée en PPP (points par pouce)?",
      "en": "What does an image's resolution in DPI (dots per inch) mean?",
      "choices": [
       {
        "fr": "La densité de pixels par pouce, liée à la qualité d'impression",
        "en": "The density of pixels per inch, tied to print quality",
        "correct": true
       },
       {
        "fr": "La couleur dominante de l'image",
        "en": "The image's dominant colour",
        "correct": false
       },
       {
        "fr": "Le nombre de calques utilisés",
        "en": "The number of layers used",
        "correct": false
       },
       {
        "fr": "La vitesse d'ouverture du fichier",
        "en": "How fast the file opens",
        "correct": false
       }
      ]
     },
     {
      "fr": "Quel outil sert à sélectionner une zone précise d'une image matricielle pour la retoucher?",
      "en": "Which tool is used to select a precise area of a raster image for retouching?",
      "choices": [
       {
        "fr": "Un outil de sélection (lasso, baguette magique, etc.)",
        "en": "A selection tool (lasso, magic wand, etc.)",
        "correct": true
       },
       {
        "fr": "L'outil texte",
        "en": "The text tool",
        "correct": false
       },
       {
        "fr": "La règle",
        "en": "The ruler",
        "correct": false
       },
       {
        "fr": "Le compte-gouttes seul",
        "en": "The eyedropper alone",
        "correct": false
       }
      ]
     },
     {
      "type": "tf",
      "fr": "Les calques de réglage modifient toujours les pixels originaux de façon permanente, comme un outil de peinture classique.",
      "en": "Adjustment layers always permanently alter the original pixels, like a regular paint tool.",
      "isTrue": false
     }
    ]
   },
   {
    "level": 3,
    "questions": [
     {
      "fr": "Une photo de 72 PPP prévue pour le web doit être imprimée en grand format. Quel est le problème principal?",
      "en": "A 72 DPI photo intended for the web must be printed at a large size. What is the main problem?",
      "choices": [
       {
        "fr": "La résolution est probablement insuffisante pour une impression de qualité",
        "en": "The resolution is likely insufficient for quality printing",
        "correct": true
       },
       {
        "fr": "Uniquement pour respecter une norme esthétique du studio",
        "en": "Only to meet the studio's appearance standards",
        "correct": false
       },
       {
        "fr": "Le fichier est trop lourd",
        "en": "The file is too large",
        "correct": false
       },
       {
        "fr": "La couleur sera automatiquement corrigée",
        "en": "The colour will be automatically corrected",
        "correct": false
       }
      ]
     },
     {
      "fr": "Quelle pratique préserve le plus de flexibilité lors de la retouche d'une photo?",
      "en": "Which practice preserves the most flexibility when retouching a photo?",
      "choices": [
       {
        "fr": "Travailler avec des calques et des masques plutôt que de modifier l'image directement",
        "en": "Working with layers and masks rather than editing the image directly",
        "correct": true
       },
       {
        "fr": "Aplatir l'image dès le premier réglage",
        "en": "Flattening the image at the very first adjustment",
        "correct": false
       },
       {
        "fr": "Ne jamais utiliser de calques",
        "en": "Never using layers",
        "correct": false
       },
       {
        "fr": "Travailler uniquement sur une copie compressée",
        "en": "Working only on a compressed copy",
        "correct": false
       }
      ]
     },
     {
      "type": "tf",
      "fr": "La résolution recommandée pour l'impression est généralement plus basse que celle utilisée pour le web.",
      "en": "The recommended resolution for printing is generally lower than that used for the web.",
      "isTrue": false
     }
    ]
   }
  ]
 },
 {
  "id": "info05",
  "order": 5,
  "title_fr": "Exigences et étapes de production en communication graphique",
  "title_en": "Graphic Communication Production Requirements and Steps",
  "icon": "📐",
  "tiers": [
   {
    "level": 1,
    "questions": [
     {
      "fr": "Avant de commencer un projet graphique, il est important de...",
      "en": "Before starting a graphic design project, it is important to...",
      "choices": [
       {
        "fr": "Bien comprendre les exigences du client et du support de diffusion",
        "en": "Clearly understand the client's requirements and the distribution medium",
        "correct": true
       },
       {
        "fr": "Commencer sans poser de questions",
        "en": "Start without asking any questions",
        "correct": false
       },
       {
        "fr": "Choisir les couleurs au hasard",
        "en": "Choose colours at random",
        "correct": false
       },
       {
        "fr": "Ignorer le format final",
        "en": "Ignore the final format",
        "correct": false
       }
      ]
     },
     {
      "fr": "Un cahier des charges (brief) sert à...",
      "en": "A project brief is used to...",
      "choices": [
       {
        "fr": "Définir clairement les objectifs et contraintes d'un projet",
        "en": "Clearly define a project's goals and constraints",
        "correct": true
       },
       {
        "fr": "Remplacer la facture",
        "en": "Replace the invoice",
        "correct": false
       },
       {
        "fr": "Décorer le bureau",
        "en": "Decorate the office",
        "correct": false
       },
       {
        "fr": "Annuler le projet",
        "en": "Cancel the project",
        "correct": false
       }
      ]
     },
     {
      "type": "tf",
      "fr": "Les étapes de production incluent généralement la conception, la réalisation et la vérification avant livraison.",
      "en": "Production steps generally include design, execution and review before delivery.",
      "isTrue": true
     }
    ]
   },
   {
    "level": 2,
    "questions": [
     {
      "fr": "Pourquoi vérifier le format final et le mode couleur requis avant de commencer une mise en page?",
      "en": "Why check the final format and required colour mode before starting a layout?",
      "choices": [
       {
        "fr": "Pour éviter de refaire le travail si le format ne convient pas au support de diffusion",
        "en": "To avoid redoing the work if the format doesn't suit the distribution medium",
        "correct": true
       },
       {
        "fr": "Cela concerne surtout la paperasse du projet, jamais le design",
        "en": "It mainly concerns the project's paperwork, never the design",
        "correct": false
       },
       {
        "fr": "Pour respecter les étapes de validation prévues au projet",
        "en": "To follow the project's planned validation steps",
        "correct": false
       },
       {
        "fr": "Pour augmenter le prix sans raison",
        "en": "To increase the price for no reason",
        "correct": false
       }
      ]
     },
     {
      "fr": "Une épreuve (proof) sert à...",
      "en": "A proof is used to...",
      "choices": [
       {
        "fr": "Vérifier l'aspect du document avant l'impression ou la diffusion finale",
        "en": "Check the document's appearance before final printing or distribution",
        "correct": true
       },
       {
        "fr": "Remplacer le fichier final",
        "en": "Replace the final file",
        "correct": false
       },
       {
        "fr": "Annuler le projet",
        "en": "Cancel the project",
        "correct": false
       },
       {
        "fr": "Signer le contrat",
        "en": "Sign the contract",
        "correct": false
       }
      ]
     },
     {
      "type": "tf",
      "fr": "L'échéancier de production n'a aucune importance tant que le résultat visuel final est impeccable.",
      "en": "The production schedule doesn't matter at all as long as the final visual result is flawless.",
      "isTrue": false
     }
    ]
   },
   {
    "level": 3,
    "questions": [
     {
      "fr": "Un client change les exigences du projet à mi-parcours. Quelle est la bonne pratique?",
      "en": "A client changes the project requirements midway through. What is the correct practice?",
      "choices": [
       {
        "fr": "Documenter le changement et ajuster l'échéancier ou le budget si nécessaire",
        "en": "Documenting the change and adjusting the timeline or budget if needed",
        "correct": true
       },
       {
        "fr": "Ignorer le changement",
        "en": "Ignoring the change",
        "correct": false
       },
       {
        "fr": "Refuser de continuer le projet",
        "en": "Refusing to continue the project",
        "correct": false
       },
       {
        "fr": "Appliquer le changement sans en informer personne",
        "en": "Applying the change without telling anyone",
        "correct": false
       }
      ]
     },
     {
      "fr": "Une épreuve couleur ne correspond pas à ce qui avait été approuvé. Quelle est la bonne pratique avant l'impression finale?",
      "en": "A colour proof doesn't match what was approved. What is the correct practice before final printing?",
      "choices": [
       {
        "fr": "Corriger l'écart et faire approuver une nouvelle épreuve",
        "en": "Correct the discrepancy and get a new proof approved",
        "correct": true
       },
       {
        "fr": "Imprimer quand même en grande quantité",
        "en": "Print the large run anyway",
        "correct": false
       },
       {
        "fr": "Ignorer l'écart",
        "en": "Ignore the discrepancy",
        "correct": false
       },
       {
        "fr": "Attendre la prochaine commande pour corriger",
        "en": "Wait for the next order to fix it",
        "correct": false
       }
      ]
     },
     {
      "type": "tf",
      "fr": "Respecter les exigences techniques du support de diffusion (imprimé ou numérique) fait partie des étapes essentielles de production.",
      "en": "Meeting the technical requirements of the distribution medium (print or digital) is an essential part of the production steps.",
      "isTrue": true
     }
    ]
   }
  ]
 },
 {
  "id": "info06",
  "order": 6,
  "title_fr": "Acquisition d'images",
  "title_en": "Image Acquisition",
  "icon": "📷",
  "tiers": [
   {
    "level": 1,
    "questions": [
     {
      "fr": "Quel appareil sert à numériser une photo papier?",
      "en": "Which device is used to digitize a paper photo?",
      "choices": [
       {
        "fr": "Un numériseur (scanner)",
        "en": "A scanner",
        "correct": true
       },
       {
        "fr": "Une imprimante seule",
        "en": "A printer alone",
        "correct": false
       },
       {
        "fr": "Un clavier",
        "en": "A keyboard",
        "correct": false
       },
       {
        "fr": "Un routeur",
        "en": "A router",
        "correct": false
       }
      ]
     },
     {
      "fr": "Pourquoi choisir une résolution de numérisation plus élevée pour une image destinée à l'impression?",
      "en": "Why choose a higher scanning resolution for an image intended for print?",
      "choices": [
       {
        "fr": "Pour conserver assez de détails à la taille d'impression finale",
        "en": "To preserve enough detail at the final print size",
        "correct": true
       },
       {
        "fr": "Cela sert uniquement à remplir un champ obligatoire du logiciel",
        "en": "It only serves to fill a mandatory field in the software",
        "correct": false
       },
       {
        "fr": "Pour réduire le poids du fichier",
        "en": "To reduce the file size",
        "correct": false
       },
       {
        "fr": "Pour accélérer la numérisation",
        "en": "To speed up scanning",
        "correct": false
       }
      ]
     },
     {
      "type": "tf",
      "fr": "Une photo prise avec un mauvais éclairage peut être difficile à corriger complètement en retouche.",
      "en": "A photo taken in poor lighting can be difficult to fully fix through retouching.",
      "isTrue": true
     }
    ]
   },
   {
    "level": 2,
    "questions": [
     {
      "fr": "Quel format de fichier conserve le plus d'informations pour la retouche d'une photo professionnelle?",
      "en": "Which file format retains the most information for retouching a professional photo?",
      "choices": [
       {
        "fr": "Un format RAW ou non compressé (ex. TIFF)",
        "en": "A RAW or uncompressed format (e.g. TIFF)",
        "correct": true
       },
       {
        "fr": "Un JPEG fortement compressé",
        "en": "A heavily compressed JPEG",
        "correct": false
       },
       {
        "fr": "Un GIF animé",
        "en": "An animated GIF",
        "correct": false
       },
       {
        "fr": "Une capture d'écran",
        "en": "A screenshot",
        "correct": false
       }
      ]
     },
     {
      "fr": "Pourquoi vérifier les droits d'utilisation d'une image avant de l'intégrer à un projet client?",
      "en": "Why check an image's usage rights before including it in a client project?",
      "choices": [
       {
        "fr": "Pour éviter une violation de droit d'auteur",
        "en": "To avoid a copyright violation",
        "correct": true
       },
       {
        "fr": "Cela dépend uniquement des préférences personnelles de l'infographe",
        "en": "It depends only on the designer's personal preferences",
        "correct": false
       },
       {
        "fr": "Pour respecter les étapes de validation prévues au projet",
        "en": "To follow the project's planned validation steps",
        "correct": false
       },
       {
        "fr": "Pour augmenter le prix",
        "en": "To increase the price",
        "correct": false
       }
      ]
     },
     {
      "type": "tf",
      "fr": "La qualité de la source a peu d'influence sur le résultat final, car la retouche peut toujours tout corriger.",
      "en": "Source quality has little influence on the final result, since retouching can always fix everything.",
      "isTrue": false
     }
    ]
   },
   {
    "level": 3,
    "questions": [
     {
      "fr": "Une image trouvée en ligne est de basse résolution mais doit être imprimée en grand format. Quelle est la bonne pratique?",
      "en": "An image found online is low-resolution but must be printed at a large size. What is the correct practice?",
      "choices": [
       {
        "fr": "Chercher une version haute résolution ou en aviser le client plutôt que d'agrandir une image de mauvaise qualité",
        "en": "Looking for a high-resolution version or informing the client rather than enlarging a poor-quality image",
        "correct": true
       },
       {
        "fr": "Agrandir l'image sans se soucier de la qualité",
        "en": "Enlarging the image without worrying about quality",
        "correct": false
       },
       {
        "fr": "Ignorer le problème",
        "en": "Ignoring the problem",
        "correct": false
       },
       {
        "fr": "Remplacer l'image par du texte",
        "en": "Replacing the image with text",
        "correct": false
       }
      ]
     },
     {
      "fr": "Un client fournit des photos prises avec différents appareils et éclairages. Quelle étape est essentielle avant de les utiliser ensemble?",
      "en": "A client provides photos taken with different cameras and lighting. What step is essential before using them together?",
      "choices": [
       {
        "fr": "Uniformiser la balance des couleurs et la qualité entre les images",
        "en": "Standardizing the colour balance and quality across the images",
        "correct": true
       },
       {
        "fr": "Les utiliser telles quelles sans vérification",
        "en": "Using them as-is with no review",
        "correct": false
       },
       {
        "fr": "Supprimer la moitié des photos au hasard",
        "en": "Randomly deleting half the photos",
        "correct": false
       },
       {
        "fr": "Ignorer les différences",
        "en": "Ignoring the differences",
        "correct": false
       }
      ]
     },
     {
      "type": "tf",
      "fr": "L'acquisition d'images inclut autant la photographie, la numérisation que le téléchargement de banques d'images.",
      "en": "Image acquisition includes photography, scanning, and downloading from stock image libraries alike.",
      "isTrue": true
     }
    ]
   }
  ]
 },
 {
  "id": "info07",
  "order": 7,
  "title_fr": "Gestion de profils colorimétriques",
  "title_en": "Colour Profile Management",
  "icon": "🎨",
  "tiers": [
   {
    "level": 1,
    "questions": [
     {
      "fr": "Quel mode colorimétrique est généralement utilisé pour l'impression?",
      "en": "Which colour mode is generally used for printing?",
      "choices": [
       {
        "fr": "CMJN (CMYK)",
        "en": "CMYK",
        "correct": true
       },
       {
        "fr": "RVB (RGB)",
        "en": "RGB",
        "correct": false
       },
       {
        "fr": "Niveaux de gris uniquement",
        "en": "Grayscale only",
        "correct": false
       },
       {
        "fr": "HTML uniquement",
        "en": "HTML only",
        "correct": false
       }
      ]
     },
     {
      "fr": "Quel mode colorimétrique est généralement utilisé pour les écrans?",
      "en": "Which colour mode is generally used for screens?",
      "choices": [
       {
        "fr": "RVB (RGB)",
        "en": "RGB",
        "correct": true
       },
       {
        "fr": "CMJN (CMYK)",
        "en": "CMYK",
        "correct": false
       },
       {
        "fr": "Pantone seul",
        "en": "Pantone only",
        "correct": false
       },
       {
        "fr": "Niveaux de gris",
        "en": "Grayscale",
        "correct": false
       }
      ]
     },
     {
      "type": "tf",
      "fr": "Un profil colorimétrique aide à obtenir des couleurs cohérentes entre différents appareils.",
      "en": "A colour profile helps achieve consistent colours across different devices.",
      "isTrue": true
     }
    ]
   },
   {
    "level": 2,
    "questions": [
     {
      "fr": "Pourquoi une couleur vue à l'écran peut-elle différer une fois imprimée?",
      "en": "Why can a colour seen on screen differ once printed?",
      "choices": [
       {
        "fr": "Les gammes de couleurs (gamuts) du RVB et du CMJN sont différentes",
        "en": "The RGB and CMYK colour gamuts are different",
        "correct": true
       },
       {
        "fr": "Les écrans n'affichent jamais de couleurs",
        "en": "Screens never display colours",
        "correct": false
       },
       {
        "fr": "L'imprimante ignore toujours les couleurs",
        "en": "Printers always ignore colours",
        "correct": false
       },
       {
        "fr": "Cela n'arrive jamais",
        "en": "This never happens",
        "correct": false
       }
      ]
     },
     {
      "fr": "Que permet la calibration d'un moniteur?",
      "en": "What does calibrating a monitor allow?",
      "choices": [
       {
        "fr": "Afficher les couleurs de façon plus fidèle et cohérente",
        "en": "Displaying colours more accurately and consistently",
        "correct": true
       },
       {
        "fr": "Augmenter la résolution de l'écran",
        "en": "Increasing the screen's resolution",
        "correct": false
       },
       {
        "fr": "Accélérer l'ordinateur",
        "en": "Speeding up the computer",
        "correct": false
       },
       {
        "fr": "Économiser de l'encre",
        "en": "Saving ink",
        "correct": false
       }
      ]
     },
     {
      "type": "tf",
      "fr": "La conversion du RVB vers le CMJN ne change jamais l'apparence des couleurs, peu importe leur intensité.",
      "en": "Converting from RGB to CMYK never changes the appearance of colours, regardless of their intensity.",
      "isTrue": false
     }
    ]
   },
   {
    "level": 3,
    "questions": [
     {
      "fr": "Un client se plaint que les couleurs imprimées sont plus ternes qu'à l'écran. Quelle est une cause probable?",
      "en": "A client complains that the printed colours look duller than on screen. What is a likely cause?",
      "choices": [
       {
        "fr": "Le document a été conçu en RVB sans conversion ni vérification en CMJN",
        "en": "The document was designed in RGB with no CMYK conversion or review",
        "correct": true
       },
       {
        "fr": "L'imprimante est neuve",
        "en": "The printer is new",
        "correct": false
       },
       {
        "fr": "Le papier est trop blanc",
        "en": "The paper is too white",
        "correct": false
       },
       {
        "fr": "Uniquement pour respecter une norme esthétique du studio",
        "en": "Only to meet the studio's appearance standards",
        "correct": false
       }
      ]
     },
     {
      "fr": "Pourquoi utiliser un profil ICC spécifique à l'imprimante et au papier utilisés?",
      "en": "Why use an ICC profile specific to the printer and paper being used?",
      "choices": [
       {
        "fr": "Pour prévoir plus précisément le rendu final des couleurs",
        "en": "To more accurately predict the final colour result",
        "correct": true
       },
       {
        "fr": "Pour respecter les exigences techniques de l'imprimeur",
        "en": "To follow the printer's technical requirements",
        "correct": false
       },
       {
        "fr": "Uniquement pour respecter une norme esthétique du studio",
        "en": "Only to meet the studio's appearance standards",
        "correct": false
       },
       {
        "fr": "Pour économiser du papier",
        "en": "To save paper",
        "correct": false
       }
      ]
     },
     {
      "type": "tf",
      "fr": "La gestion des profils colorimétriques vise à réduire les surprises entre l'aperçu à l'écran et le résultat imprimé.",
      "en": "Colour profile management aims to reduce surprises between the on-screen preview and the printed result.",
      "isTrue": true
     }
    ]
   }
  ]
 },
 {
  "id": "info08",
  "order": 8,
  "title_fr": "Images composites pour impressions normalisées",
  "title_en": "Composite Images for Standardized Print",
  "icon": "🖨️",
  "tiers": [
   {
    "level": 1,
    "questions": [
     {
      "fr": "Une image composite combine généralement...",
      "en": "A composite image generally combines...",
      "choices": [
       {
        "fr": "Plusieurs images ou éléments en une seule composition",
        "en": "Several images or elements into a single composition",
        "correct": true
       },
       {
        "fr": "Un seul pixel",
        "en": "A single pixel",
        "correct": false
       },
       {
        "fr": "Uniquement du texte",
        "en": "Only text",
        "correct": false
       },
       {
        "fr": "Un fichier audio",
        "en": "An audio file",
        "correct": false
       }
      ]
     },
     {
      "fr": "Pourquoi respecter les normes d'impression (résolution, mode couleur) lors de la création d'une composition destinée à l'impression?",
      "en": "Why follow print standards (resolution, colour mode) when creating a composition intended for print?",
      "choices": [
       {
        "fr": "Pour garantir un résultat de qualité conforme aux standards",
        "en": "To guarantee a quality result that meets standards",
        "correct": true
       },
       {
        "fr": "Cela ne concerne que la présentation visuelle du fichier",
        "en": "It only concerns the file's visual presentation",
        "correct": false
       },
       {
        "fr": "Pour respecter une norme de présentation du dossier",
        "en": "To follow a file presentation standard",
        "correct": false
       },
       {
        "fr": "Pour augmenter le prix",
        "en": "To increase the price",
        "correct": false
       }
      ]
     },
     {
      "type": "tf",
      "fr": "Le détourage (découpe précise d'un sujet) est une technique fréquente en composition d'images.",
      "en": "Cutting out (precisely isolating a subject) is a common technique in image compositing.",
      "isTrue": true
     }
    ]
   },
   {
    "level": 2,
    "questions": [
     {
      "fr": "Quel élément assure une transition naturelle entre deux images assemblées?",
      "en": "What ensures a natural transition between two assembled images?",
      "choices": [
       {
        "fr": "Un masque de fusion bien réalisé",
        "en": "A well-made blending mask",
        "correct": true
       },
       {
        "fr": "Une bordure noire épaisse",
        "en": "A thick black border",
        "correct": false
       },
       {
        "fr": "Un texte superposé",
        "en": "Overlaid text",
        "correct": false
       },
       {
        "fr": "Aucun élément particulier",
        "en": "No particular element",
        "correct": false
       }
      ]
     },
     {
      "fr": "Pourquoi vérifier la résolution de chaque image avant de les assembler pour l'impression?",
      "en": "Why check each image's resolution before assembling them for print?",
      "choices": [
       {
        "fr": "Pour éviter qu'une image de basse résolution nuise à la qualité globale",
        "en": "To avoid a low-resolution image hurting the overall quality",
        "correct": true
       },
       {
        "fr": "Uniquement pour respecter une norme esthétique du studio",
        "en": "Only to meet the studio's appearance standards",
        "correct": false
       },
       {
        "fr": "Pour accélérer le travail",
        "en": "To speed up the work",
        "correct": false
       },
       {
        "fr": "Pour réduire le poids du fichier final",
        "en": "To reduce the final file size",
        "correct": false
       }
      ]
     },
     {
      "type": "tf",
      "fr": "Une composition destinée à l'impression normalisée peut rester en mode RVB sans problème.",
      "en": "A composition intended for standardized printing can safely stay in RGB mode.",
      "isTrue": false
     }
    ]
   },
   {
    "level": 3,
    "questions": [
     {
      "fr": "Une composition destinée à l'impression combine des images de résolutions très différentes. Quel est le risque principal?",
      "en": "A print composition combines images of very different resolutions. What is the main risk?",
      "choices": [
       {
        "fr": "Un résultat final de qualité inégale, certaines zones étant floues ou pixelisées",
        "en": "An uneven final result, with some areas blurry or pixelated",
        "correct": true
       },
       {
        "fr": "Aucun risque",
        "en": "No risk",
        "correct": false
       },
       {
        "fr": "Un fichier trop petit",
        "en": "A file that's too small",
        "correct": false
       },
       {
        "fr": "Une impression trop rapide",
        "en": "Printing that's too fast",
        "correct": false
       }
      ]
     },
     {
      "fr": "Quelle pratique améliore le réalisme d'une composition d'images provenant de sources différentes?",
      "en": "What practice improves the realism of a composition made from different image sources?",
      "choices": [
       {
        "fr": "Uniformiser l'éclairage, les ombres et la balance des couleurs entre les éléments",
        "en": "Standardizing the lighting, shadows and colour balance across elements",
        "correct": true
       },
       {
        "fr": "Ignorer les différences d'éclairage",
        "en": "Ignoring lighting differences",
        "correct": false
       },
       {
        "fr": "Ajouter le plus d'effets possible",
        "en": "Adding as many effects as possible",
        "correct": false
       },
       {
        "fr": "Réduire la résolution de toutes les images",
        "en": "Reducing the resolution of all images",
        "correct": false
       }
      ]
     },
     {
      "type": "tf",
      "fr": "Les images composites pour l'impression normalisée doivent respecter les exigences techniques du procédé d'impression utilisé.",
      "en": "Composite images for standardized print must meet the technical requirements of the printing process used.",
      "isTrue": true
     }
    ]
   }
  ]
 },
 {
  "id": "info09",
  "order": 9,
  "title_fr": "Images composites pour interfaces visuelles",
  "title_en": "Composite Images for Visual Interfaces",
  "icon": "🖥️",
  "tiers": [
   {
    "level": 1,
    "questions": [
     {
      "fr": "Pour le web, quel format d'image est souvent utilisé pour préserver la transparence?",
      "en": "For the web, which image format is often used to preserve transparency?",
      "choices": [
       {
        "fr": "PNG",
        "en": "PNG",
        "correct": true
       },
       {
        "fr": "JPEG",
        "en": "JPEG",
        "correct": false
       },
       {
        "fr": "BMP",
        "en": "BMP",
        "correct": false
       },
       {
        "fr": "TXT",
        "en": "TXT",
        "correct": false
       }
      ]
     },
     {
      "fr": "Pourquoi optimiser le poids (taille de fichier) des images pour une interface visuelle numérique?",
      "en": "Why optimize the file size of images for a digital visual interface?",
      "choices": [
       {
        "fr": "Pour accélérer le chargement de la page ou de l'application",
        "en": "To speed up the loading of the page or app",
        "correct": true
       },
       {
        "fr": "Cela concerne surtout la paperasse du projet, jamais le design",
        "en": "It mainly concerns the project's paperwork, never the design",
        "correct": false
       },
       {
        "fr": "Pour respecter les exigences d'accessibilité du site",
        "en": "To follow the site's accessibility requirements",
        "correct": false
       },
       {
        "fr": "Pour augmenter le prix d'hébergement",
        "en": "To increase hosting costs",
        "correct": false
       }
      ]
     },
     {
      "type": "tf",
      "fr": "Les images destinées aux interfaces numériques utilisent généralement le mode RVB.",
      "en": "Images intended for digital interfaces generally use RGB mode.",
      "isTrue": true
     }
    ]
   },
   {
    "level": 2,
    "questions": [
     {
      "fr": "Quel format d'image convient bien pour des photos avec beaucoup de couleurs sur le web?",
      "en": "Which image format works well for photos with lots of colours on the web?",
      "choices": [
       {
        "fr": "JPEG",
        "en": "JPEG",
        "correct": true
       },
       {
        "fr": "Un fichier texte",
        "en": "A text file",
        "correct": false
       },
       {
        "fr": "Un fichier audio",
        "en": "An audio file",
        "correct": false
       },
       {
        "fr": "Un fichier vidéo brut",
        "en": "A raw video file",
        "correct": false
       }
      ]
     },
     {
      "fr": "Pourquoi prévoir plusieurs tailles (résolutions) d'une même image pour un site web responsive?",
      "en": "Why prepare several sizes (resolutions) of the same image for a responsive website?",
      "choices": [
       {
        "fr": "Pour s'adapter à différentes tailles d'écran sans nuire à la performance",
        "en": "To adapt to different screen sizes without hurting performance",
        "correct": true
       },
       {
        "fr": "Cela sert uniquement à remplir un champ obligatoire du logiciel",
        "en": "It only serves to fill a mandatory field in the software",
        "correct": false
       },
       {
        "fr": "Pour respecter les étapes de validation prévues au projet",
        "en": "To follow the project's planned validation steps",
        "correct": false
       },
       {
        "fr": "Pour augmenter le prix",
        "en": "To increase the price",
        "correct": false
       }
      ]
     },
     {
      "type": "tf",
      "fr": "La compression d'une image n'a jamais d'effet visible sur sa qualité, peu importe le niveau appliqué.",
      "en": "Image compression never has a visible effect on quality, regardless of the level applied.",
      "isTrue": false
     }
    ]
   },
   {
    "level": 3,
    "questions": [
     {
      "fr": "Une interface visuelle destinée à plusieurs appareils (mobile, tablette, ordinateur) nécessite quelle approche pour les images?",
      "en": "A visual interface for multiple devices (mobile, tablet, computer) requires which approach for images?",
      "choices": [
       {
        "fr": "Prévoir des versions adaptées à chaque taille d'écran (design adaptatif)",
        "en": "Preparing versions adapted to each screen size (responsive design)",
        "correct": true
       },
       {
        "fr": "Utiliser une seule image géante partout",
        "en": "Using a single giant image everywhere",
        "correct": false
       },
       {
        "fr": "Ignorer les différences d'écran",
        "en": "Ignoring screen differences",
        "correct": false
       },
       {
        "fr": "Ne jamais utiliser d'images",
        "en": "Never using images",
        "correct": false
       }
      ]
     },
     {
      "fr": "Une image composite pour le web a un poids très élevé, ce qui ralentit le site. Quelle est la bonne pratique?",
      "en": "A web composite image has a very large file size, which slows down the site. What is the correct practice?",
      "choices": [
       {
        "fr": "Optimiser/compresser l'image sans sacrifier une qualité visuelle acceptable",
        "en": "Optimizing/compressing the image without sacrificing acceptable visual quality",
        "correct": true
       },
       {
        "fr": "Laisser le fichier tel quel",
        "en": "Leaving the file as is",
        "correct": false
       },
       {
        "fr": "Supprimer le site web",
        "en": "Deleting the website",
        "correct": false
       },
       {
        "fr": "Ajouter encore plus d'images lourdes",
        "en": "Adding even more heavy images",
        "correct": false
       }
      ]
     },
     {
      "type": "tf",
      "fr": "Tous les formats d'image (JPEG, PNG, SVG) sont interchangeables et produisent toujours des résultats identiques.",
      "en": "All image formats (JPEG, PNG, SVG) are interchangeable and always produce identical results.",
      "isTrue": false
     }
    ]
   }
  ]
 },
 {
  "id": "info10",
  "order": 10,
  "title_fr": "Outils de révision de textes en français",
  "title_en": "French Text Revision Tools",
  "icon": "🔍",
  "tiers": [
   {
    "level": 1,
    "questions": [
     {
      "fr": "Quel outil aide à repérer les fautes d'orthographe dans un texte avant sa mise en page?",
      "en": "Which tool helps spot spelling mistakes in a text before layout?",
      "choices": [
       {
        "fr": "Le correcteur orthographique",
        "en": "The spell-checker",
        "correct": true
       },
       {
        "fr": "Le compte-gouttes",
        "en": "The eyedropper tool",
        "correct": false
       },
       {
        "fr": "L'outil plume",
        "en": "The pen tool",
        "correct": false
       },
       {
        "fr": "Le nuancier de couleurs",
        "en": "The colour swatch panel",
        "correct": false
       }
      ]
     },
     {
      "fr": "Pourquoi réviser un texte avant de l'intégrer à une mise en page finale?",
      "en": "Why proofread a text before including it in a final layout?",
      "choices": [
       {
        "fr": "Pour éviter de diffuser des erreurs dans le document final",
        "en": "To avoid distributing errors in the final document",
        "correct": true
       },
       {
        "fr": "Cela dépend uniquement des préférences personnelles de l'infographe",
        "en": "It depends only on the designer's personal preferences",
        "correct": false
       },
       {
        "fr": "Pour respecter les étapes de validation prévues au projet",
        "en": "To follow the project's planned validation steps",
        "correct": false
       },
       {
        "fr": "Pour augmenter le prix",
        "en": "To increase the price",
        "correct": false
       }
      ]
     },
     {
      "type": "tf",
      "fr": "Une erreur repérée après l'impression est plus coûteuse à corriger qu'avant.",
      "en": "An error found after printing is more costly to fix than before.",
      "isTrue": true
     }
    ]
   },
   {
    "level": 2,
    "questions": [
     {
      "fr": "Quelle pratique aide à repérer les erreurs qu'un correcteur automatique pourrait manquer?",
      "en": "What practice helps catch errors an automatic checker might miss?",
      "choices": [
       {
        "fr": "Une relecture humaine attentive",
        "en": "A careful human proofreading pass",
        "correct": true
       },
       {
        "fr": "Ignorer le texte complètement",
        "en": "Ignoring the text completely",
        "correct": false
       },
       {
        "fr": "Se fier uniquement au correcteur",
        "en": "Relying only on the checker",
        "correct": false
       },
       {
        "fr": "Supprimer le texte",
        "en": "Deleting the text",
        "correct": false
       }
      ]
     },
     {
      "fr": "Pourquoi vérifier la cohérence typographique (espaces, guillemets, tirets) dans un texte long?",
      "en": "Why check typographic consistency (spaces, quotation marks, dashes) in a long text?",
      "choices": [
       {
        "fr": "Pour assurer une apparence professionnelle et uniforme",
        "en": "To ensure a professional and consistent appearance",
        "correct": true
       },
       {
        "fr": "Cela ne concerne que la présentation visuelle du fichier",
        "en": "It only concerns the file's visual presentation",
        "correct": false
       },
       {
        "fr": "Pour respecter la hiérarchie visuelle prévue par la mise en page",
        "en": "To follow the visual hierarchy set by the layout",
        "correct": false
       },
       {
        "fr": "Pour respecter la structure de fichier standard du studio",
        "en": "To follow the studio's standard file structure",
        "correct": false
       }
      ]
     },
     {
      "type": "tf",
      "fr": "Les infographes n'ont jamais à se soucier des erreurs de texte; cela relève uniquement du rédacteur.",
      "en": "Graphic designers never need to worry about text errors; that's solely the writer's responsibility.",
      "isTrue": false
     }
    ]
   },
   {
    "level": 3,
    "questions": [
     {
      "fr": "Un texte fourni par le client contient plusieurs erreurs de grammaire. Quelle est la bonne pratique pour un infographe?",
      "en": "A text provided by the client contains several grammar errors. What is the correct practice for a designer?",
      "choices": [
       {
        "fr": "Signaler les erreurs au client ou au responsable avant de finaliser la mise en page",
        "en": "Flagging the errors to the client or person in charge before finalizing the layout",
        "correct": true
       },
       {
        "fr": "Corriger sans en parler à personne",
        "en": "Correcting them without telling anyone",
        "correct": false
       },
       {
        "fr": "Ignorer les erreurs",
        "en": "Ignoring the errors",
        "correct": false
       },
       {
        "fr": "Refuser de continuer le projet",
        "en": "Refusing to continue the project",
        "correct": false
       }
      ]
     },
     {
      "fr": "Une mise en page est presque terminée quand une erreur de texte est repérée. Quelle est la bonne pratique?",
      "en": "A layout is nearly finished when a text error is spotted. What is the correct practice?",
      "choices": [
       {
        "fr": "Corriger l'erreur et vérifier l'impact sur la mise en page (espacement, sauts de ligne)",
        "en": "Fixing the error and checking its impact on the layout (spacing, line breaks)",
        "correct": true
       },
       {
        "fr": "Ignorer l'erreur pour respecter l'échéance",
        "en": "Ignoring the error to meet the deadline",
        "correct": false
       },
       {
        "fr": "Recommencer tout le projet à zéro",
        "en": "Starting the whole project over from scratch",
        "correct": false
       },
       {
        "fr": "Livrer le document sans vérifier",
        "en": "Delivering the document without checking",
        "correct": false
       }
      ]
     },
     {
      "type": "tf",
      "fr": "La qualité du français écrit contribue à la crédibilité professionnelle d'un document final.",
      "en": "The quality of written French contributes to the professional credibility of a final document.",
      "isTrue": true
     }
    ]
   }
  ]
 },
 {
  "id": "info11",
  "order": 11,
  "title_fr": "Éléments typographiques",
  "title_en": "Typographic Elements",
  "icon": "🔤",
  "tiers": [
   {
    "level": 1,
    "questions": [
     {
      "fr": "Qu'est-ce qu'une police avec empattements (serif)?",
      "en": "What is a serif typeface?",
      "choices": [
       {
        "fr": "Une police avec de petits traits terminaux sur les lettres",
        "en": "A typeface with small terminal strokes on the letters",
        "correct": true
       },
       {
        "fr": "Une police uniquement en majuscules",
        "en": "A typeface that is all caps",
        "correct": false
       },
       {
        "fr": "Une police manuscrite",
        "en": "A handwritten typeface",
        "correct": false
       },
       {
        "fr": "Une police sans lettres",
        "en": "A typeface with no letters",
        "correct": false
       }
      ]
     },
     {
      "fr": "Pourquoi limiter le nombre de polices différentes dans un document?",
      "en": "Why limit the number of different fonts in a document?",
      "choices": [
       {
        "fr": "Pour garder une apparence cohérente et professionnelle",
        "en": "To keep a consistent, professional look",
        "correct": true
       },
       {
        "fr": "Pour respecter la hiérarchie visuelle prévue par la mise en page",
        "en": "To follow the visual hierarchy set by the layout",
        "correct": false
       },
       {
        "fr": "Uniquement pour respecter une norme esthétique du studio",
        "en": "Only to meet the studio's appearance standards",
        "correct": false
       },
       {
        "fr": "Pour augmenter la taille du fichier",
        "en": "To increase the file size",
        "correct": false
       }
      ]
     },
     {
      "type": "tf",
      "fr": "L'interlignage (espacement entre les lignes) influence la lisibilité d'un texte.",
      "en": "Line spacing (leading) affects a text's readability.",
      "isTrue": true
     }
    ]
   },
   {
    "level": 2,
    "questions": [
     {
      "fr": "Que signifie le « crénage » en typographie?",
      "en": "What does 'kerning' mean in typography?",
      "choices": [
       {
        "fr": "L'ajustement de l'espace entre deux caractères précis",
        "en": "Adjusting the space between two specific characters",
        "correct": true
       },
       {
        "fr": "Le choix de la couleur du texte",
        "en": "Choosing the text colour",
        "correct": false
       },
       {
        "fr": "L'ajout d'une ombre portée",
        "en": "Adding a drop shadow",
        "correct": false
       },
       {
        "fr": "Le changement de langue du texte",
        "en": "Changing the text's language",
        "correct": false
       }
      ]
     },
     {
      "fr": "Pourquoi éviter d'étirer ou de compresser une police pour l'ajuster à un espace?",
      "en": "Why avoid stretching or squishing a font to fit a space?",
      "choices": [
       {
        "fr": "Cela déforme les lettres et nuit à la lisibilité et au professionnalisme",
        "en": "It distorts the letters and hurts readability and professionalism",
        "correct": true
       },
       {
        "fr": "Cela améliore toujours la lisibilité",
        "en": "It always improves readability",
        "correct": false
       },
       {
        "fr": "Uniquement pour respecter une norme esthétique du studio",
        "en": "Only to meet the studio's appearance standards",
        "correct": false
       },
       {
        "fr": "C'est la seule façon de faire",
        "en": "It's the only way to do it",
        "correct": false
       }
      ]
     },
     {
      "type": "tf",
      "fr": "La hiérarchie typographique n'a aucun effet sur la lecture; seule la taille du texte principal compte.",
      "en": "Typographic hierarchy has no effect on reading; only the main text size matters.",
      "isTrue": false
     }
    ]
   },
   {
    "level": 3,
    "questions": [
     {
      "fr": "Un texte en petits caractères doit être lisible dans un espace très restreint. Quelle pratique privilégier?",
      "en": "Small text must remain readable in a very tight space. Which practice should be favoured?",
      "choices": [
       {
        "fr": "Choisir une police lisible à petite taille et ajuster l'interlignage plutôt que de compresser le texte",
        "en": "Choosing a font that's legible at small sizes and adjusting the line spacing rather than squishing the text",
        "correct": true
       },
       {
        "fr": "Compresser le texte horizontalement jusqu'à ce qu'il rentre",
        "en": "Squishing the text horizontally until it fits",
        "correct": false
       },
       {
        "fr": "Réduire la taille à 1 point",
        "en": "Reducing the size to 1 point",
        "correct": false
       },
       {
        "fr": "Supprimer une partie du texte sans en parler",
        "en": "Deleting part of the text without telling anyone",
        "correct": false
       }
      ]
     },
     {
      "fr": "Pourquoi une police décorative peut-elle nuire à la lisibilité d'un long texte courant?",
      "en": "Why can a decorative typeface hurt the readability of long body text?",
      "choices": [
       {
        "fr": "Les formes complexes ralentissent la lecture sur de longs passages",
        "en": "The complex shapes slow down reading over long passages",
        "correct": true
       },
       {
        "fr": "Les polices décoratives sont toujours plus lisibles",
        "en": "Decorative fonts are always more readable",
        "correct": false
       },
       {
        "fr": "Cela concerne surtout la paperasse du projet, jamais le design",
        "en": "It mainly concerns the project's paperwork, never the design",
        "correct": false
       },
       {
        "fr": "Le texte devient automatiquement plus court",
        "en": "The text automatically becomes shorter",
        "correct": false
       }
      ]
     },
     {
      "type": "tf",
      "fr": "Le choix typographique doit toujours servir la lisibilité et le ton du message, pas seulement l'esthétique.",
      "en": "Typographic choices should always serve the readability and tone of the message, not just aesthetics.",
      "isTrue": true
     }
    ]
   }
  ]
 },
 {
  "id": "info12",
  "order": 12,
  "title_fr": "Mises en pages simples pour imprimés",
  "title_en": "Simple Layouts for Print",
  "icon": "📄",
  "tiers": [
   {
    "level": 1,
    "questions": [
     {
      "fr": "Qu'est-ce qu'une grille de mise en page?",
      "en": "What is a layout grid?",
      "choices": [
       {
        "fr": "Une structure invisible qui aide à aligner les éléments d'une page",
        "en": "An invisible structure that helps align a page's elements",
        "correct": true
       },
       {
        "fr": "Une bordure décorative visible",
        "en": "A visible decorative border",
        "correct": false
       },
       {
        "fr": "Un type de police",
        "en": "A type of font",
        "correct": false
       },
       {
        "fr": "Un mode de couleur",
        "en": "A colour mode",
        "correct": false
       }
      ]
     },
     {
      "fr": "Pourquoi laisser des marges suffisantes autour du contenu d'un document imprimé?",
      "en": "Why leave sufficient margins around the content of a printed document?",
      "choices": [
       {
        "fr": "Pour éviter que le contenu soit coupé lors de l'impression ou du massicotage",
        "en": "To avoid content being cut off during printing or trimming",
        "correct": true
       },
       {
        "fr": "Cela concerne surtout la paperasse du projet, jamais le design",
        "en": "It mainly concerns the project's paperwork, never the design",
        "correct": false
       },
       {
        "fr": "Pour respecter les exigences techniques de l'imprimeur",
        "en": "To follow the printer's technical requirements",
        "correct": false
       },
       {
        "fr": "Pour économiser de l'encre uniquement",
        "en": "Only to save ink",
        "correct": false
       }
      ]
     },
     {
      "type": "tf",
      "fr": "L'alignement des éléments améliore la clarté visuelle d'une mise en page.",
      "en": "Aligning elements improves a layout's visual clarity.",
      "isTrue": true
     }
    ]
   },
   {
    "level": 2,
    "questions": [
     {
      "fr": "Que signifie le « fond perdu » (bleed) en impression?",
      "en": "What does 'bleed' mean in printing?",
      "choices": [
       {
        "fr": "Un débordement du contenu au-delà du format final pour éviter les bandes blanches après la coupe",
        "en": "Content extending past the final trim size to avoid white edges after cutting",
        "correct": true
       },
       {
        "fr": "Une tache d'encre accidentelle",
        "en": "An accidental ink stain",
        "correct": false
       },
       {
        "fr": "Une police manquante",
        "en": "A missing font",
        "correct": false
       },
       {
        "fr": "Une erreur de couleur",
        "en": "A colour error",
        "correct": false
       }
      ]
     },
     {
      "fr": "Pourquoi utiliser une grille de colonnes pour un document texte dense?",
      "en": "Why use a column grid for a text-dense document?",
      "choices": [
       {
        "fr": "Pour organiser le contenu de façon lisible et cohérente",
        "en": "To organize the content in a readable and consistent way",
        "correct": true
       },
       {
        "fr": "Pour respecter la hiérarchie visuelle prévue par la mise en page",
        "en": "To follow the visual hierarchy set by the layout",
        "correct": false
       },
       {
        "fr": "Cela sert uniquement à remplir un champ obligatoire du logiciel",
        "en": "It only serves to fill a mandatory field in the software",
        "correct": false
       },
       {
        "fr": "Pour réduire le nombre de pages à zéro",
        "en": "To reduce the page count to zero",
        "correct": false
       }
      ]
     },
     {
      "type": "tf",
      "fr": "L'équilibre d'une mise en page n'a aucune influence sur la façon dont l'œil parcourt le document.",
      "en": "Layout balance has no influence on how the eye moves through the document.",
      "isTrue": false
     }
    ]
   },
   {
    "level": 3,
    "questions": [
     {
      "fr": "Un document est massicoté légèrement de travers après impression, coupant une partie du texte près du bord. Quelle pratique aurait évité ce problème?",
      "en": "A document is trimmed slightly crooked after printing, cutting off some text near the edge. What practice would have prevented this?",
      "choices": [
       {
        "fr": "Prévoir une marge de sécurité suffisante entre le texte et le bord de coupe",
        "en": "Leaving a sufficient safety margin between the text and the trim edge",
        "correct": true
       },
       {
        "fr": "Coller le texte tout contre le bord",
        "en": "Placing the text right against the edge",
        "correct": false
       },
       {
        "fr": "Ignorer les marges",
        "en": "Ignoring margins",
        "correct": false
       },
       {
        "fr": "Réduire la taille du papier après impression",
        "en": "Reducing the paper size after printing",
        "correct": false
       }
      ]
     },
     {
      "fr": "Pourquoi la cohérence visuelle entre plusieurs pages d'un même document est-elle importante?",
      "en": "Why is visual consistency across multiple pages of the same document important?",
      "choices": [
       {
        "fr": "Pour donner une impression professionnelle et faciliter la lecture",
        "en": "To give a professional impression and make reading easier",
        "correct": true
       },
       {
        "fr": "Cela dépend uniquement des préférences personnelles de l'infographe",
        "en": "It depends only on the designer's personal preferences",
        "correct": false
       },
       {
        "fr": "Pour respecter le calendrier de production fixé par le studio",
        "en": "To follow the studio's production schedule",
        "correct": false
       },
       {
        "fr": "Pour respecter une étape administrative sans lien direct avec la tâche",
        "en": "To follow an administrative step unrelated to the task",
        "correct": false
       }
      ]
     },
     {
      "type": "tf",
      "fr": "Une mise en page simple bien construite respecte les marges, le fond perdu et l'alignement des éléments.",
      "en": "A well-built simple layout respects margins, bleed and element alignment.",
      "isTrue": true
     }
    ]
   }
  ]
 },
 {
  "id": "info13",
  "order": 13,
  "title_fr": "Mises en pages simples pour interfaces visuelles",
  "title_en": "Simple Layouts for Visual Interfaces",
  "icon": "📱",
  "tiers": [
   {
    "level": 1,
    "questions": [
     {
      "fr": "Pourquoi une mise en page numérique doit-elle s'adapter à différentes tailles d'écran?",
      "en": "Why must a digital layout adapt to different screen sizes?",
      "choices": [
       {
        "fr": "Parce que les visiteurs utilisent des appareils de tailles très variées",
        "en": "Because visitors use devices of very different sizes",
        "correct": true
       },
       {
        "fr": "Cela ne concerne que la présentation visuelle du fichier",
        "en": "It only concerns the file's visual presentation",
        "correct": false
       },
       {
        "fr": "Pour respecter une norme de présentation du dossier",
        "en": "To follow a file presentation standard",
        "correct": false
       },
       {
        "fr": "Pour respecter les exigences d'accessibilité du site",
        "en": "To follow the site's accessibility requirements",
        "correct": false
       }
      ]
     },
     {
      "fr": "Qu'est-ce qu'une mise en page « responsive »?",
      "en": "What is a 'responsive' layout?",
      "choices": [
       {
        "fr": "Une mise en page qui s'ajuste automatiquement selon la taille de l'écran",
        "en": "A layout that automatically adjusts based on screen size",
        "correct": true
       },
       {
        "fr": "Une mise en page fixe pour un seul écran",
        "en": "A fixed layout for a single screen",
        "correct": false
       },
       {
        "fr": "Une mise en page imprimée uniquement",
        "en": "A print-only layout",
        "correct": false
       },
       {
        "fr": "Une mise en page sans images",
        "en": "A layout with no images",
        "correct": false
       }
      ]
     },
     {
      "type": "tf",
      "fr": "L'espace blanc est aussi important en numérique qu'en imprimé pour la lisibilité.",
      "en": "White space matters as much in digital as in print for readability.",
      "isTrue": true
     }
    ]
   },
   {
    "level": 2,
    "questions": [
     {
      "fr": "Pourquoi prévoir une zone cliquable suffisamment grande pour les boutons sur mobile?",
      "en": "Why make button tap targets large enough on mobile?",
      "choices": [
       {
        "fr": "Pour faciliter l'interaction tactile et éviter les erreurs de clic",
        "en": "To make tapping easier and avoid mis-taps",
        "correct": true
       },
       {
        "fr": "Uniquement pour respecter une norme esthétique du studio",
        "en": "Only to meet the studio's appearance standards",
        "correct": false
       },
       {
        "fr": "Pour respecter les exigences d'accessibilité de l'interface",
        "en": "To follow the interface's accessibility requirements",
        "correct": false
       },
       {
        "fr": "Pour respecter la structure de navigation prévue par le gabarit",
        "en": "To follow the navigation structure set by the template",
        "correct": false
       }
      ]
     },
     {
      "fr": "Que signifie la hiérarchie visuelle dans une interface numérique?",
      "en": "What does visual hierarchy mean in a digital interface?",
      "choices": [
       {
        "fr": "L'organisation des éléments pour guider l'attention vers ce qui est le plus important",
        "en": "Organizing elements to guide attention toward what matters most",
        "correct": true
       },
       {
        "fr": "L'ordre alphabétique des menus",
        "en": "The alphabetical order of menus",
        "correct": false
       },
       {
        "fr": "Le nombre total de couleurs utilisées",
        "en": "The total number of colours used",
        "correct": false
       },
       {
        "fr": "La taille du fichier",
        "en": "The file size",
        "correct": false
       }
      ]
     },
     {
      "type": "tf",
      "fr": "Varier les couleurs et les polices entre les pages d'une interface renforce généralement l'image de marque.",
      "en": "Varying colours and fonts between an interface's pages generally strengthens brand image.",
      "isTrue": false
     }
    ]
   },
   {
    "level": 3,
    "questions": [
     {
      "fr": "Une mise en page numérique fonctionne bien sur ordinateur mais mal sur mobile (texte trop petit, boutons superposés). Quelle est la bonne pratique?",
      "en": "A digital layout works well on desktop but poorly on mobile (tiny text, overlapping buttons). What is the correct practice?",
      "choices": [
       {
        "fr": "Concevoir ou ajuster la mise en page selon une approche adaptative (responsive) dès le départ",
        "en": "Designing or adjusting the layout with a responsive approach from the start",
        "correct": true
       },
       {
        "fr": "Ignorer les utilisateurs mobiles",
        "en": "Ignoring mobile users",
        "correct": false
       },
       {
        "fr": "Forcer le zoom sur mobile",
        "en": "Forcing zoom on mobile",
        "correct": false
       },
       {
        "fr": "Retirer tout le contenu sur mobile",
        "en": "Removing all content on mobile",
        "correct": false
       }
      ]
     },
     {
      "fr": "Pourquoi tester une interface visuelle sur plusieurs appareils avant la livraison?",
      "en": "Why test a visual interface on multiple devices before delivery?",
      "choices": [
       {
        "fr": "Pour s'assurer que la mise en page reste fonctionnelle et lisible partout",
        "en": "To make sure the layout remains functional and legible everywhere",
        "correct": true
       },
       {
        "fr": "Cela concerne surtout la paperasse du projet, jamais le design",
        "en": "It mainly concerns the project's paperwork, never the design",
        "correct": false
       },
       {
        "fr": "Pour respecter les étapes de vérification finale avant livraison",
        "en": "To follow the final check steps before delivery",
        "correct": false
       },
       {
        "fr": "Pour augmenter le prix du projet",
        "en": "To increase the project's price",
        "correct": false
       }
      ]
     },
     {
      "type": "tf",
      "fr": "Une bonne mise en page numérique privilégie toujours l'esthétique, même au détriment de la facilité d'utilisation.",
      "en": "A good digital layout always favours aesthetics, even at the expense of usability.",
      "isTrue": false
     }
    ]
   }
  ]
 },
 {
  "id": "info14",
  "order": 14,
  "title_fr": "Gabarits de mise en pages simples pour interfaces visuelles",
  "title_en": "Simple Layout Templates for Visual Interfaces",
  "icon": "🧩",
  "tiers": [
   {
    "level": 1,
    "questions": [
     {
      "fr": "Qu'est-ce qu'un gabarit (template) de mise en page?",
      "en": "What is a layout template?",
      "choices": [
       {
        "fr": "Un modèle réutilisable définissant la structure et le style d'un document ou d'une interface",
        "en": "A reusable model defining the structure and style of a document or interface",
        "correct": true
       },
       {
        "fr": "Une image décorative unique",
        "en": "A single decorative image",
        "correct": false
       },
       {
        "fr": "Un mode de couleur",
        "en": "A colour mode",
        "correct": false
       },
       {
        "fr": "Un format vidéo",
        "en": "A video format",
        "correct": false
       }
      ]
     },
     {
      "fr": "Pourquoi créer un gabarit pour un site avec plusieurs pages similaires?",
      "en": "Why create a template for a site with several similar pages?",
      "choices": [
       {
        "fr": "Pour garder une apparence cohérente et gagner du temps",
        "en": "To keep a consistent look and save time",
        "correct": true
       },
       {
        "fr": "Cela sert uniquement à remplir un champ obligatoire du logiciel",
        "en": "It only serves to fill a mandatory field in the software",
        "correct": false
       },
       {
        "fr": "Pour respecter la structure de fichiers standard du studio",
        "en": "To follow the studio's standard file structure",
        "correct": false
       },
       {
        "fr": "Pour respecter les étapes de validation prévues au projet",
        "en": "To follow the project's planned validation steps",
        "correct": false
       }
      ]
     },
     {
      "type": "tf",
      "fr": "Un gabarit bien conçu facilite les mises à jour futures du contenu.",
      "en": "A well-designed template makes future content updates easier.",
      "isTrue": true
     }
    ]
   },
   {
    "level": 2,
    "questions": [
     {
      "fr": "Quel élément d'un gabarit assure la cohérence de la mise en page malgré un contenu variable?",
      "en": "Which element of a template ensures layout consistency despite varying content?",
      "choices": [
       {
        "fr": "Des zones et styles prédéfinis (titres, images, texte)",
        "en": "Predefined zones and styles (titles, images, text)",
        "correct": true
       },
       {
        "fr": "Un fond d'écran aléatoire",
        "en": "A random background image",
        "correct": false
       },
       {
        "fr": "L'absence totale de structure",
        "en": "No structure at all",
        "correct": false
       },
       {
        "fr": "Un nombre de pages fixe",
        "en": "A fixed number of pages",
        "correct": false
       }
      ]
     },
     {
      "fr": "Pourquoi tester un gabarit avec différents contenus (textes longs, courts, images de tailles variées)?",
      "en": "Why test a template with different content (long texts, short texts, images of varying sizes)?",
      "choices": [
       {
        "fr": "Pour s'assurer qu'il reste fonctionnel dans tous les cas réalistes",
        "en": "To make sure it stays functional in all realistic cases",
        "correct": true
       },
       {
        "fr": "Cela dépend uniquement des préférences personnelles de l'infographe",
        "en": "It depends only on the designer's personal preferences",
        "correct": false
       },
       {
        "fr": "Pour respecter une norme de présentation du dossier",
        "en": "To follow a file presentation standard",
        "correct": false
       },
       {
        "fr": "Pour respecter les étapes de validation prévues au projet",
        "en": "To follow the project's planned validation steps",
        "correct": false
       }
      ]
     },
     {
      "type": "tf",
      "fr": "Un gabarit d'interface numérique doit toujours prévoir un contenu de longueur fixe et identique partout.",
      "en": "A digital interface template should always assume fixed, identical content length everywhere.",
      "isTrue": false
     }
    ]
   },
   {
    "level": 3,
    "questions": [
     {
      "fr": "Un gabarit conçu pour du texte court casse visuellement lorsqu'un client insère un texte très long. Quelle est la bonne pratique?",
      "en": "A template designed for short text breaks visually when a client inserts very long text. What is the correct practice?",
      "choices": [
       {
        "fr": "Prévoir dès la conception du gabarit une gestion flexible de la longueur du contenu",
        "en": "Planning flexible handling of content length from the template's design stage",
        "correct": true
       },
       {
        "fr": "Interdire aux clients d'écrire du texte long",
        "en": "Forbidding clients from writing long text",
        "correct": false
       },
       {
        "fr": "Ignorer le problème",
        "en": "Ignoring the problem",
        "correct": false
       },
       {
        "fr": "Réduire la taille du texte à l'infini",
        "en": "Shrinking the text indefinitely",
        "correct": false
       }
      ]
     },
     {
      "fr": "Pourquoi documenter les règles d'utilisation d'un gabarit pour les futurs utilisateurs?",
      "en": "Why document a template's usage rules for future users?",
      "choices": [
       {
        "fr": "Pour préserver la cohérence visuelle même si d'autres personnes l'utilisent plus tard",
        "en": "To preserve visual consistency even when other people use it later",
        "correct": true
       },
       {
        "fr": "Cela ne concerne que la présentation visuelle du fichier",
        "en": "It only concerns the file's visual presentation",
        "correct": false
       },
       {
        "fr": "Pour respecter les exigences d'accessibilité prévues",
        "en": "To follow the planned accessibility requirements",
        "correct": false
       },
       {
        "fr": "Pour empêcher toute utilisation future",
        "en": "To prevent any future use",
        "correct": false
       }
      ]
     },
     {
      "type": "tf",
      "fr": "Un bon gabarit réduit le risque d'incohérence visuelle dans une interface produite par plusieurs personnes.",
      "en": "A good template reduces the risk of visual inconsistency in an interface produced by several people.",
      "isTrue": true
     }
    ]
   }
  ]
 },
 {
  "id": "info15",
  "order": 15,
  "title_fr": "Gabarits de mise en pages pour imprimés",
  "title_en": "Layout Templates for Print",
  "icon": "🗂️",
  "tiers": [
   {
    "level": 1,
    "questions": [
     {
      "fr": "Pourquoi créer un gabarit pour un document imprimé récurrent (ex. bulletin mensuel)?",
      "en": "Why create a template for a recurring printed document (e.g. a monthly newsletter)?",
      "choices": [
       {
        "fr": "Pour gagner du temps et garder une apparence cohérente à chaque édition",
        "en": "To save time and keep a consistent look each issue",
        "correct": true
       },
       {
        "fr": "Uniquement pour respecter une norme esthétique du studio",
        "en": "Only to meet the studio's appearance standards",
        "correct": false
       },
       {
        "fr": "Pour respecter le gabarit standard de la publication",
        "en": "To follow the publication's standard template",
        "correct": false
       },
       {
        "fr": "Pour respecter le calendrier de production fixé par le studio",
        "en": "To follow the studio's production schedule",
        "correct": false
       }
      ]
     },
     {
      "fr": "Qu'est-ce qu'un style de paragraphe dans un gabarit de mise en page?",
      "en": "What is a paragraph style in a layout template?",
      "choices": [
       {
        "fr": "Un ensemble de réglages de mise en forme réutilisable",
        "en": "A reusable set of formatting settings",
        "correct": true
       },
       {
        "fr": "Une image de fond",
        "en": "A background image",
        "correct": false
       },
       {
        "fr": "Un mode de couleur",
        "en": "A colour mode",
        "correct": false
       },
       {
        "fr": "Un format de fichier",
        "en": "A file format",
        "correct": false
       }
      ]
     },
     {
      "type": "tf",
      "fr": "Un gabarit imprimé doit tenir compte des marges, du fond perdu et du format final.",
      "en": "A print template must account for margins, bleed and the final trim size.",
      "isTrue": true
     }
    ]
   },
   {
    "level": 2,
    "questions": [
     {
      "fr": "Pourquoi utiliser des pages maîtres dans un logiciel de mise en page?",
      "en": "Why use master pages in layout software?",
      "choices": [
       {
        "fr": "Pour appliquer automatiquement des éléments récurrents (pagination, en-têtes) à plusieurs pages",
        "en": "To automatically apply recurring elements (page numbers, headers) across multiple pages",
        "correct": true
       },
       {
        "fr": "Pour supprimer toutes les pages",
        "en": "To delete all pages",
        "correct": false
       },
       {
        "fr": "Cela concerne surtout la paperasse du projet, jamais le design",
        "en": "It mainly concerns the project's paperwork, never the design",
        "correct": false
       },
       {
        "fr": "Pour respecter les exigences techniques du logiciel",
        "en": "To follow the software's technical requirements",
        "correct": false
       }
      ]
     },
     {
      "fr": "Quel avantage offre un gabarit bien structuré pour un document produit par plusieurs personnes?",
      "en": "What advantage does a well-structured template offer for a document produced by several people?",
      "choices": [
       {
        "fr": "Une cohérence visuelle même avec plusieurs contributeurs",
        "en": "Visual consistency even with multiple contributors",
        "correct": true
       },
       {
        "fr": "Aucun avantage particulier",
        "en": "No particular advantage",
        "correct": false
       },
       {
        "fr": "Un fichier plus lourd",
        "en": "A heavier file",
        "correct": false
       },
       {
        "fr": "Plus d'erreurs de mise en page",
        "en": "More layout errors",
        "correct": false
       }
      ]
     },
     {
      "type": "tf",
      "fr": "Les repères de coupe et le fond perdu ne sont utiles qu'en numérique, jamais pour l'impression.",
      "en": "Crop marks and bleed are only useful for digital work, never for printing.",
      "isTrue": false
     }
    ]
   },
   {
    "level": 3,
    "questions": [
     {
      "fr": "Un gabarit de bulletin mensuel doit accueillir un nombre variable d'articles chaque mois. Quelle est la bonne pratique de conception?",
      "en": "A monthly newsletter template must accommodate a varying number of articles each month. What is the correct design practice?",
      "choices": [
       {
        "fr": "Prévoir des zones flexibles qui s'adaptent au nombre d'articles sans briser la mise en page",
        "en": "Designing flexible zones that adapt to the number of articles without breaking the layout",
        "correct": true
       },
       {
        "fr": "Fixer le nombre d'articles à un seul chiffre pour toujours",
        "en": "Fixing the number of articles to a single figure forever",
        "correct": false
       },
       {
        "fr": "Ignorer les variations d'un mois à l'autre",
        "en": "Ignoring month-to-month variations",
        "correct": false
       },
       {
        "fr": "Recommencer le gabarit à zéro chaque mois",
        "en": "Rebuilding the template from scratch every month",
        "correct": false
       }
      ]
     },
     {
      "fr": "Pourquoi tester un gabarit imprimé avec un contenu réel avant sa mise en production régulière?",
      "en": "Why test a print template with real content before putting it into regular production?",
      "choices": [
       {
        "fr": "Pour repérer les problèmes potentiels avant qu'ils ne se répètent à chaque édition",
        "en": "To catch potential problems before they repeat in every issue",
        "correct": true
       },
       {
        "fr": "Cela sert uniquement à remplir un champ obligatoire du logiciel",
        "en": "It only serves to fill a mandatory field in the software",
        "correct": false
       },
       {
        "fr": "Pour respecter les étapes de validation prévues au projet",
        "en": "To follow the project's planned validation steps",
        "correct": false
       },
       {
        "fr": "Pour augmenter le prix",
        "en": "To increase the price",
        "correct": false
       }
      ]
     },
     {
      "type": "tf",
      "fr": "Un gabarit bien conçu réduit les erreurs répétitives dans une publication récurrente.",
      "en": "A well-designed template reduces repetitive errors in a recurring publication.",
      "isTrue": true
     }
    ]
   }
  ]
 },
 {
  "id": "info16",
  "order": 16,
  "title_fr": "Imposition et finition",
  "title_en": "Imposition and Finishing",
  "icon": "✂️",
  "tiers": [
   {
    "level": 1,
    "questions": [
     {
      "fr": "Qu'est-ce que l'imposition en impression?",
      "en": "What is imposition in printing?",
      "choices": [
       {
        "fr": "L'arrangement des pages sur une feuille pour l'impression et le pliage",
        "en": "Arranging pages on a sheet for printing and folding",
        "correct": true
       },
       {
        "fr": "Le choix des couleurs d'impression",
        "en": "Choosing the printing colours",
        "correct": false
       },
       {
        "fr": "La correction du texte",
        "en": "Correcting the text",
        "correct": false
       },
       {
        "fr": "La numérisation d'une image",
        "en": "Scanning an image",
        "correct": false
       }
      ]
     },
     {
      "fr": "Qu'est-ce que la finition en impression?",
      "en": "What is finishing in printing?",
      "choices": [
       {
        "fr": "Les opérations après impression comme le pliage, la coupe ou la reliure",
        "en": "Post-print operations such as folding, cutting or binding",
        "correct": true
       },
       {
        "fr": "La sélection de la police",
        "en": "Choosing the font",
        "correct": false
       },
       {
        "fr": "La retouche d'une photo",
        "en": "Retouching a photo",
        "correct": false
       },
       {
        "fr": "La création du logo",
        "en": "Creating the logo",
        "correct": false
       }
      ]
     },
     {
      "type": "tf",
      "fr": "Une mauvaise imposition peut faire apparaître les pages dans le mauvais ordre après pliage.",
      "en": "Incorrect imposition can make pages appear in the wrong order after folding.",
      "isTrue": true
     }
    ]
   },
   {
    "level": 2,
    "questions": [
     {
      "fr": "Pourquoi les repères de coupe (crop marks) sont-ils importants sur un document prêt à imprimer?",
      "en": "Why are crop marks important on a print-ready document?",
      "choices": [
       {
        "fr": "Ils indiquent où couper précisément le document final",
        "en": "They indicate exactly where to cut the final document",
        "correct": true
       },
       {
        "fr": "Ils décorent la page",
        "en": "They decorate the page",
        "correct": false
       },
       {
        "fr": "Ils remplacent le texte",
        "en": "They replace the text",
        "correct": false
       },
       {
        "fr": "Ils changent la couleur du papier",
        "en": "They change the paper's colour",
        "correct": false
       }
      ]
     },
     {
      "fr": "Quel type de finition convient à un livret de plusieurs pages agrafées au centre?",
      "en": "Which type of finishing suits a multi-page booklet stapled at the centre?",
      "choices": [
       {
        "fr": "La reliure piqûre à cheval (agrafage central)",
        "en": "Saddle-stitch binding",
        "correct": true
       },
       {
        "fr": "La reliure spirale uniquement",
        "en": "Spiral binding only",
        "correct": false
       },
       {
        "fr": "Le laminage seul",
        "en": "Lamination alone",
        "correct": false
       },
       {
        "fr": "Le découpage laser",
        "en": "Laser cutting",
        "correct": false
       }
      ]
     },
     {
      "type": "tf",
      "fr": "L'imposition ne dépend jamais du sens de pliage; l'ordre des pages peut être réglé après l'impression.",
      "en": "Imposition never depends on fold direction; page order can be fixed after printing.",
      "isTrue": false
     }
    ]
   },
   {
    "level": 3,
    "questions": [
     {
      "fr": "Un livret imprimé montre les pages dans le désordre après pliage. Quelle étape a probablement été mal réalisée?",
      "en": "A printed booklet shows pages out of order after folding. Which step was likely done incorrectly?",
      "choices": [
       {
        "fr": "L'imposition",
        "en": "The imposition",
        "correct": true
       },
       {
        "fr": "La calibration des couleurs",
        "en": "The colour calibration",
        "correct": false
       },
       {
        "fr": "Le choix de la police",
        "en": "The font choice",
        "correct": false
       },
       {
        "fr": "L'acquisition d'images",
        "en": "The image acquisition",
        "correct": false
       }
      ]
     },
     {
      "fr": "Un document final doit être plié en accordéon avec un texte continu qui doit rester lisible à chaque pli. Quelle est la bonne pratique de conception?",
      "en": "A final document must be accordion-folded with continuous text that must stay legible at each fold. What is the correct design practice?",
      "choices": [
       {
        "fr": "Prévoir l'emplacement des plis dès la mise en page pour éviter de couper des éléments importants",
        "en": "Planning the fold positions from the layout stage to avoid cutting through important elements",
        "correct": true
       },
       {
        "fr": "Ignorer les plis et espérer que ça fonctionne",
        "en": "Ignoring the folds and hoping it works out",
        "correct": false
       },
       {
        "fr": "Ajouter les plis seulement après l'impression",
        "en": "Adding the folds only after printing",
        "correct": false
       },
       {
        "fr": "Réduire tout le texte à une seule ligne",
        "en": "Shrinking all the text to a single line",
        "correct": false
       }
      ]
     },
     {
      "type": "tf",
      "fr": "L'imposition et la finition doivent être planifiées avant l'impression, pas après.",
      "en": "Imposition and finishing must be planned before printing, not after.",
      "isTrue": true
     }
    ]
   }
  ]
 },
 {
  "id": "info17",
  "order": 17,
  "title_fr": "Mises en pages complexes pour imprimés",
  "title_en": "Complex Layouts for Print",
  "icon": "📰",
  "tiers": [
   {
    "level": 1,
    "questions": [
     {
      "fr": "Qu'est-ce qui distingue une mise en page complexe d'une mise en page simple?",
      "en": "What distinguishes a complex layout from a simple one?",
      "choices": [
       {
        "fr": "Un plus grand nombre d'éléments, de sections ou de contraintes à coordonner",
        "en": "A larger number of elements, sections or constraints to coordinate",
        "correct": true
       },
       {
        "fr": "L'absence totale de texte",
        "en": "The complete absence of text",
        "correct": false
       },
       {
        "fr": "Une seule couleur utilisée",
        "en": "The use of a single colour",
        "correct": false
       },
       {
        "fr": "Un format toujours plus petit",
        "en": "An always smaller format",
        "correct": false
       }
      ]
     },
     {
      "fr": "Pourquoi une mise en page multi-pages nécessite-t-elle une planification globale?",
      "en": "Why does a multi-page layout require overall planning?",
      "choices": [
       {
        "fr": "Pour garder une cohérence visuelle et logique entre toutes les pages",
        "en": "To keep visual and logical consistency across all pages",
        "correct": true
       },
       {
        "fr": "Cela dépend uniquement des préférences personnelles de l'infographe",
        "en": "It depends only on the designer's personal preferences",
        "correct": false
       },
       {
        "fr": "Pour respecter les étapes de validation prévues au projet",
        "en": "To follow the project's planned validation steps",
        "correct": false
       },
       {
        "fr": "Pour respecter une étape purement administrative",
        "en": "To follow a purely administrative step",
        "correct": false
       }
      ]
     },
     {
      "type": "tf",
      "fr": "Un document complexe (ex. magazine) combine souvent texte, images et éléments graphiques variés sur chaque page.",
      "en": "A complex document (e.g. a magazine) often combines text, images and various graphic elements on each page.",
      "isTrue": true
     }
    ]
   },
   {
    "level": 2,
    "questions": [
     {
      "fr": "Pourquoi utiliser une grille modulaire pour un magazine avec plusieurs types de contenu (articles, publicités, images)?",
      "en": "Why use a modular grid for a magazine with several content types (articles, ads, images)?",
      "choices": [
       {
        "fr": "Pour organiser des contenus variés tout en gardant une cohérence visuelle",
        "en": "To organize varied content while keeping visual consistency",
        "correct": true
       },
       {
        "fr": "Cela ne concerne que la présentation visuelle du fichier",
        "en": "It only concerns the file's visual presentation",
        "correct": false
       },
       {
        "fr": "Pour respecter la hiérarchie visuelle prévue par la mise en page",
        "en": "To follow the visual hierarchy set by the layout",
        "correct": false
       },
       {
        "fr": "Pour respecter le calendrier de production fixé par le studio",
        "en": "To follow the studio's production schedule",
        "correct": false
       }
      ]
     },
     {
      "fr": "Quelle pratique aide à gérer un document de plusieurs dizaines de pages avec plusieurs contributeurs?",
      "en": "What practice helps manage a document of dozens of pages with multiple contributors?",
      "choices": [
       {
        "fr": "Utiliser des gabarits et des styles cohérents partagés par l'équipe",
        "en": "Using consistent templates and styles shared by the team",
        "correct": true
       },
       {
        "fr": "Laisser chacun travailler sans règles communes",
        "en": "Letting everyone work with no shared rules",
        "correct": false
       },
       {
        "fr": "Interdire toute collaboration",
        "en": "Forbidding any collaboration",
        "correct": false
       },
       {
        "fr": "Ignorer la cohérence visuelle",
        "en": "Ignoring visual consistency",
        "correct": false
       }
      ]
     },
     {
      "type": "tf",
      "fr": "Plus une mise en page contient d'information, moins la lisibilité est importante.",
      "en": "The more information a layout contains, the less readability matters.",
      "isTrue": false
     }
    ]
   },
   {
    "level": 3,
    "questions": [
     {
      "fr": "Un magazine de 60 pages doit intégrer du contenu de dernière minute sans briser la mise en page existante. Quelle est la bonne pratique?",
      "en": "A 60-page magazine must incorporate last-minute content without breaking the existing layout. What is the correct practice?",
      "choices": [
       {
        "fr": "Utiliser des gabarits flexibles et ajuster localement sans tout reconstruire",
        "en": "Using flexible templates and adjusting locally without rebuilding everything",
        "correct": true
       },
       {
        "fr": "Refaire toute la mise en page à la dernière minute",
        "en": "Redoing the entire layout at the last minute",
        "correct": false
       },
       {
        "fr": "Refuser tout contenu de dernière minute",
        "en": "Refusing any last-minute content",
        "correct": false
       },
       {
        "fr": "Ignorer le nouveau contenu",
        "en": "Ignoring the new content",
        "correct": false
       }
      ]
     },
     {
      "fr": "Pourquoi vérifier la pagination et les sauts de section avant l'impression d'un document complexe?",
      "en": "Why check pagination and section breaks before printing a complex document?",
      "choices": [
       {
        "fr": "Pour éviter des erreurs d'ordre de pages ou de contenu manquant",
        "en": "To avoid page-order errors or missing content",
        "correct": true
       },
       {
        "fr": "Uniquement pour respecter une norme esthétique du studio",
        "en": "Only to meet the studio's appearance standards",
        "correct": false
       },
       {
        "fr": "Pour respecter les exigences techniques de l'imprimeur",
        "en": "To follow the printer's technical requirements",
        "correct": false
       },
       {
        "fr": "Pour augmenter le prix",
        "en": "To increase the price",
        "correct": false
       }
      ]
     },
     {
      "type": "tf",
      "fr": "La gestion d'une mise en page complexe n'a aucun lien avec l'organisation des fichiers, seulement avec le talent créatif.",
      "en": "Managing a complex layout has no connection to file organization, only to creative talent.",
      "isTrue": false
     }
    ]
   }
  ]
 },
 {
  "id": "info18",
  "order": 18,
  "title_fr": "Rastérisation de documents",
  "title_en": "Document Rasterization",
  "icon": "🔲",
  "tiers": [
   {
    "level": 1,
    "questions": [
     {
      "fr": "Qu'est-ce que la rastérisation d'un document?",
      "en": "What is rasterizing a document?",
      "choices": [
       {
        "fr": "La conversion d'éléments vectoriels ou de texte en une image matricielle (pixels)",
        "en": "Converting vector elements or text into a raster (pixel) image",
        "correct": true
       },
       {
        "fr": "La suppression de toutes les couleurs",
        "en": "Removing all colours",
        "correct": false
       },
       {
        "fr": "L'ajout de son à un document",
        "en": "Adding sound to a document",
        "correct": false
       },
       {
        "fr": "La traduction du texte",
        "en": "Translating the text",
        "correct": false
       }
      ]
     },
     {
      "fr": "Pourquoi rastériser un document avant certains types d'impression?",
      "en": "Why rasterize a document before certain types of printing?",
      "choices": [
       {
        "fr": "Parce que certains procédés d'impression nécessitent une image matricielle plutôt que vectorielle",
        "en": "Because some printing processes require a raster rather than a vector image",
        "correct": true
       },
       {
        "fr": "Cela concerne surtout la paperasse du projet, jamais le design",
        "en": "It mainly concerns the project's paperwork, never the design",
        "correct": false
       },
       {
        "fr": "Pour respecter les exigences techniques de l'imprimeur",
        "en": "To follow the printer's technical requirements",
        "correct": false
       },
       {
        "fr": "Pour augmenter le prix",
        "en": "To increase the price",
        "correct": false
       }
      ]
     },
     {
      "type": "tf",
      "fr": "Rastériser un document à trop basse résolution peut nuire à la netteté du résultat final.",
      "en": "Rasterizing a document at too low a resolution can hurt the sharpness of the final result.",
      "isTrue": true
     }
    ]
   },
   {
    "level": 2,
    "questions": [
     {
      "fr": "Que risque-t-on en rastérisant un texte vectoriel à trop basse résolution?",
      "en": "What is the risk of rasterizing vector text at too low a resolution?",
      "choices": [
       {
        "fr": "Un texte flou ou pixelisé",
        "en": "Blurry or pixelated text",
        "correct": true
       },
       {
        "fr": "Un texte plus net qu'avant",
        "en": "Text that becomes sharper than before",
        "correct": false
       },
       {
        "fr": "Aucun risque",
        "en": "No risk",
        "correct": false
       },
       {
        "fr": "Un fichier plus petit sans conséquence",
        "en": "A smaller file with no consequence",
        "correct": false
       }
      ]
     },
     {
      "fr": "Pourquoi choisir une résolution de rastérisation adaptée au procédé d'impression utilisé?",
      "en": "Why choose a rasterization resolution suited to the printing process being used?",
      "choices": [
       {
        "fr": "Pour obtenir un résultat net sans créer de fichiers inutilement lourds",
        "en": "To get a sharp result without creating needlessly heavy files",
        "correct": true
       },
       {
        "fr": "Cela sert uniquement à remplir un champ obligatoire du logiciel",
        "en": "It only serves to fill a mandatory field in the software",
        "correct": false
       },
       {
        "fr": "Pour respecter une norme de présentation du dossier",
        "en": "To follow a file presentation standard",
        "correct": false
       },
       {
        "fr": "Pour respecter la structure de fichier standard du studio",
        "en": "To follow the studio's standard file structure",
        "correct": false
       }
      ]
     },
     {
      "type": "tf",
      "fr": "La rastérisation conserve toujours la capacité de redimensionner une image sans perte de qualité.",
      "en": "Rasterization always keeps an image's ability to be resized without losing quality.",
      "isTrue": false
     }
    ]
   },
   {
    "level": 3,
    "questions": [
     {
      "fr": "Un document vectoriel complexe doit être rastérisé pour un procédé d'impression spécifique. Quelle est la bonne pratique avant de finaliser?",
      "en": "A complex vector document must be rasterized for a specific printing process. What is the correct practice before finalizing?",
      "choices": [
       {
        "fr": "Vérifier la résolution et faire une épreuve pour confirmer la qualité du résultat",
        "en": "Checking the resolution and making a proof to confirm the result's quality",
        "correct": true
       },
       {
        "fr": "Rastériser sans vérifier et imprimer directement en grande quantité",
        "en": "Rasterizing with no check and printing a large run directly",
        "correct": false
       },
       {
        "fr": "Ignorer la résolution",
        "en": "Ignoring the resolution",
        "correct": false
       },
       {
        "fr": "Supprimer le fichier vectoriel original immédiatement",
        "en": "Immediately deleting the original vector file",
        "correct": false
       }
      ]
     },
     {
      "fr": "Pourquoi conserver toujours une version vectorielle originale avant de rastériser un document?",
      "en": "Why always keep an original vector version before rasterizing a document?",
      "choices": [
       {
        "fr": "Pour pouvoir remodifier ou réimprimer à une autre résolution plus tard sans perte de qualité",
        "en": "To be able to re-edit or reprint at a different resolution later without losing quality",
        "correct": true
       },
       {
        "fr": "Cela sert uniquement à respecter le calendrier de production",
        "en": "It only serves to follow the production schedule",
        "correct": false
       },
       {
        "fr": "Pour augmenter le poids du dossier sans raison",
        "en": "To needlessly increase the folder's size",
        "correct": false
       },
       {
        "fr": "Parce que la loi l'exige toujours",
        "en": "Because the law always requires it",
        "correct": false
       }
      ]
     },
     {
      "type": "tf",
      "fr": "Une fois un document rastérisé, il perd la possibilité d'être redimensionné sans perte de qualité.",
      "en": "Once a document is rasterized, it loses the ability to be resized without losing quality.",
      "isTrue": true
     }
    ]
   }
  ]
 },
 {
  "id": "info19",
  "order": 19,
  "title_fr": "Préparation de documents pour impressions numériques",
  "title_en": "Document Preparation for Digital Printing",
  "icon": "📤",
  "tiers": [
   {
    "level": 1,
    "questions": [
     {
      "fr": "Quel format de fichier est couramment utilisé pour envoyer un document prêt à l'impression numérique?",
      "en": "Which file format is commonly used to send a document ready for digital printing?",
      "choices": [
       {
        "fr": "PDF",
        "en": "PDF",
        "correct": true
       },
       {
        "fr": "un fichier texte brut",
        "en": "a plain text file",
        "correct": false
       },
       {
        "fr": "un fichier audio",
        "en": "an audio file",
        "correct": false
       },
       {
        "fr": "un fichier vidéo",
        "en": "a video file",
        "correct": false
       }
      ]
     },
     {
      "fr": "Pourquoi convertir les polices en tracés ou les intégrer dans le fichier final avant l'envoi à l'imprimerie?",
      "en": "Why convert fonts to outlines or embed them in the final file before sending it to the print shop?",
      "choices": [
       {
        "fr": "Pour éviter que les polices manquantes changent l'apparence du document",
        "en": "To avoid missing fonts changing the document's appearance",
        "correct": true
       },
       {
        "fr": "Cela dépend uniquement des préférences personnelles de l'infographe",
        "en": "It depends only on the designer's personal preferences",
        "correct": false
       },
       {
        "fr": "Pour respecter les exigences techniques du logiciel utilisé",
        "en": "To follow the technical requirements of the software used",
        "correct": false
       },
       {
        "fr": "Pour augmenter le prix",
        "en": "To increase the price",
        "correct": false
       }
      ]
     },
     {
      "type": "tf",
      "fr": "Vérifier la résolution des images avant l'envoi évite les mauvaises surprises à l'impression numérique.",
      "en": "Checking image resolution before sending avoids bad surprises in digital printing.",
      "isTrue": true
     }
    ]
   },
   {
    "level": 2,
    "questions": [
     {
      "fr": "Pourquoi aplatir les calques de transparence avant l'export final pour certains procédés d'impression numérique?",
      "en": "Why flatten transparency layers before final export for some digital printing processes?",
      "choices": [
       {
        "fr": "Pour éviter des erreurs de rendu liées à une mauvaise gestion de la transparence",
        "en": "To avoid rendering errors from mishandled transparency",
        "correct": true
       },
       {
        "fr": "Cela ne concerne que la présentation visuelle du fichier",
        "en": "It only concerns the file's visual presentation",
        "correct": false
       },
       {
        "fr": "Pour respecter les exigences techniques de l'imprimeur",
        "en": "To follow the printer's technical requirements",
        "correct": false
       },
       {
        "fr": "Pour respecter la structure de fichier standard du studio",
        "en": "To follow the studio's standard file structure",
        "correct": false
       }
      ]
     },
     {
      "fr": "Que vérifie-t-on généralement lors du contrôle en amont (preflight) d'un fichier avant impression?",
      "en": "What is generally checked during a preflight review of a file before printing?",
      "choices": [
       {
        "fr": "La résolution des images, le mode couleur, les polices et le fond perdu",
        "en": "Image resolution, colour mode, fonts and bleed",
        "correct": true
       },
       {
        "fr": "Uniquement le titre du fichier",
        "en": "Only the file's title",
        "correct": false
       },
       {
        "fr": "Uniquement la date de création",
        "en": "Only the creation date",
        "correct": false
       },
       {
        "fr": "Uniquement le numéro du projet dans le système",
        "en": "Only the project number in the system",
        "correct": false
       }
      ]
     },
     {
      "type": "tf",
      "fr": "La préparation du fichier n'a aucune influence sur les délais ou les erreurs à l'impression numérique.",
      "en": "File preparation has no influence on delays or errors in digital printing.",
      "isTrue": false
     }
    ]
   },
   {
    "level": 3,
    "questions": [
     {
      "fr": "Un fichier envoyé à l'impression numérique revient avec des couleurs différentes de ce qui était prévu. Quelle vérification aurait pu prévenir ce problème?",
      "en": "A file sent for digital printing comes back with colours different from what was expected. What check could have prevented this?",
      "choices": [
       {
        "fr": "Confirmer le profil colorimétrique et faire une épreuve avant l'envoi final",
        "en": "Confirming the colour profile and making a proof before final submission",
        "correct": true
       },
       {
        "fr": "Ignorer les couleurs jusqu'à la livraison",
        "en": "Ignoring colours until delivery",
        "correct": false
       },
       {
        "fr": "Envoyer le fichier sans aucune vérification",
        "en": "Sending the file with no checks at all",
        "correct": false
       },
       {
        "fr": "Changer le format du fichier au hasard",
        "en": "Randomly changing the file format",
        "correct": false
       }
      ]
     },
     {
      "fr": "Pourquoi certains formats d'impression numérique exigent-ils un fichier « aplati » sans calques modifiables?",
      "en": "Why do some digital printing formats require a 'flattened' file with no editable layers?",
      "choices": [
       {
        "fr": "Pour garantir un rendu final identique quel que soit le poste utilisé pour l'impression",
        "en": "To guarantee an identical final result regardless of the workstation used for printing",
        "correct": true
       },
       {
        "fr": "Uniquement pour respecter une norme esthétique du studio",
        "en": "Only to meet the studio's appearance standards",
        "correct": false
       },
       {
        "fr": "Pour rendre le fichier plus lourd",
        "en": "To make the file heavier",
        "correct": false
       },
       {
        "fr": "Pour empêcher toute impression",
        "en": "To prevent any printing",
        "correct": false
       }
      ]
     },
     {
      "type": "tf",
      "fr": "La préparation de documents pour l'impression numérique inclut la vérification technique complète du fichier avant l'envoi.",
      "en": "Preparing documents for digital printing includes a full technical check of the file before sending.",
      "isTrue": true
     }
    ]
   }
  ]
 },
 {
  "id": "info20",
  "order": 20,
  "title_fr": "Préparation de documents pour impressions offset normalisées",
  "title_en": "Document Preparation for Standardized Offset Printing",
  "icon": "🏭",
  "tiers": [
   {
    "level": 1,
    "questions": [
     {
      "fr": "Qu'est-ce que l'impression offset?",
      "en": "What is offset printing?",
      "choices": [
       {
        "fr": "Un procédé d'impression utilisant des plaques et de l'encre transférée sur un support",
        "en": "A printing process using plates and ink transferred onto a surface",
        "correct": true
       },
       {
        "fr": "Une impression réalisée uniquement à la main",
        "en": "Printing done entirely by hand",
        "correct": false
       },
       {
        "fr": "Un format de fichier numérique",
        "en": "A digital file format",
        "correct": false
       },
       {
        "fr": "Une technique de retouche photo",
        "en": "A photo retouching technique",
        "correct": false
       }
      ]
     },
     {
      "fr": "Pourquoi les documents pour impression offset doivent-ils respecter des normes précises (résolution, couleur, fond perdu)?",
      "en": "Why must documents for offset printing follow precise standards (resolution, colour, bleed)?",
      "choices": [
       {
        "fr": "Parce que le procédé est plus exigeant techniquement et coûteux à corriger après coup",
        "en": "Because the process is more technically demanding and costly to fix after the fact",
        "correct": true
       },
       {
        "fr": "Uniquement pour respecter une norme esthétique du studio",
        "en": "Only to meet the studio's appearance standards",
        "correct": false
       },
       {
        "fr": "Pour respecter le calendrier de production fixé par le studio",
        "en": "To follow the studio's production schedule",
        "correct": false
       },
       {
        "fr": "Pour respecter une étape administrative sans lien direct avec la tâche",
        "en": "To follow an administrative step unrelated to the task",
        "correct": false
       }
      ]
     },
     {
      "type": "tf",
      "fr": "L'impression offset est généralement utilisée pour de grands tirages.",
      "en": "Offset printing is generally used for large print runs.",
      "isTrue": true
     }
    ]
   },
   {
    "level": 2,
    "questions": [
     {
      "fr": "Que sont les séparations de couleurs en impression offset?",
      "en": "What are colour separations in offset printing?",
      "choices": [
       {
        "fr": "Les plaques distinctes pour chaque encre (cyan, magenta, jaune, noir)",
        "en": "The separate plates for each ink (cyan, magenta, yellow, black)",
        "correct": true
       },
       {
        "fr": "Des filtres Instagram",
        "en": "Instagram filters",
        "correct": false
       },
       {
        "fr": "Des calques Photoshop uniquement",
        "en": "Photoshop layers only",
        "correct": false
       },
       {
        "fr": "Un mode d'affichage à l'écran",
        "en": "An on-screen display mode",
        "correct": false
       }
      ]
     },
     {
      "fr": "Pourquoi produire une épreuve avant un tirage offset important?",
      "en": "Why produce a proof before a large offset print run?",
      "choices": [
       {
        "fr": "Pour valider le rendu final avant d'engager un tirage coûteux et difficile à corriger",
        "en": "To validate the final result before committing to a costly, hard-to-fix run",
        "correct": true
       },
       {
        "fr": "Cela concerne surtout la paperasse du projet, jamais le design",
        "en": "It mainly concerns the project's paperwork, never the design",
        "correct": false
       },
       {
        "fr": "Pour respecter une étape de validation supplémentaire du client",
        "en": "To follow an extra client validation step",
        "correct": false
       },
       {
        "fr": "Pour augmenter le prix sans justification",
        "en": "To increase the price with no justification",
        "correct": false
       }
      ]
     },
     {
      "type": "tf",
      "fr": "Une erreur découverte après le lancement d'un tirage offset peut toujours être corrigée gratuitement par l'imprimeur.",
      "en": "An error discovered after an offset print run has started can always be fixed free of charge by the printer.",
      "isTrue": false
     }
    ]
   },
   {
    "level": 3,
    "questions": [
     {
      "fr": "Un document destiné à l'impression offset contient une image en mode RVB non convertie. Quel est le risque principal?",
      "en": "A document for offset printing contains an unconverted RGB image. What is the main risk?",
      "choices": [
       {
        "fr": "Un résultat de couleur imprévisible ou différent de ce qui était attendu à l'impression",
        "en": "An unpredictable colour result different from what was expected in print",
        "correct": true
       },
       {
        "fr": "Aucun risque",
        "en": "No risk",
        "correct": false
       },
       {
        "fr": "Un fichier plus léger",
        "en": "A lighter file",
        "correct": false
       },
       {
        "fr": "Une impression plus rapide",
        "en": "Faster printing",
        "correct": false
       }
      ]
     },
     {
      "fr": "Pourquoi vérifier minutieusement un fichier avant un tirage offset de plusieurs milliers d'exemplaires?",
      "en": "Why carefully check a file before an offset run of several thousand copies?",
      "choices": [
       {
        "fr": "Parce qu'une erreur découverte après le tirage est coûteuse et difficile à corriger",
        "en": "Because an error discovered after the run is costly and hard to fix",
        "correct": true
       },
       {
        "fr": "Uniquement pour respecter une norme esthétique du studio",
        "en": "Only to meet the studio's appearance standards",
        "correct": false
       },
       {
        "fr": "Pour respecter une étape de validation supplémentaire du client",
        "en": "To follow an extra client validation step",
        "correct": false
       },
       {
        "fr": "Pour respecter les exigences techniques de l'imprimeur",
        "en": "To follow the printer's technical requirements",
        "correct": false
       }
      ]
     },
     {
      "type": "tf",
      "fr": "La préparation rigoureuse d'un fichier réduit le risque d'erreurs coûteuses en impression offset normalisée.",
      "en": "Rigorous file preparation reduces the risk of costly errors in standardized offset printing.",
      "isTrue": true
     }
    ]
   }
  ]
 },
 {
  "id": "info21",
  "order": 21,
  "title_fr": "Gestion d'une micro-entreprise en communication graphique",
  "title_en": "Managing a Graphic Communication Micro-business",
  "icon": "💼",
  "tiers": [
   {
    "level": 1,
    "questions": [
     {
      "fr": "Un infographe autonome (pigiste) doit notamment gérer...",
      "en": "A freelance graphic designer must notably manage...",
      "choices": [
       {
        "fr": "Ses clients, ses contrats et sa facturation",
        "en": "Their clients, contracts and invoicing",
        "correct": true
       },
       {
        "fr": "Uniquement le choix des polices",
        "en": "Only font choices",
        "correct": false
       },
       {
        "fr": "Uniquement le budget alloué au projet",
        "en": "Only the budget allocated to the project",
        "correct": false
       },
       {
        "fr": "Uniquement les couleurs d'un projet",
        "en": "Only a project's colours",
        "correct": false
       }
      ]
     },
     {
      "fr": "Pourquoi établir un contrat ou une soumission claire avant de commencer un projet pour un client?",
      "en": "Why draw up a clear contract or quote before starting a client project?",
      "choices": [
       {
        "fr": "Pour éviter les malentendus sur la portée du travail et le prix",
        "en": "To avoid misunderstandings about the scope of work and price",
        "correct": true
       },
       {
        "fr": "Cela sert uniquement à remplir un champ obligatoire du logiciel",
        "en": "It only serves to fill a mandatory field in the software",
        "correct": false
       },
       {
        "fr": "Pour respecter les étapes de validation prévues au projet",
        "en": "To follow the project's planned validation steps",
        "correct": false
       },
       {
        "fr": "Pour respecter le protocole de communication avec le client",
        "en": "To follow the client communication protocol",
        "correct": false
       }
      ]
     },
     {
      "type": "tf",
      "fr": "La gestion d'une micro-entreprise inclut le suivi des revenus et des dépenses.",
      "en": "Managing a micro-business includes tracking income and expenses.",
      "isTrue": true
     }
    ]
   },
   {
    "level": 2,
    "questions": [
     {
      "fr": "Pourquoi fixer un tarif qui couvre à la fois le temps de travail et les frais généraux?",
      "en": "Why set a rate that covers both working time and overhead costs?",
      "choices": [
       {
        "fr": "Pour assurer la rentabilité de l'entreprise",
        "en": "To ensure the business's profitability",
        "correct": true
       },
       {
        "fr": "Cela dépend uniquement des préférences personnelles de l'infographe",
        "en": "It depends only on the designer's personal preferences",
        "correct": false
       },
       {
        "fr": "Pour respecter le format de facturation standard du studio",
        "en": "To follow the studio's standard invoicing format",
        "correct": false
       },
       {
        "fr": "Pour décourager les clients",
        "en": "To discourage clients",
        "correct": false
       }
      ]
     },
     {
      "fr": "Un client demande des révisions qui dépassent largement ce qui était prévu au contrat initial. Quelle est la bonne pratique?",
      "en": "A client requests revisions that go well beyond what the initial contract covered. What is the correct practice?",
      "choices": [
       {
        "fr": "Discuter d'un ajustement de prix ou d'échéancier avant de continuer",
        "en": "Discussing a price or timeline adjustment before continuing",
        "correct": true
       },
       {
        "fr": "Faire le travail supplémentaire gratuitement sans en parler",
        "en": "Doing the extra work for free without discussing it",
        "correct": false
       },
       {
        "fr": "Refuser de répondre au client",
        "en": "Refusing to respond to the client",
        "correct": false
       },
       {
        "fr": "Abandonner le projet sans explication",
        "en": "Abandoning the project with no explanation",
        "correct": false
       }
      ]
     },
     {
      "type": "tf",
      "fr": "Un portfolio professionnel a peu d'influence sur l'attraction de nouveaux clients; seul le bouche-à-oreille compte vraiment.",
      "en": "A professional portfolio has little influence on attracting new clients; only word of mouth really matters.",
      "isTrue": false
     }
    ]
   },
   {
    "level": 3,
    "questions": [
     {
      "fr": "Un client tarde à payer une facture depuis plusieurs semaines. Quelle est une bonne pratique de gestion pour un travailleur autonome?",
      "en": "A client has been late paying an invoice for several weeks. What is a good management practice for a freelancer?",
      "choices": [
       {
        "fr": "Faire un suivi poli et prévoir des conditions de paiement claires dès le départ",
        "en": "Following up politely and setting clear payment terms from the start",
        "correct": true
       },
       {
        "fr": "Ignorer le retard indéfiniment",
        "en": "Ignoring the delay indefinitely",
        "correct": false
       },
       {
        "fr": "Cesser tout travail pour tous les clients",
        "en": "Stopping all work for every client",
        "correct": false
       },
       {
        "fr": "Ne jamais envoyer de facture à l'avenir",
        "en": "Never sending an invoice again in the future",
        "correct": false
       }
      ]
     },
     {
      "fr": "Pourquoi diversifier sa clientèle est généralement recommandé pour une micro-entreprise en communication graphique?",
      "en": "Why is diversifying one's client base generally recommended for a graphic communication micro-business?",
      "choices": [
       {
        "fr": "Pour réduire le risque financier de dépendre d'un seul client",
        "en": "To reduce the financial risk of depending on a single client",
        "correct": true
       },
       {
        "fr": "Cela ne concerne que la présentation visuelle du fichier",
        "en": "It only concerns the file's visual presentation",
        "correct": false
       },
       {
        "fr": "Pour respecter une méthode de suivi imposée par le studio",
        "en": "To follow a tracking method required by the studio",
        "correct": false
       },
       {
        "fr": "Pour réduire la qualité du travail",
        "en": "To reduce the quality of the work",
        "correct": false
       }
      ]
     },
     {
      "type": "tf",
      "fr": "La gestion d'une micro-entreprise en communication graphique demande des compétences en affaires en plus des compétences techniques.",
      "en": "Managing a graphic communication micro-business requires business skills in addition to technical skills.",
      "isTrue": true
     }
    ]
   }
  ]
 },
 {
  "id": "info22",
  "order": 22,
  "title_fr": "Intégration au milieu de travail",
  "title_en": "Workplace Integration",
  "icon": "🎓",
  "tiers": [
   {
    "level": 1,
    "questions": [
     {
      "fr": "Lors d'une entrevue d'embauche pour un poste d'infographe, il est important de...",
      "en": "In a job interview for a graphic design position, it is important to...",
      "choices": [
       {
        "fr": "Préparer un portfolio et des exemples concrets de ses réalisations",
        "en": "Preparing a portfolio and concrete examples of your work",
        "correct": true
       },
       {
        "fr": "Ne rien préparer",
        "en": "Preparing nothing",
        "correct": false
       },
       {
        "fr": "Refuser de montrer ses réalisations",
        "en": "Refusing to show your work",
        "correct": false
       },
       {
        "fr": "Éviter toutes les questions",
        "en": "Avoiding all questions",
        "correct": false
       }
      ]
     },
     {
      "fr": "Quelle attitude convient le mieux dès le premier jour dans un nouveau milieu de travail?",
      "en": "Which attitude works best on the very first day in a new workplace?",
      "choices": [
       {
        "fr": "Observer, poser des questions et suivre les consignes",
        "en": "Observing, asking questions and following instructions",
        "correct": true
       },
       {
        "fr": "Tout changer immédiatement selon ses propres méthodes",
        "en": "Immediately changing everything to your own methods",
        "correct": false
       },
       {
        "fr": "Rester silencieux sans jamais poser de question",
        "en": "Staying silent and never asking questions",
        "correct": false
       },
       {
        "fr": "Critiquer les méthodes existantes dès le départ",
        "en": "Criticizing existing methods right away",
        "correct": false
       }
      ]
     },
     {
      "type": "tf",
      "fr": "L'intégration au travail est aussi une occasion de bâtir son réseau professionnel.",
      "en": "Workplace integration is also an opportunity to build your professional network.",
      "isTrue": true
     }
    ]
   },
   {
    "level": 2,
    "questions": [
     {
      "fr": "Un bon comportement professionnel en stage inclut...",
      "en": "Good professional conduct during an internship includes...",
      "choices": [
       {
        "fr": "La ponctualité, la discrétion et le respect de la confidentialité des projets clients",
        "en": "Punctuality, discretion and respect for the confidentiality of client projects",
        "correct": true
       },
       {
        "fr": "Le retard fréquent",
        "en": "Frequent lateness",
        "correct": false
       },
       {
        "fr": "Le partage des fichiers clients sur les réseaux sociaux",
        "en": "Sharing client files on social media",
        "correct": false
       },
       {
        "fr": "L'absentéisme",
        "en": "Absenteeism",
        "correct": false
       }
      ]
     },
     {
      "fr": "Recevoir une rétroaction constructive d'un directeur artistique devrait mener à...",
      "en": "Receiving constructive feedback from an art director should lead to...",
      "choices": [
       {
        "fr": "Ajuster son travail et poser des questions au besoin",
        "en": "Adjusting your work and asking questions as needed",
        "correct": true
       },
       {
        "fr": "Ignorer la rétroaction",
        "en": "Ignoring the feedback",
        "correct": false
       },
       {
        "fr": "Se sentir offensé et cesser d'essayer",
        "en": "Feeling offended and giving up",
        "correct": false
       },
       {
        "fr": "Contester systématiquement",
        "en": "Systematically arguing back",
        "correct": false
       }
      ]
     },
     {
      "type": "tf",
      "fr": "Un stage réussi mène rarement à une offre d'emploi; la plupart des employeurs préfèrent embaucher à l'extérieur.",
      "en": "A successful internship rarely leads to a job offer; most employers prefer to hire externally.",
      "isTrue": false
     }
    ]
   },
   {
    "level": 3,
    "questions": [
     {
      "fr": "Pendant un stage, on te demande d'effectuer une tâche pour laquelle tu ne te sens pas suffisamment formé. Quelle est la meilleure attitude?",
      "en": "During an internship, you're asked to do a task you don't feel adequately trained for. What is the best attitude?",
      "choices": [
       {
        "fr": "Communiquer honnêtement la situation à ton superviseur et demander de l'encadrement",
        "en": "Honestly communicate the situation to your supervisor and ask for guidance",
        "correct": true
       },
       {
        "fr": "Refuser d'obéir sans explication",
        "en": "Refuse to comply without explanation",
        "correct": false
       },
       {
        "fr": "Faire la tâche sans rien dire même en cas de doute sérieux",
        "en": "Do the task without saying anything even with serious doubts",
        "correct": false
       },
       {
        "fr": "Quitter le stage immédiatement",
        "en": "Leave the internship immediately",
        "correct": false
       }
      ]
     },
     {
      "fr": "Quelle attitude professionnelle est la plus susceptible de mener à une embauche après le stage?",
      "en": "Which professional attitude is most likely to lead to a job offer after the internship?",
      "choices": [
       {
        "fr": "Faire preuve de rigueur, de fiabilité et d'une bonne collaboration avec l'équipe",
        "en": "Showing rigour, reliability and good teamwork",
        "correct": true
       },
       {
        "fr": "Faire le strict minimum sans engagement",
        "en": "Doing the bare minimum with no commitment",
        "correct": false
       },
       {
        "fr": "Éviter les interactions avec les collègues",
        "en": "Avoiding interactions with coworkers",
        "correct": false
       },
       {
        "fr": "Contester régulièrement les méthodes de l'entreprise",
        "en": "Regularly challenging the company's methods",
        "correct": false
       }
      ]
     },
     {
      "type": "tf",
      "fr": "Le stage d'intégration au travail représente une part importante du programme, avec 120 heures qui lui sont consacrées.",
      "en": "The workplace integration internship represents a significant part of the program, with 120 hours dedicated to it.",
      "isTrue": true
     }
    ]
   }
  ]
 }
];

const UI_TEXT = {
  fr: {
    appName: "InfographieQuest",
    tagline: "Deviens infographe expert — DEP 5344",
    start: "Commencer l'aventure",
    yourName: "Ton prénom",
    chooseAvatar: "Choisis ton avatar",
    map: "Mon parcours",
    badges: "Badges",
    trophies: "Trophées",
    leaderboard: "Palmarès",
    profile: "Profil",
    level: "Niveau",
    xp: "XP",
    locked: "Verrouillé",
    completeToUnlock: "Termine la quête précédente pour déverrouiller",
    startQuest: "Démarrer la quête",
    retryQuest: "Reprendre la quête",
    question: "Question",
    of: "sur",
    submit: "Valider",
    next: "Suivant",
    finish: "Terminer",
    correct: "Bonne réponse!",
    incorrect: "Ce n'est pas ça...",
    questResult: "Résultat de la quête",
    score: "Score",
    passed: "Quête réussie! Badge débloqué 🎉",
    failed: "Pas encore réussi — réessaie pour débloquer le badge (seuil: 70%)",
    backToMap: "Retour à la carte",
    newBadge: "Nouveau badge!",
    newTrophy: "Nouveau trophée!",
    hours: "heures",
    switchLang: "EN",
    resetProgress: "Réinitialiser tout",
    confirmReset: "Tout réinitialiser? Ton avatar, tes badges, trophées et toute ta progression seront effacés. Cette action est irréversible.",
    installApp: "Installer l'application",
    rank: "Rang",
    you: "Toi",
    leaderboardNote: "Classement local (démo) — un vrai palmarès de classe nécessite un serveur partagé.",
    completedQuests: "quêtes complétées",
    chooseVehicle: "Choisis ta machine",
    myVehicle: "Ta machine",
    vehicleGrows: "Évolue avec ton expérience",
    maxSize: "Taille maximale atteinte!",
    trueLabel: "Vrai",
    falseLabel: "Faux",
    tfPrompt: "Vrai ou faux?",
    masteredLabel: "compétences maîtrisées",
    tierLabel: "Palier",
    matchPrompt: "Touche un terme, puis sa définition qui correspond.",
    scenarioLabel: "Mise en situation",
    masteryUnlocked: "Compétence maîtrisée!",
    accessCodeTitle: "Code d'accès",
    accessCodePrompt: "Entre le code d'accès fourni par ton enseignant pour continuer.",
    accessCodeTrialOver: "Ton essai gratuit de 7 jours est terminé. Entre le code d'accès fourni par ton centre de formation pour continuer.",
    accessCodePlaceholder: "Code d'accès",
    accessCodeSubmit: "Valider",
    accessCodeChecking: "Vérification...",
    accessCodeInvalid: "Code invalide ou inactif. Vérifie auprès de ton enseignant.",
    accessCodeOffline: "Connexion Internet requise pour valider ton code la première fois. Réessaie une fois connecté.",
    accessCodeNotConfigured: "L'application n'est pas encore configurée. Contacte ton enseignant.",
    welcomeHeading: "Comment ça marche",
    welcomeIntro: "Avant de commencer, voici un survol rapide de l'application.",
    welcomeSteps: [
      { icon: "🗺️", title: "Mon parcours", text: "Chaque compétence du programme est une quête sur la carte. Termine-les dans l'ordre pour avancer." },
      { icon: "📝", title: "Questions", text: "Réponds à des questions à choix multiples et vrai/faux liées à chaque compétence." },
      { icon: "🎖️", title: "Badges", text: "Réussis une quête à 70% ou plus pour débloquer son badge." },
      { icon: "🏆", title: "Trophées", text: "Décroche des trophées spéciaux pour tes exploits et ta progression." },
      { icon: "📊", title: "Palmarès", text: "Compare ton avancement avec celui du reste de la classe." },
      { icon: "👷", title: "Ton avatar", text: "Choisis ton avatar — il évolue à mesure que tu gagnes de l'expérience." }
    ]
  },
  en: {
    appName: "InfographieQuest",
    tagline: "Become an expert graphic designer — DVS 5344",
    start: "Start the adventure",
    yourName: "Your first name",
    chooseAvatar: "Choose your avatar",
    map: "My path",
    badges: "Badges",
    trophies: "Trophies",
    leaderboard: "Leaderboard",
    profile: "Profile",
    level: "Level",
    xp: "XP",
    locked: "Locked",
    completeToUnlock: "Complete the previous quest to unlock",
    startQuest: "Start quest",
    retryQuest: "Retry quest",
    question: "Question",
    of: "of",
    submit: "Submit",
    next: "Next",
    finish: "Finish",
    correct: "Correct!",
    incorrect: "Not quite...",
    questResult: "Quest Result",
    score: "Score",
    passed: "Quest passed! Badge unlocked 🎉",
    failed: "Not passed yet — try again to unlock the badge (threshold: 70%)",
    backToMap: "Back to map",
    newBadge: "New badge!",
    newTrophy: "New trophy!",
    hours: "hours",
    switchLang: "FR",
    resetProgress: "Reset everything",
    confirmReset: "Reset everything? Your avatar, badges, trophies and all progress will be erased. This cannot be undone.",
    installApp: "Install the app",
    rank: "Rank",
    you: "You",
    leaderboardNote: "Local (demo) ranking — a real class leaderboard needs a shared server.",
    completedQuests: "quests completed",
    chooseVehicle: "Choose your machine",
    myVehicle: "Your machine",
    vehicleGrows: "Evolves with your experience",
    maxSize: "Maximum size reached!",
    trueLabel: "True",
    falseLabel: "False",
    tfPrompt: "True or false?",
    masteredLabel: "competencies mastered",
    tierLabel: "Tier",
    matchPrompt: "Tap a term, then its matching definition.",
    scenarioLabel: "Scenario",
    masteryUnlocked: "Competency mastered!",
    accessCodeTitle: "Access code",
    accessCodePrompt: "Enter the access code given by your teacher to continue.",
    accessCodeTrialOver: "Your free 7-day trial has ended. Enter the access code provided by your training center to continue.",
    accessCodePlaceholder: "Access code",
    accessCodeSubmit: "Submit",
    accessCodeChecking: "Checking...",
    accessCodeInvalid: "Invalid or inactive code. Check with your teacher.",
    accessCodeOffline: "Internet connection required to validate your code the first time. Try again once connected.",
    accessCodeNotConfigured: "The app isn't configured yet. Contact your teacher.",
    welcomeHeading: "How it works",
    welcomeIntro: "Before you start, here's a quick overview of the app.",
    welcomeSteps: [
      { icon: "🗺️", title: "My path", text: "Each program competency is a quest on the map. Complete them in order to move forward." },
      { icon: "📝", title: "Questions", text: "Answer multiple-choice and true/false questions tied to each competency." },
      { icon: "🎖️", title: "Badges", text: "Pass a quest with 70% or more to unlock its badge." },
      { icon: "🏆", title: "Trophies", text: "Earn special trophies for your achievements and progress." },
      { icon: "📊", title: "Leaderboard", text: "Compare your progress with the rest of the class." },
      { icon: "👷", title: "Your avatar", text: "Choose your avatar — it evolves as you earn experience." }
    ]
  }
};

/* ---- Paliers de niveau (basés sur XP total) ---- */
const LEVELS = [
  { min: 0,    name_fr: "Novice",       name_en: "Novice",     avatarStage: 0 },
  { min: 200,  name_fr: "Apprenti(e)",  name_en: "Apprentice", avatarStage: 2 },
  { min: 500,  name_fr: "Compétent(e)", name_en: "Competent",  avatarStage: 4 },
  { min: 1000, name_fr: "Chevronné(e)", name_en: "Seasoned",   avatarStage: 6 },
  { min: 2000, name_fr: "Expert(e)",    name_en: "Expert",     avatarStage: 9 },
  { min: 3500, name_fr: "Maître",       name_en: "Master",     avatarStage: 11 }
];

/* ---- Personnages d'avatar (ouvriers de chantier / camionneurs) ----
   Chaque personnage est dessiné en SVG dans app.js (fonction AVATAR_SVG).
   "accent" = couleur par défaut du casque/gilet, modifiable via la
   sélection de couleur. */
const AVATAR_CHARACTERS = [
 {
  "id": "dragon",
  "name_fr": "Dragon",
  "name_en": "Dragon",
  "title_fr": "Le Sage",
  "title_en": "The Sage",
  "stages": [
   "🥚",
   "🥚",
   "🦎",
   "🦎",
   "🐲",
   "🐲",
   "🐉",
   "🐉",
   "🐉",
   "🐉",
   "🐉",
   "🐉"
  ]
 },
 {
  "id": "licorne",
  "name_fr": "Licorne",
  "name_en": "Unicorn",
  "title_fr": "La Guérisseuse",
  "title_en": "The Healer",
  "stages": [
   "🥚",
   "🥚",
   "🐴",
   "🐴",
   "🦄",
   "🦄",
   "🦄",
   "🦄",
   "🦄",
   "🦄",
   "🦄",
   "🦄"
  ]
 },
 {
  "id": "phenix",
  "name_fr": "Phénix",
  "name_en": "Phoenix",
  "title_fr": "Le Résilient",
  "title_en": "The Resilient One",
  "stages": [
   "🥚",
   "🥚",
   "🐣",
   "🐣",
   "🐦",
   "🐦",
   "🦅",
   "🦅",
   "🦅",
   "🦅",
   "🦅",
   "🦅"
  ]
 },
 {
  "id": "griffon",
  "name_fr": "Griffon",
  "name_en": "Griffin",
  "title_fr": "Le Courageux",
  "title_en": "The Brave One",
  "stages": [
   "🥚",
   "🥚",
   "🐱",
   "🐱",
   "🦁",
   "🦁",
   "🦁",
   "🦁",
   "🦁",
   "🦁",
   "🦁",
   "🦁"
  ]
 }
];

const AVATAR_COLORS = [
  { id: "jaune",  hex: "#f7b500", name_fr: "Jaune sécurité", name_en: "Safety Yellow" },
  { id: "orange", hex: "#ff7a1a", name_fr: "Orange chantier", name_en: "Site Orange" },
  { id: "vert",   hex: "#3bb54a", name_fr: "Vert forêt", name_en: "Forest Green" },
  { id: "bleu",   hex: "#2a7de1", name_fr: "Bleu acier", name_en: "Steel Blue" },
  { id: "rouge",  hex: "#e13c3c", name_fr: "Rouge feu", name_en: "Fire Red" }
];

/* ---- Machines de l'élève (grossissent avec le XP) ----
   Le dessin SVG de chaque machine est dans app.js (fonction vehicleSVG). */
const VEHICLE_TYPES = [
  { id: "camion", name_fr: "Camion à benne", name_en: "Dump Truck" },
  { id: "pelle", name_fr: "Pelle mécanique", name_en: "Excavator" },
  { id: "bouteur", name_fr: "Bouteur", name_en: "Bulldozer" },
  { id: "chargeuse", name_fr: "Chargeuse", name_en: "Loader" }
];

/* La hauteur affichée (en pixels) interpole entre minHeight et maxHeight
   selon le XP actuel de l'élève (voir vehicleHeight() dans app.js). La
   largeur est calculée automatiquement pour respecter les proportions
   propres à chaque machine (voir VEHICLE_VIEWBOX dans app.js). */
const VEHICLE_GROWTH = { minHeight: 78, maxHeight: 178, maxXP: 3500 };

/* ---- Commandes de cabine (questions basées sur une image) ----
   Chaque machine a 4 commandes numérotées, dessinées par cabinSVG()
   dans app.js aux coordonnées cx/cy (viewBox 0 0 360 220). Ces mêmes
   coordonnées servent à la fois à dessiner l'illustration et à
   positionner les zones cliquables des questions de type "hotspot" —
   l'image et les questions restent donc toujours alignées.
   Configuration générique à titre pédagogique — la disposition réelle
   varie selon le fabricant et le modèle (à valider par l'enseignant). */
const CABIN_CONTROLS = {
  pelle: [
    { num: 1, cx: 100, cy: 168, kind: "joystick",
      label_fr: "Joystick gauche", label_en: "Left joystick",
      desc_fr: "Contrôle la rotation de la tourelle et le godet",
      desc_en: "Controls turret rotation and the bucket" },
    { num: 2, cx: 210, cy: 168, kind: "joystick",
      label_fr: "Joystick droit", label_en: "Right joystick",
      desc_fr: "Contrôle la flèche et le bras (balancier)",
      desc_en: "Controls the boom and the stick (arm)" },
    { num: 3, cx: 160, cy: 205, kind: "pedal",
      label_fr: "Pédales de translation", label_en: "Travel pedals",
      desc_fr: "Font avancer ou reculer les chenilles",
      desc_en: "Move the tracks forward or backward" },
    { num: 4, cx: 320, cy: 150, kind: "button",
      label_fr: "Klaxon", label_en: "Horn button",
      desc_fr: "Avertit les personnes autour de la machine avant un mouvement",
      desc_en: "Warns people around the machine before a movement" }
  ],
  bouteur: [
    { num: 1, cx: 110, cy: 172, kind: "lever",
      label_fr: "Levier de la lame", label_en: "Blade control lever",
      desc_fr: "Lève, abaisse et incline la lame",
      desc_en: "Raises, lowers and tilts the blade" },
    { num: 2, cx: 210, cy: 172, kind: "lever",
      label_fr: "Manettes de direction (chenilles)", label_en: "Steering clutch levers",
      desc_fr: "Contrôlent la direction en ralentissant une chenille à la fois",
      desc_en: "Control steering by slowing one track at a time" },
    { num: 3, cx: 160, cy: 205, kind: "pedal",
      label_fr: "Pédale de frein", label_en: "Brake pedal",
      desc_fr: "Ralentit ou immobilise la machine",
      desc_en: "Slows or stops the machine" },
    { num: 4, cx: 320, cy: 150, kind: "button",
      label_fr: "Klaxon", label_en: "Horn button",
      desc_fr: "Avertit les personnes autour de la machine avant un mouvement",
      desc_en: "Warns people around the machine before a movement" }
  ],
  chargeuse: [
    { num: 1, cx: 210, cy: 168, kind: "lever",
      label_fr: "Levier de commande du godet", label_en: "Bucket control lever",
      desc_fr: "Lève, abaisse et bascule le godet",
      desc_en: "Raises, lowers and tilts the bucket" },
    { num: 2, cx: 110, cy: 172, kind: "wheel",
      label_fr: "Volant de direction", label_en: "Steering wheel",
      desc_fr: "Contrôle la direction des roues",
      desc_en: "Controls the direction of the wheels" },
    { num: 3, cx: 160, cy: 205, kind: "pedal",
      label_fr: "Pédale d'accélérateur", label_en: "Accelerator pedal",
      desc_fr: "Contrôle le régime moteur et la vitesse",
      desc_en: "Controls engine speed and travel speed" },
    { num: 4, cx: 320, cy: 150, kind: "button",
      label_fr: "Klaxon", label_en: "Horn button",
      desc_fr: "Avertit les personnes autour de la machine avant un mouvement",
      desc_en: "Warns people around the machine before a movement" }
  ],
  niveleuse: [
    { num: 1, cx: 190, cy: 172, kind: "lever",
      label_fr: "Leviers de la lame", label_en: "Blade control levers",
      desc_fr: "Ajustent l'angle, la hauteur et l'inclinaison de la lame",
      desc_en: "Adjust the blade's angle, height and tilt" },
    { num: 2, cx: 100, cy: 172, kind: "wheel",
      label_fr: "Volant de direction", label_en: "Steering wheel",
      desc_fr: "Contrôle la direction des roues avant",
      desc_en: "Controls the direction of the front wheels" },
    { num: 3, cx: 255, cy: 172, kind: "switch",
      label_fr: "Commande d'articulation du châssis", label_en: "Frame articulation control",
      desc_fr: "Articule le châssis pour resserrer le rayon de braquage",
      desc_en: "Articulates the frame to tighten the turning radius" },
    { num: 4, cx: 320, cy: 150, kind: "button",
      label_fr: "Klaxon", label_en: "Horn button",
      desc_fr: "Avertit les personnes autour de la machine avant un mouvement",
      desc_en: "Warns people around the machine before a movement" }
  ]
};

/* ---- Trophées (méta-réussites) ---- */
const TROPHIES = [
  { id: "t_first", name_fr: "Premier pas", name_en: "First Step", icon: "🥉",
    desc_fr: "Réussir ton premier palier de compétence", desc_en: "Pass your first competency tier",
    check: (state) => Object.keys(state.completed).length >= 1 },
  { id: "t_half", name_fr: "Mi-parcours", name_en: "Halfway There", icon: "🥈",
    desc_fr: "Maîtriser 10 compétences (palier Avancé)", desc_en: "Master 10 competencies (Advanced tier)",
    check: (state) => (state.badges || []).length >= 10 },
  { id: "t_all", name_fr: "Diplômé virtuel", name_en: "Virtual Graduate", icon: "🏆",
    desc_fr: "Maîtriser les 20 compétences du programme", desc_en: "Master all 20 competencies of the program",
    check: (state) => (state.badges || []).length >= 20 },
  { id: "t_perfect", name_fr: "Sans faute", name_en: "Flawless", icon: "💯",
    desc_fr: "Obtenir 100% à un palier", desc_en: "Score 100% on a tier",
    check: (state) => Object.values(state.completed).some(s => s.score === 100) },
  { id: "t_safety", name_fr: "Zone sécurité", name_en: "Safety Zone", icon: "🦺",
    desc_fr: "Réussir le palier Débutant du module Santé et sécurité", desc_en: "Pass the Beginner tier of the Health & Safety module",
    check: (state) => state.completed["c02_1"] && state.completed["c02_1"].score >= 70 },
  { id: "t_streak", name_fr: "Assidu", name_en: "Dedicated", icon: "🔥",
    desc_fr: "Se connecter 3 jours différents", desc_en: "Log in on 3 different days",
    check: (state) => (state.loginDays || []).length >= 3 },
  { id: "t_podium", name_fr: "Sur le podium", name_en: "On the Podium", icon: "🏅",
    desc_fr: "Atteindre le top 3 du palmarès", desc_en: "Reach the top 3 of the leaderboard",
    check: (state) => (LEADERBOARD_SEED.filter(p => p.xp > state.xp).length) < 3 },
  { id: "t_matcher", name_fr: "Bon association", name_en: "Great Match", icon: "🧩",
    desc_fr: "Réussir 15 questions d'association de termes", desc_en: "Complete 15 term-matching questions",
    check: (state) => (state.matchesCompleted || 0) >= 15 }
];

/* ---- Palmarès (données d'exemple — classe fictive) ----
   À remplacer par de vraies données élèves lorsqu'un backend
   partagé sera branché (voir README). */
const LEADERBOARD_SEED = [
  { name: "Mia-Rose T.", xp: 3120, avatarChar: "operatrice_bouteur", avatarColor: "vert" },
  { name: "Xavier L.", xp: 2450, avatarChar: "contremaitre", avatarColor: "bleu" },
  { name: "Sam D.", xp: 1780, avatarChar: "camionneur", avatarColor: "orange" },
  { name: "Alicia P.", xp: 1290, avatarChar: "camionneuse", avatarColor: "rouge" },
  { name: "Kevin R.", xp: 860, avatarChar: "contremaitre", avatarColor: "jaune" },
  { name: "Noémie B.", xp: 430, avatarChar: "mecanicienne", avatarColor: "bleu" },
  { name: "Tommy G.", xp: 120, avatarChar: "camionneur", avatarColor: "vert" }
];
