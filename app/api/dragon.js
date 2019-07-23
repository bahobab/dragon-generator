const { Router } = require("express");

const DragonTable = require("../dragon/table");

const router = new Router();

router.get("/new", (req, res) => {
  const newDragon = req.app.locals.engine.generation.newDragon();
  DragonTable.storeDragon(newDragon)
    .then(dragonId => {
      console.log("dragonId", dragonId);
      newDragon.dragonId = dragonId;

      res.json({
        dragon: newDragon
      });
    })
    .catch(error => console.error(error));
});

module.exports = router;
