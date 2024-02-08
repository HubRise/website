---
title: Configuration
path_override: configuration
position: 4
layout: documentation
meta:
  title: Configuration | Uber Eats | HubRise
  description: Configuration d'Uber Eats Bridge pour recevoir vos commandes Uber Eats dans votre logiciel de caisse ou d'autres applications connectées à HubRise.
---

La page Configuration est accessible en cliquant sur la flèche <InlineImage width="20" height="20">![icône fléchée](../images/arrow-icon.jpg)</InlineImage> dans le coin supérieur droit de la page principale. Pour plus de détails, voir la rubrique [Interface utilisateur](/apps/uber-eats/user-interface).

La page Configuration permet de personnaliser le comportement d'Uber Eats Bridge.

Elle est divisée en plusieurs sections pour faciliter la navigation.

![Page de configuration de Uber Eats Bridge](./images/002-configuration-page.png)

## Langue

Dans cette section, vous pouvez choisir la langue d'édition de vos reçus.

## Types de service

Les types de service tels que la livraison par Uber Eats, la livraison par le restaurant, la vente à emporter ou la consommation sur place peuvent nécessiter la saisie du code ref correspondant. Reportez-vous à la documentation de votre logiciel de caisse sur le site Web de HubRise.

## Articles spéciaux

Le **code ref des articles jetables** désigne le code ref utilisé lorsque les clients incluent des articles jetables à leurs commandes. Tous les restaurants Uber Eats n'offrent pas à leurs clients la possibilité de demander des articles jetables, tels que des couverts, pailles ou serviettes. Toutefois, si c'est votre cas, vous devez fournir un code ref. Créez un produit "Articles jetables" sur votre logiciel de caisse et spécifiez le code ref ici.

La capture d'écran suivante montre la case **Demander des couverts, pailles, etc.** que les clients peuvent cocher pour demander des articles jetables.

![Case à cocher des articles jetables dans Uber Eats](./images/009-disposable-items.png)

## Promotions

Le **code ref de promotion** est le code associé aux promotions Uber Eats sur votre logiciel de caisse. Pour savoir comment gérer les promotions dans votre logiciel de caisse, reportez-vous à la documentation de votre logiciel de caisse sur le site Web de HubRise.

## Paiements

Le **code ref de paiement** est le code qui est associé aux paiements Uber Eats sur votre logiciel de caisse. En l'absence de code, votre logiciel de caisse pourrait ne pas identifier et traiter correctement les paiements Uber Eats. Pour plus d'informations sur la configuration des paiements, reportez-vous à la documentation de votre logiciel de caisse sur le site Web de HubRise.

## Autres statuts

Uber Eats prend en charge les trois statuts de commande suivants :

- `accepted` : la commande a été acceptée par la logiciel de caisse.
- `rejected` : l'envoi de la commande à la logiciel de caisse a échoué.
- `cancelled` : la commande a été annulée par la logiciel de caisse.

Uber Eats Bridge vous permet de choisir les statuts HubRise qui déclenchent un statut donné dans Uber Eats. Cette option est utile pour gérer différents scénarios lorsque votre logiciel de caisse actualise le statut de la commande. Par exemple, si votre logiciel de caisse marque une commande acceptée comme `received` sur HubRise, vous pouvez configurer le bridge pour qu'Uber Eats reconnaisse que la commande a été acceptée.

Pour chaque statut de commande Uber Eats, sélectionnez le comportement souhaité dans le menu déroulant. Pour savoir quels statuts sont supportée par votre logiciel de caisse, reportez-vous à la documentation de votre logiciel de caisse sur le site Web de HubRise.

## Sauvegarde de la configuration

Lorsque vous êtes satisfait de la configuration d'Uber Eats Bridge, cliquez sur **Enregistrer** en haut de la page pour revenir à la page Opérations.

## Réinitialisation de la configuration

Si vous souhaitez réinitialiser la configuration et effacer ses valeurs, cliquez sur **Réinitialiser la configuration** en bas de la page.

---

**REMARQUE IMPORTANTE :** La réinitialisation de la configuration effacera également votre UUID de magasin Uber Eats. Pour recevoir à nouveau les commandes Uber Eats, vous devrez resaisir votre UUID de magasin.

---

La réinitialisation de la configuration ne supprime pas les fichiers journaux des opérations affichés sur la page principale.
