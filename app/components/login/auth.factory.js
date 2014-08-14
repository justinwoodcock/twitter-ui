'use strict';

twitter.factory('AuthFactory', [

    function() {
        return {
            hasAuth: false,
            setAuth: function(hasAuth) {
                this.hasAuth = hasAuth;
                localStorage.setItem('hasAuth', this.hasAuth);
            },
            getAuth: function() {
                this.hasAuth = JSON.parse(localStorage.getItem('hasAuth'));
                return this.hasAuth;
            }
        }
    }
]);