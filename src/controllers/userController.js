import User from '../models/user.js';

export const accountLogin = async (req, res) => {
    try{
        const login = req.params.login.split('=')[1];
        const isEmail = login.includes('@');
        const user = await User.findOne(isEmail ? {email: login} : {cpf: login}).select("+password");
        const password = req.params.password.split('=')[1];


        if(!user) return res.status(401).json({message: "Usuário não encontrado"});

        if(password === user.password){
            res.status(200).json({message: "Acesso Permitido"})
        }
    } catch(err){
        res.status(500).json({error: err});
    }
}

export const accountCreate = async (req, res) => {
    const user = new User({
        cpf: req.body.cpf,
        email: req.body.email,
        name: req.body.name,
        date: req.body.date,
        password: req.body.password,
    });

    await user.save();

    res.status(201).send({user});
}