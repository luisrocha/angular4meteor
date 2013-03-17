angular4meteor
==============

A Meteor smart package that allows you to use AngularJS inside your applications

##Usage

Write your controller just as you would in any other application.

    function MainCtrl($scope) {
        $scope.todos = [
            "task1",
            "task2"
        ];
    };

To prevent conflicts with Handlebars, templates must use "{%" and "%}" as expression delimiters.

    <head>
        <title>Todos</title>
    </head>

    <body>
        <label>Name: </label><input type="text" ng-model="name"/>
        <span>Hello {%name%}</span>
        <ul ng-controller="MainCtrl">
            <li ng-repeat="todo in todos">{%todo%}</li>
        </ul>
    </body>

Keep in mind that your main application module is always called "meteorapp"

