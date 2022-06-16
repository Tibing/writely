---
description: Load and edit your data and display it in a practical way
---

# II. Working with data and customizing the interface

Let’s get down to building! 🏗 We'll start with loading the data

### Loading the data

Once the data source connection is established, go back to the Builder. First things first, let’s fetch your data from the data source. To load your Airtable data, follow the below steps:

* [Add a new Action](https://docs.uibakery.io/basics/working-with-actions#creating-an-action) - **Load Table**.&#x20;
* Select the data source and the table, then click **Run Action** to launch it.
* If the request is successful, the **Result** tab will be highlighted in green. In case of any errors, the tab will be highlighted in red, and you will be able to troubleshoot right there.

![Loading data from Airtable data source](../../.gitbook/assets/loaddataOpt.gif)

### Displaying the data

Now that the data is loaded, time to [display it](https://docs.uibakery.io/starter-guide/load-and-display-data). Find a **Table** component and place it onto the canvas. The Table will already have the data inside, as the Action is automatically tied to the Component.&#x20;

Let’s do some Table grooming to make it look neater. We will start with column reordering and make the following changes:

* &#x20;A _**Name**_ column looks better on a first position in the list, so select the Name column in the left menu and put it above the Kickoff Date column.
* The _**Due Date**_ column can be hidden from the Table, as later we will add a Component to display the project’s due date separately. To hide any column from the interface, just click on the eye icon near the column title. To unhide the column, click on the eye icon again.

![Managing columns visibility in the Table ](<../../.gitbook/assets/Screenshot 2021-10-05 at 13.18.17.png>)

* For the _**Category**_ column, let’s change the field type to a **Tag** so that different categories are labeled differently in the Table. To do that, click on the Category column in the list and change its field type to _**Select/Tag**_

![The Category field as a String](<../../.gitbook/assets/Screenshot 2021-10-05 at 13.20.56.png>)

![Category field as a Tag](<../../.gitbook/assets/Screenshot 2021-10-14 at 11.32.32.png>)

* The data inside the _**Project Lead**_ and _**Project Team**_ columns is returned as an object, and we would like to see the names of corresponding project leads and project team members in the Table. To display these values, we need to do some data mapping that will search for and display Name values. We will do that with some coding.&#x20;

Add an additional step under the **Load Table** step - **Code**. Insert the mapping code into the _**Setup**_ field. Here's the sample of the code:

```javascript
return {{ data }}.map(item => {
  return {
    ...item,
    lead: item['Project lead'].name,
    team: item['Project team'].map(user => user.name).join(', ')
  };
})
```

![Adding an additional Code step fopr data mapping](<../../.gitbook/assets/Screenshot 2021-10-05 at 14.53.56.png>)

{% hint style="warning" %}
Please note that we have introduced new variables `lead` and `team` vs previous Project Lead and Project Team, which still exist. So, it’s important to change the column settings now to make sure the values are now taken from the Lead and Team variables, and not from the old ones.
{% endhint %}

To do that, open the Column's _**General Settings**_ - _**Field**_ - change it from the Project Team / Project Lead to Team and Lead correspondingly. See the GIF below for more details:

![](../../.gitbook/assets/fieldchangeOpt.gif)

### Editing data

In case you quickly need to make some changes to the project record, let’s add an _**Edit**_ option to the Table. Go to the _**Appearance\&Style**_ menu and check the _**Edit**_ option. You will notice an Edit label appear on each Table row.

![Adding Edit option to the Table](<../../.gitbook/assets/Screenshot 2021-10-05 at 15.41.01.png>)

&#x20;To ensure that the changes made to the records are sent back to the data source and updated, let’s add an Action:

![Update Row Action](<../../.gitbook/assets/Screenshot 2022-02-11 at 16.30.54.png>)

* [Add a new Action](https://docs.uibakery.io/basics/working-with-actions#creating-an-action) and rename it to `updateProject` - select the action step **Update Row.**&#x20;
* Specify how to identify the updated record and how to map the changes:`{{ui.designProjectsTable.editedRow.data}}`. This variable refers to all the record’s values in the Table.
* Next, identify the record that will be updated, e.g. by a record ID by `{{ ui.designProjectsTable.editedRow.prevData['Record Id'] }}`

Once done, we can bind the Update action to the _**Trigger**_ that should actually call for this Action. To do that, open the _**Main settings & structure**_ tab, navigate the Triggers and select the update action in the list for _**On Edit**_ trigger.&#x20;

![](<../../.gitbook/assets/Screenshot 2021-12-09 at 17.00.22.png>)

Now you can update the records and send the updated data back to your Airtable.

### Filtering the data

Let’s add some filtering options to the Table. We will add an option to sort the data by name and by a kickoff date.

To add a name sorting option, let’s first find an **Input** component and put it above the Table. Rename the component so that you can identify them later. For our example, we are using the `selectName` title. Navigate the _**Appearance\&Style**_ tab to add a placeholder for the component - e.g. _Project Name_.&#x20;

![Changing name and placeholder for Input component](<../../.gitbook/assets/Screenshot 2021-10-07 at 18.27.16.png>)

The next step is to add a trigger that would launch an **Action**. For that, follow the steps below:&#x20;

1. Open the _**Main settings & Structure**_ tab, scroll down to the _**Triggers**_ tab and select an action for the _**On Change**_ condition. As a result of the step, we expect to see the records that correspond to a certain filter, thus we don’t need to actually add a new action, we can add the filtering option on top of the existing `loadDesignProjects` action.&#x20;
2. Select the `loadDesignProjects` action from the list, then choose this action in the Actions tab and add a filter by Name. It should look like this: Name like`{{ ui.selectName.value }}`. If you would like to apply strict filtering, select`=`instead of `like` operator.

![Adding a Trigger for the Action](<../../.gitbook/assets/Screenshot 2021-12-09 at 17.09.33.png>)

To add sorting by kickoff date, we’ll use another Component - **Date Picker**. Drag it onto the canvas and change a placeholder on the _**Appearance\&Style**_ tab to "_Enter Kickoff Date"_. In this case, the **Datepicker** component uses the same sorting logic, as the Select component does, that’s why the steps are the same:

* Assign a `loadDesignProjects` action as a trigger
* Add a filter by kickoff date `{{ ui.kickoffDate.value }}`to the action

![Adding Kickoff Date filter](<../../.gitbook/assets/Screenshot 2021-12-09 at 17.07.47.png>)

![](<../../.gitbook/assets/Screenshot 2021-12-09 at 17.07.56.png>)

Well done! Next, we will add the Details component to display more data in a handy way.
