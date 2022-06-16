# Customer Support Dashboard on top of Google Sheets

In this tutorial, we will go through the process of building a simple Customer Support Dashboard on top of Google Sheets.

![](https://files.gitbook.com/v0/b/gitbook-x-prod.appspot.com/o/spaces%2F-MbfjjBC6Yrs4tXsoRrF%2Fuploads%2FxLqUTJWagoO8CIwNYfAd%2FScreenshot%202022-01-04%20at%2015.13.45.png?alt=media\&token=2dedb23a-a7f0-4242-97db-06c0d3a46b43)

**Level**: Beginner 🤓

**What we’ll cover:**

* Connecting Google Sheets to UI Bakery;
* Adding charts and KPI metrics;
* Deploying the application;
* Sharing the application with your teammates.

**What we'll do:**

* Connect your Google Sheets docs to UI Bakery;
* Load Customers data from Google Sheets and display it inside a table and other components;
* Add visualization metrics and charts to calculate the support team's KPIs;
* Link tables to other components;
* Add an option of creating new customers directly in the app and sending the data back to the data source.

We assume that you already have a Google Sheets document with your data and an active UI Bakery account. Also, we’d recommend you to get familiar with [UI Bakery basics](https://docs.uibakery.io/starter-guide/getting-started) prior to starting.&#x20;

{% hint style="danger" %}
Please note that we will build a multi-page application, so it’s vital that you follow the steps successively.
{% endhint %}

### **Introduction** <a href="#introduction" id="introduction"></a>

The preliminary step in building your application is [creating an app](https://docs.uibakery.io/starter-guide/create-a-project). Once logged in to UI Bakery, you are redirected to your dashboard, where all your apps are stored. To start a new app:

* Click **Create a new app.**
* Give it a meaningful name.
* On the templates page, select the blank template.
* You can now proceed to the **Builder**

![Creating a new App](../../.gitbook/assets/createappOpt.gif)
