---
description: Create snapshots to quickly revert the changes on a dev environment
---

# Development history

During the building process, you can create snapshots. Snapshots allow you to create versions on a dev environment before introducing some major changes to your application, e.g. switching data sources or bringing new UI, etc.

#### Create a new snapshot:

1. Click the **Deployment** button in the right upper corner of the app.
2. Open **History Snapshot** tab.
3. Give a meaningful name to your snapshot and add a description if necessary.
4. Click **Create Snapshot**.

![Crating a snapshot](<../.gitbook/assets/Screenshot 2022-01-18 at 14.02.15.png>)

The list of the snapshots is available in the **Snapshots history**.

![Snapshot history](../.gitbook/assets/snapshotOpt.gif)

#### Revert to an older snapshot

If somehow you decide to restore the old snapshot, you can do it with a couple of clicks:

1. Open **Snapshots history.**
2. In the list, select the snapshot that you would like to revert to and click **Restore**.&#x20;
3. Confirm the action. Restore action will also be available in the history.

![Restoring an old version](<../.gitbook/assets/restoreOpt (1).gif>)

