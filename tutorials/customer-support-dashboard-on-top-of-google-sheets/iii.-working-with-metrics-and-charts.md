---
description: Add various data metrics and charts to track your KPIs
---

# III. Working with metrics and charts

KPIs are rather important for a support team, so we will add the following metrics to track the progress:

* a number of customers assigned to each support representative;
* a number of customers on each pricing plan;
* a number of trial customers vs paid customers;
* a number of open tickets per support representative.

![](<../../.gitbook/assets/Screenshot 2022-01-12 at 18.13.23.png>)

#### Metric 1. Number of customers assigned to each support representative

Let's start with adding the first metric that counts the customers assigned to each support rep. Additionally, we'll add a condition, that in case any representative is assigned 15 and more customers, they'll be highlighted in red as a warning mark.

1. Start with adding a metric component above the table.&#x20;
2. By default, the action will already be assigned to the metric, so we'll just need to configure the fields correctly.
3. Set First Name as the _**main field**_, grouped by Count. An _**additional field**_ is not required. **Group by** a support representative, grouped by value.

![](<../../.gitbook/assets/Screenshot 2022-02-14 at 13.27.14.png>)

Next, let's add a condition to warn about the number of customers assigned greater than 15. In order to do that, open the settings of the first name field, change its type to a _Number_, then navigate the **Color** field and specify the code as below:

```javascript
{{ ui.customerMetric.value.main >= 15 ? 'danger' : 'success' }}
```

![](<../../.gitbook/assets/Screenshot 2022-02-14 at 13.48.02.png>)

#### Metric 2. Number of customers on each pricing plan

Add the next metric to the working area and adjust its position and size as desired. Rename the metric into `plansMetric` to be able to distinguish between them later.

Set First Name as the _**main field**_, grouped by Count. An _**additional field**_ is not required. **Group by** a pricing plan, grouped by value.

![](<../../.gitbook/assets/metricOpt (3).gif>)

#### Chart. Tickets in progress per each support representative

Next, we will add a chart that will show the number of in-progress tickets per support representative.

1. Find a chart component and place it near the metrics.
2. Change its type into a pie chart.
3. Set _**X-axis**_ as Support representative, Group by value. _**Y-axis**_ should be configured as Tickets in progress, Count.
4. You can then adjust the appearance of the chart's legend as you wish.

![](<../../.gitbook/assets/Screenshot 2022-02-14 at 17.27.02.png>)

#### Metric 3. Trial vs paid users

Last but not least, we will add a metric that will display the number of paid customers vs free users.

1. Place a metric onto the canvas.&#x20;
2. Set First Name as the _**main field**_, grouped by Count. An _**additional field**_ is not required. **Group by** a trial user field, grouped by value.

![](<../../.gitbook/assets/Screenshot 2022-02-14 at 18.01.02.png>)

Perfect! You have already added a bunch of metrics and charts to visualize your team's KPIs. As a next step, we will add a new page to create new customers.
