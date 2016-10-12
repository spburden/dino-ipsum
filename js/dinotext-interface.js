$(document).ready(function(){
  $("form").submit(function(event){
    event.preventDefault();
    var words = $("#words").val();
    var paragraphs = $("#paragraphs").val();
    $.get('http://dinoipsum.herokuapp.com/api/?format=html&words=' + words + '&paragraphs=' + paragraphs).then(function(response) {
      console.log(JSON.stringify(response));
      $("#some-awesome-container").append(response);
    });
  });
});
