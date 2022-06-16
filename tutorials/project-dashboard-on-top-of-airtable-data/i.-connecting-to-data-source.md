---
description: Connect your Airtable account to UI Bakery
---

# I. Connecting to Data Source

The first major step in building your application is [connecting it to your data source](https://docs.uibakery.io/starter-guide/connect-a-data-source).

* go to **Data Sources** - **Connect** - select Airtable from the list&#x20;
* give your Data Source a meaningful name (this is a useful practice, especially in case of multiple data sources in the application)
* specify the **Airtable API key** and **Base ID**\*
* define the name of the Airtable table that you want to use in UI Bakery

{% hint style="warning" %}
Note! A table must have at least one row for UI Bakery to recognize its fields
{% endhint %}

* to make sure the connection could be established, click **Test Connection**. After a successful test, click **Connect Datasource**

Great job! 😉 Next, we are going to add data and start to customize the interface of our future dashboard by adding and modifying the UI components

### \*How to find Airtable credentials?

* navigate your [Airtable account](https://airtable.com)
* open your account’s **Settings** - **Overview** - copy your **API key** there

![Copying Airtable API key](https://lh5.googleusercontent.com/-43Em\_XsY3mbT1El-KhP3CLNLX9JjwlSlT147\_VjCMHl8ekIkXW5iJI2zgowop8MCbITmEHDUQpz4jXhq7p9o1hegcAWEts3EmmbUGTSE9Kf1qWtUg\_-TzOWqzMt4GlE-18KWbTB=s0)

* to get your **Base ID**, click on the help button near the top-right of your screen in the [Airtable account](https://airtable.com). This will open a menu where you will see the "<> API documentation" option. After clicking the button, you will be brought to the API documentation page that will dynamically surface which base you are working in currently. Both the base name and Base ID will appear. Check out Airtable’s [documentation](https://support.airtable.com/hc/en-us/articles/4405741487383-Understanding-Airtable-IDs) for more details

![Finding Airtable base ID](https://lh3.googleusercontent.com/aDsbAVmSJvB5g8WJkdtcTe4HRbEuLGp15Gm29UvAQEuhPysQCd4o1DHKrycgtuqaRve6NYraviZ9hNVK4mwAv3i46NI9cAmMzWHmj13ldCZqHi6N5Jysv491gb0OuSmXfUHzR5ku=s0)

