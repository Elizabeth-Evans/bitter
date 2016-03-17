var templates = {};

templates.tweet = [
  "<h2><%= title %></h2>",
  "<h4><%= user %></h4>",
  "<p><%= desc %></p>"
].join('');


templates.add = [
  `<form class="addNewMovie">
    <input name='title' type="text" placeholder="Bitter Title"><br>
    <textarea name='desc' rows="4" cols="50" placeholder="Beet Off"></textarea><br>
    <input name='user' type="text" placeholder="User">
    <input name="addButton" class="button" type="submit" value="Submit">
  </form>`
].join('');
