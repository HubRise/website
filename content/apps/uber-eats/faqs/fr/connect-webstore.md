---
title: Puis-je connecter ma boutique Webstore Uber Eats à HubRise?
path_override: connecter-webstore
position: 9
layout: documentation
meta:
  title: Connecter Uber Eats Webstores | FAQs Uber Eats | HubRise
  description: Découvrez comment connecter votre boutique en ligne Uber Eats à HubRise, le concept d'identifiant de boutique partagé, et les limites actuelles de l'API pour la différenciation et la tarification. Restez informé des dernières modifications de l'API Uber Eats.
---

**Que sont les boutiques en ligne Uber Eats Webstores ?**

Les boutiques en ligne Uber Eats **Webstores** sont des boutiques sous marque propre proposées par Uber Eats. Elles sont identifiées par des URL commençant par www.order.store.

Les **boutiques de livraison** sont les boutiques traditionnellement proposées par Uber Eats. Elles sont identifiées par des URL commençant par www.ubereats.com.

**Puis-je connecter ma boutique en ligne Uber Eats à HubRise ?**

Oui, il est possible de connecter votre propre boutique Uber Eats Webstore à HubRise.

**Ma boutique de livraison et ma boutique en ligne Webstore sur Uber Eats auront-elles le même UUID ?**

Oui, votre boutique de livraison et votre boutique en ligne Webstore sur Uber Eats partagent le même UUID. Cet identifiant est crucial pour établir la connexion à l'API Uber Eats.

Pour savoir où trouver votre UUID Uber Eats, consultez [Comment trouver mon UUID Uber Eats ?](/apps/uber-eats/faqs/find-uber-eats-uuid)

**Puis-je recevoir des commandes uniquement de la boutique de livraison ou de la boutique en ligne Webstore ?**

Non. Les deux boutiques utilisant le même UUID, il est impossible de recevoir des commandes de l'une d'entre elles seulement. Toutes les commandes, qu'elles proviennent de votre boutique de livraison ou de votre boutique en ligne Webstore, seront reçues.

**Quelles sont les restrictions une fois ma boutique en ligne Uber Eats Webstore connectée ?**

Au vu des limites actuelles de l'API Uber Eats, il y a deux choses importantes à savoir :

- La source de la commande, qu'il s'agisse de la boutique en ligne Webstore ou de la boutique de livraison, ne peut pas être différenciée.
- Il n'est pas possible d'importer des tarifs différents pour la boutique en ligne Webstore et pour la boutique de livraison. Les mêmes tarifs s'appliquent aux deux.

Notez que ces restrictions peuvent évoluer si Uber Eats met à jour son API. Nous vous recommandons de rester informé de tout changement qui pourrait optimiser votre connexion HubRise.
