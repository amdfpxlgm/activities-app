// Server entry point

import { server } from './apollo/server';

server.listen().then(({ url }) => console.log(`Apollo server running at ${url}`));
