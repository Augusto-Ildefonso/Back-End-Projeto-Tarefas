import mongoose from 'mongoose';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';

const userSchema = new mongoose.Schema({
    cpf: {
        type: String,
        required: true,
        trim: true,
    },
    email: {
        type: String,
        required: true,
        trim: true,
    },
    name: {
        type: String,
        required: true,
        trim: true,
    },
    date: {
        type: String,
        required: true,
        trim: true,
    },
    password: {
        type: String,
        required: true,
        trim: true,
        minlength: 8,
    },
})

userSchema.methods.generateAuthToken = function () {
    const user = this;
    const token = jwt.sign({_id: user._id.toString()}, 'projetoTrainee')
    return token;
}

userSchema.statics.findByCredentials = async function (login, password) {
    const isEmail = login.includes('@');
    const user = await this.findOne(isEmail ? {email: login} : {cpf: login});
    const isMatch = await bcrypt.compare(password, user.password);
    if(!isMatch) return undefined;

    return user;
}

userSchema.pre('save', async function (next) {
    const user = this;

    if(user.isModified('password')){
        user.password = await bcrypt.hash(user.password, 8);
    }
    next();
})

const User = mongoose.model('User', userSchema);
export default User;