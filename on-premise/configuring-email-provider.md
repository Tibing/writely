# Configuring email provider

By default, UI Bakery On-Premise comes with a **noop** email provider that will only log emails to the backend logs.

### Configure Sendgrid

We suggest using [**Sendgrid**](https://sendgrid.com/) email provider to send the emails:

1. [Create a Sendgrid](https://app.sendgrid.com/) account or use an existing account;
2. [Generate an API Key](https://app.sendgrid.com/settings/api\_keys) with the Mail Send access enabled;
3.  Set the following environment variables:

    ```
    UI_BAKERY_MAILING_PROVIDER=sendgrid
    SENDGRID_API_KEY=YOUR_API_KEY 
    ```
4. Restart the containers.

Once configured, your instance will start using your account to send the user invitation, password reset, and other emails.

### Change email templates

By default, email templates and subjects are provided as environment variables, so you can adjust the emails by modifying their content:

```
# tells that email will be send as plain text/html
UI_BAKERY_MAILING_TEMPLATES_MODE=custom

UI_BAKERY_MAILING_WELCOME_TEMPLATE=Hello userName,<br> Welcome to UI Bakery workspace.
UI_BAKERY_MAILING_WELCOME_SUBJECT=Welcome to UI Bakery workspace

UI_BAKERY_MAILING_RESET_PASSWORD_TEMPLATE=Hello userName,<br> Here's your <a href="resetPasswordUrl">password reset link</a>.
UI_BAKERY_MAILING_RESET_PASSWORD_SUBJECT=Reset password request

UI_BAKERY_MAILING_CONFIRM_EMAIL_CHANGE_TEMPLATE=Hello userName,<br> Here's a link <a href="changeEmailUrl">to change your email</a>.
UI_BAKERY_MAILING_CONFIRM_EMAIL_CHANGE_SUBJECT=Change email request

UI_BAKERY_MAILING_SHARE_WITH_USER_TEMPLATE=Hello userName,<br> Here's a <a href="organizationUrl">link to access the organizationName workspace</a>.
UI_BAKERY_MAILING_SHARE_WITH_USER_SUBJECT=You are invited to UI Bakery workspace
```

You can use the following built-in email variables to add user values to your emails:

```
# All emails
userName, userEmail, subject, userId

# Reset password request
resetPasswordUrl

# Invitation email
organizationUrl, organizationName

# Change email request
changeEmailUrl
```

Alternatively, you can setup email temples using [Sendgrid dynamic templates](https://mc.sendgrid.com/dynamic-templates) and put template ids instead of plain HTML emails:

```
# tells that email will be send as using dynamic templates
UI_BAKERY_MAILING_TEMPLATES_MODE=provided

UI_BAKERY_MAILING_WELCOME_TEMPLATE=d-c3f84d76543941c084ff2de0exxxxxxx
UI_BAKERY_MAILING_RESET_PASSWORD_TEMPLATE=d-c3f84d76543941c084ff2de0exxxxxxx
UI_BAKERY_MAILING_CONFIRM_EMAIL_CHANGE_TEMPLATE=d-c3f84d76543941c084ff2de0exxxxxxx
UI_BAKERY_MAILING_SHARE_WITH_USER_TEMPLATE=d-c3f84d76543941c084ff2de0exxxxxxx
```

{% hint style="warning" %}
Note, that in this case an email subject will be taken from a dynamic template configuration and variables such as `UI_BAKERY_MAILING_WELCOME_SUBJECT` will be ignored.
{% endhint %}

This way, you don't need to manage templates content inside of your environment variables and can build more advanced email with images and custom styles.
