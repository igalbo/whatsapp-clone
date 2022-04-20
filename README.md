# Whatsapp Clone
A messaging app built with React JS (front end), Node + Express JS (back end) and MongoDB (database), with Pusher as a realtime communication layer between the app and the database.

# Usage
Open the app and send a message:
<h3>Link: <a href="https://igalbo.github.io/whatsapp-clone/" target="_blank" rel="noopener noreferrer">Click here</a></h3>
You can send a message back (as the "other party") using a POST request to https://igal-whatsapp-server.herokuapp.com/messages/new.<br><br>
Example (JSON):<br>
{<br>
&nbsp; "message": "This is a message coming in from postman!",<br>
&nbsp; "name": "Someone else",<br>
&nbsp; "timestamp": "this will become a timestamp",<br>
&nbsp; "received": true

}

![WhatsApp-2](https://user-images.githubusercontent.com/68712178/164229697-b3ec262e-4197-4f5e-9185-00979d032f12.gif)

# Notes
This is a work in progress. Other features that can be implemented:
<ul>
  <li>Delete message functionality</li>
  <li>Add emoji</li>
  <li>Add a voice recording</li>
  <li>Attach an image/document</li>
  <li>Timestamps and "Last seen on..."</li>
  <li>All other Whatsapp features!</li>
<ul>
