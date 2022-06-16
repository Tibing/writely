# Connect a data source

To start building your application, you need to connect a data source to it. Go to the data sources panel in the left sidebar and click **Connect**.

A configuration popup will appear. Enter a data source name – it’s how you’d like to identify it within your app. Add data source configuration: this can be a list of credentials, an API URL, a link to a Google Sheet, and more depending on a particular data source.

{% hint style="success" %}
UI Bakery doesn’t store your data. We only keep the encrypted credentials to access a data source.&#x20;
{% endhint %}

![Connecting a datasource](../../.gitbook/assets/dsOpt.gif)

When done, click **Test connection** to check whether the configuration is correct.

{% hint style="info" %}
For HTTP data source, “Test connection” doesn't really test the connection. It's used to check the URL correctness.
{% endhint %}

Click **Connect data source**. If you connect a database, you’ll see the list of tables. You can uncheck the unnecessary tables, or change their properties and titles. They will be put in Table/Form titles by default when you use them.

![Data source resources](<../../.gitbook/assets/check ds.gif>)

{% hint style="info" %}
No resources will appear in the list for HTTP data sources unless UI Bakery can extract them from the API schema.
{% endhint %}

Now, we can start building the app.
