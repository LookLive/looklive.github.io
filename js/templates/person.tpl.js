(function() {
  var template = Handlebars.template, templates = Handlebars.templates = Handlebars.templates || {};
templates['person'] = template({"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
    var stack1, helper, alias1=helpers.helperMissing, alias2="function", alias3=this.escapeExpression, alias4=this.lambda;

  return "<li class=\"media\" id=\"app_"
    + alias3(((helper = (helper = helpers.id || (depth0 != null ? depth0.id : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"id","hash":{},"data":data}) : helper)))
    + "\">\n    <div class=\"media\">\n      <div class=\"media-left\">\n        <a href=\"\">\n          <img class=\"media-object\" src=\"http:"
    + alias3(alias4(((stack1 = (depth0 != null ? depth0.avatar : depth0)) != null ? stack1.url : stack1), depth0))
    + "\" style=\"width: 50px; height: 50px;\">\n        </a>\n      </div>\n      <div class=\"media-body\" id=\"app_body_"
    + alias3(((helper = (helper = helpers.id || (depth0 != null ? depth0.id : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"id","hash":{},"data":data}) : helper)))
    + "\">\n        <h4 class=\"media-heading\">"
    + alias3(alias4(((stack1 = (depth0 != null ? depth0.subject : depth0)) != null ? stack1.name : stack1), depth0))
    + "</h4>\n        <p>appears at "
    + alias3((helpers.pretty_timestamp || (depth0 && depth0.pretty_timestamp) || alias1).call(depth0,(depth0 != null ? depth0.timestamp : depth0),{"name":"pretty_timestamp","hash":{},"data":data}))
    + ", wearing</p>\n        <span class=\"label label-info\" id=\"timer_"
    + alias3(((helper = (helper = helpers.id || (depth0 != null ? depth0.id : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"id","hash":{},"data":data}) : helper)))
    + "\">Showing for 10 more seconds</span>\n      </div>\n    </div>\n</li>\n";
},"useData":true});
})();