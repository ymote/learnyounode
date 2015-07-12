var result = 0

for (var i = 2; i < process.argv.length; i++)
  // enter your code below
result=result+Number(process.argv[i]);
console.log(result);
