# VI. Adding visualization metrics

To complete the Customers page, we will add some visualization metrics.

Let’s add a _Pie Chart_ to display the Orders of the Customer grouped by their status:&#x20;

1. Drag a **Chart** onto the canvas&#x20;
2. Change its type to _**Pie chart**_
3. In the _Data_ field, assign the action `{{actions.customerOrders.data}}`&#x20;
4. On the _Series_ tab, specify Status in the X-axis, grouped by Value. For Y-axis, specify orderNumber, grouped by Count.

![Configuring a Pie Chart](<../../.gitbook/assets/Screenshot 2021-10-29 at 19.12.22.png>)

Next, we'll add a _Metric_ showing the total amount of payments made by a Customer.&#x20;

1. Add a **Metric** to the working area.
2. [Add a new Action](https://docs.uibakery.io/basics/working-with-actions#creating-an-action) - **Load Table**. Specify Payments table as a resource for the Action
3. Configure selected record fields as Customer Number `={{ activeRoute.queryParams.id}}`
4. In the Data field, assign the Action `{{ actions.customerPayments.data }}`
5. Set a name to the **Metric** - _Payments, total_
6. Configure the Metric: the main field is Amount, grouped by Sum. An additional field is not required and can be skipped. In the Group by field, set Don't Group.&#x20;
7. Check the Metric  - you can see the sum of all payments made by a selected Customer.

![Configuring the Metric](<../../.gitbook/assets/Screenshot 2021-12-02 at 17.13.58.png>)

Great job so far! 😎 You have created a new page to display all the necessary Customer information and added some visualization components. Your dashboard looks awesome! As the last step, you can share it with your colleagues.
