(function() {
    var app = angular.module('app');
    
    app.factory('proxyFactory', ['$http', '$log', function($http, $log) {
        
        var Proxy = function(url) {
            this.url = url;
        };

        Proxy.prototype.error = function(data, status, headers, config){
            $log.error('%s %s %s', config.method, config.url, status);
        };

        Proxy.prototype.getAll = function(success) {
            var that = this;
            $http({
                method: 'GET',
                url: that.url
            }).success(success).error(that.error);
        };
        
        Proxy.prototype.save = function(model, success) {
            var that = this;
            console.log("PROXY SAVE");
            $http({
                method: 'POST',
                url: that.url,
                data: model
            }).success(success).error(that.error);
        };
        
        Proxy.prototype.delete = function(id, success) {
            var that = this;
            $http({
                method: "DELETE",
                url: that.url + id
            }).success(success).error(that.error);       
        };
        
        return function(url) {
            return new Proxy(url);
        };
    }]);
})();