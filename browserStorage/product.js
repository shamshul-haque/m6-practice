const addProduct = () => {
  const productField = document.getElementById("product");
  const quantityField = document.getElementById("quantity");

  const product = productField.value;
  const quantity = quantityField.value;

  productField.value = "";
  quantityField.value = "";

  showProduct(product, quantity);
  saveToLocalStorage(product, quantity);
};

const showProduct = (product, quantity) => {
  const ul = document.getElementById("container");
  const li = document.createElement("li");
  li.innerText = `${product} : ${quantity}`;
  ul.appendChild(li);
};

const getStoredCart = () => {
  const storedCart = localStorage.getItem("cart");
  let cart = {};
  if (storedCart) {
    cart = JSON.parse(storedCart);
  }
  return cart;
};

const saveToLocalStorage = (product, quantity) => {
  const cart = getStoredCart();
  cart[product] = quantity;
  const cartStringified = JSON.stringify(cart);
  localStorage.setItem("cart", cartStringified);
};

const displayFromLocalStorage = () => {
  const savedCart = getStoredCart();
  for (const product in savedCart) {
    const quantity = savedCart[product];
    showProduct(product, quantity);
  }
};
displayFromLocalStorage();
