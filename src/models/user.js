import mongoose from 'mongoose';

const UserSchema = new mongoose.Schema({
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
    },
})

const User = mongoose.model('User', UserSchema);
export default User;