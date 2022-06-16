---
description: Add new data via a Form component
---

# IV. Adding new data

You already have a table with your data and several metrics, and it's time to bring the option to add the new data. Start with adding a new page for customer addition:

* Click **Add page.**
* Rename the page and assign a parent page if necessary.
* Click **Add**.

![Adding a new page](<../../.gitbook/assets/Screenshot 2022-02-15 at 15.27.03.png>)

You will be redirected to a new blank page. We will add a **Form** component to add new customer information. Here's what we're going to obtain:

![](<../../.gitbook/assets/Screenshot 2022-02-15 at 15.30.11.png>)

1. Drag a **Form** component onto a working area. You can notice how the form has inherited the structure of the table and contains the same fields already.&#x20;
2. Rename the form.&#x20;
3. Configure the fields that you need on the form and adjust their position if necessary. For the example, we have split the fields into 3 columns for a neater look.

As the next step, we will add an action that will create new records and send them back to the data source.

1. [Add new action](https://docs.uibakery.io/basics/working-with-actions#creating-an-action) - **Create Row**. Specify the data source and a table.
2. Configure a new record field as `{{ui.customerForm.value}}`

![](<../../.gitbook/assets/Screenshot 2022-02-15 at 15.53.42.png>)

3\. To send the data to the data source, on the **Triggers** tab, select the _loadCustomers_ action _On Success_ trigger.

4\. Assign the new action to the _**On Submit**_ trigger of the form.

![](../../.gitbook/assets/onsubmitOpt.gif)

Perfect! The only thing left is to add a button to the main application page that will navigate to the form:

1. Go back to the main application page and add a **Button** component.
2. Change the appearance and the text of the button as required.
3. On the **URL** tab, select the page with the Add customer form.

![](../../.gitbook/assets/naviOpt.gif)

Great job! You are now a few clicks away from completing your application. As the last step, you will deploy the application and share it with your colleagues.
