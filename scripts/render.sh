#!/usr/bin/env bash
# Wrapper for `quarto render` that first refreshes remote-sourced includes,
# since Quarto has no native support for {{< include >}} of a remote URL.
set -euo pipefail
cd "$(dirname "${BASH_SOURCE[0]}")/.."

./scripts/fetch-remote-includes.sh
quarto render "$@"
