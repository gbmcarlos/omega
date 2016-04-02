/**
 * Created by gbmcarlos on 3/28/16.
 */

var RegisterModules = function(App) {

    App.container.register('OmegaBase', OmegaBase, ['OmegaConfig', 'OmegaDisplayer']);
    App.container.register('OmegaConfig', OmegaConfig);
    App.container.register('OmegaDisplayer', OmegaDisplayer);

};