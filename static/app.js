var myApp = angular.module('loginForm', []);

myApp.service('sharedProperties', function($window) {
    var toE
    var oauthToken = "";
    var userName = "";
    var apiKey = $window.apiKeyId;
    var apiSecret = $window.apiKeySecret;

    var Base64={_keyStr:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=",encode:function(e){var t="";var n,r,i,s,o,u,a;var f=0;e=Base64._utf8_encode(e);while(f<e.length)
        {n=e.charCodeAt(f++);r=e.charCodeAt(f++);i=e.charCodeAt(f++);s=n>>2;o=(n&3)<<4|r>>4;u=(r&15)<<2|i>>6;a=i&63;if(isNaN(r)){u=a=64}else if(isNaN(i)){a=64}t=t+this._keyStr.charAt(s)+this._keyStr.
            charAt(o)+this._keyStr.charAt(u)+this._keyStr.charAt(a)}return t},decode:function(e){var t="";var n,r,i;var s,o,u,a;var f=0;e=e.replace(/[^A-Za-z0-9\+\/\=]/g,"");while(f<e.length){s=this._keyStr.
            indexOf(e.charAt(f++));o=this._keyStr.indexOf(e.charAt(f++));u=this._keyStr.indexOf(e.charAt(f++));a=this._keyStr.indexOf(e.charAt(f++));n=s<<2|o>>4;r=(o&15)<<4|u>>2;i=(u&3)<<6|a;t=t+String.
            fromCharCode(n);if(u!=64){t=t+String.fromCharCode(r)}if(a!=64){t=t+String.fromCharCode(i)}}t=Base64._utf8_decode(t);return t},_utf8_encode:function(e){e=e.replace(/\r\n/g,"\n");var t="";for(var n=0;n<e.length;n++)
        {var r=e.charCodeAt(n);if(r<128){t+=String.fromCharCode(r)}else if(r>127&&r<2048){t+=String.fromCharCode(r>>6|192);t+=String.fromCharCode(r&63|128)}else{t+=String.fromCharCode(r>>12|224);t+=String.fromCharCode(r>>6&63|128);
            t+=String.fromCharCode(r&63|128)}}return t},_utf8_decode:function(e){var t="";var n=0;var r=c1=c2=0;while(n<e.length){r=e.charCodeAt(n);if(r<128){t+=String.fromCharCode(r);n++}else if(r>191&&r<224){c2=e.charCodeAt(n+1);
            t+=String.fromCharCode((r&31)<<6|c2&63);n+=2}else{c2=e.charCodeAt(n+1);c3=e.charCodeAt(n+2);t+=String.fromCharCode((r&15)<<12|(c2&63)<<6|c3&63);n+=3}}return t}}

    if(apiKey != undefined){
        var toEncode = apiKey.concat(':', apiSecret);
        var encodedAuth = Base64.encode(toEncode);
    }       

    return {
        getApiKey: function() {
            return apiKey;
        },
        setApiKey: function(value) {
            apiKey = value;
        },
        getApiSecret: function() {
            return apiSecret;
        },
        setApiSecret: function(value) {
            apiSecret = value;
        },
        getEncodedAuth: function() {
            return encodedAuth;
        },
        setEncodedAuth: function(value) {
            encodedAuth = value;
        },
        getOauthToken: function() {
            return oauthToken;
        },
        setOauthToken: function(value) {
            oauthToken = value;
        },
        getUsername: function() {
            return userName;
        },
        setUsername: function(value) {
            userName = value;
        }
    };
});

myApp.controller('loginController', ["$scope", "$window", "$http", 'sharedProperties', function($scope, $window, $http, sharedProperties) {

    console.log("Initializing loginController");

    $scope.submitFunction = function() {

        $window.location.href = "/login?next=%2Fdashboard";
    }
}]);

myApp.controller('logoutController', ["$scope", "$window", "$http", function($scope, $window, $http) {

    $scope.makeLogoutCall = function() {

        $window.location.href = "/logout";

    }
}]);

myApp.controller('makeAccountController', ["$scope", "$http", "$window", function($scope, $http, $window) {

    $scope.signUp = function() {

        $window.location.href = "/register";
    
    }

}]);

myApp.controller('RestBasicController', ["$scope", "$window", "$http", 'sharedProperties', function($scope, $window, $http, sharedProperties) {

    $scope.myCity = "______";

    $scope.makeRestCall = function() {

        //Get the temperature of specified city from REST endpoint, using Basic Auth
        $http({method: "GET", url: '/weather/' + $scope.city, headers: {'Authorization': 'Basic ' + sharedProperties.getEncodedAuth()}}).success(function(data, status, headers, config) {
            $scope.temp = data + ' F';
            $scope.myCity = $scope.city;

        })
            .error(function(data, status, headers, config) {
                $window.alert("Error");
        });

    }
}]);

myApp.controller('OauthTokenController', ["$scope", "$http", "$window",'sharedProperties', function($scope, $http, $window, sharedProperties) {

    $scope.providers = [{provider:{Id:'London', ScopeName: 'London'}},{provider:{Id:'Berlin', ScopeName: 'Berlin'}},
        {provider:{Id:'San Mateo', ScopeName: 'SanMateo'}}, {provider:{Id:'San Francisco', ScopeName: 'SanFrancisco'}}];
    $scope.ids = {};


    $scope.getOauthToken = function() {

        var myData = $.param({grant_type: "client_credentials"});
        var scopeData = "";

        var first = 0;
        for(var i in $scope.ids) {
            console.log(i + "=" + $scope.ids[i]);
            if($scope.ids[i] == true){
                if(first == 0) {
                    scopeData = scopeData + i;
                    first = 1;
                }
                else{
                    scopeData = scopeData + " " + i;
                }
            }
        }

        myData = $.param({grant_type: "client_credentials", scope: scopeData});

        console.log(myData);

        //Try and get an Oauth Token
        $http({method: "POST", url: '/oauth',
            headers: {'Authorization': 'Basic ' + sharedProperties.getEncodedAuth(), 'Content-Type': 'application/x-www-form-urlencoded'},
            data : myData})

            .success(function(data, status, headers, config) {
                console.log(data.access_token);
                var oauthToken = data.access_token;
                sharedProperties.setOauthToken(oauthToken);
                $scope.oauthToken = oauthToken;


            }).
            error(function(data, status, headers, config) {
                $window.alert("Error");
            });
        }
}]);


myApp.controller('RestOauthController', ["$scope", "$window", "$http", 'sharedProperties', function($scope, $window, $http, sharedProperties) {

    $scope.myCity = "______";

    $scope.makeRestCall = function() {

        //Get the temperature of specified city from REST endpoint, using Oauth
        $http({method: "GET", url: '/weather/' + $scope.city, headers: {'Authorization': 'Bearer ' + sharedProperties.getOauthToken()}}).success(function(data, status, headers, config) {
            $scope.temp = data + ' F';
            $scope.myCity = $scope.city;

        })
            .error(function(data, status, headers, config) {
                $window.alert("Permission Denied!");
        });

    }
}]);
