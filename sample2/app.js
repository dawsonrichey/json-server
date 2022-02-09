async function getProducts() {
    let url = 'https://fakestoreapi.com/products';
    try {
        let res = await fetch(url);
        return await res.json();
    } catch (error) {
        console.log(error);
    }
}

async function renders() {
    let products = await getProducts();
    let html = '';

    products.map(product => {
        let htmlSegment = `

        <div class="product">
        <h2>${product.title}</h2><br>
            <img src="${product.image}" >

        <span> ${product.category}
        ${product.price} 
     ${product.description}</span>
      </div>`;
        html += htmlSegment;
    });

    let container = document.querySelector('.container');
    container.innerHTML = html;
}

renders();