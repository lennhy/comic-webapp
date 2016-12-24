angular
  .module('app')
      .filter('returnPublisher', function () {
            return function (user) {
                if(user.role === "publisher"){
                  return user.name;
                }
            }
        });
        // .filter()
