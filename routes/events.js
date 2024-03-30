// api/events

const { Router } = require("express");
const { validateJWT } = require("../middlewares/validate-jws");
const {
  getEvents,
  createEvent,
  deleteEvent,
  updateEvent,
} = require("../controllers/events");
const { check } = require("express-validator");
const { isDate } = require("../helpers/isDate");
const { fieldsValidator } = require("../middlewares/fields-validator");

const router = Router();

// Validadas por JWT
// Obtener eventos

router.use(validateJWT);

router.get("/", getEvents);

router.post(
  "/",
  [
    check("title", "El titulo es obligatorio").not().isEmpty(),
    check("start", "La fecha de inicio es obligatoria")
      .not()
      .isEmpty()
      .custom(isDate),
    check("end", "La fecha de finalizacion es  obligatorio").not().isEmpty(),

    fieldsValidator,
  ],
  createEvent
);

router.put(
  "/:id",
  [
    check("title", "El titulo es obligatorio").not().isEmpty(),
    check("start", "La fecha de inicio es obligatoria")
      .not()
      .isEmpty()
      .custom(isDate),
    check("end", "La fecha de finalizacion es  obligatorio").not().isEmpty(),
    fieldsValidator
  ],
  updateEvent
);

router.delete("/:id", deleteEvent);

module.exports = router;
