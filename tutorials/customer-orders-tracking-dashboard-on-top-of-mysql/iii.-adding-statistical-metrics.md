---
description: Add statistical metrics for a quick and visual data analysis
---

# III. Adding statistical metrics

We’ll add a couple of statistical metrics for additional data visualization. Here's what we're going to obtain:

![](<../../.gitbook/assets/Screenshot 2021-11-03 at 17.32.49.png>)

First, we’ll add a metric that displays the number of _**Customers per Country**_:

1. Find a **Metric** component and put it on the canvas.
2. In the _**Data**_ field, assign the _loadCustomers_ action by referencing it as `{{actions.loadCustomers.data}}`.
3. Rename the Metric into _Customers per Country_.&#x20;
4. Set up the metric fields: Customer name is a leading metric, grouped by the Count. Additional field can be removed. The metric should be grouped by Country’s value.

![Configuring Customers per Country metric](<../../.gitbook/assets/metric2Opr (1).gif>)

As a next metric, we’ll add the one that shows _**Credit Limit by Customer**_.&#x20;

1. Place another **Metric** on canvas and assign _loadCustomers_ action to it by referencing it as `{{actions.loadCustomers.data}}`&#x20;
2. Rename the metric into _Credit Limit by Customer._
3. Next, configure the metric fields: select Сredit Limit, averaged. It should be grouped by customer name value

![Configuring Metric Credit Limit by Customer](<../../.gitbook/assets/metricOpt (2).gif>)

Great! You have added some statistical metrics. Next up, we’ll add a Form to add new Customer records and send them to the data source.
