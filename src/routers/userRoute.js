import express from "express";
import {accountLogin, accountCreate, accountUpdate, accountDelete} from "../controllers/userController.js";

const router = express.Router();
export default router;

router.post('/create', (req,res)=>{accountCreate(req,res);})

router.get('/login/:login%26:password', (req, res) => {accountLogin(req, res);});

router.post('/update', (req, res) =>{accountUpdate(req,res);});

router.delete('/delete/:login', (req, res) => {accountDelete(req,res);});