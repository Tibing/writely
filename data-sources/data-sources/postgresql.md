# PostgreSQL

UI Bakery allows you to easily connect to a PostgreSQL database with no need for additional layers like APIs and 3rd-party services.

### Prerequisites

If your database is hosted behind a Firewall, add the following IP addresses to the Firewall [whitelist](https://docs.uibakery.io/data-sources/data-sources#whitelisting-ips):

```
23.99.134.30
40.122.170.142
104.43.136.75
104.43.140.0
23.99.128.183
```

### Configuration

Go to Data sources page –> Connect –> Choose PostgreSQL. Enter your credentials and click **Test connection.**

![How to connect PostgreSQL](<../../.gitbook/assets/Screenshot 2022-04-25 at 15.33.04.png>)

If the connection is successful, click **Connect Data source.** UI Bakery will extract the database structure and store column types. This data will be used to suggest proper [table columns and form field types](../../basics/field-types-and-types-recognition.md).

### Usage

Once you have a connection between UI Bakery and PostgreSQL, you can access its data, load and send it back.

1. Create an Action using one of the following types to access your data:
   * Load Table;
   * Load Row;
   * Create Row;
   * Update Row;
   * Delete Row;
   * SQL Query.
2. Configure it. Select a proper Table, set filters, and other settings or write a SQL query.
3. Run it. Take a look at the **Results** tab to make sure the data is loaded.
4. [Transform or map your data](../../basics/mapping-and-transforming-data.md#transforming-any-previous-step-result).
5. [Add a Component to display it](../../basics/working-with-components.md#connecting-to-data).

![Loading table data](../../.gitbook/assets/postOpt.gif)

### Connecting Postgre via Bit.io

If you are connecting Postgre via bit.io, please take these details into consideration:

\- check out the details that need to be specified when you are connecting via bit.io

![Adding Postgres connection via bit.io](<../../.gitbook/assets/Screenshot 2022-01-03 at 17.39.46.png>)

\- please make sure to specify your repository's name in the field Schemas name. Make sure to click **ADD** to save it - otherwise, it will throw an error.
