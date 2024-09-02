# Squid for activity of wallets on a contract

This squid captures all Arthera transactions involving accounts that interacted with the [Elk v2 Router](https://explorer.arthera.net/address/0x35FC5DF37eABaB62B55ECDc349b2d718C88E107A) contract between blocks 14M and 15M, a total of about 4 addresses. The list of addresses is saved at `assets/allWallets`; it was retrieved by an ad-hoc squid located at the `wallet-list-maker` folder. 

See more examples of requesting data with squids on the [showcase page](https://docs.subsquid.io/evm-indexing/configuration/showcase) of Subsquid documentation.

Dependencies: Node.js, Docker.

## Quickstart

```bash
# 0. Install @subsquid/cli a.k.a. the sqd command globally
npm i -g @subsquid/cli

# 1. Retrieve the template
sqd init activity -t https://github.com/bertux/arthera-squid-large-number-of-wallets
cd activity

# 2. Install dependencies
npm ci

# 3. Start a Postgres database container and detach
sqd up

# 4. Build and start the processor
sqd process

# 5. The command above will block the terminal
#    being busy with fetching the chain data, 
#    transforming and storing it in the target database.
#
#    To start the graphql server open the separate terminal
#    and run
sqd serve
```
A GraphiQL playground will be available at [localhost:4350/graphql](http://localhost:4350/graphql).
