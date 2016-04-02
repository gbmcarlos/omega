/**
 * Created by gbmcarlos on 3/28/16.
 */

var OmegaBase = function($config, $displayer) {
    this.$config = $config;
    this.$displayer = $displayer;
};

OmegaBase.prototype = {
    init: function() {
        this.config = this.$config.getConfig();
        this.display = this.$displayer.run();
    },

    start: function() {
        console.log(this.config);
        console.log(this.display);
    }
};