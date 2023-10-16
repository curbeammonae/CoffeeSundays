const Order = require('../models/Order')//using our models folder to access the file Todo.js 


module.exports = {

//GET REQUEST//
    getOrder: async (req,res)=>{
        try{
//Todo(database).find(find data in database)
//todoItems = documemts in database
            const orders = await Order.find()
//Todo(database).countDocuments(count the number of documents that have 'completed: false')
//itemsLeft = # of documents that have 'completed: false'
           // const itemsLeft = await Order.countDocuments({completed: false})

//THIS IS HOW OUR TODOS GET TO THE EJS
//WHEREVER I SEE 'todos' in ejs = todoItems
//WHEREVER I SEE 'left' in ejs = itemsLeft
																	//{ejs: ______     , ejs:_________ }
            res.render('dashboard.ejs', {orders: orders})
        }catch(err){
            console.log(err)
        }
    },

}
