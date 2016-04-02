/**
 * Created by gbmcarlos on 3/28/16.
 */

var OmegaBase = function($config) {
    this.$config = $config;
};

OmegaBase.prototype = {
    init: function() {
        this.config = this.$config.getConfig();
    },

    start: function() {
        console.log(this.config);
    }
};