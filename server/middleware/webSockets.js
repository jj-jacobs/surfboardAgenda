import {io} from "../index"

var users = {};
io.on("connection", (socket) => {
  socket.emit("newUser");
  console.log("connected");
  socket.on("giveName", (data) => {
    users[Object.keys(users).length] = data;
    console.log("users", users);
    io.sockets.emit("newConnection", { data: data.name });
  });
  socket.on('newMsg', (msg)=>{
      console.log('curr', msg.user)
      io.sockets.emit('giveNewMsg', {data: msg.data, user: msg.user})
  })
});