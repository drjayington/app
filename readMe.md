# TODO List #

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

- `npm run test`
Launches the test runner in the interactive watch mode.

- `npm run storybook`
Runs storybook.