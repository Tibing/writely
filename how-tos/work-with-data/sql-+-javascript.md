---
description: Learn how to use Javascript and SQL Queries to manage your data
---

# Use Javascript and SQL Queries

The simplest way to have access to your MySQL / PostgreSQL / Google Sheets data in UI Bakery is to use the **SQL Query** action step.

### Firing a SQL query to a database

1. Connect a [MySQL](../../data-sources/data-sources/mysql.md), [PostgreSQL](../../data-sources/data-sources/postgresql.md), or [Google Sheets](../../data-sources/data-sources/google-sheets.md) Data source.
2. Create an Action.
3. Choose a SQL Query action step and select a Data source.
4. Add your query, click **Run Action** and check the Result tab.
5. Add a Component. It will be automatically configured to show the data.

![Creating a SQL Table in 25 seconds](<../../.gitbook/assets/sql query.gif>)

{% hint style="success" %}
Use **Cmd + Esc (Mac) or Ctrl + Space (Windows/Linux)** to autocomplete tables / columns.
{% endhint %}

### Using UI values

A SQL query in UI Bakery is a simple string. This means that you can use a Variables selector to reference the Components properties. Type in a `{{` somewhere inside your query and select a variable you'd like to use.

```sql
SELECT customers.*, COUNT(orders.orderNumber) as orders_count FROM customers
LEFT JOIN orders on orders.customerNumber = customers.customerNumber
WHERE customers.customerNumber = {{ ui.input.value }}
GROUP BY customers.customerNumber;
```

![Variable reference](<../../.gitbook/assets/input inside query.gif>)

{% hint style="warning" %}
If you use an Input value and want to trigger your Action when the Input's value changes, set the Action into the Triggers setting of a Component.
{% endhint %}

![On Enter input trigger](<../../.gitbook/assets/inputOpt (1).gif>)

When using a string or a date variable, refer to UI Bakery variable with SQL query quotes:

```sql
SELECT customers.*, COUNT(orders.orderNumber) as orders_count FROM customers
LEFT JOIN orders on orders.customerNumber = customers.customerNumber
WHERE customers.name = '{{ ui.input.value }}'
GROUP BY customers.customerNumber;
```

### Executing multiple insert queries

Sometimes you'll need to insert multiple items in a row. You can achieve it with the following small JavaScript snippet.

First, add a Code step that will take your data and generate the values of the `INSERT`:

```sql
const items = [{ name: 'first', age: 30 }, { name: 'second', age: 34 }];
return items.map(item => {
  return `('${item.name}', ${item.age})`;
}).join(',');
```

Based on the data, this will result in a similar string:

```sql
(string): "('first', 30),('second', 34)"
```

Now, add a SQL query as a second step with the rest of the INSERT statement. It'll also reference the `{{data}}` property ([the result of the previous step execution](../../basics/working-with-actions/#using-the-previous-step-result)) that has the generated values of the query:

```sql
INSERT INTO customers (name, age) VALUES {{ data }};
```

![SQL query with a dynamic values block](<../../.gitbook/assets/Screenshot 2021-12-14 at 13.48.40.png>)

It's how you can generate parts of the query dynamically and implement more features in your apps faster.&#x20;
