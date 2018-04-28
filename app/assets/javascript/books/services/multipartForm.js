function multipartForm($http){
    this.post = function(uploadUrl, data){
        var fd = new FormData();
        for(var key in data){
            // console.log(key, data[key])

            fd.append(key, data[key]);
            // console.log(comic)
        }
        $http.post(uploadUrl, fd,{
            transformRequest: angular.identity,
            headers: {
                'Content-Type': undefined
            }
        })
    }
}

angular
    .module('app')
    .service('multipartForm', multipartForm);
