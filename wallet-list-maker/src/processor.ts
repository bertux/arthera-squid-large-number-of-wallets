import {lookupArchive} from '@subsquid/archive-registry'
import {
    BlockHeader,
    DataHandlerContext,
    EvmBatchProcessor,
    EvmBatchProcessorFields,
    Log as _Log,
    Transaction as _Transaction,
} from '@subsquid/evm-processor'

export const ELK_ROUTER_V2 = '0x35FC5DF37eABaB62B55ECDc349b2d718C88E107A'

export const processor = new EvmBatchProcessor()
    .setGateway('https://v2.archive.subsquid.io/network/arthera-mainnet')
    .addTransaction({
        to: [ELK_ROUTER_V2],
    })
    .setBlockRange({
        from: 14_000_000,
        to: 15_000_000,
    })

export type Fields = EvmBatchProcessorFields<typeof processor>
export type Block = BlockHeader<Fields>
export type Log = _Log<Fields>
export type Transaction = _Transaction<Fields>
export type ProcessorContext<Store> = DataHandlerContext<Store, Fields>
