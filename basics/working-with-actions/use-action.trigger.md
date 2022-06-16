# Use action.trigger ()

Sometimes, you will need to handle the result of another action or execute some actions in bulk. In these cases, you can use `action.trigger()`, which returns [Promise](https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global\_Objects/Promise) and allows you to reuse the result of other actions.

Let’s check a couple of cases, where `action.trigger` comes in handy.

### Bulk actions

#### Getting data for a certain record

Let’s review the case when you need to combine the data from several tables about a certain record. For the example, we will use MySQL data source and two tables: Orders and Orders details. Follow the steps below:

1. [Add a new action](https://docs.uibakery.io/basics/working-with-actions#creating-an-action) - **Load Table**. Select _Order Details_ table as a resource. Make sure the action is titled as _loadOrderDetails._
2. Configure selected record field as `Order Number ={{data}}.`

![](<../../.gitbook/assets/Screenshot 2021-11-30 at 17.32.05.png>)

3\. Next up, add another action - **Load Row**. Select _Orders_ table as a resource. Make sure the action is titled as _loadOrder._

4\. Configure selected record field as `Order Number ={{data}}`.

5\. Now, to combine the data from both the actions, add a new action - **Code**. Rename it to _loadDetails_ and specify the code:

```javascript
const orderId = {{data}};

const [orderData, orderDetails] = await Promise.all([{{ actions.loadOrder.trigger(orderId) }}, {{ actions.loadOrderDetails.trigger(orderId) }}]);

return {
	...orderData,
  	details: orderDetails,
  	detailsNames: orderDetails.map(item => item.productCode),
  	detailsAmount: orderDetails ? orderDetails.length : 0,
};
```

![](<../../.gitbook/assets/Screenshot 2021-11-30 at 16.56.00.png>)

To display the obtained data, find a **Details** component and drag it onto the canvas. Assign the _loadDetails_ action to the **Details** component.

{% hint style="info" %}
Please note that you'll need to unhide the details Amount and detail Names fields to make them visible, as well as change detail Names field's view type to Multiselect/Tag for a better representation.
{% endhint %}

![](../../.gitbook/assets/trigger1Opt.gif)

#### Getting data for all records

In case you need to see the combined data for all the records in the Table, follow these steps:

1. Add a new action _loadOrderDetails_ -  **Load Table**. Select _Order Details_ table as a resource.&#x20;
2. Configure selected record field as `Order Number ={{data}}`
3. Add a new Workflow: load _Orders_ table as a first step. For testing purposes, we recommend setting the limit to 10 records.
4. Add a **Code** step with the below code as a second step:

```javascript
async function applyDetailsToOrder(order) {
    const orderDetails = await {{ actions.loadOrderDetails.trigger(order.orderNumber) }};
    return {
        ...order,
        details: orderDetails,
        detailsNames: orderDetails.map(item => item.productCode),
        detailsAmount: orderDetails ? orderDetails.length : 0,
    };
}

const result = {{ data }}.map(item => applyDetailsToOrder(item));
return Promise.all(result);
```

![](<../../.gitbook/assets/Screenshot 2021-11-30 at 17.34.28 1.png>)

After that, add a **Table** and assign the _applyDetailsToOrder_ action to it to retrieve the data.&#x20;

{% hint style="info" %}
Please note that you'll need to unhide the details Amount and detail Names fields to make them visible, as well as change detail Names field's view type to Multiselect/Tag for a better representation.
{% endhint %}

### Getting certain items from the Table

Say you have a table with lots of records, but just need to display certain items. Let’s check how this can be done on an example of an HTTP API data source.

1. [Add a new action](https://docs.uibakery.io/basics/working-with-actions#creating-an-action) _getUser_ - **HTTP request**. Select the data source, set `GET` method, specify the URL as `{{data}}`
2. Add the next action _getUsers_ - **Code**. Specify the below code:

```javascript
const usersToGet = [1, 10, 2, 5, 9];
const result = [];
for (const id of usersToGet) {
    const user = await {{ actions.getUser.trigger(id) }};
    result.push(user);
}
return result;
```

![](<../../.gitbook/assets/Screenshot 2021-11-30 at 15.51.24.png>)

As the last step, add a table to display the obtained data.

![](../../.gitbook/assets/httpOpt.gif)
