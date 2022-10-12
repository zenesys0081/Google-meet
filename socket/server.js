import io from 'socket.io-client';

const SOCKET_URL = 'http://localhost:3000/';

class wsServers {
  initalizedSocket = async () => {
    try {
      this.socket = io(SOCKET_URL, {
        transports: ['webSocket'],
      });

      this.socket.on('connected', data => {
        console.log('user is connected ..');
      });

      this.socket.on('disconnected', data => {
        console.log('user is disconnected..');
      });

      this.socket.on('error', error => {
        console.log('socket error..', error);
      });
    } catch (error) {
      console.log('socket error ==> ', error);
    }
  };

  emit(userEvent, data = []) {
    this.socket.emit(userEvent, data);
  }

  on(userEvent, cb) {
    this.socket.on(userEvent, cb);
  }

  removeListener(dataName) {
    this.socket.removeListener(dataName);
  }
}

const socketServices = wsServers();
export default socketServices;
