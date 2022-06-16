---
description: Work with Details component to display data in a more convenient way
---

# III.Working with Details component

Let's add a  **Details** component to display all project’s details there. Find the **Details** component in the right menu and place it near the **Table**. By default, the Component is tied to an Action, so you will see the structure already corresponds to the Table’s structure.&#x20;

To display the data of a certain Table record in the Details component, refer to it as `{{ ui.designProjectsTable.selectedRow.data }}`in the Data field. With that, the Details component will display the values of a selected project record of the Table.

![](<../../.gitbook/assets/Screenshot 2021-10-08 at 12.47.31.png>)

We have already configured the Details component to show the data about a selected project record, but what if we want to display the name of a selected project as a title of the Details component? To do that, go to the _**Title**_ field in the left menu, and specify the code:

```javascript
{{ui.designProjectsTable.selectedRow.isSelected ? ui.designProjectsTable.selectedRow.data['Name'] : 'Not selected' }}
```

![Modyfying the title of the Details component](../../.gitbook/assets/titleOpt.gif)

To recap, we have loaded and displayed data from your Airtable data source. As a next step, we will add some metric components for data visualization.
