// Front-end User interface (jquery) code goes in this file
//require backend js
var githubApiData = require('./../js/githubData.js').githubApiData;
var errorMsg = require('./../js/githubData.js').errorMsg;

//interface
$(document).ready(function() {
  $("form.userInformation").submit(function(event) {
    event.preventDefault();
    $('#githubApiData').append('<div id="loader"><img src="img/loader.gif" alt="loading..."></div>');

    var newUserName = $('#userName').val();//= daneden
    newUserData = githubApiData(newUserName);
    console.log(newUserData.fullName);
    if(errorMsg !== "Not Found" || newUserName !== '') {
      var outhtml = '<h2>'+newUserData.fullName+' <span class="smallname">(@<a href="'+newUserData.profileUrl+'" target="_blank">'+newUserData.userName+'</a>)</span></h2>';
      outhtml = outhtml + '<div class="ghcontent"><div class="avi"><a href="'+newUserData.profileUrl+'" target="_blank"><img src="'+newUserData.avitarUrl+'" width="80" height="80" alt="'+newUserData.userName+'"></a></div>';
      outhtml = outhtml + '<p>Followers: '+newUserData.followersNbr+' - Following: '+newUserData.followingNbr+'<br>Repos: '+newUserData.reposNbr+'</p></div>';
      outhtml = outhtml + '<div class="repolist clearfix">';

      if(newUserData.repositories.length === 0) { outhtml = outhtml + '<p>No repos!</p></div>'; }
      else {
        outhtml = outhtml + '<p><strong>Repos List:</strong></p> <ul>';
        $.each(newUserData.repositories, function(index) {
          outhtml = outhtml + '<li><a href="'+newUserData.repositories[index].url+'" target="_blank">'+newUserData.repositories[index].name + '</a></li>';
        });
        outhtml = outhtml + '</ul></div>';
      }

      $('#githubApiData').append(outhtml);
    }
    else {
      $('#githubApiData').append("<h2>No User Info Found</h2>");
    } // end else statement
  });
});
