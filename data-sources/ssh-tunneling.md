---
description: Connect your database via SSH tunnel
---

# SSH Tunneling

You can connect Postgres, MySQL, MSSQL, MongoDB, and other databases that are hosted under a private network via SSH tunnels.

1. Navigate **Data sources** - **Connect Data Source**. Select your database and check the **Enable SSH tunnel option**.
2. Additional details form will appear. Specify your _**bastion host**_ and _**port number -** usually this is an IP and an SSH port (22) of the server that holds the database_
3. Copy _**SSH public key**_. UI Bakery will try to connect to your bastion host with the specific private key and the username `uibakery`

![Enabling SSH option](<../.gitbook/assets/Screenshot 2021-12-13 at 18.14.41.png>)

![Copying SSH public key](<../.gitbook/assets/Screenshot 2021-12-13 at 18.51.39.png>)

To establish the tunnel, It’s necessary to configure your bastion host to allow UI Bakery to connect:

1. Create UI Bakery user (UI Bakery will connect to your bastion as this user):

```bash
# Use this command if you use Amazon Linux
sudo adduser uibakery --password NP

# Use this command if you use any other Linux/Mac
sudo adduser uibakery --disabled-password
```

2\. To allow UI Bakery to connect to your bastion create a required folder structure and store the public key in the `authorized_keys` file:

```bash
# Login as root user
sudo su

# Create the authorized_keys file if it does not exist
mkdir -p /home/uibakery/.ssh 
touch /home/uibakery/.ssh/authorized_keys 

# Set required permissions and make uibakery user an owner of this file
chmod 644 /home/uibakery/.ssh/authorized_keys
chown uibakery:uibakery /home/uibakery/.ssh/authorized_keys

# Use any text editor and insert previously copied ssh public key in authorized_keys file
vim /home/uibakery/.ssh/authorized_keys
```

Once configured, you can complete the data source connection and connect your database.

{% hint style="info" %}
The same steps apply for on-premise deployments
{% endhint %}
