"use client"

import { useRouter } from "next/navigation";
import { useEffect } from "react";

export default function Home() {

  const router = useRouter();

  useEffect(() => {
    router.push("/dashboard")
  }, []);

  return (
    <main className="min-h-screen">
      <div className="font-roboto text-[35px] font-bold">Hello</div>
    </main>
  );
}
