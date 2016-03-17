var templates = {};

templates.tweet = [
  "<h2><%= title %></h2>",
  "<h4><%= user %></h4>",
  // "<p><%= desc %></p>",
  "<button class='delete'>delete</button>"
].join('');


templates.add = [
  `<form class="addNewMovie">
    <input name='title' type="text" placeholder="Beet Off"><br>
    <input name='user' type="text" placeholder="User">
    <input name="addButton" class="addButton" type="submit" value="Submit">
  </form>`
].join('');

module.exports = templates
