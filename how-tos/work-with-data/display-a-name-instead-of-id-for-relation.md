---
description: Learn how to display values from related tables instead of foreign key values
---

# Display name instead of ID for relation

Let's check the case when you need to display a value in the table instead of a foreign key field from a related table.

![Modifying the values from the related table](<../../.gitbook/assets/Screenshot 2021-09-28 at 11.16.24 (1).png>)

### **Prerequisites**

Say we have Customers and Orders tables, and both of them have a Customer Number field. For ease of use, we would like to display Customer Name values in the Orders table instead of their Customer Number, which is a foreign key there.

![](<../../.gitbook/assets/Screenshot 2021-09-28 at 11.24.20.png>)

1. Start with [loading data](https://docs.uibakery.io/starter-guide/load-and-display-data) for Orders: **Action** - [Load Table](https://docs.uibakery.io/basics/working-with-actions#creating-an-action) or HTTP request (based on your data source).
2. &#x20;Add a table to populate your Orders data.

![Loading Orders data and displaying in the Table](<../../.gitbook/assets/Screenshot 2021-09-28 at 11.29.30.png>)

3\. Add another action to [load Customers data](https://docs.uibakery.io/starter-guide/load-and-display-data) from the Customers table.

### Adding a relation between the Tables

Now, in order to display a Customer Name value instead of a Customer Number, which relates to both of the tables, follow the below steps:\
\
1\. In the Orders table, click anywhere on it to open the **Settings**.&#x20;

2\. Find the Customer Number column in the Columns list, and click on it to open the **Main settings** for the Column.

3\. By default, the type of Customer Number field is _Number_. It needs to be changed to _Select/Tag_. For that, click on the Customer Number field in the right menu to open the field's **General Settings**.

4\. Navigate the **Type** field and update it to **Select/Tag.**

![Switching field type](<../../.gitbook/assets/tagOpt (1).gif>)

5\. After that, scroll down to the **Options** field and switch to **JS mode**.&#x20;

![Switching to JS mode](<../../.gitbook/assets/Screenshot 2021-12-14 at 18.18.26.png>)

6\. Populate the code that should do the mapping of the First Name from the Contacts table to the corresponding Customer Number in the Orders table:

```javascript
return {{ actions.loadCustomers.data }}
  .map(customer => {
    return { 
      value: customer.customerNumber,
      title: customer.contactFirstName
    }
  });
```

This code maps the values of certain fields from one table to the corresponding titles from another table.

Check your table - you will now see customer names instead of customer numbers:

![](../../.gitbook/assets/tg2Opt.gif)
