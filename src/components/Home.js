import React from 'react';
import Button from 'react-bootstrap/Button';
import ButtonToolbar from 'react-bootstrap/ButtonToolbar';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Jumbotron from 'react-bootstrap/Jumbotron';
import Row from 'react-bootstrap/Row';

import '../css/home.css';


const bibtex = `@inproceedings{rlogan2019kglm,
    name = "Barack's Wife {H}illary: Using Knowledge Graphs for Fact-Aware Language Modeling",
    author = "Logan, IV, Robert L.  and
        Liu, Nelson F.  and
        Peters, Matthew E.  and
        Gardner, Matt  and
        Singh, Sameer",
    booktitle = "Proceedings of the 57th Annual Meeting of the Association for Computational Linguistics (Volume 1: Long Papers)",
    month = jul,
    year = "2019",
    address = "Florence, Italy",
    publisher = "Association for Computational Linguistics",
}`


class Home extends React.Component {
    render () {
        return (
            <main role="main">
                <Jumbotron>
                    <Container>
                        <h1 class="display-3">
                            Linked WikiText-2
                        </h1>
                        <p>
                            A nice description of the Linked WikiText-2 dataset.
                        </p>
                        <p>
                            <ButtonToolbar>
                                <Button href="#" variant="primary" size="lg">Download</Button>
                                <Button variant="primary" size="lg">Explore</Button>
                            </ButtonToolbar>
                        </p>
                    </Container>
                </Jumbotron>
                <Container>
                    <Row>
                        <Col md='4'>
                            <h2>Acknowledgements</h2>
                            <p>
                            We would like to thank the following people for making this work possible:
                            </p>
                            <p>
                                <a href="https://smerity.com">Stephen Merity</a> for sharing the scripts used to collect the Wikitext-2 dataset.
                            </p>
                            <p>
                                <a href="https://">Nitish Gupta</a> for modifying his <a href="https://github.com/nitishgupta/neural-el">neural-el</a> code to easily run on our data.
                            </p>
                            <p>
                                The numerous contributors that have made <a href="https://www.wikipedia.org">Wikipedia</a> and <a href="https://www.wikidata.org">Wikidata</a> such fantastic repositories of knowledge.
                            </p>
                        </Col>
                        <Col md='4'>
                            <h2>License</h2>
                            <p>
                            The Linked WikiText-2 Dataset is distributed under a&nbsp;
                            <a rel="license" href="http://creativecommons.org/licenses/by-sa/3.0/us/">CC-BY-SA-3.0</a> license.
                            </p>
                            <p>
                            The Linked WikiText-2 Dataset is derivative work of Saleforce Research's &nbsp;
                            <a href="https://blog.einstein.ai/the-wikitext-long-term-dependency-language-modeling-dataset/">WikiText-2 Dataset</a>
                            &nbsp;
                            which is distributed under the same license.
                            </p>
                            <a rel="license" href="http://creativecommons.org/licenses/by-sa/3.0/us/">
                            <img alt="Creative Commons License" src="https://i.creativecommons.org/l/by-sa/3.0/us/88x31.png" />
                            </a>
                        </Col>
                        <Col md='4'>
                            <h2>Citation</h2>
                            <p>
                            If you use this dataset in your work please cite:
                            </p>
                            <pre>
                            <code>
                                { bibtex }
                            </code>
                            </pre>
                        </Col>

                    </Row>

                </Container>
            </main>
        )
    }
}

export default Home;