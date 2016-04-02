/**
 * Created by gbmcarlos on 3/28/16.
 */

var Utils = {

    findKey: function(collection, condition) {
        for (var i = 0;i < collection.length;i++) {
            if (collection[i][condition.key] == condition.value) {
                return i;
            }
        }
    },

    find: function(collection, condition) {
        return collection[this.findKey(collection, condition)];
    },

    foreach: function(array, callback, context) {
        if (!!array && array.length > 0) {
            for (var i = 0; i < array.length;i++) {
                callback.call(context, i, array[i]);
            }
        }
    }
};