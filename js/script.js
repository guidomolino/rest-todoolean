// GOAL: replicare quanto visto a lezione sulla todo-list permettendo all'utente di leggere tutti i task inseriti, inserirne di nuovi, eliminare quelli vecchi

function getList () {

  $.ajax({
    url: "http://157.230.17.132:3019/todos",
    method: "GET",
    success: function(data){

      stampList(data);

    },
    error: function(request, state, error) {
      console.log(state);
      console.log(request);
      console.log(error);
    }
  })
}

function stampList(data) {
  var target = $("#todoList");
  target.text('');
  for (var i = 0; i < data.length; i++) {
    var task = data[i];
    target.append(`<li>${task.text} - <span data-id="${task.id}" class="delete"><b>X</b></span></li>`);
  }
}

function addListener() {

  var target = $('#add');
  target.click(addTask);

}

function addTask() {

  var target = $('#inputList');
  var newTask = target.val();

  $.ajax({
    url: "http://157.230.17.132:3019/todos",
    method: "POST",
    data: {
      text: newTask
    },
    success: function(data){

      getList();

    },
    error: function(request, state, error) {
      console.log(state);
      console.log(request);
      console.log(error);
    }
  })

  target.val("");

}

function removeListener() {

  $(document).on('click', '.delete', removeTask);

}

function removeTask() {

  var target = $(this);
  var id = target.data('id');

  $.ajax({
    url: `http://157.230.17.132:3019/todos/${id}`,
    method: "DELETE",
    success: function(data){

      getList();

    },
    error: function(request, state, error) {
      console.log(state);
      console.log(request);
      console.log(error);
    }
  })

}

function init() {
  getList();
  addListener();
  removeListener();
}

$(document).ready(init);
