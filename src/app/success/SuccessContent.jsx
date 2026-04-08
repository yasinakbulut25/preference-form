"use client";

import { useEffect } from "react";
import Link from "next/link";
import { useSearchParams, useRouter } from "next/navigation";
import { motion } from "framer-motion";
import {
  ArrowLeft12Filled,
  CheckmarkCircle16Filled,
} from "@fluentui/react-icons";

export default function SuccessContent() {
  const searchParams = useSearchParams();
  const router = useRouter();

  const id = searchParams.get("id");

  useEffect(() => {
    if (!id) {
      router.replace("/");
    }
  }, [id, router]);

  if (!id) return null;

  return (
    <main className="min-h-screen flex flex-col items-center justify-center p-4">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        className="max-w-md w-full bg-white rounded-3xl shadow-sm border border-border-default p-10 flex flex-col items-center text-center"
      >
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{
            delay: 0.2,
            type: "spring",
            stiffness: 200,
            damping: 15,
          }}
          className="w-24 h-24 bg-color-primary/20 rounded-full flex items-center justify-center mb-6"
        >
          <CheckmarkCircle16Filled
            strokeWidth={2.5}
            className="w-12 h-12 text-color-primary"
          />
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
        >
          <h1 className="text-3xl font-bold text-color-primary mb-4">
            Thank You!
          </h1>

          <p className="text-slate-500 mb-8 text-sm sm:text-base">
            Your preferences have been successfully saved. We have received your
            information and will tailor your experience accordingly.
          </p>

          <Link
            href="/"
            className="group flex items-center justify-center gap-2 bg-color-primary text-white px-8 py-3.5 rounded-full font-bold transition-all active:scale-95"
          >
            <ArrowLeft12Filled className="w-4 h-4 transition-transform group-hover:-translate-x-1" />
            Return to Home
          </Link>
        </motion.div>
      </motion.div>
    </main>
  );
}
