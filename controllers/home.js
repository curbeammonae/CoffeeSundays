const Order = require('../models/Order')



module.exports = {
    getIndex: (req,res)=>{
        res.render('index.ejs')
    },


//POST REQUEST//
createOrder: async (req, res)=>{
    try{
//todo(database).create(create new document) ->adds document to our database
//this matches our schemma -> todo: req.body.todoItem(retrieved  from 'POST method form /createToDo' in ejs file), completed: false
        await Order.create({
            name: req.body.name,
            drink: req.body.drink,
            milk: req.body.milk,
            allergies: req.body.allergies,
            completed:false,


})
        console.log('Todo has been added!')
        res.redirect('/')
    }catch(err){
        console.log(err)
    }
}

}