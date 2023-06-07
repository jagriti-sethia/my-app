import React, { createContext, useReducer, useState } from "react";
import {initialOrder, orderReducer} from "../Reducer/orderreducer";

export const OrderContext = createContext();

const OrderProvider = ({ children }) => {

  const [orderState, orderDispatch] = useReducer(orderReducer, initialOrder);
  const [couponValue, setCouponValue] = useState({ couponName: "", value: 0 });

  const [order, setOrder] = useState({});

  return (
    <OrderContext.Provider
      value={{
        orderHistory: orderState?.orderHistory,
        addressDetails: orderState.addressDetails,
        priceDetails: orderState.priceDetails,
        orderDispatch,
        couponValue,
        setCouponValue,
        
      }}
    >
      {children}
    </OrderContext.Provider>
  );
};

export default OrderProvider;