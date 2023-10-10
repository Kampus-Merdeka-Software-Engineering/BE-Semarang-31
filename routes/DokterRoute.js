// untuk APi  get,post buat table 
import express from "express";
import { 
  createDokter,
  getAllDokterfromUser,
  getDokters

 } from "../controllers/DokterController.js";


const router = express.Router();

router.post('/dokters', createDokter);
router.get('/dokters/:dokter_id', getAllDokterfromUser);
router.get('/dokter', getDokters);



export default router;