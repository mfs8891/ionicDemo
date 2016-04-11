(function(){
  angular.module('starter').directive('orden',function () {
    return {
      templateUrl: 'js/ordenTrabajo/orden.html',
      controller: 'ordenDirectiveCtrl as ordenCtrl',
      scope: {
        order: '='
      }
    };
  });

  angular.module('starter').controller('ordenDirectiveCtrl',[
    '$scope',
    function ($scope) {
      this.order = $scope.orden;
    }
  ])
})();
