---
title: 'Dokploy + Podman en Alma Linux'
slug: 'dokploy-podman'
date: '2024-09-12'
excerpt: 'Alejandome de las dependencias del daemon de Docker. Como configure Dokploy para gestionar contenedores Podman sin root en una instancia limpia de Alma Linux para despliegues autohospedados seguros.'
tags: ['DevOps', 'Podman', 'Dokploy', 'Linux']
draft: false
language: 'es'
---

# Dokploy + Podman en Alma Linux

Desplegar aplicaciones de forma segura suele significar evitar ejecutar contenedores como usuario root. Podman es una alternativa sin daemon y compatible con rootless que destaca en distribuciones empresariales como Alma Linux.

## Por que Podman?

Podman no requiere un daemon en ejecucion, lo que significa menos procesos en segundo plano y una superficie de ataque mas pequena. Ejecutar contenedores sin root es una mejora importante de seguridad.

## Integrando Dokploy

Dokploy es una excelente alternativa a Vercel o Heroku para autohospedaje. Para hacerlo funcionar de forma fluida con Podman:

1. Instala Podman y `podman-compose`.
2. Habilita el socket de Podman: `systemctl --user enable --now podman.socket`.
3. Exporta la variable de entorno `DOCKER_HOST` apuntando al socket de Podman: `export DOCKER_HOST=unix:///run/user/1000/podman/podman.sock`.
4. Ejecuta el script de instalacion de Dokploy.

## Conclusion

Combinar la estabilidad de Alma Linux, la seguridad de Podman rootless y la experiencia de desarrollo de Dokploy da como resultado una plataforma autohospedada muy solida.
