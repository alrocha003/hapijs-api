'use strict';

import Hapi from '@hapi/hapi';
import routes from '../src/routes/routes.js';

const PORT = 3000;
const server = Hapi.server({
    port: PORT,
    host: 'localhost'
});

server.route(routes.Get);
server.route(routes.Post);
server.route(routes.Put);
server.route(routes.Delete);

server.start();
console.log(`Server running at port: ${server.info.uri}`);


process.on('unhandledRejection', (err) => {
    console.error(err);
    process.exit(1);
});