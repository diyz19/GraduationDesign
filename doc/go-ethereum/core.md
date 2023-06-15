# core
core文件夹是go-ethereum代码库中最重要的文件夹之一，包含了以太坊核心的代码，如区块链同步、共识机制、交易处理等。

以下是对core文件夹中主要源代码文件的简要解释：

## /core/asm文件夹
包含了go-ethereum中与EVM（以太坊虚拟机）的汇编相关的代码。

以下是对asm文件夹中主要源代码文件的简要解释：

> asm.go

asm.go包含了汇编器和反汇编器的代码，它们将EVM字节码转换为汇编代码，或将汇编代码转换为EVM字节码。这些函数是用来分析、调试以太坊智能合约的有用工具。

> asm_test.go

asm_test.go包含了对asm.go中函数的单元测试，以确保其正确性和稳定性。

> compiler.go

compiler.go包含了将Solidity源代码编译为EVM字节码的代码。Solidity是以太坊智能合约语言，可以使用Solidity编写智能合约，并将其编译为EVM字节码以在以太坊上运行。

它们是构成go-ethereum EVM汇编实现的核心组件，实现了将Solidity代码编译为EVM字节码和对EVM字节码进行汇编和反汇编等功能，是理解以太坊智能合约的重要基础。

## /core/bloombits文件夹
包含了go-ethereum中与布隆过滤器相关的代码。

以下是对bloombits文件夹中主要源代码文件的简要解释：

> bloombits.go

bloombits.go包含了布隆过滤器的实现代码。布隆过滤器是一种数据结构，可以快速地检查一个元素是否属于一个集合中。在以太坊中，布隆过滤器常用于过滤无效交易和过滤重复数据。

> bloombits_test.go

bloombits_test.go包含了对bloombits.go中函数的单元测试，以确保其正确性和稳定性。

它们是构成go-ethereum布隆过滤器实现的核心组件，实现了快速检查元素是否属于集合的功能，是以太坊网络效率优化的重要工具。

## /core/forkid文件夹
包含了go-ethereum中与以太坊网络分叉相关的代码。

以下是对forkid文件夹中主要源代码文件的简要解释：

> forkid.go

forkid.go包含了以太坊网络中所有硬分叉和软分叉的ID及其生效的块高度。这些ID用于指示在哪些块高度上应用特定的规则和变化。

> forkid_test.go

forkid_test.go包含了对forkid.go中函数的单元测试，以确保其正确性和稳定性。

它们是构成go-ethereum以太坊网络分叉实现的核心组件，实现了管理和维护以太坊网络的分叉ID及其生效的块高度，是以太坊网络升级和规则变更的基础。

## rawdb
rawdb包含了以太坊数据库相关的代码，如存储区块、交易、状态等。

## asset_transfer_list.go
目前父链用到的资产转移列表代码，用来维护资产转移的原子性

## blockchain.go