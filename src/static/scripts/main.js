async function addTodo(event) {
  event.preventDefault();

  const title = $('#todoTitle').val();
  const description = $('#todoDescription').val();

  console.log(title);

  return await fetch('/api/todos', {
    method: 'post',
    headers: new Headers(),
    body: JSON.stringify({
      title,
      description,
    }),
  });
}
