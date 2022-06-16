---
description: Find out about UI Bakery data security measures
---

# Security

### Is my data stored securely on UI Bakery?

We do not store any of the data returned by your databases on our end. UI Bakery just serves as a proxy and doesn’t expose your sensitive credentials to the browser in order to prevent security breaches. We also have an on-prem version, where you can be fully in control of UI Bakery and your data by securely storing it on your own VPS (Virtual private server).

### Do you grant any security measures? Which ones?

* UI Bakery connects to your data sources only through whitelisted IPs:&#x20;

```
23.99.134.30
40.122.170.142
104.43.136.75
104.43.140.0
23.99.128.183
```

* All credentials to your data sources are encrypted
* All Cloud connections are encrypted with TLS.
* We keep detailed audit logs of all internal systems
* UI Bakery Cloud is hosted in Azure datacenters on servers that are SOC 1 and SOC 2 compliant. We also maintain data redundancy on our cloud instances via regular backups.
* For on-premise versions, we are physically unable to access any data related to your UI Bakery instance.
* Maintain an open channel of communication with security researchers to allow them to report security vulnerabilities responsibly. If you notice a security vulnerability, please email us at support@uibakery.io and we'll resolve them ASAP.

### **What data does UI Bakery store?**

We only store your usage metadata, like:

* User data (emails, authorized user accounts)
* Page Views and Page URLs
* Data source data (name, type of data source)
* Components (types of components)
* Action data (name, type of action)

&#x20;If you notice any security vulnerabilities, please email us at support@uibakery.io \
