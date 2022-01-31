---
title: Un exemple pratique
position: 3
layout: documentation
meta:
  title: Un exemple pratique | Comment lire les logs HubRise
  description: Exemple d'une commande et de la requête JSON y correspondant.
---

Les objets JSON peuvent décrire des modèles de données complexes en combinant plusieurs éléments au sein d'une structure hiérarchique. Le scénario suivant décrit un exemple de commande et la requête JSON correspondante. Il s'agit ici de la version simplifiée d'une commande réelle que vous pouvez rencontrer dans le back-office de HubRise.

## Exemple de commande

Quelqu'un passe la commande suivante dans votre système : « Une pizza margherita avec supplément olives et deux hamburgers au bacon, pour un montant total de 20,45 euros, à payer en espèces à l'encaissement ».

Comment représenter cette requête de façon précise, en organisant les informations selon une structure hiérarchique ?

Trois informations se trouvent au sommet de la structure :

- Les articles contenus dans la commande
- Les informations de paiement
- Le type de service

### Articles

Les articles de la commande peuvent être décrits comme une liste d'objets JSON dont chacun contient ses propres paires de clé/valeur. Dans le cas présent, il y a deux articles, chacun étant défini comme un objet ayant les informations suivantes :

- La dénomination du produit
- La quantité
- Les modifications optionnelles

Il est à noter qu'ils adoptent tous deux la même structure, mais contiennent des valeurs différentes.

Les modifications optionnelles peuvent ensuite être structurées sous forme de liste d'objets JSON, chacune décrivant une modification particulière. Pour la pizza, il n'y a qu'une seule modification optionnelle dans la liste, avec le type « garniture » et le nom « olives ». Pour les hamburgers, aucune modification optionnelle ; la liste associée est donc vide.

### Paiement

Les informations de paiement peuvent être structurées sous la forme d'un objet contenant les informations suivantes :

- Le montant total à régler.
- Le moyen de paiement choisi par le client.

### Type de service

Le dernier nœud situé au niveau supérieur de la commande est le type de service choisi par le client. Dans le cas présent, il est représenté par une paire clé/valeur ayant la valeur « cash » (espèces).

## Structure des informations

Nous avons décomposé la commande initiale en trois nœuds d'information principaux. Pour chacun d'eux, nous avons énuméré leurs différentes caractéristiques. Nous avons organisé les informations de manière hiérarchique.

Pour rendre la structure de la commande encore plus compréhensible, nous pouvons nous aider du schéma suivant. ![Structure des informations JSON](../images/003-en-2x-sample-order.png)

Les principaux nœuds situés au sommet de la commande concernent les « articles », le « paiement » et le « type de service ». Chacun de ces nœuds constitue le point de départ d'une connexion vers des niveaux d'information de plus en plus détaillés.

Par exemple, pour connaître le montant total de la commande, vous pouvez partir du nœud de paiement, descendre d'un niveau jusqu'au nœud total, puis lire la valeur associée, à savoir : 20,45 EUR.
