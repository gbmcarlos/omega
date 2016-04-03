/**
 * Created by gbmcarlos on 3/28/16.
 */

var OmegaBase = function($config, $io) {
    this.$config = $config;
    this.$io = $io;
};

OmegaBase.prototype = {
    init: function() {
        this.config = this.$config.getConfig();
        this.io = this.$io.init(this.config.io);
    },

    start: function() {
    }
};