// @generated by protoc-gen-connect-es v0.13.0 with parameter "keep_empty_files=true,target=js+dts"
// @generated from file proto/helloworld.proto (package greeter, syntax proto3)
/* eslint-disable */
// @ts-nocheck

import { HelloReply, HelloRequest } from "./helloworld_pb.js";
import { MethodKind } from "@bufbuild/protobuf";

/**
 * @generated from service greeter.GreeterService
 */
export declare const GreeterService: {
  readonly typeName: "greeter.GreeterService",
  readonly methods: {
    /**
     * @generated from rpc greeter.GreeterService.SayHello
     */
    readonly sayHello: {
      readonly name: "SayHello",
      readonly I: typeof HelloRequest,
      readonly O: typeof HelloReply,
      readonly kind: MethodKind.Unary,
    },
    /**
     * @generated from rpc greeter.GreeterService.SayHelloAgain
     */
    readonly sayHelloAgain: {
      readonly name: "SayHelloAgain",
      readonly I: typeof HelloRequest,
      readonly O: typeof HelloReply,
      readonly kind: MethodKind.Unary,
    },
  }
};

