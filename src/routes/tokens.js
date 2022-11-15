import { ethers } from "ethers";
import React, {useState, useEffect} from "react";
import { Container, Row, Col, Button, Card } from "react-bootstrap";

function Tokens() {

    const [balance,setBalance] = useState(0);
    const [balanceCCP,setBalanceCCP] = useState(0);
    const [tipoCambio,setTipoCambio] = useState(0);
    const [mensaje,setMensaje] = useState(0);

    const provider = new ethers.providers.Web3Provider(window.ethereum)
    const signer = provider.getSigner()

    const refreshBalance = async() => {
        const account = await provider.listAccounts();
        console.log(account)
        const currentBalance= await tokenContract.balanceOf(account[0])
        console.log(currentBalance)
        setBalance(ethers.utils.formatUnits(currentBalance,0))
    }

    const refreshBalanceCCP = async() => {
        const account = await provider.listAccounts();
        console.log(account)
        const currentBalance= await tokenCCPContract.balanceOf(account[0])
        console.log(currentBalance)
        setBalanceCCP(ethers.utils.formatUnits(currentBalance,0))
    }

    const signerAddress="0x3a2359cf4A10032220829126B0E297e40577f5bb"
    const signerABI= [
        {
            "inputs": [
                {
                    "internalType": "uint256",
                    "name": "monto",
                    "type": "uint256"
                }
            ],
            "name": "extraerHash",
            "outputs": [
                {
                    "internalType": "bytes32",
                    "name": "",
                    "type": "bytes32"
                }
            ],
            "stateMutability": "pure",
            "type": "function"
        },
        {
            "inputs": [
                {
                    "internalType": "uint256",
                    "name": "monto",
                    "type": "uint256"
                },
                {
                    "internalType": "bytes",
                    "name": "sig",
                    "type": "bytes"
                }
            ],
            "name": "obtenerAddress",
            "outputs": [
                {
                    "internalType": "address",
                    "name": "",
                    "type": "address"
                }
            ],
            "stateMutability": "pure",
            "type": "function"
        },
        {
            "inputs": [
                {
                    "internalType": "bytes",
                    "name": "sig",
                    "type": "bytes"
                }
            ],
            "name": "splitSignature",
            "outputs": [
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
            "stateMutability": "pure",
            "type": "function"
        }
    ]
    const signerContract = new ethers.Contract(signerAddress,signerABI);


    const tokenAddress= "0x51a3839b6D58C022A4aF93adDAe0e4e9Fdc94852";
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

    const tokenCCPAddress= "0xa83527C2696600aC60B74fba96df6A4A06d31398"
    const tokenCCPContract= new ethers.Contract(tokenCCPAddress,abi,provider)


      
    const addToken = async() =>{
        const wasAdded = await window.ethereum.request({
            method: 'wallet_watchAsset',
            params: {
                type: 'ERC20',
                options: {
                    address: tokenAddress,
                    symbol: "sCLP",
                    decimals: 0
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
                    decimals: 0
                }
            }
        })
    }

    const faucetAddress = "0x6AD0C2820b507E854Da98881947084F5279AB34E"
    const faucetCCPAddress= "0xB465DEBF8354e032168B44B97bF29922bbe4DB94"

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
            const tx= await faucetWithSigner.request(ethers.utils.parseUnits("1000", 0))
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
            const tx= await faucetWithSigner.request(ethers.utils.parseUnits("1000", 0))
            console.log(tx)
            await refreshBalance()
        }
        catch(e) {
            alert("Faucet Seco")
        }

    }

    const exchangeAddress="0x502f9A746d959fa0ACD7B6D1a796f44dD982a8fC"
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
        await sCLPWithSigner.approve(exchangeAddress,ethers.utils.parseUnits("1000", 0))      
        alert("Autorizacion Lista")
    }

    const ejecutarCambio= async() => {
        const exchangeWithSigner = exchangeContract.connect(signer)
        await exchangeWithSigner.swap(ethers.utils.parseUnits("1000", 0))      
    }

    const changeMensajeHandler = async(e)=>{
        setMensaje(e.target.value)
    }

    const firmarMensaje = async()=>{
        const hash= await signer.signMessage(ethers.utils.hashMessage(mensaje))
        console.log(hash)
    }

    return(
        <Container>
            <Row>
                <Col md={4}>
                    <Card>
                        <Card.Body>
                        <Card.Title>Token ERC20 CLP</Card.Title>
                        <Card.Text>
                        <div>Token de Prueba, e-Peso Chileno</div>
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
                <Card.Title>Token ERC20 CCP</Card.Title>
                <Card.Text>
                <div>Token de Prueba, e-Peso Copec</div>
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
            <Row className="mt-4">
                <Col md={8}>
                    <Card>
                        <Card.Body>
                            <Card.Title>Firmar Mensaje</Card.Title>
                            <Card.Text>
                                <div>Monto: <input type="text" onChange={changeMensajeHandler}/> <Button variant="primary" onClick={firmarMensaje}>Generar Firma</Button></div>
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </Container>
    )

}

export default Tokens