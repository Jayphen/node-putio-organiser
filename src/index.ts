import http from "http";

export const poop: string[] = ["hello my dude", "welcome to node"];

http
  .createServer((_: http.IncomingMessage, response: http.ServerResponse) => {
    response.write(poop.map((msg: string) => msg.toUpperCase()).join("\n"));
    response.end();
  })
  .listen(3000);
