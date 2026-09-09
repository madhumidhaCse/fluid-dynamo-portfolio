import { Suspense, lazy } from "react";
import { ClientOnly } from "./ClientOnly";

const Scene3D = lazy(() => import("./Scene3D"));

export function Lazy3D({
  variant = "hero",
  className = "",
}: {
  variant?: "hero" | "orbs";
  className?: string;
}) {
  return (
    <div className={className}>
      <ClientOnly>
        <Suspense fallback={null}>
          <Scene3D variant={variant} />
        </Suspense>
      </ClientOnly>
    </div>
  );
}
