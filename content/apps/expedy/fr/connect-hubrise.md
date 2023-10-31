---
title: Connexion à HubRise
path_override: connexion-hubrise
position: 2
layout: documentation
meta:
  title: Connexion | Expedy | HubRise
  description: Étapes pour établir une connexion entre Expedy et HubRise. Connectez votre caisse et synchronisez vos données avec d'autres applications.
---

---

**REMARQUE IMPORTANTE :** Si vous ne possédez pas encore de compte HubRise, commencez par en ouvrir un sur la [page d'inscription à HubRise](https://manager.hubrise.com/signup). L'inscription ne prend que quelques minutes !

---

## Connecter Expedy

Pour connecter votre imprimante Expedy à HubRise, suivez les étapes suivantes :

1. Depuis la page d'accueil du back-office Expedy, cliquez sur **Imprimantes**.
1. Cliquez sur le nom de l'imprimante à connecter.
1. Défilez vers le bas jusqu'à la section **HubRise**.
   ![Connexion à HubRise - Connecter HubRise](./images/001-expedy-hubrise-disconnected.png)
1. Cliquez sur **Cliquez pour connecter cette imprimante à un de vos comptes HubRise**. Vous êtes redirigé vers l'interface HubRise.
1. Si vous avez plusieurs points de vente, choisissez le point de vente à connecter. Si le point de vente sélectionné possède plusieurs listes de clients ou catalogues, cliquez sur **Suivant** pour afficher les listes déroulantes correspondantes, puis sélectionnez les options voulues.
1. Cliquez sur **Autoriser**.
1. La mention **Votre imprimante est connectée à votre compte HubRise** indique le succès de l'opération.
   ![Connexion à HubRise - HubRise connecté](./images/002-expedy-hubrise-connected.png)
1. En cas de besoin, l'équipe de support de Expedy peut vous venir en aide. Pour leur donner accès à votre compte HubRise, [ajoutez les permissions nécessaires](/apps/expedy/connect-hubrise#give-access).

## Tester la connexion

Pour tester la connexion entre Expedy et HubRise, utilisez une application connectée au même point de vente HubRise pouvant envoyer des commandes vers HubRise. Il peut s'agir par exemple d'une solution de commande en ligne ou de votre logiciel de caisse.

1. Passez une commande depuis l'application.
1. Vérifiez que la commande a bien été envoyée vers HubRise. Dans le back-office de HubRise, dans le menu latéral, sélectionnez **DONNÉES** > **COMMANDES**. La commande doit apparaître dans la liste des commandes.
1. Depuis la page d'accueil de votre back-office Expedy, cliquez sur **Imprimantes**.
1. Cliquez sur le nom de l'imprimante concernée.
1. Défilez vers le bas jusqu'à la section **10 dernières requêtes API**.
1. La commande doit apparaître dans cette section.

En cas de besoin, l'équipe de support de Expedy peut vous venir en aide. Pour leur donner accès à votre compte HubRise, [ajoutez les permissions nécessaires](/apps/expedy/connect-hubrise#give-access).

## Donner accès au support de Expedy {#give-access}

Pour faciliter la prise en charge de vos demandes de support, nous vous recommandons de donner accès à votre compte HubRise à l'éditeur de la solution Expedy.

Pour donner accès à Expedy, procédez comme suit :

1. Depuis le back-office de HubRise, sélectionnez **CONFIGURATION** dans le menu de gauche.
1. Dans la section **Permissions**, ajoutez support@expedy.fr en sélectionnant l'option **Manager** dans la liste déroulante des rôles.
1. Cliquez sur l'icône **+** pour ajouter le nouvel utilisateur.

L'ajout d'un utilisateur est le moyen recommandé de donner accès à un tiers à votre point de vente. Le partage de mot de passe est déconseillé pour des raisons de sécurité.

## Déconnecter Expedy

1. Depuis la page d'accueil de votre back-office Expedy, cliquez sur **Imprimantes**.
1. Cliquez sur le nom de l'imprimante à déconnecter.
1. Faites défiler vers le bas jusqu'à la section **HubRise**.
1. Cliquez sur **Déconnecter**.
