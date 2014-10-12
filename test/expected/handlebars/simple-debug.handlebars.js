define("simple-debug.handlebars", [ "gallery/handlebars/1.0.2/runtime-debug" ], function(require, exports, module) {
    var Handlebars = require("gallery/handlebars/1.0.2/runtime-debug");
    var template = Handlebars.template;
    module.exports = template(function(Handlebars, depth0, helpers, partials, data) {
        this.compilerInfo = [ 4, ">= 1.0.0" ];
        helpers = helpers || {};
        for (var key in Handlebars.helpers) {
            helpers[key] = helpers[key] || Handlebars.helpers[key];
        }
        data = data || {};
        var buffer = "", stack1, helperMissing = helpers.helperMissing, escapeExpression = this.escapeExpression, self = this;
        function program1(depth0, data) {
            var buffer = "", helper, options;
            buffer += "\n<p>" + escapeExpression((helper = helpers._ || depth0 && depth0._, 
            options = {
                hash: {},
                data: data
            }, helper ? helper.call(depth0, depth0, options) : helperMissing.call(depth0, "_", depth0, options))) + "</p>\n";
            return buffer;
        }
        stack1 = helpers.each.call(depth0, depth0 && depth0.items, {
            hash: {},
            inverse: self.noop,
            fn: self.program(1, program1, data),
            data: data
        });
        if (stack1 || stack1 === 0) {
            buffer += stack1;
        }
        buffer += "\n";
        return buffer;
    });
});