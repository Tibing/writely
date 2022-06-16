# Airtable

UI Bakery allows you to easily connect to Airtable with no need for additional layers like APIs and 3rd-party services.

{% hint style="warning" %}
Airtable imposes certain limitations to API abilities:

* 5 requests per second, per base.
{% endhint %}

### Configuration

3 essential components are required to connect your Airtable database to UI Bakery:

* **API Key.**&#x20;

You can find and copy it from your [Airtable account page](https://airtable.com/account):

![Where to find an Airtable API key](<../../.gitbook/assets/image (11).png>)

When copied, paste it into the API Key data source property.

* **Database ID.**

Open an [Airtable APIs page](https://airtable.com/api), click on a database that you need to connect and copy over the base ID:

![Where to find a Database ID](<../../.gitbook/assets/airtable database id.gif>)

* **List of database Tables.**

Open your database and copy the exact names of the Tables you need to use in your app.

{% hint style="warning" %}
A table must have at least one row for UI Bakery to recognize its fields.
{% endhint %}

![](<../../.gitbook/assets/Screenshot 2022-04-25 at 18.54.39.png>)

Click **Test Connection**. If the test is successful, click **Connect Data source.** UI Bakery will extract the database structure and store column types. This information will be used to suggest the [proper table columns and form field types](../../basics/field-types-and-types-recognition.md).

### Usage

Once you have a connection between UI Bakery and Airtable, you can access its data, load and send it back.&#x20;

{% hint style="info" %}
Please note that UI Bakery limits the number of loaded records by default to **1000**. To expand this limit, just enter the required limit in action that loads Airtable data
{% endhint %}

1. Create an Action using one of the following types to access your data:
   * _Load Table_
   * _Load Row_
   * _Create Row_
   * _Update Row_
   * _Delete Row_
2. Configure it. Select a proper Table, set filters, and other settings.
3. Run it. Take a look at the Results tab to make sure the data is loaded.
4. [Transform or map your data](../../basics/mapping-and-transforming-data.md#transforming-any-previous-step-result).
5. [Add a Component to display it](../../basics/working-with-components.md#connecting-to-data).

![Loading table data](../../.gitbook/assets/airOpt.gif)

#### Loading table views

Additionally, it is possible to set a specific Airtable view that will be loaded for the selected table. This comes in handy in case you'd like to configure an advanced filters on the Airtable side and just load this data into UI Bakery app.

To do this, scroll down the **Load Table** configuration to the **Additional settings** section and specify **view** as a key and name of your view **as a value:**

![Loading a custom view](<../../.gitbook/assets/image (44).png>)
