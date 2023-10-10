import Dokter from "../models/DokterModel.js";

export const createDokter =  async (req, res) => {
    try {
        await Dokter.create(req.body);
        res.status(201).json({msg: "Dokter Created"});
    } catch (error) {
        res.send(error.message);
    }
};

export const getAllDokterfromUser =  async (req, res) => {
    try {
      const dokters = await Dokter.findAll({
          where: {dokter_id: req.params.dokter_id}
      });

      res.status(200).json(dokters);
    } catch (error) {
        res.send(error.message);
    }
};

export const getDokters = async (req, res) => {
    try {
      const dokters = await Dokter.findAll(); 
  
      res.status(200).json(dokters);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  };