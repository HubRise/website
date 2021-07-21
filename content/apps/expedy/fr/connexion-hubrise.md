---
title: Connexion à HubRise
position: 2
layout: documentation
meta:
  title: Connexion | Expedy | HubRise
  description: Étapes pour établir une connexion entre Expedy et HubRise. Connectez votre caisse et synchronisez vos données avec d'autres applications.
---

## Connecter Expedy

Pour connecter votre imprimante intelligente Expedy à HubRise, suivez les étapes suivantes :

1. Depuis la page d'accueil de votre back-office Expedy, cliquez sur **Imprimantes**.
1. Cliquez sur le nom de l'imprimante à connecter.
1. Faites défiler vers le bas jusqu'à la section **HubRise**.
   ![Connexion à HubRise - Connecter HubRise](../images/001-fr-expedy-hubrise-deconnecte.png)
1. Cliquez sur **Cliquez pour connecter cette imprimante à un de vos comptes HubRise**. Vous êtes redirigé vers l'interface HubRise.
1. Si vous avez plusieurs points de vente, choisissez le point de vente à connecter. Si le point de vente sélectionné possède plusieurs listes de clients ou catalogues, cliquez sur **Suivant** pour afficher les listes déroulantes correspondantes, puis sélectionnez les options voulues.
1. Cliquez sur **Autoriser**.
   ![Connexion à HubRise - HubRise connecté](../images/002-fr-expedy-hubrise-connecte.png)
1. En cas de besoin, l'équipe de support de Expedy peut vous venir en aide. Pour leur donner accès à votre compte HubRise, [ajoutez les permissions nécessaires](/apps/expedy/connexion-hubrise#donner-acc-s-au-support-de-expedy).

---

**REMARQUE IMPORTANTE :** Vous devrez vous connecter à un compte HubRise existant, ou créer un nouveau compte pour finaliser la connexion. Pour créer votre compte HubRise, consultez notre [Guide de prise en main](/docs/getting-started/).

---

## Tester la connexion

Pour tester la connexion entre Expedy et HubRise, un moyen simple est d'utiliser une autre application connectée au même point de vente HubRise, et capable d'envoyer des commandes vers HubRise. Il peut s'agir par exemple d'une solution de commande en ligne ou de votre logiciel de caisse.

1. Passez une commande depuis l'autre application.
1. Depuis la page d'accueil de votre back-office Expedy, cliquez sur **Imprimantes**.
1. Cliquez sur le nom de l'imprimante concernée.
1. Défilez vers le bas jusqu'à la section **10 dernières requêtes API**.
1. Si la commande n'apparaît pas dans cette section, vérifiez qu'elle a bien été envoyée à HubRise. Pour cela, allez dans votre espace HubRise, dans le menu latéral, sélectionnez **DONNÉES** > **COMMANDES**. Vérifiez que la commande est présente dans la liste des commandes.

## Donner accès au support de Expedy

Il est conseillé de donner à l'équipe de support de Expedy l'accès à votre compte HubRise. En cas de besoin, ils pourront ainsi vous venir en aide. Pour cela, suivez les étapes suivantes :

1. Depuis votre espace HubRise, sélectionnez **CONFIGURATION** > **COMPTES** dans le menu de gauche. La liste de vos comptes s'affiche.
1. Sélectionnez le compte auquel votre point de vente est rattaché.
1. Dans la section **Points de vente**, sélectionnez votre point de vente.
1. Dans la section **Permissions**, ajoutez *support@expedy.fr* en sélectionnant l'option **Manager** (et non **Admin**) dans la liste déroulante des rôles, puis cliquez sur l'icône _+_. L'ajout d'un utilisateur est le moyen recommandé de donner accès à un tiers à votre point de vente, le partage de mot de passe étant déconseillé pour des raisons de sécurité.

## Déconnecter Expedy

1. Depuis la page d'accueil de votre back-office Expedy, cliquez sur **Imprimantes**.
1. Cliquez sur le nom de l'imprimante à déconnecter.
1. Faites défiler vers le bas jusqu'à la section **HubRise**.
1. Cliquez sur **Déconnecter**.
