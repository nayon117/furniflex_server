const { Schema, model } = require("mongoose");

const BookingSchema = new Schema(
  {
    userName: {
      type: String,
    },
    userEmail: {
      type: String,
    },
    userImage: {
      type: String,
    },
    name: {
      type: String,
    },
    price: {
      type: Number,
    },
    image: {
      type: String,
    },
    description: {
      type: String,
    },
    productId: {
      type: String,
    },
    transactionId: {
      type: String,
    },
    date: {
      type: Date,
    },
  },
  { versionKey: false }
);

const Booking = model("Booking", BookingSchema);
module.exports = Booking;
