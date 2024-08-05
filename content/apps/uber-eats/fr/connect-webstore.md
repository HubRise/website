---
title: Puis-je connecter ma boutique en ligne personnalisée Uber Eats à HubRise?
path_override: connect-webstore
position: 9
layout: documentation
meta:
  title: Connecter une boutique en ligne personnalisée Uber Eats | FAQs Uber Eats | HubRise
  description: Apprenez comment connecter votre boutique en ligne personnalisée Uber Eats à HubRise, comprenez le concept d'identifiant de boutique partagé, et explorez les limites actuelles de l'API pour la différenciation et la tarification. Restez à jour des futures modifications de l'API Uber Eats
---

**Que sont les boutiques en ligne personalisées Uber Eats?**

Uber Eats **webstores** are own branded storefronts offered by Uber Eats. They are identified by URLs that begin with www.order.store.

On the other hand, Uber Eats **delivery stores** are the more traditional storefronts offered by Uber Eats, identified by URLs that begin with www.ubereats.com.

**Is it possible to connect my Uber Eats webstore to HubRise?**

Yes, it is indeed possible to connect your own branded webstore on Uber Eats to HubRise.

**Will my delivery store and webstore on Uber Eats have the same UUID?**

Yes, your delivery store and your branded webstore on Uber Eats share the same UUID. This id is crucial for establishing the connection to the Uber Eats API.

For instructions on how to find your Uber Eats UUID, see [How Do I Find My Uber Eats UUID?](/apps/uber-eats/faqs/find-uber-eats-uuid)

**Can I receive orders only from the delivery store or the webstore?**

No, as both stores use the same UUID, it's impossible to receive orders from only one. All orders, whether from your delivery store or webstore, will be received.

**What limitations exist when I connect my Uber Eats webstore?**

Due to the current limitations of the Uber Eats API, there are two important things to be aware of:

- The source of the order, whether it is from the webstore or the delivery store, cannot be differentiated.
- Different price lists cannot be uploaded for the webstore and delivery store; the same price list applies to both.

Note that these limitations are subject to change if Uber Eats updates their API in the future. We recommend staying updated on any changes to maximize your HubRise connection.
