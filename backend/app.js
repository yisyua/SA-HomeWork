const express = require("express");
const sequelize = require("./configs/database");
const accountRoutes = require("./routes/account");

const app = express();
const port = 3000;

app.use(express.json());
app.use("/api/accounts", accountRoutes);

sequelize
  .sync()
  .then(() => {
    console.log("Database synced.");
    app.listen(port, () => {
      console.log(`Server running on http://localhost:${port}`);
    });
  })
  .catch((err) => console.error("Error syncing database:", err));
