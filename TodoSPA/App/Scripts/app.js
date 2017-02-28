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


// eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiIsIng1dCI6Il9VZ3FYR190TUxkdVNKMVQ4Y2FIeFU3Y090YyIsImtpZCI6Il9VZ3FYR190TUxkdVNKMVQ4Y2FIeFU3Y090YyJ9.eyJhdWQiOiIyYWQ1ZGJhNy1iMzU5LTQ4M2MtODllMi0zZGE1ODc4ZWI4ZTUiLCJpc3MiOiJodHRwczovL3N0cy53aW5kb3dzLm5ldC9lMTYzNDZhZS1lZWMxLTQyNjAtYWI1MS1hYzEwMmZhMDU0YmUvIiwiaWF0IjoxNDg3Nzc4NzM3LCJuYmYiOjE0ODc3Nzg3MzcsImV4cCI6MTQ4Nzc4MjYzNywiYW1yIjpbInB3ZCIsIm1mYSJdLCJmYW1pbHlfbmFtZSI6IldvbmciLCJnaXZlbl9uYW1lIjoiQW5kcmV3IiwiaXBhZGRyIjoiMjEzLjI1MS4yMy4xNjQiLCJuYW1lIjoiQW5kcmV3IFdvbmciLCJub25jZSI6ImY4ZDNjNzIxLTA3MWYtNDM0Zi04MDZiLTcxZGJlZThlNTM4MCIsIm9pZCI6ImE2MDMzZWY3LTgzMWEtNDY3Zi05MjIzLTZiZmYxZDczM2U0NSIsInBsYXRmIjoiNSIsInN1YiI6Ik9XUlFKaGt3Y2FXX3E4c2lwWmdPZEszWkI5NEZDM3ZoVkhNN3Q5dU1SeVEiLCJ0aWQiOiJlMTYzNDZhZS1lZWMxLTQyNjAtYWI1MS1hYzEwMmZhMDU0YmUiLCJ1bmlxdWVfbmFtZSI6IkFuZHJldy5Xb25nQGhvbWVvZmZpY2Vnc2lnb3Z1ay5vbm1pY3Jvc29mdC5jb20iLCJ1cG4iOiJBbmRyZXcuV29uZ0Bob21lb2ZmaWNlZ3NpZ292dWsub25taWNyb3NvZnQuY29tIiwidmVyIjoiMS4wIn0.QxCUI3Wa4Y8DzcMikoUnZ6XdG8Bdn55O_gz-JwSp9yYTBtqEJTEFoAC1PkXrBuvdwSm_mP4Js2Gw41RkmL84lcCF3Ul0u2ht5JBWeO3vuaJOqzH2Og-eESMTjqgyhFd4GDegrugmIVo8Pr_vgsec0khr-Vt2sIxiLawlDpAGr7l2xR38hrSUAkoJdEkb30lREb8tq2UL1MV4cJYvzceBEEV8PCqMVDwWhsc5MJUcvJuHa0RzR43EnjVVrWtKZhXEYoFMM5WuToAJupSaPE2z4iDCFR0hRhyXn3RV4uIAvEELCntYdWG12eavp-4qdvkJEoU_O54fppRl8rN6DzsJRA

// eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiIsIng1dCI6Il9VZ3FYR190TUxkdVNKMVQ4Y2FIeFU3Y090YyIsImtpZCI6Il9VZ3FYR190TUxkdVNKMVQ4Y2FIeFU3Y090YyJ9.eyJhdWQiOiIyYWQ1ZGJhNy1iMzU5LTQ4M2MtODllMi0zZGE1ODc4ZWI4ZTUiLCJpc3MiOiJodHRwczovL3N0cy53aW5kb3dzLm5ldC9lMTYzNDZhZS1lZWMxLTQyNjAtYWI1MS1hYzEwMmZhMDU0YmUvIiwiaWF0IjoxNDg3Nzc4NzM3LCJuYmYiOjE0ODc3Nzg3MzcsImV4cCI6MTQ4Nzc4MjYzNywiYW1yIjpbInB3ZCIsIm1mYSJdLCJmYW1pbHlfbmFtZSI6IldvbmciLCJnaXZlbl9uYW1lIjoiQW5kcmV3IiwiaXBhZGRyIjoiMjEzLjI1MS4yMy4xNjQiLCJuYW1lIjoiQW5kcmV3IFdvbmciLCJub25jZSI6ImY4ZDNjNzIxLTA3MWYtNDM0Zi04MDZiLTcxZGJlZThlNTM4MCIsIm9pZCI6ImE2MDMzZWY3LTgzMWEtNDY3Zi05MjIzLTZiZmYxZDczM2U0NSIsInBsYXRmIjoiNSIsInN1YiI6Ik9XUlFKaGt3Y2FXX3E4c2lwWmdPZEszWkI5NEZDM3ZoVkhNN3Q5dU1SeVEiLCJ0aWQiOiJlMTYzNDZhZS1lZWMxLTQyNjAtYWI1MS1hYzEwMmZhMDU0YmUiLCJ1bmlxdWVfbmFtZSI6IkFuZHJldy5Xb25nQGhvbWVvZmZpY2Vnc2lnb3Z1ay5vbm1pY3Jvc29mdC5jb20iLCJ1cG4iOiJBbmRyZXcuV29uZ0Bob21lb2ZmaWNlZ3NpZ292dWsub25taWNyb3NvZnQuY29tIiwidmVyIjoiMS4wIn0.QxCUI3Wa4Y8DzcMikoUnZ6XdG8Bdn55O_gz-JwSp9yYTBtqEJTEFoAC1PkXrBuvdwSm_mP4Js2Gw41RkmL84lcCF3Ul0u2ht5JBWeO3vuaJOqzH2Og-eESMTjqgyhFd4GDegrugmIVo8Pr_vgsec0khr-Vt2sIxiLawlDpAGr7l2xR38hrSUAkoJdEkb30lREb8tq2UL1MV4cJYvzceBEEV8PCqMVDwWhsc5MJUcvJuHa0RzR43EnjVVrWtKZhXEYoFMM5WuToAJupSaPE2z4iDCFR0hRhyXn3RV4uIAvEELCntYdWG12eavp-4qdvkJEoU_O54fppRl8rN6DzsJRA