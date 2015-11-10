

let MyController = function ($scope) {
  $scope.person = {
     name: 'Tim',
      age: 31
  };
};







MyController.$inject = [$scope];

export default MyController;