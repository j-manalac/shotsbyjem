//The following code is for the slideshow
var slideNum = 1;
showSlides(slideNum);

// eslint-disable-next-line no-unused-vars
//this function is called within the index.html file
function plusSlides(n) {
  showSlides((slideNum += n));
}
//When prev button is clicked, go to next slide
document.querySelector('.prev').addEventListener('click', function() {
  plusSlides(-1);
});

//When next button is clicked, go to next slide
document.querySelector('.next').addEventListener('click', function() {
  plusSlides(1);
});
function showSlides(n) {
  var slides = document.getElementsByClassName('mySlides');
  if (n > slides.length) {
    slideNum = 1;
  }
  if (n < 1) {
    slideNum = slides.length;
  }
  for (let i = 0; i < slides.length; i++) {
    slides[i].style.display = 'none';
  }
  const slide = slides[slideNum - 1];
  if (slide) {
    slide.style.display = 'block';
  }
}
//The previous code is for the slideshow

//Array of photo objects
const photos = [
  {
    name: 'Ghost Mantis Reflection',
    category: 'Insects',
    price: 40,
    image: 'images/GhostMantisShadows1.jpg',
    description: 'A male ghost mantis looking at its reflection'
  },
  {
    name: 'Ghost Mantis',
    price: 40,
    category: 'Insects',
    image: 'images/GhostMantisShadows3.jpg',
    description: 'A curious mantis looking into the distance'
  },
  {
    name: 'Orchid Mantis',
    price: 40,
    category: 'Insects',
    image: 'images/OrchidMantisShadows.jpg',
    description: 'An orchid mantis cleaning itself'
  },
  {
    name: 'Thirsty Orchid Mantis',
    price: 40,
    category: 'Insects',
    image: 'images/OrchidMantisShadows2.jpg',
    description: 'An orchid mantis drinking'
  },
  {
    name: 'Berries',
    price: 20,
    category: 'Nature',
    image: 'images/berries.jpg',
    description: 'Wild berries found in Southern Ontario'
  },
  {
    name: 'Black Agama Lizard',
    price: 30,
    category: 'Wildlife',
    image: 'images/lizard1.jpg',
    description: 'A rare black reptile found in Africa'
  },
  {
    name: 'Smooth Green Snake',
    price: 30,
    category: 'Wildlife',
    image: 'images/snake1.jpg',
    description: 'A curious green snake'
  },
  {
    name: 'Emerald Tree Boa',
    price: 30,
    category: 'Wildlife',
    image: 'images/snake2.jpg',
    description: 'A boa awaiting its next meal'
  },
  {
    name: 'Striking Green Tree Python',
    price: 30,
    category: 'Wildlife',
    image: 'images/snake3.jpg',
    description: 'A python keeping an eye on its prey'
  },
  {
    name: 'Eyelash Viper',
    price: 30,
    category: 'Wildlife',
    image: 'images/venomSnake.jpg',
    description: 'A viper found after rainfall'
  },
  {
    name: 'Snow Leopard',
    price: 30,
    category: 'Wildlife',
    image: 'images/SnowLeopard.jpg',
    description: 'A captive snow leopard cub'
  },
  {
    name: 'Milky Way',
    price: 30,
    category: 'Nature',
    image: 'images/milkyWay.jpg',
    description: 'Long exposure of the Milky Way taken in the Torrence Sky Reserve'
  }
];

//Array of side menu items
//When click these side menu items, filter the images to show
//only those where sideItems.name == photos.category
const sideItems = [
  {
    name: 'All Products'
  },
  {
    name: 'Wildlife'
  },
  {
    name: 'Insects'
  },
  {
    name: 'Nature'
  }
];
//Create side menu div
function insertSideLinks() {
  const sidebarContainer = document.querySelector('#sidebar-vv');
  //clear the container
  while (sidebarContainer.firstChild) {
    sidebarContainer.removeChild(sidebarContainer.lastChild);
  }
  //create the close button (x)
  const closeBtn = document.createElement('a');
  closeBtn.classList.add('close-button');
  closeBtn.innerHTML = '&times';
  //when this button is clicked, close the side nav menu
  closeBtn.addEventListener('click', function() {
    closeNav();
  });
  closeBtn.href = 'javascript:void(0)';
  sidebarContainer.appendChild(closeBtn);

  //create the side menu bar items
  sideItems.forEach(item => {
    const card = document.createElement('div');
    card.classList.add('sidebar-item');
    const btn = document.createElement('button');
    const btnName = document.createTextNode(item.name);
    btn.appendChild(btnName);
    btn.addEventListener('click', function() {
      filterSelection(item.name);
    });
    btn.classList.add('filter-btn');
    sidebarContainer.appendChild(btn);
  });
}

//when the hamburger for the filter categories button is clicked, the side menu nav bar will open
document.querySelector('#sidebar-title').addEventListener('click', function() {
  openNav();
});

function openNav() {
  document.querySelector('#sidebar-vv').style.width = '250px';
}

function closeNav() {
  document.querySelector('#sidebar-vv').style.width = '0';
}

//Create function to filter objects by category when that category is clicked from sidebar
function filterSelection(category) {
  document.querySelector('.filter-title').innerHTML = `Showing: ${category}`;
  var x = document.getElementsByClassName('product');
  if (category === 'All Products') {
    category = '';
  }
  //add the "show" class to filtered elements,
  //remove the "show" class from the elements
  //that are not selected
  //the "show" class has a css style to block display
  for (let i = 0; i < x.length; i++) {
    addClass(x[i], 'show');
    if (x[i].className.indexOf(category) > -1) {
      removeClass(x[i], 'show');
    }
  }
}
//show filtered elements
function addClass(element, name) {
  let arr1 = element.className.split(' ');
  let arr2 = name.split(' ');
  for (let i = 0; i < arr2.length; i++) {
    if (arr1.indexOf(arr2[i]) === -1) {
      element.className += ' ' + arr2[i];
    }
  }
}

//Hide elements that are not selected
function removeClass(element, name) {
  let arr1 = element.className.split(' ');
  let arr2 = name.split(' ');
  for (let i = 0; i < arr2.length; i++) {
    while (arr1.indexOf(arr2[i]) > -1) {
      arr1.splice(arr1.indexOf(arr2[i]), 1);
    }
  }
  element.className = arr1.join(' ');
}

//create the products container
//create each product card
//insert each product card into the container
function insertProducts() {
  const productsContainer = document.getElementById('hzjl');

  // Preload photos so that they load faster
  const photoUrls = photos.map(p => p.image);

  photoUrls.forEach(url => {
    const pload = document.createElement('link');
    pload.rel = 'preload';
    pload.href = url;
    pload.as = 'image';
    document.head.appendChild(pload);
  });

  // clear children so that when page refreshes, the previous cards are removed
  while (productsContainer.firstChild) {
    productsContainer.removeChild(productsContainer.lastChild);
  }

  // create the elements for the product
  photos.forEach(photo => {
    // create card for product
    const card = document.createElement('div');
    card.classList.add('product');
    card.classList.add(photo.category);

    // create a container for the image
    const imageContainer = document.createElement('div');
    imageContainer.classList.add('product-image-container');
    // create the image element
    const image = document.createElement('img');
    // set the image source to be the product image
    image.src = photo.image;
    //add alt attribute for each img
    image.alt = photo.name;

    // insert the image into the image container
    imageContainer.appendChild(image);

    // add the name for the product
    const name = document.createElement('div');
    name.classList.add('product-name');
    name.innerHTML = photo.name;

    // add the category for the product
    const category = document.createElement('div');
    category.classList.add('product-category');
    category.innerHTML = photo.category;
    // add the price for the product
    const price = document.createElement('div');
    price.classList.add('product-price');
    price.innerHTML = photo.price;
    // add the description for the product
    const desc = document.createElement('div');
    desc.classList.add('product-desc');
    desc.innerHTML = photo.description;
    // add elements to card for the product
    card.appendChild(imageContainer);
    card.appendChild(name);
    card.appendChild(category);
    card.appendChild(desc);
    card.appendChild(price);

    // finally, add to the products container
    productsContainer.appendChild(card);
  });
}

//when page is loaded, call the functions above
document.addEventListener('DOMContentLoaded', () => {
  insertProducts();
  insertSideLinks();
  //when page is loaded, the page defaults to showing all products
  filterSelection('All Products');
});
