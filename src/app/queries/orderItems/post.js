import { redirect } from "next/navigation";

function getCurrentUserId() {
  localStorage.getItem("currentUserId") ||
    localStorage.setItem("currentUserId", crypto.randomUUID());
  return localStorage.getItem("currentUserId");
}

// getCurrentUserId();
export default async function POST(formData) {
  // 'use server'
  const requestBody = {
    current_user_id: getCurrentUserId(),
    ...Object.fromEntries(formData.entries()),
  };
  console.log(requestBody);
  const res = await fetch("http://localhost:3001/api/v1/order_items", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "API-Key": process.env.DATA_API_KEY,
    },
    body: JSON.stringify(requestBody),
  });
  // console.log(res);
  const data = await res.json();

  // sessionStorage.setItem("data", varist);
  // console.log(sessionStorage.getItem("data"));
  //   return localStorage.getItem("data", data);
  // Encode the data to be passed in the query parameter
  const encodedData = encodeURIComponent(JSON.stringify(data));

  redirect(`/orderItems?data=${encodedData}`);
}
