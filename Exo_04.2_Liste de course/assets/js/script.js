const DOM = {
    INPUT_PRODUCT_NAME: document.getElementById('input-name'),
    INPUT_PRODUCT_QUANTITY: document.getElementById('input-quantity'),
    BTN_PRODUCT_ADD: document.getElementById('btn-product-add'),
    CONTAINER_RESULT: document.getElementById('container-result'),
};

const products = [];

DOM.BTN_PRODUCT_ADD.addEventListener('click', () => {

    const name = DOM.INPUT_PRODUCT_NAME.value.toUpperCase().trim();
    const quantity = DOM.INPUT_PRODUCT_QUANTITY.valueAsNumber;

    // const productAllreadyExists = products.find(p => p.name === name);
    const productAllreadyExists = products.find(function (p) { return p.name === name });

    if (productAllreadyExists) {
        productAllreadyExists.quantity += quantity;
    }
    else {
        const product = { name, quantity };
        products.unshift(product);
    }

    refreshProducts();
});

function refreshProducts() {

    DOM.CONTAINER_RESULT.innerHTML = '';

    for (const product of products) {
        const listItem = document.createElement('li');
        DOM.CONTAINER_RESULT.append(listItem);

        const productName = document.createElement('span');
        productName.textContent = product.name;

        const productQuantity = document.createElement('span');
        productQuantity.textContent = `x${product.quantity}`;

        listItem.append(productName, ' ', productQuantity);
    }

}