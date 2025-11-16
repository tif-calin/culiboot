import { type RouteConfig, index, route } from "@react-router/dev/routes";

export default [
  index("pages/home/index.tsx"),
  route("example", "./pages/example/ExamplePage.tsx"),
] satisfies RouteConfig;
