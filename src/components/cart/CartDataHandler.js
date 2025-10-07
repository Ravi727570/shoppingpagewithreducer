import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { uiActions } from "../store/uislice";
import { cartActions } from "../store/cartSlice";
import {
  fetchCartDataFromFirebase,
  sendCartDataToFirebase,
} from "../firebase/cartApi";

let isInitial = true;

const CartDataHandler = () => {
  const dispatch = useDispatch();
  const cart = useSelector((state) => state.cart);

  // 🟩 Fetch data on app start
  useEffect(() => {
    const loadCartData = async () => {
      try {
        const data = await fetchCartDataFromFirebase();
        if (data) {
          dispatch(
            cartActions.replaceCart({
              items: data.items || [],
              totalQuantity: data.totalQuantity || 0,
            })
          );
        }
      } catch (error) {
        console.error(error);
        dispatch(
          uiActions.showNotification({
            status: "error",
            title: "Error!",
            message: "Fetching cart data failed!",
          })
        );
      }
    };

    loadCartData();
  }, [dispatch]);

  // 🟦 Send data whenever cart changes
  useEffect(() => {
    if (isInitial) {
      isInitial = false;
      return;
    }
    if (!cart.changed) {
      return;
    }

    const sendCartData = async () => {
      dispatch(
        uiActions.showNotification({
          status: "pending",
          title: "Sending...",
          message: "Sending cart data!",
        })
      );

      try {
        await sendCartDataToFirebase(cart);
        dispatch(
          uiActions.showNotification({
            status: "success",
            title: "Success!",
            message: "Sent cart data successfully!",
          })
        );
      } catch (error) {
        console.error(error);
        dispatch(
          uiActions.showNotification({
            status: "error",
            title: "Error!",
            message: "Sending cart data failed!",
          })
        );
      }
    };

    sendCartData();
  }, [cart, dispatch]);

  return null;
};

export default CartDataHandler;
