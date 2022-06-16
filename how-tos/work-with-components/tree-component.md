# Tree component

A tree component has 2 fields for configuration: data and columns.

#### Configuring Tree columns

Columns can be set up directly from the interface or with the JS code. You can get a quick tip about a supported data format for the columns by clicking on the question mark icon near the field.

![](../../.gitbook/assets/treeOpt.gif)

The code format is represented as an array of the following objects:

```javascript
{
    name: string | number,
    id: string | number,
    primaryKey: boolean,
    width: number,
}
```

where:

* `name:` the header of the column;
* `id`: unique column identifier. Will get value from `Data.data` field;
* `primaryKey`: uniquely defines a record in a `Data` field, necessary for a correct row selection;
* `width`: width of a column in px.

#### Configuring Tree data

Data field supports the following format:

```javascript
{
    data: object,
    children: object[],
    childrenCount: number,
    icon: string,	
}
```

where:

* `data`: an object with raw data, should contain the fields that are listed in column's id fields together with their data;
* `children`: an array of objects with the same structure;
* `childrenCount` (optional): a number of children. Will be displayed only if the children array is empty;
* `icon`: the name of the icon, if required. The icon is displayed in the first column only.

You can get a quick tip about a supported data format by clicking on the question mark icon near the field:

![Data format tip](<../../.gitbook/assets/Screenshot 2022-02-22 at 14.30.28.png>)

#### Usage example

Let's check an example of how to use data from the action in a tree component. For the example, we will use two tables: Orders and Order details. In the tree component, we will add the list of the orders, so that each order can be expanded and its details can be shown.

![](<../../.gitbook/assets/Screenshot 2022-02-23 at 17.00.34.png>)

1. Start with loading the data from the Orders and Order details tables.
2. Drag a **Tree** component onto the working area.&#x20;
3. Next, add a new action - **Code**. Below is a code example:

```javascript
const [orders, orderDetails] = await Promise.all([
  {{actions.loadOrders.trigger()}},
  {{actions.loadDetails.trigger()}},
]);

const treeData = orders.map(order => {
  const relatedOrderDetails = orderDetails.filter(item => item.orderNumber === order.orderNumber);
  const treeItem = {
    data: {
      ...order,
      priceEach: relatedOrderDetails.reduce((acc, cur) => {
        return acc + Number(cur.priceEach);
      }, 0).toFixed(2),
      quantityOrdered: relatedOrderDetails.reduce((acc, cur) => {
        return acc + Number(cur.quantityOrdered);
      }, 0).toFixed(2),
    },
    children: relatedOrderDetails.map(item => {
      return {
        data: item,
      }
    }),
    icon: 'car',
  };
  
  return treeItem;
});

return treeData;
```

![](<../../.gitbook/assets/Screenshot 2022-02-23 at 18.59.21.png>)

4\. After that, assign this action to the tree component in the _**Data**_ field.

![](<../../.gitbook/assets/Screenshot 2022-02-23 at 19.02.50.png>)

5\. Finally, adjust the columns in the tree component based on the columns data specified in the code. Make sure to specify the necessary columns as primary key to correctly identify the rows. For the example, we are setting Order Number and Product Code as primary keys.

![Setting up a column](<../../.gitbook/assets/Screenshot 2022-02-25 at 14.34.54.png>)
