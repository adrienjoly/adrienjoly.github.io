class: center, fit-bg-image
background-image: url('img/banner.jpg')

# Story and Perspectives of Openwhyd.org

.bottom-left[
    ![adrien joly](img/me-round.png)
]

.bottom-right[
    @adrienjoly
]

???

Sondage: qui a **deja utilisé** whyd/openwhyd ?

Openwhyd est une plateforme de partage de musique multi-sources, sur web et iphone. (YT, SC, BC...)

Je vais vous parler:
- d'un des plus **vieux projets node.js** que je connaisse, qui tourne toujours en production
- d'un **produit de startup** devenu un projet open-source, collaboratif et auto-financé
- de son architecture, son évolution, et opportunités pour vous

---
class: fit-bg-image, inverse
background-image: url('img/whyd-team.jpg')

.bottom-left[
  ## 2007: PhD∙2010: Whyd∙2015: Freelance∙2016: Indie∙2017: CDI
]

???

Je commence par me présenter:
- Adrien Joly, développeur depuis tout petit
- Après avoir fait une thèse de doctorat (un peu par erreur), j'ai été le **1ère embauche** de la startup Whyd. (il étaient un peu fou: concurrencer google search, avec indexation sémantique) => (i) vous voyez la team sur la **photo**.
- J'ai quitté Whyd début 2015 pour bosser comme **dev fullstack** en freelance puis développer mes propres idées.
- Aujourd'hui je suis sur le point de rejoindre une startup qui n'en est plus une.
- Entre temps, j'ai continué à **contribuer à Openwhyd** (la version open de Whyd) => en faisant le plus gros projet de ma carrière, tant en défis techniques qu'en durée. (2012-2017 = **5 ans**)

---
class: center, middle, dbl-size, inverse
# I - From Whyd to Openwhyd

???

Je disais tout à l'heure: Whyd = concurrent de google seach avec indexation sémantique.

Rétention: On avait du mal à faire revenir les utilisateurs. => **couche sociale** (forum => notifs)

---
class: fit-bg-image, inverse
background-image: url('img/whyd-screenshot-topics-social.png')

.bottom-right[
  # 2011 🔍
]

???

Après plusieurs itérations/pivots, on s'est rendu compte que les users aimaient **partager de la musique** venant de youtube.

À cette époque là, j'avais développé un **lecteur séquentiel** de vidéos youtube, pour un side project appelé Playem.

On s'est dit que ça valait le coup de faire un **proto from scratch**, basé sur playem.

---
class: fit-bg-image, inverse, col-50pct
background-image: url('img/nodejs-versions.png')

.bottom-right[
  # 2011 🔍
]

???

Parallèlement, Nodejs commençait à faire un peu de bruit. 
Certains disaient que c'était l'avenir, d'autre que c'était un gadget non performant.

On a profité de ce **nouveau départ** sur le produit, pour le **dev sur Nodejs**, probablement v0.5.

---
class: fit-bg-image, inverse
background-image: url('img/openwhyd-screenshot-2012-06.png')

.bottom-right[
  # 2012 ⚡️
]

???

Alors on a développé ce premier proto, pour le faire tester aux utilisateurs.
=> Ça marchait ! Les utilisateurs revenaient, et commençaient à réclamer plus de sources de musique !

En 2012, on avait trouvé notre product-market-fit: partage de musique.
=> Passage en mode growth.

---
class: fit-bg-image, inverse
background-image: url('img/openwhyd-screenshot-2013-spring.png')

.bottom-right[
  # 2013 🔥
]

???

**redesign** pour relancement.

---
class: fit-bg-image, inverse
background-image: url('img/party-collage.jpg')

.bottom-right[
  # 2013 🔥
]

???

**Bbq** users dans nos locaux, puis **soirées privées** dans clubs parisiens => notoriété

---
class: fit-bg-image, inverse
background-image: url('img/lifehacker1.jpg')

.bottom-right[
  # 2013 🔥
]

???

Parutions **presse** lifehacker etc... => croissance

---
class: fit-bg-image, inverse
background-image: url('img/openwhyd-mobile-design-2014-spring.jpg')

.bottom-right[
  # 2014 📱
]

???

**préparation app iphone**, sur la base d'un user testing (design sprint) mené par notre designer

---
class: fit-bg-image, inverse
background-image: url('img/whyd-team-damien.jpg')

.bottom-right[
  # 2014 📱
]

???

**damien** nous rejoint pour la développer, en remote depuis SF

---
class: fit-bg-image, inverse
background-image: url('img/lifehacker2.jpg')

.bottom-right[
  # 2014 📱
]

???

=> encore des articles, des soirées, et de la croissance.

puis **partenariats**, grâce au **player embed** (comme soundsgood)

---
class: fit-bg-image, inverse
background-image: url('img/partner-point-fmr.jpg')

.bottom-right[
  # 2014 📱
]

???

Prog de clubs comme **Point fmr**, **Glazart**...

---
class: fit-bg-image, inverse
background-image: url('img/star-20syl.jpg')

.bottom-right[
  # 2014 📱
]

???

... et même quelques stars, comme **20syl** de Hocus Pocus!

---
class: fit-bg-image, inverse
background-image: url('img/partner-arte-tracks.jpg')

.bottom-right[
  # 2014 📱
]

???

Jusqu'à organiser concours de playlists pour **Tracks / ARTE**

=> bref, on se prenait pour le nouveau myspace !

MAIS **croissance** ralentit et **concurrence** grossit. (Spotify, Deezer, mais aussi plein de startups sur même value prop.)

=> Pivot.

---
class: fit-bg-image, inverse
background-image: url('img/speaker-promo.jpg')

.bottom-right[
  # 2015 🔊
]

???

Whyd décide de **pivoter** à nouveau => produit hardware.

=> Je quitte Whyd pour faire du **freelance**.

"Si vous comptez couper la plateforme whyd.com, appelez-moi d'abord."

C'est ce qui s'est passé au **printemps 2016**.

Je lui ai dit:
"si vous acceptez d'open-sourcer whyd, je m'occupe de la migration et continuerai à le faire vivre sur mon temps libre"

---
class: fit-bg-image, inverse
background-image: url('img/open-source.jpg')

.bottom-right[
  # 2016 🗽
]

???

Aout 2016. C'est officiel: whyd devient **Openwhyd**.

Le produit de startup était libéré de la **menace d'être tué**,
et son avenir ne dépendait plus des décisions d'une entreprise qui se battait pour la **rentabilité**.

---
class: full-bg-image, inverse
background-image: url('img/openwhyd-screenshot-2016.jpg')

.bottom-right[
  # 2016 🗽
]

???

openwhyd-screenshot-2015.png

C'était devenu un vrai **projet communautaire**, indépendant, et qui serait maintenu par des **volontaires**.

---
class: fit-bg-image, inverse
background-image: url('img/github-repo.png')

.bottom-right[
  # 2016 🗽
]

???

... il a son **repo github** tout neuf, en license **MIT** !

Pendant quelques mois, la société Whyd a généreusement payé les **frais d'hébergement**.
Ensuite il a fallu trouver une autre solution.
Vu que le service était encore bien utilisé, et recevait même des contributions de volontaires
=> j'ai migré le site sur une **instance moins chère**, et ai lancé un **crowdfunding** pour faire participer les utilisateurs aux frais.

---
class: full-bg-image, inverse
background-image: url('img/opencollective.jpg')

.bottom-right[
  # 2017 ✊
]

???

Mai 2017: C'est là qu'**Opencollective** est arrivé à la rescousse.
On a contacté les utilisateurs les plus fidèles d'openwhyd pour être les **premiers donateurs**.

Aujourd'hui c'est pas évident de garder cette **inertie**, mais on réfléchit à d'autres solutions.

---
class: center, middle, dbl-size, inverse
# II - Openwhyd Today

???

Un an après sa "libération", où en est le **produit**, son **usage**, et sa **stack** ?

---
class: full-bg-image, inverse
background-image: url('img/stats-1.jpg')

???

- **112k** users, dont **1.2 daily active** (selon google analytics)
- cible: mixte, autour de la 20aine
- 61% utilisateurs français vs 8% aux USA

---
class: fit-bg-image, inverse
background-image: url('img/stats-2.jpg')

???

usage assez **particulier**, car écoute de musique
=> nombreuses sessions au delà de 10 minutes

mais un des plus gros **avantages** d'avoir une plateforme qui dure dans le temps, c'est ...

---
class: fit-bg-image, inverse
background-image: url('img/data.png')

???

... l'accumulation de données d'usage !

Openwhyd assis sur une mine d'or inexploitée:
- plus de 2 millions de tracks référencées, contenant des **pépites** (artistes émergeants, lives, remixes, versions rares)
- 3 GO d'historique d'écoutes de ces tracks => déterminer les **gouts** de chaque utilisateurs, et **liens** entre eux

=> de quoi entrainer un **modèle de recommandation** musicale unique ! (ML)

mais parlons d'**infra technique**:

---
class: fit-bg-image, inverse
background-image: url('img/digitalocean.png')

???

Openwhyd est actuellement hebergé chez digital ocean
- instance avec **4gb** de memoire, bien utilisée par le cache de **mongodb**
- et un **CPU sous exploité** (le plus gros du travail se fait dans le **navigateur**)

comme vous l'avez deviné, le CPU fait surtout tourner notre serveur web nodejs.
regardons un résumé du **package.json**:

---
class: fit-bg-image, inverse
background-image: url('img/package-json-1.png')

???

- on avance **prudemment**: on est passés de node 0.5 à **node 6.11**
- le serveur est (re)lancé avec **forever**
- et le traitement des requête est assuré par un équivalent maison de **express.js** + des templates **mustache** compilées par hogan

en termes de tests, j'ai recemment ajouté des **tests unitaires et fonctionnels**, avec mocha et webdriver (selenium)

maintenant, on va jeter un oeuil à la manière de faire fonctionner le serveur **chez vous**.

---
class: fit-bg-image, inverse
background-image: url('img/package-json-2.png')

???

- start et stop servent en prod seulement (forever)
- monolithique: vous aurez peut etre deviné que le meme script fait office de serveur **api + rendu web + envoi de notifs** email
- enfin, grace à l'aide d'un contributeur, il est possible de tester depuis un **conteneur docker**

reprenons un peu de recul, pour voir l'**architecture** du projet.

---
class: fit-bg-image
background-image: url('img/architecture.png')

???

consistué de 2 repos: **whydJS** (serveur + client web) et **iOS**
à noter que les deux clients se branchent sur le même serveur via **REST**, et identification/sessions via **cookies**

l'usage de cookies rend difficile le développement de clients alternatifs (sur **autre domaine**).

---
class: center, middle, dbl-size, inverse
# III - Perspectives

???

à ce stade, vous voyez qu'il y a deja pas mal de **boulot** !

... c'est sans compter sur les **idées de nos volontaires** !

---
class: fit-bg-image, inverse
background-image: url('img/magazine-concept.png')

???

par exemple, une de nos volontaires a imaginé un **concept de magazine** s'appuyant sur Openwhyd,
et travaille actuellement sur une refonte design de notre **player embed** (intégré)

mais revenons à la partie plus **technique** des perspectives !

---
class: fit-bg-image
background-image: url('img/projects.svg')

???

entre le **design** (à gauche) et la **commununication** (à droite),
voici un aperçu des taches techniques que j'envisage, sur la base des retours et de mes propres reflexions:

- à la base, il y a toujours du boulot pour **maintenir** la plateforme: signalement et correction de **bugs**, et aide envers les **nouveaux contributeurs**

- ensuite, les chantiers prioritaires:
  - OAuth: une véritable **couche d'identification** (autre que cookies) pour permettre le développement de clients tiers
  - par exemple: une refonte du client web en pure **SPA React** au lieu de jQuery
  - et le développement d'un **client pour android**, qui pourrait être réalisé en React Native
  - enfin, permettre aux developpeurs de **déployer** leur contributions de manière plus efficace

- enfin, on pourrait imaginer des chantiers plus "**data**" au dessus de tout ça:
  - commencer par **analyser** les données dispo, pour **orienter les décisions** produit et diffuser des **stats motivantes** pour les utilisateurs et contributeurs
  - utiliser des algos de **classification** pour regrouper les morceaux **par genre**, et donc améliorer les suggestions d'utilisateurs à suivre en fonction de ses gouts (onboarding)
  - enfin, soyons fous et imaginons qu'on puisse carrément **recommander de la musique pertinente** à chaque utilisateur de manière algorithmique, comme spotify!

Sur ces bonnes paroles, je vais conclure ma présentation sur un **dernier slide**, pour résumer les **défis** et **opportunités**, dans le cas où vous seriez intéressés pour rejoindre le mouvement Openwhyd !

---
class: center, middle, dbl-size

# Challenges

## 💸 ∙ 💪 ∙ 👴🏻 ∙ 📱

# Opportunities

## 💡 ∙ 🔥 ∙ 🕵 ∙ 🙌 ∙ 🌟

# 👉 `bit.ly/joinopenmusic` 🎵

???

Vous avez compris: il y en a pour tous les gouts !

challenges:
- **fund** hosting fees,
- time & effort to **contribute**,
- **vintage** codebase,
- broken iphone app + requests for **android app**

opportunities:
- test **your ideas**
- improve **your skills** by joining a group effort
- play with **huge data**
- get praise from **real users**
- become a **star** ! ;-)

Vu que je vais m'engager sur un travail à temps plein, je tiens à **déléguer** un max de responsabilités.
=> je suis donc ouvert aux **bonnes initiatives** des autres!

Seules limites: accès aux données privées, bon fonctionnement de la plateforme.

=> **motivé ?** inscrits toi sur le typeform, je reviendrai vers toi !

Et, en attendant, je serais ravi de répondre à vos questions et/ou écouter **vos suggestions** pour aider Openwhyd à continuer de **se développer** !

Merci pour votre attention :-)
