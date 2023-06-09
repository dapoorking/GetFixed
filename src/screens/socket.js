import {io} from 'socket.io-client';
let socket;

export const initiateSocketConnection = apiEndpoint => {
  socket = io('http://192.168.43.32:4001/task');
  console.log(`Connecting socket...`);
};

export const disconnectSocket = () => {
  console.log('Disconnecting socket...');
  if (socket) socket.disconnect();
};

export const socketEmitHandler = ({eventName, data}) => {
  socket.emit(eventName, data);
};

export const socketOnHandler = (eventName, cb) => {
  socket.on(eventName, cb);
};
