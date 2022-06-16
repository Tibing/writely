# Field types & types recognition

Сomplex components, such as Table, Form, Detail, etc. support _various column / field types_.

![Column and field types](<../.gitbook/assets/image (7).png>)

These types share their settings among all the supported Components. Configuring dropdowns for a Table or a Form is exactly the same.

The following types are supported:

* String
* Long Text
* Number
* Currency
* Boolean
* Date & Time
* Select
* Multiselect
* Image
* File

Using these types, you can build a Component that will support most of the common use cases.

#### Autogeneration of types

Form, Table, Detail and some other Components support _autogeneration of types_ based on the Component data. This can work according to one of the 2 following scenarios:

* Creating an Action and adding a Component:
  1. Create an Action. Run it.
  2. Add a Table, Form, or a Detail component. The Action is assigned to it. All the fields and their types are generated automatically.
* Using the **Generate Structure** button:
  1. Add data to a Component: connect an Action, state variable, or another Component property.
  2. Click the Generate Structure button. Voila – the structure is generated!

{% hint style="success" %}
**No need to configure similar Components over and over again.**

When generating a structure based on _another Component property_, UI Bakery not only creates the same structure but also copies the properties of all the types.
{% endhint %}

![Generating Detail based on the selected row](<../.gitbook/assets/formOpt (1).gif>)

#### Manual fields configuration

To add and configure fields and columns of various types manually:

* Click the Plus button at the bottom of the types list.
* When the Field panel pops up:
  1. Select a proper type from the dropdown list.
  2. If the data is connected to a Component, select a proper field from the list. If you can't find the needed field in the list, type its name. You will add a new field / column without mapping it to the connected dataset.
  3. Configure the remaining properties.&#x20;

#### View / Edit mode

All the types support __ **View** **and** **Edit modes**. Modes are very helpful when you need to edit data inline in a Table or a Detail component without creating a separate Form for it.

For example, in this Detail component, the Edit mode is turned on for the Model field. This way, any end-user can quickly adjust the model directly from the component:

![Turning the Edit mode on for one field](../.gitbook/assets/modelOpt.gif)

In a Form component, the fields can also be changed into an **Always display as view** mode. This way, the fields will also be displayed but your end-users won't be able to edit them.

#### Validation

Validation is supported for all types in UI Bakery. Validation settings vary depending on a particular type. They're available at the bottom of the Edit section:

![Validation settings](<../.gitbook/assets/Screenshot 2021-12-14 at 12.58.06.png>)
