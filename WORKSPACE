workspace(name = "bazel_monorepo")

load("@bazel_tools//tools/build_defs/repo:http.bzl", "http_archive", "http_jar")

######################
# GOLANG SUPPORT
######################

http_archive(
    name = "buildifier_prebuilt",
    sha256 = "29a50ea545810dc077c408d520eb83e9de3eecfe6395e89cb07149d903fc31e5",
    strip_prefix = "buildifier-prebuilt-6.1.2",
    urls = [
        "http://github.com/keith/buildifier-prebuilt/archive/6.1.2.tar.gz",
    ],
)

load("@buildifier_prebuilt//:deps.bzl", "buildifier_prebuilt_deps")

buildifier_prebuilt_deps()

http_archive(
    name = "rules_proto_grpc",
    sha256 = "928e4205f701b7798ce32f3d2171c1918b363e9a600390a25c876f075f1efc0a",
    strip_prefix = "rules_proto_grpc-4.4.0",
    urls = ["https://github.com/rules-proto-grpc/rules_proto_grpc/releases/download/4.4.0/rules_proto_grpc-4.4.0.tar.gz"],
)

load("@rules_proto_grpc//:repositories.bzl", "rules_proto_grpc_repos", "rules_proto_grpc_toolchains")

rules_proto_grpc_toolchains()

rules_proto_grpc_repos()

load("@rules_proto//proto:repositories.bzl", "rules_proto_dependencies", "rules_proto_toolchains")

rules_proto_dependencies()

rules_proto_toolchains()

######################
# OTHER
######################

protobuf_version = "3.19.4"

protobuf_version_sha256 = "3bd7828aa5af4b13b99c191e8b1e884ebfa9ad371b0ce264605d347f135d2568"

# requirement of 'com_github_bazelbuild_buildtools'
http_archive(
    name = "com_google_protobuf",
    sha256 = protobuf_version_sha256,
    strip_prefix = "protobuf-%s" % protobuf_version,
    url = "https://github.com/protocolbuffers/protobuf/archive/v%s.tar.gz" % protobuf_version,
)

load("@com_google_protobuf//:protobuf_deps.bzl", "protobuf_deps")

protobuf_deps()

##################
# rules_ts setup #
##################

http_archive(
    name = "aspect_rules_js",
    sha256 = "7ab9776bcca823af361577a1a2ebb9a30d2eb5b94ecc964b8be360f443f714b2",
    strip_prefix = "rules_js-1.32.6",
    url = "https://github.com/aspect-build/rules_js/releases/download/v1.32.6/rules_js-v1.32.6.tar.gz",
)

http_archive(
    name = "aspect_rules_ts",
    sha256 = "8aabb2055629a7becae2e77ae828950d3581d7fc3602fe0276e6e039b65092cb",
    strip_prefix = "rules_ts-2.0.0",
    url = "https://github.com/aspect-build/rules_ts/releases/download/v2.0.0/rules_ts-v2.0.0.tar.gz",
)

http_archive(
    name = "aspect_rules_jest",
    sha256 = "d3bb833f74b8ad054e6bff5e41606ff10a62880cc99e4d480f4bdfa70add1ba7",
    strip_prefix = "rules_jest-0.18.4",
    url = "https://storage.googleapis.com/public-bazel-artifacts/js/rules_jest-v0.18.4.tar.gz",
)

load("@aspect_rules_js//js:repositories.bzl", "rules_js_dependencies")

rules_js_dependencies()

load("@aspect_rules_ts//ts:repositories.bzl", "rules_ts_dependencies")

rules_ts_dependencies(ts_version_from = "//:package.json")

load("@aspect_rules_jest//jest:dependencies.bzl", "rules_jest_dependencies")

rules_jest_dependencies()

load("@rules_nodejs//nodejs:repositories.bzl", "nodejs_register_toolchains")

nodejs_register_toolchains(
    name = "nodejs",
    node_version = "18.17.0",
)

load("@aspect_rules_js//npm:npm_import.bzl", "npm_translate_lock")

npm_translate_lock(
    name = "npm",
    npmrc = "//:.npmrc",
    pnpm_lock = "//:pnpm-lock.yaml",
    verify_node_modules_ignored = "//:.bazelignore",
)

load("@npm//:repositories.bzl", "npm_repositories")

npm_repositories()

http_archive(
    name = "aspect_rules_webpack",
    sha256 = "21a85849d01eebbd0cb0a5c0120eb58e4d3275eda68565918e7c0d84e14d30d9",
    strip_prefix = "rules_webpack-0.13.0",
    url = "https://github.com/aspect-build/rules_webpack/releases/download/v0.13.0/rules_webpack-v0.13.0.tar.gz",
)

#######################
# rules_webpack setup #
#######################

# Fetch the Bazel module dependencies

load("@aspect_rules_webpack//webpack:dependencies.bzl", "rules_webpack_dependencies")

rules_webpack_dependencies()
