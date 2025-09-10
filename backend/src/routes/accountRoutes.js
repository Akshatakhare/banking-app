import express from "express";
import { authMiddleware } from "../middleware/auth.js"; // Correct import path
import {
  createAccount,
  getAccounts,
  deposit,
  withdraw,
  transfer,
} from "../controllers/accountController.js";

const router = express.Router();

router.post("/", authMiddleware, createAccount);
router.get("/", authMiddleware, getAccounts);
router.post("/:id/deposit", authMiddleware, deposit);
router.post("/:id/withdraw", authMiddleware, withdraw);
router.post("/transfer", authMiddleware, transfer);

export default router;