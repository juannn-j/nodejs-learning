import mongoose from 'mongoose'
import config from '../config.js'

const connection = mongoose.connect(
  `mongodb://${config.db.user}:${config.db.password}@${config.db.host}:${config.db.port}/${config.db.database}?authSource=admin`
).then(() => {
  console.log("conexion exitosa")
}).catch((err) => {
  console.log("error al conectarse", err)
})

export default connection;
