import { hello4 } from './lib';

console.log("Hello from main entry point.");

function hello() {
    console.log(hello4());
};

window.hello = hello;
