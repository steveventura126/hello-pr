// Returns a friendly greeting. Falls back to "world" when no name is given.
function greet(name) {
  const trimmed = (name || '').trim();
  return `Hello, ${trimmed || 'world'}!`;
}

module.exports = { greet };

if (require.main === module) {
  console.log(greet(process.argv[2]));
}
