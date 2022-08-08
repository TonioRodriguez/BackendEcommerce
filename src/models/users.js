const mongoose = require('mongoose');
const bcrypt = require('bcryptjs')
const { Schema, model } = mongoose;


const UserSchema = new Schema({
  name: {
    type: String,
    required: [true, 'Name is required']
  },
  lastname: {
    type: String
  },
  username: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true,
    unique: true
  },
  password: {
    type: String,
    required: true
  },
}, {
  versionKey: false,
  timestamps: true
})



UserSchema.pre('save', function (next) {
  console.log('-------antes---------')
  console.log(this.email, this.password)
  const hasdhedPassword = bcrypt.hashSync(this.password, 12)
  console.log('-------despues--------')
  console.log(this.email, this.password)
  this.password = hasdhedPassword
  next()
})

const UserModel = model('users', UserSchema)

module.exports = UserModel