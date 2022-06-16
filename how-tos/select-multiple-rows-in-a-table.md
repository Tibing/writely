---
description: Select several rows in the table at once for batch operations
---

# Select multiple table rows

### Batch update

![](../.gitbook/assets/updOpt.gif)

For a bulk rows update, follow the steps below:

{% hint style="warning" %}
We assume that you already have a table with loaded data&#x20;
{% endhint %}

1. Add a new column to your table and set its field type to boolean. It will be used as a checkbox.
2. Create a new multi-step action. Add **Code** as a first step. Specify the code below that should filter and map the selected rows:

```javascript
return {{ui.yourTable.value}}.filter(item => item.Select).map(item => item.id)
```

3\. Next, add a **Condition** step. Specify the code: `return {{data.length>0}};`

![](<../.gitbook/assets/Screenshot 2022-03-22 at 14.49.43.png>)

4\. For the <mark style="color:green;">**true**</mark> condition, add the next action step as **Update Row**. Configure the action in the following way:

* On the **Configure record fields** tab, specify the parameter that will be updated. For the example, we will update `status` parameter by setting it to `active`.

![](<../.gitbook/assets/Screenshot 2022-03-22 at 15.04.09.png>)

* On the **Configure which record(s) will be updated** tab, specify the identifier for the updated records as `row_number_id` in `{{data}}`.&#x20;

5\. Tick the **Bulk Update** checkbox.

![](<../.gitbook/assets/Screenshot 2022-03-22 at 15.07.04.png>)

6\. Assign an action that loads your data into the table to the _**On Success**_ trigger.

![](../.gitbook/assets/triggernewOpt.gif)

7\. Finally, add a toggle or a button and assign the newly added action that deletes the records to the button _**On Click/ On Change**_ trigger.

![Assigning an action to the On Change trigger](<../.gitbook/assets/Screenshot 2022-03-22 at 10.57.30.png>)

### Batch delete

![](../.gitbook/assets/removeOpt.gif)

To delete several rows at a time, follow these steps:

{% hint style="warning" %}
We assume that you already have a table with loaded data&#x20;
{% endhint %}

1. Add a new column to your table and set its field type to boolean. It will be used as a checkbox.&#x20;
2. Create a new multi-step action. Add **Code** as a first step. Specify the code below that should filter and map the selected rows:

```javascript
return {{ui.yourTable.value}}.filter(item => item.Select).map(item => item.id)
```

3\. Set the next action step as **Condition**. Add the code `return {{data.length>0}};`

![](<../.gitbook/assets/Screenshot 2022-03-14 at 13.06.45.png>)

4\. For the <mark style="color:green;">**true**</mark> condition, add the next action step as **Delete Row**. Configure which records will be deleted, as `row_id` in `{{data}}.`

5\. Tick the **Bulk Delete** checkbox.

![](<../.gitbook/assets/Screenshot 2022-03-11 at 17.41.27.png>)

6\. Assign an action that loads your data into the table to the _**On Success**_ trigger.

![](<../.gitbook/assets/Screenshot 2022-03-22 at 15.54.56.png>)

7\. Finally, add a button and assign the newly added action that deletes the records to the button _**On Click**_ trigger.

![Assigning an action to the On Click trigger](<../.gitbook/assets/deleteOpt (1).gif>)
