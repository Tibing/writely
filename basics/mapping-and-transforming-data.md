# Data mapping & transforming

Sometimes the data returned by a Data source or an API is structured not in a proper way for UI Bakery to use it inside Components. You may need to reformat your data or enrich it with other properties. You may also need to make some live data calculations before you display it.

All this can be achieved with **UI Bakery Actions**.

### Accessing a nested object property

When retrieving a list of items, a lot of APIs may return an object that has a structure similar to this:

```javascript
{
  length: 10,
  records: []
}
```

The actual list here is placed under the nested `records` or another key. If we need to display this list in a Table component, we need to transform it before passing it to the Table.

There are several ways to do it.

#### Transforming HTTP responses

An HTTP step has a build-in property called **Result mapper**. This setting accepts any JavaScript that can help you transform the result. In the example above, you only need to add the following JavaScript code to transform the object response into an array response:

```javascript
return {{data.records}};
```

![Accessing the nested property](../.gitbook/assets/transform.gif)

{% hint style="info" %}
`{{data}}` in this case represents the result of the HTTP request.
{% endhint %}

#### Transforming any previous step result

Load Table, Load Row, and other Action steps don't have a **Result Mapper** setting. Also, sometimes the transformer may take more code lines, so it makes sense to move it to a separate **Code action** step.

To access a record property of the previous step, just add a new Code step with the following piece of code:

```javascript
return {{data.records}};
```

![Code step](<../.gitbook/assets/transform 2.gif>)

{% hint style="info" %}
Action steps are executed sequentially, which means that any step has access to the result of the previous step execution. The`{{data}}` variable keeps the result, and the`{{error}}` variable keeps the caught error that could have occurred during the step execution.
{% endhint %}

As a result, the Action will return an array of items that can be easily connected to a Table or other components.

#### Transforming list object properties

In case you need to transform, rename or access nested object keys, you can use a JavaScript `map` function.&#x20;

For example, your API returns a list of items that have a nested object, but you need a particular property, not the whole entity.

```javascript
[
  {
    id: 25,
    price: 1000,
    user: {
      name: 'John',
      email: 'john@mycompany.com'
    }
  }
]
```

You need it to look like this:

```javascript
[
  {
    id: 25,
    price: 1000,
    name: 'John',
    email: 'john@mycompany.com'
  }
]
```

To transform the list of objects like this, use a **Result Mapper** setting or a separate **Code action** step **** with the following JavaScript function:

```javascript
return {{data}}.map(item => {
  return {
    id: item.id,
    price: item.price,
    name: item.user.name,
    email: item.user.email
  };
});
```

![Data mapping](<../.gitbook/assets/transform 3.gif>)

You may also use a short version. It'll keep the original object but will also copy over the user properties to the first level of the object:&#x20;

```javascript
return {{data}}.map(item => {
  return {
    ...item,
    ...item.user
  };
});
```

In the same manner, you can do calculations, rename properties or add additional fields to the response.

#### Loading a single object of the list

When an API returns a list of objects but you need only one object from this list, you can transform it using JavaScript syntax for accessing array objects by object index:

```javascript
return {{data[0]}};
```

In this case, only the first item of the list will be returned. This is helpful when you are working with an **SQL query** step and need to receive only one item.

#### Receiving headers of an HTTP response

If you need to get the header from the HTTP response, specify the \{{res\}} variable in the Transform result field and run the action:

![](../.gitbook/assets/resOpt.gif)
