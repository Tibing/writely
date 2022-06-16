---
description: Deploy UI Bakery locally to manage your data from your private network
---

# UI Bakery on-premise

We understand that you might have lots of data accessible from your private network, that’s why you can use UI Bakery self-hosted version for your benefit.

On-premise version grants you:

* A relatively quick setup process;
* Custom branding;
* Custom domain hosting;
* Google SSO;
* SAML-based identity providers;
* Data is stored securely under your own VPS

{% hint style="success" %}
UI Bakery on-premise version license key can be obtained [here](https://uibakery.io/on-premise-ui-bakery)
{% endhint %}

{% hint style="warning" %}
If you have already installed UI Bakery on-premise version, follow [this guide](updating-on-premise-version.md) to update your version.
{% endhint %}

### Installation

{% hint style="danger" %}
MySQL instance is included into the out of the box container and doesn't require any additional setup. If you need to have a standalone database, read [here.](https://docs.uibakery.io/ui-bakery-on-premise#running-a-standalone-database-instance)
{% endhint %}

* Install [docker](https://docs.docker.com/engine/install/) 20.10.11 version or higher and [docker-compose](https://docs.docker.com/compose/install/) 1.29.2 version or higher
* Start docker daemon
* Get on-premise package:

```
curl -k -L -o ui-bakery-on-premise_v2.19.1.tar.gz https://storageaccountrguib99d2.blob.core.windows.net/ui-bakery-cloud-on-premise/ui-bakery-on-premise_v2.19.1.tar.gz && mkdir ui-bakery-on-premise && tar -xvf ui-bakery-on-premise_v2.19.1.tar.gz -C ui-bakery-on-premise && cd ui-bakery-on-premise
```

* Get the license key [from UI Bakery team](https://uibakery.io/on-premise-ui-bakery). You'll get a key like of the following format: `eyJhbaj8es9fj9aesI6IkpXVCJ9.eyJsjioOHGEFOJeo0JSe98fJEJSEJFImVtYWlsIjoibmlrLnBvbHRvcmF0c2t5QGdtYWlsLmNvbSJ9.2n9q1LmjnBn62KyAM3FlYZ8PzQcxmIK0_mptNv38ufM`
* Run `./setup.sh`:
* Enter the license key
* Enter the port (leave empty for local installation, 3030 port will be used)&#x20;
* Enter the server url (leave empty for local installation)

5\. Run `docker-compose up -d` to start the containers

6\. Wait until all containers are up and running

7\. Open ports `3030` and `3040` or `UI_BAKERY_PORT` and `UI_BAKERY_WORKBENCH_PORT` (if they were modified in `.env` file or entered in `./setup.sh`) to access UI Bakery instance, then you can create a new account.

### Running a standalone database instance

In case when a 3rd party MySQL instance is required:&#x20;

1. Provide the following environment variables:

```js-extras
UI_BAKERY_DB_HOST=192.168.0.1
UI_BAKERY_DB_PORT=3306
UI_BAKERY_DB_DATABASE=bakery
UI_BAKERY_DB_USERNAME=username
UI_BAKERY_DB_PASSWORD=password
```

2\. Run `docker-compose -f ./docker-compose-external-db.yml up` to start the containers, alternatively, `docker-compose -f ./docker-compose-external-db.yml up -d` to run containers in the background.

### Running on a remote instance

If you would like to run UI Bakery not on localhost, but on a server, you need to provide the following variables:

```
UI_BAKERY_APP_SERVER_NAME=http://YOUR_DOMAIN_OR_IP:3030
UI_BAKERY_WORKBENCH_PATH=http://YOUR_DOMAIN_OR_IP:3040
UI_BAKERY_PORT=3030
UI_BAKERY_WORKBENCH_PORT=3040
```

{% hint style="info" %}
_UI\_BAKERY\_PORT_ and _UI\_BAKERY\_WORKBENCH\_PORT_ variables must match ports in _UI\_BAKERY\_APP\_SERVER\_NAME_, _UI\_BAKERY\_WORKBENCH\_PATH_ variables
{% endhint %}

To run UI Bakery under **HTTPS,** you need to setup additional subdomain for `workbench` (part of UI Bakery, where user apps can be securely rendered). In your `DNS` provider, configure the following records:

* `A` or `CNAME` record with UI Bakery instance host
* `CNAME` record for the `workbench`  subdomain with the same host.

Then modify your environment variable with the following values:

```
UI_BAKERY_APP_SERVER_NAME=https://YOUR_DOMAIN
UI_BAKERY_WORKBENCH_PATH=https://workbench.YOUR_DOMAIN
UI_BAKERY_PORT=80
```

### Google OAuth setup

1.  Create OAuth Client ID in [Google developer console](https://console.cloud.google.com/apis/credentials)&#x20;

    a. Create or choose an existing project.&#x20;

    b. Click on “Create credentials”.

    c. Choose “OAuth Client ID”.

    d. Choose “Web Application” Application type.

    e. Specify `http://localhost:3030 or UI_BAKERY_APP_SERVER_NAME` for authorized javascript origin.

    f. Specify `http://localhost:3030/auth/oauth2/callback` or `UI_BAKERY_APP_SERVER_NAME/auth/oauth2/callback` for authorized redirect URLs.&#x20;

    g. Click “Create”.

    h. Copy “Your Client ID”.
2. Provide `UI_BAKERY_GOOGLE_CLIENT_ID=Your Client ID` environment variable.&#x20;
3. Provide `UI_BAKERY_APP_SERVER_NAME=http(s)://youdomain.com` environment variable in case you want to run UI Bakery on a custom domain/IP.
4. Run `docker-compose up` if you want to use the embedded database.
5. Or run `docker-compose -f ./docker-compose-external-db.yml up` with environment variables described in [Running a standalone database instance](https://docs.uibakery.io/ui-bakery-on-premise#running-a-standalone-database-instance) above in case you want to use an external database.

### SAML authentication setup

&#x20;   1\. Configure your Identity provider. In identity provider settings, set **Sign on URL** and **Reply URL** to `https://APP_LOCATION/api/auth/login/saml`. Replace `APP_LOCATION` with UI Bakery instance URL. Configure **name** and **role** attributes. You can set claim name in identity provider settings or in UI Bakery env variables `UI_BAKERY_SAML_NAME_CLAIM` and `UI_BAKERY_SAML_ROLE_CLAIM`

&#x20;   2\. Provide URL of your identity provider metadata and entity ID via following env variables:

```
UI_BAKERY_SAML_METADATA_URL=https://your.identityprovider.com/federationmetadata/2007-06/federationmetadata.xml.
UI_BAKERY_SAML_ENTITY_ID=http://appregestry.com/myapp/primary
```

&#x20;   3\. Set variable `UI_BAKERY_SAML_ENABLED=true`\
``    4. You can add a role mapping from identity provider role to UI Bakery role via env variable:

```
UI_BAKERY_ROLE_MAPPING=identityRoleName->bakeryRoleName,identityRoleName2->bakeryRoleName2 
```

&#x20;   5\. You can set variable `UI_BAKERY_SAML_LOGIN_AUTO` to `true` to enable automatic login. Any unauthorized user will be redirected to SAML login flow.

### Other authentication settings

1. You can disable email authentication by providing the environment variable `UI_BAKERY_GOOGLE_AUTH_ONLY=true`&#x20;
2. Provide `UI_BAKERY_AUTH_RESTRICTED_DOMAIN=domain.com` environment variable to restrict Google login only to the specified domain.

### Limitations&#x20;

* Emails won’t be sent from the local instance, although the invitation system works in a way that any invited email can access the organization by creating an account.&#x20;
* Google Sheets connection requires [additional setup](https://docs.uibakery.io/data-sources/ui-bakery-on-premise/google-sheets-connection-setup) if necessary.
