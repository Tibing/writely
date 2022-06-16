---
description: Learn how to link different Components of your application between each other
---

# Link components

### **Linking a Table to a Details component**

**Use Case 1**: let’s say you have a Table, and would like to have a separate form to view the details of a table’s record. That means you need to connect the Table with the **Details** component. Let’s see how this could be achieved. For our example, we will use a Products table and will add an additional Details component to display product details below.

1. Start with [adding a Table and loading data into it](https://docs.uibakery.io/basics/starter-guide/load-and-display-data).
2. Once the data is there, you can add a **Details** component. By default, it is connected to the previous Action, that’s why you’ll see the same fields there as in the Table

However, the Details do not contain any data at the moment. Let’s connect the component with the Table so that we could see the product info on the Details form upon a click on a certain Table’s record

* Click on the **Details** and remove a default Action populated in the Data property field.
* Instead, we need to specify the value of the selected Table row. This can be done by using the variable `selectedRow.data`

![Configuring Details component](../../.gitbook/assets/detailsOpt.gif)

* Populate an object instead of the action into the **Data property** field following the pattern `tableName.selectedRow.data` - in our case, that would be `{{ ui.productsTable.selectedRow.data }}`. Note that you can start typing `selected` - the autocomplete will suggest to you all the available options&#x20;

Check the result - details change as you select different records in the Table. Good job! 😎

### **Linking a Table to a Form component**

**Use Case 2**: you have a Products table and would like to have a separate Form, where you could both see and update the details. For this case, you could use the **Form** component instead of Details. Let’s see how to link a Table with a Form and edit the data directly from the Form.

1. Add a _**Table**_ and [load data into it](https://docs.uibakery.io/basics/starter-guide/load-and-display-data).&#x20;
2. Then, add a Form component. The Form is connected to the selected Action by default, and will already contain it in the Data properties

Let’s make the Form display a value of the selected Table row so that we could modify its value and send it back. Change the Data value to `tableName.selectedRow.data`

The Form now has the same structure as the Table. If you click on the Table row, the row value will appear in the Form

![Configuring Form component](../../.gitbook/assets/formNewopt.gif)

Now, you can proceed to [configuring the Form to update details and send them back to the database](https://docs.uibakery.io/basics/starter-guide/send-data-and-update-records)
