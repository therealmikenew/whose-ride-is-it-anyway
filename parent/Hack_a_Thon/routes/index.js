const { Router } = require("express");
const controllers = require("../controllers");
const router = Router();

// router.get("/", (req, res) => res.send("This is root!"));

// router.post("/", controllers.createPark);

router.get("/", controllers.getAllParks);

router.get("/rides/:id", controllers.getParkById);

router.put("/rides/:id", controllers.updatePark);

router.delete("/rides/:id", controllers.deletePark);

module.exports = router;
