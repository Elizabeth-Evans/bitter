var $ = require('jquery');
var Backbone = require('backbone');
var BitterCollection = require('./bitterCollection');
var BitterCollectionView = require('./bitterCollectionView');
var AddBitterView = require('./addBitterView');

$(document).ready(function(){
  var finalBitterCol = new BitterCollection();
  new AddBitterView();
  finalBitterCol.fetch().then(function(data){
    var collection = new BitterCollection(data);
    new BitterCollectionView({collection: collection});
  })
});
