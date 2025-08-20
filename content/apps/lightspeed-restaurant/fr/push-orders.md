---
title: Envoyer des commandes
path_override: envoyer-commandes
position: 9
layout: documentation
meta:
  title: Envoyer des commandes | Lightspeed Restaurant | HubRise
  description: Découvrez les détails techniques sur l'envoi des commandes de HubRise à Lightspeed, et les champs transmis ou non.
---

HubRise peut envoyer les commandes de différentes solutions connectées directement dans votre logiciel de caisse Lightspeed Restaurant. Pour cela, il vous suffit de connecter Lightspeed Restaurant Bridge à HubRise. Aucune configuration supplémentaire n'est requise.

## Informations envoyées à Lightspeed

### Articles et options {#items-and-options}

Lightspeed Restaurant Bridge envoie à votre logiciel de caisse des informations complètes sur les articles et les options, y compris le nom, le code ref du produit, la quantité et le prix.

Lightspeed Restaurant Bridge convertit les options avec un code ref qui commence par `+` en instructions de production. Notez qu'aucun prix n'est associé aux instructions de production. L'ajout d'un prix dans une application connectée peut générer des [erreurs liées à une différence de prix](/apps/lightspeed-restaurant/troubleshooting/price-differences-errors).

Chaque article sur Lightspeed doit avoir un code ref. Les commandes contenant des articles avec des codes ref incorrects ou manquants sont rejetées par le logiciel de caisse. Ainsi, lorsqu'il envoie une commande au logiciel de caisse, Lightspeed Restaurant Bridge ignore tous les articles sans code ref.

### Statuts de commande

Lightspeed Restaurant Bridge crée une commande dans Lightspeed pour chaque commande créée sur HubRise. Le statut de la commande HubRise est mis à jour comme suit :

- `received` : Lorsque la commande est créée dans Lightspeed.
- `rejected` : Si la création de la commande échoue. L'erreur détaillée est disponible dans les champs personnalisés de la commande, sous la clé `epos.rejection_reason.cause`.
- `awaiting_collection` : Lorsque la commande est marquée comme prête dans Lightspeed.
- `completed` : Lorsque la commande est clôturée dans Lightspeed, et si le bridge est configuré pour clôturer les commandes. Pour plus d'informations, consultez la section [Statuts de commande](/apps/lightspeed-restaurant/configuration#order-statuses) sur la page de configuration.

Lorsqu'une commande est marquée comme `cancelled` dans HubRise, Lightspeed Restaurant imprime un message sur l'imprimante connectée pour indiquer l'annulation. Selon vos paramètres, ce message peut également apparaître à l'écran de la caisse. La commande reste présente dans Lightspeed et n'est pas supprimée.

### Remises

Les remises sont envoyées à Lightspeed Restaurant avec leur nom, leur code ref, et le montant de la remise.

Les remises doivent être créées en tant que produits dans Lightspeed. Pour savoir comment créer et vérifier les codes ref des remises dans votre back-office Lightspeed, consultez [Associer les codes ref](/apps/lightspeed-restaurant/map-ref-codes#skus-options-discounts-charges).

Les remises avec codes ref incorrects ou manquants sont rejetées par la caisse, c'est pourquoi Lightspeed Restaurant Bridge ignore les remises sans code ref.

### Frais

Les frais sont envoyés à Lightspeed Restaurant avec leur nom, leur code ref, et leur prix.

Les frais doivent être créés en tant que produits dans Lightspeed. Pour savoir comment créer et vérifier les codes ref des frais dans votre back-office Lightspeed, consultez [Associer les codes ref](/apps/lightspeed-restaurant/map-ref-codes#skus-options-discounts-charges).

Les frais avec codes ref incorrects ou manquants sont rejetés par le logiciel de caisse, c'est pourquoi Lightspeed Restaurant Bridge ignore les frais sans code ref.

Il y a une exception : les frais avec le code ref `TIP` ne sont pas envoyés en tant qu'articles mais sont inclus dans le paiement en tant que pourboire. Dans Lightspeed, les pourboires font partie du paiement et ne peuvent pas exister sans lui. Pour ajouter un pourboire sans paiement, utilisez des frais avec un code ref différent, qui correspond à un article dans Lightspeed.

### Paiements

Zéro, un ou plusieurs paiements peuvent être associés à une commande.

Le code ref du paiement est utilisé pour associer la commande HubRise au mode de paiement correct dans Lightspeed. Lightspeed Restaurant Bridge ignore les paiements sans code ref.

Pour savoir comment vérifier les codes ref des types de service disponibles dans votre back-office Lightspeed, consultez [Associer les codes ref](/apps/lightspeed-restaurant/map-ref-codes#payment-methods).

#### Gérer les différences de prix

Lorsque le montant total du paiement ne correspond pas au prix total de la commande calculé par Lightspeed Restaurant, deux scénarios peuvent se produire :

- Si le montant total du paiement est supérieur au montant prévu, Lightspeed rejette la commande.
- Si le montant total du paiement est inférieur au montant prévu, Lightspeed accepte la commande. Celle-ci reste cependant ouverte pour le paiement dans le logiciel de caisse.

---

**FAQ associée** : [Comment résoudre les erreurs liées à une différence de prix ?](/apps/lightspeed-restaurant/troubleshooting/price-differences-errors)

---

#### Règles d'arrondi du marché suisse

Sur le marché suisse, en raison de l'absence de pièces de 1 et 2 centimes, Lightspeed arrondit automatiquement le total de la commande au multiple de 5 centimes le plus proche, comme la loi suisse l'exige.

Pour éviter les écarts entre le total de la commande et le montant du paiement, HubRise applique les mêmes règles d'arrondi. Par exemple, un total de CHF 12,03 est arrondi à CHF 12,05.

### Types de service

Lightspeed Restaurant exige que chaque type de service (livraison, à emporter, sur place) soit défini comme un profil de compte.

Le code ref du type de service est utilisé pour associer la commande HubRise au profil de compte correct dans Lightspeed.

Pour savoir comment vérifier les codes ref des types de service disponibles dans votre back-office Lightspeed, consultez [Associer les codes ref](/apps/lightspeed-restaurant/map-ref-codes#service-types).

### Informations client

Lightspeed Restaurant Bridge envoie à Lightspeed les informations complètes sur le client, si elles sont disponibles, y compris le nom, l'e-mail et l'adresse de livraison.

Si ces informations ne sont pas disponibles, Lightspeed Restaurant Bridge crée un client anonyme portant le prénom `Anonymous`.

## Modifications de commande {#order-modifications}

Les commandes créées dans HubRise sont synchronisées dans les deux sens. Lorsque la commande est modifiée dans HubRise, Lightspeed Restaurant Bridge envoie à Lightspeed les nouveaux articles et paiements, mais n'envoie pas les modifications des articles ou paiements existants. Lorsqu'une commande créée dans HubRise est modifiée dans Lightspeed, Lightspeed Restaurant Bridge envoie à HubRise les modifications des articles et des paiements.

Les commandes créées dans Lightspeed peuvent être importées dans HubRise uniquement lorsqu'elles sont clôturées. Les modifications apportées à ces commandes ne sont pas envoyées à HubRise. Pour plus d'informations, voir [Importer les commandes](/apps/lightspeed-restaurant/pull-orders).

## Commandes sur place

Les commandes sur place dans Lightspeed correspondent aux commandes avec un type de service `eat_in` dans HubRise. Lorsqu'un nom de table est associé à une commande sur place, le traitement diffère légèrement. Voici les cas de figure :

- Lorsqu'une commande sur place est créée, le bridge vérifie si la table est déjà ouverte dans Lightspeed. Si c'est le cas, le bridge ajoute les articles et paiements de la note à la commande HubRise.
- Si la table est ouverte, mais qu'une autre commande HubRise est déjà associée à cette table, le bridge marque la nouvelle commande HubRise comme `rejected`.

Voici quelques scénarios d'utilisation des commandes sur place :

- **Solution de réservation** : Lors de l'arrivée du client, la solution de réservation crée une commande sur place vide dans HubRise avec le nom de la table. Lors de la prise de commande et du paiement, la solution de réservation est informée du détail des articles et du paiement.
- **Application de commande à table** : Dès que le client commande des articles, l'application crée une commande sur place dans HubRise. Cette commande peut ensuite être complétée par d'autres articles, soit depuis l'application, soit directement dans Lightspeed (par exemple si un serveur ajoute des articles). À la fin du repas, la commande peut être payée indifféremment depuis l'application ou sur Lightspeed, en un ou plusieurs paiements.
- **Solution de paiement à table** : Lorsque le client souhaite payer, l'application crée une commande sur place vide dans HubRise avec le nom de la table. Le bridge récupère alors la note ouverte pour cette table et ajoute les articles dans HubRise. L'application est notifiée de la mise à jour et affiche les articles et le montant au client. Lors du paiement, l'application envoie le paiement à HubRise, qui clôture l'addition dans Lightspeed.
