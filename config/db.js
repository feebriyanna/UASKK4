const mongoose = require("mongoose");

const MongoDB = async () => {
  try {
    await mongoose.connect(`mongodb://127.0.0.1:27017/paskk4febri`, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("Terhubung ke MongoDB");
  } catch (error) {
    console.error("Kesalahan koneksi MongoDB:", error.message);
    process.exit(1);
  }
};

module.exports = MongoDB;
