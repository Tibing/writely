# Create a single form to add and update data

If you need to save some space on the working area, instead of creating two separate forms for adding and updating data, you can achieve that with a single form. Here's how to do that:

1. Drag a **Form** component to your working area. To populate the data of a table's selected row, specify `{{ui.employeesTable.selectedRow.data}}` in the form's **Data** field;
2. Add a new multi-step action - **Condition**. In the code field, specify the code:

```javascript
return [null, undefined].includes({{ui.form.value.id}});
```

3\. For a <mark style="color:green;">**True**</mark> condition, add an **Update Row** action

![Update Row action](<../../.gitbook/assets/Screenshot 2022-02-18 at 12.53.38.png>)

4\. For a <mark style="color:red;">**False**</mark> condition, add a **Create Row** action.

![Create Row action](<../../.gitbook/assets/Screenshot 2022-02-18 at 12.53.55.png>)

5\. On the **Triggers** tab, assign the action that loads your data _On Success_ trigger to update the data in the table.

6\. Finally, assign the add/update action to the **On Submit** trigger of the form:

![](<../../.gitbook/assets/Screenshot 2022-02-18 at 14.10.51.png>)
