# Changelog

## [2.1.1] - 2026-03-15

### Fixed
- Strict mode now correctly validates nested config objects.

## [2.1.0] - 2026-02-28

### Added
- `parseConfig` now supports environment variable interpolation.
- New `--env` flag for CLI.

### Fixed
- Parser no longer crashes on empty config files.

## [2.0.0] - 2026-01-10

### Breaking
- Config format changed from INI to JSON/YAML.
- `loadConfig` renamed to `parseConfig`.

## [1.4.2] - 2025-11-20

### Fixed
- Correctly handle quoted strings with escaped spaces in tokenizer.
