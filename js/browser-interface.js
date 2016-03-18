// Front-end User interface (jquery) code goes in this file
//require backend js
var ghApiData = require('./../js/githubData.js').ghApiData;

//interface
$(document).ready(function() {
  $("form.information").submit(function(event) {
    var newUserName = $('#userName').val();


  });
});
