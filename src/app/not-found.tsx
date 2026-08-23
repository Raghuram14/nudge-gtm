import { Button } from "@/components/ui/button";
import { ROUTES } from "@/config/routes";

export default function NotFound(): React.ReactElement {
  return (
    <main id="main" className="mx-auto w-full max-w-6xl px-4 py-24">
      <h1 className="text-3xl font-semibold">Page not found</h1>
      <p className="mt-4 text-muted">That URL is not part of the public Antarang site.</p>
      <div className="mt-6">
        <Button href={ROUTES.home}>Back to home</Button>
      </div>
    </main>
  );
}
