const express = require('express')
const router = express.Router()
const { getHomepage, getABC, viewPage } = require('../controllers/homeController')

// router.Method('/route', handler)
router.get('/', getHomepage)

router.get('/abc', getABC)

router.get('/view', viewPage)

module.exports = router; //export default