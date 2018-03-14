# pid-from-port-cli

> Get PID from a port

## Install

```bash
$ npm install -g @mcansh/pid-from-port-cli
```

```bash
pid-from-port -p 3000
# > 18369

pid-from-port -p 3000 -p 8080
# > port 3000 is pid 18369
# > port 8080 is pid 18846

pid-from-port -p 4000
# > Couldn't find a process with port 4000
```

## Related
[pid-from-port](https://github.com/kevva/pid-from-port) - API
