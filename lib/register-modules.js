/**
 * Created by gbmcarlos on 3/28/16.
 */

var RegisterModules = function(App) {

    App.container.register('OmegaBase', OmegaBase, ['OmegaConfig', 'OmegaIO']);
    App.container.register('OmegaConfig', OmegaConfig);
    App.container.register('OmegaIO', OmegaIO);

};