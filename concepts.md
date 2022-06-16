# Concepts

**Data source** is a connection set up to a database from a server, on top of which you build your internal tool. It can be a database, an API, or a third-party service (MySQL, Google Sheets, Airtable). You need to connect a Data source to configure authentication to it to ensure a secure connection between the UI Bakery backend and your data.

If you use an API as a Data source, specify either `Access Token` or `Basic Auth` settings. If you use a database, specify database credentials.

{% hint style="success" %}
UI Bakery doesn’t store your data. We only keep the encrypted credentials to access a data source.&#x20;
{% endhint %}

**Action** is a piece of business logic implemented in your application. You can use it to load the data from Data sources, send it back, make API calls, navigate to app pages, generate PDF documents, and process any type of data with SQL or JavaScript.

Any Action includes **Action steps** – small jobs of various types, i.e. SQL query, Custom code, HTTP request, Condition, Navigation. By combining multiple Action steps, you can build functional workflows, unite requests to different Data sources, validate input data, or reload data based on a specific condition.

Action results are available as Variables `{{actions.actionName.data}}` that can be assigned to specific properties of components, or referenced in the other Actions.

An Action loading state is also available as a Variable `{{actions.actionName.loading}}`.

**Component** is a UI element that can display your data and accept the input from your users. You can work with various Components: Table, Form, Detail, Chart, PDF Viewer, and others. Drag-and-drop any Component you need to the working area to add it to an application page.

You can use some Components as Variables `{{ui.componentName.value}}` or `{{ui.componentName.selectedRow.data}}`. They can be referenced within the application in Actions or the properties of other Components.

**Triggers** are the events allowing you to handle user interactions within the app. Triggers can be _“On form submit”, “On table row select”_, and more. Actions can be tied to Triggers and used to process data, send it to a database, and perform other tasks.

**Variables** serve as a glue allowing you to use Action data in UI components. You can also use the Component values in the Actions or other Components.

{% hint style="info" %}
Bring the list of Variables in any code or text field in UI Bakery by typing two curly braces `{{`.
{% endhint %}

Variables allow you to bind the Action results to a Table (set Data property to `{{actions.loadUsers.data}}`), or send Component values back to Actions (set Body of an HTTP action step to a `{{ui.myForm.value}}`).
