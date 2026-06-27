---
title: 'Optimizando Neovim para Vue/Svelte'
slug: 'neovim-setup'
date: '2024-10-24'
excerpt: 'Una inmersion en la configuracion de LSP, Treesitter y herramientas de formateo para crear un entorno de desarrollo muy rapido para frameworks frontend modernos sin la carga de un IDE.'
tags: ['Neovim', 'Lua', 'LSP', 'DevTools']
draft: false
language: 'es'
---

# Optimizando Neovim para Vue y Svelte

Cuando desarrollas aplicaciones frontend modernas, el peso de los IDE tradicionales puede ralentizar tu flujo de trabajo. Configuremos Neovim como un entorno extremadamente rapido para Svelte y Vue.

## Configuracion LSP

Necesitaras `svelte-language-server` y `volar` para Vue.
Aqui tienes un fragmento rapido para configurar el LSP de Svelte con `nvim-lspconfig`:

```lua
local lspconfig = require('lspconfig')

lspconfig.svelte.setup{
  on_attach = function(client, bufnr)
    -- Custom keybindings and on_attach logic
  end,
}
```

## Treesitter

Treesitter ofrece excelente resaltado de sintaxis y comprension estructural del codigo.
Asegurate de instalar los parsers para `svelte`, `vue`, `typescript`, `javascript` y `html`.

## Formateo

Integra `prettier` y `eslint` usando `null-ls` o `conform.nvim` para ejecutar el formateo automaticamente al guardar. Esto mantiene la base de codigo alineada con las reglas del equipo.

Abraza la terminal y disfruta la velocidad.
