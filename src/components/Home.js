import React from 'react';
import ButtonToolbar from 'react-bootstrap/ButtonToolbar';
import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Jumbotron from 'react-bootstrap/Jumbotron';
import Row from 'react-bootstrap/Row';
import { Link } from 'react-router-dom';

import '../css/Home.css';

import uciLogo from '../assets/uci-nlp-logo.svg';
import ai2Logo from '../assets/ai2-logo.svg';
import dataset from '../assets/linked-wikitext-2.zip';

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

const description = `
The Linked Wikitext-2 language modeling dataset contains over 2 million tokens from Wikipedia articles, along with annotations linking mentions to their corresponding entities and relations in Wikidata.
It is designed to match as closely as possible the contents of the popular WikiText-2 dataset.
`

class Credits extends React.Component {
    render() {
        return (
            <CardGroup>
                <Card>
                    <Card.Img variant="top" src={uciLogo}/>
                    <Card.Body>
                        <Card.Title>UCI NLP</Card.Title>
                        <Card.Text>
                            Description of UCI NLP.
                        </Card.Text>

                    </Card.Body>
                </Card>
                <Card>
                    <Card.Img variant="top" src={ai2Logo}/>
                    <Card.Body>
                        <Card.Title>The Allen Institute for Artificial Intelligence</Card.Title>
                        <Card.Text>
                            Description of AI2.
                        </Card.Text>
                    </Card.Body>
                </Card>
            </CardGroup>
        )
    }
}

class Footer extends React.Component {
    render () {
        return (
            <footer className="container">
                <hr/>
                <p>
                    This site is created and maintained by&nbsp;
                    <a href="https://rloganiv.github.io">rloganiv</a>.
                </p>
            </footer>
        )
    }
}


class Home extends React.Component {
    render () {
        return (
            <Container>
                <main role="main">
                    <Jumbotron>
                        <Container>
                            <h1 className="display-3">
                                Linked WikiText-2
                            </h1>
                            <p>
                                {description}
                                For more details please refer to our <a href="https://rloganiv.github.io/assets/projects/kglm.pdf">paper</a>.
                            </p>
                            <ButtonToolbar>
                                <a className="btn btn-primary btn-lg" href={dataset}>Download</a>
                                <Link className="btn btn-primary btn-lg" to="/explore">Explore</Link>
                            </ButtonToolbar>
                            {/* <Credits/> */}
                        </Container>
                    </Jumbotron>
                    <Container>
                        <Row>
                            <Col md={4}>
                                <h2>Acknowledgements</h2>
                                <p>
                                We would like to thank the following people for making this work possible:
                                </p>
                                <p>
                                    <a href="https://smerity.com">Stephen Merity</a> for sharing the scripts used to collect the Wikitext-2 dataset.
                                </p>
                                <p>
                                    <a href="https://nitishgupta.github.io/">Nitish Gupta</a> for modifying his <a href="https://github.com/nitishgupta/neural-el">neural-el</a> code to easily run on our data.
                                </p>
                                <p>
                                    The numerous contributors that have made <a href="https://www.wikipedia.org">Wikipedia</a> and <a href="https://www.wikidata.org">Wikidata</a> such fantastic repositories of knowledge.
                                </p>
                                <p>
                                    The developers of <a href="https://allennlp.org">AllenNLP</a> whose demo code we repurposed to allow users to explore our dataset.
                                </p>
                            </Col>
                            <Col md={4}>
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
                            <Col md={4}>
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
                        </Row>
                    </Container>
                <Footer/>
                </main>
            </Container>
        )
    }
}

export default Home;
