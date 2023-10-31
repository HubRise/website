---
title: Récupérer le catalogue
path_override: recuperer-catalogue
position: 7
layout: documentation
meta:
  title: Récupérer le catalogue | Deliveroo | HubRise
  description: Découvrez comment importer un catalogue de Deliveroo dans HubRise.
---

Avec Deliveroo Bridge, vous pouvez importer votre menu Deliveroo dans un catalogue HubRise.

Cette fonctionnalité peut être utile si vous souhaitez :

- Créer une copie de votre menu Deliveroo.
- Modifier votre menu en utilisant le Catalog Manager de HubRise pour inclure des codes ref, par exemple. Pour plus d'informations, voir [Catalog Manager](/apps/catalog-manager/overview).
- Alimenter un catalogue HubRise qui sera ensuite poussé vers d'autres applications, telles que des plateformes de livraison de repas comme Uber Eats et Just Eat.

## Importer un menu depuis Deliveroo

Pour importer votre menu Deliveroo dans un catalogue HubRise, suivez ces étapes :

1. Connectez-vous à votre [compte HubRise](https://manager.hubrise.com).
1. Sélectionnez le compte HubRise et le point de vente connecté à votre restaurant Deliveroo.
1. Ouvrez la page **CONNEXIONS**, puis sélectionnez **Deliveroo Bridge** dans la liste des applications connectées.
1. Dans Deliveroo Bridge, sélectionnez l'onglet **Actions**.
1. Dans la section **Importer le catalogue de Deliveroo**, vérifier que le bon catalogue HubRise est connecté, cliquer sur **Importer le catalogue** et confirmer l'action.
1. Vérifiez le catalogue importé sur HubRise. Pour plus d'informations sur les catalogues HubRise, voir la rubrique [Catalogues](/docs/catalog).

---

**REMARQUE IMPORTANTE :** Cette opération va écraser le catalogue HubRise connecté à Deliveroo Bridge.

---

## Informations importées dans HubRise

Les données du catalogue extraites de Deliveroo sont identiques aux données transmises à Deliveroo. Pour plus de détails, vous pouvez vous référer à [Informations envoyées à Deliveroo](/apps/deliveroo/push-catalog#information-sent).

Cependant, il y a une exception à cette règle. Si les images utilisées sur votre boutique Deliveroo n'ont pas été précédemment téléchargées via HubRise, elles ne pourront pas être récupérées. Il s'agit d'une limitation connue, que l'équipe d'intégration Deliveroo est en train de corriger.

Si vous avez aussi une enseigne sur Uber Eats, vous avez la possibilité de récupérer le menu à partir de cette plateforme. Pour plus d'informations sur l'extraction d'un catalogue à partir d'Uber Eats, voir <Link href="/apps/uber-eats/pull-catalog">Récupérer le catalogue (en anglais)</Link> dans la documentation Uber Eats Bridge.
