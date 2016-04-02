/**
 * Created by gbmcarlos on 3/27/16.
 */

'use strict';

var Omega = {};

var bootstrapping = {
    init: function() {
        DependencyInjection(Omega);
        RegisterModules(Omega);
    },
    start: function() {
        var Base = Omega.container.get('OmegaBase');
        Base.init();
        Base.start();
    },
    run: function() {
        this.init();
        this.start()
    }
};