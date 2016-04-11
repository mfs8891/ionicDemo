(function(){
  angular.module('starter').service('pouchService',function () {
      this.db = new PouchDB('my_db');
  });

})();
