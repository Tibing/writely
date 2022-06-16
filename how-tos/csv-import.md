# CSV import

#### Importing a CSV file into a Table

{% hint style="info" %}
Input type file has a special property – **parsedValue**. **** It allows you to access the CSV file content as an array of objects without uploading it to the server or parsing it separately.

Use `{{ui.input.parsedValue}}`.
{% endhint %}

Here're the steps to show a CSV file inside the Table:

1\. Add an **Input** component, set its type to **file**.

2\. Select a CSV file you need to upload.

3\. Add a Table. In the **Data** property, reference `{{ui.input.parsedValue}}` as a source. Click **Generate Structure.**

![Generating table from a CSV structure](../.gitbook/assets/csv1Opt.gif)

You can also modify the Table structure, hide columns, [change column types.](../basics/field-types-and-types-recognition.md#manual-fields-configuration)

Now, you can use this data in your app accessing the Component properties `{{ui.input.parsedValue}}` or `{{ui.table.value}}` or [export them back to CSV](csv-export.md#export-generated-file-based-on-a-table-data).
