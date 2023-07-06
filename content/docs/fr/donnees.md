---
title: Données
position: 5
layout: documentation
meta:
  title: Données commandes, clients et catalogues | HubRise
  description: Enregistrements concernant les commandes, les clients et les catalogues dans HubRise. Comment les consulter et comprendre leur contenu.
---

La section Données fournit des informations sur les commandes, les clients et les catalogues. Vous pouvez à tout moment sélectionner le compte et les points de vente à afficher.

## Commandes

La page **COMMANDES** affiche les commandes dans l'ordre inverse de leur date de création. Pour chaque commande de la liste, vous pouvez voir les attributs suivants  :

- **DATE (UTC+02:00)** : la date, l'heure et l'identifiant unique de la commande.
- **POINT DE VENTE** : si vous sélectionnez l'option **Tous les points de vente**, cette colonne indique le point de vente qui a réceptionné la commande.
- **CLIENT** : client qui a passé la commande.
- **MONTANT** : montant total de la commande.
- **STATUT** : statut actuel de la commande. Pour une liste des statuts possibles, voir la section [Statut de la commande](/developers/api/order-management/#order-status) (en anglais) de la page **Order Management** (Gestion des commandes) de l'API HubRise.
- **ORIGINE** : application à partir de laquelle la commande a été générée.

Pour filtrer les commandes par dates de début et de fin, procédez comme suit :

1. Sélectionnez les champs **Du** et **Au** et définissez les plages de dates à filtrer.
1. Sélectionnez l'icône de recherche <InlineImage width="17" height="17">![Icône Rechercher](../images/061-search.png)</InlineImage> pour filtrer les enregistrements d'après ces dates.
1. Pour effacer les filtres de date, supprimez les dates contenues dans les champs **Du** et **Au**, puis sélectionnez l'icône de recherche <InlineImage width="17" height="17">![Icône Rechercher](../images/061-search.png)</InlineImage>.

Cliquez sur la date de la commande pour afficher les détails complets. Pour afficher les détails complets de la requête, cliquez sur la date et l'heure dans la section **Logs**. Pour plus d'informations, voir [Logs](/docs/donnees#logs).

---

**FAQ associée** : [Comment vérifier que la connexion entre mon système et HubRise fonctionne correctement ?](/docs/faqs/verifier-connexion-entre-mon-systeme-et-hubrise/)

---

## Clients

La page **CLIENTS** affiche les listes de clients définies pour le compte sélectionné. Les clients sont classés par ordre inverse de leur date de création.

Les enregistrements contenus sur cette page affichent les attributs suivants :

- **NOM** : nom du client, suivi de son identifiant unique.
- **COMMANDES** : nombre de commandes passées par le client depuis son inscription.
- **DÉPENSE** : montant dépensé par le client sur l'ensemble des commandes passées avec le compte.
- **DEPUIS** : date de la première commande du client.

Pour filtrer les clients par nom ou adresse e-mail, procédez comme suit :

1. S'il existe plusieurs listes de clients associées au compte ou au point de vente, sélectionnez la liste déroulante en regard de l'intitulé **Clients**, puis sélectionnez la liste de clients à afficher.
1. Cliquez sur le champ **Rechercher par nom ou email** et saisissez le texte à rechercher.
1. Sélectionnez l'icône de recherche pour filtrer les enregistrements de client.
1. Pour revenir à la liste clients complète et non filtrée, supprimez tout le texte contenu dans le champ **Rechercher par nom ou email**, puis sélectionnez l'icône de recherche <InlineImage width="17" height="17">![Icône Rechercher](../images/061-search.png)</InlineImage>.

Pour afficher les détails complets d'un client, cliquez sur le nom de celui-ci. Pour voir les logs complets de toutes les requêtes liées à la liste de clients, cliquez sur **Voir les logs**.

Pour créer, modifier ou supprimer une liste de clients, voir [Listes de clients](/docs/listes-clients/).

## Catalogues

À partir de la page **CATALOGUES**, vous pouvez afficher les catalogues présents dans HubRise et les logs des requêtes liées à chacun des catalogues.

Les applications connectées qui ont accès à votre catalogue HubRise peuvent télécharger ou modifier les catalogues. Un logiciel de caisse connecté peut par exemple pousser son catalogue de produits dans HubRise pour qu'un site internet d'e-commerce puisse l'utiliser. Si nécessaire, vous pouvez aussi éditer le catalogue dans Catalog Manager, une application gratuite disponible sur HubRise.

### Afficher le catalogue

Les comptes et les points de vente peuvent contenir plusieurs catalogues. Pour afficher un catalogue spécifique, sélectionnez-le dans la liste déroulante en regard de l'intitulé **Catalogues**.

Les catalogues sont présentés dans trois onglets :

- **SKUS** : articles que vous vendez aux clients.
- **PROMOTIONS** : offres spéciales disponibles dans le catalogue. Une promotion permet de bénéficier d'une remise tarifaire sur des combinaisons de produits achetés ensemble. La promotion **Un article acheté, un gratuit**, par exemple, est une offre spéciale qui s'applique à deux produits. Elle prévoit une réduction de prix égale au prix du produit le moins cher.
- **REMISES** : rabais disponibles dans le catalogue. Les codes de remise s'appliquent non pas à des produits spécifiques, mais à l'ensemble de la commande. Le code **LIVRAISONOFFERTE**, par exemple, peut supprimer les frais de livraison pour l'ensemble de la commande, tandis que le code **CESTVENDREDI** peut offrir une remise de 10 % sur l'ensemble de la commande le vendredi.

![Onglets du catalogue HubRise](../images/053-fr-2x-catalog-tabs.png)

Pour les SKUs, les attributs suivants s'affichent :

- **CATÉGORIE** : catégorie à laquelle appartient le produit, par exemple : _Bottes_.
- **PRODUIT** : nom affiché visible par le client. Les noms des produits ne doivent pas nécessairement être uniques. Vous pouvez par exemple vendre des bottes de pointures différentes, mais sous le même nom de produit intitulé _Bottes imperméables_.
- **SKU** : variation ou taille du produit. Dans le cas des _Bottes imperméables_, par exemple, vous pouvez vendre une pointure 28 et de coloris noir, et une autre pointure 32 et de coloris marron.
- **PRIX** : le prix du produit, ainsi que la devise utilisée.
- **CODE REF** : identifiant unique du produit provenant du système de gestion du produit source. Ce code permet d'identifier l'article dans toutes les applications. Les identifiants sont constitués de caractères alphanumériques et de caractères spéciaux. L'identifiant `bottes_imperméables_pointure_28_noir`, par exemple, peut faire référence à une paire de bottes de pointure 28 et de coloris noir.

Pour les promotions et les remises, les attributs suivants s'affichent :

- **NOM** : intitulé de la promotion ou de la remise.
- **CODE REF** : identifiant unique de la promotion ou de la remise provenant du système de gestion du produit source.

Pour voir les logs complets de toutes les requêtes liées au catalogue, cliquez sur **Voir les logs**. Pour plus d'informations, voir [Logs](/docs/donnees#logs).

Pour créer, modifier ou supprimer un catalogue, voir [Catalogues](/docs/catalogues/).

## Logs

Chaque page de la section **DONNÉES** fournit des informations complémentaires à travers sa page de logs.

Les logs enregistrent les requêtes de connexion adressées à HubRise par une application. Chaque requête constitue une transaction entre une application et HubRise, telle qu'une commande, l'inscription d'un nouveau client ou une mise à jour du catalogue.

La page de logs affiche une liste récapitulative des requêtes par ordre chronologique inverse. Lorsque vous ouvrez une commande dans la page **COMMANDES**, que vous sélectionnez un log sur la page **CLIENTS**, ou cliquez sur **Voir les logs** sur la page **CATALOGUES**, les informations suivantes s'affichent :

- **HEURE (UTC+02:00)** : date et heure de la requête au format UTC.
- **ORIGINE** : application à partir de laquelle la requête a été créée.
- **POINT DE TERMINAISON** : point de terminaison de la requête, dont la méthode HTTP et l'URL.
- **RÉPONSE** : code de réponse HTTP.

D'autres détails sur les logs sont disponibles à l'intention des utilisateurs avancés et des développeurs pour leur permettre de visualiser les communications entre les applications et de résoudre les problèmes. Pour afficher les détails d'une entrée parmi les logs, procédez comme suit :

1. Cliquez sur la ligne à afficher. La liste complète des détails relatifs à la requête et à la réponse s'affiche.
1. Pour télécharger la requête ou la réponse, sélectionnez l'icône de téléchargement <InlineImage width="15" height="14">![Icône de téléchargement](../images/058-download.png)</InlineImage>. La requête ou la réponse sélectionnée sera délivrée sous forme de fichier JSON.

Pour plus d'informations, voir la rubrique [Comprendre les logs HubRise](/docs/hubrise-logs). Pour une référence complète sur l'API HubRise, voir la [page de référence de l'API HubRise](/developers/api/general-concepts) (en anglais).
