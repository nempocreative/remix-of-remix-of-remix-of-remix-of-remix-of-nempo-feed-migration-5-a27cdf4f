import { createFileRoute, redirect } from "@tanstack/react-router";

export const Route = createFileRoute("/nempo-mou/$")({
  beforeLoad: () => {
    throw redirect({ to: "/nempo-mou" });
  },
});
