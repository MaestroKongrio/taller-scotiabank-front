import { ethers } from "ethers";
import React, {useState, useEffect} from "react";
import { Container, Row, Col, Button, Card } from "react-bootstrap";

function Tokens() {

    const [balance,setBalance] = useState(0);
    const [balanceCCP,setBalanceCCP] = useState(0);
    const [tipoCambio,setTipoCambio] = useState(0);

    const provider = new ethers.providers.Web3Provider(window.ethereum)
    const signer = provider.getSigner()

    const refreshBalance = async() => {
        const account = await provider.listAccounts();
        console.log(account)
        const currentBalance= await tokenContract.balanceOf(account[0])
        console.log(currentBalance)
        setBalance(ethers.utils.formatUnits(currentBalance,18))
    }

    const refreshBalanceCCP = async() => {
        const account = await provider.listAccounts();
        console.log(account)
        const currentBalance= await tokenCCPContract.balanceOf(account[0])
        console.log(currentBalance)
        setBalanceCCP(ethers.utils.formatUnits(currentBalance,18))
    }

    const tokenAddress= "0x29d54E995b3f5b4E20A46F1a1F1ec7b53DCCf88D";
    const abi = [
        {
            "inputs": [],
            "stateMutability": "nonpayable",
            "type": "constructor"
        },
        {
            "anonymous": false,
            "inputs": [
                {
                    "indexed": true,
                    "internalType": "address",
                    "name": "owner",
                    "type": "address"
                },
                {
                    "indexed": true,
                    "internalType": "address",
                    "name": "spender",
                    "type": "address"
                },
                {
                    "indexed": false,
                    "internalType": "uint256",
                    "name": "value",
                    "type": "uint256"
                }
            ],
            "name": "Approval",
            "type": "event"
        },
        {
            "anonymous": false,
            "inputs": [
                {
                    "indexed": true,
                    "internalType": "address",
                    "name": "previousOwner",
                    "type": "address"
                },
                {
                    "indexed": true,
                    "internalType": "address",
                    "name": "newOwner",
                    "type": "address"
                }
            ],
            "name": "OwnershipTransferred",
            "type": "event"
        },
        {
            "anonymous": false,
            "inputs": [
                {
                    "indexed": true,
                    "internalType": "address",
                    "name": "from",
                    "type": "address"
                },
                {
                    "indexed": true,
                    "internalType": "address",
                    "name": "to",
                    "type": "address"
                },
                {
                    "indexed": false,
                    "internalType": "uint256",
                    "name": "value",
                    "type": "uint256"
                }
            ],
            "name": "Transfer",
            "type": "event"
        },
        {
            "inputs": [],
            "name": "DOMAIN_SEPARATOR",
            "outputs": [
                {
                    "internalType": "bytes32",
                    "name": "",
                    "type": "bytes32"
                }
            ],
            "stateMutability": "view",
            "type": "function"
        },
        {
            "inputs": [
                {
                    "internalType": "address",
                    "name": "owner",
                    "type": "address"
                },
                {
                    "internalType": "address",
                    "name": "spender",
                    "type": "address"
                }
            ],
            "name": "allowance",
            "outputs": [
                {
                    "internalType": "uint256",
                    "name": "",
                    "type": "uint256"
                }
            ],
            "stateMutability": "view",
            "type": "function"
        },
        {
            "inputs": [
                {
                    "internalType": "address",
                    "name": "spender",
                    "type": "address"
                },
                {
                    "internalType": "uint256",
                    "name": "amount",
                    "type": "uint256"
                }
            ],
            "name": "approve",
            "outputs": [
                {
                    "internalType": "bool",
                    "name": "",
                    "type": "bool"
                }
            ],
            "stateMutability": "nonpayable",
            "type": "function"
        },
        {
            "inputs": [
                {
                    "internalType": "address",
                    "name": "account",
                    "type": "address"
                }
            ],
            "name": "balanceOf",
            "outputs": [
                {
                    "internalType": "uint256",
                    "name": "",
                    "type": "uint256"
                }
            ],
            "stateMutability": "view",
            "type": "function"
        },
        {
            "inputs": [],
            "name": "decimals",
            "outputs": [
                {
                    "internalType": "uint8",
                    "name": "",
                    "type": "uint8"
                }
            ],
            "stateMutability": "view",
            "type": "function"
        },
        {
            "inputs": [
                {
                    "internalType": "address",
                    "name": "spender",
                    "type": "address"
                },
                {
                    "internalType": "uint256",
                    "name": "subtractedValue",
                    "type": "uint256"
                }
            ],
            "name": "decreaseAllowance",
            "outputs": [
                {
                    "internalType": "bool",
                    "name": "",
                    "type": "bool"
                }
            ],
            "stateMutability": "nonpayable",
            "type": "function"
        },
        {
            "inputs": [
                {
                    "internalType": "address",
                    "name": "spender",
                    "type": "address"
                },
                {
                    "internalType": "uint256",
                    "name": "addedValue",
                    "type": "uint256"
                }
            ],
            "name": "increaseAllowance",
            "outputs": [
                {
                    "internalType": "bool",
                    "name": "",
                    "type": "bool"
                }
            ],
            "stateMutability": "nonpayable",
            "type": "function"
        },
        {
            "inputs": [
                {
                    "internalType": "address",
                    "name": "to",
                    "type": "address"
                },
                {
                    "internalType": "uint256",
                    "name": "amount",
                    "type": "uint256"
                }
            ],
            "name": "mint",
            "outputs": [],
            "stateMutability": "nonpayable",
            "type": "function"
        },
        {
            "inputs": [],
            "name": "name",
            "outputs": [
                {
                    "internalType": "string",
                    "name": "",
                    "type": "string"
                }
            ],
            "stateMutability": "view",
            "type": "function"
        },
        {
            "inputs": [
                {
                    "internalType": "address",
                    "name": "owner",
                    "type": "address"
                }
            ],
            "name": "nonces",
            "outputs": [
                {
                    "internalType": "uint256",
                    "name": "",
                    "type": "uint256"
                }
            ],
            "stateMutability": "view",
            "type": "function"
        },
        {
            "inputs": [],
            "name": "owner",
            "outputs": [
                {
                    "internalType": "address",
                    "name": "",
                    "type": "address"
                }
            ],
            "stateMutability": "view",
            "type": "function"
        },
        {
            "inputs": [
                {
                    "internalType": "address",
                    "name": "owner",
                    "type": "address"
                },
                {
                    "internalType": "address",
                    "name": "spender",
                    "type": "address"
                },
                {
                    "internalType": "uint256",
                    "name": "value",
                    "type": "uint256"
                },
                {
                    "internalType": "uint256",
                    "name": "deadline",
                    "type": "uint256"
                },
                {
                    "internalType": "uint8",
                    "name": "v",
                    "type": "uint8"
                },
                {
                    "internalType": "bytes32",
                    "name": "r",
                    "type": "bytes32"
                },
                {
                    "internalType": "bytes32",
                    "name": "s",
                    "type": "bytes32"
                }
            ],
            "name": "permit",
            "outputs": [],
            "stateMutability": "nonpayable",
            "type": "function"
        },
        {
            "inputs": [],
            "name": "renounceOwnership",
            "outputs": [],
            "stateMutability": "nonpayable",
            "type": "function"
        },
        {
            "inputs": [],
            "name": "symbol",
            "outputs": [
                {
                    "internalType": "string",
                    "name": "",
                    "type": "string"
                }
            ],
            "stateMutability": "view",
            "type": "function"
        },
        {
            "inputs": [],
            "name": "totalSupply",
            "outputs": [
                {
                    "internalType": "uint256",
                    "name": "",
                    "type": "uint256"
                }
            ],
            "stateMutability": "view",
            "type": "function"
        },
        {
            "inputs": [
                {
                    "internalType": "address",
                    "name": "to",
                    "type": "address"
                },
                {
                    "internalType": "uint256",
                    "name": "amount",
                    "type": "uint256"
                }
            ],
            "name": "transfer",
            "outputs": [
                {
                    "internalType": "bool",
                    "name": "",
                    "type": "bool"
                }
            ],
            "stateMutability": "nonpayable",
            "type": "function"
        },
        {
            "inputs": [
                {
                    "internalType": "address",
                    "name": "from",
                    "type": "address"
                },
                {
                    "internalType": "address",
                    "name": "to",
                    "type": "address"
                },
                {
                    "internalType": "uint256",
                    "name": "amount",
                    "type": "uint256"
                }
            ],
            "name": "transferFrom",
            "outputs": [
                {
                    "internalType": "bool",
                    "name": "",
                    "type": "bool"
                }
            ],
            "stateMutability": "nonpayable",
            "type": "function"
        },
        {
            "inputs": [
                {
                    "internalType": "address",
                    "name": "newOwner",
                    "type": "address"
                }
            ],
            "name": "transferOwnership",
            "outputs": [],
            "stateMutability": "nonpayable",
            "type": "function"
        }
    ]
    const tokenContract = new ethers.Contract(tokenAddress,abi,provider)

    const tokenCCPAddress= "0xD8B1E07561A4ff84667b42f2Be1d3f851f0b5146"
    const tokenCCPContract= new ethers.Contract(tokenCCPAddress,abi,provider)


      
    const addToken = async() =>{
        const wasAdded = await window.ethereum.request({
            method: 'wallet_watchAsset',
            params: {
                type: 'ERC20',
                options: {
                    address: tokenAddress,
                    symbol: "sCLP",
                    decimals: 18
                }
            }
        })
    }

    const addTokenCCP = async() =>{
        const wasAdded = await window.ethereum.request({
            method: 'wallet_watchAsset',
            params: {
                type: 'ERC20',
                options: {
                    address: tokenCCPAddress,
                    symbol: "sCCP",
                    decimals: 18
                }
            }
        })
    }

    const faucetAddress = "0x3c479176Edb01F09954DF1d50464F1401EC48F35"
    const faucetCCPAddress= "0xa9c5248F27C3C9AbA8B26a9446b1b184274A6e38"

    const faucetAbi = [
        {
            "inputs": [
                {
                    "internalType": "uint256",
                    "name": "amount",
                    "type": "uint256"
                }
            ],
            "name": "request",
            "outputs": [],
            "stateMutability": "nonpayable",
            "type": "function"
        },
        {
            "inputs": [
                {
                    "internalType": "string",
                    "name": "_name",
                    "type": "string"
                },
                {
                    "internalType": "address",
                    "name": "_token",
                    "type": "address"
                }
            ],
            "stateMutability": "nonpayable",
            "type": "constructor"
        },
        {
            "inputs": [],
            "name": "name",
            "outputs": [
                {
                    "internalType": "string",
                    "name": "",
                    "type": "string"
                }
            ],
            "stateMutability": "view",
            "type": "function"
        },
        {
            "inputs": [],
            "name": "token",
            "outputs": [
                {
                    "internalType": "contract ERC20",
                    "name": "",
                    "type": "address"
                }
            ],
            "stateMutability": "view",
            "type": "function"
        }
    ]

    const faucetContract = new ethers.Contract(faucetAddress,faucetAbi,provider)
    const faucetCCPContract = new ethers.Contract(faucetCCPAddress,faucetAbi,provider)


    const requestTokens = async() => {
        const faucetWithSigner = faucetContract.connect(signer)
        try {
            const tx= await faucetWithSigner.request(ethers.utils.parseUnits("1000", 18))
            console.log(tx)
            await refreshBalance()    
        }
        catch(e) {
            alert("Faucet Seco")
        }
    }

    const requestCCPTokens = async() => {
        const faucetWithSigner = faucetCCPContract.connect(signer)
        try {
            const tx= await faucetWithSigner.request(ethers.utils.parseUnits("1000", 18))
            console.log(tx)
            await refreshBalance()
        }
        catch(e) {
            alert("Faucet Seco")
        }

    }

    const exchangeAddress="0xFD1d0fbDe337b3cb4dBe9980cDB9dA1122552AA9"
    const exchangeAbi= [
        {
            "inputs": [
                {
                    "internalType": "address",
                    "name": "_input",
                    "type": "address"
                },
                {
                    "internalType": "address",
                    "name": "_output",
                    "type": "address"
                }
            ],
            "stateMutability": "nonpayable",
            "type": "constructor"
        },
        {
            "anonymous": false,
            "inputs": [
                {
                    "indexed": true,
                    "internalType": "address",
                    "name": "previousOwner",
                    "type": "address"
                },
                {
                    "indexed": true,
                    "internalType": "address",
                    "name": "newOwner",
                    "type": "address"
                }
            ],
            "name": "OwnershipTransferred",
            "type": "event"
        },
        {
            "inputs": [],
            "name": "renounceOwnership",
            "outputs": [],
            "stateMutability": "nonpayable",
            "type": "function"
        },
        {
            "inputs": [
                {
                    "internalType": "uint256",
                    "name": "_rate",
                    "type": "uint256"
                }
            ],
            "name": "setRate",
            "outputs": [],
            "stateMutability": "nonpayable",
            "type": "function"
        },
        {
            "inputs": [
                {
                    "internalType": "uint256",
                    "name": "_inputAmount",
                    "type": "uint256"
                }
            ],
            "name": "swap",
            "outputs": [],
            "stateMutability": "nonpayable",
            "type": "function"
        },
        {
            "inputs": [
                {
                    "internalType": "address",
                    "name": "newOwner",
                    "type": "address"
                }
            ],
            "name": "transferOwnership",
            "outputs": [],
            "stateMutability": "nonpayable",
            "type": "function"
        },
        {
            "inputs": [],
            "name": "exchangeRate",
            "outputs": [
                {
                    "internalType": "uint256",
                    "name": "",
                    "type": "uint256"
                }
            ],
            "stateMutability": "view",
            "type": "function"
        },
        {
            "inputs": [],
            "name": "owner",
            "outputs": [
                {
                    "internalType": "address",
                    "name": "",
                    "type": "address"
                }
            ],
            "stateMutability": "view",
            "type": "function"
        },
        {
            "inputs": [
                {
                    "internalType": "uint256",
                    "name": "_amount",
                    "type": "uint256"
                }
            ],
            "name": "simulate",
            "outputs": [
                {
                    "internalType": "uint256",
                    "name": "",
                    "type": "uint256"
                }
            ],
            "stateMutability": "view",
            "type": "function"
        },
        {
            "inputs": [],
            "name": "tokenInput",
            "outputs": [
                {
                    "internalType": "contract ERC20",
                    "name": "",
                    "type": "address"
                }
            ],
            "stateMutability": "view",
            "type": "function"
        },
        {
            "inputs": [],
            "name": "tokenOutput",
            "outputs": [
                {
                    "internalType": "contract ERC20",
                    "name": "",
                    "type": "address"
                }
            ],
            "stateMutability": "view",
            "type": "function"
        }
    ]
    const exchangeContract= new ethers.Contract(exchangeAddress,exchangeAbi,provider)

    const getTipoCambio= async() => {
        const cambio= await exchangeContract.exchangeRate()
        setTipoCambio(Number(cambio))
    }

    const aproveDescuento= async() => {
        const sCLPWithSigner = tokenContract.connect(signer)
        await sCLPWithSigner.approve(exchangeAddress,ethers.utils.parseUnits("1000", 18))      
        alert("Autorizacion Lista")
    }

    const ejecutarCambio= async() => {
        const exchangeWithSigner = exchangeContract.connect(signer)
        await exchangeWithSigner.swap(ethers.utils.parseUnits("1000", 18))      
    }

    return(
        <Container>
            <Row>
                <Col md={4}>
                    <Card>
                        <Card.Body>
                        <Card.Title>Token ERC20 ScotiaCLP</Card.Title>
                        <Card.Text>
                        <div>Token de Prueba, e-Peso Chileño</div>
                        <div className="mt-2"><strong>Mi saldo: {balance}</strong>  <Button variant="primary" size="sm" onClick={refreshBalance}>Refrescar</Button></div>
                        <div className="mt-2"><Button variant="primary" size="sm" onClick={requestTokens}>Pedir 1.000 Tokens al Faucet</Button></div>
                        <div className="mt-2"><Button variant="primary" size="sm" onClick={addToken}>Agregar el Token a Metamask</Button></div> 
                        </Card.Text>   
                        </Card.Body> 
                    </Card>
                </Col>
                <Col md={4}>
                <Card>
                <Card.Body>
                <Card.Title>Token ERC20 ScotiaCCP</Card.Title>
                <Card.Text>
                <div>Token de Prueba, e-Peso Caribeño</div>
                <div className="mt-2"><strong>Mi saldo: {balanceCCP}</strong>  <Button variant="primary" size="sm" onClick={refreshBalanceCCP}>Refrescar</Button></div>
                <div className="mt-2"><Button variant="primary" size="sm" onClick={requestCCPTokens}>Pedir 1.000 Tokens al Faucet</Button></div>
                <div className="mt-2"><Button variant="primary" size="sm" onClick={addTokenCCP}>Agregar el Token a Metamask</Button></div> 
                </Card.Text>   
                </Card.Body> 
            </Card>
                </Col>
            </Row> 
            <Row className="mt-4">
                <Col md={8}>
                    <Card>
                        <Card.Body>
                            <Card.Title>Cambio de Tokens</Card.Title>
                            <Card.Text>
                                <div>Se puede cambiar peso chileño por peso caribeño</div>
                                <div><strong>Tipo de Cambio: {tipoCambio}</strong> <Button variant="primary" size="sm" onClick={getTipoCambio}>Actualizar</Button></div>
                                <div className="mt-2"><Button variant="primary" size="sm" onClick={aproveDescuento}>Autorizar el Descuento de 1.000 sCLP</Button></div>
                                <div className="mt-2"><Button variant="primary" size="sm" onClick={ejecutarCambio}>Ejecutar el cambio</Button></div>
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </Container>
    )

}

export default Tokens