import { createFileRoute } from "@tanstack/react-router";
import { VintexWebPage } from "../components/vintex-web-page";

export const Route = createFileRoute("/vintex-web")({ component: VintexWebPage });
