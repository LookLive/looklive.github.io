(function() {
  var template = Handlebars.template, templates = Handlebars.templates = Handlebars.templates || {};
templates['episode'] = template({"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
    var stack1, helper, alias1=this.lambda, alias2=this.escapeExpression, alias3=helpers.helperMissing, alias4="function";

  return alias2(alias1(((stack1 = (depth0 != null ? depth0.show : depth0)) != null ? stack1.name : stack1), depth0))
    + " season "
    + alias2(alias1(((stack1 = (depth0 != null ? depth0.season : depth0)) != null ? stack1.order_number : stack1), depth0))
    + ", episode "
    + alias2(((helper = (helper = helpers.order_number || (depth0 != null ? depth0.order_number : depth0)) != null ? helper : alias3),(typeof helper === alias4 ? helper.call(depth0,{"name":"order_number","hash":{},"data":data}) : helper)))
    + ": "
    + alias2(((helper = (helper = helpers.name || (depth0 != null ? depth0.name : depth0)) != null ? helper : alias3),(typeof helper === alias4 ? helper.call(depth0,{"name":"name","hash":{},"data":data}) : helper)));
},"useData":true});
})();