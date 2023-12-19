import mongoose from 'mongoose';
const Schema = mongoose.Schema;

export const UserSchema = new Schema(
  {
    id: {
      type: String,
      required: true,
    },
    name: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
    },
    token: {
      type: String,
      required: true,
    },
    password: {
      type: String,
      required: true,
    },
    registrationDate: {
      type: Date,
      require: true,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model('User', UserSchema);
