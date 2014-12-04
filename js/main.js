;(function(){
    'use strict';

    var hello = 'world';  
    angular.module("MyApp", [])
        .controller("SimpleController", function() {
        this.name = "Brandon";
        this.friends = ['Ashley', 'Bob', 'David', 'Hogan'];
    });

}());

