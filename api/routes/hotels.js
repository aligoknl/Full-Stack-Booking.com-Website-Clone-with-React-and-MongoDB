import express from "express";
import {
  createHotel,
  deleteHotel,
  getHotel,
  getHotels,
  updateHotel,
  countByCity,
  countByType,
} from "../controllers/hotel.js";
const router = express.Router();

router.get("/", getHotels);

router.post("/", createHotel);

router.put("/:id", updateHotel);

router.delete("/:id", deleteHotel);

router.get("/find/:id", getHotel);

router.get("/countByCity", countByCity);

router.get("/countByType", countByType);

export default router;
