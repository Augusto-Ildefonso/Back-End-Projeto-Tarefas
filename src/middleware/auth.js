import jwt from 'jsonwebtoken'
import User from "../db/models/user.js";

export default async (req, res, next) => {
    try{
        const token = req.header('Authorization').replace('Bearer ', '');
        const decoded = jwt.verify(token, 'projetoTrainee');

        let user = await User.findOne({
            _id: decoded._id,
        });

        if(!user) return res.status(404).send({error: 'Não logado'})

        req.token = token;
        req.user = user;
        next();
    } catch(err){
        res.status(400).send({error: err});
    }
}