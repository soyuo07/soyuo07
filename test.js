let data = {
    REPEAT_COUNT: 11111111,
    CHAR: "Hello, world!"
  }
  
  async function ping() {
    console.log("test..");
    let char = "", i = 0, startTime = Date.now();
    while(i < data.REPEAT_COUNT) {
      i++;
      char = data.CHAR.repeat(i+1);
    }
    console.log("Pong! " + (Date.now() - startTime) + "ms");
    console.log("dummy character : " + char.length + "length");
  }
  
  ping();
