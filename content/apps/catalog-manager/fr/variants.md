---
title: Variantes
path_override: variantes
position: 10
layout: documentation
meta:
  title: Variantes | Catalog Manager | HubRise
  description: Instructions pour créer et modifier des variantes dans Catalog Manager. Synchronisez les catalogues entre votre logiciel de caisse et vos applications.
---

Les variantes permettent de gérer différents prix et disponibilités sur plusieurs plateformes avec un seul catalogue. Par exemple, vous pouvez configurer des prix différents entre les plateformes de livraison de repas et vos autres canaux.

Voici quelques configurations courantes :

- Variantes par plateforme de livraison : **Deliveroo**, **Uber Eats**, etc.
- Variantes par point de vente : **Londres**, **Paris**, etc.
- Variantes par groupe de points de vente : **Grandes villes**, **Petites villes**, etc.
- Variantes par canal : **En ligne**, **En boutique**, etc.

Vous pouvez également utiliser une combinaison des exemples ci-dessus : **Deliveroo**, **Uber Eats Paris**, **Uber Eats autres villes**, etc.

![Vue Grille Catalog Manager](./images/020-grid-view.png)

Pour plus d'informations sur les variantes, voir l'<Link href="/blog/catalog-variants">article de blog Variantes de catalogue</Link>.

## Créer des variantes

Pour créer une variante, suivez ces étapes :

1. Dans Catalog Manager, cliquez sur **Grille**.
2. Dans la vue **Grille**, cliquez sur **Gérer les variantes**.
3. Dans la boîte de dialogue qui s'affiche, cliquez sur **Nouvelle variante**, puis saisissez un nom pour votre variante.
4. Pour terminer, cliquez sur **Enregistrer**.

Répétez le processus pour chaque variante supplémentaire que vous voulez créer.

## Gérer la disponibilité et les prix des variantes

Après avoir créé toutes les variantes, vous pouvez modifier la disponibilité et le prix pour chaque produit, option et promotion de votre catalogue.
Lorsque vous créez un nouveau produit, une nouvelle option ou une nouvelle promotion dans votre catalogue, la duplication s'effectue pour l'ensemble des variantes. Vous pouvez ensuite ajuster le prix et la disponibilité.
La désactivation de la version **Défaut** d'un élément la désactive automatiquement pour toutes les variantes.

Lorsque vous avez fini de modifier vos variantes, cliquez sur **Enregistrer** pour mettre à jour le catalogue dans HubRise.

## Utiliser les variantes dans les applications

Pour utiliser la disponibilité et les prix d'une variante dans une application connectée au catalogue, vous devez sélectionner la variante dans les paramètres de l'application.

Par exemple, pour utiliser la variante Deliveroo, ouvrez Deliveroo Bridge, cliquez sur **Configuration**, puis sélectionnez **Deliveroo** dans le menu déroulant **Variante**. Pour les autres applications, reportez-vous à la documentation de l'application pour obtenir des instructions spécifiques.

***

**REMARQUE IMPORTANTE :** Tous les bridges HubRise prennent en charge les variantes de catalogue, mais pour le moment ce n'est pas le cas des autres applications connectées. Consultez la documentation de votre application pour savoir si cette fonctionnalité est prise en charge.

***
