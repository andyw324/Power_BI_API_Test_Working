'use strict';
angular.module('todoApp', ['ngRoute','AdalAngular'])
.config(['$routeProvider', '$httpProvider', 'adalAuthenticationServiceProvider', function ($routeProvider, $httpProvider, adalProvider) {

    $routeProvider.when("/Home", {
        controller: "homeCtrl",
        templateUrl: "/App/Views/Home.html",
    }).when("/TodoList", {
        controller: "todoListCtrl",
        templateUrl: "/App/Views/TodoList.html",
        requireADLogin: true,
    }).when("/ToGoList", {
        controller: "toGoListCtrl",
        templateUrl: "/App/Views/ToGoList.html",
        requireADLogin: true,
    }).when("/UserData", {
        controller: "userDataCtrl",
        templateUrl: "/App/Views/UserData.html",
    }).when("/Report", {
        controller: "reportCtrl",
        templateUrl: "/App/Views/Report.html",
    }).otherwise({ redirectTo: "/Home" });

    var endpoints = {

        // Map the location of a request to an API to a the identifier of the associated resource
        "https://api.powerbi.com": "https://analysis.windows.net/powerbi/api",
    };

    adalProvider.init(
        {
            instance: 'https://login.microsoftonline.com/',
            tenant: 'homeofficegsigovuk.onmicrosoft.com',
            clientId: '2ad5dba7-b359-483c-89e2-3da5878eb8e5',
            extraQueryParameter: 'nux=1',
            endpoints: endpoints,
            //cacheLocation: 'localStorage', // enable this for IE, as sessionStorage does not work for localhost.  
            // Also, token acquisition for the To Go API will fail in IE when running on localhost, due to IE security restrictions.
        },
        $httpProvider
        );
   // console.log(adalProvider.config.endpoints);
}]);

        function initializeDataSelection(report, $dataSelectedContainer) {
          report.on('dataSelected', event => {
            console.log('dataSelected: ', event);

            var data = event.detail;

            $dataSelectedContainer.text(JSON.stringify(data, null, '  '));
          });
        }
