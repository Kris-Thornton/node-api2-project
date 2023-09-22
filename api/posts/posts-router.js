// implement your posts router here
const express = require('express');

const router = express.Router();



router.get('/', (req, res) => {
    console.log('The console is connecting')
    res.status(200).json({
        message: 'this is working ok'
    })
})
router.get('/:id', (req, res) => {

})
router.post('/', (req, res) => {

})
router.delete('/:id', (req, res) => {

})
router.put('/:id', (req, res) => {

})
router.get('/:id/messages', (req, res) => {

})



module.exports = router