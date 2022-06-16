---
description: Check out how to use and connect external JS libraries to UI Bakery
---

# Use external JS libraries

In UI Bakery, you can use either your own or any public JS library. Also, there are pre-built libraries in UI Bakery as well: [moment.js](https://momentjs.com/docs/#/use-it/) and [lodash](https://lodash.com/), that can be used straight away and don't need to be configured additionally.

### Using moment.js

To use moment.js in your app, no need to configure it additionally, as it comes pre-built. Just follow these simple steps:

1. In the Builder mode, [Add a new action](https://docs.uibakery.io/basics/working-with-actions#creating-an-action) with **Code** type and paste the code :

```javascript
return {{ moment().format("dddd, MMMM Do YYYY, h:mm:ss a") }};
```

2\. **Run Action**, then check the **Result** tab - you will see the actual date as an outcome.

![](../.gitbook/assets/momentOpt.gif)

### Using lodash

Here's an example on how to use [lodash library](https://lodash.com/) for the case when you need to filter a table by several keys of the selected row of another table. Since it comes pre-built, no need for additional setup.

[Add an action](https://docs.uibakery.io/basics/working-with-actions#creating-an-action) with **Code** type and paste the sample code:

```javascript
const data = {{ ui.table.selectedRow.data }};
return _.filter(
  {{ actions.list2.data }},
  _.matches({ 'userId': data.id, 'taskType': data.taskType }),
);
```

### Connecting and using 3rd party JS library

Let’s review an external JS library connection and usage on [canvas-confetti library](https://github.com/catdad/canvas-confetti) example. The case is that upon successful form submission the user gets a confetti blast

![](../.gitbook/assets/confettiOpt.gif)

1. Start with copying  **`<script> tag`**&#x20;

```javascript
<script src="https://cdn.jsdelivr.net/npm/canvas-confetti@1.4.0/dist/confetti.browser.min.js"></script>

```

![](<../.gitbook/assets/Screenshot 2022-03-18 at 19.22.26.png>)

2\. **Save the Changes**

3\. Add a new Form to the canvas

4\. Add a new workflow:

* the first step should be **Update Row**
* next step is the **Code** step. Specify the sample [code](https://www.kirilv.com/canvas-confetti/#basic):

```javascript
confetti({
  particleCount: 100,
  spread: 70,
  origin: { y: 0.6 }
});
```

{% hint style="info" %}
Please note that there are several confetti [code options](https://www.kirilv.com/canvas-confetti/) listed on the site, so you can choose any of those that suits you best
{% endhint %}

* the last step would be **Execute Action** - select the step that loads data in the Table

![](<../.gitbook/assets/Screenshot 2021-12-01 at 18.44.10 (1).png>)

5\. Next, go to the _Triggers_ tab of the form and assign the newly created action to the _**On Submit**_ trigger.

6\. Publish the changes and check the submission now 🎉
