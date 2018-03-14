#!/usr/bin/env node

const args = require('args');
const pidFromPort = require('pid-from-port');
const { red } = require('chalk');

args.option('port', 'The port you want the PID for');

const flags = args.parse(process.argv);

const { port } = flags;

const start = async () => {
  const arrow = text => `  > ${text}`;
  if (port) {
    try {
      if (Array.isArray(port)) {
        const pids = await pidFromPort.all(port);
        pids.forEach((pid, p) => console.log(arrow(`port ${p} is pid ${pid}`)));
      } else {
        console.log(arrow(await pidFromPort(port)));
      }
    } catch (err) {
      console.log(red(arrow(`Couldn't find a process with port ${port}`)));
    }
  } else {
    console.log(red(arrow('Must supply a port')));
  }
};

start();
