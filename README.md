# bazel-grpc-ts-example

This is a simple example of using protobuf and grpc with bazel, nodejs and typescript. This repo has 3 components, 
1. proto: Protobuf definitions and packages
2. backend: A Nodejs backend server written in typescript 
3. client: A Nodejs client written in typescript

## Setup

### Generate typescript type files

When you update the proto files, you need to run the following command to generate the typescript files.

```bash
bazel run @//proto:hello_world_ts_proto_library.copy
```

### Run the backend server

```bash
bazel run //backend:backend_server
```

### Run the client

```bash
bazel run //client:client
```