(function(module) {
    "use strict";

    var TableAddClass = {};

    TableAddClass.parse = function(postContent, callback) {
        postContent = postContent.replace(/<table>/g, '<table class="table table-striped table-hover">');
        callback(null, postContent);
    };

    module.exports = TableAddClass;
}(module));