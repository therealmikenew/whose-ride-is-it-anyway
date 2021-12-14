const { Router } = require('express');
const controllers = require('../controllers')
const router = Router();

router.get('/', (req, res) => res.send('This is root!'))

router.post('/rides', controllers.createPark)

router.get('/rides', controllers.getAllParks)

router.get('/rides/:id', controllers.getParkById)

router.put('/plants/:id', controllers.updatePark)

router.delete('/plants/:id', controllers.deletePark)

module.exports = router;