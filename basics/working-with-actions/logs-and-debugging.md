# Logs and debugging

Logs provide you with information about how the action run. Once you run any action, you can find the Logs tab on the bottom tab that appears.

![Opening Logs tab](<../../.gitbook/assets/Screenshot 2022-02-02 at 18.42.30.png>)

On a Logs tab, you can switch the view to a Default log levels view (Log, Info, Warn, Error), switch to a full log levels view by adding Verbose or just select the log levels you need.

![Changing Logs view](<../../.gitbook/assets/Screenshot 2022-02-02 at 18.43.17.png>)

### Debugging actions with console.log

When working with the code, it's important to be able to debug it right away. With the Logs tab, you can add a `console.log` function to your code and troubleshoot right in the app, with no need to open up a browser developer console.

Here is an example with `console.log.`Say you have a transformer function that is not working properly, and you'd like to make a user with item 103 have a correct value. Add a `console.log` function as below, run the action and check the **Logs** tab.

```javascript
return data.map(item => {
  if (item.customerNumber === 103) {
    console.log('Customer #103', item);
  }
  return item;
});
```

![](<../../.gitbook/assets/Screenshot 2022-02-02 at 19.10.43.png>)

Now, you can see the result in the logs. You can use the same approach and debug your code directly in the app, without the need to open the developer console.

Besides the `console.log` , other standard functions are supported, such as `console.info`, `console.warn` and `console.error`.
