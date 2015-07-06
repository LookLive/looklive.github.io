(function() {
  var template = Handlebars.template, templates = Handlebars.templates = Handlebars.templates || {};
templates['products'] = template({"1":function(depth0,helpers,partials,data) {
    var stack1, alias1=this.lambda, alias2=this.escapeExpression;

  return "  <div class=\"media\">\n    <div class=\"media-left\">\n      <a href=\"#\">\n        <img class=\"media-object\" src=\"http:"
    + alias2(alias1(((stack1 = ((stack1 = (depth0 != null ? depth0.product : depth0)) != null ? stack1.image : stack1)) != null ? stack1.url : stack1), depth0))
    + "\" style=\"width: 50px; height: 50px;\">\n      </a>\n    </div>\n    <div class=\"media-body\">\n      <h4 class=\"media-heading\">"
    + alias2(alias1(((stack1 = ((stack1 = (depth0 != null ? depth0.product : depth0)) != null ? stack1.brand : stack1)) != null ? stack1.name : stack1), depth0))
    + "</h4>\n      "
    + alias2(alias1(((stack1 = (depth0 != null ? depth0.product : depth0)) != null ? stack1.name : stack1), depth0))
    + "\n"
    + ((stack1 = helpers.blockHelperMissing.call(depth0,alias1(((stack1 = (depth0 != null ? depth0.details : depth0)) != null ? stack1.listings : stack1), depth0),{"name":"details.listings","hash":{},"fn":this.program(2, data, 0),"inverse":this.noop,"data":data})) != null ? stack1 : "")
    + "    </div>\n  </div>\n";
},"2":function(depth0,helpers,partials,data) {
    var helper, alias1=helpers.helperMissing, alias2="function", alias3=this.escapeExpression;

  return "        <a href=\""
    + alias3(((helper = (helper = helpers.url || (depth0 != null ? depth0.url : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"url","hash":{},"data":data}) : helper)))
    + "\" target=\"_blank\">"
    + alias3(((helper = (helper = helpers.price || (depth0 != null ? depth0.price : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"price","hash":{},"data":data}) : helper)))
    + "</a>\n";
},"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
    var stack1, helper, options;

  stack1 = ((helper = (helper = helpers.product_occurrences || (depth0 != null ? depth0.product_occurrences : depth0)) != null ? helper : helpers.helperMissing),(options={"name":"product_occurrences","hash":{},"fn":this.program(1, data, 0),"inverse":this.noop,"data":data}),(typeof helper === "function" ? helper.call(depth0,options) : helper));
  if (!helpers.product_occurrences) { stack1 = helpers.blockHelperMissing.call(depth0,stack1,options)}
  if (stack1 != null) { return stack1; }
  else { return ''; }
},"useData":true});
})();