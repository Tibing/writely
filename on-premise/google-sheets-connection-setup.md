# Google Sheets connection setup

Start with creating OAuth Client ID in [Google developer console](https://console.cloud.google.com/apis/credentials). Then, follow the below steps:

1. Create a new or choose an existing project.
2. Go to **API & Services** section.
3. Click **ENABLE APIS AND SERVICES** and enable Google Sheets API.
4. Click on **Create credentials** and choose **Create OAuth client ID.**
5. Select **Web Application**.
6. Add Authorized redirect URI with value `http://YOUR_IP_OR_DOMAIN/gsheet-oauth-callback`
7. Click **Create**.
8. Set credentials in `UI_BAKERY_GSHEET_CLIENT_ID` and `UI_BAKERY_GSHEET_CLIENT_SECRET` variables.
9. Go to **OAuth consent screen** and create it with an external type.
10. Publish your consent screen.
