---
description: Connect to Firebase Cloud Firestore or Realtime Database
---

# Firebase

### Prerequisites

Firestore requires a specific configuration to connect from the client. Firstly, open your [Firebase app](https://console.firebase.google.com/u/0/) – **Project Settings** - **SDK setup and configuration**. Open the Config tab and copy the setup script, that will be used later for integration:

![Copying Firebase config script](<../../../.gitbook/assets/Screenshot 2021-09-16 at 16.30.11.png>)

If there is no web app connection available, create it:

![How to create a web app connection in Firebase](<../../../.gitbook/assets/Screenshot 2021-09-16 at 16.37.53.png>)

Below is a sample of what a setup script might look like:

```javascript
const firebaseConfig = {
  apiKey: "AIzaSyDyWoZsfx4XnpCQ89Sf1BkDTTSWwV4m244",
  authDomain: "fir-webinar-39878.firebaseapp.com",
  databaseURL: "https://fir-webinar-39878-default-rtdb.firebaseio.com",
  projectId: "fir-webinar-39878",
  storageBucket: "fir-webinar-39878.appspot.com",
  messagingSenderId: "345464345951",
  appId: "1:345464345951:web:1f33b5a91d6d954bc512ea"
};
```

### **Configuration**

Open [UI Bakery](https://cloud.uibakery.io/) Project – **Data sources** - Connect - choose **Firebase** from the list

Specify **Datasource name**, then paste the copied script into the **Configuration** field, then enable Firebase products you are going to use (e.g. Realtime Database)

![](<../../../.gitbook/assets/Screenshot 2022-04-25 at 19.03.28.png>)

Click **Connect**

Authentication instructions are listed in the article below:

{% content-ref url="firebase-authentication.md" %}
[firebase-authentication.md](firebase-authentication.md)
{% endcontent-ref %}

Now, can learn how to manage your data from [Cloud Firestore](https://docs.uibakery.io/firebase/cloud-firestore) or [Realtime Database](https://docs.uibakery.io/firebase/realtime-database)
