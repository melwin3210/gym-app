import mongoose from 'mongoose';

const connectDb = async () => {
  if (mongoose.connections[0].readyState) return;

  await mongoose.connect(process.env.MONGODB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });
};

// Define a mongoose schema for the user data
const userSchema = new mongoose.Schema({
  fullName: { type: String, required: true },
  address: { type: String, required: true },
  age: { type: Number, required: true },
  gender: { type: String, required: true },
  height: { type: String, required: true },
  weight: { type: String, required: true },
});

const User = mongoose.models.User || mongoose.model('User', userSchema);

export default async function handler(req, res) {
  if (req.method === 'POST') {
    const { fullName, address, age, gender, height, weight } = req.body;

    // Connect to the database
    await connectDb();

    try {
      // Create a new user record
      const newUser = new User({
        fullName,
        address,
        age,
        gender,
        height,
        weight,
      });

      // Save the new user in the database
      await newUser.save();
      res.status(200).json({ message: 'Registration successful!' });
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: 'Error registering user.' });
    }
  } else {
    res.status(405).json({ message: 'Method Not Allowed' });
  }
}
