const Todo = require("../models/todo2");

exports.getTodoById = (req, res, next, todoId) => {
  // todoId is coming from the router.param
  // .findById() method will find the todo which has id==todoId
  Todo.findById(todoId).exec((err, todo) => {
    if (err || !todo) {
      return res.status(400).json({
        error: "404 todo not found",
      });
    }
   
    next();
  });
};
exports.getAllTodos = (req, res) => {
    Todo.find()
      .sort("-createdAt")
      .exec((err, todos) => {
        if (err || !todos) {
          return res.status(400).json({
            error: "Something went wrong in finding all todos",
          });
        }
        res.json(todos);
      });
  };

  exports.getTodo = (req, res) => {
    return res.json(req.todo);
  };

  
  exports.createTodo = (req, res) => {
    const todo = new Todo(req.body);
  
    todo.save((err, task) => {
      if (err || !task) {
        return res.status(400).json({
          error: "something went wrong",
        });
      }
    
      res.json({ task });
    });
  };

  exports.updateTodo = (req, res) => {
 
    const todo = req.todo;
  
    todo.task = req.body.task;
  
    
    todo.save((err, t) => {
      if (err || !t) {
        return res.status(400).json({
          error: "something went wrong while updating",
        });
      }
      // send the updated todo as a json response
      res.json(t);
    });
  };

  exports.deleteTodo = (req, res) => {
    // take req.todo from getTodoById() middleware and
    // fetch the todo that user wants to delete
    const todo = req.todo;
    // call .remove() method to delete it
    todo.remove((err, task) => {
      if (err || !task) {
        return res.status(400).json({
          error: "something went wrong while deleting the todo",
        });
      }
      // send deleted todo and success message as a json response
      res.json({
        task_deleted: task,
        message: "Todo deleted successfully!",
      });
    });
  };
  