// 'use client';

// function getCurrentUserId() {
//   localStorage.getItem("currentUserId") ||
//     localStorage.setItem("currentUserId", crypto.randomUUID());
//   return localStorage.getItem("currentUserId");
// }

async function onSubmit(event) {
  event.preventDefault();

  const formData = new FormData(event.currentTarget);
  // We need to get the current user id from the session
  const requestBody = {
    current_user_id: getCurrentUserId(),
    ...Object.fromEntries(formData.entries()),
  };
  console.log(requestBody);

  const response = await fetch("http://localhost:3001/api/v1/order_items", {
    headers: {
      "Content-Type": "application/json",
    },
    method: "POST",
    body: JSON.stringify(requestBody),
  });

  const data = await response.json();
  if (response.ok) {
    console.log("Order item created");

    // Open the offcanvas
  } else {
    console.log("Order item not created");
  }


  return data
}

export default onSubmit;
