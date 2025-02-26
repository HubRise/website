---
title: Permissions
path_override: permissions
position: 12
layout: documentation
meta:
  title: Permissions | HubRise
  description: How to manage HubRise permissions.
---

Permissions control the actions that a User can perform on an Account or Location in HubRise. You can manage user permissions from the **Permissions** section in the **SETTINGS** page.

## Roles and Permissions

HubRise offers flexible permission management. You can assign predefined roles or manually grant specific permissions to a User.

![Permissions](./images/019-permissions.png)

![User Roles](./images/020-2x-roles.png)

### Predefined Roles

HubRise provides predefined roles to simplify permission assignment:

- **Full Administrator**: Access to all features, including user management, connection settings, and invoicing.
- **Technical Partner**: Access to all features except invoicing.
- **Back Office Viewer**: Read-only access to the back office and all applications.
- **Billing Manager**: Limited back office access, including invoice viewing and payment method management.
- **OrderLine Operator**: Restricted access to the OrderLine application.
- **Catalog Manager**: Restricted access to the Catalog Manager application.
- **Custom Role**: Allows manual assignment of specific permissions to a User.

### Available Permissions

Permissions are divided into two categories:

#### Back Office Access (Privileged Access)

- **View Back Office**: Access the dashboard, connections, and data.
- **Manage Connections and Resources**: Create and manage connections, catalogs, and customer lists.
- **Manage Entity**: Manage users, permissions, and locations.
- **Manage Billing**: Access invoices and payment methods.

#### HubRise Applications (Restricted Access)

Access to specific HubRise applications can be granted individually:

- **Use OrderLine**: Allows order reception and updates, modification of opening hours, and product availability.
- **Use Catalog Manager**: Allows viewing and editing of product catalogs.

### Permission Assignment Rules

When assigning permissions to an Account or Location, the following rules apply:

- At least one User must have the **Manage Entity** permission on an Account.
- **Use Catalog Manager** is only available at the Account level.
- Any back office permission grants access to **Use OrderLine** and, if assigned at the Account level, **Use Catalog Manager**.
- **View Back Office** is required for any other back office permission.

## Add a User {#add-user}

Users with the **Manage Entity** permission can add new Users and assign specific permissions. To add a User:

1. Go to **SETTINGS** > **Permissions**.
2. Enter the User’s email address.
   - If the User already exists, their name will appear, and they will be added immediately.
   - Otherwise, they will receive an invitation by email after permissions are selected.
3. Select the permissions to assign.
4. Click **Add User**.

Once registered, the User will have access to HubRise with the assigned permissions.

## Modify a User’s Permissions

1. In **SETTINGS** > **Permissions**, click the pencil icon next to the User, or click directly on their permissions.
2. Select a predefined role or configure a custom role by ticking/unticking the available permissions.
3. Click **Set Permissions**.

---

**IMPORTANT NOTE:** If you remove your own **Manage Entity** permission, you will need another User with this permission to reassign it to you.

---

## Remove a User {#remove-user}

1. In **SETTINGS** > **Permissions**, click the bin icon next to the User.
2. Confirm the removal.

An Account cannot be left without a User with the **Manage Entity** permission. If you need to remove the last User with this permission, first assign it to test@hubrise.com before proceeding.
