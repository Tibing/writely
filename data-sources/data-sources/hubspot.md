# HubSpot

UI Bakery allows you to easily connect to HubStop CRM with no need for additional layers like APIs and 3rd-party services.

{% hint style="info" %}
We will use **HTTP API Datasource** to connect to Hubspot API.
{% endhint %}

### Configuration

* **API Key.**&#x20;

First, we need to obtain an API key to be able to connect to HubSpot. To do that, go to **Settings -> API Key**, click Show or Generate, and then Copy.

![Settings -> API Key -> Copy](<../../.gitbook/assets/CleanShot 2021-07-26 at 18.16.51@2x.png>)

* **Create HTTP API Datasource**

Once you have the key, create an HTTP API Datasource and configure it using the following parameters:

* **Base URL:** [https://api.hubapi.com/](https://api.hubapi.com/)
* **Query Params:**
  * **hapikey:** YOUR\_API\_KEY

![](<../../.gitbook/assets/Screenshot 2022-04-26 at 13.49.05.png>)

Click **Connect Datasource**, now your UI Bakery app has access to your HubSpot data.

### Usage

Once you have the connection between UI Bakery and HubSpot, you can access its data, i.e. load and send it back.

To interact with HubSpot API you'll need to use an **HTTP Request** action step and configure HTTP parameters based on the HubSpot documentation (for instance, at [HubSpot CRM Contacts API page](https://developers.hubspot.com/docs/api/crm/contacts)).

* Create a new Action with an **HTTP API action step**, select the datasource, and configure an API URL:

![](<../../.gitbook/assets/hubspot action.gif>)

* Since HubSpot returns an object instead of a collection, **transform the data** to be able to display inside of a table using the following code:

```javascript
return {{ data.results }}.map(data => ({ ...data, ...data.properties }));
```

![](<../../.gitbook/assets/hubspot transform.gif>)

That's it, now you can display your data and send it back to HubSpot. These additional articles can be useful:

1. [Transform or map your data](../../basics/mapping-and-transforming-data.md#transforming-any-previous-step-result).
2. [Add a Component to display it](../../basics/working-with-components.md#connecting-to-data).
