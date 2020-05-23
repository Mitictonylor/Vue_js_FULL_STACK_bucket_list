# Bucket List

**SETUP**
- Client:
```
npm install
```
```
npm run serve
```
Front End will run on http://localhost:8080

- Server:
```
npm install
```
```
npm run server:dev
```

**Learning Objectives**
- Be able to use MongoDB to save data coming from API
- Be able to make POST and PUT requests from Vue client

**Brief**

You have been given a travel app which allows users to add countries to a favourites list.

Currently the countries in the bucket list are not persisted. When the server restarts the data is lost!

You have been asked to save users bucket list countries to a database and allow the users to mark countries as being visited.

The database will only store the following country details:

- Name
- Flag
- Visited (A Boolean value)
- Running the app

We have provided you with a basic app.

You can run the app with the following commands.

**MVP**

- Code the POST and PUT routes in the createRouter file in the server. Test these using insomnia.
- Modify the client code to save the country name, flag and visited (false initially) to the database when user adds a country to the Bucket list.

**Extensions**
- Add a way for the user to update the country as being visited.
- Only show the Visit button if country has not been visited
- Highlight that a country has been visited in the list in some way. (Change background colour/ text colour/add an icon)
