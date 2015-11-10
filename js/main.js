import angular from 'angular';

//Controllers
import MyController from './controllers/mycontroller';

//Creating a module
angular.module('taco',[])
//angular.module('app',[])

//Referencing a module
//angular.module('taco');

// Some Controllers
.controller('MyController', MyController);
 
//angular.module('taco').controller('MyController', MyController);
