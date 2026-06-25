---
title: "Optimizing Neovim for Vue/Svelte"
date: "2024-10-24"
excerpt: "A deep dive into setting up LSP, Treesitter, and formatting tools to create a blazing fast development environment for modern frontend frameworks without the bloat of an IDE."
---

# Optimizing Neovim for Vue and Svelte

When developing modern frontend applications, the weight of traditional IDEs can slow down your workflow. Let's configure Neovim to be a blazing-fast powerhouse for Svelte and Vue.

## LSP Configuration

You'll need `svelte-language-server` and `volar` for Vue.
Here is a quick snippet for setting up the Svelte LSP with `nvim-lspconfig`:

```lua
local lspconfig = require('lspconfig')

lspconfig.svelte.setup{
  on_attach = function(client, bufnr)
    -- Custom keybindings and on_attach logic
  end,
}
```

## Treesitter

Treesitter provides fantastic syntax highlighting and structural understanding of your code.
Make sure to install the parsers for `svelte`, `vue`, `typescript`, `javascript`, and `html`.

## Formatting

Integrate `prettier` and `eslint` using `null-ls` or `conform.nvim` to run formatting automatically on save. This keeps your codebase perfectly styled according to your team's rules.

Embrace the terminal and enjoy the speed!
