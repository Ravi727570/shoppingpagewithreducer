// firebase/cartApi.js

const BASE_URL = "https://shoppingpageexpense-default-rtdb.firebaseio.com/";

export const fetchCartDataFromFirebase = async () => {
  const response = await fetch(`${BASE_URL}/cart.json`);
  if (!response.ok) {
    throw new Error("Failed to fetch cart data from Firebase");
  }
  const data = await response.json();
  return data;
};

export const sendCartDataToFirebase = async (cart) => {
  const response = await fetch(`${BASE_URL}/cart.json`, {
    method: "PUT",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      items: cart.items,
      totalQuantity: cart.totalQuantity,
    }),
  });

  if (!response.ok) {
    throw new Error("Failed to send cart data to Firebase");
  }

  return await response.json();
};
