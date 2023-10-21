const express  = require('express')
const router = express.Router()

router.post('/contact', (req, res) =>{
    const {fullname, email, message} = req.body

    console.log(email+' | '+ fullname + ' | '+ message +' | ')
})

router.get('/users', (req, res) => {

})

module.exports = router