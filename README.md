https://github.com/aws/aws-sdk-js-v3/issues/3075

Install:

```bash
yarn install
```

Run:

```bash
tsc --noEmit
```

Expected error, something like:

```
index.ts:7:19 - error TS2345: Argument of type 'PutRecordsCommand' is not assignable to parameter of type 'Command<ServiceInputTypes, ServiceInputTypes, ServiceOutputTypes, ServiceOutputTypes, SmithyResolvedConfiguration<HttpHandlerOptions>>'.
Type '{}' is missing the following properties from type 'Command<ServiceInputTypes, ServiceInputTypes, ServiceOutputTypes, ServiceOutputTypes, SmithyResolvedConfiguration<HttpHandlerOptions>>': input, middlewareStack, resolveMiddleware
```

But no error is thrown. Code is transpilled successfully.
