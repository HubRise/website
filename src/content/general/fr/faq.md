---
title: F.A.Q
layout: faq
---

import ContactFormToggle from '../../../components/markdown/contact_form_toggle.jsx'

#### Abonnement

##### Puis-je tester gratuitement HubRise ?

Tout à fait. La création d'un compte est gratuite. L'abonnement n'est facturé qu'à partir de 50 commandes par mois.

##### Dois-je entrer mes coordonnées bancaires pour faire un test gratuit ?

Non, vous devez simplement indiquer votre nom et votre email.

##### Quelle est la durée d'engagement ?

Aucune. Vous pouvez arrêter votre abonnement à tout moment.

##### Comment puis-je régler l'abonnement ?

Par carte bancaire uniquement. Une fois votre carte enregistrée, l'abonnement est prélevé tous les mois.

##### J'ai plusieurs magasins, dois-je payer un abonnement par magasin ?

Oui. Notez que des remises sont appliquées à partir du 5ème point de vente. <ContactFormToggle text="Contactez-nous" /> pour en savoir plus.

#### Données

##### Où sont stockées les données ?

Les données sont stockées de manière sécurisée sur des serveurs situés en Union Européenne.

##### HubRise est-il certifié RGPD ?

Tout à fait. HubRise est en conformité avec le Règlement Général sur la Protection des Données.

##### Le volume des données est-il limité par compte ?

En principe non, mais une limite de 10,000 commandes et 10,000 clients par mois est appliquée par défaut. Nous pouvons augmenter cette limite sur demande, si le compte est utilisé de manière légitime.

##### Que deviennent les données si je décide de résilier mon compte HubRise ?

Les données sont conservées pendant 3 mois, puis supprimées définitivement. Nous pouvons les supprimer immédiatement sur demande.

##### Comment HubRise me garantit l'accès à toutes mes données ?

La création et la consultation de vos données sur HubRise se fait par API. Les données stockées sur HubRise sont donc intégralement accessibles aux applications que vous aurez autorisées.

##### Qui a accès à mes données ?

Seules les applications que vous autorisez, de manière explicite et révocable, ont accès à vos données.

##### Puis-je donner accès à mon compte à d'autres utilisateurs ?

Oui, vous pouvez ajouter des utilisateurs au niveau de votre compte, ou au niveau d'un point de vente précis.

#### Développeurs

##### Je souhaite développer une application pour les commerçants, pourquoi utiliser HubRise ?

HubRise vous donne immédiatement accès à l'écosystème des commerçants et restaurateurs : logiciels de caisse, solutions de commande en ligne, services de livraison... Vous pouvez ainsi vous concentrer sur les fonctionnalités innovantes de votre produit.

##### Pouvez-vous m'aider à promouvoir mon application ?

Nous mettrons prochainement en avant les meilleures applications sur notre blog et nos réseaux sociaux.
Si votre application répond à certaines spécifications, elle pourra être publiée sur notre App Store, accessible à nos utilisateurs. <ContactFormToggle text="Contactez-nous" /> pour nous présenter votre projet.

##### HubRise peut-il me rétribuer pour mes applications ?

Non, en revanche vous êtes libre de vendre vos applications à nos utilisateurs, sans condition de notre part.

##### HubRise peut-il proposer des solution concurrentes à la mienne à ses utilisateurs ?

HubRise ne démarche jamais directement ses utilisateurs.
Par ailleurs, HubRise ne recommande jamais officiellement de solution, et respecte une égalité de traitement entre solutions concurrentes.

##### Avez-vous un processus de certification ?

Pas encore, mais nous prévoyons de mettre rapidement en place un processus d'auto-certification, qui sera totalement optionnel et gratuit.

#### Technologie et modèle de données

##### Quelles sont les technologies utilisées par l'API ?

L'API suit les principes du REST et les données sont en format JSON. Tous les échanges se font en HTTPS. L'authentification des applications utilise le protocole OAuth 2.

##### Quelles données peuvent être stockés sur HubRise ?

HubRise stocke les commandes, le fichier clients, les produits, les promotions et l'inventaire.

##### Je souhaite stocker un champ dont je ne trouve pas d'équivalent dans l'API. Comment faire ?

Les _custom fields_ ("champs personnalisés") permettent de stocker des données arbitraires non prévues dans l'API. Exemples : le nom du vendeur sur les commandes, un identifiant interne sur les clients, etc.

##### Comment une application est-elle informée de l'arrivée d'une nouvelle commmande ou de la mise à jour d'une donnée ?

Deux solutions sont à la disposition des applications :<br />
\- interroger notre serveur à intervalle régulier pour récupérer les nouveaux événements (_passive callback_)<br />
\- publier une URL qui sera appellée par notre serveur dès réalisation d'un nouvel événement (_active callback_)

##### J'ai plusieurs points de vente dont certains partagent le même catalogue de produits. Comment faire ?

HubRise permet de créer un nombre illimité de catalogues, et de les affecter individuellement par point de vente : vous pouvez donc les partager entre plusieurs points de vente. Même chose pour vos listes de clients.
