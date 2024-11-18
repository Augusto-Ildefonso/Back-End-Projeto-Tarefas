import express from "express";
import {accountLogin, accountCreate} from "../controllers/userController.js";

const router = express.Router();
export default router;

router.get("/enter/:login%26:password", (req, res) => {accountLogin(req, res);});

router.post('/create', (req,res)=>{accountCreate(req,res);})