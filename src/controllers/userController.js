import User from '../db/models/user.js';

const Create = async (req, res) => {
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
        console.log('Usuário cadastrado');
        res.status(201).send({login: user.email});
    }
}

const Login = async (req, res) => {
    try{
        let user = await User.findByCredentials(req.body.login, req.body.password);
        if(!user) return res.status(404).json({message: "Crendenciais Erradas"});


        const token = user.generateAuthToken();
        console.log("Login Efetuado!")
        return res.status(200).send({token, login: user.email});
    } catch(err){
        res.status(500).json({error: err});
    }
}

const Update = async (req, res) => {
    try {
        let user = await User.findByCredentials(req.body.email, req.body.password);
        user.name = req.body.name;
        user.date = req.body.date;
        user.password = req.body.newpassword;
        await user.save();
        const token = user.generateAuthToken();
        console.log('Atualizando Usuário!')
        return res.status(200).send({token, login: user.email});
    } catch(err){
        return res.status(500).json({error: err});
    }
}

const Delete = async (req, res) => {
    try {
        const login = req.params.login;
        console.log(login);
        const isEmail = login.includes('@');
        await User.deleteOne(isEmail ? {email: login} : {cpf: login})
        console.log('Usuario deletado');
        return res.status(204).json({message: "Usuário Deletado"})
    } catch(err){
        return res.status(500).json({error: err});
    }
}

export default {Create, Login, Update, Delete};