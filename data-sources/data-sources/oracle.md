# Oracle

UI Bakery allows you to easily connect to an Oracle database with no need for additional layers (APIs or 3rd-party services).

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

To connect your Oracle database, follow the below steps:

1. go to **Data sources** page - click **Connect**
2. select **Oracle** from the list of the available data sources
3. Specify your credentials and click **Test connection** to ensure, that UI Bakery can connect to your data source:

![](<../../.gitbook/assets/Screenshot 2022-06-10 at 14.54.39.png>)

4\. When the connection is successful, click **Connect Data source**.

UI Bakery will extract the database structure and store column types. This data will be used to suggest the proper[ table columns and form field types](https://docs.uibakery.io/basics/field-types-and-types-recognition).

### Usage

Once the connection between UI Bakery and Oracle database is established, you can interact with the data.

1. Add a new action - **SQL query**. Specify your query and click **Run action** to launch it.

{% hint style="danger" %}
Note that pre-defined actions, such as Load Table, Create Row, etc. are not supported for Oracle datasource.
{% endhint %}

2\. Check the **Result** tab to make sure the data is loaded.

3\. ​[Transform or map your data](https://docs.uibakery.io/basics/mapping-and-transforming-data#transforming-any-previous-step-result).

4\. ​[Add a Component to display it](https://docs.uibakery.io/basics/working-with-components#connecting-to-data).
