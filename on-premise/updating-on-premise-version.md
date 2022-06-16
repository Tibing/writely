# Updating on-premise version

Once an update to the on-premise version is available, we will notify you via email.

To update your UI Bakery on-premise version, follow the steps below:

1. Take a full backup of UI Bakery instance.
2. Download the new version archive:&#x20;

```
curl -k -L -o ui-bakery-on-premise_v2.19.1.tar.gz https://storageaccountrguib99d2.blob.core.windows.net/ui-bakery-cloud-on-premise/ui-bakery-on-premise_v2.19.1.tar.gz 
```

3\. Unpack archive to the same folder: `tar -xvf ui-bakery-on-premise_v2.19.1.tar.gz -C ui-bakery-on-premise && cd ui-bakery-on-premise`

4\. Restart the application: `docker-compose up --build -d`
