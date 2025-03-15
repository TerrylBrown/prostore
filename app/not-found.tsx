"use client";
import React from "react";
import { APP_NAME } from "@/lib/constants";
import Image from "next/image";
import { Button } from "@/components/ui/button";

const NotFoundPage = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      <Image
        src="/images/logo.svg"
        alt={`${APP_NAME} logo`}
        width={48}
        height={48}
      />
      <div className="p-6 w-1/3 rounded-lg shadow-md text-center">
        <h1 className="text-3xl font-bold mb-4">
          <p className="text-destructive">Cound not find requested page</p>
          <Button
            variant="outline"
            className="mt-4 ml-2"
            onClick={() => (window.location.href = "/")}
          >
            Go back to home
          </Button>
        </h1>
      </div>
    </div>
  );
};

export default NotFoundPage;
