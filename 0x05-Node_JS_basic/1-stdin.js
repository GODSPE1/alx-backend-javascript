process.stderr.write("Welcome to Holberton School, what is your name?\n");
process.stdin.on('data', data => {
  console.log(`You typed : ${data.toString().trim()}`);

  console.log('This important software is now closing')
  process.exit(0)
})