const brain = require("brain.js");
const dataset = require("./dataset");

const net = new brain.NeuralNetwork();

console.log("Recommenders");

net.train(dataset);

console.log(Object.values(net.run("sacha")));

module.exports = net;
