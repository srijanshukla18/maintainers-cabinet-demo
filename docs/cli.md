# CLI Reference

## `cabinet-demo parse`

Parse and validate a config file.

```bash
cabinet-demo parse --file <path> [--strict]
```

### Options

| Option | Description |
|--------|-------------|
| `--file` | Path to the config JSON file (required) |
| `--strict` | Enable strict mode — rejects unknown fields |

### Example

```bash
cabinet-demo parse --file ./config.json
cabinet-demo parse --file ./config.json --strict
```
