const express = require("express");
const router = express.Router();
const sequelize = require("../configs/database");

const defineAccount = require("../models/Account");
const Account = defineAccount(sequelize, require('sequelize').DataTypes);

router.post("/", async (req, res) => {
  const { name, username, password, role } = req.body;
  try {
    const account = await Account.create({ name, username, password, role });
    res.status(201).json(account);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

router.get("/", async (req, res) => {
  try {
    const accounts = await Account.findAll();
    res.json(accounts);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

router.get("/:id", async (req, res) => {
  const { id } = req.params;
  try {
    const account = await Account.findByPk(id);
    if (account) {
      res.json(account);
    } else {
      res.status(404).json({ error: "Account not found" });
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

router.put("/:id", async (req, res) => {
  const { id } = req.params;
  const { name, username, password, role } = req.body;
  try {
    const account = await Account.findByPk(id);
    if (account) {
      account.name = name;
      account.username = username;
      account.password = password;
      account.role = role;
      await account.save();
      res.json(account);
    } else {
      res.status(404).json({ error: "Account not found" });
    }
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

router.delete("/:id", async (req, res) => {
  const { id } = req.params;
  try {
    const account = await Account.findByPk(id);
    if (account) {
      await account.destroy();
      res.json({ message: "Account deleted successfully" });
    } else {
      res.status(404).json({ error: "Account not found" });
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

module.exports = router;
