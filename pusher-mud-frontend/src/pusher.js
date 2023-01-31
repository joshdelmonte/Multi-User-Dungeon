import Pusher from 'pusher-js';

const socket = new Pusher('f95940f0b4976a427f4a', {
    cluster: 'us3',
    encrypted: true,
    authEndpoint: 'http://localhost:4000/pusher/auth'
});

export default socket;
