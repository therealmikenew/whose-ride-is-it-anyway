const { Router } = require("express");
const controllers = require("../controllers");
const router = Router();
//works? lol why dont routes work - JV
// router.get("/", (req, res) => res.send("This is root!"));



//ok ok for project
router.get("/", controllers.getAllParks);
//ok for project
router.post("/", controllers.createPark);




// for later- slug part not working because of dark-magic -JV
// router.get("/:id", controllers.getParkById);

// router.put("/rides/:id", controllers.updatePark);

// router.delete("/rides/:id", controllers.deletePark);

module.exports = router;
