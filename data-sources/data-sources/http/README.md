---
description: Connect UI Bakery to any open API source
---

# HTTP

### **Prerequisites**

If your API is hosted behind the Firewall, add the following IP addresses to the Firewall whitelist:

```
23.99.134.30
40.122.170.142
104.43.136.75
104.43.140.0
23.99.128.183
```

### Usage

To interact with the data via API you'll need to use an HTTP Request action step and configure HTTP parameters based on the documentation (all applications providing APIs have related Developers API docs). We support all HTTP methods, Headers, Body, and Query Parameters.&#x20;

For example, you can pass a JSON object in a Body of your request, adding a `Content-Type` header to it:

![Adding a request Body](<../../../.gitbook/assets/Screenshot 2022-04-25 at 17.18.30.png>)

![Adding a request Header](<../../../.gitbook/assets/Screenshot 2022-04-25 at 17.15.45.png>)

You can expand your request by adding additional query parameters to the **Query Params** tab:

![Adding query parameters to request](<../../../.gitbook/assets/Screenshot 2022-04-25 at 17.11.20.png>)

### cURL <a href="#managing-the-datacurl" id="managing-the-datacurl"></a>

UI Bakery allows you to import APIs via cURL

Add an **HTTP request** action step, click **Import CURL**, and paste your cURL command into the field. The system will fill in the configuration automatically. Then **Run Action** and check the **Result** tab

![Working with cURL](https://gblobscdn.gitbook.com/assets%2F-MbfjjBC6Yrs4tXsoRrF%2F-MifgWnXQn-6mObzV\_ig%2F-MiugHEYhGPMc3z-7gML%2FcurlOpt.gif?alt=media\&token=c8a2cb1a-fa4a-483b-951a-44293301ca93)

### Managing the data

#### Loading data

To load the data, [create a new Action](https://docs.uibakery.io/basics/working-with-actions#creating-an-action) with an HTTP API action step, select method (GET), and configure an API URL.

![Creating a Load Data action](<../../../.gitbook/assets/httpOpt (1).gif>)

Click **Run Action**, then check the **Result** tab for the outcome

{% hint style="info" %}
In some cases, data might be returned as an object instead of a collection, so you might want to transform it to display in a table using the below code:

`return {{ data.results }}.map(data => ({ ...data, ...data.properties }));`
{% endhint %}

Find out more about [Data mapping](https://docs.uibakery.io/basics/mapping-and-transforming-data)

After loading the data, you can [add a component to display it](https://app.gitbook.com/@uibakery/s/ui-bakery/\~/drafts/-MhrsMsYqxuHerwPe6fD/basics/working-with-components#connecting-to-data)

You can manage the data using the standard HTTP methods:

* GET to load the data
* POST to add new data
* PATCH to update existing data fields
* PUT to replace existing data
* DELETE to delete existing data

Let’s say you want to edit the records in the table. Add the **Edit** option to the table from the _Appearance\&Style tab_ and add a new action triggered by **On Edit**

Select the **Method** for the action (e.g. PATCH). Include path parameters to the record as part of the URL, and refer to the selected record by using a variable: `{{ui.table.editedRow.data.id }}`

![Adding an Edit Data action](<../../../.gitbook/assets/Screenshot 2022-04-25 at 17.33.16.png>)

Specify the additional request parameters if required by API documentation, then **Run Action** and check the **Result** tab to confirm the data is being updated
