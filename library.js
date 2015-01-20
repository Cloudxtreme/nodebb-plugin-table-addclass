(function(module) {
    "use strict";

    var TableAddClass = {};

    TableAddClass.parse = function(data, callback) {
        if (!data || !data.postData || !data.postData.content) {
            return callback(null, data);
        }
        data.postData.content = data.postData.content.replace(/<table>/g, '<table class="table table-striped table-hover">');
        callback(null, data);
    };

    module.exports = TableAddClass;
}(module));