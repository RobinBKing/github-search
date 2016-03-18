// Front-end User interface (jquery) code goes in this file
//require backend js
var githubApiData = require('./../js/githubData.js').githubApiData;
var errorMsg = equire('./../js/githubData.js').errorMsg;

//interface
$(document).ready(function() {
  $("form.information").submit(function(event) {
    event.preventDefault();
    $('#githubApiData').html('<div id="loader"><img src="img/loader.gif" alt="loading..."></div>');

    var newUserName = $('#userName').val();//= daneden
    newUserData = githubApiData(newUserName);
    console.log(newUserData);
    if(errorMsg !== "Not Found" || newUserName !== '') {
      var outhtml = '<h2>'+fullname+' <span class="smallname">(@<a href="'+profileurl+'" target="_blank">'+username+'</a>)</span></h2>';
      outhtml = outhtml + '<div class="ghcontent"><div class="avi"><a href="'+profileurl+'" target="_blank"><img src="'+aviurl+'" width="80" height="80" alt="'+username+'"></a></div>';
      outhtml = outhtml + '<p>Followers: '+followersnum+' - Following: '+followingnum+'<br>Repos: '+reposnum+'</p></div>';
      outhtml = outhtml + '<div class="repolist clearfix">';

      if(repositories.length == 0) { outhtml = outhtml + '<p>No repos!</p></div>'; }
      else {
        outhtml = outhtml + '<p><strong>Repos List:</strong></p> <ul>';
        $.each(repositories, function(index) {
          outhtml = outhtml + '<li><a href="'+repositories[index].html_url+'" target="_blank">'+repositories[index].name + '</a></li>';
        });
        outhtml = outhtml + '</ul></div>';
      }
      $('#ghapidata').html(outhtml);
    }
    else {
      $('#githubApiData').html("<h2>No User Info Found</h2>");
    } // end else statement
  });
});
