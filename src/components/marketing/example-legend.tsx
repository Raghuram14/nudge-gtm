"use client";

import { useState } from "react";

import { Button } from "@/components/ui/button";
import { Dialog } from "@/components/ui/dialog";

export function ExampleLegend(): React.ReactElement {
  const [open, setOpen] = useState(false);
  return (
    <>
      <Button variant="ghost" onClick={() => setOpen(true)}>
        How we show examples
      </Button>
      <Dialog title="These numbers are examples" open={open} onClose={() => setOpen(false)}>
        <p className="text-sm text-muted">
          Anything marked Example is illustrative. It is not a customer result.
        </p>
      </Dialog>
    </>
  );
}
