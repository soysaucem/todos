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
  });
}

function testUpdate(event) {
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
  });
}

function resetTodoForm() {}
