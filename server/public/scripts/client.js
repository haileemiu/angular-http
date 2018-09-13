console.log('client.js has been loaded');
const shellApp = angular.module('ShellApp', []);

// find the dependency $http and pass it into the function
shellApp.controller('ShellController', ['$http',function($http) {
  console.log('loading ShellController');
  
  let self = this;

  self.number = 7;

  // just like AJAX, but no . ($.ajax)
  $http({
    method: 'GET', 
    url: '/shells'
  }).then(function(response) {
    console.log(response.data);
  })

}]);