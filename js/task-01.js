/* 
Посчитает и выведет в консоль количество категорий в ul#categories, то есть элементов li.item.
Для каждого элемента li.item в списке ul#categories, найдет и выведет в консоль текст заголовка элемента 
(тега <h2>) и количество элементов в категории (всех вложенных в него <li>).


Number of categories: 3

Category: Animals
Elements: 4

Category: Products
Elements: 3

Category: Technologies
Elements: 5
*/

const categoriesListRef = document.querySelector("#categories");
const categoryItemsRef = document.querySelectorAll(".item");

const numberOfCategories = categoriesListRef.children.length;

console.log("Number of categories: ", numberOfCategories);


categoryItemsRef.forEach(item => {
    const title = item.firstElementChild.textContent;
    const numberOfElements = item.lastElementChild.children.length;
    console.log("Category: ", title);
    console.log("Elements: ", numberOfElements)
})




