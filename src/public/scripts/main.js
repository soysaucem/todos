const todoItemTemplate = (title, description) => `
  <div class="todo-item card">
    <div class="card-body">
      <h5 class="card-title">${title}</h5>
      <p class="card-text">${description}</p>
    </div>
  </div>`;

function addTodo(event) {
  event.preventDefault();

  const title = $('#todoTitle').val();
  const description = $('#todoDescription').val();

  fetch('/api/todos', {
    method: 'post',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      title,
      description,
    }),
  }).then(() => {
    $('.container').append(todoItemTemplate(title, description));
    resetTodoForm();
  });
}

function resetTodoForm() {
  $('#todoTitle').val('');
  $('#todoDescription').val('');
}

$(document).ready(() => {
  $.get('api/todos', (data) => {
    $.each(data, (index, value) => {
      $('.container').append(todoItemTemplate(value.title, value.description));
    });
  });
});
