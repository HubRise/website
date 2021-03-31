---
title: How Do I Connect Multiple Instances of the Same App?
position: 130
layout: documentation
meta:
  title: Connecting Multiple Instances of the Same App - HubRise
  description: Step-by-step instructions to connect multiple instances of the same app to a single HubRise location. Feature mainly used to connect food delivery platforms.
---

In some circumstances, you might need to connect multiple instances of the same app to a single HubRise location. For example, you might have multiple stores of a food delivery platform that you want to connect to the same EPOS.

To connect the first instance of the app, see [Connecting a New App](/docs/connections#connecting-a-new-app). If you already connected the app, you do not need to repeat this step again.

To connect the second instance of the app, follow these steps.

1. Log in to HubRise from the [HubRise Login page](https://manager.hubrise.com/login).
1. Click **CONNECTIONS** on the left navigation panel.
1. Select **View available apps**.
1. Select the same app you installed before, then click **Connect**.
1. In the authorisation page, select the correct HubRise location from the dropdown menu.
1. Click on the URL in the navigation bar and include `device_id=2&` after the initial portion of the URL: `https://manager.hubrise.com/oauth2/v1/authorize?`, and before `account_id=`. Then hit the Return key on your keyboard.
   ![Authorisation page with URL including the `device_id=2&` string.](../../images/066-en-autorisation-page-device_id.png)
1. Click **Allow** to connect the app.
1. Follow the instructions on screen to configure the new instance of the app. For more details, click the **View documentation** link for the corresponding app in the [HubRise apps page](https://www.hubrise.com/apps).

If your app is not present on the HubRise apps page but connects to HubRise from its own back office, you can still connect multiple instances. All you need to do is to follow the steps above from 5 onwards when you are redirected to the authorisation page.

---

**IMPORTANT NOTE**: This process can be repeated any number of times by substituting the string `device_id=n&`, with a different value of `n` every time.

---
