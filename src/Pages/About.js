import React from "react";
import {Container} from "react-bootstrap";

export default function About() {
    return (
        <Container className={"mt-5"}>
            <center><h1>О нас</h1></center>
            <section>
                <h2>История платформы</h2>
                <p>Наша платформа была создана в 2024 году с целью помочь людям находить и делиться лучшими рецептами со всего мира.</p>
            </section>
            <section>
                <h2>Миссия</h2>
                <p>Наша миссия - вдохновлять людей готовить дома, создавая здоровую и вкусную еду, и делиться своими кулинарными открытиями.</p>
            </section>
            <section>
                <h2>Команда</h2>
                <p>Наша команда: Гензе Вадим, Мещеряков Николай и Сальцов Глеб</p>
            </section>
        </Container>
    );
}
