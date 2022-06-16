---
description: >-
  Learn how to add in-app and external navigation with pages, menu and query
  params
---

# Add navigation to application

Both in-app and external navigation is supported by UI Bakery. UI Bakery application can contain multiple pages. To create a page, open a menu in the left sidebar and click the **Plus** button:

![Create a page](<../.gitbook/assets/create page.gif>)

### Navigation

There are several options how to perform navigation inside of the application:

* Using **Link** component
* Using **Button** component
* Using **Navigation** action step
* Using **Menu** component

Navigation can be made to an internal application page as well as to an external website. To create a link, simply add a component and configure it to point to an internal or external page:

![Configure link](../.gitbook/assets/navigate.gif)

### **Passing dynamic parameters - button and link case**

In the case of a button or a link, you can use a **Query params** property of a component to pass dynamic parameters to a detail page.

For instance, to display a selected object on a child page with a button click you would need to do the following:

* Configure dynamic parameters as an object:

![Passing query params](<../.gitbook/assets/navigate dynamic params.gif>)

```
{
  id: {{ui.customersTable.selectedRow.data.customerNumber}}
}
```

In this example currently selected user number will be sent as an **id** query parameter to the Customer page.

* Receive a URL query parameter on a child page using `{{ activeRoute.queryParams.id }}` variable:

![Receiving query params](<../.gitbook/assets/receive navigate param.gif>)

That's it, now if you select a row in a master page table and then click the Show Customer button - you will be navigated to a child page with a preloaded customer displayed in the detail component:

![Complete navigation flow](<../.gitbook/assets/complete navigation.gif>)

### **Passing dynamic parameters - Navigation action step**

You can also make navigation as a result to other events like **table row select** or **form submit** with the help **Navigation** action step:

* create a new Action
* choose the **Navigation** step, set the destination page `{{ routes.customer.url }}` and configure query params:

![Navigation step](../.gitbook/assets/navigation.gif)

This can also be useful when creating a redirect after a form submit.
