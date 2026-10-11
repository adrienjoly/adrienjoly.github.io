# Que devient notre travail à l'ère de l'IA

> Contexte: Cet article est la version initiale (longue) de l'introduction que j'avais préparée pour l'atelier de réflexion collective co-animé avec Agnès Grisard pour les alumni de l'INSA, le 7 Octobre 2026.

Il y a quelques jours, lors d'un entretien régulier avec ma manager, elle m'a demandé "qu'est-ce qui tu as réalisé qui t'a rendu fier, ces dernières semaines ?" D'habitude, je n'ai aucun mal à trouver des réponses à cette question. Mais depuis qu'on nous a fortement encouragé à déléguer le gros de notre travail de création à une IA, je peine à me souvenir de la dernière fois où je me suis senti fier de mon travail... Utile, oui ! Apporter de la valeur, oui ! Mais la fierté, le plaisir, les pics de dopamine à chaque idée qui me rapproche un peu plus d'apporter une solution au problème sur lequel je travaille, c'est moins évident. Est-ce que la machine m'aide encore à faire mon travail ? Ou suis-je devenu un larbin au service de la machine ? Voilà la principale question qui nourrit ma crise de la quarantaine.

En tant qu'ingénieur logiciel, je pense exercer un des métiers les plus tentants à remplacer intégralement par une IA, dès que ce sera possible. Au-delà du fait que c'est une activité de nature  quasi-totalement intellectuelle, ces profils coûtent cher et ont parfois la réputation d'être "difficiles" à gérer. Alors quand le PDG découvre Claude Code et arrive à lui faire développer en quelques heures un prototype fonctionnel d'une fonctionnalité qu'il a commandée il y a des mois à l'équipe produit de son entreprise, sans broncher ni dormir, je peux comprendre sa tentation de remplacer cette équipe par une poignée d'agents IA.

Comment en est-on arrivés là en si peu de temps ? Après tout, les premières IAs sont nées dans les années 50. Alors comment se fait-il que cela fait seulement quelques mois qu'on se mette à construire des centrales nucléaires dédiées à alimenter les data centers d'OpenAI et des GAFAMs ? Que les plus gros acteurs du numérique licencient des ingénieurs par milliers ? Que les entreprises américaines qui créent les IA modernes demandent à ce qu'on légifère pour réguler/cadrer les progrès du développement de leurs IA, tellement que les perspectives et risques sont devenus inquiétants ? Et même, que certains employés quittent ces entreprises car ils ne veulent pas collaborer à l'élaboration d'une IA qui pourrait bientôt causer la mort à des millions d'humains, une fois qu'elle aurait gagné conscience de sa propre existence !

Mais ne vous inquiétez pas, le but de cet atelier n'est pas de vous faire faire des cauchemars. Agnès et moi vous proposons de profiter de la diversité des métiers que nous représentons, et du point de vue humaniste que nous avons cultivé à l'INSA, pour prendre du recul ensemble. Sur la base de nos expériences, de nos ressentis et de notre intuition. Pour discuter l'impact de l'IA sur le monde du travail, tel qu'on l'observe et tel qu'on l'imagine d'ici quelques années.

## Qu'est-ce qu'on veut dire par IA ?

Sur wikipédia, l'IA est définie comme l'ensemble des systèmes informatiques capables d'effectuer des tâches typiquement associées à l'intelligence, telles que l'apprentissage, le raisonnement, la résolution de problèmes, la perception ou la prise de décision.

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
- la difficulté à comprendre et à contrôler pourquoi un LLM donne telle ou telle réponse, car la logique de réponse est structurellement opaque, contrairement à celle d'un système expert basée sur un arbre de décision ou d'un logiciel basé sur du code
- le coût important en énergie, pour l'usage mais surtout l'entraînement de ces LLMs
- le coût important en métaux rares, pour fabriquer des puces "GPU" de plus en plus puissantes
- les risques de sécurité/confidentialité/conformité lié au fait d'envoyer des données confidentielles ou sensibles aux sociétés opérant les LLMs, souvent hébergées aux états unis
- le risque de dépendance sur les sociétés opérants les LLMs, notamment en phase d'instabilité géopolitique, ex: quand le président Trump a demandé à Anthropic de cesser l'exploitation à l'étranger de leur modèle le plus puissant
- même si on peut déléguer de plus en plus de tâches professionnelles à des systèmes argentiques à base de LLMs, et que la qualité du travail produit ne cesse d'augmenter, ces systèmes manquent souvent d'un contexte nécessaire qui n'est connu que par les humains qui l'utilisent, ex: les règles et connaissances non écrites (ou non mises à la disposition de l'IA) qui s'appliquent au sein de son équipe et de son entreprise.
- Enfin, comme dans le domaine des véhicules autonomes, il reste un flou quant à la responsabilité. Ex: si une IA a écrit un programme contenant un bug et que celui-ci cause indirectement la mort d'une personne, qui est responsable ? L'IA ? Les auteurs du prompt qui a permis à l'IA d'écrire ce programme ? L'équipe chargée de tester le programme ? Les créateurs de l'IA ?

## Les grandes tendances de leur adoption en entreprise ?

L'enquête Stanford AI Index 2026 estime que 88 % des organisations interrogées utilisent désormais l'IA dans au moins une fonction, et environ 70 % utilisent de l'IA générative.

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

McKinsey indique en 2026 que 40 % des grandes entreprises (>1 Md$ de CA) déclarent déjà avoir des agents à l'échelle dans au moins une fonction, contre 27 % un an auparavant. Pour les entreprises plus petites, le chiffre est d'environ 22 %.

Une prochaine étape possible est de réimaginer l'organisation des entreprises, sachant que certaines fonctions (voire des business units entières ?) pourraient être majoritairement déléguées à des systèmes d'IA agentique.

Qu'est-ce que ça implique, ou ça pourrait nous amener ?

C'est là l'objet de notre atelier de réflexion collective.
