import { Sequelize } from "sequelize";

const db= new Sequelize("capstone-fix-be","root","@Opal2002", {
    host: "localhost",
    dialect: "mysql",
});

db.authenticate()
    .then(() => console.log("Database connected"))
    .catch((eror) => {
        console.log(`Unable to connect to database: ${error}`);
    });

export default db;