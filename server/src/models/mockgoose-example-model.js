import mongoose from 'mongoose';

const Schema = mongoose.Schema;

const MockgooseExampleSchema = new Schema({
  name: { type: String, required: true },
  emailAddress: { type: String },
});

// export like this to prevent OverwriteModelError during integration tests
export default mongoose.models.MockgooseExampleModel || mongoose.model('MockgooseExampleModel', MockgooseExampleSchema);
