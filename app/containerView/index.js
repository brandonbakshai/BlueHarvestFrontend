/**
 * Created by brandonbakhshai on 28 Jun.
 */

'use strict';

(function () {
    
    var bountyDirective = function () {
        return {
            restrict:    'A',
            scope: {
                bountyBody: '@'
            },
            link: function ($scope, element, attributes) {
                element.bind('click', function () {
                    element.html('You clicked me!');
                });
                element.bind('mouse-enter', function () {
                    element.css('background-color', 'yellow');
                });
                element.bind('mouse-leave', function () {
                    element.css('background-color', 'white');
                });
            }
        };
    };

    angular.module('blueHarvest')
        .directive('bountyDirective', bountyDirective);

}());

