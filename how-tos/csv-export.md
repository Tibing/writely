# CSV export

### Exporting a generated file based on the Table data

To create a Table export, you need 2 Components in UI Bakery:

1. `{{ ui.myTable.value}}` or `{{ ui.myTable.filteredValue }}` variable if you need to export a filtered Table list.
2. The **Generate File** action step.

Start with adding a Table. Fill it with data: you may [load it from an API or a database](../starter-guide/read-and-write-data/load-and-display-data.md). Then, create an Action and [assign it to a Button](../basics/working-with-actions/#triggering-action-based-on-events).

Configure the first step in the Action using _Generate file_:&#x20;

![Using the Generate file action step](<../.gitbook/assets/Screenshot 2021-12-15 at 13.12.48.png>)

The most essential step here is to reference a variable inside the **Generate form** field.

You may also want to change the name of the generated file. By default, this step will bring a **Save file** dialog, or save the file to the _Downloads_ folder depending on the user's operating system.

The generated file content will be returned by this step into the next step and will be available as a `{{data}}` variable. If you need to use it in some other way, send it to an API or save it in a Database using an HTTP or Update / Create Row steps.

### Generating a file based on HTTP / Load Table requests

Similarly to generating a file based on Table data, you can do the same based on an API call result.

1. [Create a Load Table or HTTP Request action. Configure it.](../basics/working-with-actions/#creating-an-action)
2. Add the second **Generate File** step and reference the result of the previous call as a `{{data}}` variable inside the _Generate from_ field:

![HTTP + Generate file](<../.gitbook/assets/Screenshot 2021-12-15 at 13.13.49.png>)
