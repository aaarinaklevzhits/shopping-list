/* Новые элементы должны добавляться в список по нажатию на Enter */
/* Пустые элементы не должны добавляться */
/* Если кликнуть на элемент списка, он зачеркивается */
/* Если кликнуть повторно уже на зачеркнутый, он снова становится обычным */
/* Очищать input после добавления нового элемента в список */

const itemContainer = document.querySelector('.groceries');
const itemInput = document.querySelector('#input');

itemInput.addEventListener('keydown', function(event) {
    const newItem = document.createElement('div');
    newItem.classList.add('item');
    const itemText = itemInput.value;
    newItem.textContent = itemText;

    newItem.addEventListener('click', function() {
        newItem.classList.toggle('done');
    });


    if (event.key == 'Enter' && itemText !== '') {
        itemContainer.append(newItem);

        itemInput.value = '';

    }
});