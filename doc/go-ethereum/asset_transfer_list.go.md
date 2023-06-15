# asset_transfer_list.go说明

```
chainHeadChanSize是侦听ChainHeadEvent的通道的大小。

txSlotSize用于计算单个事务的数据槽数

txMaxSize是单个事务可以具有的最大大小。此字段具有

assettransMaxSize=2*assettransSlotSize//64KB，在没有EIP-2464支持的情况下不要碰撞

AssettransStatus是列表中显示的资产转移的当前状态。

AssettransStatus是列表中显示的资产转移的当前状态。

transblockChain提供了区块链的状态和当前的天然气限制

在asset_transfer_list和事件订阅者中进行一些预检查。

AssetTransListConfig是asset_transfer_list的配置参数。

sanitize检查提供的用户配置，并更改

AssetTransElement表示asset_ranfer_list的整个元素

NewAssetTransList创建一个新的资产转移列表，用于收集、排序和筛选入站

```

> AssetTransListConfig()
定义了配置结构AssetTransListConfig以及与资产转移相关的一些常量和度量。该代码还定义了一个接口transblockChain，该接口提供区块链的状态和当前的gas限制。

AssetTransListConfig结构包括用于管理本地事务的Locals、NoLocals、Journal和Rejournal等字段。PriceLimit和PriceBump字段分别用于强制执行最低gas价格和替换现有交易。其他字段包括用于管理事务槽和排队的AccountSlots、GlobalSlots和AccountQueue。

该代码还包括用于跟踪资产转移的指标，如已知、有效、无效和定价过低的资产转移的数量，以及各种类型的放弃交易。还定义了事务槽的大小和最大事务大小。

>transblockChain()

接口提供了检索区块链和状态数据的方法。该接口还包括用于订阅链头事件的方法。

> Stop()

此方法通过取消订阅所有已注册的订阅并等待所有挂起的事件完成来终止AssetTransList。

> SubscribeAssetTransEvent()

此方法注册用于接收新资产交易事件的订阅，并开始将其发送到给定通道。

> Stats()

此方法检索AssetTransList的当前统计信息，包括挂起和排队的资产事务数。

> Content()

此方法检索AssetTransList的数据内容，包括所有挂起和排队的资产交易，按帐户分组，按随机数排序。

> Pending()

此方法检索所有当前可处理的挂起资产交易，这些交易按原始帐户分组并按nonce排序。返回的事务集是一个副本，可以通过调用代码自由修改。

实现一个区块链交易池。AssetTransList结构是一个事务元素列表，其中包括挂起、队列和已执行的事务。
add方法在验证后将新事务添加到挂起列表中。
ActiveChain方法将活动链添加到地址中。matchOut方法根据发送方的地址和输出链将事务输出与相应的事务请求进行匹配。matchIn方法将事务输入与相应的事务请求相匹配，并根据接收方的地址和输入链进行输出。

> AssetTransList()

这是管理资产转移列表的方法，它包括几种管理事务状态、从列表中删除元素以及在列表之间传输事务状态的方法。

Status方法返回由帐户ID标识的一批事务的状态。removeEle方法从队列中删除单个AssetTransElement。transferState方法将事务从挂起移动到队列，并删除所有无效的事务。transferSuccess方法在接收到中的事务时将元素的结果更改为成功。


