# This is octopus API 🐙

This is a project to create a cli which with simple commands creates it will be possible to create an API, its endpoints, services, routes and a lot more.

With the aim of improving the performance of developers wanders to build an APIs.

# Commands

| Command | Alias | Description |
| :---------- | :--------- |  :--------- |
| `oct new [name]` | `n` | Creates a new API workspace.|
| `oct endpoint [name]` | `e` | Creates a new endpoint and implementation in the app. |
| `oct router [name]` | `r` | Creates the new router and instancie in the app. |
| `oct service [name]` | `s` | Creates the new service and instancie in the app. |
| `oct controller [name]` | `c` | Creates the new controller and instancie in the app. |
| `oct --help` | `h` | Shows a help message for this command in the console.|

# Start application

To create and launch a new app.

```bash
 $: erre new erre-project 
 $: cd erre-project
 $: npm run start:dev
```

Access to the deployment API.
```bash
http://localhost:3000/
```