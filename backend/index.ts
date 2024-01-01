import {
    HelloReply,
    HelloRequest,
} from '@/auto_gen/helloworld_pb';

import {GreeterService} from '@/auto_gen/helloworld_connect';
import { ConnectRouter } from "@connectrpc/connect";
import http from "http";
import express from "express";
import { expressConnectMiddleware } from "@connectrpc/connect-express";

const app = express();
const routes = (router: ConnectRouter) =>
    router.service(GreeterService, {
        // implements rpc sayHello
        async sayHello(req: HelloRequest) {
            return new HelloReply({
                message: `Hello again, ${req.name}!`,
            });
        },
        async sayHelloAgain(req) {
            return new HelloReply({
                message: `Hello again, ${req.name}!`,
            });
        },
    });

app.use(expressConnectMiddleware({
    routes
}));

http.createServer(app).listen(8080);
