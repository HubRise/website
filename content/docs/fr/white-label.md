---
title: Marque Blanche
path_override: marque-blanche
position: 16
layout: documentation
meta:
  title: Marque blanche | HubRise
  description: Le programme HubRise Marque Blanche permet aux partenaires de proposer les solutions HubRise sous leur propre marque.
---

Le programme **HubRise Marque Blanche** permet à certains partenaires de proposer les solutions HubRise sous leur propre marque. Cette offre est destinée aux éditeurs de logiciels, revendeurs et chaînes, à partir d'une dizaine de points de vente.

## Qu'est-ce que HubRise Marque Blanche ?

Avec HubRise Marque Blanche, les partenaires peuvent personnaliser l'apparence de certaines applications HubRise pour les adapter à leur identité visuelle. Les applications concernées sont :

- [OrderLine](/apps/orderline/overview) : une application de centralisation des commandes.
  ![OrderLine](./images/024-white-label-orderline.png)

- [Catalog Manager](/apps/catalog-manager/overview) : une application de gestion des catalogues produits.
  ![Catalog Manager](./images/023-white-label-catalog-manager.png)

- Portail Marque Blanche : une interface de connexion pour les utilisateurs finaux.

Pour chaque application, les éléments suivants sont personnalisables :

- Les couleurs, le nom, le logo et le favicon pour refléter l'identité visuelle du partenaire.
- Le nom de domaine (tel que _commandes.pizza-flamme.com_) pour rassurer les utilisateurs finaux.

En revanche, le back-office HubRise n'est pas personnalisable. Il reste accessible aux équipes internes du partenaire, qui peuvent donner accès aux utilisateurs finaux aux applications en marque blanche.

## Gestion des utilisateurs et accès

### Ajout d'un utilisateur

Pour inviter un utilisateur à rejoindre votre environnement Marque Blanche, suivez les étapes indiquées dans la section [Ajouter un utilisateur](/docs/permissions#add-user).

- Si l'utilisateur n'existe pas encore dans HubRise, il recevra une invitation par e-mail personnalisée avec un lien :
  ![Email d'invitation](./images/025-white-label-email.png)

  Il peut cliquer sur le lien pour accepter l'invitation, choisir un mot de passe et accéder à votre environnement Marque Blanche :
  ![Définir le mot de passe](./images/030-white-label-password-setup.png)

- Si l'utilisateur est déjà inscrit sur HubRise, il ne recevra pas d'e-mail mais pourra utiliser immédiatement ses nouvelles permissions.

### Accès au Portail Marque Blanche

Une fois connecté, l’utilisateur arrive sur le Portail Marque Blanche, une interface sous votre marque qui centralise l’accès aux applications disponibles.

![Portail Marque Blanche](./images/026-white-label-portal.png)

Sur ce portail, l’utilisateur voit les applications, sous le nom que vous avez choisi, avec votre favicon et vos couleurs. Il peut cliquer sur une application pour l'ouvrir dans un nouvel onglet. Les applications disponibles dépendent des permissions :

- Catalog Manager, si la permission **Utiliser Catalog Manager** a été attribuée et qu'un compte est sélectionné.
- OrderLine, si la permission **Utiliser OrderLine** a été attribuée.

### Tester le Portail Marque Blanche

Pour ouvrir le Portail Marque Blanche et tester l'expérience utilisateur, connectez-vous à votre compte HubRise, ouvrez la page **CONNEXIONS** et cliquez sur **Portail Marque Blanche** en haut à droite.

## Mise en place et configuration

Pour activer HubRise Marque Blanche, contactez votre Responsable Partenariat ou écrivez à contact@hubrise.com.

Pour chaque application, les informations suivantes seront demandées :

- Nom de l'application : Le nom affiché sur l'interface, par exemple _Pizza Flamme Commandes_.
- Nom de domaine : Un sous-domaine personnalisé pour l'application, par exemple _commandes.pizza-flamme.com_. Vous devez posséder le domaine principal.
- Couleur principale : La couleur dominante, principalement utilisée pour les boutons et les éléments de navigation. Elle doit offrir un contraste suffisant sur un fond blanc.
- Logo : Une image avec un ratio largeur/hauteur entre 2:1 et 6:1, au format PNG, JPEG ou WEBP.
- Favicon : Une image de 64x64 px au format PNG.

Votre Responsable Partenariat pourra vous conseiller pour la personnalisation de vos applications.

### Configuration des sous-domaines

#### Étape 1 : Ajouter des enregistrements CNAME

Pour que vos applications soient accessibles sur votre nom de domaine, vous devez configurer un sous-domaine pour chaque application. Cette opération se fait dans l'interface de gestion de votre fournisseur de domaine (ex : OVH, GoDaddy, Gandi, etc.).

Ajoutez une entrée de type `CNAME` pour chaque application, en suivant cet exemple :

```
menus     1800 IN CNAME catalog-manager.hubrise-apps.com.
commandes 1800 IN CNAME orderline.hubrise-apps.com.
portail   1800 IN CNAME manager.hubrise.com.
```

Chaque ligne représente une entrée DNS :

- Le premier champ est le sous-domaine choisi (ex : `menus`).
- Le second champ (`1800`) correspond au temps de mise en cache (TTL) en secondes.
- `IN CNAME` indique qu'il s'agit d'un alias pointant vers un autre domaine.
- Le dernier champ est l'adresse cible, qui est fixe et doit être utilisée telle quelle.

Dans cet exemple, si votre domaine est _pizza-flamme.com_, OrderLine sera accessible à l'adresse _commandes.pizza-flamme.com_, et votre Portail Marque Blanche à l'adresse _portail.pizza-flamme.com_.

#### Étape 2 : Vérifier vos sous-domaines

Vérifiez que vos sous-domaines sont correctement configurés, en utilisant l'outil nslookup.io :

1. Ouvrez https://www.nslookup.io/
2. Saisissez votre sous-domaine complet, par exemple _orders.flame-pizza.com_
3. Cliquez sur **Find DNS records**

Si le sous-domaine est correctement configuré, les résultats afficheront une entrée CNAME dans la section **A records**. Si le sous-domaine n'est pas configuré, vous verrez **No A records found**. Répétez ce processus pour chaque sous-domaine.

Voici un exemple de sous-domaine correctement configuré :

![Exemple d'une requête DNS réussie](./images/031-2x-dns-success.png)

Si vous ne voyez pas le résultat attendu, vérifiez la configuration auprès de votre fournisseur de domaine ou contactez votre Responsable Partenaire pour obtenir de l'aide.

#### Étape 3 : Informer votre Responsable Partenaire

Une fois vos sous-domaines ajoutés et vérifiés, informez votre Responsable Partenaire. Il se chargera alors de créer des certificats SSL pour chacune de vos applications sous un délai de deux jours ouvrés, sans action supplémentaire de votre part. Vos applications Marque Blanche seront alors prêtes à être utilisées.
