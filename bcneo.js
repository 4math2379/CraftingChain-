import Neon from '@cityofzion/neon-js'


const props = {
    scriptHash: '5b7074e873973a6ed3708862f219a6fbf4d1c411', // Scripthash for the contract
    operation: 'balanceOf', // name of operation to perform.
    args: [Neon.u.reverseHex('cef0c0fdcfe7838eff6ff104f9cdec2922297537')] // any optional arguments to pass in. If null, use empty array.
  }
  
  const script = Neon.create.script(props)