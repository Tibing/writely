# Connecting local database via ngrok

If you need to connect your local database and don’t want to use the on-premise version, you can go for an option of connecting via [ngrok.](https://ngrok.com)&#x20;

{% hint style="danger" %}
We highly recommend this approach <mark style="color:red;">**for testing purposes**</mark> only, as ngrok is a 3rd party proxy that provides a temporary connection (40-120 minutes depending on your plan), and re-connection will be required.
{% endhint %}

To connect your local database via ngrok, follow the steps below:

1. Create your account at [ngrok](https://ngrok.com) in case you do not have one
2. [Download ngrok](https://ngrok.com/download)
3. Unzip the archive (initial instructions can be found [here](https://dashboard.ngrok.com/get-started/setup))&#x20;
4. Open Terminal (MacOS, Linux) or command line (Windows) and navigate the Downloads folder (or any other folder where the ngrok folder has been saved). Use command `cd Downloads`&#x20;
5. To authenticate, find your personal authtoken on your [authtoken page](https://dashboard.ngrok.com/get-started/your-authtoken). The token should look like this: `./ngrok authtoken 20JWDkD3uwe2wuRqhCvuTkQ0LE3_5N6KtiEBDLD3fXZkRHpej`&#x20;
6. In case of success, you’ll get the following message: `Authtoken saved to configuration file: /Users/user_name/.ngrok2/ngrok.yml`&#x20;
7. To expose a local app server or database using one of these commands :

```
app server: ./ngrok http 80 (or port your server is hosted on)
mysql: ./ngrok tcp 3306
postgre: ./ngrok tcp 5432
mssql: ./ngrok tcp 1433
mongodb: ./ngrok tcp 27017
```

![](https://lh5.googleusercontent.com/aXWKxyO86A692ZdGpWBqIiAEF18T78HUzI9TCEn8ll6tEgmSBx6Nywrtl2gdfoyAjZlRZeqf-paLwFJOrX54JyNvKqgwEezZLzFZxK8tMM2zxyFD9XyG0qxEeMPYzy-AZwXalVNB)

The output will list a forwarding URL, which will point to your local server - find the Forwarding line and copy the host and the port there

![Obtaining host and port](https://lh3.googleusercontent.com/dVeEcTtO1YKpOVOI03X-XMO-u2CiDx6XNmZnfYzyYdhgTnc\_6QqbSvIvCbprV2DsZqLaxyxOLkBeslNnI8R1O-Q-nxgDeOTuMAr\_c\_gciZfx0n8Hz0z4PXG2qaUvx7sMCt8roOcF)

Next, navigate UI Bakery - **Connect Datasource**

* Select your data source and specify the copied host and port together with the other database details
* Click **Test Connection** to ensure that the connection can be established
* In case of success, **Connect Datasource**

![Specifying connection details](https://lh3.googleusercontent.com/f6s60wejzbKsxyXRO1wEbjRefe-QIaBhvsx-YbFZgcAykCi3XM0EsnIRJR4SjrE1PvBo2yI3fZYcUvahU8Jx0GCwoEpDD\_wrKlI\_Hfz\_KE2m2RWcgdmHUbPDtEgcGePkh7HuRt\_v)
