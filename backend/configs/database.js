const { Sequelize } = require("sequelize");

const sequelize = new Sequelize("SA-Homework", "sa", "My_P@ssw0rd!", {
    host: "localhost",
    dialect: "mssql",
    logging: (msg) => console.log(`[Sequelize] ${msg}`),
    dialectOptions: {
        options: {
            trustServerCertificate: true, 
        },
    },
});

module.exports = sequelize;
