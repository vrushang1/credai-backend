import * as Mongoose from 'mongoose';

export const HealthFormSchema = new Mongoose.Schema({
  businessUEN: {
    type: String,
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
