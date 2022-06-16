---
description: Reference cell {{value}} to conditionally format data
---

# Conditional formatting based on cell value

In many cases, you might want to highlight certain Table values based on a specific condition. In these situations, the ability to reference self `{{value}}` comes in handy. Let's check a couple of examples.

### Highlighting cells in different colors based on the value

Imagine you have a list of Customers, and you would like to monitor their state depending on their credit limit amount. All customers with a credit limit less than 90k are at risk, so these ones should be highlighted in red.

![](<../../.gitbook/assets/Screenshot 2021-11-17 at 15.30.53.png>)

To highlight the cells based on the condition, follow these steps:

* open Column's settings - **View settings**
* In the _Color_ field, specify the condition: `{{ value >= 90000 ? 'success' : 'danger' }}`

![](../../.gitbook/assets/highlightOpt.gif)

You will notice how the values greater than 90k are highlighted in green, while the rest is highlighted in red.

### Showing emojis based on the value

Let's say you need to process the result of the employee satisfaction survey, but instead of the plain satisfaction rate have emojis in the Table: 😔 for the responses with less than 20 points, 🙂 for neutral responses with 20 to 70 points and 😍 for responses with more than 70 points.

![](<../../.gitbook/assets/Screenshot 2021-11-17 at 17.35.52.png>)

To map numerical values to the corresponding emojis, follow these steps:

* change the **Type** of the field from _Number_ to _String_
* open **View Settings** - **Mapper**
* specify the code: {`{ value < 20 ? '😔' : value >= 20 && value < 70 ? '🙂' : value >= 70 ? '😍' : '' }}`

![](../../.gitbook/assets/emojiOpt.gif)
