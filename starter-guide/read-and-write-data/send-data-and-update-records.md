# Send data & update records

Let's try sending data back to the data source.&#x20;

Find a Form component, and drag and drop it to the right of the Table component. The Form is connected to the selected Action by default, and will already contain it in the Data settings.&#x20;

Let’s make the Form display a value of the selected Table row so that we could modify its value and send it back. Change the Data value to `ui.tableName.selectedRow.data.`&#x20;

The Form now has the same structure as the Table. If you click on the Table row, the row value will appear in the Form.&#x20;

![Selected row in the Form](../../.gitbook/assets/formopt.gif)

To send data, we need to bind a new Action to the _“On Submit”_ trigger of the Form. Select the Form, click the _"On Submit”_ green __ trigger __ button, and click **Add new action**. This will create and open a new Action.&#x20;

Now, choose the **Update row** step, select a Data source and resource, and specify the field you want to update and the values for this field. You can also use the HTTP with POST request step to send data to the API.

If you are not using an HTTP request, configure the identifier that will be used for record matching. You can refer to it as:

```javascript
{{ui.formName.value.fieldName}}
```

![Configuring Fields for in Update Action](<../../.gitbook/assets/Screenshot 2022-04-26 at 15.14.36.png>)

We’ll update the selected Table row by 'id'  property and send the form value object as:&#x20;

```
{{ui.formName.value}}
```

![Updating a row](<../../.gitbook/assets/Screenshot 2022-04-26 at 15.17.42.png>)

Since it updates the data in the Data source, we need to reload the Table values, to display the actual information. On the **Triggers** tab, find O_**n Success**_ trigger, and select the action that loads your data.

Click the **Submit** button of the Form. If everything is configured correctly, it will change the Form value, and the Table list will be updated.

If you want to save some time, you can also use a Generator to quickly create standard components:

{% content-ref url="../../basics/generators-for-crud-operations.md" %}
[generators-for-crud-operations.md](../../basics/generators-for-crud-operations.md)
{% endcontent-ref %}
