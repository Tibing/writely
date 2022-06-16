# Environments

Environments allow you to use development/staging databases while building and testing your applications without any risks of messing up with the data and breaking your production environment. In UI Bakery, you can configure development, staging and production environments.&#x20;

{% hint style="danger" %}
Environments are available on Team and Enterprise plans
{% endhint %}

### Configuring environments

To configure the environments for your data source, navigate to the **Data sources** tab, choose your data source and activate the **Enable environments** toggle.

![Enable environments toggle](<../.gitbook/assets/Screenshot 2022-04-07 at 15.55.23.png>)

Specify the details of your dev, staging and production data sources. If you don't need a staging or production environment, you can disable them by deactivating the toggle:

![](<../.gitbook/assets/Screenshot 2022-04-07 at 16.38.09.png>)

{% hint style="danger" %}
If one of the environments will not be configured, the system will use default environment
{% endhint %}

### Switching between the environments

#### Default environment

All development is done on a default (dev) environment. Before pushing your changes to a staging environment, you can first check them on the default environment. Click **Finish editing** and you'll be redirected to the preview of your application on a default environment.&#x20;

![](../.gitbook/assets/devOpt.gif)

#### Staging environment

As soon as you are ready to push your changes to the staging environment, click the **Deployment** button, specify the details of the release and tick the staging environment. Click **Deploy** to send the changes. To access the app on a staging environment, you can either use the link from the **Deployment** tab, or access it through the organization menu.

![](../.gitbook/assets/staging\_opt.gif)

#### Production environment

Once your app has been tested and can be published, deploy the application to production. To access the production environment, use the link from the **Deployment** tab or switch to the production environment from the organization menu.&#x20;

![](../.gitbook/assets/prodOpt.gif)

You can find out more about release management in UI Bakery here:

{% content-ref url="release-management.md" %}
[release-management.md](release-management.md)
{% endcontent-ref %}
