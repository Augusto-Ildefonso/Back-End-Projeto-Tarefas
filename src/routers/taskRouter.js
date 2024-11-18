import express from "express";
import {createTask, updateTask, deleteTask, returnTasks} from "../controllers/taskController.js";
import auth from "../middleware/auth.js";

const router = express.Router();
export default router;

router.post('/create', auth, (req, res) => {createTask(req, res)});

router.post('/update', auth, (req, res) => {updateTask(req, res)});

router.delete('/delete/:login', auth, (req, res) => {deleteTask(req, res)});

router.get('/:login', auth, (req, res) => {returnTasks(req,res)});