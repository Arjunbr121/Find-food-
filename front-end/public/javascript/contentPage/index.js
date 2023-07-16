import {foodItem} from "./foodItems.js";

/* console.log(foodItem); */

function displayItem(){
    var biryani=document.getElementById('Biryani');
    var South_Indian_Dishes=document.getElementById('SouthIndianDishes');
    var Chinese_Food=document.getElementById('ChineseFood');
    var Fast_Food=document.getElementById('FastFood');


    const biryaniData= foodItem.filter(item=> item.category == 'Biryani');
    const South_Indian_Dishes_Data= foodItem.filter(item=> item.category == 'SouthIndianDishes');
    const Chinese_Food_Data= foodItem.filter(item=> item.category == 'ChineseFood');
    const Fast_Food_Data= foodItem.filter(item=> item.category == 'FastFood');
   /*  console.log(biryaniData);
    console.log(South_Indian_Dishes_Data);
    console.log(Chinese_Food_Data); */
    /* console.log(Fast_Food_Data); */

    biryaniData.map(item=>{
        var itemCard = document.createElement('div');
        itemCard.setAttribute('id','item-card');

        var cardTop = document.createElement('div');
        cardTop.setAttribute('id', 'card-top');
        
        var star = document.createElement('i');
        star.setAttribute('class', 'fa fa-star');
        star.setAttribute('id', 'rating');
        star.innerText= ' '+ item.rating;

        var heart = document.createElement('i');
        heart.setAttribute('class', 'fa fa-heart-o add-to-cart');
        heart.setAttribute('id', item.id);
       
        cardTop.appendChild(star);
        cardTop.appendChild(heart);

        var img=document.createElement('img');
        img.src=item.img;

        var itemName=document.createElement('p');
        itemName.setAttribute('id','item-name');
        itemName.innerText = item.name;

        var itemPrice=document.createElement('p');
        itemPrice.setAttribute('id','item-price');
        itemPrice.innerText = 'Price : $ '+ item.price;

       itemCard.appendChild(cardTop);
       itemCard.appendChild(img);
       itemCard.appendChild(itemName);
       itemCard.appendChild(itemPrice);

       biryani.appendChild(itemCard);
         
    })
    South_Indian_Dishes_Data.map(item=>{
        var itemCard = document.createElement('div');
        itemCard.setAttribute('id','item-card');

        var cardTop = document.createElement('div');
        cardTop.setAttribute('id', 'card-top');
        
        var star = document.createElement('i');
        star.setAttribute('class', 'fa fa-star');
        star.setAttribute('id', 'rating');
        star.innerText= ' '+ item.rating;

        var heart = document.createElement('i');
        heart.setAttribute('class', 'fa fa-heart-o add-to-cart');
        heart.setAttribute('id', item.id);
       
        cardTop.appendChild(star);
        cardTop.appendChild(heart);

        var img=document.createElement('img');
        img.src=item.img;

        var itemName=document.createElement('p');
        itemName.setAttribute('id','item-name');
        itemName.innerText = item.name;

        var itemPrice=document.createElement('p');
        itemPrice.setAttribute('id','item-price');
        itemPrice.innerText = 'Price : $ '+ item.price;

       itemCard.appendChild(cardTop);
       itemCard.appendChild(img);
       itemCard.appendChild(itemName);
       itemCard.appendChild(itemPrice);

       South_Indian_Dishes.appendChild(itemCard);
         
    })
    Chinese_Food_Data.map(item=>{
        var itemCard = document.createElement('div');
        itemCard.setAttribute('id','item-card');

        var cardTop = document.createElement('div');
        cardTop.setAttribute('id', 'card-top');
        
        var star = document.createElement('i');
        star.setAttribute('class', 'fa fa-star');
        star.setAttribute('id', 'rating');
        star.innerText= ' '+ item.rating;

        var heart = document.createElement('i');
        heart.setAttribute('class', 'fa fa-heart-o add-to-cart');
        heart.setAttribute('id', item.id);
       
        cardTop.appendChild(star);
        cardTop.appendChild(heart);

        var img=document.createElement('img');
        img.src=item.img;

        var itemName=document.createElement('p');
        itemName.setAttribute('id','item-name');
        itemName.innerText = item.name;

        var itemPrice=document.createElement('p');
        itemPrice.setAttribute('id','item-price');
        itemPrice.innerText = 'Price : $ '+ item.price;

       itemCard.appendChild(cardTop);
       itemCard.appendChild(img);
       itemCard.appendChild(itemName);
       itemCard.appendChild(itemPrice);

       Chinese_Food.appendChild(itemCard);
       
         
    })
    Fast_Food_Data.map(item=>{
        var itemCard = document.createElement('div');
        itemCard.setAttribute('id','item-card');

        var cardTop = document.createElement('div');
        cardTop.setAttribute('id', 'card-top');
        
        var star = document.createElement('i');
        star.setAttribute('class', 'fa fa-star');
        star.setAttribute('id', 'rating');
        star.innerText= ' '+ item.rating;

        var heart = document.createElement('i');
        heart.setAttribute('class', 'fa fa-heart-o add-to-cart');
        heart.setAttribute('id', item.id);
       
        cardTop.appendChild(star);
        cardTop.appendChild(heart);

        var img=document.createElement('img');
        img.src=item.img;

        var itemName=document.createElement('p');
        itemName.setAttribute('id','item-name');
        itemName.innerText = item.name;

        var itemPrice=document.createElement('p');
        itemPrice.setAttribute('id','item-price');
        itemPrice.innerText = 'Price : $ '+ item.price;

       itemCard.appendChild(cardTop);
       itemCard.appendChild(img);
       itemCard.appendChild(itemName);
       itemCard.appendChild(itemPrice);

      
       Fast_Food.appendChild(itemCard);
       
         
    })
}
displayItem();

const categoryListData=[...new Map(foodItem.map(item=>
    [item['category'],item])).values()];
console.log(categoryListData);

function categoryLists(){
    var categoryList = document.getElementById('category-list');

    categoryListData.map(item=> {
        var listCard = document.createElement('div');
        listCard.setAttribute('class','list-cards');

        var listImg = document.createElement('img');
        listImg.src = item.img;

        var listName = document.createElement('a');
        listName.setAttribute('class','list-name');
        listName.innerText = item.category;
        listName.setAttribute('href','#'+ item.category);

        listCard.appendChild(listImg);
        listCard.appendChild(listName);

        var cloneListcard = listCard.cloneNode(true);
        categoryList.appendChild(listCard);
        

    })
}
categoryLists();

document.querySelectorAll('.add-to-cart').forEach(item=>{
    item.addEventListener('click',addToCart);
})

var cartData = [];

function addToCart(){
    console.log(this.parentNode.nextSibling.nextSibling);
    var itemToAdd =this.parentNode.nextSibling.nextSibling.innerText;
    var itemObj = foodItem.find(element => element.name == itemToAdd);

    console.log(itemObj);
    var index = cartData.indexOf(itemObj);
    if(index === -1){
        document.getElementById(itemObj.id).classList.add('toggle-heart');
        cartData = [...cartData,itemObj];
        console.log(cartData);
    }
    else if(index > -1){
        alert('Addded to cart');
    }

    document.getElementById('cart-plus').innerText = ' '+ cartData.length +' Items' ;
    //document.getElementById('m-cart-plus').innerText = ' '+ cartData.length +'Items';
    totalAmount();
    cartItems();
}

function cartItems(){
    var tablebody = documnet.getElementById('table-body');
    tablebody.innerHTML = '';

    cartData.map(item=> {
        var tableRow = document.createElement('tr');

        var rowData1 = document.createElement('td');
        var img = document.createElement('img');
        img.src = item.img;
        rowData1.appendChild(img);

        var rowData2 = document.createElement('td');
        rowData2.innerText = item.name;

        var rowData3 = document.createElement('td');
        var btn1 = documnet.createElement('button');
        btn1.setAttribute('class','decrease-item');
        btn1.innerHTML = '-';
        var span = document.createElement('span');
        span.innerText = item.quantity;

        var btn2 = documnet.createElement('button');
        btn2.setAttribute('class','increase-item');
        btn2.innerText = '+';

        rowData3.appendChild(btn1);
        rowData3.appendChild(span);
        rowData3.appendChild(btn2);

        var rowData4 = document.createElement('td');
        rowData4.innerText = item.price;

        tableRow.appendChild(rowData1);
        tableRow.appendChild(rowData2);
        tableRow.appendChild(rowData3);
        tableRow.appendChild(rowData4);

        tablebody.appendChild(tableRow);
    })

    document.querySelectorAll('.increase-item').forEach(item => {
        item.addEventListener('click', incrementItem);
    })
    document.querySelectorAll('.decrease-item').forEach(item => {
        item.addEventListener('click', decrementItem);
    })
}



function incrementItem(){
    let itemToInc = this.parentNode.previousSibling.innerText;
    console.log(itemToInc);

    var incObj = cartData.find(element => element.name == itemToInc);
    incObj.quantity+=1;

    currPrice = (incObj.price*incObj.quantity - incObj.price*(incObj.quantity-1))/(incObj.quantity-1);
    incObj.price = currPrice*incObj.quantity;
    totalAmount();
    cartItems();

}

var currPrice = 0;


function decrementItem(){
    let itemToDec = this.parentNode.previousSibling.innerText;
    var decObj = cartData.find(element => element.name == itemToDec);
    let ind = cartData.indexOf(decObj);
    if(decObj.quantity > 1){
        currPrice = (decObj.price*decObj.quantity - decObj.price*(decObj.quantity-1))/(decObj.quantity);
        decObj.quantity-=1;
        decObj.price = currPrice*decObj.quantity;

    }
    else {
        document.getElementById(decObj.id).classList.remove('toggle-heart')
        cartData.splice(ind,1);
        document.getElementById('cart-plus').innerHTML = ' ' + cartData.length + ' Items';
        document.getElementById('m-cart-plus').innerHTML = ' ' + cartData.length;

        if(cartData.length < 1 && flag){
            document.getElementById('food-items').classList.toggle('food-items');
            document.getElementById('category-list').classList.toggle('food-items');
         /*    document.getElementById('m-cart-plus').classList.toggle('m-cart-toggle'); */
            document.getElementById('cart-page').classList.toggle('cart-toggle');
            /* document.getElementById('category-header').classList.toggle('toggle-category'); */
            document.getElementById('checkout').classList.toggle('cart-toggle');
            flag = false;
            alert("Currently no item in cart! ");
        
        }
    }
    totalAmount();
    cartItems();
}
function totalAmount(){
    var sum=0;
    cartData.map(item =>{
        sum+= item.price;
    })
    document.getElementById('total-item').innerText = 'Total Item : '+ cartData.length;
    document.getElementById('total-price').innerText = 'Total Price : $ '+ sum;
    document.getElementById('m-total-amount').innerText = 'Total Price : $ '+ sum;
}
document.getElementById('cart-plus').addEventListener('click',cartToggle);
//document.getElementById('m-cart-plus').addEventListener('click',cartToggle);

var flag =false;
function cartToggle(){
    if(cartData.length>0){
            document.getElementById('food-items').classList.toggle('food-items');
            document.getElementById('category-list').classList.toggle('food-items');
            /*document.getElementById('m-cart-plus').classList.toggle('m-cart-toggle'); */
            document.getElementById('cart-page').classList.toggle('cart-toggle');
            /* document.getElementById('category-header').classList.toggle('toggle-category'); */
            document.getElementById('checkout').classList.toggle('cart-toggle');
            flag = true;
    }
    else{
        alert("Currently no limit in cart!");
    }
}
