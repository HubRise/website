---
title: Requêtes JSON dans HubRise
position: 6
layout: documentation
meta:
  title: Requêtes JSON dans HubRise | Comment lire les logs HubRise
  description: Logs et requêtes JSON typiques dans HubRise.
---

## Mécanismes de communication

HubRise permet de partager facilement des données entre des applications, par échange de requêtes d'API. Ce mécanisme de communication implique toujours une seconde application, qui envoie des données à HubRise ou en reçoit de sa part. Tous les échanges sont enregistrés dans le back-office de HubRise, et les logs complets peuvent être consultés et débogués. Pour savoir comment trouver les logs dans le back-office, consultez l'[aide de HubRise : logs de données](/docs/data/#logs).

Le cycle de vie typique d'un tel échange se décline en trois parties :

- Requête
- Réponse
- Rappel(s)

La requête constitue la première partie d'un échange de données. Elle est toujours envoyée par une application connectée à HubRise. La réponse est la deuxième partie de cet échange, au cours de laquelle HubRise accuse réception ou non de la requête.

Prenons un cas typique, une création d'une commande dans une application connectée à HubRise. Lors de la création de la commande, l'application génère une requête avec les détails de la commande et l'envoie à HubRise . Puis, HubRise accuse réception de la requête en renvoyant une réponse qui reprend ces informations.

Enfin, une requête peut déclencher automatiquement d'autres requêtes auprès de différentes applications. Par exemple, une requête de création de commande peut déclencher l'envoi d'une requête à une solution de fidélisation afin d'obtenir des informations sur le client. Ces requêtes automatiques appelées rappels, ou « callbacks », comportent chacune une requête et une réponse. Les rappels sont toujours envoyés depuis HubRise vers des applications tierces.

![Composantes des requêtes d'API dans HubRise](../images/004-fr-components-api-request.png)

## Logs et requêtes dans HubRise

Dans le back-office de HubRise, chaque sous-section de la partie **DATA** fournit des informations à travers une page de log.

Par exemple, chaque commande incluse sur la page **ORDERS** peut être développée afin de révéler plus d'informations. La section **Logs**, notamment, répertorie toutes les requêtes d'API associées à cette commande.

Pour chaque requête, les informations suivantes s'affichent :

- **DATE** : date et heure de la requête.
- **ORIGIN** : application ayant émis la requête.
- **ENDPOINT** : point de terminaison de la requête.
- **CODE** : code de la réponse.

Chaque ligne peut être développée de manière à faire apparaître les logs de la requête, de la réponse et des éventuels rappels associés.

<video controls title="Example of Request and Callback in HubRise">
  <source src="../images/006-request-callback-example.webm" type="video/webm"/>
</video>

## Exemple de requête HubRise typique

### Point de terminaison

La méthode et l'URL constituent ensemble le point de terminaison de la requête. Bien que ces deux composantes constituent en réalité une seule et même entité et qu'elles apparaissent comme telles dans le back-office de HubRise, nous les analyserons séparément dans les deux sections suivantes.

### Méthode

La méthode HTTP de la requête est l'action qui doit être exécutée avec les données contenues dans la requête. Les méthodes typiques rencontrées dans les requêtes HubRise sont les suivantes.

| Méthode HTTP | Description                                                                                            |
| ------------ | ------------------------------------------------------------------------------------------------------ |
| GET          | Extrait des informations, généralement le contenu d'une commande ou les informations sur un client.    |
| POST         | Crée une nouvelle ressource, généralement une nouvelle commande.                                       |
| PUT          | Remplace entièrement les informations déjà présentes dans le système avec les données de la requête.   |
| PATCH        | Remplace partiellement les informations déjà présentes dans le système avec les données de la requête. |
| DELETE       | Utilisé par exemple pour supprimer des événements de callbacks.                                        |

### URL, domaine et chemin d'accès

L'adresse URL de la requête spécifie l'adresse à laquelle la requête est adressée. Les URL adoptent généralement le format suivant.

```
https://api.hubrise.com/v1/location/orders
```

Elles se composent de deux parties : le domaine et le chemin d'accès.

Le domaine est la première partie de l'URL, dans ce cas :

```
https://api.hubrise.com
```

Elle spécifie l'emplacement du serveur qui traite la requête.

Le chemin d'accès est la seconde partie de l'URL, dans ce cas :

```
/v1/location/orders
```

Conjointement à la méthode HTTP, elle spécifie l'action à exécuter avec les données contenues dans la requête.

### En-têtes

Les en-têtes sont les métadonnées qui accompagnent chaque requête. L'information élémentaire la plus importante pour le débogage est le **jeton d'authentification**, c'est-à-dire le code unique attribué au client par HubRise.

Elle apparaît dans chaque requête sous la clé **X-Access-Token** et est partiellement masquée pour des raisons de sécurité.

![Jeton d'authentification dans une requête HubRise](../images/005-fr-access-token-arrow.png)

### Corps

Le corps de la requête est représenté par le contenu JSON de celle-ci. Pour consulter un exemple de contenu JSON, voir [Exemple pratique](/docs/hubrise-logs/un-exemple-pratique).

Pour plus de détails sur le contenu JSON des requêtes dans HubRise, voir [Modèle de données HubRise](/docs/hubrise-logs/modele-donnees-hubrise).

## Exemple de réponse HubRise typique

### Code

Le code de réponse indique le résultat de la requête. Le code 200 indique une requête ayant abouti, tandis que les autres codes correspondent à divers types d'erreurs. Le tableau suivant présente les erreurs les plus courantes. Pour connaître les stratégies de dépannage possibles en fonction du code, voir [Résolution des problèmes liés aux requêtes](/docs/hubrise-logs/deboguer-requetes).

| Code de réponse | Description                                                                                            |
| --------------- | ------------------------------------------------------------------------------------------------------ |
| 200             | La requête a été reçue avec succès.                                                                    |
| 400             | La requête est invalide.                                                                               |
| 401             | Les informations d'authentification sont manquantes ou non valides.                                    |
| 403             | La requête est correcte, mais le serveur a refusé de la traiter.                                       |
| 404             | L'adresse URL de la requête n'existe pas.                                                              |
| 422             | La requête est formellement correcte et valide, mais le serveur ne parvient pas à traiter son contenu. |
| 429             | Trop de requêtes ont été émises.                                                                       |
| 500             | Une erreur interne s'est produite sur le serveur HubRise.                                              |
