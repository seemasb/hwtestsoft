$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("file:FeatureCases/Senarios.feature");
formatter.feature({
  "name": "CheckOut",
  "description": "",
  "keyword": "Feature"
});
formatter.scenario({
  "name": "Two banans scanned separately",
  "description": "",
  "keyword": "Scenario"
});
formatter.step({
  "name": "the price of a \"banana\" is 40",
  "keyword": "Given "
});
formatter.match({
  "location": "FirstAssigmentPackage.CheckoutProcess.thePriceOfAIs(java.lang.String,java.lang.Integer)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I checkout 1 \"banana\"",
  "keyword": "When "
});
formatter.match({
  "location": "FirstAssigmentPackage.CheckoutProcess.iCheckout(java.lang.Integer,java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I checkout 1 \"banana\"",
  "keyword": "And "
});
formatter.match({
  "location": "FirstAssigmentPackage.CheckoutProcess.iCheckout(java.lang.Integer,java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the total price should be 80",
  "keyword": "Then "
});
formatter.match({
  "location": "FirstAssigmentPackage.CheckoutProcess.TotalPriceShouldBe(java.lang.Integer)"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "A banana and Apple",
  "description": "",
  "keyword": "Scenario"
});
formatter.step({
  "name": "the price of a \"banana\" is 40",
  "keyword": "Given "
});
formatter.match({
  "location": "FirstAssigmentPackage.CheckoutProcess.thePriceOfAIs(java.lang.String,java.lang.Integer)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the price of a \"apple\" is 25",
  "keyword": "And "
});
formatter.match({
  "location": "FirstAssigmentPackage.CheckoutProcess.thePriceOfAIs(java.lang.String,java.lang.Integer)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I checkout 1 \"banana\"",
  "keyword": "When "
});
formatter.match({
  "location": "FirstAssigmentPackage.CheckoutProcess.iCheckout(java.lang.Integer,java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I checkout 1 \"apple\"",
  "keyword": "And "
});
formatter.match({
  "location": "FirstAssigmentPackage.CheckoutProcess.iCheckout(java.lang.Integer,java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the total price should be 65",
  "keyword": "Then "
});
formatter.match({
  "location": "FirstAssigmentPackage.CheckoutProcess.TotalPriceShouldBe(java.lang.Integer)"
});
formatter.result({
  "status": "passed"
});
});