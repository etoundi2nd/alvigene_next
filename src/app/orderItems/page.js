"use client";

import OffCanvas from "../components/orders/offCanvas";
import { useEffect } from "react";
import { useSearchParams } from "next/navigation";

export default async function OrderItems() {
  // parse data to display the order items
  const searchParams = useSearchParams();
  useEffect(() => {
    // Make sure the code runs on the client side
    const data = searchParams.get("data");
    if (data) {
      const parsedData = JSON.parse(decodeURIComponent(data));
      sessionStorage.setItem("data", JSON.stringify(parsedData));
      console.log(sessionStorage.getItem("data"));
    }
  }, [searchParams]); // The table includes searchParams to run useEffect when parameters change

  return <OffCanvas infoOrderItem={sessionStorage.getItem("data")} />;
}
