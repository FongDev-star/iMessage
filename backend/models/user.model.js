import mongose from "mongoose";

const userSchema = new mongose.Schema(
  {
    clerkId: {
      type: String,
      required: true,
      unique: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    fullName: {
      type: String,
      required: true,
    },
    profile: {
      type: String,
      default: "",
    },
  },
  { timestamp: true },
);

const User = mongose.model("User", userSchema);
export default User;
