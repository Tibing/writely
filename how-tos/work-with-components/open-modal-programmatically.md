# Open modal programmatically

When working with a **modal,** you might want to open it via custom interaction - on a button click, a table row click or from custom JavaScript snippet. Here's how to do that:

1. Add a modal and _give it a proper name._ That's important since we're going to reference it by this name later.

![](<../../.gitbook/assets/image (37).png>)

2\. Create a **Code action** with the following code snippet:

```javascript
document.querySelector('.myCustomModal > ub-base-button > button').click();
```

You have to insert your modal name instead of **.myCustomModal**.&#x20;

Executing this action emulates a click on the modal button. So it opens a modal if it's closed and closes if it's opened.

3\. Create another button that triggers this action and assign it to a button's click handler.

![](<../../.gitbook/assets/image (38).png>)
