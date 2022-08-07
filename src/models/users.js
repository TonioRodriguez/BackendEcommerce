const mongoose = require('mongoose');
const bcrypt = require('bcryptjs')
const uniqueValidator = require('mongoose-unique-validator');
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

UserSchema.plugin(uniqueValidator, { message: 'Email already exists' });

UserSchema.pre('save', function (next) {
  console.log('-------antes---------')
  console.log(this.email, this.password)
  console.log('-------------------')
  const hasdhedPassword = bcrypt.hashSync(this.password, 12)
  console.log('-------despues--------')
  console.log(this.email, this.password)
  console.log('-------------------')
  this.password = hasdhedPassword
  next()
})

const UserModel = model('users', UserSchema)

module.exports = UserModel