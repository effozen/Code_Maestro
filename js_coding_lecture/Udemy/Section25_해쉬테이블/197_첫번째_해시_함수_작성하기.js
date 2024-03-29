function hash(key, arrayLen) {
  let total = 0;
  for (const char of key) {
    // map "a" to 1, "b" to 2, "c" to 3, etc.
    const value = char.charCodeAt(0) - 96;
    total = (total + value) % arrayLen;
  }

  return total;
}
