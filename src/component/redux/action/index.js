//for additem for cart
export const addCart = (product) => {
  return {
    type: "ADDITEM",
    payload: product,
  };
};

//for delete for cart
export const delCart = (product) => {
  return {
    type: "DELADD",
    payload: product,
  };
};
