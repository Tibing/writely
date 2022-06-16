# MySQL

UI Bakery allows you to easily connect to a MySQL database with no need for additional layers (APIs or 3rd-party services).

### Prerequisites

If your database is hosted behind the Firewall, add the following IP addresses to the Firewall [whitelist](https://docs.uibakery.io/data-sources/data-sources#whitelisting-ips):

```
23.99.134.30
40.122.170.142
104.43.136.75
104.43.140.0
23.99.128.183
```

### Configuration

Go to the Data sources page –> Connect –> Choose MySQL. Enter your credentials and click **Test connection.**

![Adding MySQL as a Data source](<../../.gitbook/assets/Screenshot 2022-04-25 at 16.39.28.png>)

If the connection is successful, click **Connect Data source**. UI Bakery will extract the database structure and store column types. This data will be used to suggest the proper [table columns and form field types](../../basics/field-types-and-types-recognition.md).

### Usage

Once you have the connection between UI Bakery and MySQL, you can access its data, i.e. load and send it back.

1. Create an Action using one of the following types to access your data:
   * Load Table;
   * Load Row;
   * Create Row;
   * Update Row;
   * Delete Row;
   * SQL Query.
2. Configure the Action. Select a proper Table, set filters, and other settings or write a SQL query.
3. Run the Action. Take a look at the **Results** tab to make sure the data is loaded.
4. [Transform or map your data](../../basics/mapping-and-transforming-data.md#transforming-any-previous-step-result).
5. [Add a Component to display it](../../basics/working-with-components.md#connecting-to-data).

![Loading table data](../../.gitbook/assets/msqlOpt.gif)
