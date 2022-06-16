---
description: Connecting MongoDB and UI Bakery
---

# MongoDB

UI Bakery allows you to easily connect to a MongoDB database with no need for additional layers (APIs or 3rd-party services).

### P**rerequisites**

If your database is hosted behind the Firewall, add the following IP addresses to the Firewall [whitelist](https://docs.uibakery.io/data-sources/data-sources#whitelisting-ips):

```
23.99.134.30
40.122.170.142
104.43.136.75
104.43.140.0
23.99.128.183
```

### **Configuration**

Go to the **Data sources** page – Connect – Choose **MongoDB.** Enter your connection string and click **Test connection**.

![Adding MongoDB as a datasource](<../../.gitbook/assets/Screenshot 2022-04-25 at 18.58.40.png>)

When the connection is successful, click **Connect Data source**. UI Bakery will extract the database structure and store column types. This data will be used to suggest the proper[ table columns and form field types](https://docs.uibakery.io/basics/field-types-and-types-recognition).

### Usage

Once you have the connection between UI Bakery and MongoDB, you can interact with its data.&#x20;

1.  [Create an action](https://docs.uibakery.io/basics/working-with-actions#creating-an-action) using one of the following types

    * Load Table
    * Load Row
    * Create Row
    * Update Row
    * Delete Row


2. Click **Run Action,** then the **Results** tab to verify the results.
3. To transform or map your data please see: [Transforming any previous step result](https://docs.uibakery.io/basics/mapping-and-transforming-data#transforming-any-previous-step-result)
4. To use your connection and new Action step please see: [Connecting to data](https://docs.uibakery.io/basics/mapping-and-transforming-data#transforming-any-previous-step-result)
