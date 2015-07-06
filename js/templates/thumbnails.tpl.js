(function() {
  var template = Handlebars.template, templates = Handlebars.templates = Handlebars.templates || {};
templates['thumbnails'] = template({"1":function(depth0,helpers,partials,data) {
    var stack1, helper, alias1=helpers.helperMissing, alias2="function", alias3=this.escapeExpression;

  return "<img id=\"thumb_"
    + alias3(((helper = (helper = helpers.id || (depth0 != null ? depth0.id : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"id","hash":{},"data":data}) : helper)))
    + "\" data-seconds=\""
    + alias3(((helper = (helper = helpers.timestamp || (depth0 != null ? depth0.timestamp : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"timestamp","hash":{},"data":data}) : helper)))
    + "\" class=\"img-thumbnail\" src=\"http:"
    + alias3(this.lambda(((stack1 = (depth0 != null ? depth0.image : depth0)) != null ? stack1.url : stack1), depth0))
    + "\" style=\"width: 50px;\" alt=\"appears at "
    + alias3((helpers.pretty_timestamp || (depth0 && depth0.pretty_timestamp) || alias1).call(depth0,(depth0 != null ? depth0.timestamp : depth0),{"name":"pretty_timestamp","hash":{},"data":data}))
    + "\" title=\"appears at "
    + alias3((helpers.pretty_timestamp || (depth0 && depth0.pretty_timestamp) || alias1).call(depth0,(depth0 != null ? depth0.timestamp : depth0),{"name":"pretty_timestamp","hash":{},"data":data}))
    + "\">\n";
},"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
    var stack1, helper, options, buffer = 
  "<p>Appearances in this episode</p>\n";
  stack1 = ((helper = (helper = helpers.items || (depth0 != null ? depth0.items : depth0)) != null ? helper : helpers.helperMissing),(options={"name":"items","hash":{},"fn":this.program(1, data, 0),"inverse":this.noop,"data":data}),(typeof helper === "function" ? helper.call(depth0,options) : helper));
  if (!helpers.items) { stack1 = helpers.blockHelperMissing.call(depth0,stack1,options)}
  if (stack1 != null) { buffer += stack1; }
  return buffer;
},"useData":true});
})();