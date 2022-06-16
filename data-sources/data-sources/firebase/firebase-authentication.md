---
description: Provide authentication to your database in UI Bakery
---

# Firebase Authentication

To provide authentication to your database in UI Bakery, follow the steps described below.

### Cloud Firestore

#### For testing purposes (read permissions only)

{% hint style="warning" %}
Use this authentication type <mark style="color:red;">**for testing purposes only**</mark> since it grants read access for everyone.
{% endhint %}

To grant read permissions in UI Bakery to everyone, follow these steps:

1. Navigate your [Firestore](https://console.firebase.google.com/u/0/) - **Rules**
2. Add a code line

```
allow read: if true;
```

![Adjusting Rules in Firestore](<../../../.gitbook/assets/Screenshot 2021-11-03 at 19.06.20.png>)

After that, you can proceed to UI Bakery and configure your [Firestore data source](https://docs.uibakery.io/firebase)

{% hint style="warning" %}
If you have already added Cloud Firestore as a data source and have an authentication error thrown after any Action is run, you might need to adjust your Firestore rules as stated above and then re-run your Action in UI Bakery.
{% endhint %}

#### Access for authenticated users only

To grant access only to your authorized users, please follow the below steps.

#### Step 1

1. Navigate your [Firebase](https://console.firebase.google.com/u/0/) - **Authentication** - **Users**
2. Create a user for UI Bakery authorization (its credentials will be used later for authorization)
3. Copy its **User UID**&#x20;

![Copying USER UID ](<../../../.gitbook/assets/Screenshot 2021-11-03 at 19.13.05.png>)

4\. Next, go to your **Cloud Firestore** and open the **Rules** tab to configure access rights

5\. Add a code line:

```
allow read, write: if request.auth.uid == 'User UID';
```

![Updating rules for Firestore](<../../../.gitbook/assets/Screenshot 2021-11-03 at 19.11.41.png>)

#### Step 2

Proceed to UI Bakery:

1. **Connect Datasource** - choose **Firebase**&#x20;
2. Configure the connection details by specifying the **Datasource name** and **Configuration script**
3. In the Firebase products list, additionally tick **Authentication**&#x20;
4. **Connect Datasource**&#x20;

![Configuring Cloud Firestore as a data source](<../../../.gitbook/assets/Screenshot 2022-04-26 at 10.28.19.png>)

#### Step 3

Once done, proceed to the **Builder** to add a Login Action, that will authenticate the user and grant access to your Cloud Firestore. To create a Login Action:&#x20;

1. [Add a new Action](https://docs.uibakery.io/basics/working-with-actions#creating-an-action) - **Code**&#x20;
2. Specify the code below:

```javascript
const email = "email_of_created_user";
const password = "password_of_created_user";
return firebase.auth().signInWithEmailAndPassword(email, password);
```

3\. **Run Action**

![Creating a Login Action](<../../../.gitbook/assets/Screenshot 2021-12-06 at 11.32.54.png>)

{% hint style="warning" %}
Please note that the Login Action should be run before any other Action
{% endhint %}

For example, to read your data with a prior login, do as follows:

* add a new **Workflow**
* step 1 - **Execute Action** - select _login_ Action from the list
* step 2 - **Code**, that will [list your data](https://docs.uibakery.io/firebase/cloud-firestore#list-data)

![Listing data with a Login step](<../../../.gitbook/assets/fbOpt (1).gif>)

### Realtime Database

#### For testing purposes (read permissions only)

{% hint style="warning" %}
Use this authentication type <mark style="color:red;">**for testing purposes only**</mark> since it grants read access for everyone.
{% endhint %}

To grant read permissions in UI Bakery to everyone, follow these steps:

1. Navigate your **Realtime Database** - **Rules**&#x20;
2. Add a code:

```
{
    "rules": {
        ".read": true,
    } 
}
```

![](<../../../.gitbook/assets/Screenshot 2021-11-04 at 17.16.14.png>)

After that, you can proceed to UI Bakery and configure your [Realtime Database data source](https://docs.uibakery.io/firebase)

{% hint style="warning" %}
If you have already added Realtime DB as a datasource and have an authentication error thrown after any Action is run, you might need to adjust your Realtime DB rules as stated above and then re-run your Action in UI Bakery.
{% endhint %}

#### Access for authenticated users only

To grant access only to your authorized users, please follow these steps.

#### Step 1

1. Navigate your [Firebase](https://console.firebase.google.com/u/0/) - **Authentication** - **Users**&#x20;
2. Create a user for UI Bakery authorization (its credentials will be used later for authorization)
3. Copy its User UID&#x20;

![](<../../../.gitbook/assets/Screenshot 2021-11-03 at 19.13.05.png>)

4\. Next, go to your **Realtime DB** and open the Rules tab to configure access rights&#x20;

5\. Add a code line&#x20;

```json
{ 
    "rules": { 
        "some_path": {
            "$uid": {
                ".read": "auth.uid == 'User UID'",
                ".write": "auth.uid == 'User UID'"
              }
        }
    }
}
```

![](<../../../.gitbook/assets/Screenshot 2021-11-04 at 18.31.40.png>)

#### Step 2

Proceed to UI Bakery:

1. **Connect Datasource** - choose **Firebase**
2. Configure the connection details by specifying the **Datasource name** and **Configuration script**
3. In the Firebase products list, additionally tick **Authentication**
4. **Connect Datasource**

![Adding Realtime DB as a datasource](<../../../.gitbook/assets/Screenshot 2022-04-26 at 10.28.41.png>)

#### Step 3

Once done, proceed to the **Builder** to add a Login Action, that will authenticate the user and grant access to your Realtime Database. To create a Login Action:&#x20;

1. [Add a new Action](https://docs.uibakery.io/basics/working-with-actions#creating-an-action) - **Code**&#x20;
2. Specify the code below:

```javascript
const email = "email of a dummy user"; 
const password = "password of a dummy user"; 
return firebase.auth().signInWithEmailAndPassword(email, password);
```

3\. **Run Action**

![](<../../../.gitbook/assets/Screenshot 2021-12-06 at 11.32.54.png>)

{% hint style="warning" %}
Please note that the Login Action should be run before any other Action
{% endhint %}

For example, to read your data with a prior login, do as follows:

* add a new **Workflow**
* step 1 - **Execute Action** - select _login_ Action from the list
* step 2 - **Code**, that will [read your data](https://docs.uibakery.io/firebase/realtime-database#read-data)

![](../../../.gitbook/assets/rtOpt.gif)

Nice job! You can proceed to build your app. The following articles will help you further:

* [Realtime Database](https://docs.uibakery.io/firebase/realtime-database)
* [Cloud Firestore](https://docs.uibakery.io/firebase/cloud-firestore)
