import React from "react";
import { Container, Row, Col, Button } from "react-bootstrap";

function Poap() {

    return(
        <Container>
            <Row>
                <Col>
                    <h3>Obtener el POAP</h3>
                    <div>Un POAP es un recordatorio digital en Blockchain de 
                    mi participación en un evento</div>
                    <div>Pasos para obtenerlo</div>
                    <div>
                    <ol>
                        <li><a href="https://apps.apple.com/us/app/poap-app/id1567078943" target="_blank">Instale la APP POAP</a></li>
                        <li>Copie el address de su billetera al celular</li>
                        <li>Escanee el QR con la APP</li>
                        <li>Pegue su address. También puede generar el QR del address en Metamask y escanearlo con la APP</li>
                        <li>En algunos minutos recibirá su POAP</li>
                    </ol>
                    </div>
                </Col>
            </Row> 
        </Container>
    )

}

export default Poap