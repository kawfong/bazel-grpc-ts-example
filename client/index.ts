import {GreeterService} from "proto";
import {createPromiseClient} from "@connectrpc/connect";
import { createGrpcWebTransport } from "@connectrpc/connect-node";


const client = createPromiseClient(
    GreeterService,
    createGrpcWebTransport({
        baseUrl: "http://localhost:8080",
        httpVersion: "1.1",
    })
)

client.sayHello({name: "World"}).then((res) => {
    console.log("client");
    console.log(res.message);
});

