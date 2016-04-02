/**
 * Created by gbmcarlos on 4/2/16.
 */

var OmegaConfig = function() {

    this.config = {
        displayer: {
            strategy: 'svg',
            svg: {
                container: '#omega'
            }
        }
    };

};

OmegaConfig.prototype = {

    parseConfig: function() {

        this.parsedConfig = this.config;

        return this.parsedConfig;

    },

    getConfig: function() {
        if (!!this.parsedConfig) {
            return this.parsedConfig;
        } else {
            return this.parseConfig();
        }
    }
};