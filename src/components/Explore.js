import React from 'react';
import { withRouter } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';

import HighlightContainer from './HighlightContainer.js';

import '../css/Highlight.css';
import '../css/StoryComponent.css';

import data from '../assets/data.json';


function transform(tokens, annotations){
  let spans = [];

  // First add all of the tokens as plain spans
  tokens.forEach((sentence, i) => {
    sentence.forEach((word, j) => {
      spans.push({
        text: word,
        id: null,
        relation: null,
        parent_id: null,
        source: null,
        mergeBackward: false
      })
    });
  });

  // Now add annotations
  annotations.forEach((annotation, i) => {
    var inside = false;
    for (var j=annotation.span[0]; j<annotation.span[1]; j++) {
      spans[j].id = annotation.id;
      spans[j].relation = annotation.relation;
      spans[j].parent_id = annotation.parent_id;
      spans[j].source = annotation.source;
      if ( inside ) {
        spans[j].mergeBackward = true;
      }
      inside = true;
    }
  });

  // Lastly merge spans
  let out = [];
  var prevSpan;
  spans.forEach((span, i) => {
    if ( span.mergeBackward ) {
      prevSpan.text = (prevSpan.text + ' ' + span.text);
    } else {
      out.push(span);
      prevSpan = span;
    }
  });

  let last = {};
  spans.forEach((span, i) => {
    span.idx = i;
    span.parent_idx = last[span.parent_id];
    last[span.id] = i;
  });
  return out
}


class StorySpan extends React.Component {

  render () {
    const { span, onMouseOver, activeIds } = this.props;
    const { text, source, id, idx } = span;

    const sourceLookup = {
      "WIKI": { color: "blue" },
      "NEL": { color: "green" },
      "COREF": { color: "orange" },
      "KG": { color: "fuchsia" }
    }

    const conditionalClasses = `highlight
      ${sourceLookup[source].color}
      ${activeIds && activeIds.includes(idx) ? "active" : ""}`;

    return (
      <div className="storyspan">
        <a href={'https://wikidata.org/wiki/' + id[0]} target='_blank' rel='noopener noreferrer'>
          <span className={conditionalClasses}
              onMouseOver={ onMouseOver ? () => { onMouseOver(span) } : null}>
            <span className="highlight__content">{text}</span>
            <span className="highlight__label"><strong>{source}</strong></span>
            <span className="highlight__tooltip">{id[1]}</span>
          </span>
        </a>
      </div>
    )
  }
}


class TopNav extends React.Component {
  render () {
    const { next, prev } =  this.props;
    return (
      <Navbar fixed="top" bg="light" className="d-flex flex-column">
          <ButtonGroup>
            <Button variant="outline-secondary" onClick={prev}>Prev</Button>
            <Link className="btn btn-outline-secondary" to="/">Home</Link>
            <Button variant="outline-secondary" onClick={next}>Next</Button>
          </ButtonGroup>
      </Navbar>
    )
  }
}


class InfoBox extends React.Component {
  render () {
    const { span } = this.props;
    if ( span ) {
      return (
        <Navbar fixed="bottom" bg="light" className="bottom-nav">
          <Navbar.Brand>Anotation Details</Navbar.Brand>
          <Navbar.Collapse>
            <Navbar.Text><b>Parent Ids:</b>{span.parent_id[1]}({span.parent_id[0]})&nbsp;</Navbar.Text>
            <Navbar.Text><b>Relations:</b>{span.relation[1]}({span.relation[0]})&nbsp;</Navbar.Text>
            <Navbar.Text><b>Id:</b>{span.id[1]}({span.id[0]})</Navbar.Text>
          </Navbar.Collapse>
        </Navbar>
      )
    }
    return null;
  }
}


class _Explore extends React.Component {
  constructor() {
    super();

    this.state = {
      activeSpan: null,
      activeIds: null,
      activeAnnotationIdx: 0
    };

    this.handleHover = this.handleHover.bind(this);
    this.prevCallback = this.prevCallback.bind(this);
    this.nextCallback = this.nextCallback.bind(this);
  }

  handleHover(span) {
    this.setState({
      activeSpan: span,
      activeIds: [span.idx, span.parent_idx]
    });
  }

  prevCallback() {
    const { activeAnnotationIdx } = this.state;
    if (activeAnnotationIdx > 0) {
      this.setState({ activeAnnotationIdx: activeAnnotationIdx - 1})
    }
  }

  nextCallback() {
    const { activeAnnotationIdx } = this.state;
    if (activeAnnotationIdx < data.length) {
      this.setState({ activeAnnotationIdx: activeAnnotationIdx + 1})
    }
  }

  render () {

    const { activeSpan, activeIds, activeAnnotationIdx } = this.state;

    // const tokens = responseData && responseData.tokens;
    // const annotations = responseData && responseData.annotations;
    const tokens = data[activeAnnotationIdx].tokens;
    const annotations = data[activeAnnotationIdx].annotations;

    const spanWrapper = (spans) => {
      return spans.map((span, i) =>
        span.id ? (
          <StorySpan key={i} span={span} activeIds={activeIds} onMouseOver={this.handleHover}/>
        ) : (
          <span key={i}>{span.text} </span>
        )
      );
    }

    const spans = transform(tokens, annotations);
    return (
      <div>
        <Container>
        <TopNav prev={this.prevCallback} next={this.nextCallback}/>
        <HighlightContainer layout="bottom-labels">
          {spanWrapper(spans)}
        </HighlightContainer>
        <InfoBox span={activeSpan} />
        </Container>
      </div>
    )
  }
}

const Explore = withRouter(_Explore);

export default Explore;
