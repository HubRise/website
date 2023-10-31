---
title: Comment créer des codes ref dans Lightspeed ?
path_override: creer-codes-ref
position: 3
layout: documentation
meta:
  title: Créer des codes ref | Lightspeed Restaurant | HubRise
  description: 'Instructions pour créer des codes ref Lightspeed Restaurant requis pour que le logiciel de caisse fonctionne avec d''autres apps connectées (ex : plateforme de commande en ligne).'
---

Si vous connectez Lightspeed Restaurant à des plateformes de livraison comme Deliveroo, Uber Eats et Just Eat, ou à d'autres solutions de commande en ligne, vous devez créer des types de service, des paiements, des frais et des remises spécifiques à chaque plateforme que vous prenez en charge. Pour simplifier le dépannage, nous vous recommandons d'utiliser les codes spécifiques fournis sur la page [Plateformes de commande de repas](/apps/lightspeed-restaurant/food-ordering-platforms).

Pour créer des codes ref dans votre compte Lightspeed, vous avez deux options :

1. Vous pouvez contacter le support Lightspeed et leur demander d'inclure les codes dans votre back-office.
1. Vous pouvez inclure vous-même les codes ref dans votre back-office. Dans ce cas, suivez les procédures ci-dessous.

## Types de service

Les types de service sont appelés _profils de compte_ dans Lightspeed. Pour créer un type de service, suivez ces étapes :

1. Dans votre back-office Lightspeed, sélectionnez **Configuration**, puis **Paramètres** > **Profils de compte**.
1. Cliquez sur **Ajouter un profil de compte**, puis cliquez sur **OK**.
1. Dans la section **Options de base**, spécifiez le code ref de votre type de service dans le champ **Code**.
1. Renseignez les autres sections de la page si besoin, puis cliquez sur **Enregistrer**.
1. Répétez le processus pour tous les types de service que vous prenez en charge sur chaque plateforme.

Les codes des profils de compte suivants sont généralement utilisés, mais cela peut varier en fonction de la configuration Lightspeed spécifique :

- `PICKUP`, pour les commandes à emporter.
- `DELIVERY`, pour les commandes en livraison.
- `LOCAL`, pour les commandes sur place.

D'autres codes ref spécifiques de types de service doivent être utilisés lorsque vous connectez Lightspeed Restaurant à des plateformes de livraison telles que Deliveroo, Uber Eats et Just Eat. Pour plus d'informations, consultez [Plateformes de commande de repas](/apps/lightspeed-restaurant/food-ordering-platforms).

## Remises

Pour créer une remise compatible avec le modèle de données HubRise, suivez ces étapes :

1. Dans votre back-office Lightspeed, sélectionnez **Configuration**, puis **Articles** > **Articles**.
1. Cliquez sur **Add item** (Ajouter un article).
1. Sur la page **Create new item** (Créer un article), saisissez les valeurs suivantes :
   - Dans le champ **Item receipt name** (Nom du reçu de l'article), saisissez le nom de la remise.
   - À côté de **Sku**, sélectionnez **Click here to add your custom SKU manually** (Cliquer ici pour ajouter manuellement votre SKU personnalisé). Dans le champ qui s'affiche, renseignez le code ref de votre remise.
   - Dans la liste **Price structure** (Structure de prix), sélectionnez **Interactive negative price** (Prix négatif interactif).
   - Laissez le champ **Cost price** (Coût) vide.
   - Renseignez éventuellement les autres sections de la page.
1. Pour terminer, cliquez sur **Save** (Enregistrer).
1. Répétez le processus pour toutes les remises que vous prenez en charge sur chaque plateforme.

## Promotions

Pour créer une promotion compatible avec le modèle de données HubRise, suivez ces étapes :

1. Dans votre back-office Lightspeed, sélectionnez **Configuration**, puis **Articles** > **Articles**.
1. Cliquez sur **Add item sequence** (Ajouter une séquence d'articles).
1. Sur la page **Create new item sequence** (Créer une séquence d'articles), saisissez les valeurs suivantes :
   - Dans le champ **Sequence receipt name** (Nom du reçu de la séquence), saisissez le nom de la promotion.
   - À côté de **Sku**, sélectionnez **Click here to add your custom SKU manually** (Cliquer ici pour ajouter manuellement votre SKU personnalisé). Dans le champ qui s'affiche, renseignez le code ref de votre promotion.
   - Dans la liste **Price structure** (Structure de prix), sélectionnez **Interactive negative price** (Prix négatif interactif).
   - Laissez le champ **Cost price** (Coût) vide.
   - Renseignez éventuellement les autres sections de la page.
1. Cliquez sur **Save** (Enregistrer). Sur la page qui s'ouvre, vous pouvez poursuivre la configuration de la promotion.
1. Sur la page **Edit item sequence** (Modifier la séquence d'articles), sous **Items that are part of this sequence** (Articles faisant partie de cette séquence), cliquez sur **Edit the item list** (Modifier la liste d'articles).
1. Dans la section **Item list** (Liste d'articles), saisissez le nom des produits qui font partie de la promotion, puis cliquez sur l'icône **+ Add** (+Ajouter) pour les ajouter.
1. Pour terminer, cliquez sur **Save** (Enregistrer).
1. Répétez le processus pour toutes les promotions que vous prenez en charge sur chaque plateforme.

## Frais

Pour créer des frais, vous devez créer un article en suivant ces étapes :

1. Dans votre back-office Lightspeed, sélectionnez **Configuration**, puis **Articles** > **Articles**.
1. Cliquez sur **Add item** (Ajouter un article).
1. Sur la page **Create new item** (Créer un article), saisissez les valeurs suivantes :
   - Dans le champ **Item receipt name** (Nom du reçu de l'article), saisissez le nom de la remise.
   - À côté de **Sku**, sélectionnez **Click here to add your custom SKU manually** (Cliquer ici pour ajouter manuellement votre SKU personnalisé). Dans le champ qui s'affiche, renseignez le code ref des frais.
   - Dans la liste **Price structure** (Structure de prix), sélectionnez **Single price** (Prix unique).
   - Dans le champ **Cost price** (Coût), saisissez le montant des frais.
   - Renseignez éventuellement les autres sections de la page.
1. Pour terminer, cliquez sur **Save** (Enregistrer).
1. Répétez le processus pour tous les frais que vous prenez en charge sur chaque plateforme.

## Modes de paiement

Pour créer un mode de paiement, procédez comme suit :

1. Dans votre back-office Lightspeed, sélectionnez **Configuration**, puis **Paramètres** > **Modes de paiement**.
1. Cliquez sur **Ajouter un mode de paiement**.
1. Sur la page **Ajouter un nouveau mode de paiement**, spécifiez le code de votre mode de paiement dans le champ **Code**.
1. Renseignez les autres sections de la page si besoin, puis cliquez sur **Enregistrer**.
1. Répétez le processus pour tous les modes de paiement que vous prenez en charge sur chaque plateforme.
