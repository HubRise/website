---
title: Marque blanche
path_override: white-label
position: 16
layout: documentation
meta:
  title: Marque blanche | HubRise
  description: Le programme marque blanche de HubRise permet aux partenaires de proposer les solutions HubRise sous leur propre marque.
---

Le programme marque blanche de HubRise permet à certains partenaires de proposer les solutions HubRise sous leur propre marque. Cette offre est destinée aux éditeurs de logiciels, revendeurs et chaînes, à partir d'une dizaine de points de vente.

## Qu'est-ce que la marque blanche ?

Avec la marque blanche, les partenaires peuvent personnaliser l'apparence des applications OrderLine et Catalog Manager. Un Portail marque blanche est également mis en place pour permettre à leurs utilisateurs de se connecter, récupérer leur mot de passe et ouvrir les applications sous leur marque.

Pour chaque application (OrderLine, Catalog Manager et Portail), les éléments suivants sont personnalisables :

- Les couleurs, le logo et le favicon pour refléter leur identité visuelle.
- Le nom de domaine afin de rassurer les utilisateurs finaux.

En revanche, le back office HubRise n'est pas personnalisable. Il reste accessible aux équipes internes du partenaire, qui peuvent ensuite donner accès aux utilisateurs finaux aux applications OrderLine et Catalog Manager sous leur marque.

## Mise en place de la marque blanche

Pour activer la marque blanche, contactez votre responsable partenariat ou écrivez à contact@hubrise.com.

Pour chaque application (OrderLine, Catalog Manager et Portail), les informations suivantes seront demandées :

- Nom de l'application : Le nom affiché sur l'interface, par exemple `Pizza Flamme Commandes`.
- Nom de domaine : Un sous-domaine personnalisé pour l'application, par exemple `commandes.pizza-flamme.com`. Vous devez posséder le domaine principal.
- Couleur principale : La couleur dominante, principalement utilisée pour les boutons et les éléments de navigation. Elle doit offrir un contraste suffisant sur un fond blanc.
- Logo : Une image avec un ratio entre 2:1 et 6:1, au format PNG, JPEG ou WEBP.
- Favicon : Une image de 64x64 px au format PNG.

Votre responsable partenariat pourra vous conseiller pour la personnalisation de vos applications.

## Configuration des sous-domaines

Pour que vos applications soient accessibles sous votre marque, vous devez configurer des sous-domaines sur votre nom de domaine. Cette opération se fait dans l'interface de gestion de votre fournisseur de domaine (ex : OVH, GoDaddy, Gandi, etc.).

Ajoutez une entrée de type `CNAME` pour chaque application, en suivant cet exemple :

```
menus         300 IN CNAME catalog-manager.hubrise-apps.com.
commandes     300 IN CNAME orderline.hubrise-apps.com.
portail       300 IN CNAME manager.hubrise.com.         
```

Chaque ligne représente une entrée DNS :

- Le premier champ est le sous-domaine choisi (ex : `menus`).
- Le second champ (`300`) correspond au temps de mise en cache (TTL) en secondes.
- `IN CNAME` indique qu'il s'agit d'un alias pointant vers un autre domaine.
- Le dernier champ est l'adresse cible, qui est fixe et doit être utilisée telle quelle.

Dans cet exemple, si votre domaine est `pizza-flamme.com`, OrderLine sera accessible à l'adresse `commandes.pizza-flamme.com`, et votre Portail marque blanche à l'adresse `portail.pizza-flamme.com`.

Une fois les sous-domaines ajoutés, informez votre responsable partenariat. Il se chargera alors de créer des certificats SSL pour chacune de vos applications sous un délai de deux jours ouvrés. Cette opération ne requiert aucune action de votre part.

## Accès aux applications

Une fois la marque blanche activée, vous pouvez donner accès aux applications OrderLine et Catalog Manager sous votre marque à vos clients, salariés ou franchisés.
