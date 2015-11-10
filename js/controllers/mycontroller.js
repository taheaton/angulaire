let MyController = function ($scope) {
  

  $scope.count = 0;
  $scope.message = "likes";
  
  $scope.incrementByOne = function() {
    

    $scope.count++;

    $scope.message = ($scope.count === 1) ? 'like' : 'likes';

  
  };
};








//   $scope.taskList = [];

//   function Task (obj) {
//     this.name = obj.taskName;
//     this.due = obj.dueDate;
//   }

//   $scope.addTask = function (task) {

//     let x = new Task(task);
    
//     $scope.taskList.push(x);

//   };


// };

MyController.$inject = ['$scope'];

export default MyController;