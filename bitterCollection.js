var Backbone = require('backbone');
var BitterModel = require('./bitterModel');
module.exports = Backbone.Collection.extend({
  model: BitterModel,
  url: 'http://tiny-tiny.herokuapp.com/collections/bitteraboutthebitterapp',
  initialize: function(options){
    console.log(options);
  }
});
