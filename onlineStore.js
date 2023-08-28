import data from "./onlineStoreData.js";

let searchLine = document.querySelector('nav');
let Home = document.getElementById('products');

const goHome = document.querySelector('#home-icon');

goHome.addEventListener('click', () => {
    location.reload();
});

function createCard(element){
    let productCard = document.createElement('div');
    productCard.style.borderRadius = '15px';
    productCard.style.background = 'white';
    productCard.style.height = '360px';
    productCard.style.width = '200px';
    productCard.style.display = 'flex';
    productCard.style.flexDirection = 'column';
    productCard.style.alignItems = 'center';
    productCard.style.margin = '20px';

    let productImage = document.createElement('img');
    productImage.style.height = '50%';
    productImage.style.width = '80%';
    productImage.style.marginTop = '10px';
    productImage.src = element.image;
    productImage.addEventListener('click', () => {
        Home.replaceChildren();
        searchLine.remove();
        productPage(element.id);
    })
    productCard.appendChild(productImage);

    let buttomCard = document.createElement('div');
    buttomCard.style.background = '#ffdecb';
    buttomCard.style.height = '100%';
    buttomCard.style.width = '100%';
    buttomCard.style.marginTop = '10px';
    buttomCard.style.borderRadius = '0 0 10px 10px';
    productCard.appendChild(buttomCard);

    let titleProduct = document.createElement('h5');
    titleProduct.textContent = element.title;
    titleProduct.style.margin = '10px';
    buttomCard.appendChild(titleProduct);

    let divider = document.createElement('div');
    divider.style.margin = '15px';   
    divider.style.height = '2px';
    divider.style.width = '80%';
    divider.style.background = 'blue';
    buttomCard.appendChild(divider);

    let actions = document.createElement('div');
    actions.style.marginTop = '10px';
    actions.style.display = 'flex';
    actions.style.justifyContent = 'start';
    actions.style.alignContent = 'center';
    buttomCard.appendChild(actions);

    let trash = document.createElement('span');
    trash.innerHTML = '<i class="fa-solid fa-trash"></i>';
    trash.style.marginRight = '10px';
    trash.style.marginLeft = '10px';
    trash.classList = 'actions';
    trash.addEventListener('click', () => {
        productCard.remove();
        for (let i = 0; i < data.length; i++){
            if (element === data[i]){
                delete data[i];
            }
        }
    });
    actions.appendChild(trash);

    let edit = document.createElement('span');
    edit.innerHTML = '<i class="fa-solid fa-pen"></i>';
    edit.classList = 'actions';
    edit.addEventListener('click', () => {
        Home.replaceChildren();
        searchLine.remove();
        editProduct(element.id);
    })
    actions.appendChild(edit);

    Home.appendChild(productCard);
}

function createAllProducts(){
    data.forEach(element => {
        createCard(element);
    });
}
createAllProducts();

function categories(category){
    data.forEach(element => {
        if(category === element.category){
            createCard(element);
        }
    });
}

const allProducts = document.getElementById('All products');
allProducts.addEventListener('click', () => {
    Home.replaceChildren();
    createAllProducts();
    allProducts.style.background = '#ffdecb';
    men.style.background = '#FFBF9B';
    women.style.background = '#FFBF9B';
    jewelery.style.background = '#FFBF9B';
    electronics.style.background = '#FFBF9B';
});


const men = document.getElementById('Men');
men.addEventListener('click', () => {
    Home.replaceChildren();
    categories("men's clothing");
    allProducts.style.background = '#FFBF9B';
    men.style.background = '#ffdecb';
    women.style.background = '#FFBF9B';
    jewelery.style.background = '#FFBF9B';
    electronics.style.background = '#FFBF9B';
});

const women = document.getElementById('Women');
women.addEventListener('click', () => {
    Home.replaceChildren();
    categories("women's clothing");
    allProducts.style.background = '#FFBF9B';
    men.style.background = '#FFBF9B';
    women.style.background = '#ffdecb';
    jewelery.style.background = '#FFBF9B';
    electronics.style.background = '#FFBF9B';
});

const jewelery = document.getElementById('Jewelery');
jewelery.addEventListener('click', () => {
    Home.replaceChildren();
    categories('jewelery');
    allProducts.style.background = '#FFBF9B';
    men.style.background = '#FFBF9B';
    women.style.background = '#FFBF9B';
    jewelery.style.background = '#ffdecb';
    electronics.style.background = '#FFBF9B';
});

const electronics = document.getElementById('Electronics');
electronics.addEventListener('click', () => {
    Home.replaceChildren();
    categories('electronics');
    allProducts.style.background = '#FFBF9B';
    men.style.background = '#FFBF9B';
    women.style.background = '#FFBF9B';
    jewelery.style.background = '#FFBF9B';
    electronics.style.background = '#ffdecb';
});

const input = document.querySelector('input');
const search = document.getElementById('search');
search.addEventListener('click', () => {
    completeSearch(input.value);
});

function completeSearch(value){
    Home.replaceChildren();
    data.forEach(element => {
        if(element.title.includes(value)){
            createCard(element);
            input.value = '';
        }
    });
}

function productPage(idProduct){
    let idElement;
    data.forEach(elem => {
        if(elem.id === idProduct){
            idElement = elem;
            return;
        }
    });

    Home.style.display = 'flex';
    Home.style.flexDirection = 'column';
    Home.style.alignItems = 'center';

    const title = document.createElement('div');
    title.style.margin = '20px';
    Home.appendChild(title);

    // const arrow = document.createElement('a');
    // arrow.innerHTML = '<i class="fa-solid fa-arrow-left"></i>';
    // title.appendChild(arrow);

    // const edit = document.createElement('a');
    // edit.innerHTML = '<i class="fa-solid fa-pen"></i>';
    // title.appendChild(edit);

    // const linkHome = document.createElement('a');
    // linkHome.innerHTML = '<i id="home-icon" class="fa-solid fa-house"></i>';
    // title.appendChild(linkHome);

    const h1 = document.createElement('h1');
    h1.textContent = 'Product Page';
    h1.style.color = '#4d4d4d';
    title.appendChild(h1);

    let product = document.createElement('div');
    product.style.display = 'flex';
    product.style.border = '2px solid black';
    product.style.borderRadius = '15px';
    product.style.width = '600px';
    Home.appendChild(product);

    let productImage = document.createElement('div');
    productImage.style.background = 'white';
    productImage.style.width = '50%';
    productImage.style.borderRadius = '15px 0 0 15px';
    product.appendChild(productImage);

    let image = document.createElement('img');
    image.src = idElement.image;
    image.style.width = '100%';
    image.style.padding = '40px';
    productImage.appendChild(image);

    let productDetails = document.createElement('div');
    productDetails.style.width = '50%';
    product.appendChild(productDetails);

    let productTitle = document.createElement('h4');
    productTitle.textContent = 'Title';
    productTitle.style.marginTop = '6px';
    productDetails.appendChild(productTitle);

    let productTitleDetails = document.createElement('p');
    productTitleDetails.textContent = idElement.title;
    productTitleDetails.style.marginTop = '6px';
    productDetails.appendChild(productTitleDetails);

    let productDescription = document.createElement('h4');
    productDescription.textContent = 'Description';
    productDescription.style.marginTop = '6px';
    productDetails.appendChild(productDescription);

    let productDescriptionDetails = document.createElement('p');
    productDescriptionDetails.textContent = idElement.description;
    productDescriptionDetails.style.marginTop = '6px';
    productDetails.appendChild(productDescriptionDetails);

    let productCategory = document.createElement('h4');
    productCategory.textContent = 'Category';
    productCategory.style.marginTop = '6px';
    productDetails.appendChild(productCategory);

    let productCategoryDetails = document.createElement('p');
    productCategoryDetails.textContent = idElement.category;
    productCategoryDetails.style.marginTop = '6px';
    productDetails.appendChild(productCategoryDetails);

    let productPrice = document.createElement('h4');
    productPrice.textContent = 'Price';
    productPrice.style.marginTop = '6px';
    productDetails.appendChild(productPrice);

    let productPriceDetails = document.createElement('p');
    productPriceDetails.textContent = idElement.price;
    productPriceDetails.style.marginTop = '6px';
    productDetails.appendChild(productPriceDetails);

    let productQuantity = document.createElement('h4');
    productQuantity.textContent = 'Quantity';
    productQuantity.style.marginTop = '6px';
    productDetails.appendChild(productQuantity);

    let productQuantityDetails = document.createElement('p');
    productQuantityDetails.textContent = Math.floor(Math.random() * 30);
    productDetails.appendChild(productQuantityDetails);
}

function editProduct(idProduct){
    let idElement;
    data.forEach(elem => {
        if(elem.id === idProduct){
            idElement = elem;
            return;
        }
    });
    Home.style.display = 'flex';
    Home.style.flexDirection = 'column';
    Home.style.alignItems = 'center';

    const mainTitle = document.createElement('div');
    mainTitle.style.display = 'flex';
    mainTitle.style.justifyContent = 'center';
    mainTitle.style.alignItems = 'center';
    Home.appendChild(mainTitle);

    const textMainTitle = document.createElement('h1');
    textMainTitle.textContent = 'Edit Product'
    textMainTitle.style.padding = '20px';
    mainTitle.appendChild(textMainTitle);

    const edit = document.createElement('div');
    edit.style.display = 'flex';
    edit.style.flexDirection = 'column';
    edit.style.margin = '0 auto';
    edit.style.width = '900px';
    Home.appendChild(edit);

    const title = document.createElement('h3');
    title.textContent = 'Title';
    title.style.alignItems = 'start';
    edit.appendChild(title);

    const inputTitle = document.createElement('input');
    inputTitle.placeholder = 'Enter a title for the product';
    inputTitle.style.width = '100%';
    inputTitle.style.padding = '10px';
    edit.appendChild(inputTitle);

    const category = document.createElement('h3');
    category.textContent = 'Category';
    category.style.alignItems = 'start';
    edit.appendChild(category);

    const inputCategory = document.createElement('input');
    inputCategory.placeholder = 'Enter a category for the product';
    inputCategory.style.width = '100%';
    inputCategory.style.padding = '10px';
    edit.appendChild(inputCategory);

    const price = document.createElement('h3');
    price.textContent = 'Price';
    price.style.alignItems = 'start';
    edit.appendChild(price);

    const inputPrice = document.createElement('input');
    inputPrice.placeholder = 'Enter a price for the product';
    inputPrice.style.width = '100%';
    inputPrice.style.padding = '10px';
    edit.appendChild(inputPrice);

    const image = document.createElement('h3');
    image.textContent = 'Image URL';
    image.style.alignItems = 'start';
    edit.appendChild(image);

    const inputImage = document.createElement('input');
    inputImage.placeholder = 'Enter a URL for a product image';
    inputImage.style.width = '100%';
    inputImage.style.padding = '10px';
    edit.appendChild(inputImage);

    const quantity = document.createElement('h3');
    quantity.textContent = 'Quantity';
    quantity.style.alignItems = 'start';
    edit.appendChild(quantity);

    const inputQuantity = document.createElement('input');
    inputQuantity.placeholder = 'Enter product quantity';
    inputQuantity.style.width = '100%';
    inputQuantity.style.padding = '10px';
    edit.appendChild(inputQuantity);

    const description = document.createElement('h3');
    description.textContent = 'Description';
    description.style.alignItems = 'start';
    edit.appendChild(description);

    const inputDescription = document.createElement('input');
    inputDescription.placeholder = 'Enter a product description';
    inputDescription.style.width = '100%';
    inputDescription.style.padding = '10px';
    edit.appendChild(inputDescription);

    const buttomEdit = document.createElement('buttom');
    buttomEdit.textContent = 'EDIT';
    buttomEdit.style.padding = '10px';
    buttomEdit.style.border = '2px solid black';
    buttomEdit.style.textAlign = 'center';
    description.style.alignItems = 'start';
    buttomEdit.style.width = '10%';
    buttomEdit.style.margin = '10px';
    edit.appendChild(buttomEdit);

    buttomEdit.addEventListener('click', () => {
        data.forEach(element => {
            if (idElement === element.id){
                data[element] = {
                id: idElement,
                title: inputTitle.value,
                price: inputPrice.value,
                description: inputDescription.value,
                category: inputCategory.value,
                image: inputImage.value
                }
            }
        });
        console.log(data);
    })
}

const plus = document.querySelector('#plus-icon');
plus.addEventListener('click', () => {
    Home.replaceChildren();
        searchLine.remove();
        addProduct();
})

function addProduct(){
    Home.style.display = 'flex';
    Home.style.flexDirection = 'column';
    Home.style.alignItems = 'center';

    const mainTitle = document.createElement('div');
    mainTitle.style.display = 'flex';
    mainTitle.style.justifyContent = 'center';
    mainTitle.style.alignItems = 'center';
    Home.appendChild(mainTitle);

    const textMainTitle = document.createElement('h1');
    textMainTitle.textContent = 'Add new Product'
    textMainTitle.style.padding = '20px';
    mainTitle.appendChild(textMainTitle);

    const edit = document.createElement('div');
    edit.style.display = 'flex';
    edit.style.flexDirection = 'column';
    edit.style.margin = '0 auto';
    edit.style.width = '900px';
    Home.appendChild(edit);

    const title = document.createElement('h3');
    title.textContent = 'Title';
    title.style.alignItems = 'start';
    edit.appendChild(title);

    const inputTitle = document.createElement('input');
    inputTitle.placeholder = 'Enter a title for the product';
    inputTitle.style.width = '100%';
    inputTitle.style.padding = '10px';
    edit.appendChild(inputTitle);

    const category = document.createElement('h3');
    category.textContent = 'Category';
    category.style.alignItems = 'start';
    edit.appendChild(category);

    const inputCategory = document.createElement('input');
    inputCategory.placeholder = 'Enter a category for the product';
    inputCategory.style.width = '100%';
    inputCategory.style.padding = '10px';
    edit.appendChild(inputCategory);

    const price = document.createElement('h3');
    price.textContent = 'Price';
    price.style.alignItems = 'start';
    edit.appendChild(price);

    const inputPrice = document.createElement('input');
    inputPrice.placeholder = 'Enter a price for the product';
    inputPrice.style.width = '100%';
    inputPrice.style.padding = '10px';
    edit.appendChild(inputPrice);

    const image = document.createElement('h3');
    image.textContent = 'Image URL';
    image.style.alignItems = 'start';
    edit.appendChild(image);

    const inputImage = document.createElement('input');
    inputImage.placeholder = 'Enter a URL for a product image';
    inputImage.style.width = '100%';
    inputImage.style.padding = '10px';
    edit.appendChild(inputImage);

    const quantity = document.createElement('h3');
    quantity.textContent = 'Quantity';
    quantity.style.alignItems = 'start';
    edit.appendChild(quantity);

    const inputQuantity = document.createElement('input');
    inputQuantity.placeholder = 'Enter product quantity';
    inputQuantity.style.width = '100%';
    inputQuantity.style.padding = '10px';
    edit.appendChild(inputQuantity);

    const description = document.createElement('h3');
    description.textContent = 'Description';
    description.style.alignItems = 'start';
    edit.appendChild(description);

    const inputDescription = document.createElement('input');
    inputDescription.placeholder = 'Enter a product description';
    inputDescription.style.width = '100%';
    inputDescription.style.padding = '10px';
    edit.appendChild(inputDescription);

    const buttomAdd = document.createElement('buttom');
    buttomAdd.textContent = 'ADD';
    buttomAdd.style.padding = '10px';
    buttomAdd.style.border = '2px solid black';
    buttomAdd.style.textAlign = 'center';
    description.style.alignItems = 'start';
    buttomAdd.style.width = '10%';
    buttomAdd.style.margin = '10px';
    edit.appendChild(buttomAdd);

    buttomAdd.addEventListener('click', () => {
        data.push({
            id: data.length + 1,
            title: inputTitle.value,
            price: inputPrice.value,
            description: inputDescription.value,
            category: inputCategory.value,
            image: inputImage.value
        })
        console.log(data);
    })
}
