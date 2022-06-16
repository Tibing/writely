# Load & display data

Create an Action to begin data loading.

Select an appropriate step to load your data. If you work with a database or Google Sheets, select **Load table** or **SQL query**. If you work with an HTTP API, select **HTTP** **request**.

After that, select a Data source, choose the needed table, or enter an API URL path. It will be added to the URL you’ve specified in the HTTP data source settings. Click **Run action**.

![Creating an action](<../../.gitbook/assets/newOpt (2).gif>)

In case of success, you’ll see your data under the Result tab of your Action step. Errors (if any) will appear in the **Logs**.

Now, we can display the data in a Table. Drag-and-drop a Table component from the components panel to the working area.&#x20;

Check the **Data property** of a table. It must have the created action already set.

{% hint style="info" %}
The Table will be preconfigured: it will include all the columns as per the result of your action. The column types will also be configured by default to reduce unnecessary work**.**
{% endhint %}

![Adding a table](../../.gitbook/assets/tableopt.gif)

### Create standard CRUD components with Generator

To save time, you can use a Generator to create standard components with an already predefined structure and actions. See details below:

{% content-ref url="../../basics/generators-for-crud-operations.md" %}
[generators-for-crud-operations.md](../../basics/generators-for-crud-operations.md)
{% endcontent-ref %}
