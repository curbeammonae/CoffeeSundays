const express = require('express')
const router = express.Router()

const dashController = require('../controllers/dash')//this is the code located in our controllers folder, in our home file(this is how we run the code)



router.get('/', dashController.getOrder) //router hands the request to the      homeController and runs the method of getIndex
router.put('/markComplete', dashController.markComplete)

router.put('/markIncomplete', dashController.markIncomplete)


module.exports = router