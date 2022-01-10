/* 
Создаст отдельный элемент <li>. Обзательно используй метод document.createElement().
Добавит название ингредиента как его текстовое содержимое.
Добавит элементу класс item.
После чего вставит все <li> за одну операцию в список ul.ingredients
*/



const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const ingredientsRef = document.querySelector("#ingredients");
console.log(ingredientsRef);

for(const el of ingredients) {
  const item = document.createElement('li');
  item.classList.add("item");
  item.textContent = el;
  console.log(item.textContent);
  console.log(item)
  ingredientsRef.append(item)
}
