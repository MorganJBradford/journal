export function Journal() {
  this.entries = {};
}
Journal.prototype.addEntry = function(entry) {
  entry.date = Date.now();
  this.entries[entry.date] = entry;
};

export function Entry(title, post) {
  this.title = title;
  this.post = post;
}

Entry.prototype.countWords = function() {
  return this.post.split(" ").length;
};

Entry.prototype.countVowels = function() {
  return this.post.match(/[aeiou]/gi).length;
};

Entry.prototype.countConsonants = function() {
  return this.post.match(/[a-z]/gi).length - this.countVowels();
};

Entry.prototype.getTeaser = function() {
  if (this.countWords() > 8) {
    return this.post.split(" ").slice(0, 8).join(" ") + "...";
  } else {
    return this.post;
  }
};