import express from "express";
import UserController from "../controllers/userController.js";
import auth from "../middleware/auth.js";

const router = express.Router();
export default router;

router.post('/create', (req,res)=>{UserController.Create(req,res);})

router.post('/login', (req, res) => {UserController.Login(req, res);});

router.post('/update', auth,  (req, res) =>{UserController.Update(req,res);});

router.delete('/delete/:login', auth, (req, res) => {UserController.Delete(req,res);});