---
title: Comment créer des codes ref dans Lightspeed ?
path_override: creer-codes-ref
position: 3
layout: documentation
meta:
  title: Créer des codes ref | Lightspeed Restaurant | HubRise
  description: 'Instructions pour créer des codes ref Lightspeed Restaurant requis pour que le logiciel de caisse fonctionne avec d''autres apps connectées (ex : plateforme de commande en ligne).'
---

Si vous connectez Lightspeed Restaurant à des plateformes de livraison comme Deliveroo, Uber Eats et Just Eat, ou à toute autre solution de commande en ligne, vous devez créer des types de service, des paiements, des frais et des remises spécifiques à chaque plateforme que vous prenez en charge. Pour simplifier le dépannage, nous vous recommandons d'utiliser les codes spécifiques fournis pour les [Plateformes de commande de repas](/apps/lightspeed-restaurant/food-ordering-platforms) et les [Solutions de commande en ligne](/apps/lightspeed-restaurant/online-ordering-solutions).

Pour créer des codes ref dans votre compte Lightspeed, vous avez deux options :

1. Vous pouvez contacter le support Lightspeed et leur demander d'inclure les codes dans votre back-office.
1. Vous pouvez inclure vous-même les codes ref dans votre back-office. Dans ce cas, suivez les procédures ci-dessous.

## Types de service

Les types de service sont appelés **Profils de compte** dans Lightspeed. Pour créer un type de service, suivez ces étapes :

1. Dans votre back-office Lightspeed, sélectionnez **Configuration**, puis **Paramètres** > **Profils de compte**.
1. Cliquez sur **Ajouter un profil de compte**, puis cliquez sur **OK**.
1. Dans la section **Options de base**, spécifiez le code ref de votre type de service dans le champ **Code**.
1. Renseignez les autres sections de la page si besoin, puis cliquez sur **Enregistrer**.
1. Répétez le processus pour tous les types de service que vous prenez en charge sur chaque plateforme.

Les codes des profils de compte suivants sont généralement utilisés, mais cela peut varier en fonction de la configuration Lightspeed spécifique :

- `PICKUP`, pour les commandes à emporter.
- `DELIVERY`, pour les commandes en livraison.
- `LOCAL`, pour les commandes sur place.

D'autres codes ref spécifiques pour les type de service doivent être utilisés lorsque vous connectez Lightspeed Restaurant pour les [Plateformes de Commande de Repas](/apps/lightspeed-restaurant/food-ordering-platforms) telles que Deliveroo, Uber Eats, et Just Eat ou pour connecter des [Solutions de Commande en Ligne](/apps/lightspeed-restaurant/online-ordering-solutions) telles que Shopify, WooCommerce, LivePepper, Dishop et ainsi de suite.

## Remises

Pour créer une remise compatible avec le modèle de données HubRise, suivez ces étapes :

1. Depuis votre back-office Lightspeed, sélectionnez **Gestion des menus**, puis sélectionnez **Articles**.
1. Cliquez sur le menu déroulant **Créer**, puis sélectionnez **Article unique**.
1. Sur la page **Nouvel article**, saisissez les valeurs suivantes :
   - Dans le champ **Nom de l’article**, saisissez le nom de la remise.
   - Cliquez sur **Modifier le type de prix** puis sélectionnez **Prix négatif saisi manuellement**.
   - Pour utiliser un code ref spécifique, cliquez sur **Ajouter un code SKU personnalisé** et entrez un code ref. Sinon, un code ref sera généré automatiquement.
1. Renseignez les autres sections de la page si besoin, puis cliquez sur **Enregistrer**.
1. Répétez le processus pour toutes les remises que vous prenez en charge sur chaque plateforme.

## Promotions

Pour créer une promotion compatible avec le modèle de données HubRise, suivez ces étapes :

1. Depuis votre back-office Lightspeed, sélectionnez **Gestion des menus**, puis sélectionnez **Articles**.
1. Cliquez sur le menu déroulant **Créer**, puis sélectionnez **Article unique**.
1. Sur la page **Nouvel article**, saisissez les valeurs suivantes :
   - Dans le champ **Nom de l’article**, saisissez le nom de la promotion.
   - Cliquez sur **Modifier le type de prix** puis sélectionnez **Aucun prix**.
1. Renseignez les autres sections de la page si besoin, puis cliquez sur **Enregistrer**.
1. Répétez le processus pour toutes les promotions que vous prenez en charge sur chaque plateforme.

## Frais

Pour créer des frais, vous devez créer un article en suivant ces étapes :

1. Depuis votre back-office Lightspeed, sélectionnez **Gestion des menus**, puis sélectionnez **Articles**.
1. Cliquez sur le menu déroulant **Créer** et sélectionnez **Article unique**.
1. Sur la page **Nouvel article**, saisissez les valeurs suivantes :
   - Dans le champ **Nom de l’article**, saisissez le nom de la promotion.
   - Cliquez sur **Modifier le type de prix** puis sélectionnez **Prix saisi manuellement**.
   - Pour utiliser un code ref spécifique, cliquez sur **Ajouter un code SKU personnalisé** et entrez un code ref. Sinon, un code ref sera généré automatiquement.
1. Renseignez les autres sections de la page si besoin, puis cliquez sur **Enregistrer**.
1. Répétez le processus pour tous les frais que vous prenez en charge sur chaque plateforme.

## Modes de paiement

Pour créer un mode de paiement, procédez comme suit :

1. Dans votre back-office Lightspeed, sélectionnez **Configuration**, puis **Paramètres** > **Modes de paiement**.
1. Cliquez sur **Ajouter un mode de paiement**.
1. Sur la page **Ajouter un nouveau mode de paiement**, spécifiez le code de votre mode de paiement dans le champ **Code**.
1. Renseignez les autres sections de la page si besoin, puis cliquez sur **Enregistrer**.
1. Répétez le processus pour tous les modes de paiement que vous prenez en charge sur chaque plateforme.
