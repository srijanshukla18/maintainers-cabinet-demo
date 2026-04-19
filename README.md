# cabinet-demo

A demo TypeScript library for configuration parsing and validation.

Used as the sandbox repo for [Maintainer's Cabinet](https://github.com/srijanshukla18/maintainers-cabinet) — a GitHub-native multi-agent maintainer assistant.

## Install

```bash
npm install cabinet-demo
```

## Usage

```typescript
import { parseConfig } from "cabinet-demo";

const config = parseConfig("path/to/config.json");
```

## CLI

```bash
cabinet-demo parse --file config.json
cabinet-demo parse --file config.json --strict
```

## Contributing

See [CONTRIBUTING.md](CONTRIBUTING.md).
