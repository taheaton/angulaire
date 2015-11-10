let MyController = function ($scope) {
  

  $scope.count = 0;
  $scope.message = "likes";
  $scope.header = "A girl likes to be liked!!!";
  $scope.image = "https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcTzlOTNwU5_Fgd2Pv43PNz9Uu155ORmUaHyGlu1z1UHI7gymAkG";
  
  $scope.incrementByOne = function() {
    let Header = ["","Gettin better already","Keep trying!", 
    "Don't give up on me!","You'd take me home, wouldn't you?", 
    "You're a persistent one!", 
    "I think you're out of your league at this point", 
    "Definitely out of your league!", 
    "You can't do better than Kate Upton, what were you thinking???",
    "Can't go back now!!!  You're stuck with him"];
    let Image = ["",
      "https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcSzs_Zo8HmBehL5tVh0LVt3PyxCCmsBEllEZbTjIsHqUWdazoFu",
      "http://celebslam.celebuzz.com/images/donatella-versace-nasty-bikini.jpg",
      "https://s-media-cache-ak0.pinimg.com/236x/5b/6a/f3/5b6af33d04c774000325e29b2173440a.jpg",
      "http://i401.photobucket.com/albums/pp92/BeJewelMe/IMG_3347.jpg",
      "http://static.quiksilver.com/www/store.quiksilver.eu/html/images/catalogs/global/roxy-products/all/default/hi-res/arjx303121_triangletop,w_kvj0_frt1.jpg",
      "http://www.whudat.de/images/2013-sports-illustrated-swimsuit-edition_19.jpg",
      "http://41.media.tumblr.com/789c5e8b7c79ae998ecb7b30d3d97585/tumblr_n23op6Z9Yf1s7gvf6o1_500.png",
      "http://2.bp.blogspot.com/-sht47hOHBoY/UzYJvWN3nDI/AAAAAAAAOcg/pMrtvnsiU7c/s1600/bikini-babes6.jpg"];


    $scope.count++;

    $scope.message = ($scope.count === 1) ? 'like' : 'likes';

    $scope.header = ($scope.count>8) ? Header[9] : Header[$scope.count];
    $scope.image = ($scope.count>7) ? Image[8] : Image[$scope.count];
  
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