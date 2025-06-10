// Definition for a trie node:
class TrieNode {
  constructor() {
    this.children = {};  // Map from character to TrieNode
    this.isEnd = false;  // True if this node marks the end of a word
  }
}

class Trie {
  constructor() {
    this.root = new TrieNode();
  }

  /** 
   * Inserts the string word into the trie.
   * @param {string} word
   * @return {void}
   */
  insert(word) {
    let node = this.root;
    for (const ch of word) {
      if (!node.children[ch]) {
        node.children[ch] = new TrieNode();
      }
      node = node.children[ch];
    }
    node.isEnd = true;
  }

  /**
   * Returns true if the string word is in the trie.
   * @param {string} word
   * @return {boolean}
   */
  search(word) {
    let node = this.root;
    for (const ch of word) {
      if (!node.children[ch]) return false;
      node = node.children[ch];
    }
    return node.isEnd;
  }

  /**
   * Returns true if there is any previously inserted word
   * that starts with the given prefix.
   * @param {string} prefix
   * @return {boolean}
   */
  startsWith(prefix) {
    let node = this.root;
    for (const ch of prefix) {
      if (!node.children[ch]) return false;
      node = node.children[ch];
    }
    return true;
  }
}

// Example usage:
const trie = new Trie();
trie.insert("apple");
console.log(trie.search("apple"));   // true
console.log(trie.search("app"));     // false
console.log(trie.startsWith("app")); // true
trie.insert("app");
console.log(trie.search("app"));     // true
