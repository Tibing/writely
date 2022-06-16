---
description: >-
  Add new data and send it to the data source and add navigation to the
  application's pages
---

# V. Adding data and navigating the application

We have already displayed and managed the data with UI Bakery. Now, let’s add new data and create navigation between the pages of your application

First of all, let’s create a new page and rename it to _**New Project**_. &#x20;

Now, we’ll quickly go back to the main page and add a **Button** component, that will be redirecting us to the new page. Once you’ve added the Button to the canvas, you can change its placeholder to _Add project._&#x20;

![Changing button placeholder and setting up navigation](<../../.gitbook/assets/Screenshot 2021-12-09 at 18.13.17.png>)

Then, we will need to add navigation that will be redirecting a user upon a button click. The **Button** component already comes with a predefined redirect functionality, so in order to add a redirect option, go to the URL section of the menu, click the Link to page option, and select the _**New Project**_ page from the dropdown list. Try clicking on the button now - you’ll be redirected to the New Project page. Great!

![Working with the Button component](../../.gitbook/assets/buttonOpt.gif)

We will add a **Form** component to the page and assign the `loadDesignProjects` action to it in order to obtain the necessary structure. Let's do some changes so that it's easier to work with the Form

We have 2 Date fields there, but initially, they are configured as a string. For ease of use, we’ll change their type to _**Date\&Time**_, so that upon a field click, a user will be able to select a certain date from the calendar.

![Changing field type to Date\&Time](<../../.gitbook/assets/Screenshot 2021-10-05 at 18.53.41.png>)

Looks like _**Category**_ and _**Lead**_ fields could also be tuned. These fields can be configured as a dropdown **** so that you don’t need to manually enter the values for them.

&#x20;We’ll start with the _**Category**_ field. To add dropdown values to it, start with changing the type of the field to _**Select/Tag**_. Now, go to the _**Options**_ field and switch to JS mode to enter the code, that will populate all the Category values:

```javascript
function onlyUnique(value, index, self) {
  return self.findIndex(x => x.value === value.value) === index;
}
return {{ actions.loadDesignProjects.data }}.map(item => {
  return {value: item.Category, title: item.Category};
})
.filter(onlyUnique);
```

This code returns only unique values for the Category field returned from the database.

![Adjusting settings for Category column](<../../.gitbook/assets/Screenshot 2021-10-07 at 17.07.42.png>)

The same approach applies to the Lead field. Start with changing the field type to _**Select/Tag**_, then populate the code:

```javascript
function onlyUnique(value, index, self) {
  return self.findIndex(x => x.value === value.value) === index;
}
return {{ actions.loadDesignProjects.data }}.map(item => {
  return {value: item.lead, title: item.lead};
})
.filter(onlyUnique);
```

Lastly, it’s important to add a step that will send the new data to the data source and update the values in the table. To do that, in the _**Main Settings & Structure**_ menu open the _**Triggers**_ tab and add an action for the On Submit trigger.

For the action, select a **Create Row** step, specify the data source and the resource, then configure the values that will be sent back. Since we require all of the values to be saved, refer to the new record fields as `{{ ui.addProjectForm.value}}`. This step allows you to send the data back to the data source. The tiny little bit left is to update the table with a new record. For that, add another action step **Execute action** - we don’t need a new action, we can just use a`loadDesignProjects` action from the list - and that’s it!&#x20;

![Adding a Create Row action](<../../.gitbook/assets/Screenshot 2021-12-09 at 18.16.19.png>)

Good job! 😎 You’ve added navigation between the pages of your application and sent new data to the data source. You are almost done with the dashboard, so let’s move on to the last step.\
