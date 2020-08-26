// GOAL: replicare quanto visto a lezione sulla todo-list permettendo all'utente di leggere tutti i task inseriti, inserirne di nuovi, eliminare quelli vecchi

function searchFilm(ricercaUtente, apiKey) {
  $.ajax({
    url: "https://api.themoviedb.org/3/search/movie",
    method: "GET",
    data: {
      api_key: apiKey,
      query: ricercaUtente
    },
    success: function(data, state){

      var resultsNum = data["total_results"];
      var filmList = data["results"];


      if (filmList) {

        var template = $("#film-template").html();
        var target = $("#filmList");
        var compiled = Handlebars.compile(template);

        for (var i = 0; i < filmList.length; i++) {
          var film = filmList[i];

          var vote = film["vote_average"];
          var language = film["original_language"];
          var poster = film["poster_path"];
          film.stars = starredVote(vote);
          film.flag = languageIcon(language);
          film.copertina = copertinaUrl(poster);

          var filmHTML = compiled(film);
          target.append(filmHTML);
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

}

$(document).ready(init);
