import http from "node:http";

const server = http.createServer((req, res) => {
  const { url, method } = req;

  res.setHeader("Content-Type", "application/json");

  if (url === "/types") {
    const list = ["a", "b"];
    res.end(JSON.stringify(list));
    return;
  }
  if (url === "/Home") {
    const list = ["1", "2"];
    res.end(JSON.stringify(list));
    return;
  }
  if (url === "/Web") {
    res.end(JSON.stringify(["a1", "b2"]));
    return;
  }
  res.end(`URL: ${url}`);
});

server.listen(4000);
