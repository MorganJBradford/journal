// Business logic for Journal
export function Journal() {
  this.entries = {};
  this.id = 0;
}
Journal.prototype.addEntry = function(entry) {
  entry.date = Date();
  entry.id = this.assignID();
  this.entries[entry.id] = entry;
};

Journal.prototype.assignID = function() {
  this.id += 1;
  return this.id;
};

// Business logic for Entry
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


