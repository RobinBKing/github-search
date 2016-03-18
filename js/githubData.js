/* functional backend code goes in this file */
var apiKey = require('./../.env').apiKey;
var userName; //= daneden
var requestUri  = 'https://api.github.com/users/' + username + '?access_token=' + apiKey;
var repositoryUri  = 'https://api.github.com/users/' + username + '/repos?access_token=' + apiKey;
var errorMsg;

exports.ghApiData = function(newUserName){
  userName = newUserName;
  $.get(requestUri).then(function(response){
    console.log(response);
    githubUser(response);
  }).fail(function(error){
    console.log(error.responseJSON.message);
    errorMsg = error.responseJSON.message;
  });
  $.getJSON(repositoryUri, function(json){
    if(repositories.length == 0) { outhtml = outhtml + '<p>No repos!</p></div>'; }
    else {
      outhtml = outhtml + '<p><strong>Repos List:</strong></p> <ul>';
      $.each(repositories, function(index) {
        outhtml = outhtml + '<li><a href="'+repositories[index].html_url+'" target="_blank">'+repositories[index].name + '</a></li>';
      });
      outhtml = outhtml + '</ul></div>';
    }


    GitRepository(json);
  });
};

var  GithubUser = function(json){
  this.userName     = json.login;
  this.fullName     = json.name;
  if(this.fullName == undefined) { this.fullName = this.userName; }
  this.avitarUrl    = json.avatar_url;
  this.profileUrl   = json.html_url;
  this.location     = json.location;
  this.followersNbr = json.followers;
  this.followingNbr = json.following;
  this.reposNbr     = json.public_repos;
  this.repositories = [];
};

var GitRepository = function(json){

}
