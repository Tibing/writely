---
description: Connecting SQL Server to UI Bakery
---

# SQL Server

### **Prerequisites**

If your database is hosted behind the Firewall, add the following IP addresses to the Firewall [whitelist](https://docs.uibakery.io/data-sources/data-sources#whitelisting-ips):

```
23.99.134.30
40.122.170.142
104.43.136.75
104.43.140.0
23.99.128.183
```

### **Configuration**

Go to the **Data sources** page –> Connect –> Choose **SQL Server.** Enter your credentials and click Test connection.

![Adding SQL Server as a data source](<../../.gitbook/assets/Screenshot 2022-04-26 at 11.20.35.png>)

When the connection is successful, click **Connect Data source**. UI Bakery will extract the database structure and store column types. This data will be used to suggest the proper[ table columns and form field types](https://docs.uibakery.io/basics/field-types-and-types-recognition).

### Usage

Once you have the connection between UI Bakery and SQL Server, you can interact with its data.&#x20;

1. Add and configure a new Action, e.g. write a SQL query to retrieve the data
2. Run the Action. Take a look at the Result tab to make sure the data is loaded.

![Checking Result tab](../../.gitbook/assets/runactionopt.gif)

&#x20;   3\. ​[Transform or map your data](https://docs.uibakery.io/basics/mapping-and-transforming-data#transforming-any-previous-step-result).\
&#x20;   4\. ​[Add a Component to display it](https://docs.uibakery.io/basics/working-with-components#connecting-to-data).
