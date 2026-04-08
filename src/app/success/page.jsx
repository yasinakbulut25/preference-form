"use client";

import { Suspense } from "react";
import SuccessContent from "./SuccessContent";
import { Spinner } from "@heroui/react";

export default function Success() {
  return (
    <Suspense fallback={<Spinner size="lg" />}>
      <SuccessContent />
    </Suspense>
  );
}
