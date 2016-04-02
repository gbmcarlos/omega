/**
 * Created by gbmcarlos on 3/28/16.
 */

var DependencyInjection = function(App) {

    var p = {

        registered: [],

        building: [],

        register: function(name, object, dependencies) {

            var exists = !!Utils.find(this.registered, {key: 'name', value: name});

            if (!exists) {
                this.registered.push({
                    name: name,
                    object: object,
                    dependencies: dependencies
                });
            } else {
                console.error('Module already registered');
            }
        },

        get: function(name) {

            this.building[0] = name;
            var module = this._get(name);

            return module;
        },

        _get: function(name) {

            var moduleDefinition = Utils.find(this.registered, {key: 'name', value: name});

            if (!!moduleDefinition) {

                if (this.building.indexOf(moduleDefinition.name) != -1 &&
                    this.building.indexOf(moduleDefinition.name) != this.building.length - 1) {
                    console.error('Circular dependency with \'' + moduleDefinition.name +
                        '\' when requesting for module \'' + this.building[0] + '\'');
                } else {
                    return this.buildModule(moduleDefinition);
                }

            } else {
                console.error('Module \'' + name + '\' not registered');
            }

        },

        buildModule: function(moduleDefinition) {

            var dependencies = [];

            Utils.foreach(moduleDefinition.dependencies, function(i, dependency) {
                var dependency = this._get(dependency);
                dependencies.push(dependency);
            }, this);

            var module = {};
            module.__proto__ = moduleDefinition.object.prototype;
            moduleDefinition.object.apply(module, dependencies);

            return module;

        }

    };

    var container = {

        register: function(name, object, dependencies) {
            p.register(name, object, dependencies);
        },

        get: function(name) {
            return p.get(name);
        }
    };

    App.container = container;
};
