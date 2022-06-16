---
description: Create your own components to customize your data as you wish
---

# Create custom components

In case you need a component that's not present in the Components list in UI Bakery, you can code it yourself using the Custom Component.

### General

When you add a custom component, you can find tips and examples of using and coding the component. To open the tips, click on the question mark near the **Code** field.

![Adding custom component](../../.gitbook/assets/ccOpt.gif)

Let's review how to build custom components on 2 examples: Gantt chart and custom calendar.

### Custom component on Google Charts

[Google Charts](https://developers.google.com/chart/interactive/docs) offer a vast variety of charts, so you can connect the charts library to UI Bakery and code your own chart.

To code your own Google Charts component, start with connecting Google Charts library:

1. Create a new app and open its **Settings** - **Code** tab.
2. From the Google Charts [docs](https://developers.google.com/chart/interactive/docs/basic\_load\_libs#basic-library-loading), copy the charts library script and insert it into the code field:

```javascript
<script src="https://www.gstatic.com/charts/loader.js"></script>
```

![](<../../.gitbook/assets/Screenshot 2021-12-21 at 17.14.30.png>)

3\. Save the changes and proceed to the **Builder**.

Now, let's create a project milestones Gantt chart. We will use the data about each project milestone from the data source and show its timeline and details on a Gantt chart.

![Custom Gantt chart](<../../.gitbook/assets/Screenshot 2021-12-23 at 16.20.28.png>)

1. [Load your data](https://docs.uibakery.io/starter-guide/read-and-write-data/load-and-display-data) and add a Table to display it.

For this example, we are using Google Sheets as a data source. In the table, there are the following columns:

* Task
* Team
* Responsible&#x20;
* Start date
* ETA
* Percent done.

![](<../../.gitbook/assets/Screenshot 2022-01-14 at 12.27.20.png>)

2\. [Create a new Action](https://docs.uibakery.io/basics/working-with-actions#creating-an-action) - **Code** step. This action is to map the data to later use it in the chat configuration:

```javascript
const rawRows = await {{actions.loadPhases.trigger()}};
const msInDay = 24 * 60 * 60 * 1000;
return rawRows.map((row) => [
  // Task ID
  row.row_number_id.toString(),
  // Task name
  row.Task,
  // Task's start date
  new Date(row['Start date']),
  // Task's end date can be omitted (null), if you have duration
  null,
  // Duration in milliseconds. Use null if you have an end date
  row.ETA*msInDay,
  // % of completion
  row['Percent done'] * 100,
  // List dependencies, if necessary. Need to be listed comma-separated, e.g.'Development,NDA'
  null,
]);
```

3\. Find a _**Custom Component**_ and drag it onto the working area.

4\. In the **Data** field of the component, assign the newly created action: `{{actions.mapData.data}}.`

![](<../../.gitbook/assets/Screenshot 2021-12-29 at 11.51.37.png>)

5\. In the component's **Code** field, you'll need to specify the code for the Gantt. We'll take the sample from the [documentation](https://developers.google.com/chart/interactive/docs/gallery/ganttchart#no-dependencies) and then make adjustments according to your data:

```javascript
<html>
<head>
    // Variables initialization, that will be used in a chart
    let isLoaded = false;
    let rows = [];
    let chart;
    let chartData;
  
    // Loading Gantt chart library
    google.charts.load('current', {'packages':['gantt']});
    // Chart initialization only after it's loaded
    google.charts.setOnLoadCallback(() => {
      // Chatt initialization
      chart = new google.visualization.Gantt(document.getElementById('chart_div'));
      chartData = new google.visualization.DataTable();

      // Setting up chart structure
      chartData.addColumn('string', 'Task Id');
      chartData.addColumn('string', 'Task Name');
      chartData.addColumn('date', 'Start Date');
      chartData.addColumn('date', 'End Date');
      chartData.addColumn('number', 'Duration');
      chartData.addColumn('number', 'Percent Complete');
      chartData.addColumn('string', 'Dependencies');

      isLoaded = true;
      drawChart();
    });

    // Callback to process new data in custom component
    UB.onData((data) => {
      rows = data ?? [];
      // The data can be received before the chart is initialiased. 
      // That's why rendering of a chart with new data should be done after chart initialization
      if (isLoaded) {
        drawChart();
      }
    });

    function drawChart() {            
      chartData.addRows(rows);

      const options = {
        height: 600,
        gantt: {
         trackHeight: 30
        }
      };

      chart.draw(chartData, options); 
    }
  </script>
</head>
<body>
  <div id="chart_div"></div>
</body>
</html>
```

Check the component now - you will see a Gantt chart populated. When you hover over a milestone, you will see additional details about it.

### Custom Calendar

In this example, we will create a custom calendar to display the appointments.

![](<../../.gitbook/assets/Screenshot 2021-12-27 at 17.00.58.png>)

1. Start with loading the data: [add an action](https://docs.uibakery.io/basics/working-with-actions#creating-an-action) - **Load Table** with appointments data.
2. Find a _**Custom component**_ and place it onto the working area.
3. In the component's **Data** field, assign the newly created action:`{ events: {{ actions.loadAppointments.data }} }.`

![](<../../.gitbook/assets/Screenshot 2021-12-29 at 13.54.17.png>)

4\. In the **Code** field, type in the below code:

```javascript
<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/fullcalendar@5.10.1/main.min.css"> 
<script src="https://cdn.jsdelivr.net/npm/fullcalendar@5.10.1/main.min.js"></script>

<div class="container">
  <div id="calendar"></div>
</div>

<style>
   body, html {
     height: 100%;
     padding: 0;
     margin: 0;
   }

  .container {
    background: white;
    padding: 2rem;
    height: 100%;
    overflow: hidden;
    border-radius: 0.25rem;
    border: 0.0625rem solid #dde1eb;
    box-shadow: 0 0.5rem 1rem 0 rgb(44 51 73 / 10%);
  }

  .fc-daygrid-event-harness {
    cursor: pointer;
  }
</style>

<script>
  document.addEventListener('DOMContentLoaded', function() {
    var calendarEl = document.getElementById('calendar');
    var calendar = new FullCalendar.Calendar(calendarEl, {
      initialView: 'dayGridMonth',
      eventClick: (info) => {
        // Update UI variable value
        UB.updateValue({ id: info.event.id });
        // Event triggering
        UB.triggerEvent({ id: info.event.id });
      }
    });
    calendar.render();
    
    // Callback to process new data in custom component
    UB.onData(data => {
      calendar.removeAllEvents();

      const events = data && data.events ? data.events : [];
      if (events && events[0]) {
        // In case of new data, the first event is automatically selected
        UB.updateValue({ id: events[0].id });
        UB.triggerEvent({ id: events[0].id });
      }
      events.forEach(event => {
        calendar.addEvent(event);
      });
    });
  });
</script>
```

Your calendar is ready now!
