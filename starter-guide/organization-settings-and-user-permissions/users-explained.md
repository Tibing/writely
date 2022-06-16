---
description: Find out the difference between UI Bakery user types
---

# Users explained

There are two user types in UI Bakery: a **User** and a **Workspace user**.&#x20;

A **User** is included into the whole users group. A User can work with the data - view it, add new records and edit the existing ones. All Users can have access to the same projects. A User cannot modify the application itself (change data source, change the structure of the application, etc.) and cannot manage other users.

A **Workspace** user is a member of the workspace. A Workspace user can be [assigned any default role](https://docs.uibakery.io/starter-guide/organization-settings-and-user-permissions/invite-users-to-your-organization#roles): an admin, an editor, or [have a custom role](https://docs.uibakery.io/starter-guide/organization-settings-and-user-permissions/custom-roles). A Workspace user can have access to the Builder mode and make changes to your application (change data source, change the structure of the application, etc.). A Workspace user can manage other users (invite new workspace users and guests, assign roles). A Workspace user can have app-specific access.

### Use Case

Say you are running an IT department in a middle-sized company. You need to build a dashboard for each employee with the data about their vacation balance and sick leaves, salary info, bonuses, education, etc. They also need to be able to log their vacation days, submit approval requests and edit their personal information.

You will be building the dashboard by yourself, so you will be a _**Workspace user**_ with an admin role assigned. You will be able to connect a data source, build the application and later share it and invite your colleagues to use it. Your colleagues don't need any specific permissions, so they all can be invited as _**Users**_. Being a User, each of the employees will just have access to the Employee information dashboard, log their days off and view their salary information.&#x20;

Next, let's imagine you need to build another application containing sensitive financial information for the financial department only. Since Users cannot have application-specific permissions, you can switch your colleagues from the financial department into _**Workspace users**_ and grant them access to the financial application by creating a corresponding custom role.

If you require your developer team to help you with building further applications, you can invite them as _**Workspace users**_ and assign an _Editor_ role, so that they can have access to the Builder mode and help you with the development.

The following articles will help you understand the roles in UI Bakery:

{% content-ref url="invite-users-to-your-organization.md" %}
[invite-users-to-your-organization.md](invite-users-to-your-organization.md)
{% endcontent-ref %}

{% content-ref url="custom-roles.md" %}
[custom-roles.md](custom-roles.md)
{% endcontent-ref %}
