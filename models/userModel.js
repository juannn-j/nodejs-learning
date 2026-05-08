import mongoose from 'mongoose';
const Schema = mongoose.Schema;

const userSchema = new Schema({
  nombre: String,
  apellido: String,
  email:String
});
const User = mongoose.model('User', userSchema);

export default User;
