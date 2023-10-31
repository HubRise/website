---
title: Introduction aux requêtes API
path_override: introduction-aux-requetes-api
position: 5
layout: documentation
meta:
  title: Introduction aux requêtes API | Comment lire les logs HubRise
  description: Courte introduction aux requêtes API en termes non-techniques afin de mieux comprendre les requêtes HubRise.
---

## Présentation générale

Les requêtes d'API permettent la communication entre différents systèmes. En des termes non techniques, elles transmettent les informations nécessaires pour envoyer ou extraire les données depuis et vers un système, et pour modifier son état. Par exemple, un système de commande en ligne connecté à HubRise peut utiliser des requêtes d'API pour envoyer les détails d'une nouvelle commande à HubRise.

Le contenu effectif de la requête est un objet JSON contenant des paires d'informations clé/valeur conformes à une syntaxe prédéfinie. Pour plus d'informations, voir [Organisation des informations](/docs/hubrise-logs/organising-information) et [Comprendre la syntaxe JSON](/docs/hubrise-logs/understanding-json-syntax). Une requête d'API ne se résume cependant pas uniquement à son contenu.

## Composantes des requêtes d'API

Chaque interaction API implique deux ordinateurs : l'un envoie une requête, tandis que l'autre reçoit cette requête et renvoie une réponse. La requête et la réponse sont donc les deux composantes principales d'un échange d'API.

La requête comprend les éléments suivants.

- Méthode HTTP
- Adresse URL
- En-têtes
- Corps

Considérées ensemble, la méthode HTTP et l'URL constituent ce que l'on nomme le point de terminaison d'une requête.

La réponse comprend les éléments suivants.

- Code, sous forme de numéro à trois chiffres
- En-têtes
- Corps

Avant d'analyser en détail ces composants et la façon dont ils apparaissent dans HubRise, considérons une analogie simple.

## Une analogie simple

Imaginez que vous souhaitiez envoyer une lettre à votre fournisseur d'électricité, par exemple pour modifier le contrat en cours, obtenir des informations sur une facture spécifique ou résilier votre contrat.

La lettre que vous envoyez à la compagnie d'électricité constitue la requête. Le contenu de la lettre est le corps de la requête, il comprend vos informations personnelles sous forme de JSON.

L'en-tête de la lettre s'apparente aux en-têtes de la requête, et contient les métadonnées de celle-ci. Il peut s'agir, par exemple, d'une référence de client, qui joue un rôle analogue à celui du jeton d'authentification, ou de références à des lettres antérieures, comme dans le cas de curseurs de pagination.

Pour poursuivre l'analogie, l'adresse que vous inscrivez sur votre lettre est la partie de l'URL qui désigne le domaine. Elle spécifie le lieu où vous souhaitez envoyer votre lettre, en l'occurrence votre fournisseur d'électricité.

L'action que vous souhaitez exécuter par le biais du contenu de votre lettre, par exemple l'annulation de votre contrat, serait spécifiée par le point de terminaison.

Enfin, lorsque vous envoyez une lettre, vous recevez généralement quelque chose en retour : c'est la réponse. Le fournisseur d'électricité accuse réception de la requête ou, si la lettre ne peut être acheminée, le bureau de poste vous informe du motif de cette livraison manquée. Là, il s'agit du code de la réponse.
