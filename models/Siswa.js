const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema({
  sekolah: {
    type: String,
    required: [true, "Silahkan isikan nama sekolah"],
  },
  nama: {
    type: String,
    required: [true, "Silahkan isikan nama siswa"],
  },
  nis: {
    type: String,
    required: [true, "Silahkan isikan nis siswa"],
  },
  nisn: {
    type: String,
    required: [true, "Silahkan isikan nisn siswa"],
  },
  alamat: {
    type: String,
    required: [true, "Silahkan isikan alamat siswa"],
  },
});

module.exports = mongoose.model("Siswa", UserSchema);
