let data = {
  REPEAT_COUNT: 10000,
  CHAR: "Hello, world!"
}

async function ping() {
  console.log("test..");
  let char = "", i = 0, startTime = Date.now();
  await while(i < data.REPEAT_COUNT) {
    i++;
    char += data.CHAR.repeat(i+1);
  }
  console.log("Pong! " + (Date.now() - startTime) + "ms");
}

ping();
