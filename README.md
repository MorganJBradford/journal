Create a journaling website where a user can write entries including at least a title and body. 

1) Create Entry objects that include a method to return the number of words in the entry. 

2) Then, add a separate method (or methods) to return the number of vowels and consonants in each entry. 

3) Finally, add a method called getTeaser to return the first sentence of the entry. If the sentence is over 8 words, only display those first 8 words.

```
Describe: Entry()
  Test: "It constructs a journal Entry object."
  Expect(new Entry()).toEqual(Entry {});

  Test: "It constructs a journal Entry object with a title property."
  Code: let testEntry = new Entry("Captain's Log")
  Expect(testEntry).toEqual(Entry {title: "Captain's Log"});

  Test: "It constructs a journal Entry object adding a post property."
  Code: let testEntry = new Entry("Captain's Log", "My new message")
  Expect(testEntry).toEqual(Entry {title: "Captain's Log", post: "My new message"});
  ```