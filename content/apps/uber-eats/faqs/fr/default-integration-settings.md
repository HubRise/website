---
title: Paramètres d’intégration par défaut
path_override: default-integration-settings
position: 8
layout: documentation
meta:
  title: Paramètres d’intégration par défaut | FAQ Uber Eats | HubRise
  description: Paramètres d’intégration Uber Eats par défaut (RD-optional, auto-cancel, accès à l’éditeur de menu, etc.) et procédure de modification.
---

Lorsque vous connectez Uber Eats Bridge en utilisant l'une des trois premières méthodes d'intégration (oAuth, lien de connexion ou réutilisation de connexion), les paramètres suivants sont appliqués par défaut :

| Paramètre                     | Fonction                                                                                           | Valeur par défaut                        |
| ----------------------------- | -------------------------------------------------------------------------------------------------- | ---------------------------------------- |
| **RD-Optionnel**              | Permet au restaurant de fonctionner sans tablette Uber Eats.                                       | **Activé**                               |
| **Mode d’acceptation**        | Détermine si les commandes doivent être acceptées sur la tablette avant d’être envoyées à HubRise. | **Offered-state** (sans action manuelle) |
| **Annulation automatique**    | Annule les commandes qui n'ont pas été validées par la caisse dans un délai de 10 minutes.         | **Activée**                              |
| **Accès à l’éditeur de menu** | Contrôle l'accès à l'éditeur de menu dans le back office Uber Eats.                                | **Bloqué**                               |

Ces paramètres ne peuvent pas être modifiés depuis l'interface HubRise. Si vous souhaitez une configuration différente, écrivez-nous à **support@hubrise.com** en précisant le UUID de la boutique et les valeurs souhaitées.
