---
title: Envoyer le catalogue
path_override: envoyer-catalogue
position: 6
layout: documentation
meta:
  title: Envoyer le catalogue | Clyo Systems | HubRise
  description: Envoyer le catalogue Clyo Systems vers HubRise. Connectez vos apps et synchronisez vos données.
---

Clyo Systems permet d'envoyer l'ensemble de vos produits vers un catalogue HubRise.

## Envoi manuel du catalogue

L'envoi du catalogue est déclenché manuellement depuis le back-office de Clyo Systems. Pour envoyer le catalogue, procédez comme suit :

1. Ouvrez le back-office Clyo Systems.
2. Sélectionnez **Paramètres** > **Commandes Web** > **HubRise**.
3. Cliquez sur **Envoi produits**.

En fonction du nombre de produits, l'envoi du catalogue peut prendre quelques secondes à une minute.

## Informations envoyées à HubRise

Clyo Systems envoie à HubRise les produits et la hiérarchie des catégories.

Pour chaque produit, les informations suivantes sont envoyées :

- Nom
- Catégorie
- Prix
- Code ref, un identifiant unique au format numérique, tel que `4` ou `107`.

Pour chaque option ou liste d'options, les informations suivantes sont envoyées :

- Nom
- Prix
- Code ref, un identifiant unique au format numérique, tel que `14` ou `120`
- Les listes d’options identiques (mêmes options, prix, références) sont encodées une seule fois et sont réutilisables.

---

**REMARQUE IMPORTANTE :** Les listes d'options ne sont pas rattachées aux produits. 

---