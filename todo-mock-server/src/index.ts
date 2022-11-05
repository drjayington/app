import express from 'express';
import cors from 'cors';

const app = express();

const port: number = 8080;

const todoList: Map<string, {description: string, isComplete:boolean }> = new Map([
    [ '1', {description: "set up project", isComplete: true }],
    [ '2', {description: "create component/TodoList", isComplete: true }],
    [ '3', {description: "create TaskManger page", isComplete: false }],
    [ '4', {description: "create effect to get todo list", isComplete: false }],
    [ '5', {description: "create effect to set todo list", isComplete: false }],
    [ '6', {description: "create component/NewTask", isComplete: false }],
]);

app.use(cors());
app.use(express.json());

app.get( '/list', ( req, res ) => {
    console.log('returning: ' + todoList);
    res.send(Array.from(todoList).map( val => { return {
         id: val[0], 
         description: val[1].description, 
         isComplete: val[1].isComplete  }
    }));
} );

app.put( '/list/:id', ( req, res ) => {
    if(req.params.id === '6') {
        res.status(500).send('invalid parameters');
    } else {
        console.log('upserting ' + req.params.id + ' to ' + req.body.isComplete + ' - ' + req.body.description); 
        todoList.set(req.params.id, { description: req.body.description as string, isComplete: req.body.isComplete === "true"});

        res.send(Array.from(todoList).map( val => { return {
            id: val[0], 
            description: val[1].description, 
            isComplete: val[1].isComplete  }
       }));
    } 
} );

app.listen( port, () => {
    console.log( `server started at http://localhost:${ port }` );
} );