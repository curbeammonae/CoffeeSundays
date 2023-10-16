const order = document.querySelectorAll('span.not')//span elements with the class of 'not'
const orderComplete = document.querySelectorAll('span.completed')//span elements with the class of 'complete'

Array.from(order).forEach((el)=>{
    el.addEventListener('click', markComplete)
//give all these elements the function of 'markComplete' when clicked
})

Array.from(orderComplete).forEach((el)=>{
    el.addEventListener('click', markIncomplete)
//give all these elements the function of 'markIncomplete' when clicked
})



async function markComplete(){
//grabs that item by the _id (use parent node to go up from the 'span' to the 'li') *unique id*
    const orderId = this.parentNode.dataset.id
    try{
	//connect to the server via the controllers folder(todos/markComplete)
        const response = await fetch('dash/markComplete', {
						
            method: 'put', //PUT REQUEST
            headers: {'Content-type': 'application/json'},
            body: JSON.stringify({
                'orderIdFromJSFile': orderId 
            })
        })
        const data = await response.json()
        console.log(data)

        location.reload()//reload the page after this function runs
    }catch(err){
        console.log(err)
    }
}

async function markIncomplete(){
//grabs that item by the _id (use parent node to go up from the 'span' to the 'li') *unique id*
    const orderId = this.parentNode.dataset.id
    try{
	//connect to the server via the controllers folder(todos/markIncomplete)
        const response = await fetch('dash/markIncomplete', {
            method: 'put',
            headers: {'Content-type': 'application/json'},
            body: JSON.stringify({
                'orderIdFromJSFile': orderId 
            })
        })
        const data = await response.json()
        console.log(data)
        location.reload()
    }catch(err){
        console.log(err)
    }
}