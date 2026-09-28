#!/usr/bin/env bash
# Refreshes local copies of remote files used via {{< include >}}.
# Quarto resolves includes while scanning project files, before any
# pre-render script runs, so this must be run *before* `quarto render`
# (see scripts/render.sh) rather than wired up as a pre-render hook.
set -euo pipefail
cd "$(dirname "${BASH_SOURCE[0]}")/.."

fetch() {
  local url="$1" dest="$2"
  curl -sSL "$url" -o "$dest"
}

fetch \
  "https://raw.githubusercontent.com/juancarloscastillo/zotero-slack-alert/refs/heads/main/readme.md" \
  "blog/posts/zotero-slack-alert/_readme-upstream.md"

# Fix relative image path so it resolves outside the source repo.
sed -i 's#!\[\](images/#![](https://raw.githubusercontent.com/juancarloscastillo/zotero-slack-alert/refs/heads/main/images/#' \
  "blog/posts/zotero-slack-alert/_readme-upstream.md"
