---
title: FAQ
path_override: faqs
layout: documentation-simple
meta:
  title: FAQ | HubRise
  description:
---

## Abonnement

#### Dois-je entrer mes coordonnées bancaires pour faire un test gratuit ?

Non, vous devez simplement indiquer votre nom et votre e-mail. La facturation ne se mettra en place qu'une fois les premières commandes effectuées.

#### Quelle est la durée d'engagement ?

Aucune. Vous pouvez arrêter votre abonnement à tout moment.

#### Comment puis-je régler l'abonnement ?

Par prélèvement mensuel sur votre carte bancaire. Si vous n'avez pas de carte bancaire, vous pouvez régler par virement avec un engagement minimum de 12 mois.

#### J'ai plusieurs magasins, dois-je payer un abonnement par magasin ?

Oui. Notez que des remises sont possibles pour les chaînes de 6 points de vente ou plus. <ContactFormToggle text="Contactez-nous" /> pour en savoir plus.

## Tarifs spécifiques

#### Chaînes

Pour les chaînes de 6 points de vente ou plus, le tarif de l'abonnement est dégressif, suivant le barème suivant :

- Points de vente 1 à 5 : 35€ HT
- Points de vente 6 à 30 : 30€ HT
- Points de vente 31 et plus : 27€ HT

Par exemple, pour une chaîne de 12 points de vente, l'abonnement sera de 35€ HT pour les 5 premiers points de vente, puis de 30€ HT pour les 7 suivants.

#### Dark Kitchen

Les Dark Kitchens sont des restaurants ayant plusieurs marques virtuelles. Sur HubRise, une Dark Kitchen est un point de vente connecté à plusieurs comptes Uber Eats, Deliveroo, etc.

Les tarifs suivants s'appliquent aux Dark Kitchens :

- **Frais d'installation** : 25€ HT par plateforme et par marque virtuelle. Une remise est possible en regroupant les demandes de connexion, à partir de 5 connexions simultanées.

- **Abonnement mensuel** variable en fonction du nombre de commandes :
  - 0 à 1,500 commandes par mois : 35€ HT (tarif normal)
  - 1,501 à 3,000 commandes par mois : 55€ HT
  - 3,001 à 4,500 commandes par mois : 75€ HT
  - Et ainsi de suite, avec un supplément de 20€ HT par tranche de 1,500 commandes supplémentaires.

## Données

#### Où sont stockées les données ?

Les données sont stockées de manière sécurisée sur des serveurs situés en Union Européenne.

#### HubRise est-il certifié RGPD ?

Tout à fait. HubRise est en conformité avec le Règlement Général sur la Protection des Données.

#### Le volume des données est-il limité par compte ?

En principe non, mais une limite de 10,000 commandes et 10,000 clients par mois est appliquée par défaut. Nous pouvons augmenter cette limite sur demande, si le compte est utilisé de manière légitime.

#### Que deviennent les données si je décide de résilier mon compte HubRise ?

Les données sont conservées pendant 3 mois, puis supprimées définitivement. Nous pouvons les supprimer immédiatement sur demande.

#### Comment HubRise me garantit l'accès à toutes mes données ?

La création et la consultation de vos données sur HubRise se fait par API. Les données stockées sur HubRise sont donc intégralement accessibles aux applications que vous aurez autorisées.

#### Qui a accès à mes données ?

Seuls les utilisateurs et les applications que vous autorisez, de manière explicite et révocable, ont accès à vos données.

#### Puis-je donner accès à mon compte à d'autres utilisateurs ?

Oui, vous pouvez ajouter des utilisateurs au niveau de votre compte, ou au niveau d'un point de vente précis.

## Développeurs

#### Je souhaite développer une application pour les commerçants, pourquoi utiliser HubRise ?

HubRise vous donne immédiatement accès à l'écosystème des commerçants et restaurateurs : logiciels de caisse, solutions de commande en ligne, services de livraison... Vous pouvez ainsi vous concentrer sur les fonctionnalités innovantes de votre produit.

#### Pouvez-vous m'aider à promouvoir mon application ?

Nous mettons en avant les partenaires techniques qui le souhaitent sur notre blog et nos réseaux sociaux.
Si votre application répond à certaines spécifications, elle pourra être publiée sur notre App Store, accessible à nos utilisateurs. <ContactFormToggle text="Contactez-nous" /> pour nous présenter votre projet.

#### HubRise peut-il me rétribuer pour mes applications ?

Non, en revanche vous êtes libre de vendre vos applications à nos utilisateurs, sans condition de notre part.

#### HubRise peut-il proposer des solutions concurrentes à la mienne à ses utilisateurs ?

HubRise ne démarche jamais directement ses utilisateurs.
Par ailleurs, HubRise ne recommande jamais officiellement de solution et respecte une égalité de traitement entre solutions concurrentes.

#### Avez-vous un processus de certification ?

Nous proposons un audit de certification optionnel et gratuit. Pour être référencée dans notre [page Apps](/apps), votre application doit avoir été soumise à cet audit. La mention _Intégration en cours_ n'est supprimée qu'après la connexion du premier utilisateur.

## Technologie et modèle de données

#### Quelles sont les technologies utilisées par l'API ?

L'API suit les principes du REST et les données sont en format JSON. Tous les échanges se font en HTTPS. L'authentification des applications utilise le protocole OAuth 2.0.

#### Quelles sont les données stockées sur HubRise ?

HubRise stocke les commandes, le fichier clients, les produits, les promotions et l'inventaire.

#### Je souhaite stocker un champ dont je ne trouve pas d'équivalent dans l'API. Comment faire ?

Les _custom fields_ ("champs personnalisés") permettent de stocker des données arbitraires non prévues dans l'API. Exemples : le nom du vendeur sur les commandes, un identifiant interne sur les clients, etc.

#### Comment une application est-elle informée de l'arrivée d'une nouvelle commmande ou de la mise à jour d'une donnée ?

Les applications peuvent, au choix :<br />
\- interroger notre serveur à intervalle régulier pour récupérer les nouveaux événements (_passive callback_)<br />
\- publier une URL qui sera appellée par notre serveur dès apparition d'un nouvel événement (_active callback_)

#### J'ai plusieurs points de vente dont certains partagent le même catalogue de produits. Comment faire ?

HubRise permet de créer plusieurs catalogues, et de les affecter individuellement à chaque point de vente ou de les partager entre plusieurs points de vente. Même chose pour vos listes de clients. Les variantes de catalogue permettent d'utiliser un même catalogue sur plusieurs canaux de vente, avec des prix et des disponibilités différents.
