---
description: >-
  Display images, PDFs and other files from your cloud storages (Dropbox, Google
  Drive, etc.)
---

# Display files from Google Drive and Dropbox

To use and display the images and files in UI Bakery from cloud storage, they need to be converted. Let's check the example of displaying images from Google Drive in the Table and a PDF file from Dropbox.

### Converting image URLs from Google Drive

To use images from Google Drive in your table, it's important to convert the link to them following the pattern:

```
https://drive.google.com/uc?id=FILE_ID
```

File\_id can be obtained from the image URL itself:

![Getting the image id from the link](<../.gitbook/assets/Screenshot 2021-11-25 at 16.56.12.png>)

Here is a sample of a resulting link: [https://drive.google.com/uc?id=1XpRlCnpAyA0\_dDBjtLFQqRdH8XxCJjA5](https://drive.google.com/uc?id=1XpRlCnpAyA0\_dDBjtLFQqRdH8XxCJjA5). This link should be included in your data source.

Please note that the link to the image will be recognized by the system as a Link field type, so in order to display the final image, change the field view type from _Link_ to _Image_.

![](../.gitbook/assets/imageOpt.gif)

### Displaying PDF files from Google Drive

To display PDFs from your Google Drive, follow the below steps:&#x20;

1. Obtain a Google Drive link to a necessary file and transform it using the pattern:

```
https://drive.google.com/uc?id=FILE_ID
```

File\_id can be obtained from the file URL itself:

![](<../.gitbook/assets/Screenshot 2021-11-12 at 13.48.36.png>)

2\. Next, [add a new action](https://docs.uibakery.io/basics/working-with-actions#creating-an-action) - **HTTP request**. Select **GET** method and specify the link into the URL field

3\. Modify the result with:

```
return {{ data.base64}}
```

![](<../.gitbook/assets/Screenshot 2021-11-25 at 17.57.05.png>)

4\. Drag **PDF Viewer** onto the working area and assign the newly created action to it.

![](../.gitbook/assets/pdfOpt.gif)

### Displaying PDF files from Dropbox

Dropbox links need to be modified in the following way:

1. Obtain a dropbox link to a necessary file - [https://www.dropbox.com/s/n2gq6ordzbhgenk/test.pdf?dl=0](https://www.dropbox.com/s/n2gq6ordzbuiynk/test.pdf?dl=0)
2. Replace [dropbox.com](http://dropbox.com/) with [dl.dropboxusercontent.com](http://dl.dropboxusercontent.com/) -> [https://www.](https://www.dropbox.com/s/n2gq6ordzbuiynk/test.pdf?dl=0)[dl.dropboxusercontent.com](http://dl.dropboxusercontent.com/)[/s/n2gq6ordzbhgenk/test.pdf?dl=0](https://www.dropbox.com/s/n2gq6ordzbuiynk/test.pdf?dl=0)
3. The received PDF link can be used in the PDF viewer component
