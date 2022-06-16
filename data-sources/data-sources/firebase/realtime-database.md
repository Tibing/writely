---
description: Learn how to perform CRUD operations with Firebase Realtime Database
---

# Realtime Database

Start with [adding Realtime Database as your data source](https://docs.uibakery.io/firebase).

### Read data

To read the data, follow the steps below:

1. [Create a new Action](https://docs.uibakery.io/basics/working-with-actions#creating-an-action)
2. Add a **Code** step
3. Type in the code below and **Run Action**:

```javascript
const userId = firebase.auth().currentUser.uid;
return firebase
  .database()
  .ref('/users/' + userId)
  .once('value')
  .then(snapshot => snapshot.val());
```

![Adding a Read Data step and checking the result](<../../../.gitbook/assets/Screenshot 2022-04-25 at 19.05.10.png>)

4\. Check the **Result** tab - the data should sit in there.

### Add a record

To add a record:

1. [**Add a new action**](https://docs.uibakery.io/basics/working-with-actions#creating-an-action)
2. Select **Code** step and type in the code
3. **Run Action**:

```javascript
const listRef = firebase.database().ref("list/");

listRef.set({
   record1: {
      field1: newValue1,
      field2: newValue2,
   },
});
```

![Adding an Add Record step and checking the result](<../../../.gitbook/assets/Screenshot 2022-04-25 at 19.05.54.png>)

4\. Check the **Result** tab to find a new record created.

### Update a record&#x20;

Updates can be executed using 2 methods: `set()` and `update()`. Let's check both of them.

1. Start with [**adding a new action**](https://docs.uibakery.io/basics/working-with-actions#creating-an-action)
2. Select **Code** step and type in the below code depending on the selected method:

**`set()`**

```javascript
const listRef = firebase.database().ref("list/record");

listRef.set({
      field1: newValue1,
      field2: newValue2,
});
```

{% hint style="info" %}
Note that `set()` can overwrite your data, while `update()` just updates the required fields
{% endhint %}

**`update()`**

```javascript
const recordRef = firebase.database().ref("list/record");

recordRef.update({
   field1: newValue1,
});
```

![Adding an Update step and checking the result](<../../../.gitbook/assets/Screenshot 2022-04-25 at 19.06.50.png>)

3\. Click **Run Action**\
4.Check the **Result** tab to for the outcome - the requested records should be updated with the new values.

### Delete a record

1. [Add a new action](https://docs.uibakery.io/basics/working-with-actions#creating-an-action)&#x20;
2. Set **Code** step and insert the Code
3. **Run Action**

```javascript
const recordRef = firebase.database().ref("list/record");
recordRef.remove();
```

4\. Check the **Result** tab to check that the record has been removed

All the other operations with the Realtime Database data like _Filter, Order_ can be done via the Firestore API. You can find an API reference [here](https://firebase.google.com/docs/database/web/lists-of-data?authuser=1).

More useful articles on how to further manage your data:

* [Transform or map your data](../../../basics/mapping-and-transforming-data.md#transforming-any-previous-step-result).
* [Add a component to display it](../../../basics/working-with-components.md#connecting-to-data).

