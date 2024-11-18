import User from '../models/user.js';

export const accountCreate = async (req, res) => {
    const user = new User({
        cpf: req.body.cpf,
        email: req.body.email,
        name: req.body.name,
        date: req.body.date,
        password: req.body.password,
    });

    const email = req.body.email;
    const existingUser = await User.findOne({email: email});

    if(existingUser) {
        res.status(400).json({message: "Usuário já existe"});
    } else{
        await user.save();
        res.status(201).send({user});
    }
}

export const accountLogin = async (req, res) => {
    try{
        const login = req.params.login.split('=')[1];
        const isEmail = login.includes('@');
        const user = await User.findOne(isEmail ? {email: login} : {cpf: login}).select("+password");
        const password = req.params.password.split('=')[1];

        if(!user) return res.status(401).json({message: "Usuário Não Encontrado"});

        if(password === user.password){
            res.status(200).json({message: "Acesso Autorizado"})
        } else{
            res.status(401).json({message: "Acesso Não Autorizado"})
        }
    } catch(err){
        res.status(500).json({error: err});
    }
}

export const accountUpdate = async (req, res) => {
    const email = req.body.email;
    const user = await User.findOne({email: email});
    user.name = req.body.name;
    user.date = req.body.date;
    user.password = req.body.password;
    await user.save();

    res.status(200).send({user});
}

export const accountDelete = async (req, res) => {
    try {
        const login = req.params.login.split('=')[1];
        const isEmail = login.includes('@');
        await User.deleteOne(isEmail ? {email: login} : {cpf: login})

        res.status(204).json({message: "Usuário Deletado"})
    } catch(err){
        res.status(500).json({error: err});
    }
}