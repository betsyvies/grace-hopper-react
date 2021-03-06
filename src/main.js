import React, { Component } from 'react';

const options = {
  style: {
    width: '60%',
    float: 'left',
    marginLeft:'30px',
    marginRight:'50px',
    marginTop:'40px'
  }
};

class Main extends Component {
  render() {
    return (
      <div {...options}>
        <p><strong>Grace Brewster Murray Hopper </strong> (née <strong>Murray</strong>; December 9, 1906 – January 1, 1992) was an American <a href="https://en.wikipedia.org/wiki/Computer_scientist" target="_blank">computer scientist</a>and <a href="https://en.wikipedia.org/wiki/United_States_Navy" target="_blank">United States Navy</a> rear admiral.[1] One of the first programmers of the Harvard Mark I computer, she was a pioneer of computer programming who invented one of the first compiler related tools. She popularized the idea of machine-independent programming languages, which led to the development of <a href="https://en.wikipedia.org/wiki/United_States_Navy" target="_blank">COBOL</a>, an early <a href="https://en.wikipedia.org/wiki/High-level_programming_language" target="_blank">high-level programming language</a> still in use today</p>
        <p>Hopper had attempted to enlist in the Navy during <a href="https://en.wikipedia.org/wiki/World_War_II" target="_blank">World War II</a>, but she was rejected by the military because she was <mark>34 years</mark> of age and too old to enlist. She instead joined the Navy Reserves. Hopper began her computing career when she worked on the Harvard Mark I team that was led by Howard H. Aiken. In 1949, she joined the <a href="https://en.wikipedia.org/wiki/Eckert%E2%80%93Mauchly_Computer_Corporation" target="_blank">Eckert–Mauchly Computer Corporation</a> and was part of the development team that designed the <a href="https://en.wikipedia.org/wiki/UNIVAC_I" target="_blank">UNIVAC I</a> computer in 1944. It was at Eckert–Mauchly that she began developing the compiler. She believed that computer code could be written in English by using a programming language that was based on English words. The compiler would convert that code into <a href="https://en.wikipedia.org/wiki/Machine_code" target="_blank">machine code</a> that would be understood by computers. By 1952, Hopper finished her compiler, which was written for the A-0 System programming language.</p>
        <p>In 1954, Eckert–Mauchly chose Hopper to lead their department for automatic programming, and she led the release of some of the first compiled languages like <a href="https://en.wikipedia.org/wiki/FLOW-MATIC" target="_blank">FLOW-MATIC</a>. In 1959, she participated in the <a href="https://en.wikipedia.org/wiki/CODASYL" target="_blank">CODASYL</a> consortium, which consulted Hopper to guide them in creating a machine-independent programming language. This led to the COBOL language, which was inspired by her idea of a language being based on English words. In 1966, she retired from the Naval Reserve, but in 1967, the Navy recalled her to active duty. She retired from the Navy in 1986 and found work as a consultant for the <a href="https://en.wikipedia.org/wiki/Digital_Equipment_Corporation">Digital Equipment Corporation</a>, sharing her computing experiences.</p>
        <p>Owing to her accomplishments and her naval rank, she was sometimes referred to as "Amazing Grace".[6][7] The U.S. Navy <a href="https://en.wikipedia.org/wiki/Arleigh_Burke-class_destroyer" target="_blank"><i>Arleigh</i> Burke-class</a> guided-missile destroyer <a href="https://en.wikipedia.org/wiki/USS_Hopper">USS <i>Hopper</i></a> was named for her, as was the Cray XE6 "Hopper" supercomputer at NERSC.[8] During her lifetime, Hopper was awarded 40 honorary degrees from universities across the world. In 1991, she received the National Medal of Technology. On November 22, 2016, she was posthumously awarded the Presidential Medal of Freedom by President Barack Obama.[9]</p>
        <h3>Career</h3>
        <ol>
          <li>Word war II</li>
          <li>UNIVAC</li>
          <li>Cobol</li>
          <li>Standards</li>
        </ol>
      </div>
    );
  }
}
export default Main;