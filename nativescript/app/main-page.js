var Observable = require("data/observable").Observable;
var ObservableArray = require("data/observable-array").ObservableArray;

exports.loaded = function(args) {
  var pageData = new Observable();
  var list = new ObservableArray([]);
  for (var i = 0; i < 500000; i++) {
    list.push({ number: i });
  }
  args.object.bindingContext = pageData;
  pageData.set("list", list);
};