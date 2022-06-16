---
description: Learn how to add references between the variables in Tables
---

# Row context referencing

The row context option allows you to add references to a certain Table or Form variable for different view types. Let’s check some of the popular cases where this feature could be of use

### Refer to a Username instead of a link

Say you have the data about your employees with the URLs to their Linkedin profiles, but you do not want to see the plain links in the Table, but have a username instead.&#x20;

![](<../../.gitbook/assets/Screenshot 2021-10-06 at 18.37.43.png>)

Let’s see how this can be achieved.

* Start with [loading the data](https://docs.uibakery.io/starter-guide/load-and-display-data) and displaying it in a Table
* Click anywhere on the Table to open the right menu with the Columns list
* Find the Link column in the list and click on it to open its **Settings**
* Make sure the column type is set to Link

![Checking Field type](<../../.gitbook/assets/Screenshot 2021-10-06 at 18.16.34.png>)

* Then, navigate the **View Settings** tab and in the Text field, insert the code `{{row. Username}}` - referencing the column which values you would like to see in the Column. As you type, the autocomplete will suggest all the available variables

![Adding code to the Text field](<../../.gitbook/assets/Screenshot 2021-10-06 at 18.21.07.png>)

You can notice how the values in the URL column have immediately changed into the username values.

![](../../.gitbook/assets/rownameOpt.gif)

### Setting up dynamic dropdown values

Let's go through another example. In the Table, you would like to select a Country in the dropdown and then have the opportunity to select the city based on the Country's dropdown selection. This is how this can be done. (Please note we suppose that you have already loaded your data and added a Table prior to this step).

First, create a state variable:

![Creating a state variable](../../.gitbook/assets/variableOpt.gif)

* click on the plus button and rename a variable into Country
* select the _**Object**_ type for the variable
* set its' initial value and click **Save**. For the Countries example, it would be as below:

```javascript
{
  USA: [
    {
      value: 'NY'
    },
    {
      value: 'LA'
    }
  ],
  Germany: [
    {
      value: 'Berlin'
    },
    {
      value: 'Frankfurt'
    }
  ]
}
```

Now, click anywhere on the Table to open the right _**Columns**_ menu. First, let's add a Country column: &#x20;

* Press the **+** sign
* Enter the Field - Country
* Type: Select/Tag
* Options: specify the countries from the state variable
* Check the option ✅ _**Always display as editable**_

Now, we can add another column for a City. Add a new column and set a field and a type for it (should be Select/ Tag as well). Switch the _**Options**_ field to JS and specify the following code:

```javascript
{{ state.Country[row.country] ?? []}}
```

Check the option ✅ _**Always display as editable.**_ &#x20;

In the Table, you can now notice, that the values in the City dropdown change as you change the Country values.

![](../../.gitbook/assets/cityOpt.gif)
