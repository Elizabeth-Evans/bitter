var $ = require('jquery');
var Backbone = require('backbone');
var myTmpl = require('./templates');
var _ = require('underscore');
var BitterModel = require('./bitterModel')
module.exports = Backbone.View.extend({
  el: '.content',
  template: myTmpl.add,
  initialize: function () {
    console.log("I WAS CALLED", this.$el);
    console.log(myTmpl);
    console.log(this.template);

    this.$el.append(this.render());


  },
  render: function () {
    var markup = this.template;
    this.$el.html(markup);
    return this;
  },
  events: {
    'click .addButton': 'createBitter'
  },
  createBitter: function(evt){
    evt.preventDefault();
    var newBitter = {
      title: this.$el.find('input[name="title"]').val(),
      user: this.$el.find('input[name="user"]').val(),
      desc: this.$el.find('input[name="desc"]').val(),
    };
    var newBitterModel = new BitterModel(newBitter);
    this.$el.find('input').val('');
    newBitterModel.save();
    this.listenTo(this.collection, 'add', this.addAll);
  },

});
