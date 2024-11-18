import Task from "../db/models/task.js";

export const createTask = async (req, res) => {
    const task = new Task({
        email: req.body.email,
        name: req.body.name,
        date: req.body.date,
        time: req.body.time,
        description: req.body.description,
        status: req.body.status,
    })

    await task.save();
    res.status(200).send({task: task});
};

export const updateTask = async (req, res) => {
    const task = await Task.findOne({email: req.body.email, name: req.body.name});

    if (!task) {
        res.status(404).json({message: 'Tarefa Não Encontrada'});
    } else {
        task.name = req.body.name;
        task.date = req.body.date;
        task.time = req.body.time;
        task.description = req.body.description;
        task.status = req.body.status;

        await task.save();

        res.status(200).json({task});
    }
};

export const deleteTask = async (req, res) => {
    try{
        const login = req.params.login.split('=')[1];
        const name = req.body.name;
        await Task.deleteOne({email: login, name:name});
        res.status(200).json({message: "Tarefa Deletada"});
    } catch (error) {
        res.status(500).json({error: error});
    }
}

export const returnTasks = async (req, res) => {
    const login = req.params.login.split('=')[1];

    const tasks = await Task.find({email: login});

    res.status(200).json({tasks});
}
