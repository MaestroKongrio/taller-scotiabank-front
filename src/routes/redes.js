import { ethers } from "ethers";
import React from "react";
import { Container, Row, Col, Button } from "react-bootstrap";

function Redes() {

    const AVALANCHE_TESTNET_PARAMS= {
        chainId: "0xA869",
        chainName: "Avalanche Testnet C-Chain",
        nativeCurrency: {
          name: "Avalanche",
          symbol: "AVAX",
          decimals: 18,
        },
        rpcUrls: ["https://api.avax-test.network/ext/bc/C/rpc"],
        blockExplorerUrls: ["https://testnet.snowtrace.io/"], 
    }


    const connect = async () => {
            window.ethereum.request({
                method: 'wallet_addEthereumChain',
                params: [AVALANCHE_TESTNET_PARAMS]
            })
    }


    const connectKaleido = async () => {
        window.ethereum.request({
            method: 'wallet_addEthereumChain',
            params: [{
                chainId: "0x4BD1CB2A",
                chainName: "Kaleido Testing",
                nativeCurrency: {
                  name: "ScotiaCoin",
                  symbol: "SCC",
                  decimals: 18,
                },
                rpcUrls: ["https://u0yh48jj0i:SvO3PiBSSW_To64xH0m5dNC1wjfyAI87gC61qsYFu-g@u0up6jfzzj-u0m43mth26-rpc.us0-aws.kaleido.io/"],
            }]
        })
}

    
    const authorize = async () => {
        const provider = new ethers.providers.Web3Provider(window.ethereum)
        await provider.send("eth_requestAccounts", []);
}

    return(
        <Container>
            <Row>
                <Col>
                    <h3>Conectar a las Redes</h3>
                    <div>Esta sección permite agregar la Fuji Testnet o la Red Kaleido
                    del demo a Metamask sin necesidad de configuraciones adicionales</div>
                </Col>
            </Row> 

            <Row className="mt-4">
                <Col>
                    <Button variant="primary" onClick={connect}>Agregar la Fuji Testnet</Button>
                </Col>
            </Row> 
            <Row className="mt-4">
                <Col>
                    <Button variant="primary" onClick={connectKaleido}>Agregar la Red Kaleido</Button>
                </Col>
            </Row>      
            <Row className="mt-4">
                <Col>
                    <Button variant="primary" onClick={authorize}>Autorizar al sitio</Button>
                </Col>
            </Row>  
            <Row className="mt-4">
                <Col>
                    <Button variant="success" onClick={()=>window.open("http://faucet.avax.network","_blank","noopener,noreferrer")}>Ir a pedir fondos al Faucet</Button>
                </Col>
            </Row> 
            <Row className="mt-4">
                <Col>
                    <Button variant="info" onClick={()=>window.open("https://testnet.snowtrace.io/","_blank","noopener,noreferrer")}>Ver el explorador de bloques</Button>
                </Col>
            </Row> 
        </Container>
    )

}

export default Redes