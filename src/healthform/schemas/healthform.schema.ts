import * as Mongoose from 'mongoose';

export const HealthFormSchema = new Mongoose.Schema({
  id: {
    type: Number,
  },
  businessUEN: {
    type: Number,
  },
  businessName: {
    type: String,
  },
  name: {
    type: String,
  },
  phone: {
    type: String,
  },
  email: {
    type: String,
  },
  attachments: {
    type: [],
  },
});
