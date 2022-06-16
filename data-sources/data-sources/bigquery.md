# BigQuery

UI Bakery allows you to easily connect to a BigQuery data warehouse with no need for additional layers (APIs or 3rd-party services).

### Prerequisites

To establish a connection between UI Bakery and BigQuery, you will need to [create a private key](https://cloud.google.com/docs/authentication/getting-started) upon the connection configuration.

### Configuration

Once you have the key, go to the **Data sources** page –> **Connect** –> Choose BigQuery. Enter your credentials and click **Test connection.**

![Adding BigQuery as a Data source](<../../.gitbook/assets/image (47).png>)

When the connection is successful, click **Connect Data source**. UI Bakery will extract the database structure and store column types. This data will be used to suggest the proper[ table columns and form field types](https://docs.uibakery.io/basics/field-types-and-types-recognition).

### Usage

Once you establish the connection, you can interact with the data.

1. Add a new action - **SQL query**. Specify your query and click **Run action** to launch it.

{% hint style="danger" %}
Note that pre-defined actions, such as Load Table, Create Row, etc. are not supported for BigQuery datasource.
{% endhint %}

2\. Check the **Result** tab to make sure the data is loaded.

![](../../.gitbook/assets/snowOpt.gif)

3\. ​[Transform or map your data](https://docs.uibakery.io/basics/mapping-and-transforming-data#transforming-any-previous-step-result).

4\. ​[Add a Component to display it](https://docs.uibakery.io/basics/working-with-components#connecting-to-data).
