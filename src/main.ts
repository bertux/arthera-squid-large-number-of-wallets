import * as fs from 'fs'
import {TypeormDatabase} from '@subsquid/typeorm-store'
import {Transaction} from './model'
import {processor} from './processor'

// 4 wallets that interacted with Elk v2 Router
// between blocks 14_000_000 and 15_000_000
const wallets: Set<string> = loadWallets('./assets/allWallets')
console.log(`loaded ${wallets.size} wallets`)

processor.run(new TypeormDatabase({supportHotBlocks: false}), async (ctx) => {
    const transactions: Transaction[] = []
    for (let block of ctx.blocks) {
        for (let txn of block.transactions) {
            if (wallets.has(txn.from) || (txn.to && wallets.has(txn.to))) {
                transactions.push(new Transaction({
                    id: txn.id,
                    block: block.header.height,
                    from: txn.from,
                    to: txn.to,
                    txnHash: txn.hash
                }))
            }
        }
    }
    await ctx.store.upsert(transactions)
})

function loadWallets(path: string): Set<string> {
    let wallets = fs.readFileSync(path, {encoding: 'utf8'}).split('\n')
    return new Set(wallets)
}
