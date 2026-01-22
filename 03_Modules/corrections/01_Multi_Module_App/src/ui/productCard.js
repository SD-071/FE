import { getCart, updateCart } from '../storage/cartStorage.js';
import { addToCart, cartButtons } from './buttonsContainer.js';

export const createProductCard = (product, page) => {
  const cart = getCart();
  const existingProduct = cart.find((item) => product.id === item.id);

  const productCard = document.createElement('div');
  productCard.className =
    'product-card w-48 text-[10px] border border-neutral-200 bg-neutral-100 p-4 rounded shadow-md flex flex-col items-center justify-between gap-4';

  const imageContainer = document.createElement('div');
  imageContainer.className = "image-container flex items-center justify-center overflow-hidden h-48'";

  const productImage = document.createElement('img');
  productImage.src = product.image;
  productImage.alt = product.title;
  productImage.className = 'w-full self-center h-full object-contain';

  const infoContainer = document.createElement('div');
  infoContainer.className = 'info-container flex flex-col items-center';

  const productTitle = document.createElement('h2');
  productTitle.textContent = product.title;
  productTitle.className = 'product-title text-xs font-bold mb-2';

  const productPrice = document.createElement('p');
  productPrice.textContent = `$${product.price}`;
  productPrice.className = 'product-price text-green-600 font-semibold';

  imageContainer.appendChild(productImage);
  infoContainer.appendChild(productTitle);
  infoContainer.appendChild(productPrice);

  productCard.appendChild(imageContainer);
  productCard.appendChild(infoContainer);

  if (existingProduct) {
    if (page === 'cart') {
      const button = cartButtons(existingProduct, productCard);
      productCard.appendChild(button);
      return productCard;
    }
    const button = cartButtons(existingProduct);
    productCard.appendChild(button);
  } else {
    const button = addToCart(product);
    productCard.appendChild(button);
  }

  return productCard;
};
