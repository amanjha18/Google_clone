## Google Clone
In this project, I created Google clone(https://google.com) in which I had added auto-suggestions feature to try to complete the input data given by the user.
I had mainly completed the backend part of the code, in which I had downloaded the auto-searches from https://trends.google.com and then added to mysql database. After that, I had created API endpoints to come-up with suggestions of the required input from the database.

## Requirements
### Installation process

You need to download the `package.json` file to add required dependencies. <br>
If you're using Linux-based system, just make the clone and type the following commands on your terminal.

`sudo npm init` to add package.json file to your project.

The following command will let you install the express, fs and mysql dependencies to your system.

```
sudo npm install express fs mysql --save 
```

### How to Run

Just navigate to the `api.js` file in your project, and type `node api.js` to start the server. <br>
Next, open your browser and type, http://localhost:8000/trend/(your_input) to get the required data.
