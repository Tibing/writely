---
description: Introduction to UI Bakery data sources
---

# Data sources

Start building your apps by adding your data source. UI Bakery allows connecting your data from a database or with any API:

* databases (MySQL, PostgreSQL, etc.);
* external APIs (Google Sheets, Firebase, etc.);
* internal APIs.

### Connect a data source

1. To connect to your data source, create a new app, navigate the **Data sources** tab and click **Connect**.
2. In the appeared window, select your data source. Specify the access details and click **Test connection** to check, whether the connection could be established.
3. Click **Connect**.

![](<../../.gitbook/assets/Screenshot 2022-01-26 at 13.57.00.png>)

If you prefer not to connect your data source right away, you can try using test MySQL or test HTTP data sources.

![Using test data source](../../.gitbook/assets/testDSOpt.gif)

### Whitelisting IPs

To be able to connect to your data source in the cloud version, you need to whitelist our IPs:

```
23.99.134.30
40.122.170.142
104.43.136.75
104.43.140.0
23.99.128.183
```

The process might be a little different for different databases, below you can find the links to a couple of them:

* [MySQL](https://support.rackspace.com/how-to/mysql-connect-to-your-database-remotely/)
* [PostgreSQL](https://support.rackspace.com/how-to/mysql-connect-to-your-database-remotely/) (with `.conf` files)
* &#x20;[MongoDB](https://docs.atlas.mongodb.com/security/ip-access-list/#whitelist)

### List of available data sources

* [MySQL](https://docs.uibakery.io/mysql)
* [PostgreSQL](https://docs.uibakery.io/postgresql)
* [GraphQL](graphql.md)
* [HTTP](https://docs.uibakery.io/http)
* [Snowflake](snowflake.md)
* [Google Sheets](https://docs.uibakery.io/google-sheets)
* [BigQuery](bigquery.md)
* [Airtable](https://docs.uibakery.io/airtable)
* [HubSpot](hubspot.md)
* [Firebase](firebase/)
* [SQL Server](sql-server.md)
* [MongoDB](mongodb.md)

