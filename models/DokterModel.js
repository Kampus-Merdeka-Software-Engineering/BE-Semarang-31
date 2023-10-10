// untuk buat tabel
import { DataTypes} from "sequelize";

import db from "../config/Database.js";

const Dokter = db.define("dokter", {
    dokter_id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    nama: {
        type: DataTypes.STRING,
    },
    jenis_kelamin: {
        type: DataTypes.STRING,
    },
    spesialis: {
        type: DataTypes.STRING,
    },
});

export default Dokter;

// if table "dokter" doesn't exits, this function creates it
(async () => {
    await db.sync();
})();