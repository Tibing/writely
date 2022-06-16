---
description: Configure additional settings for your action flow
---

# Additional action settings

You can set up additional settings for the action execution flow. These include toasts, confirmation dialogs, and execution delays.

### Toasts

You can configure success or error toasts for your actions. By default, the toasts are on, but you can turn them off or modify the standard text.

![Toasts settings](<../../.gitbook/assets/Screenshot 2022-02-21 at 14.24.59.png>)

![](../../.gitbook/assets/actionOpt.gif)

You can also use the action result in the alert, e.g. to notify about a successful item addition:

`New customer created {{actions.yourAction.data.id}}`

or show an error for a failed action:

`Action failed with an error {{actions.yourAction.error}}`&#x20;

![](<../../.gitbook/assets/Screenshot 2022-02-21 at 19.03.21.png>)

### Confirm Dialog

To avoid some actions being executed by mistake, you can configure a confirmation dialog for your users.&#x20;

![Adding a confirmation dialog for an action](../../.gitbook/assets/confOpt.gif)

### Execution delay

You can set up an action execution delay if necessary to prevent the actions from running too often.

![Setting up a delay](<../../.gitbook/assets/Screenshot 2022-02-21 at 18.21.01.png>)
