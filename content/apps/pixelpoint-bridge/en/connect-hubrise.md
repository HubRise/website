---
title: Connect to HubRise
position: 2
layout: documentation
meta:
  title: Connect to HubRise | PixelPoint Bridge | HubRise
  description: Instructions on connecting PixelPoint Bridge with HubRise for your EPOS to work with other apps as a cohesive whole. Connect apps and synchronise your data.
---

Before connecting PixelPoint to HubRise, contact your local PAR PixelPoint reseller, and ask them to:

1. Install and configure PixelPoint's EOI (External Order Interface).

1. Provide an API token. This should be a 16-character string, containing digits and capital letters.

Once you have installed PixelPoint's EOI and with your API token in hand, you can connect PixelPoint to your HubRise location:

1. Open your HubRise back office, click the down arrow <InlineImage width="28" height="21">![Down arrow icon](../images/007-arrow.jpg)</InlineImage> next to **Location** to select the location you want to connect. For help, check the HubRise User Guide > [Accounts](/docs/account) and [Locations](/docs/locations).

1. Select **CONNECTIONS** > **View available apps**.
1. Select **PixelPoint Bridge** from the list of apps.

1. Click **Connect**.
1. Allow PixelPoint permission to access your location registered in HubRise. For accounts with multiple locations, expand the **Choose location** section to select the correct one and click on **Allow**. If you have multiple customer lists, you will also be prompted to confirm the one you wish to use.

1. You will be redirected to the PixelPoint Bridge user interface. The first time you connect, the **Configuration** page will appear:

   - In the **API token** field, enter your unique API token prefixed by `YT6eR2-`, which is the HubRise vendor identifier.
     For example, if your API token is `CEED65AD33823A5B`, you should enter `YT6eR2-CEED65AD33823A5B` in the field.
   - Leave **Debug mode** unselected.
   - Click **Save**.

1. You have now connected PixelPoint to your HubRise location.

---

**IMPORTANT NOTE:** PixelPoint Bridge does not check the validity of the API token. Make sure to include the HubRise vendor identifier before submitting the form. If you have entered an incorrect token, [reset the configuration](/apps/pixelpoint-bridge/configuration#resetting-the-configuration) and try again.

---
