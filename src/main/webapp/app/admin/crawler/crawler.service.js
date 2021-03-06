/*(function() {
    'use strict';

    angular
        .module('klaskApp')
        .factory('CrawlerService', CrawlerService);

    CrawlerService.$inject = ['$rootScope', '$http'];

    function CrawlerService ($rootScope, $http) {
        var service = {
            getCrawler: getCrawler,
            threadDump: threadDump
        };

        return service;


        function getCrawler () {
            return $http.get('management/jhipster/crawler').then(function (response) {
                return response.data;
            });
        }

    }
})();
*/

(function () {
    'use strict';
    angular
        .module('klaskApp')
        .factory('CrawlerService', CrawlerService);

    CrawlerService.$inject = ['$resource'];

    function CrawlerService($resource) {
        var resourcelUrl = "api/crawler";

        return $resource(resourcelUrl, {}, {
            'iscrawling': {
            method: 'GET',
            transformResponse: function(data, headers) {
                        return {data:data};
                    }
            },
            'crawler': {method: 'POST'},
            'stopcrawler': {method: 'DELETE'}
        });
    }

})();
