---
description: Add data visualisation components to your dashboard
---

# IV. Adding visualization components

It would be useful to add some metrical components to the dashboard for data visibility and analysis. UI Bakery offers several components for this purpose.&#x20;

### Chart component

We will start with adding a chart to display projects by their category. To do that, find a **Chart** component in the list and place it onto the canvas. Select the _**Type**_ for the Chart, in our case, it’s a pie chart.

Now, let’s bring some data on the chart by assigning the Action on the Data option field - `{{actions.loadDesignProjects.data}}`. &#x20;

On the _**Series**_ tab, you can configure the way your data will be grouped. In our case, we add a grouping by project categories. By default, you have a chart legend, which you can either hide or customize its position using the controls on the _**Appearance**_ tab

![Customizing a Pie Chart](<../../.gitbook/assets/Screenshot 2021-10-11 at 13.54.09.png>)

### Metric component

Say you also need to monitor the workload of your project leads. Let’s add a **Metric** component to monitor the number of projects per project lead.&#x20;

1. Find a Metric component and drag it to the canvas. Add a title to the metric.&#x20;
2. The next step is to configure the Metric fields. We will use project count value grouped by project lead value. Once done, you will see all project leads listed in the dropdown, and their corresponding project counts.

![Configuring Metric component](../../.gitbook/assets/metricOpt.gif)

Let’s also add a metric that will show the number of currently active projects:

1. Place a **Metric** component onto the canvas.&#x20;
2. Rename it and follow by configuring the Metric fields. We would like to see the number of active projects, so we will use the Name field as a basis. Additional fields are not necessary.
3. In the Group by field, select _Complete_ field and Group by Value option. Because Complete field is configured as a Boolean field type, it only recognizes the active projects (value set to ‘true’), that’s why it can be hidden from the component, as we already know only active projects are filtered there.

![Configuring Current Active Projects Metric](<../../.gitbook/assets/Screenshot 2021-10-11 at 15.09.14.png>)

Finally, remember that we haven’t included the Project Due Date in the Table? Let’s add a metric that will show the Project due date separately.&#x20;

1. Add a **Metric** component to the Builder. Add a Metric field, which is Due Date. Use _**Show Last**_ in the dropdown options to show the date inside the metric.&#x20;
2. An additional field is not required here, so it can be skipped.&#x20;
3. In the _**Group By**_ tab, specify the Name field and use the Group by Value option.
4. It would also be handy to see the Due Date of a selected project from the Table. To configure that, modify the Data field to `{{ui.designProjectsTable.selectedRow.data}}` - this will display the data of a selected record.

![Configuring Project Due Date metric](<../../.gitbook/assets/Screenshot 2021-10-11 at 15.32.48.png>)

You have used metric components for data visualization. In the next part, you will add your data and send it to the data source and will also add navigation to your application.
