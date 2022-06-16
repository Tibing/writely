---
description: Learn how to add API Authentication in UI Bakery
---

# API Authentication

In case your API requires authentication with a certain set of headers or other query params,  you can configure and add your HTTP API as a data source so that you do not need to configure these parameters with every request. Also note that parameters configured in the datasource will be merged with the parameters configured in the specific request

### Datasource **Configuration**

Navigate UI Bakery, select **Data Sources** - Connect - choose **HTTP API**. Enter your details:

**Base URL**: [https://api.example.com](https://api.app.com)

Depending on your authentication schema and if required, provide your API key, then click **Connect Datasource**

![Connecting HTTP API as a data source](<../../../.gitbook/assets/Screenshot 2022-04-25 at 18.19.53.png>)

You can add any standard type of authentication in UI Bakery:

* basic auth
* bearer schema
* API Key authorization

### **Bearer Schema**

In case of a Bearer schema, go to the **Headers** tab, select **Authorization** header, and type in your API Key:

`Authorization: Bearer <API KEY>`

![Bearer schema Authorization](<../../../.gitbook/assets/Screenshot 2022-04-25 at 18.24.39.png>)

### Basic Authentication

To add Basic Authentication, navigate the **Basic Auth** tab, specify your username and insert your API key into the password field

![Adding Basic Authentication](<../../../.gitbook/assets/Screenshot 2022-04-25 at 18.26.07.png>)

### API key authorization via URL

For some authorization types, you need to pass the API key into the URL via **Query Params**, e.g. in [Hubspot](https://docs.uibakery.io/hubspot)

### Usage

Once you have established the connection between UI Bakery and a required application via API, you can further access and [manage the data](https://docs.uibakery.io/http#managing-the-data).\
