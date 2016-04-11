angular.module('starter.controllers', [])

.controller('AppCtrl', function($scope, $ionicModal, $timeout, $q, pouchService) {
   var orden = {
     _id: new Date().toISOString(),
     name: 'Avería',
     description: 'Contador estropeado'
   };
   $q.when(pouchService.db.put(orden, function callback(err, result){
          console.log(err);
        })
    )
      .then(function(){
        var docs;
        pouchService.db.allDocs({include_docs: true, descending: true}, function(err, doc) {
          console.log(doc);
        docs=doc;
       });
      });

})

.controller('SearchCtrl', function($scope) {
  $scope.ordenesTrabajo = [
    { name: 'Avería', description: 'Contador estropeado' },
    { name: 'Lectura', description: 'Paseo de la castellana, 134, 1º C' },
    { name: 'Avería', description: 'Usuario no tiene luz' },
    { name: 'Intervención', description: 'Aumento potencia contratada' }
  ] ;
})

.controller('PlaylistsCtrl', function($scope) {
  $scope.ordenesTrabajo = [
    { name: 'Reggae', description: 1 },
    { name: 'Chill', description: 2 },
    { name: 'Dubstep', description: 3 },
    { name: 'Indie', description: 4 },
    { name: 'Rap', description: 5 },
    { name: 'Cowbell', description: 6 }
  ] ;
})

.controller('PlaylistCtrl', function($scope, $stateParams) {
});
