import moongose from "mongoose";

const messageSchema = new moongose.Schema({
  senderId: {
    type: moongose.Schema.Types.ObjectId,
    ref: "User",
    required: true,
  },
  receiverId: {
    type: moongose.Schema.Types.ObjectId,
    ref: "User",
    required: true,
  },
  text: {
    type: String,
  },
  video: {
    type: String,
  },
  photo:{
    type: String,
  }
},{timestamp:true}); // createdAt 

const Message = new moongose.Model('Message', messageSchema);
export default Message;