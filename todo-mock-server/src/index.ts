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

app.get('/list', ( req, res ) => {
    try{
    res.send(Array.from(todoList).map( val => { return {
         id: val[0], 
         description: val[1].description, 
         isComplete: val[1].isComplete  }
    }));}
    catch{
        console.log('get error ')
        res.status(500).send('get error');
    }
} );

app.put('/list/:id', ( req, res ) => {
    try{
        todoList.set(req.params.id, { description: req.body.description as string, isComplete: req.body.isComplete});
        res.send({id: req.params.id, description: req.body.description as string, isComplete: req.body.isComplete});
    } catch {
        console.log('put error')
        res.status(500).send('put error');
    }
} );

app.listen( port, () => {
    console.log( `server started at http://localhost:${ port }` );
} );