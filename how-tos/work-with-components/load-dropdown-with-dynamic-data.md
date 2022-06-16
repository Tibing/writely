---
description: Learn how to load the dropdown data dynamically
---

# Load dropdown with dynamic data

When working with a Select component in Tables,  you might not want to hardcode all of the dropdown values, so let’s check out how to populate the values dynamically with some JavaScript.

{% hint style="info" %}
We suppose that by this time you have already [connected your app to the data source](https://docs.uibakery.io/starter-guide/connect-a-data-source)
{% endhint %}

1. Start with [adding a Table and loading its data](https://docs.uibakery.io/starter-guide/load-and-display-data).
2. Add a **Select** component.
3. Go to the Component’s **Main settings and structure tab** - **Options.**
4. Switch to **JS Mode** and populate the exemplary code that should return the unique values that you need to see in the dropdown **** (we are using Country values as an example)

```javascript
function onlyUnique(value, index, self) {
  return self.findIndex(x => x.value === value.value) === index;
}
return {{ actions.loadData.data }}.map(item => {
  return {value: item.country, title: item.country};
})
.filter(onlyUnique);
```

![](../../.gitbook/assets/dropdown1Opt.gif)

Check the dropdown - the values should sit there already!

Now, we need to make sure the data in the table is filtered according to the selected value in the dropdown. Follow the below steps:

1. Click on the **Select** component - in the _**Main Settings & structure**_, go down to the **Triggers** tab
2. For ease of use, set a name to your Select component, e.g. `selectItem` (for our example case, that would be `selectCountry`)

![Setting Component Name](<../../.gitbook/assets/Screenshot 2021-12-14 at 14.17.45.png>)

3\. Now, we need to [add a new Action](https://docs.uibakery.io/basics/working-with-actions#creating-an-action) triggered **On Changes**: select **Add new Action** from the actions’ dropdown

The Action includes the **loadData** action from the previous step, BUT we add an additional Filter by the required variable. Reference the Select variable as `{{ui.selectItem.value}}`, e.g. Country = `{{ ui.selectCountry.value}}`

![Adding a Filter to the Action](../../.gitbook/assets/dropdown2Opt.gif)

4\. As the last step, we also need to assign this Action to the Table, so select the Table, and change the reference on the Data settings `{{actions.selectItem.data}}`

![Reaasigning Action to the Table](<../../.gitbook/assets/Screenshot 2021-12-14 at 14.51.10.png>)

Try the dropdown now - the values will be dynamically updated as you change the selection

![](../../.gitbook/assets/dropdownFinalOpt.gif)
