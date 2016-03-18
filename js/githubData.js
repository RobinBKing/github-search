/* functional backend code goes in this file */
var apiKey = require('./../.env').apiKey;
exports.errorMsg = '';

//user object
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
  this.errorMsg     = '';
  this.repositories = [];
};
//repository object
var GitRepository = function(json){
  this.repositoryName = json.name;
  this.url = json..html_url;
};

//json api call
exports.githubApiData = function(userName){
  var requestUri  = 'https://api.github.com/users/' + userName + '?access_token=' + apiKey;
  var repositoryUri  = 'https://api.github.com/users/' + userName + '/repos?access_token=' + apiKey;
  //user data
  $.get(requestUri).then(function(jsonUser){
    console.log(jsonUser);
    newGithubUser = new GithubUser(jsonUser);
    //user repositories
    $.getJSON(repositoryUri, function(jsonRepos){
      $.each(jsonRepos, function(i) {
        var newRepo = GitRepository(jsonRepos[i]);
        newGithubUser.repositories.push(newRepo);
      });
    });
  }).fail(function(error){
    console.log(error.responseJSON.message);
    errorMsg = error.responseJSON.message;
  });
  return newGithubUser;
};
