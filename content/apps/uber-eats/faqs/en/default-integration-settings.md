---
title: What Are the Default Integration Settings?
path_override: default-integration-settings
position: 8
layout: documentation
meta:
  title: Default Integration Settings | Uber Eats FAQs | HubRise
  description: Default Uber Eats integration settings (RD-optional, auto-cancel, menu editor access, etc.) and how to change them.
---

When you connect Uber Eats Bridge using one of the first three onboarding methods (oAuth, connection link, or re-use connection), the following integration settings are applied by default:

| Setting                | Purpose                                                                                | Default                              |
| ---------------------- | -------------------------------------------------------------------------------------- | ------------------------------------ |
| **RD-Optional**        | Allows the restaurant to operate without the Uber Eats tablet.                         | **Enabled**                          |
| **Acceptance mode**    | Determines whether orders must be accepted on the tablet before being sent to HubRise. | **Offered-state** (no manual action) |
| **Auto-Cancel**        | Cancels orders that fail to reach the EPOS.                                            | **Disabled**                         |
| **Menu editor access** | Controls access to the menu editor in the Uber Eats back office.                       | **Blocked**                          |

These settings cannot be changed from the HubRise interface. If a different configuration is required, email support@hubrise.com with the store UUID and the requested values.
