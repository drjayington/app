# TODO List #

 - I completed all of the task
 - I spent about half day completing the task
 - I made the assumption not spend alot of time on the backend. 
 - I assumed to keep a simple design for the frontend and not add in extra complexity and time such as accessability, eventual consistency of data, caching/ offline data, unit tests, e-to-e tests and performance tuning. 
 - I have designed a simple backend rest api to expose a get and put for retreiving and upserting the data
 - For the frontend design I choose a simple component based design. I avoid splitting the components up to much to avoid prop drilling in order to avoid extra state manage. I looked to split the components based on there functionality and reuse. I used story book to give me confidence in my various use cases forthe components. I kept global state out of the components in order to make the easier to reason about. I set up some top level styling for common html elements for reuse and ability to easily skin the app if needed. I used hooks as it is the newer flavour of react and prehaps simplar to understand and use. 


## prequist ##

ensure node is installed see https://nodejs.org/en, I am using node V16.15.1 

## todo mock server ##

I am going to treat the backend like a test server (minimal effort) as iam applying to the frontend job. 

### how to run ### 
    - open a command prompt/ terminal
    - navigate to the 'todoMockServer' directory
    - type 'npm i' into the command prompt and press enter, this will install the dependencies for the project
    - type 'npm run build' into the command prompt and press enter, this will transpile the Typescript to Javascript
    - type 'npm run start' into the command prompt and press enter, this will run the server
    - the mock server should now be running, you can either run the end points in the browser or by using the app.

### API ###

to test run the follow commands:

- to get
    curl http://localhost:8080/list
- the following command will put a value into the todo list
    curl -X PUT http://localhost:8080/list/1?isComplete=false&&description="zx"
    - replace the value of 1 with 6 will return a error (for testing) 

## todo list app ##

- `npm run start`
Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.\
The page will reload if you make edits.\
You will also see any lint errors in the console.

- `npm run storybook`
Runs storybook.