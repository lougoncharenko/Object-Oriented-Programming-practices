//creating a module
(function (){
    'use strict';
    //code here
    //all functions and variables are scoped to this function
})();

//exporting our module
var myModule = (function() {
    'use strict';
  
    return{
        publicMethod: function(){
            console.log('Hello World')
        }
    }
  })();

  myModule.publicMethod();


  //private methods and properties

  var myModule = (function() {
    'use strict';
  
    var _privateProperty = 'Hello World';
  
    function _privateMethod() {
      console.log(_privateProperty);
    }
  
    return {
      publicMethod: function() {
        _privateMethod();
      }
    };
  })();
  
  myModule.publicMethod(); // outputs 'Hello World'
  console.log(myModule._privateProperty); // is undefined protected by the module closure
  myModule._privateMethod(); // is TypeError protected by the module closure
