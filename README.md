# MaxWay

const apiUrl = 'https://dummyapi.com/api/products';

// Fetch products from API
async function fetchProducts() {
  const response = await fetch(apiUrl);
  const products = await response.json();
  return products;
}

// Display products with pagination
function displayProducts(products, page=1, limit=20) {
  const startIndex = (page - 1) * limit;
  const endIndex = startIndex + limit;
  const paginatedProducts = products.slice(startIndex, endIndex);

  const productList = document.getElementById('product-list');
  productList.innerHTML = '';

  paginatedProducts.forEach(product => {
    const productEl = document.createElement('div');
    productEl.classList.add('product');
    productEl.innerHTML = `
      <h3>${product.name}</h3>
      <p>${product.description}</p>
      <p>Price: $${product.price}</p>
      <button class="add-to-cart" data-id="${product.id}">Add to Cart</button>
    `;
    productList.appendChild(productEl);
  });

  // Add event listener to Add to Cart buttons
  const addToCartButtons = document.querySelectorAll('.add-to-cart');
  addToCartButtons.forEach(button => {
    button.addEventListener('click', () => {
      const productId = button.dataset.id;
      addToCart(productId);
    });
  });
}

// Filter products by name or description
function filterProducts(products, query) {
  return products.filter(product => {
    const nameMatch = product.name.toLowerCase().includes(query.toLowerCase());
    const descMatch = product.description.toLowerCase().includes(query.toLowerCase());
    return nameMatch || descMatch;
  });
}

// Add product to cart
function addToCart(productId) {
  // Implement your own cart logic here
}

// Main function
async function main() {
  let products = await fetchProducts();
  displayProducts(products);

  // Add event listener to Search button
  const searchButton = document.getElementById('search-button');
  searchButton.addEventListener('click', () => {
    const query = document.getElementById('search-input').value;
    products = filterProducts(products, query);
    displayProducts(products);
  });

  // Add event listener to Next and Previous buttons
  let currentPage = 1;
  const limit = 20;
  const totalPages = Math.ceil(products.length / limit);
  const prevButton = document.getElementById('prev-button');
  const nextButton = document.getElementById('next-button');

  prevButton.addEventListener('click', () => {
    if (currentPage > 1) {
      currentPage--;
      displayProducts(products, currentPage);
    }
  });

  nextButton.addEventListener('click', () => {
    if (currentPage < totalPages) {
      currentPage++;
      displayProducts(products, currentPage);
    }
  });
}

main();
