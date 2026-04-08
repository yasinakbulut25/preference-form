"use client";

import { Button } from "@heroui/react";

function SubmitButton({ children, ...props }) {
  return (
    <Button
      type="submit"
      className="w-max mx-auto text-base px-6 py-3 mt-10 h-auto text-white font-bold bg-linear-to-r from-color-primary to-color-primary-dark rounded-full"
      {...props}
    >
      {children}
    </Button>
  );
}

export default SubmitButton;
