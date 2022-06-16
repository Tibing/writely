---
description: Connect your Google Sheet doc to UI Bakery
---

# I. Connecting to data source

We will start building by connecting your Google Sheets doc to UI Bakery.

1. Go to Data sources - Connect - select Google Sheets from the list.
2. Specify the data source's name and paste the link to the document.
3. Select **Permissions** type: Read-Write or Read Only. &#x20;
4. Authorize the access by pressing **Connect to Google Sheets**. You’ll be prompted to the Google Authorization page, where you need to allow UI Bakery access to your Google Sheet. <mark style="color:red;">**Please do not miss this step as the connection would not be established without it.**</mark>
5. Once you’ve authorized the access, click **Connect Datasource.**

![Connecting Google Sheets](<../../.gitbook/assets/Screenshot 2022-01-04 at 13.14.47.png>)

{% hint style="info" %}
Make sure that your data in Google Sheet is structured, and each column has a name. This will allow UI Bakery to recognize [types of columns and data](https://docs.uibakery.io/basics/field-types-and-types-recognition) and present them in a correct way.
{% endhint %}

Now, with the connected data source, let's get down to building the application.
