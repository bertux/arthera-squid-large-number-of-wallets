# Wallet list maker

An ad-hoc squid that saves addresses of all accounts that interacted with the [Elk v2 Router](https://explorer.arthera.net/address/0x35FC5DF37eABaB62B55ECDc349b2d718C88E107A) contract between blocks 14M and 15M to the `../assets/allWallets` file.

Run with
```bash
npm ci
sqd up
sqd process
sqd down
```
