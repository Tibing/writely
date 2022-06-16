---
description: Load data and display it inside a Table and Details component
---

# II. Representing data inside different components

Let's start building the app by loading the data about Customers and their support requests first.

### Loading and displaying data

1. [Create a new action](https://docs.uibakery.io/basics/working-with-actions#creating-an-action) - **Load Table**.
2. Select the data source and the table, then click **Run Action** to launch it.
3. If the request is successful, the **Result** tab will be highlighted in green. In case of any errors, the tab will be highlighted in red, and you will be able to troubleshoot right there.

To display the data, find a **Table** component in the list and place it onto the working area.&#x20;

![Loading and displaying data](../../.gitbook/assets/adddataopt.gif)

### Customizing the table

We don't need all the data in the table, as we will add later a Detail component with all the necessary data. That's why we will groom a table and re-structure some columns for a better look. Also, we will add some sorting options for easier navigation in the Table. In the end, here's what we're going to obtain:

![](<../../.gitbook/assets/Screenshot 2022-01-04 at 16.38.46.png>)

#### Hiding columns in the Table

In the table, let's leave just the Name, Pricing Plan, and Support Representative columns. The rest of the columns can be hidden. To hide the odd columns, click somewhere on the Table to open the menu, and click on the eye icon near the column name to hide it:

![Hiding a column in the table](<../../.gitbook/assets/Screenshot 2022-01-04 at 16.29.10.png>)

#### Adding filters to the Table

Time to add some filtering options. We will add built-in filters by a Pricing Plan and a Support Rep.&#x20;

To activate the built-in filter in the table, open the _**Appearance\&Style**_ tab in the right menu and check the option **Show filter**. This will activate the filters for all the columns in the table.

![](<../../.gitbook/assets/Screenshot 2022-01-04 at 17.47.54.png>)

On the _**Main settings\&structure**_ tab, for the columns "First Name" and "Last Name", uncheck the **Show filter** option:

![](<../../.gitbook/assets/Screenshot 2022-01-04 at 17.57.27.png>)

For the "Pricing Plan" field, to ensure the options are populated inside the drop-down, change the field type into **Select/Tag**:

![Changing a field type into Select/Tag](<../../.gitbook/assets/Screenshot 2022-01-04 at 17.43.43.png>)

Now, you have built-in filters for Pricing Plan and Support Representative columns:

![](<../../.gitbook/assets/Screenshot 2022-01-11 at 17.56.30.png>)

#### Adding search option to the table

As a next step, let's add a search/ filter by name option.&#x20;

1. Find an **Input** component and place it above the table.
2. In the _**Label**_ field, add a meaningful placeholder for the input. Additionally, you can add an icon for the field on the _**Appearance\&Style**_ tab.
3. Now, let's configure an action that will filter the table by the Name value specified in the input. We won't need to add a new action, but add a filter to the existing action that loads our data.
4. Open the loadData action and add a filter: `first_name = {{ui.Input.value}}`
5. Next, make sure that the auto-trigger for that action is set to **Run automatically when variables change**. Now, as you insert different names, the table will be filtered accordingly.

![](../../.gitbook/assets/filterOpt.gif)

Next, let's add a **Detail** component to display more information about a certain record.

### Working with a Detail component

To display additional data about a customer, we will add a **Detail** component.

![](<../../.gitbook/assets/Screenshot 2022-01-12 at 17.22.16.png>)

1. Start with finding a **Detail** component and placing it onto the working area near the Table.
2. You will notice, that by default the component is assigned to the action that loads the data, and the structure of the component is already predefined.
3. Change the title of the component and adjust the fields that you would like to see for the Customer.&#x20;
4. Now, let's ensure that the Detail component displays the data about a certain customer selected in the Table. For that, in the _**Data**_ field, specify `{{ui.dataTable.selectedRow.data}}`

![Configuring Detail component](../../.gitbook/assets/selectedRowOpr.gif)

Great job! You have already added the data and displayed it inside a Table and a Detail component for better representation. As a next step, we will play around with some metrics and charts for visual representation.
