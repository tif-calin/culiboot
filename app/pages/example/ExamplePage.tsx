import type { Route } from "./+types/ExamplePage";
import SITE from "~/config/site";

export const meta: Route.MetaFunction = () => [
  { title: `Example | ${SITE.title}` },
  { name: "description", content: "An example page." },
];

const ExamplePage = () => {
  return <div>i.e.</div>;
};

export default ExamplePage;
