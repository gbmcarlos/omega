/**
 * Created by gbmcarlos on 3/28/16.
 */

var RegisterModules = function(App) {

    App.container.register('OmegaBase', OmegaBase, ['OmegaNav', 'OmegaConfig']);
    App.container.register('OmegaConfig', OmegaConfig);

};