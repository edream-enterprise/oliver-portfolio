---
title: 'Dokploy + Podman on Alma Linux'
date: '2024-09-12'
excerpt: 'Moving away from Docker daemon dependencies. How I configured Dokploy to seamlessly manage rootless Podman containers on a fresh Alma Linux instance for secure, self-hosted deployments.'
---

# Dokploy + Podman on Alma Linux

Deploying applications securely often means avoiding running containers as the root user. Podman is a daemonless, rootless alternative to Docker that shines on enterprise distributions like Alma Linux.

## Why Podman?

Podman does not require a running daemon, which means fewer background processes and a smaller attack surface. Running containers rootless is a huge win for security.

## Integrating Dokploy

Dokploy is an excellent alternative to Vercel/Heroku for self-hosting. To make it work seamlessly with Podman:

1. Install Podman and `podman-compose`.
2. Enable the podman socket: `systemctl --user enable --now podman.socket`.
3. Export the `DOCKER_HOST` environment variable to point to the Podman socket: `export DOCKER_HOST=unix:///run/user/1000/podman/podman.sock`.
4. Run the Dokploy installation script.

## Conclusion

Combining the rock-solid stability of Alma Linux, the security of rootless Podman, and the developer experience of Dokploy results in a perfect self-hosted PaaS.
