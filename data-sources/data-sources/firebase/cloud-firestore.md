---
description: Learn how to perform CRUDL operations with Cloud Firestore
---

# Cloud Firestore

Start with [adding Cloud Firestore as your data source](https://docs.uibakery.io/firebase).

### List data

Open the project and [create a new Action](https://app.gitbook.com/@uibakery/s/ui-bakery/\~/drafts/-MhXhcAjtL9txf-5aRrz/basics/working-with-actions#creating-an-action). Choose the **Code** action step and insert a code that will load your **Firestore** collection.

```javascript
const collection = await firebase.firestore().collection("collectionName").get();
const result = [];
collection.forEach(doc => {
    const data = doc.data();
    result.push({ id: doc.id, ...data });
});
return result;
```

![Adding a Load data action](<../../../.gitbook/assets/Screenshot 2022-04-25 at 19.07.29.png>)

Then, press the **Run Action** button and open the **Result tab**. You must have your collection's data loaded there.

### Read a document

To fetch data about a certain document, start with [Creating a new Action](https://app.gitbook.com/@uibakery/s/ui-bakery/\~/drafts/-MhXhcAjtL9txf-5aRrz/basics/working-with-actions#creating-an-action) and selecting the **Code** step.&#x20;

![Adding a Read the data action](<../../../.gitbook/assets/Screenshot 2022-04-25 at 19.08.14.png>)

Insert the code below to read the document's data:

```javascript
const doc = await firebase.firestore().collection('collectionName').doc('docID').get();
return doc.data();
```

Press the **Run Action** button and open the **Result tab**. You will see the document's data.

### Create a new record

Let's create a new record in Firestore. First of all, we need to [create a new Action](../../../basics/working-with-actions/#creating-an-action). Choose a **Code** action type and insert the code that will create a new record in your Firestore.

```javascript
const newUser = { name: "Nik" };
const doc = await firebase.firestore().collection("collectionName").add(newUser);
return doc.id;
```

![Adding a Create record action](<../../../.gitbook/assets/Screenshot 2022-04-25 at 19.08.46.png>)

Press the **Run Action** button and open the **Result tab**. You must have a new record there.

### Delete a record

Let's delete a record from Cloud Firestore. [Create a new action](https://app.gitbook.com/@uibakery/s/ui-bakery/\~/drafts/-MhXhcAjtL9txf-5aRrz/basics/working-with-actions#creating-an-action) and select a **Code** action step. Type in a code:

```javascript
await firebase.firestore().collection('collectionName').doc('docID').delete(); 
```

Press the **Run Action** button and open the **Result tab** to check that the record has been deleted

### **Update a record**

You can update the data in Cloud Firestore with 2 methods: `set()` and `update()`. The difference is, `set()` will overwrite the whole document.`update()`will update only certain fields that need to be updated. Let's check both of the approaches for updating your Firestore data.

&#x20;[Create a new action](https://app.gitbook.com/@uibakery/s/ui-bakery/\~/drafts/-MhXhcAjtL9txf-5aRrz/basics/working-with-actions#creating-an-action) and selecta Code action type. The code would be as follows:

**`set()`**

```javascript
const doc = await firebase.firestore().collection('collectionName').doc('docID').set({
    docField: newFieldValue
});
```

{% hint style="info" %}
In case you do not want to overwrite your data, you can add `merge: true` to your code, so that you only update the required fields
{% endhint %}

**`update()`**

For the update() method, type in the below Code:

```javascript
const doc = await firebase.firestore().collection('collectionName').doc('docID').update({
    docField: newFieldValue
});
```

Click **Run Action** and check the **Result** tab for the outcome.

![Adding an Update Step and checking the Result](<../../../.gitbook/assets/Screenshot 2022-04-25 at 19.09.24.png>)

All the other operations with the Firestore collections like _Filter, Order_ can be done via the Firestore API. You can find an API reference [here](https://firebase.google.com/docs/firestore/query-data/get-data).

More useful articles on how to further manage your data:

* [Transform or map your data](../../../basics/mapping-and-transforming-data.md#transforming-any-previous-step-result).
* [Add a component to display it](../../../basics/working-with-components.md#connecting-to-data).
