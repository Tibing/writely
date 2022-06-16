---
description: Add a page with data from different Tables
---

# V. Adding details page related to multiple Tables

In this section, we will add another page that will contain the information about a certain customer - their details and order history. We will add some visualization components as well. Here's the resulting page we're going to have:

![](<../../.gitbook/assets/Screenshot 2021-11-19 at 14.04.26.png>)

First of all, add a new page and rename it into _Customer Details_.

### Adding Navigation to a new page

Go back to the main application page and select the Customers table. The idea is to open the Customer details page upon a click on a certain row. To achieve this follow the below steps:

1. Go to the **Triggers** tab - **On Row Select** trigger
2. Choose **Add New Action** from the dropdown&#x20;
3. [Add new action](https://docs.uibakery.io/basics/working-with-actions#creating-an-action) - **Condition.**&#x20;
4. There, specify the code: `return {{ ui.loadCustomersTable.selectedRow.index}} >= 0;`. This code ensures the system doesn’t automatically send you to the details page, even when no row is selected.&#x20;
5. For the <mark style="color:green;">True</mark> condition, add another action step **Navigation**. Specify **Page Path** as `{{ routes.customerDetails.url }}` and add query params `id {{ ui.loadCustomersTable.selectedRow.data.customerNumber}}`

![Adding Condition](<../../.gitbook/assets/Screenshot 2022-01-20 at 17.25.48.png>)

![Navigation step](<../../.gitbook/assets/Screenshot 2021-10-29 at 17.55.56.png>)

### Customizing the page

For the Customers Info page, we will add a Details component, a Table, and a couple of visualization metrics.

Let’s start with displaying Customer information.&#x20;

1. Add a **Details** component to the working area.
2. To display the data of a selected record from the Customers table, [add a new action](https://docs.uibakery.io/basics/working-with-actions#creating-an-action) - **Load Row**.
3. Configure a filter to retrieve a row as Customer Number =`{{ activeRoute.queryParams.id}}`
4. Click anywhere on the **Details** component and assign this new action in the _**Data**_ field: `{{ actions.loadCustomerInfo.data }}`
5. Now, as you select a certain row in the Customers table, you will be sent to the _**Customer Details**_ page

![Customers Info action configuration](<../../.gitbook/assets/Screenshot 2022-01-20 at 17.27.18.png>)

Nice job!

Next, we will add a Table that will display all Orders records of the selected customer. To achieve that, follow the below steps:&#x20;

1. Start with [adding a new action](https://docs.uibakery.io/basics/working-with-actions#creating-an-action) - **Load Table**.&#x20;
2. Specify the source and resource (Orders) for the action&#x20;
3. To display the data ONLY about a selected customer, add a filter: select Customer Number as an identifier, and set the filter to `={{ activeRoute.queryParams.id}}`
4. Add a new **Table** to display the orders

![Displaying customer's orders](../../.gitbook/assets/ordersOpt.gif)

Try to select any row in the Customers table and see how the data on the Customer Details page changes. Perfect!

Your Customer Details page already looks nice and easy to use, yet we will add some visualization metrics for a complete view 👉
