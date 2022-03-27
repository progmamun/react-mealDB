import React from 'react';

const OrderList = props => {
  const { orders } = props;

  let count = 0;
  for (const meal of orders) {
    count = count + meal.quantity;
  }
  return (
    <div>
      <h2>Order List</h2>
      <h4>Items Ordered: {orders.length}</h4>
    </div>
  );
};

export default OrderList;
