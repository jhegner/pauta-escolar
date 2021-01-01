import React from "react";
import {Button, Container, Form, Jumbotron, NavLink} from "react-bootstrap";
import Head from "next/head";
import styles from "../styles/Home.module.css";

export default function Login() {
    return (

        <Container fluid="lg">

            <Head>
                <title>Pauta Escolar | Controle das notas dos alunos</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <Jumbotron fluid>
                <Container>
                    <h1># Pauta Escolar</h1>
                    <p>Controle das notas dos alunos</p>
                </Container>
            </Jumbotron>

            <main>
                <Container fluid="sm">
                    <Form>
                        <Form.Group controlId="formBasicID">
                            <Form.Label>ID ou Telefone</Form.Label>
                            <Form.Control type="email" placeholder="ID de acesso ou telefone" />
                            <Form.Text className="text-muted">
                                Nunca compartilhe seus dados de acesso com ninguém.
                            </Form.Text>
                        </Form.Group>

                        <Form.Group controlId="formBasicPassword">
                            <Form.Label>Senha</Form.Label>
                            <Form.Control type="password" placeholder="Senha de acesso" />
                        </Form.Group>

                        <Button variant="primary" type="submit">
                            Entrar
                        </Button>
                        <NavLink>
                            Esqueci meu usuário ou senha
                        </NavLink>
                    </Form>
                </Container>
            </main>

            <footer className={styles.footer}>
                Powered by Nercode Tecnologia
            </footer>

        </Container>
    )
}