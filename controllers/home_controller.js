const Todo = require('../models/todo_schema');

module.exports.home = function(req,res){
   Todo.find({}, function(err, todo){
        if(err){
            console.log("error");
            return;
        }
        return res.render('home', {
            todo_list : todo
        });
    })
}

// for add the todo list item
module.exports.addTask = function(req,res){
    Todo.create(req.body, function(err,list){
        if(err){
            console.log('error');
            return;
        }
        console.log("*****",list);
    })
    return res.redirect('back');
}

// for delete the todo list item
module.exports.delete = function(req,res){
    var keyCount = Object.keys(req.body).length;
      console.log(keyCount);
    for(let i=0; i<keyCount; i++){
        Todo.findByIdAndDelete(Object.keys(req.body)[i],function(err){
            if(err){
                console.log("error");
                return;
            }
        });
}
      return res.redirect('/');
}