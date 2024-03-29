---
title: Associer les codes ref
path_override: associer-codes-ref
position: 5
layout: documentation
meta:
  title: Associer les codes ref | WooCommerce | HubRise
  description: Instructions pour associer les codes ref des produits WooCommerce à d'autres apps après avoir connecté le logiciel de caisse à HubRise. Connectez les apps et synchronisez vos données.
---

Pour traiter correctement les commandes, la plupart des logiciels de caisse exigent un code ref pour chaque produit. Vous devez donc vérifier que chaque produit dans WooCommerce est associé au bon code ref.

Cette page explique comment configurer manuellement les codes ref dans WooCommerce. Certains logiciels de caisse offrent la possibilité d'exporter leur catalogue vers HubRise, ce qui permet de renseigner automatiquement les bons codes ref des produits WooCommerce. Pour plus de détails, voir [Envoyer le catalogue](/apps/woocommerce/push-catalog).

## Produits et SKUs

Pour attribuer des codes ref à vos produits WooCommerce, suivez ces étapes :

1. Connectez-vous à votre back-office WooCommerce.
2. Dans le menu, sélectionnez **Produits** > **Tous les produits**.
3. Dans la liste des produits, trouvez celui pour lequel vous voulez ajouter le code ref, et cliquez sur **Modifier**.
4. Selon que votre produit est un produit simple ou variable, suivez les instructions ci-dessous.
5. Cliquez sur **Enregistrer les modifications** pour confirmer.
6. Répétez cette procédure pour chaque produit.

### Produits simples

Pour les produits sans variations :

- Ouvrez l'onglet **Inventaire**.
- Saisissez le code ref SKU HubRise dans le champ **SKU**.
  ![Saisie du code ref dans le champ SKU pour un produit WooCommerce](./images/008-woocommerce-product-ref-code.png)

### Produits variables

Pour les produits avec variations :

- Ouvrez l'onglet **Variations**.
- Cliquez sur la variante souhaitée afin de développer le formulaire.
- Saisissez le code ref SKU HubRise dans le champ **SKU**.
  ![Saisie du code ref dans le champ SKU pour une variante WooCommerce](./images/009-woocommerce-variation-ref-code.png)

## Options

WooCommerce ne prend pas en charge les options. Utilisez les produits et les SKUs à la place.
