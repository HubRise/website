---
title: Envoyer les commandes
path_override: envoyer-commandes
position: 5
layout: documentation
meta:
  title: Envoyer les commandes | Carré POS | HubRise
  description: Envoyer les commandes Carré POS vers HubRise. Connectez vos apps et synchronisez vos données.
---

Carré POS peut envoyer les commandes vers HubRise. Cette fonctionnalité doit être activée dans les réglages de Carré POS.

## Activer l'envoi des commandes vers HubRise

Pour activer l'envoi des commandes vers HubRise, suivez ces étapes :

1. Ouvrez Carré POS.
1. Cliquez sur **ACCUEIL**.
1. Choisissez l'utilisateur **ADMIN** ou un utilisateur ayant les droits d'administration.
1. Sélectionnez **Paramètres** > **Réglages**, puis ouvrez l'onglet **WEB**.
1. Vérifiez que le réglage **WEB POST - Envoi de données** est sur **OUI**.
   ![Envoyer les commandes - WEB POST - Envoi de données](./images/015-carre-pos-system-settings.png)
1. Cliquez sur **PARAMETRER**, puis sélectionnez l'onglet **CARRE API**, et cliquez sur **PARAMETRER**.
1. Cochez les cases **ACTIVER LES ENVOIS** et **ENVOYER EVENEMENTS COMMANDES**.
   ![Envoyer les commandes - Carré API](./images/016-carre-pos-api.png)
1. Redémarrez Carré POS.

Après le redémarrage de Carré POS, les commandes devraient être transmises à HubRise automatiquement. Effectuez une commande test pour vous assurer que celle-ci est correctement reçue dans HubRise.
