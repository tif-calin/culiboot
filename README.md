# culiboot
Culi's goto bootstrap web project using [vite](https://vite.dev/guide/), [react](https://react.dev/), [react-router](https://reactrouter.com/home), and [linaria](https://linaria.dev/).

## Setup
After cloning the repo and installing the deps, search the codebase for `TODO(boot)` setup tasks.

See also, [frontendchecklist.io](https://frontendchecklist.io/) and [isitagentready.com](https://isitagentready.com/). Consider utilizing [open-prop](https://open-props.style/) CSS variables and adopting standard files like:

- [.editorconfig](https://editorconfig.org)
- [humans.txt](https://humanstxt.org/) ([e.g.](https://swwweet.com/humans.txt))
- [CONTRIBUTING.md](https://mozillascience.github.io/working-open-workshop/contributing/)
- [security.txt](https://securitytxt.org/) ([e.g.](https://curl.se/.well-known/security.txt))

> [!NOTE]:
> If you want to use this with SSR: flip `ssr: true` in `react-router.config.ts`, add a start script in `package.json` like `"start": "react-router-serve ./build/server/index.js"`, and note that the current `preview` script will no longer exercise the real app. If not, you may remove `@react-router/node` and `@react-router/serve`. `isbot` is only necessary if you add a custom `app/entry.server.tsx` for streaming or handling bots.

## Development
```
git clone git@github.com:tif-calin/culiboot.git
cd culiboot
cp .env.example .env
pnpm i
pnpm dev
```
