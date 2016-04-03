/**
 * Created by gbmcarlos on 4/3/16.
 */

var OmegaIO = function() {

};

OmegaIO.prototype = {

    init: function(config) {
        this.config = config;
        this.setContainer();
    },

    setContainer: function() {

        var containerElement = this.domManager.id(this.config.container);

        if (!containerElement) {
            console.error('No Omega container found by \'' + this.config.container + '\'');
            return;
        }

        this.domManager.empty(containerElement);
        containerElement.style.width = this.config.width;
        containerElement.style.height = this.config.height;

        this.output = {
            container: containerElement,
            root: {
                element: this.domManager.createSvgElement('svg', 'svgContainer')
            }
        };

        this.output.root.element.style.width = this.config.width;
        this.output.root.element.style.height = this.config.height;

        this.domManager.append(containerElement, this.output.root.element);
    },

    domManager: {

        id: function(selector) {
            return document.getElementById(selector);
        },

        class: function(selector) {
            return document.getElementsByClassName(selector);
        },

        _: function(selector) {
            var result = document.querySelectorAll(selector);
            return (!result || !result.length) ? null : result;
        },

        empty: function(element) {
            element.innerHTML = null;
        },

        createSvgElement: function(tag, id) {

            var element = document.createElementNS('http://www.w3.org/2000/svg', tag);

            if (!!id) {
                element.setAttribute('id', id);
            }

            return element;
        },

        append: function(parent, child) {
            parent.appendChild(child);
        }

    }

};