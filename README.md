# factory-pilot

Throwaway repository for the AI-7181 software-factory pilot: a tiny Bun todo API that factory agents change through pull requests. Nothing here is production.

- `bun install`, `bun test`, `bun run typecheck`
- `bun start` serves `/health` and `/todos` on port 3000

`main` is protected: changes land through a pull request with a green `test` check.
