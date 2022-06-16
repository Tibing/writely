# Generate PDF document

You might want to generate PDF files from your tables for reporting and other purposes. Here's how you can do it in UI Bakery:

{% hint style="info" %}
We suppose that by this time you have already [connected your app to the data source](https://docs.uibakery.io/starter-guide/connect-a-data-source)
{% endhint %}

1. [Load your data](https://docs.uibakery.io/starter-guide/read-and-write-data/load-and-display-data) and add a Table to display it. For example, we will load a table with users' data.
2. [Add a new action](https://docs.uibakery.io/basics/working-with-actions#creating-an-action) - **Code**
3. Specify the below code:

```javascript
const doc = new jspdf.jsPDF();

doc.autoTable({
  head: [['ID', 'Name', 'Email', 'Bio']],
  body: {{ui.loadUsers.value}}.map(({ id, fullName, email, bio }) => ([id, fullName, email, bio])),
});

doc.save('users.pdf');
```

![](<../.gitbook/assets/Screenshot 2021-12-07 at 14.36.08.png>)

{% hint style="warning" %}
Please note the code is exemplary and needs to be modified based on your table's and necessary file's structure
{% endhint %}

As the next step, add a **Button** that will download the generated file.&#x20;

Open Button's settings, navigate _Triggers\&condition_ tab and assign the _generatePDF_ action to the _**On Click**_ trigger.

![](../.gitbook/assets/pdfnewOpt.gif)
