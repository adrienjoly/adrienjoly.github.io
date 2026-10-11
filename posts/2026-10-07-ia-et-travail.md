---
title: Que devient notre travail à l'ère de l'IA
description: "Cet article est la version initiale (longue) de l'introduction que j'avais préparée pour l'atelier de réflexion collective co-animé avec Agnès Grisard pour les alumni de l'INSA, le 7 Octobre 2026. J'y ai également intégré deux comptes-rendus de cet atelier: un écrit moi-même et un généré par IA à partir de l'enregistrement audio des synthèses des groupes de réflexion."
date: 2026-10-07
layout: blog
---

> Contexte: Cet article est la version initiale (longue) de l'introduction que j'avais préparée pour l'atelier de réflexion collective co-animé avec Agnès Grisard pour les alumni de l'INSA, le 7 Octobre 2026. J'y ai également intégré deux comptes-rendus de cet atelier: un écrit moi-même et un géneré par IA à partir de l'enregistrement audio des synthèses des groupes de réflexion.

Je me présente: Adrien, INSA Lyon (IF, promo 2006). Passionné d'informatique depuis l'enfance, j'ai exercé cette passion de plusieurs manières:

- stages en R&D;
- ESN (ex-SSII);
- thèse appliquée dans un laboratoire privé;
- développeur « lead », freelance, puis coach technique dans des startups de toutes tailles;
- création de mes propres produits, dont j'ai vendu un;
- enseignement de la programmation en école post-bac;
- co-animation d'un podcast sur les soft skills: Le SAV de la Tech.

Depuis 2023, j'expérimente l'IA dans mon métier de développeur, à la fois comme outil et comme composant des produits que je développe. Au départ, je la trouvais prometteuse mais très limitée. Aujourd'hui, mes collègues et moi avons accepté que notre métier soit complètement transformé par l'IA agentique: nous lui déléguons l'essentiel de la conception, de l'implémentation, des tests et de la documentation. Il nous reste à bien décrire ce que nous attendons, et à relire beaucoup de code écrit par l'IA.

Je suis donc passé de la curiosité au scepticisme, puis à l'anxiété, et enfin de nouveau à la curiosité.

Ce qui m'a poussé à lancer cet atelier avec Agnès, c'est l'envie de voir quels autres métiers sont touchés, de quelle manière, et de discuter avec vous de la façon dont nous comptons nous adapter.

--

Il y a quelques jours, lors d'un entretien régulier avec ma manager, elle m'a demandé "qu'est-ce que tu as réalisé qui t'a rendu fier, ces dernières semaines ?" D'habitude, je n'ai aucun mal à trouver des réponses à cette question. Mais depuis qu'on nous a fortement encouragés à déléguer le gros de notre travail de création à une IA, je peine à me souvenir de la dernière fois où je me suis senti fier de mon travail... Utile, oui ! Apporter de la valeur, oui ! Mais la fierté, le plaisir, les pics de dopamine à chaque idée qui me rapproche un peu plus d'apporter une solution au problème sur lequel je travaille, c'est moins évident. Est-ce que la machine m'aide encore à faire mon travail ? Ou suis-je devenu un larbin au service de la machine ? Voilà la principale question qui nourrit ma crise de la quarantaine.

En tant qu'ingénieur logiciel, je pense exercer un des métiers les plus tentants à remplacer intégralement par une IA, dès que ce sera possible. Au-delà du fait que c'est une activité de nature  quasi-totalement intellectuelle, ces profils coûtent cher et ont parfois la réputation d'être "difficiles" à gérer. Alors quand le PDG découvre Claude Code et arrive à lui faire développer en quelques heures un prototype fonctionnel d'une fonctionnalité qu'il a commandée il y a des mois à l'équipe produit de son entreprise, sans broncher ni dormir, je peux comprendre sa tentation de remplacer cette équipe par une poignée d'agents IA.

Comment en est-on arrivés là en si peu de temps ? Après tout, les premières IAs sont nées dans les années 50. Alors comment se fait-il que cela fait seulement quelques mois qu'on se mette à construire des centrales nucléaires dédiées à alimenter les data centers d'OpenAI et des GAFAMs ? Que les plus gros acteurs du numérique licencient des ingénieurs par milliers ? Que les entreprises américaines qui créent les IA modernes demandent à ce qu'on légifère pour réguler/cadrer les progrès du développement de leurs IA, tellement que les perspectives et risques sont devenus inquiétants ? Et même, que certains employés quittent ces entreprises car ils ne veulent pas collaborer à l'élaboration d'une IA qui pourrait bientôt causer la mort à des millions d'humains, une fois qu'elle aurait gagné conscience de sa propre existence !

Mais ne vous inquiétez pas, le but de cet atelier n'est pas de vous faire faire des cauchemars. Agnès et moi vous proposons de profiter de la diversité des métiers que nous représentons, et du point de vue humaniste que nous avons cultivé à l'INSA, pour prendre du recul ensemble. Sur la base de nos expériences, de nos ressentis et de notre intuition. Pour discuter l'impact de l'IA sur le monde du travail, tel qu'on l'observe et tel qu'on l'imagine d'ici quelques années.

## Qu'est-ce qu'on veut dire par IA ?

Sur Wikipédia, l'IA est définie comme l'ensemble des systèmes informatiques capables d'effectuer des tâches typiquement associées à l'intelligence, telles que l'apprentissage, le raisonnement, la résolution de problèmes, la perception ou la prise de décision.

## Comment fonctionnent les IA actuelles ?

Aujourd'hui le gros de l'actualité IA concerne les LLMs et applications "agentiques" qui s'appuient sur ces LLMs, comme ChatGPT, Gemini, Claude, Grok, etc...

Vu de l'extérieur, un LLM - Large Language Model - est un logiciel qui génère des réponses textuelles, visuelles ou sonores à des questions - appelés "prompt" - qu'on lui envoie en langage naturel. Pour être en mesure de faire cela, il a été "entraîné" sur des milliards de documents récupérés sur internet. Le principe fondamental du fonctionnement d'un LLM est très simple: il produit, un par un, les mots les plus statistiquement probables pour faire suite au prompt, et aux mots précédemment produits. En gros, c'est un mécanisme de complétion automatique, un peu comme ceux qu'on a vu apparaître sur les téléphones portables du début de siècle, pour nous faire gagner du temps quand on écrivait des SMS à l'aide d'un clavier de chiffres.

Sous le capot, un LLM est majoritairement constitué d'un réseau de neurones. A chaque fois qu'on l'entraîne sur la base d'un document, on ajuste les "poids" de chacun de ses neurones, de manière à ce qu'il prédise correctement chaque mot "suivant" du texte de ce document, en fonction des mots précédemment lus.

Pour améliorer l'utilité de cette technologie dans de nombreux domaines, les applications que nous utilisons désormais pour converser avec ce type d'IA recourent généralement à des "agents". L'idée est de déléguer la réalisation de chaque demande à plusieurs LLMs qui peuvent travailler en parallèle, et ont chacun été entraînés sur des types de tâches spécifiques.

Par exemple, si vous demandez le score d'un match de football qui a lieu en ce moment, un premier agent va analyser votre requête pour comprendre vos attentes et décider de déléguer cette recherche à un agent capable de chercher la réponse sur le web, de l'extraire depuis une page web puis de vous répondre en langage naturel.

## Leurs forces, leurs limites

La principale force de ces applications IA pour nous aider dans nos tâches, comme souvent dans le monde de l'informatique, c'est la vitesse de traitement, et la capacité de s'appuyer sur l'énorme corpus de connaissances que constitue le web.

Quelques limites:

- "l'hallucination", c'est à dire la tendance à inventer des réponses qui ont l'air correctes mais ne le sont pas
- des réponses biaisées, selon les données sur lesquelles le LLM a été entrainé, et le conditionnement apporté par chaque acteur opérant ces LLMs
- la difficulté à comprendre et à contrôler pourquoi un LLM donne telle ou telle réponse, car la logique de réponse est structurellement opaque, contrairement à celle d'un système expert basée sur un arbre de décision ou d'un logiciel basé sur du code
- le coût important en énergie, pour l'usage mais surtout l'entraînement de ces LLMs
- le coût important en métaux rares, pour fabriquer des puces "GPU" de plus en plus puissantes
- les risques de sécurité/confidentialité/conformité liés au fait d'envoyer des données confidentielles ou sensibles aux sociétés opérant les LLMs, souvent hébergées aux États-Unis
- le risque de dépendance sur les sociétés opérants les LLMs, notamment en phase d'instabilité géopolitique, ex: quand le président Trump a demandé à Anthropic de cesser l'exploitation à l'étranger de leur modèle le plus puissant
- même si on peut déléguer de plus en plus de tâches professionnelles à des systèmes agentiques à base de LLMs, et que la qualité du travail produit ne cesse d'augmenter, ces systèmes manquent souvent d'un contexte nécessaire qui n'est connu que par les humains qui l'utilisent, ex: les règles et connaissances non écrites (ou non mises à la disposition de l'IA) qui s'appliquent au sein de son équipe et de son entreprise.
- Enfin, comme dans le domaine des véhicules autonomes, il reste un flou quant à la responsabilité. Ex: si une IA a écrit un programme contenant un bug et que celui-ci cause indirectement la mort d'une personne, qui est responsable ? L'IA ? Les auteurs du prompt qui a permis à l'IA d'écrire ce programme ? L'équipe chargée de tester le programme ? Les créateurs de l'IA ?

## Les grandes tendances de leur adoption en entreprise ?

L'enquête [Stanford AI Index 2026](https://hai.stanford.edu/ai-index/2026-ai-index-report/economy) estime que 88 % des organisations interrogées utilisent désormais l'IA dans au moins une fonction, et environ 70 % utilisent de l'IA générative.

Cas d'usages communs d'outils comme ChatGPT / Claude / Gemini / Copilot:

- rédaction et reformulation
- recherche et synthèse documentaire
- traduction
- analyse de documents
- préparation de réunions
- brainstorming
- aide au code
- génération de présentations, mails, comptes rendus, etc.

L'IA générative est de plus en plus intégrée aux outils d'entreprise.

L'IA agentique permet de passer de la génération de texte à la réalisation de tâches.

[McKinsey](https://www.mckinsey.com/capabilities/quantumblack/our-insights/the-state-of-ai) indique en 2026 que 40 % des grandes entreprises (>1 Md$ de CA) déclarent déjà avoir des agents à l'échelle dans au moins une fonction, contre 27 % un an auparavant. Pour les entreprises plus petites, le chiffre est d'environ 22 %.

Une prochaine étape possible est de réimaginer l'organisation des entreprises, sachant que certaines fonctions (voire des business units entières ?) pourraient être majoritairement déléguées à des systèmes d'IA agentique.

Qu'est-ce que ça implique, ou ça pourrait nous amener ?

C'est là l'objet de notre atelier de réflexion collective.

## Synthèse des discussions en groupe

Après 45 minutes d’échanges, chaque groupe a présenté une synthèse en 5 minutes:

- Le groupe 1 partageait son inquiétude quant à la vitesse de développement de l’IA qui dépasse désormais nos capacités (humaines) d’adaptation. Les générations d’humains qui auront grandi avec l’IA seront-ils encore capables de l’esprit critique nécessaire pour évaluer et nuancer les réponses de l’IA ? Comment les aider à développer et employer cet esprit critique ? Enfin, une fois habitués à un usage quotidien de l’IA, serons-nous encore capables de faire notre travail “à la main” ?
- Le groupe 2 s’est plus concentré sur les usages: l’IA impressionne dans le domaine du développement logiciel, de la traduction, de l’analyse légale, la préparation de réunions et le reporting. Plusieurs de ces tâches sont rébarbatives et on serait donc ravis de les déléguer à l’IA, quitte à ce que certains métiers disparaissent. La vitesse de traitement des IA ouvre de nouvelles opportunités d’analyse de données à très grande échelle, ce qui pourrait avoir un impact stratégique pour les entreprises. Mais suivre les recommandations de l’IA nous met parfois dans des situations qui échappent à notre contrôle et à notre compréhension, au point que réparer devient très difficile. Bref, l’IA c’est puissant, mais c’est pas la panacée.
- Le groupe 3 reconnaît également un risque d’atrophie des compétences humaines à force de se reposer sur ce que produit l’IA. Voire une perte d’intérêt, de “sens”, quand l’IA nous permet d’exercer notre métier de plus en plus vite, en nous transformant en automates hyper productifs, comme cet ophtalmo qui traite chaque client en 5 minutes chrono. En revanche, même si le développement logiciel peut être quasiment délégué à 100% à l’IA, il restera toujours important de s’appuyer sur les humains pour collecter, exprimer et prioriser les besoins à adresser. Peut être que l’ingénieur devient alors orchestrateur (d’agents IA).
- Enfin, le groupe 4 a partagé un large spectre de points de vue quant aux impacts de l’IA sur l’emploi. Les plus optimistes jugent que, comme à l’ère de la robotisation, de nouveaux emplois seront créés pour compenser ceux qui auront été confiés à l’IA. D’autres avertissent que déléguer trop à l’IA nous rend fainéants: pourquoi écouter ce qui est dit en réunion, sachant que l’IA nous enverra un résumé ? Pire: l’automatisation de responsabilités administratives pourrait faire régresser certains progrès sociétaux liés à l’égalité des chances entre hommes et femmes, sachant que ces postes sont souvent occupés par des femmes. Ne faudrait-il pas alors légiférer pour protéger ces acquis de l’évolution et l’adoption incontrôlée de l’IA ? Quid des créations artistiques: l’humain ne devrait-il pas rester l’unique créateur d'œuvres issues de l’imagination et de la créativité ?

## Synthèse générée par IA (Gemini) sur la base des enregistrements

> Prompt: Nous avons récemment reçu une vingtaine d'alumni de L'INSA pour discuter ensemble des impacts de l'IA sur le monde du travail, tel qu'on l'observe et l'envisage.
> Les participants ont discuté pendant 45 minutes par groupes de 5 personnes puis ont présenté la synthèse de leurs réflexions et conclusions devant le reste des participants.
> En tant que co-organisateur de cet événement, je souhaite écrire un résumé de ces synthèses en moins de 500 mots (au total), pour les transmettre aux participants et les publier en ligne.
> Sur la base de l'enregistrement de ces synthèses de groupe, redige ce résumé.

Voici un résumé synthétique des réflexions menées par les alumni de l'INSA lors de leur atelier sur l'intelligence artificielle et le monde du travail :

### 1. Vitesse d'adaptation et accélération de la transformation

- Les participants ont souligné que si les mutations de postes et l'émergence de nouveaux métiers ne sont pas nouvelles, leur rythme actuel est fulgurant.  
- Cette accélération dépasse la capacité d'intégration et d'anticipation naturelle du cerveau humain, créant un sentiment d'essoufflement face à cette révolution.  

### 2. Esprit critique, éducation et dépendance aux outils

- L'accès à l'information et à la génération assistée interroge la capacité des nouvelles générations à cultiver un esprit critique et un véritable jugement.  
- Un risque majeur identifié est la « fainéantise intellectuelle », où l'on délègue aveuglément les décisions et les productions à l'IA sans recul ni vérification.  
- L'éducation et la formation doivent donc intégrer l'apprentissage de l'utilisation de l'IA tout en maintenant une exigence de rigueur et de recul analytique.

### 3. Impact sur les métiers et la productivité

- Si certains métiers (codage, traduction, analyses de données, tâches administratives ou médicales) bénéficient d'un gain de productivité considérable, d'autres rôles subissent des pressions sur leurs compétences et leur employabilité.  
- Le rôle de l'humain évolue vers une fonction d'orchestration, de validation et de définition des besoins, tout en posant la question de la responsabilité des productions automatisées.  
- Enfin, la question sociétale de la valeur du travail et de la répartition des richesses face à l'augmentation de la productivité a été soulevée comme un défi incontournable.
