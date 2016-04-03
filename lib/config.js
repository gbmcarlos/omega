/**
 * Created by gbmcarlos on 4/2/16.
 */

var OmegaConfig = function() {

    this.config = {
        io: {
            container: {
                element: 'omega',
                width: '900px',
                height: '300px'
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