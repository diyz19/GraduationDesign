# blockchain.go
结构中的常量：
```
headBlockGauge：一种测量区块链中头部区块高度的工具。

headHeaderGauge：一种测量头块标头哈希值的仪表。

headFastBlockGauge：一个测量头块的接收根哈希的仪表。

accountReadTimer:一个计时器，用于测量读取帐户所需的时间。

accountHashTimer：一个计时器，用于测量计算帐户哈希所需的时间。

accountUpdateTimer:一个计时器，用于测量更新帐户所需的时间。

accountCommitTimer：一个计时器，用于测量将帐户更改提交到区块链所需的时间。

storageReadTimer：一个计时器，用于测量从存储器读取所需的时间。

storageHashTimer：一个计时器，用于测量计算存储数据哈希所需的时间。

storageUpdateTimer:一个计时器，用于测量更新存储数据所需的时间。

storageCommitTimer：一个计时器，用于测量将存储更改提交到区块链所需的时间。

regionReadTimer：一个计时器，用于测量从一个区域读取所需的时间。

regionHashTimer：一个计时器，用于测量计算一个区域的哈希所需的时间。

regionUpdateTimer：一个计时器，用于测量更新区域所需的时间。

regionCommitTimer：一个计时器，用于测量将区域更改提交到区块链所需的时间。

rstorageReadTimer：一个计时器，用于测量从rstorage读取所需的时间。

rstorageHashTimer：一个计时器，用于测量计算rstorage数据哈希所需的时间。

rstorageUpdateTimer：一个计时器，用于测量更新rstorage数据所需的时间。

rstorageCommitTimer：一个计时器，用于测量将rstorage更改提交到区块链所需的时间。

blockInsertTimer:一个计时器，用于测量将块插入区块链所需的时间。

blockValidationTimer：一个计时器，用于测量验证块所需的时间。

blockExecutionTimer：一个计时器，用于测量执行一个块所需的时间。

blockWriteTimer:一个计时器，用于测量将块写入区块链所需的时间。

blockReogAddMeter：一种测量区块链重组过程中添加的区块数量的仪表。

blockReogDropMeter：一种测量区块链重组过程中丢弃的区块数量的仪表。

blockPrefetchExecuteTimer:一个计时器，用于测量执行块预取操作所需的时间。

blockPrefetchInterruptMeter：用于测量中断的块预取操作数的仪表。

常量：

bodyCacheLimit：要缓存的块体的最大数量。

blockCacheLimit：要缓存的完整块的最大数量。

receiptsCacheLimit：要缓存的最大交易收据数。

txLookupCacheLimit：要缓存的事务查找项的最大数目。

maxFutureBlocks：可以存储的最大未来块数。

maxTimeFutureBlocks：未来块可以存储的最大时间量（以秒为单位）。

badBlockLimit：在退出之前可以处理的连续坏块的最大数量。
```
cache结构：

该结构包含chainConfig、cacheConfig、db、genesisBlock等字段。区块链管理链导入、还原和链重组。它还有助于从数据库中包含的任何链以及表示规范链的块中返回块。该结构还包含用于处理驻留在区块链中的trie和gtrie缓存/修剪的缓存配置的字段。区块链使用共识引擎来处理区块并验证状态。它还使用一个低级别的持久数据库来存储最终内容。它为最近的块体、每个块的收据、事务查找数据和最近的整个块提供了各种缓存。

多链结构：
```
type BlockChain struct {
   ...
    currentBlock atomic.Value // 区块链的当前头
	//zc,start---------
	branchBlocks          map[common.Regiong]*types.Block //所有分支块
	currentParallelBlocks map[common.Regiong]*types.Block //相同geohash区域级别的当前分支块
	currentHeads          map[common.Regiong]*types.Block
	currentMRegionRoot    common.Hash
	syncMode              []byte
	regionId              []byte
	//zc,end----------
	currentFastBlock atomic.Value // 快速同步链的当前头(may be above the block chain!)

   ...
}
```
它代表一个管理链导入、恢复和链重组的区块链。区块链根据两阶段验证器定义的规则集管理导入块，该验证器使用包含的交易处理块并验证状态。如果验证失败，导入将中止。

该结构包含用于管理区块链的各种字段，包括链配置、用于存储内容的数据库、用于映射块号以尝试进行垃圾收集的优先级队列、标题链、各种事件馈送以及用于块体、收据、整个块的缓存和交易查询数据。

此外，该结构包含特定于实现的字段，包括分支块、当前分支块和当前头的映射，以及用于在导入之间重用的各种状态数据库。

该结构还包含用于管理共识引擎、块和状态验证器、预取器和交易处理器接口的字段。最后，它具有用于管理坏块缓存和测试挂钩以终止祖先收据链插入的字段。

> getProcInterrupt（）

是一个返回布尔值的方法，该布尔值指示procInterrupt原子整数是否设置为1。这个整数被用作块处理的中断信号器。

> GetVMConfig（）

是一个返回指向区块链的vm.Config结构的指针的方法。

> empty（）

是一个返回布尔值的方法，该布尔值指示区块链是否为空。它检查存储在数据库中的头块的哈希、头标头的哈希和头快速块的哈希是否与genesis块的哈希匹配。如果它们都匹配，它认为区块链是空的。请注意，这是一种特殊情况，允许将非空的祖先数据库与空节点连接。

> loadLastState()

负责从数据库加载最后一个已知的链状态。它首先从数据库中读取头块的散列，并检查数据库是否为空或已损坏。如果是，它会通过调用Reset（）函数来重置链。如果头块可用，则检查与该块相关联的状态是否可用。如果不是，它会记录一条警告消息，并通过调用repair（）函数来修复链。如果与块关联的状态可用，它将块设置为头块，并更新currentBlock、headBlockGauge和hc值。然后，它恢复最后一个已知的头标头和快速块（如果可用的话）。它还确保与块关联的区域状态可用，如果不可用，它会记录一条警告消息并修复链。

> SetHead()

设置header

> FastSyncCommitHead()

将当前头块设置为哈希定义的头块

> BranchBlocks()

BranchBlocks检索所有分支的分支块

最后，它记录一条状态消息，其中包含有关最近加载的本地头、完整块和快速块的信息。

> GetBranchBlockByRegion()

GetBranchBlockByRegion函数以一个区域（common.Regiong）为参数，并返回相应的分支块（类型为.block）。它首先尝试从bc.branchBlocks映射中检索分支块。如果映射中不存在分支块，则会尝试使用rawdb.ReadBranchBlock函数从数据库中读取该分支块。如果在数据库中找到块，它会使用SetBranchBlockByRegion函数在bc.branchBlocks映射中设置它。最后，它返回分支块。

> SetBranchBlockByRegion()

SetBranchBlockByRegion函数以一个区域（common.Regiong）和一个分支块（types.block）为参数，并为给定区域设置分支块。它首先在bc.branchBlocks映射中设置分支块。然后，它确定分支块的父块，并使用SetCurrentHeads函数将其设置为父区域的当前头块。如果没有找到父块，它将父区域设置为一个特殊区域（由字节数组“a”表示），并将genesis块设置为当前头块。然后，它更新与分支块相关的各种数据库条目，包括其总难度（externalTd）、块头、分支头、并行头和规范散列。最后，它更新区块链的各种状态变量，包括当前的并行块和当前的快速块。

> GetActiveBranch

定义了BlockChain结构的GetActiveBranch方法。该方法检索区块链中给定地址的活动链和余额。该方法采用一个公共的.Address参数并返回两个值：一个字节数组表示活动链，另一个*big.Int表示地址的平衡。如果地址没有活动链，则该方法返回一个零字节数组。
该方法首先通过调用Branchs（）方法来获取区块链的所有可用分支。然后，它在每个分支上迭代，使用GetCurrentHeads（）获取该分支的当前头块，并使用StateAt（）检索该块的状态。然后，它使用state.GetBalance（）获取给定地址的余额。如果余额不为零，该方法将脱离循环并返回活动链和余额。如果循环在没有找到活动链的情况下完成，则该方法将活动链设置为零。

> writeHeadBlock

writeHeadBlock将一个新的头块注入到当前块链中。这种方法假设这个块确实是一个真正的头。它还将重置磁头和头快速同步块到这个相同的块（如果它们是旧的）或者如果它们在不同的侧链上。请注意，此函数假定持有“mu”互斥锁！

> GetBlock

GetBlock通过散列和数字从数据库中检索块，如果找到，则缓存它。

> InsertChain()

它尝试将一批块插入到规范链中，或者在必要时创建一个fork。如果在插入过程中发生错误，该方法将返回失败块的索引和描述问题的错误。
代码首先检查所提供的链是否至少有一个要导入的块。然后，它通过迭代链并将每个块的编号和父哈希分别与前一个块的编号或哈希进行比较，来检查链是否有序和链接。如果链不连续，则该方法会记录一条错误消息并返回一个错误。
如果链通过了健全性检查，则该方法开始导入块。代码获取区块链上的锁，并调用insertChain方法来执行实际插入。如果区块链处于分支同步模式，则在调用insertChain之前，它首先获取链上的锁。插入完成后，该方法将释放锁，并返回插入的块数以及插入过程中遇到的任何错误。
该方法还向块处理提要发送一个事件，以指示区块链正在被修改。最后，该方法递减等待组计数器以发出插入完成的信号。