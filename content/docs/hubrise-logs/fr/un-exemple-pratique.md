---
title: Un exemple pratique
position: 3
layout: documentation
meta:
  title: Un exemple pratique | Comment lire les logs HubRise
  description: Exemple de commande et de la requête JSON correspondante.
---

Les objets JSON peuvent décrire des modèles de données complexes en combinant plusieurs éléments au sein d'une structure hiérarchique. Le scénario suivant décrit un exemple de commande et la requête JSON correspondante. Il s'agit ici de la version simplifiée d'une commande réelle que vous pourriez rencontrer dans le back-office de HubRise.

## Exemple de commande

Quelqu'un passe la commande suivante dans votre système : « Une pizza margherita avec supplément olives et deux hamburgers au bacon, pour un montant total de 20,45 euros, à payer en espèces à l'encaissement ».

Comment organiser cette requête de manière rationnelle, en faisant en sorte que les informations soient disposées selon une structure hiérarchique ?

Trois éléments d'information principaux se trouvent au sommet de la structure :

- Les articles contenus dans la commande
- Les informations de paiement
- Le type de service

### Articles

Les articles de la commande peuvent être décrits comme une liste d'objets JSON dont chacun contient ses propres paires de clé/valeur. Dans le cas présent, il y a deux articles, chacun étant défini comme un objet qui contient les informations suivantes :

- La dénomination du produit
- La quantité
- Les changements optionnels

Il est à noter qu'ils adoptent tous deux la même structure, mais contiennent des valeurs différentes.

Les changements optionnels peuvent ensuite être structurés sous forme de liste d'objets JSON, dont chacun décrit un changement optionnel distinct. Pour la pizza, il n'y a qu'un seul changement optionnel dans la liste, avec le type « garniture » et le nom « olives ». Pour les hamburgers, aucun changement optionnel n'est présent ; la liste associée est donc vide.

### Paiement

Les informations de paiement peuvent être structurées sous la forme d'un objet contenant les informations suivantes :

- Le montant total à régler.
- Le moyen de paiement choisi par le client.

### Type de service

Le dernier nœud situé au niveau supérieur de la commande est le type de service choisi par le client. Dans le cas présent, il est représenté par une paire clé/valeur ayant la valeur « cash » (espèces).

## Structure des informations

Nous avons décomposé la commande initiale en trois nœuds d'information principaux. Pour chacun d'eux, nous avons énuméré les différentes caractéristiques qu'ils doivent présenter. Nous avons organisé les informations de manière hiérarchique.

Pour rendre la structure de la commande encore plus compréhensible, nous pouvons nous aider du schéma suivant. ![Structure des informations JSON](../images/003-fr-2x-sample-order.png)

Les principaux nœuds situés au sommet de la commande concernent les « articles », le « paiement » et le « type de service ». Chacun de ces nœuds constitue le point de départ d'une connexion vers des niveaux d'information de plus en plus détaillés.

Par exemple, pour savoir combien coûte la commande totale, vous pouvez partir du nœud de paiement, descendre d'un niveau jusqu'au nœud total, puis lire la valeur qui lui est associée, à savoir : 20,45 EUR.
