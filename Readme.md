# diffgram-cli

Diffgram CLI is command line interface for developers who want to contribute to Diffgram

## Installation


```bash
npm install -g diffgram-cli
```

Install dev version
```
npm i -g .
```

Run without installation:
```
node bin/index.js [command name]
```

## Usage

Change your directory to the diffgram first. To see what's available on CLI, run:

```bash
diffgram --help
```

## Development
Clone this repo and install dependencies. After, create **.env** file in the root folder and set next environmental variable:
```bash
DEV=true
```