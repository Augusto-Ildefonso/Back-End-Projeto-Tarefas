import express from "express";
import {createTask, updateTask, deleteTask, returnTasks} from "../controllers/taskController.js";

const router = express.Router();
export default router;

router.post('/create', (req, res) => {createTask(req, res)});

router.post('/update', (req, res) => {updateTask(req, res)});

router.delete('/delete/:login', (req, res) => {deleteTask(req, res)});

router.get('/:login', (req, res) => {returnTasks(req,res)});