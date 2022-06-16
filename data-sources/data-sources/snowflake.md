---
description: Connecting Snowflake database to UI Bakery
---

# Snowflake

### **Prerequisites**

If your database is hosted behind the Firewall, add the following IP addresses to the Firewall [whitelist](https://docs.uibakery.io/data-sources/data-sources#whitelisting-ips):

```
23.99.134.30
40.122.170.142
104.43.136.75
104.43.140.0
23.99.128.183
```

### Configuration

To connect your Snowflake database, follow the below steps:

1. Go to the **Data sources** - **Connect.**
2. Select **Snowflake** from the list of the available sources.
3. &#x20;Specify your credentials and click **Test connection:**

![](<../../.gitbook/assets/Screenshot 2022-04-29 at 16.34.19.png>)

{% hint style="warning" %}
Make sure to specify the Role that has access to the required resource
{% endhint %}

4\. When the test connection is successful, click **Connect Datasource.**

### Usage

Once you establish the connection, you can interact with the data.

1. Add a new action - **SQL query**. Specify your query and click **Run action** to launch it.

{% hint style="danger" %}
Note that pre-defined actions, such as Load Table, Create Row, etc. are not supported for Snowflake datasource.
{% endhint %}

2\. Check the **Result** tab to make sure the data is loaded.

![](../../.gitbook/assets/snowOpt.gif)

3\. ​[Transform or map your data](https://docs.uibakery.io/basics/mapping-and-transforming-data#transforming-any-previous-step-result).

4\. ​[Add a Component to display it](https://docs.uibakery.io/basics/working-with-components#connecting-to-data).
