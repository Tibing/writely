# GraphQL

UI Bakery allows you to easily connect to GraphQL with no need for additional layers like APIs and 3rd-party services.

### Configuration

1. Go to **Datasources** - Connect - **GraphQL**.&#x20;
2. Enter **URL** to your GraphQL server. You can provide HTTP headers and Query Params, it will be sent with every query to the data source, but it can also be overwritten for every specific query in the action configuration.
3. **Authentication** can be done with custom HTTP header or query param. If your server is secured with **Basic Auth,** provide the username and the password in **Basic Auth** settings.

{% hint style="warning" %}
If your server doesn't support GraphQL [introspection](https://graphql.org/learn/introspection/) queries, then uncheck the **Load and save GraphQL schema** checkbox. GraphQL queries will continue to work, but autocomplete suggestion in the query editor will be limited.
{% endhint %}

![GraphQL connection configuration](<../../.gitbook/assets/image (40).png>)

### Usage

1. Create a new action, select **GraphQL query** and choose a data source you want to query.
2. Specify your query. If you need to pass user's data in your query, use GraphQL [variables](https://graphql.org/learn/queries/#variables).

![GraphQL query configuration](<../../.gitbook/assets/image (35).png>)

### Error handling

By default, GraphQL server returns status 200 response even if the query failed. UI Bakery considers a request failed if it contains **errors** in response, errors cab be accessed via **\{{error\}}** action variable. You can also access raw GraphQL response with **\{{res\}}** variable.
