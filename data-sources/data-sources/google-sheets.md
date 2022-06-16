---
description: Connecting Google Sheets and UI Bakery
---

# Google Sheets

### **Configuration**

Go to **Datasources** - Connect - **Google Sheets**. Specify the name of the data source and insert the link to your sheet. Select **Permissions** type: Read-Write or Read Only.&#x20;

![Adding Google Sheets as a data source](<../../.gitbook/assets/Screenshot 2022-04-25 at 18.27.31.png>)

Authorize the access by pressing **Connect to Google Sheets**. You’ll be prompted to the Google Authorization page, where you need to allow UI Bakery access to your Google Sheet. :bangbang: Please do not miss this step as the connection would not be established without it.

Once you’ve authorized the access, click **Connect Datasource**

{% hint style="info" %}
Make sure that your data in Google Sheet is structured, and each column has a name. This will allow UI Bakery to recognize [types of columns and data](https://docs.uibakery.io/basics/field-types-and-types-recognition) and present them in a correct way
{% endhint %}

{% hint style="danger" %}
Please note that your file cannot be in xlsx format, as it will not be processed

![](<../../.gitbook/assets/Screenshot 2021-10-12 at 10.51.35.png>)
{% endhint %}

### **Usage**

When the connection with Google Sheets is established, you can start managing your data**.** Create an **Action** using one of the following types to access your data:

* Load Table
* Load Row
* Create Row
* Update Row
* Delete Row

![Adding a Load Table action step](../../.gitbook/assets/gsOpt.gif)

**Run the Action**. Take a look at the **Results** tab to make sure the data is loaded. After that, you might want as well to:

* [Transform or map your data.](https://docs.uibakery.io/basics/mapping-and-transforming-data)
* [Add a Component to display it.](https://docs.uibakery.io/basics/working-with-components#connecting-to-data)****\
  ****
