'use strict';
angular.module('todoApp')
.controller('reportCtrl', ['$scope', 'adalAuthenticationService', '$http',function ($scope, adalService, $http) {
    // Add new "load report id" function to add a user defined report id into session memory
    console.log('Scope is as follows:');
    console.log($scope);
    console.log('idtoken: ' + window.sessionStorage.getItem('adal.idtoken'));

	adalService.acquireToken("https://analysis.windows.net/powerbi/api");// {
    var token = window.sessionStorage.getItem('adal.access.token.keyhttps://analysis.windows.net/powerbi/api'); 

    $scope.loadReport = function () {
        // test = window.sessionStorage.getItem('adal.idtoken');
        // console.log(adalService);
	 //    var outputTo = document.getElementById('appTokenPara');
	    // var token = adalService.getCachedToken("4dbb8f18-0933-490c-8ee9-31d1d3f11284"); //
	    
	    // ---------------------------------
	    // var token = 
	    // adalService.acquireToken("https://analysis.windows.net/powerbi/api");// {
	    // 	console.log("Acquired token? - no idea");
	    // var token = window.sessionStorage.getItem('adal.access.token.keyhttps://analysis.windows.net/powerbi/api'); //}; //window.sessionStorage.getItem('adal.idtoken');


		// Read embed application token from textbox
		var txtAccessToken = token;
		// var txtAccessToken = "eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiIsIng1dCI6Il9VZ3FYR190TUxkdVNKMVQ4Y2FIeFU3Y090YyIsImtpZCI6Il9VZ3FYR190TUxkdVNKMVQ4Y2FIeFU3Y090YyJ9.eyJhdWQiOiJodHRwczovL2FuYWx5c2lzLndpbmRvd3MubmV0L3Bvd2VyYmkvYXBpIiwiaXNzIjoiaHR0cHM6Ly9zdHMud2luZG93cy5uZXQvZTE2MzQ2YWUtZWVjMS00MjYwLWFiNTEtYWMxMDJmYTA1NGJlLyIsImlhdCI6MTQ4Nzg5OTg3NiwibmJmIjoxNDg3ODk5ODc2LCJleHAiOjE0ODc5MDM3NzYsImFjciI6IjEiLCJhbXIiOlsicHdkIiwibWZhIl0sImFwcGlkIjoiMmFkNWRiYTctYjM1OS00ODNjLTg5ZTItM2RhNTg3OGViOGU1IiwiYXBwaWRhY3IiOiIwIiwiZV9leHAiOjEwODAwLCJmYW1pbHlfbmFtZSI6IldvbmciLCJnaXZlbl9uYW1lIjoiQW5kcmV3IiwiaXBhZGRyIjoiOTAuMjEwLjQ5LjI0IiwibmFtZSI6IkFuZHJldyBXb25nIiwib2lkIjoiYTYwMzNlZjctODMxYS00NjdmLTkyMjMtNmJmZjFkNzMzZTQ1IiwicGxhdGYiOiI1IiwicHVpZCI6IjEwMDMwMDAwOUI2ODA3NjQiLCJzY3AiOiJEYXRhc2V0LlJlYWQuQWxsIEdyb3VwLlJlYWQgUmVwb3J0LlJlYWQuQWxsIiwic3ViIjoiU3cxYjFqVURXQlRtdTZzTUtqYkUzczdReFJUUFh4WkpITm8xT012SldsTSIsInRpZCI6ImUxNjM0NmFlLWVlYzEtNDI2MC1hYjUxLWFjMTAyZmEwNTRiZSIsInVuaXF1ZV9uYW1lIjoiQW5kcmV3LldvbmdAaG9tZW9mZmljZWdzaWdvdnVrLm9ubWljcm9zb2Z0LmNvbSIsInVwbiI6IkFuZHJldy5Xb25nQGhvbWVvZmZpY2Vnc2lnb3Z1ay5vbm1pY3Jvc29mdC5jb20iLCJ2ZXIiOiIxLjAifQ.6bOX5j-rIhOWocOLsQcwpvpsBVmYjFrs429NapBvKNKFP6bXWXyofHe-_mOU3K5AWzXMjviaXdle03nPkcBS8dPQU5cw-GlhjVUUcvXfqXpjGNecFuVpOUA1iiTNm0EWrhB9vg-FOa1rXEAezypdl91OarZcTeWXqXEoa6ltV51irJLVzeq8rjIJGRmYWE0Iy4kszmIUufmFbYXGz1B5T2pgWACkK101U3MmUH-B0UlQ6jCFRT0-G34rAAiDL_2gYTqn7zkcwwr8MB7Ejam0pS_FmR16sASy3yon66JF7Qncil4xru_3LZEc1GiNTpKj90t8Cr0W_HQQ6TYAv-mEww";
		console.log('Token Used: ');
		console.log(txtAccessToken);

	    // $http({
	    //   method: 'GET',
	    //   url: 'https://api.powerbi.com/beta/myorg/reports',
	    //   headers: {
	    //     'Authorization': "Bearer " + token //'Bearer ' + token
	    //   }}).then(function apiResponse(error, response, body) {
		   //    if (response === "undefined") {
		   //    console.log('tokenString: ' + token);
		   //    console.log('Status:', response.statusCode);
		   //    console.log('Headers:', JSON.stringify(response.headers));
		   //    console.log('Response:', body);
  			// }
	    // });

	    //////////-------------------------------------



		// Read embed URL from textbox


		var txtEmbedUrl = 'https://app.powerbi.com/reportEmbed?reportId=' + $('#pbirptid').val();//$('#txtReportEmbed').val();

		// Read report Id from textbox
		var txtEmbedReportId = $('#pbirptid').val();

		// Embed configuration used to describe the what and how to embed.
		// This object is used when calling powerbi.embed.
		// This also includes settings and options such as filters.
		// You can find more information at https://github.com/Microsoft/PowerBI-JavaScript/wiki/Embed-Configuration-Details.
		powerbi.accessToken = txtAccessToken;
		var config= {
		    type: 'report',
		    tokenType: 'Bearer',
		    accessToken: txtAccessToken,
		    embedUrl: txtEmbedUrl,
		    id: txtEmbedReportId,
		    settings: {
		        filterPaneEnabled: true,
		        navContentPaneEnabled: true
		    }
		};

		console.log(config);

	  // Get result from Power BI API
	    // var request = require('request');
//'https://analysis.windows.net/powerbi/api',// 


		// Grab the reference to the div HTML element that will host the report.
		var reportContainer = $('#reportContainer')[0];

		// Embed the report and display it within the div container.
		var report = powerbi.embed(reportContainer, config);

		// Report.off removes a given event handler if it exists.
		report.off("loaded");

		// Report.on will add an event handler which prints to Log window.
		report.on("loaded", function() {
		    console.log("Loaded");
		});

//--------------------- PowerBI-Client Approach - End -----------------------------
    $http({
      method: 'GET',
      url: 'https://api.powerbi.com/beta/myorg/reports',
      headers: {
        'Authorization': "Bearer " + token //'Bearer ' + token
      }}).then(function apiResponse(response) {
      	// console.log(response);
      	// console.log(error);
      	// console.log(body);
	      if (response != "undefined") {
		      console.log('tokenString: ' + token);
		      console.log('Status:', response.statusCode);
		      console.log('Headers:', JSON.stringify(response.headers));
		      console.log('Response:', JSON.stringify(response.data));
			}
    	});
    };
}]);

//https://app.powerbi.com/reportEmbed?reportId=4dbb8f18-0933-490c-8ee9-31d1d3f11284

//Use Bower to include the powerbi-client js library and test embedding using that method
// see https://github.com/Microsoft/PowerBI-JavaScript/wiki/Embedding-Basics
// and https://microsoft.github.io/PowerBI-JavaScript/demo/code-demo/index.html

// eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiIsIng1dCI6Il9VZ3FYR190TUxkdVNKMVQ4Y2FIeFU3Y090YyIsImtpZCI6Il9VZ3FYR190TUxkdVNKMVQ4Y2FIeFU3Y090YyJ9.eyJhdWQiOiJodHRwczovL2FuYWx5c2lzLndpbmRvd3MubmV0L3Bvd2VyYmkvYXBpIiwiaXNzIjoiaHR0cHM6Ly9zdHMud2luZG93cy5uZXQvZTE2MzQ2YWUtZWVjMS00MjYwLWFiNTEtYWMxMDJmYTA1NGJlLyIsImlhdCI6MTQ4NzMzODEwMywibmJmIjoxNDg3MzM4MTAzLCJleHAiOjE0ODczNDIwMDMsImFjciI6IjEiLCJhbXIiOlsicHdkIiwibWZhIl0sImFwcGlkIjoiNzQwYzBlZDQtZDQ1NC00ZDczLTkwMTktZmE3YjRiYWQ4NjBmIiwiYXBwaWRhY3IiOiIxIiwiZV9leHAiOjEwODAwLCJmYW1pbHlfbmFtZSI6IldvbmciLCJnaXZlbl9uYW1lIjoiQW5kcmV3IiwiaXBhZGRyIjoiMjEzLjI1MS4yMy4xNjQiLCJuYW1lIjoiQW5kcmV3IFdvbmciLCJvaWQiOiJhNjAzM2VmNy04MzFhLTQ2N2YtOTIyMy02YmZmMWQ3MzNlNDUiLCJwbGF0ZiI6IjUiLCJwdWlkIjoiMTAwMzAwMDA5QjY4MDc2NCIsInNjcCI6IkRhdGFzZXQuUmVhZC5BbGwgUmVwb3J0LlJlYWQuQWxsIiwic3ViIjoiU3cxYjFqVURXQlRtdTZzTUtqYkUzczdReFJUUFh4WkpITm8xT012SldsTSIsInRpZCI6ImUxNjM0NmFlLWVlYzEtNDI2MC1hYjUxLWFjMTAyZmEwNTRiZSIsInVuaXF1ZV9uYW1lIjoiQW5kcmV3LldvbmdAaG9tZW9mZmljZWdzaWdvdnVrLm9ubWljcm9zb2Z0LmNvbSIsInVwbiI6IkFuZHJldy5Xb25nQGhvbWVvZmZpY2Vnc2lnb3Z1ay5vbm1pY3Jvc29mdC5jb20iLCJ2ZXIiOiIxLjAiLCJ3aWRzIjpbIjYyZTkwMzk0LTY5ZjUtNDIzNy05MTkwLTAxMjE3NzE0NWUxMCJdfQ.XiIWKqQth7k89EaEqWiEH_pWImuQ17cq1wWEq3DvYw_xstOEMsNbDgXt3900C1usBcv-Z19YRjDUg77Z87gbb-sncP44Kgf4JYDtH3EQ_xKt940eRTJg5t3HA975LQjfr_HhguooQkk8TrcdmKPYqPMelzHf2ERKyp40HG9vEsDCSKRR4hnDPIfNetd8B6YUWYd1oQegZCEwjQmA60bxgJvHnIMIRnMtx988cVmL2moF8S7YzhDx6XyNeFqCg569hVXVuAX-5VhBKsVS9brLSLPmtXxae-xYNXYgm2nIRN_szsprcQtMBPbJFBHooEW-jjy9ck_C_zAH9JkdrSZYJA

// eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiIsIng1dCI6Il9VZ3FYR190TUxkdVNKMVQ4Y2FIeFU3Y090YyIsImtpZCI6Il9VZ3FYR190TUxkdVNKMVQ4Y2FIeFU3Y090YyJ9.eyJhdWQiOiIyYWQ1ZGJhNy1iMzU5LTQ4M2MtODllMi0zZGE1ODc4ZWI4ZTUiLCJpc3MiOiJodHRwczovL3N0cy53aW5kb3dzLm5ldC9lMTYzNDZhZS1lZWMxLTQyNjAtYWI1MS1hYzEwMmZhMDU0YmUvIiwiaWF0IjoxNDg3MzM4MTk5LCJuYmYiOjE0ODczMzgxOTksImV4cCI6MTQ4NzM0MjA5OSwiYW1yIjpbInB3ZCIsIm1mYSJdLCJmYW1pbHlfbmFtZSI6IldvbmciLCJnaXZlbl9uYW1lIjoiQW5kcmV3IiwiaXBhZGRyIjoiMjEzLjI1MS4yMy4xNjQiLCJuYW1lIjoiQW5kcmV3IFdvbmciLCJub25jZSI6IjZjZTE1MzgwLTVjY2ItNGJhMi04NzNiLTMxMjk0YjJkMTcxZiIsIm9pZCI6ImE2MDMzZWY3LTgzMWEtNDY3Zi05MjIzLTZiZmYxZDczM2U0NSIsInBsYXRmIjoiNSIsInN1YiI6Ik9XUlFKaGt3Y2FXX3E4c2lwWmdPZEszWkI5NEZDM3ZoVkhNN3Q5dU1SeVEiLCJ0aWQiOiJlMTYzNDZhZS1lZWMxLTQyNjAtYWI1MS1hYzEwMmZhMDU0YmUiLCJ1bmlxdWVfbmFtZSI6IkFuZHJldy5Xb25nQGhvbWVvZmZpY2Vnc2lnb3Z1ay5vbm1pY3Jvc29mdC5jb20iLCJ1cG4iOiJBbmRyZXcuV29uZ0Bob21lb2ZmaWNlZ3NpZ292dWsub25taWNyb3NvZnQuY29tIiwidmVyIjoiMS4wIn0.LjXWlT6xSeRB-fWoiS-tcpTMMBk4QqLtqNJrDSP0MZ5gUz5PlZr6ZPQU3kMa9yj1smjcjp8bLwhMzQ6I3h-Sv5RmDgieLlhXWEBdF9er_KOG-jKcNr5cVQbl_4PFpjEEm86FEu_jmKDLmiFu-5SbNYR7GEm-G3jQjA7LEb9Dmy4iNGE_MIzLA-6baKBFZGib9EpXu0aK28yDFQgzyiWu9Phwk2EDN_nCygA--nSeYOOVovQeiTWHlQjYoqjofzvx615vqM-PHevnwXaoe7hVPo9Qbghi6D0ewOFcaXZa2qKNd7eqYOMaESyrt14ZvCf0Kqy4tOzun5DlLgY9dTBvpw

// eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiIsIng1dCI6Il9VZ3FYR190TUxkdVNKMVQ4Y2FIeFU3Y090YyIsImtpZCI6Il9VZ3FYR190TUxkdVNKMVQ4Y2FIeFU3Y090YyJ9.eyJhdWQiOiIyYWQ1ZGJhNy1iMzU5LTQ4M2MtODllMi0zZGE1ODc4ZWI4ZTUiLCJpc3MiOiJodHRwczovL3N0cy53aW5kb3dzLm5ldC9lMTYzNDZhZS1lZWMxLTQyNjAtYWI1MS1hYzEwMmZhMDU0YmUvIiwiaWF0IjoxNDg3MzQxNzkyLCJuYmYiOjE0ODczNDE3OTIsImV4cCI6MTQ4NzM0NTY5MiwiYW1yIjpbInB3ZCIsIm1mYSJdLCJmYW1pbHlfbmFtZSI6IldvbmciLCJnaXZlbl9uYW1lIjoiQW5kcmV3IiwiaXBhZGRyIjoiMjEzLjI1MS4yMy4xNjQiLCJuYW1lIjoiQW5kcmV3IFdvbmciLCJub25jZSI6IjAxYWI2ODU1LWUzODEtNGQxNi1iMTdmLWM4YzE1NDhkNTQ3NCIsIm9pZCI6ImE2MDMzZWY3LTgzMWEtNDY3Zi05MjIzLTZiZmYxZDczM2U0NSIsInBsYXRmIjoiNSIsInN1YiI6Ik9XUlFKaGt3Y2FXX3E4c2lwWmdPZEszWkI5NEZDM3ZoVkhNN3Q5dU1SeVEiLCJ0aWQiOiJlMTYzNDZhZS1lZWMxLTQyNjAtYWI1MS1hYzEwMmZhMDU0YmUiLCJ1bmlxdWVfbmFtZSI6IkFuZHJldy5Xb25nQGhvbWVvZmZpY2Vnc2lnb3Z1ay5vbm1pY3Jvc29mdC5jb20iLCJ1cG4iOiJBbmRyZXcuV29uZ0Bob21lb2ZmaWNlZ3NpZ292dWsub25taWNyb3NvZnQuY29tIiwidmVyIjoiMS4wIn0.ZZ3SsBpGmPHJ_1Iq8UI5oetvLwm1lUT5HGTeWr6botevAdUrrEd0GtSZ5iwEoDWOYBKvAgju84mvaNaNOf9u-qEAZLskuOC6ZEXdgkS39UPXNwRsND7a_SOsjaYj1MRpKJYW4jkwsa3WqwRCQM3zFYjSa_I12wHcCnNbH3N0aipLV4tt4Ye-159IqZcb8WO15PPnT48Fss4PKyUUMl1-R7v9D_xfo8ae3SVAUwtO4N2uqFVhrqJwCABMMg94-XxkOSnYa1lSJPwWksViL5QRxBVZcYKsIgOxoanfenf8ScjPXikjjua32JHLEMWDkakLdw4bqakfXX3ZAmDdz1-dYg

// eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiIsIng1dCI6Il9VZ3FYR190TUxkdVNKMVQ4Y2FIeFU3Y090YyIsImtpZCI6Il9VZ3FYR190TUxkdVNKMVQ4Y2FIeFU3Y090YyJ9.eyJhdWQiOiIyYWQ1ZGJhNy1iMzU5LTQ4M2MtODllMi0zZGE1ODc4ZWI4ZTUiLCJpc3MiOiJodHRwczovL3N0cy53aW5kb3dzLm5ldC9lMTYzNDZhZS1lZWMxLTQyNjAtYWI1MS1hYzEwMmZhMDU0YmUvIiwiaWF0IjoxNDg3MzQxNzkyLCJuYmYiOjE0ODczNDE3OTIsImV4cCI6MTQ4NzM0NTY5MiwiYW1yIjpbInB3ZCIsIm1mYSJdLCJmYW1pbHlfbmFtZSI6IldvbmciLCJnaXZlbl9uYW1lIjoiQW5kcmV3IiwiaXBhZGRyIjoiMjEzLjI1MS4yMy4xNjQiLCJuYW1lIjoiQW5kcmV3IFdvbmciLCJub25jZSI6IjAxYWI2ODU1LWUzODEtNGQxNi1iMTdmLWM4YzE1NDhkNTQ3NCIsIm9pZCI6ImE2MDMzZWY3LTgzMWEtNDY3Zi05MjIzLTZiZmYxZDczM2U0NSIsInBsYXRmIjoiNSIsInN1YiI6Ik9XUlFKaGt3Y2FXX3E4c2lwWmdPZEszWkI5NEZDM3ZoVkhNN3Q5dU1SeVEiLCJ0aWQiOiJlMTYzNDZhZS1lZWMxLTQyNjAtYWI1MS1hYzEwMmZhMDU0YmUiLCJ1bmlxdWVfbmFtZSI6IkFuZHJldy5Xb25nQGhvbWVvZmZpY2Vnc2lnb3Z1ay5vbm1pY3Jvc29mdC5jb20iLCJ1cG4iOiJBbmRyZXcuV29uZ0Bob21lb2ZmaWNlZ3NpZ292dWsub25taWNyb3NvZnQuY29tIiwidmVyIjoiMS4wIn0.ZZ3SsBpGmPHJ_1Iq8UI5oetvLwm1lUT5HGTeWr6botevAdUrrEd0GtSZ5iwEoDWOYBKvAgju84mvaNaNOf9u-qEAZLskuOC6ZEXdgkS39UPXNwRsND7a_SOsjaYj1MRpKJYW4jkwsa3WqwRCQM3zFYjSa_I12wHcCnNbH3N0aipLV4tt4Ye-159IqZcb8WO15PPnT48Fss4PKyUUMl1-R7v9D_xfo8ae3SVAUwtO4N2uqFVhrqJwCABMMg94-XxkOSnYa1lSJPwWksViL5QRxBVZcYKsIgOxoanfenf8ScjPXikjjua32JHLEMWDkakLdw4bqakfXX3ZAmDdz1-dYg

// eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiIsIng1dCI6Il9VZ3FYR190TUxkdVNKMVQ4Y2FIeFU3Y090YyIsImtpZCI6Il9VZ3FYR190TUxkdVNKMVQ4Y2FIeFU3Y090YyJ9.eyJhdWQiOiJodHRwczovL2FuYWx5c2lzLndpbmRvd3MubmV0L3Bvd2VyYmkvYXBpIiwiaXNzIjoiaHR0cHM6Ly9zdHMud2luZG93cy5uZXQvZTE2MzQ2YWUtZWVjMS00MjYwLWFiNTEtYWMxMDJmYTA1NGJlLyIsImlhdCI6MTQ4NzM1MTA3MiwibmJmIjoxNDg3MzUxMDcyLCJleHAiOjE0ODczNTQ5NzIsImFjciI6IjEiLCJhbXIiOlsicHdkIiwibWZhIl0sImFwcGlkIjoiNzQwYzBlZDQtZDQ1NC00ZDczLTkwMTktZmE3YjRiYWQ4NjBmIiwiYXBwaWRhY3IiOiIxIiwiZV9leHAiOjEwODAwLCJmYW1pbHlfbmFtZSI6IldvbmciLCJnaXZlbl9uYW1lIjoiQW5kcmV3IiwiaXBhZGRyIjoiMjEzLjI1MS4yMy4xNjQiLCJuYW1lIjoiQW5kcmV3IFdvbmciLCJvaWQiOiJhNjAzM2VmNy04MzFhLTQ2N2YtOTIyMy02YmZmMWQ3MzNlNDUiLCJwbGF0ZiI6IjUiLCJwdWlkIjoiMTAwMzAwMDA5QjY4MDc2NCIsInNjcCI6IkRhdGFzZXQuUmVhZC5BbGwgUmVwb3J0LlJlYWQuQWxsIiwic3ViIjoiU3cxYjFqVURXQlRtdTZzTUtqYkUzczdReFJUUFh4WkpITm8xT012SldsTSIsInRpZCI6ImUxNjM0NmFlLWVlYzEtNDI2MC1hYjUxLWFjMTAyZmEwNTRiZSIsInVuaXF1ZV9uYW1lIjoiQW5kcmV3LldvbmdAaG9tZW9mZmljZWdzaWdvdnVrLm9ubWljcm9zb2Z0LmNvbSIsInVwbiI6IkFuZHJldy5Xb25nQGhvbWVvZmZpY2Vnc2lnb3Z1ay5vbm1pY3Jvc29mdC5jb20iLCJ2ZXIiOiIxLjAiLCJ3aWRzIjpbIjYyZTkwMzk0LTY5ZjUtNDIzNy05MTkwLTAxMjE3NzE0NWUxMCJdfQ.oIdfqjNZLEFkktod9kq99MZqVZf4lzqeGD5ks77UlEfV3NiyG8X4de8IR8d9GXhbZAyjyfoLymvn2b_0O_WeGNFbKQ8419YL5ZjaIf7dN2CtM2BWp8ZMUCdEiEJqWwGa1qHzcn7G80io1_3oUjLdDbe1MzbJNyEbTHGXbqQgzQZ4fcYAww_BWJ-mopbpH14BSCtVPDD-EQ61PYh-7d92_6W8F3oHbEM8fiTsanvERjjU5PPCNo28X_OcZMP05dh_KZftK-fOFWXgzu54s1J5xAfM3_QQJC8EIP0CU7aLASrB3eBk9hpJOy0NN24OQbnGNR1E0U4urbdOMNGLz0AQnA

// eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiIsIng1dCI6Il9VZ3FYR190TUxkdVNKMVQ4Y2FIeFU3Y090YyIsImtpZCI6Il9VZ3FYR190TUxkdVNKMVQ4Y2FIeFU3Y090YyJ9.eyJhdWQiOiIyYWQ1ZGJhNy1iMzU5LTQ4M2MtODllMi0zZGE1ODc4ZWI4ZTUiLCJpc3MiOiJodHRwczovL3N0cy53aW5kb3dzLm5ldC9lMTYzNDZhZS1lZWMxLTQyNjAtYWI1MS1hYzEwMmZhMDU0YmUvIiwiaWF0IjoxNDg3NzAwMTU1LCJuYmYiOjE0ODc3MDAxNTUsImV4cCI6MTQ4NzcwNDA1NSwiYW1yIjpbInB3ZCIsIm1mYSJdLCJmYW1pbHlfbmFtZSI6IldvbmciLCJnaXZlbl9uYW1lIjoiQW5kcmV3IiwiaXBhZGRyIjoiMjEzLjI1MS4yMy4xNjQiLCJuYW1lIjoiQW5kcmV3IFdvbmciLCJub25jZSI6ImMyOTI4ZmYzLTY3ZDgtNDY2OC1iMjk2LTA2ZTlmMWQ2Njg3YiIsIm9pZCI6ImE2MDMzZWY3LTgzMWEtNDY3Zi05MjIzLTZiZmYxZDczM2U0NSIsInBsYXRmIjoiNSIsInN1YiI6Ik9XUlFKaGt3Y2FXX3E4c2lwWmdPZEszWkI5NEZDM3ZoVkhNN3Q5dU1SeVEiLCJ0aWQiOiJlMTYzNDZhZS1lZWMxLTQyNjAtYWI1MS1hYzEwMmZhMDU0YmUiLCJ1bmlxdWVfbmFtZSI6IkFuZHJldy5Xb25nQGhvbWVvZmZpY2Vnc2lnb3Z1ay5vbm1pY3Jvc29mdC5jb20iLCJ1cG4iOiJBbmRyZXcuV29uZ0Bob21lb2ZmaWNlZ3NpZ292dWsub25taWNyb3NvZnQuY29tIiwidmVyIjoiMS4wIn0.h_y8eF7pOyyW4tYntnQELYCvzY3uDVRZK4qKCvgwTBaGoBIjF8FnbFJZ8VRjy-xq_90TiKN9Nuz8UyekW7AYw9J5ZUxXYTPasvW0mEGSQoV4g9WEkp1BnF102WxiEm52TsWVXp3xY54bgRbVyxDq6fSMYv6wfhWfL3d0k1kjZmF35jUkCb7Sxvj2sTsHexLwJQINvNypF4HMjBRyOEQSb09Cy9RaM9xjUnPQk6nEEHkVNPcub9OW4H5Sexl2H4kuyqSZdKY7eb0tbYLP039A2aq0b89w33fYtatVvEDX4kgHNI3J9hkdkTp54n5RBURUosAib35_N4flWcj-jxL-Ug&state=67f50488-4540-4e43-a67f-9fd868a65533|2ad5dba7-b359-483c-89e2-3da5878eb8e5&session_state=7804a609-35c4-4aba-9b30-a345795595ad

// eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiIsIng1dCI6Il9VZ3FYR190TUxkdVNKMVQ4Y2FIeFU3Y090YyIsImtpZCI6Il9VZ3FYR190TUxkdVNKMVQ4Y2FIeFU3Y090YyJ9.eyJhdWQiOiIyYWQ1ZGJhNy1iMzU5LTQ4M2MtODllMi0zZGE1ODc4ZWI4ZTUiLCJpc3MiOiJodHRwczovL3N0cy53aW5kb3dzLm5ldC9lMTYzNDZhZS1lZWMxLTQyNjAtYWI1MS1hYzEwMmZhMDU0YmUvIiwiaWF0IjoxNDg3NzAyOTI1LCJuYmYiOjE0ODc3MDI5MjUsImV4cCI6MTQ4NzcwNjgyNSwiYW1yIjpbInB3ZCIsIm1mYSJdLCJmYW1pbHlfbmFtZSI6IldvbmciLCJnaXZlbl9uYW1lIjoiQW5kcmV3IiwiaXBhZGRyIjoiMjEzLjI1MS4yMy4xNjQiLCJuYW1lIjoiQW5kcmV3IFdvbmciLCJub25jZSI6IjM1MGI1ZTYzLThjYmEtNDIyMi1hMDRkLTIyMWMyYWI1YTFlZSIsIm9pZCI6ImE2MDMzZWY3LTgzMWEtNDY3Zi05MjIzLTZiZmYxZDczM2U0NSIsInBsYXRmIjoiNSIsInN1YiI6Ik9XUlFKaGt3Y2FXX3E4c2lwWmdPZEszWkI5NEZDM3ZoVkhNN3Q5dU1SeVEiLCJ0aWQiOiJlMTYzNDZhZS1lZWMxLTQyNjAtYWI1MS1hYzEwMmZhMDU0YmUiLCJ1bmlxdWVfbmFtZSI6IkFuZHJldy5Xb25nQGhvbWVvZmZpY2Vnc2lnb3Z1ay5vbm1pY3Jvc29mdC5jb20iLCJ1cG4iOiJBbmRyZXcuV29uZ0Bob21lb2ZmaWNlZ3NpZ292dWsub25taWNyb3NvZnQuY29tIiwidmVyIjoiMS4wIn0.MiEZjqgfpWjktdsx6R6_Pb6yjSGMMWxkGIfrLjsw8bZeB8P-mA_3IjpED_LmtTlndDSzuFoIXIKeOKRc1-QZju8cVHnbnE2SPtL0tVY5jwu7XTOdbvV_UiIIIgP5BdO78tE4EVTT-GbVRRLi2lqI51TeMUkPeyCpG4nA9eeWTabQonMhUfqxfIW_xNVNeahwWCQkwaw9Yox-72uwpEBrjpR4RyDsgdun-LezZdtztsWDObE5wCVT3FwAeXMd3SxeT-YBv8YAcQcvZ9GftERr8-CtpWOuL0VWZPAoqGiMZT5nXgFvXTVsiz4zRlOZuzYvtrbtBFPJeAzFBoYxJMRQNw

// eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiIsIng1dCI6Il9VZ3FYR190TUxkdVNKMVQ4Y2FIeFU3Y090YyIsImtpZCI6Il9VZ3FYR190TUxkdVNKMVQ4Y2FIeFU3Y090YyJ9.eyJhdWQiOiIyYWQ1ZGJhNy1iMzU5LTQ4M2MtODllMi0zZGE1ODc4ZWI4ZTUiLCJpc3MiOiJodHRwczovL3N0cy53aW5kb3dzLm5ldC9lMTYzNDZhZS1lZWMxLTQyNjAtYWI1MS1hYzEwMmZhMDU0YmUvIiwiaWF0IjoxNDg3NzAyOTI1LCJuYmYiOjE0ODc3MDI5MjUsImV4cCI6MTQ4NzcwNjgyNSwiYW1yIjpbInB3ZCIsIm1mYSJdLCJmYW1pbHlfbmFtZSI6IldvbmciLCJnaXZlbl9uYW1lIjoiQW5kcmV3IiwiaXBhZGRyIjoiMjEzLjI1MS4yMy4xNjQiLCJuYW1lIjoiQW5kcmV3IFdvbmciLCJub25jZSI6IjM1MGI1ZTYzLThjYmEtNDIyMi1hMDRkLTIyMWMyYWI1YTFlZSIsIm9pZCI6ImE2MDMzZWY3LTgzMWEtNDY3Zi05MjIzLTZiZmYxZDczM2U0NSIsInBsYXRmIjoiNSIsInN1YiI6Ik9XUlFKaGt3Y2FXX3E4c2lwWmdPZEszWkI5NEZDM3ZoVkhNN3Q5dU1SeVEiLCJ0aWQiOiJlMTYzNDZhZS1lZWMxLTQyNjAtYWI1MS1hYzEwMmZhMDU0YmUiLCJ1bmlxdWVfbmFtZSI6IkFuZHJldy5Xb25nQGhvbWVvZmZpY2Vnc2lnb3Z1ay5vbm1pY3Jvc29mdC5jb20iLCJ1cG4iOiJBbmRyZXcuV29uZ0Bob21lb2ZmaWNlZ3NpZ292dWsub25taWNyb3NvZnQuY29tIiwidmVyIjoiMS4wIn0.MiEZjqgfpWjktdsx6R6_Pb6yjSGMMWxkGIfrLjsw8bZeB8P-mA_3IjpED_LmtTlndDSzuFoIXIKeOKRc1-QZju8cVHnbnE2SPtL0tVY5jwu7XTOdbvV_UiIIIgP5BdO78tE4EVTT-GbVRRLi2lqI51TeMUkPeyCpG4nA9eeWTabQonMhUfqxfIW_xNVNeahwWCQkwaw9Yox-72uwpEBrjpR4RyDsgdun-LezZdtztsWDObE5wCVT3FwAeXMd3SxeT-YBv8YAcQcvZ9GftERr8-CtpWOuL0VWZPAoqGiMZT5nXgFvXTVsiz4zRlOZuzYvtrbtBFPJeAzFBoYxJMRQNw


// https://login.microsoftonline.com/homeofficegsigovuk.onmicrosoft.com/oauth2/authorize?response_type=token&client_id=2ad5dba7-b359-483c-89e2-3da5878eb8e5&resource=https%3A%2F%2Fanalysis.windows.net%2Fpowerbi%2Fapi&redirect_uri=http%3A%2F%2Flocalhost%3A8080&state=e04f4637-2f26-4476-8277-751f73fd1210%7Chttps%3A%2F%2Fanalysis.windows.net%2Fpowerbi%2Fapi&client-request-id=e8219941-bd17-4da2-b06e-a95264620dba&x-client-SKU=Js&x-client-Ver=1.0.14&prompt=none&login_hint=Andrew.Wong%40homeofficegsigovuk.onmicrosoft.com&domain_hint=homeofficegsigovuk.onmicrosoft.com

// "https://login.microsoftonline.com/homeofficegsigovuk.onmicrosoft.com/oauth2/authorize?response_type=token&client_id=2ad5dba7-b359-483c-89e2-3da5878eb8e5&resource=https%3A%2F%2Fanalysis.windows.net%2Fpowerbi%2Fapi&redirect_uri=http%3A%2F%2Flocalhost%3A8080&state=babad214-05a4-44fd-86ff-d730be98a599%7Chttps%3A%2F%2Fanalysis.windows.net%2Fpowerbi%2Fapi&client-request-id=6e4e2441-fbb2-45b5-b595-e583a8f2bfb9&x-client-SKU=Js&x-client-Ver=1.0.14&prompt=none&login_hint=Andrew.Wong%40homeofficegsigovuk.onmicrosoft.com&domain_hint=homeofficegsigovuk.onmicrosoft.com"

// eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiIsIng1dCI6Il9VZ3FYR190TUxkdVNKMVQ4Y2FIeFU3Y090YyIsImtpZCI6Il9VZ3FYR190TUxkdVNKMVQ4Y2FIeFU3Y090YyJ9.eyJhdWQiOiJodHRwczovL2FuYWx5c2lzLndpbmRvd3MubmV0L3Bvd2VyYmkvYXBpIiwiaXNzIjoiaHR0cHM6Ly9zdHMud2luZG93cy5uZXQvZTE2MzQ2YWUtZWVjMS00MjYwLWFiNTEtYWMxMDJmYTA1NGJlLyIsImlhdCI6MTQ4Nzg3ODE2OCwibmJmIjoxNDg3ODc4MTY4LCJleHAiOjE0ODc4ODIwNjgsImFjciI6IjEiLCJhbXIiOlsicHdkIiwibWZhIl0sImFwcGlkIjoiMmFkNWRiYTctYjM1OS00ODNjLTg5ZTItM2RhNTg3OGViOGU1IiwiYXBwaWRhY3IiOiIwIiwiZV9leHAiOjEwODAwLCJmYW1pbHlfbmFtZSI6IldvbmciLCJnaXZlbl9uYW1lIjoiQW5kcmV3IiwiaXBhZGRyIjoiMjEzLjI1MS4yMy4xNjQiLCJuYW1lIjoiQW5kcmV3IFdvbmciLCJvaWQiOiJhNjAzM2VmNy04MzFhLTQ2N2YtOTIyMy02YmZmMWQ3MzNlNDUiLCJwbGF0ZiI6IjUiLCJwdWlkIjoiMTAwMzAwMDA5QjY4MDc2NCIsInNjcCI6IkRhdGFzZXQuUmVhZC5BbGwgR3JvdXAuUmVhZCBSZXBvcnQuUmVhZC5BbGwiLCJzdWIiOiJTdzFiMWpVRFdCVG11NnNNS2piRTNzN1F4UlRQWHhaSkhObzFPTXZKV2xNIiwidGlkIjoiZTE2MzQ2YWUtZWVjMS00MjYwLWFiNTEtYWMxMDJmYTA1NGJlIiwidW5pcXVlX25hbWUiOiJBbmRyZXcuV29uZ0Bob21lb2ZmaWNlZ3NpZ292dWsub25taWNyb3NvZnQuY29tIiwidXBuIjoiQW5kcmV3LldvbmdAaG9tZW9mZmljZWdzaWdvdnVrLm9ubWljcm9zb2Z0LmNvbSIsInZlciI6IjEuMCJ9.ga2BjKIoBTBKAi2_hkiN5X8Er9yWm5MVG-NO9-oLW2dldYXJlWfIsnTb47AFcNwItAoWHcZl9rAUcNoNrEYKZlctznavm1MX6u_9kwD690EYsueRgTjcAMWZmyDj1sE5ufE_itcmOafNnB12QrfXfCC-lO2w3311UERA6g27Z68lYRpIqA-qf7aOY45ORDJXl7GW6qL2rI4gd6btv1DBvYCIQddHYW306lZWXGBYH8pFgMDIspcuP-oWR5tpbnK9CowVNAUchuHwblglsx-z7oyhvlJbEnquXT8oGIHmM97r7LT_OohCBxJ-94dK9RxJLZ1W3Mw6BzOxJZ0Te0fzOw