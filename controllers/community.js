const express = require('express')
const router = express.Router()

const User = require('../models/user.js')

//EVERYTHING IS 'users/:userId/community'
router.get('/', async (req,res) => {
  const users = await User.find({})
  const pantry = users.pantry
  res.render('community/index.ejs', {users, pantry})
})

router.get('/:memberId', async (req,res) => {
  const communityUser = await User.findById(req.params.memberId)
  const communityUserPantry = communityUser.pantry
  res.render('community/show.ejs', {communityUser, communityUserPantry})
})

// router/get('/:itemId', async (req,res) => {
//   const 
// })

module.exports = router