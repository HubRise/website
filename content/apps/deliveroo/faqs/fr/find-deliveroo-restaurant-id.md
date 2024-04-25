---
title: Comment trouver mon identifiant de restaurant Deliveroo ?
path_override: trouver-mon-identifiant-de-restaurant-deliveroo
position: 1
layout: documentation
meta:
  title: Trouver votre identifiant de restaurant | FAQ Deliveroo | HubRise
  description: Guide pratique pour trouver votre identifiant de restaurant Deliveroo. Cet ID est nécessaire pour connecter votre magasin Deliveroo à HubRise et à votre EPOS.
---

L'**identifiant de restaurant** est l'identificateur unique de votre restaurant sur Deliveroo. Il peut également être appelé **Identifiant de branche**, **Identifiant administrateur**, **Identifiant tablette**, ou **Identifiant point de vente**, selon le contexte. Cet identifiant est composé uniquement de caractères numériques et contient généralement 6 chiffres, bien qu'il puisse parfois en avoir 5.

Pour trouver votre identifiant de restaurant Deliveroo, procédez comme suit :

## Option 1 - Via la tablette Deliveroo

Pour trouver votre identifiant de restaurant à l'aide de votre tablette Deliveroo :

1. Sélectionnez le bouton de navigation en haut à droite de la page.
1. Votre identifiant est le numéro entre parenthèses indiqué en regard du nom du restaurant.

## Option 2 - Via le back-office de Deliveroo

Pour trouver votre identifiant de restaurant à partir de votre back-office Deliveroo :

1. Connectez-vous à votre [back-office Deliveroo](https://restaurant-hub.deliveroo.net).
1. Accédez à l'onglet **Accueil**, puis sélectionnez le point de vente et le compte appropriés dans les menus déroulants.
1. Consultez l'adresse URL de la page et recherchez le paramètre intitulé `branchId`. Votre identifiant de restaurant Deliveroo est le numéro qui suit immédiatement le signe `=`. Si, par exemple, l'adresse URL est `https://restaurant-hub.deliveroo.net/analytics?branchId=278233&dateRangePreset=last_7_days&orgId=190921`, l'identifiant de restaurant Deliveroo est `278233`.

![Identifiant du restaurant Deliveroo contenu dans l'adresse URL du back-office](./images/011-deliveroo-branchid.png)

Si vous ne trouvez pas votre identifiant de restaurant, contactez votre gestionnaire de compte Deliveroo.

## Option 3 - Depuis le code source du site Deliveroo

Les utilisateurs un peu plus techniques peuvent trouver l'identifiant du restaurant Deliveroo dans le code source de la page magasin sur Deliveroo :

- Ouvrez la page du restaurant Deliveroo dans un navigateur.
- Faites un clic droit sur la page et sélectionnez **Afficher le source de la page**.
- Dans le code source de la page, recherchez `"restaurant":{"id":`.

> Par exemple, le restaurant Sushi Shop à Nice indique `16478` comme identifiant restaurant dans le code source de https://deliveroo.fr/en/menu/nice/jean-medecin/sushi-shop-nice-1.
