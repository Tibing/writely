---
description: Connect MySQL to UI Bakery
---

# I. Connecting to Data Source

Let’s start with connecting your MySQL database to UI Bakery.

* Open **Data sources** page –> **Connect** –> choose MySQL from the list&#x20;
* Give your Data source a meaningful name (this is a useful practice, especially in the case of multiple data sources in the application)&#x20;
* Specify the host, the port, your database credentials, and its name&#x20;
* To make sure the connection could be established, click **Test Connection**. After a successful test, click **Connect Datasource**

{% hint style="info" %}
Note! Make sure to whitelist the below IPs if your database is hosted behind the Firewall

`23.99.134.30`

`40.122.170.142`

`104.43.136.75`

`104.43.140.0`

`23.99.128.183`
{% endhint %}

![Connecting MySQL as a data source](<../../.gitbook/assets/connect mysql.gif>)

Great! Let’s move on to the next step of loading and displaying your data
