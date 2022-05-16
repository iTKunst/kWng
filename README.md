

# kWngFull

kWng simplifies and accelerates development for Angular5 applications.  

iTKunst created and released its first RAD tool for jQuery - kWjs (kunstWerk)  6-7 years ago.   It is very similar in design to ReactJS. We then spent the next 4-5 years developing with Angular.  Over those years we evolved our strategies and techniques for Angular and eventually crafted our second RAD tool - kWng (kunstWerk for Angular).   We are currently completing conversion to TypeScript and Angular 5.  It has dependencies on Angular Material.  

kWng supports the very powerful concept of Dynamic Full-Application Templating  (FAT).  Anything that may change is automatically loaded from json files at run time: Examples include APIs, Models, Views...

With very little effort one can get CRUD functionality right out of the box.  Think of it as Ruby on Rails for SPAs � with the power of Angular.

## Features of kWng include:
* Dynamic configuration of Apis and Data Models
* Dynamic configuration of Views
* Support for multi-tennancy
* Support for Application state (logon, logoff, register, retrieve pwd ...)
* Support for dyamic loading of component state (similar to redux-injector) 
* Comprehensive tracing for debugging and quick development
* Combined development and test framework
* Support for Currencies, Languages and Timezones
* Support for Auth0 authentication and tokens
* Support for Authorization
* Support for Optimistic publishing, Automatic Retries, Cancellation
* Support for Application Caching
* And much more...

It has a lot of complexity built into it.

It will transform data types.  i.e. in MySQL, a boolean is returned as number.  If you code the model as a true boolean, it will automatically convert the number to boolean.  And it will try to force it.  Lets say it comes back as a string, the framework will try to convert it to a boolean anyways.  And the same thing goes for sending data to the server. And if finally it is unable to convert it. It will tell you.

One of the difficulties in SPA development is in state change ordering. There is a setting in /src/assets/bootstrap.json called bShouldTrace.  If you set this to true, you will see the states as they change in the order as they change.  This allows one  to see the "flow " of the application.  It is extremely useful for debugging and understanding.

Currently, the code is set up to load all bootstrap data from json files.  However the logic is in place to allow most bootstrap data to be updated via Ajax calls.  This means that bootstrap data could be stored in a SQL database and updated from an admin portal.  This functionality could also be exposed to the customer, to allow a certain level of customization.  (i.e. right now we are loading the available timezones, currencies and languages. )

kWng utilizes a strategy where the code is architected in such as way, as it tells you what you need to do next.  The architecture is "aware".   The code tells you what you need to do.  Very similar to test-driven design, but it is embedded in the "live" architecture.

As an example, if you add controllers and services for a new API and you start the application, you will see errors in Chrome's dev console. i.e:

dlAssocCtrlApi ::load() api for [ associate ] is not provided.

What this is telling you is that the "associate" API is coded, but there does not exist an entry in the Apis.json file for it yet.  It still needs to be added. You may see similar messages refering to missing "mdls" and missing "views".

It does not completely eradicate the need for tests, but it does provide a high level of certainty as to the quality of the code.  For complex algorithmic code unit tests should be done, but really only in that case.  It does strongly lessen the need to write unit tests for the apis - particularly when resources or time do not allow it.

If you look at the code in the App folder, you will see many folders and files, however, there is very little code in those files.  They are simply gluing the states and services together.  There is not much coding taking place because most of the code is in kWng.  The process is essentially a simple automatic process of copying, pasting and renaming.  In the near future a CLI will be created to handle. Study the state folders and you will see this very clearly.  The comp folder will also look like this

Views are first created specifically in terms of the API calls. Again this is done to ensure that The APIs work - for ease of testing. There is very little code in those files.  They are simply gluing the states and services to the views.  The strategy used is to create a view for each API with three different components: the create view, the update view and the full display view.  These are the visual lego bricks.  Once these bricks are created, specific views can then be built from these blocks. (i.e. a creation wizard)  In the near future a CLI will be created to create these components.


## Build Docker base image
run `./baseBuild.sh`

## Build Docker image
run `./build.sh`

## Run Docker image
run `./run.sh`

##debug app while in container
run `./debug.sh`

##node-saas problem
exit docker
run `npm rebuild node-sass --force`
run `./run.sh`
This should resolve it

##build release while in container
run `./release.sh`

##To clear all docker artifacts
run `./erase.sh`

##To view all docker artifacts
run `./view.sh`

##to rename files globally on linux 
run `rename s/oldname/newname/ *`
