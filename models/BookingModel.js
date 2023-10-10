// untuk buat tabel
import { DataTypes} from "sequelize";

import db from "../config/Database.js";

const Booking = db.define("booking", {
    booking_id: {
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
    no_hp: {
        type: DataTypes.STRING,
    },
    email: {
        type: DataTypes.STRING,
    },
    dokter: {
        type: DataTypes.STRING,
    },
    tgl_kons: {
        type: DataTypes.DATE,
    },
    pil_wkt: {
        type: DataTypes.TIME,
    }
});

export default Booking;

// if table "booking" doesn't exits, this function creates it
(async () => {
    await db.sync();
})();