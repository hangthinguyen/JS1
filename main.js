console.log($)

document.querySelector('form').addEventListener('submit', function (e) {
    //prevent the normal submission of the form
    e.preventDefault();

    //******************************************************** JQUERY

    const input = $('#todo-input');

    /**
     * Create a new list item.
     */
    const newTodoListItem = `<p>${input.val()}</p>`;

    /**
     * Add new item from previous step to the todo list.
     */
    $('#todo-list').append(newTodoListItem);

    /**
     * Clear input value afteer successfully adding the todo item to the todo list.
     */
    input.val('');

        // ****************************************************** VANILLA JS

    /**
     * Create a new list item.
     */
    // const newTodoListItem = document.createElement('p');
    // const input = document.getElementById('todo-input');
    // const value = document.createTextNode(input.value);
    // newTodoListItem.appendChild(value)

    /**
     * Add new item from previous step to the todo list.
     */
    // const list = document.getElementById('todo-list');
    // list.appendChild(newTodoListItem)

    /**
     * Clear input value afteer successfully adding the todo item to the todo list.
     */
    // input.value = '';
});