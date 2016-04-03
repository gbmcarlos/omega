/**
 * Created by gbmcarlos on 4/3/16.
 */

var OmegaIO = function() {

    this.styles = {
        container: {
            border: '1px solid black'
        }
    };

};

OmegaIO.prototype = {

    init: function(config) {
        this.config = config;
        this.setContainer();
        this.applyStyles();
    },

    setContainer: function() {

        var containerElement = this.domManager.id(this.config.container.element);

        if (!containerElement) {
            console.error('No Omega container found by \'' + this.config.container.element + '\'');
            return;
        }

        this.domManager.empty(containerElement);
        containerElement.style.width = this.config.container.width;
        containerElement.style.height = this.config.container.height;

        this.output = {
            container: containerElement,
            root: {
                element: this.domManager.createSvgElement('svg', 'svgRoot')
            }
        };

        this.output.root.element.style.width = this.config.container.width;
        this.output.root.element.style.height = this.config.container.height;

        this.domManager.append(containerElement, this.output.root.element);
    },

    applyStyles: function() {

        this.output.container.style.border = this.styles.container.border;

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