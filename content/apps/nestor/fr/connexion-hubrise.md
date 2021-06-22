---
title: Connexion à HubRise
position: 2
layout: documentation
meta:
  title: Connexion à HubRise | Nestor | HubRise
  description: Étapes pour établir une connexion entre Nestor et HubRise. Connectez votre caisse et synchronisez vos données avec d'autres applications.
---

Pour connecter Nestor à HubRise, il suffit de suivre quelques étapes.

## Connecter Nestor

Pour établir la connexion entre un point de vente Nestor et HubRise :

1. Depuis votre poste Windows, lancez l'application **WebNES**, incluse dans l'installation de Nestor.
1. Dans la barre de menu, sélectionnez **Configuration** > **HubRise**. Une fenêtre nommée **Configuration HubRise** s'ouvre.
   ![Connexion à HubRise - Configuration HubRise](../images/001-fr-nestor-configuration-hubrise.png)
1. Cliquez sur **Connecter**. Vous êtes redirigé vers l'interface HubRise.
1. Choisissez le point de vente que vous désirez connecter et cliquez sur **Autoriser** pour donner à Nestor l'accès à vos informations. Si plusieurs listes de clients ou catalogues sont disponibles, cliquez sur **Suivant** afin d'afficher les listes déroulantes correspondantes, sélectionnez l'option voulue, puis cliquez sur **Autoriser**.

---

**REMARQUE IMPORTANTE :** Vérifiez bien le choix du catalogue avant d'autoriser la connexion, car le catalogue HubRise est écrasé dès que la connexion est établie.

---

![Connexion à HubRise - Choix du point de vente](../images/002-fr-nestor-connexion-location.png)

1. Copiez le code affiché et collez-le dans la fenêtre **Configuration HubRise** de l'utilitaire WebNES.
   ![Connexion à HubRise - Affichage du code](../images/003-fr-nestor-connexion-code.png)
1. Cliquez sur **Valider**. L'interface WebNES affiche **Connecté à HubRise**, ainsi que les informations de votre point de vente.
   ![Connexion à HubRise - Informations du point de vente](../images/004-fr-nestor-connecte.png)
1. En cas de besoin, l'éditeur du logiciel Nestor peut vous venir en aide. Pour leur donner accès à votre compte HubRise, [ajoutez les permissions nécessaires](/apps/nestor/connexion-hubrise#donner-acc-s-au-support-de-nestor).

---

**REMARQUE IMPORTANTE :** Vous devrez vous connecter à un compte HubRise existant, ou créer un nouveau compte pour terminer d'établir la connexion. Pour plus d'informations sur la manière de créer un profil utilisateur ou vous connecter à HubRise, consultez notre [Guide de prise en main](/docs/getting-started/).

---

## Donner accès au support de Nestor

Il est conseillé de donner à l'éditeur du logiciel Nestor l'accès à votre compte HubRise. En cas de besoin, ils pourront ainsi vous venir en aide plus facilement. Pour cela, suivez les étapes suivantes :

1. Depuis votre espace HubRise, sélectionnez **CONFIGURATION** > **COMPTES** dans le menu de gauche. La liste de vos comptes s'affiche.
1. Sélectionnez le compte auquel votre point de vente est rattaché.
1. Dans la section **Points de vente**, sélectionnez votre point de vente.
1. Dans la section **Permissions**, ajoutez *info@svitex.com* en sélectionnant l'option **Manager** (et non **Admin**) dans la liste déroulante des rôles, puis cliquez sur l'icône _+_. L'ajout d'un utilisateur est le moyen recommandé de donner accès à un tiers à votre point de vente, le partage de mot de passe est déconseillé pour des raisons de sécurité.

## Déconnecter Nestor

1. Ouvrez l'application **WebNES**.
1. Dans la barre de menu, sélectionnez **Configuration** > **HubRise**. Une fenêtre nommée **Configuration HubRise** s'ouvre.
1. Cliquez sur **Déconnecter**.
   ![Connexion à HubRise - Déconnexion](../images/005-fr-nestor-deconnecte.png)
