import { MD5 } from "object-hash";

document.body.innerHTML = `<h1>MD5: ${MD5({ a: 1, b: 2 })}</h1>`;

