import socketio from 'socket.io-client';

const socket = socketio('http://192.168.100.15:3333', {
  autoCorrect: false,
});

function subscribeToNewDevs(subscriberFunction) {
  socket.on('new-dev', subscriberFunction);
}

function connect(latitude, longitude, techs) {
  socket.io.opts.query = {
    latitude,
    longitude,
    techs,
  };

  socket.connect();
}

function disconnect() {
  if (socket.connected) {
    socket.disconnect();
  }
}   

export {
  connect,
  disconnect,
  subscribeToNewDevs,
};