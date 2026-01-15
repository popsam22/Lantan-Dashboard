import type { Route } from "./+types/home";
import { Welcome } from "../welcome/welcome";
import Overview from "~/dashboard/overview";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Flinx Dashboard" },
    { name: "Dashboard", content: "Welcome to React Router!" },
  ];
}

export default function Dashboard() {
  return <Overview />;
}
