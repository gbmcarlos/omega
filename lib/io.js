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
    },

    start: function() {
        this.applyStyles();
        this.bindEvents();
    },

    bindEvents: function() {

        this.domManager.on(this.output.root.element, "mousemove", this.captureMouseMove, this);
        this.domManager.on(this.output.root.element, "mousedown", this.captureMouseDown, this);
        this.domManager.on(this.output.root.element, "mouseup", this.captureMouseUp, this);
        this.domManager.on(this.output.root.element, "mousewheel", this.captureMouseWheel, this);

    },

    captureMouseMove: function(event) {
        console.log('mousemove', this.getEventCoordinates(event));
    },

    captureMouseDown: function(event) {
        console.log('mousedown', this.getEventCoordinates(event));
    },

    captureMouseUp: function(event) {
        console.log('mouseup', this.getEventCoordinates(event));
    },

    captureMouseWheel: function(event) {
        console.log('mousewheel', this.getEventCoordinates(event), event.deltaY);
    },

    getEventCoordinates: function(event) {
        return {
            x: event.pageX - this.output.root.left,
            y: event.pageY - this.output.root.top
        };
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

        this.domManager.append(containerElement, this.output.root.element);

        this.output.root.element.style.width = this.config.container.width;
        this.output.root.element.style.height = this.config.container.height;

        this.output.root.left = this.output.container.offsetLeft;
        this.output.root.top = this.output.container.offsetTop;
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
        },

        on: function(element, event, handler, context) {
            element.addEventListener(event, function(e) {
                e = e ? e : window.event;
                handler.call(context, e);
            });
        }

    }

};