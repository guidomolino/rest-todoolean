// GOAL: replicare quanto visto a lezione sulla todo-list permettendo all'utente di leggere tutti i task inseriti, inserirne di nuovi, eliminare quelli vecchi

function getList () {
  $.ajax({
    url: "http://157.230.17.132:3019/todos",
    method: "GET",
    success: function(data){

        }

      }

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
}

$(document).ready(init);
