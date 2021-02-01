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
