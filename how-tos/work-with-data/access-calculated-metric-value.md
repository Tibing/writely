---
description: Check the case of using Metric UI variable in calculations
---

# Access calculated metric value

Metrics are great for calculations. With the help of a Metric component, you can easily calculate a sum or count of any specific values that you need.

![Usage of metrics on the dashboard](<../../.gitbook/assets/Screenshot 2021-11-16 at 18.39.22.png>)

Sometimes you might need to use the value of the Metric in other fields for further calculations. Instead of calculating them again, you can refer to the metric UI variable by referencing it in another field as `{{ui.Metric.value.main}}` or `{{ui.Metric.value.additional}}`, depending on which value you need to use.

Say you have a Metric that displays the amount of logged hours for each employee and their hourly rate. You would also like to have a separate field to display the final salary of each employee.&#x20;

This is how this can be achieved with the help of the Metric UI variable:

1. Add a **Text** field to the working area.
2. Into the Text field of the menu, specify the formula: `{{ ui.contactsMetric.value.main*ui.contactsMetric.value.additional }}`

{% hint style="info" %}
`{{ ui.contactsMetric.value.main}}`is the main field of the Metric and represents the amount of logged hours;

`{{ui.contactsMetric.value.additional }}`is the additional field of the Metric and represents the hourly rate
{% endhint %}

As an outcome, you will get the required amount. You can see how the final amount changes as you move between the employees' records

![Using Metric variables in another Component](<../../.gitbook/assets/metricOpt (1).gif>)

