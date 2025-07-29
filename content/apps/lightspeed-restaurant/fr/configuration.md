---
title: Configuration
path_override: configuration
position: 4
layout: documentation
meta:
  title: Configuration | Lightspeed Restaurant | HubRise
  description: Instructions simples pour configurer Lightspeed Restaurant Bridge afin qu'il fonctionne parfaitement avec Lightspeed et d'autres applications connectées à HubRise. La configuration est simple.
---

La page de configuration vous permet de personnaliser le comportement de Lightspeed Restaurant Bridge selon vos préférences. Elle est divisée en plusieurs sections pour faciliter la navigation.

![Page de configuration de Lightspeed Restaurant Bridge](./images/014-configuration-page.png)

## Langue

Choisissez la langue à utiliser pour les éléments génériques tels que les `Frais de livraison`. Ces noms peuvent apparaître sur les reçus des clients.

## Commandes

Depuis cette section, vous pouvez personnaliser la manière dont Lightspeed Restaurant Bridge gère les commandes.

### Statuts de commande {#order-statuses}

Lightspeed clôture les commandes dès qu'elles sont payées. Par défaut, Lightspeed Restaurant Bridge marque les commandes comme `completed` dans HubRise lorsqu'elles sont clôturées dans Lightspeed.

Si vous utilisez une autre application pour mettre à jour les statuts des commandes dans HubRise, par exemple un système d'affichage cuisine, vous pouvez décocher **Marquer les commandes fermées comme terminées dans HubRise**.

### Envoi des commandes vers Lightspeed

Les commandes sont envoyées à Lightspeed dès qu'elles sont créées dans HubRise.

Si vous souhaitez différer l'envoi des commandes jusqu'à peu avant l'heure de livraison, vous pouvez renseigner le champ **Délai d'affichage**. Si vous le laissez vide, les commandes seront affichées immédiatement dans Lightspeed.

### Récupération des commandes depuis Lightspeed {#pull-orders-from-lightspeed}

Par défaut, Lightspeed Restaurant Bridge ne récupère pas les ventes de Lightspeed dans HubRise.

Pour activer cette fonctionnalité, sélectionnez **Activée pour les ventes en consommation sur place** ou **Activée pour toutes les ventes** dans **Récupération des commandes**.

Lorsque la récupération est activée, un champ supplémentaire **Profils de compte en livraison** apparaît. Utilisez-le pour indiquer les codes des profils de comptes Lightspeed à traiter comme des commandes en livraison. Saisissez un ou plusieurs codes séparés par des virgules (par exemple : `LIVRAISON, UBER_EATS, DELIVEROO`).

## Catalogue

Cette section vous permet de choisir le menu Lightspeed à utiliser lorsque vous souhaitez récupérer votre catalogue sur HubRise. Sélectionnez une valeur dans la liste déroulante.

## Enregistrer la configuration

Pour enregistrer la configuration, cliquez sur **Enregistrer** en haut de la page.

## Réinitialiser la configuration

Si vous devez réinitialiser la configuration, cliquez sur **Réinitialiser la configuration** en bas de la page.

---

**REMARQUE IMPORTANTE :** La réinitialisation de la configuration déconnectera instantanément le bridge de Lightspeed Restaurant.

---

La réinitialisation de la configuration ne supprime pas les journaux d'opérations affichés sur la page principale.
