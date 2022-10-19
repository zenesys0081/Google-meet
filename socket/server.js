import io from 'socket.io-client';

const SOCKET_URL = 'http://localhost:3000';

class WSService {
  initializeSocket = async () => {
    try {
      this.socket = io(SOCKET_URL, {
        transports: ['webSocket'],
      });

      console.log('initializing socket', this.socket);

      this.socket.on('connect', data => {
        console.log('user is connected ..');
      });

      this.socket.on('disconnect', data => {
        console.log('user is disconnected..');
      });

      this.socket.on('error', error => {
        console.log('socket error..', error);
      });
    } catch (error) {
      console.log('socket error ==> ', error);
    }
  };

  emit(userEvent, data = {}) {
    this.socket.emit(userEvent, data);
  }

  on(userEvent, cb) {
    this.socket.on(userEvent, cb);
  }

  removeListener(dataName) {
    this.socket.removeListener(dataName);
  }
}

const socketServices = new WSService();
export default socketServices;
