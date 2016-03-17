var Backbone = require('backbone');

module.exports = Backbone.Model.extend({
  url: 'http://tiny-tiny.herokuapp.com/collections/bitteraboutthebitterapp',
  idAttribute:'_id',
  initialize: function () {
    console.log('its alive, the like, our model!');
  }
});
