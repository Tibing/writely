---
description: Pass query parameters and read them from the URL
---

# Read query params from URL

If you need to pass and read query params from the URL, follow these steps.&#x20;

{% hint style="info" %}
**Use case**: you have a Table, and on row select, you need to be transferred to a Details page of a certain record.
{% endhint %}

First of all, create a new page for the Details information. Then, create an action that will be navigating you to that page:

1. [Add a new action](https://docs.uibakery.io/basics/working-with-actions#creating-an-action) - **Navigation**.
2. Specify Page Path as `{{routes.details.url}}`
3. In **Query Params**, add `id` as: `{{ui.customersTable.selectedRow.data.customerNumber}}`

![Setting up Page Path](../.gitbook/assets/navigationOpt.gif)

![Specifying query params](<../.gitbook/assets/Screenshot 2022-01-24 at 14.34.31.png>)

Next, assign the navigation action to the **On Row Select** trigger:

![](../.gitbook/assets/onrowselectOpt.gif)

Now, go to the Details page and add a **Detail** component to it. To display the data of a selected record from the table:

1. &#x20;[Add a new action](https://docs.uibakery.io/basics/working-with-actions#creating-an-action) - **Load Row**.
2. Add a filter to retrieve a row as `Customer Number ={{ activeRoute.queryParams.id}}`
3. Click anywhere on the **Details** component and assign this new action in the _**Data**_ field.

![](../.gitbook/assets/loadrowOpt.gif)

Now, as you select a certain row in the table, you will be sent to the _**Details**_ page.
