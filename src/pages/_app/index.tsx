import { createFileRoute } from "@tanstack/react-router"; 
import { Hero } from "../../components/Hero";
import { Outlet } from "../../components/Outlet";

export const Route = createFileRoute("/_app/")({
  component: RouteComponent,
});

function RouteComponent() {
  return (
    <main className="py-6">
      <Hero />
      <Outlet />
            
    </main>
  );
}
