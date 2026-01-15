import { type RouteConfig, index, route, layout } from "@react-router/dev/routes";

export default [
	index("routes/home.tsx"),
  layout("dashboard/layout.tsx", [
    route("dashboard/overview", "dashboard/overview.tsx"),
    route("dashboard/settings", "dashboard/settings.tsx"),
    route("/*", "dashboard/notFound.tsx"),
  ],
),

] satisfies RouteConfig;
