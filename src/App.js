import React from 'react';
import HeaderBlock from './components/HeaderBlock';
import Header from './components/Header';
import Paragraph from './components/Paragraph';
import Card from './components/Card';
import CardList from './components/CardList';
import { ReactComponent as ReactLogo } from './components/ContentBlock/img/logo.svg';
import ContentBlock from './components/ContentBlock/ContentBlock';
import SectionImg from './components/SectionImg/SectionImg';
import FooterBlock from './components/FooterBlock/FooterBlock';

// const App = () => {
//   return (
//     <>
//       <HeaderBlock 
//         title="Learn JS/React.js online" 
//         descr="Try different marathons, read more documentation, and grow."
//       />
//       <ContentBlock 
//         title="Learn React"
//         descr="When starting a React project, 
//         a simple HTML page with script 
//         tags might still be the best option. 
//         It only takes a minute to set up! 
//         As your application grows, 
//         you might want to consider a more integrated setup. 
//         There are several JavaScript toolchains 
//         we recommend for larger applications. 
//         Each of them can work with little to no configuration 
//         and lets you take full advantage of the rich React 
//         ecosystem. Learn how."
//       />
//       <HeaderBlock 
//         title="I like it very much"
//         hideBackground // = { true } -----  Note: if you just pass an argument to our component without specifying what it is equal to, then the react will accept it as a boolean variable.
//         descr="Try and study hard, and you'll see tremendous results of your labor."
//       />
//       <FooterBlock 
//         privacy="Copyright © 2020"
//         name="React.js"
//         policy="Privacy Policy"
//         faq="FAQ"
//         pcsupport="Support"
//         designed="Designed by"
//         desBy="Shoulders mon Max"
//         developed="Developed by"
//         devBy=" Rozhko Maksym"
//         stick="|"
//       />
//     </>
//   );
// }


export const wordsList = [
  {
    test: 'true + false',
    answer: 'true + false // 1'
  },
  {
    test: '12 / "6"',
    answer: '12 / "6" // 2'
  },
  {
    test: '"number" + 15 + 3',
    answer: '"number" + 15 + 3 // "number153"'
  },
  {
    test: '15 + 3 + "number"',
    answer: '15 + 3 + "number" // "18number"'
  },
  {
    test: '[1] > null',
    answer: '[1] > null // true'
  },
  {
    test: '"foo" + + "bar"',
    answer: '"foo" + + "bar" // "fooNaN"'
  },
  {
    test: '"foo" + + "bar"',
    answer: '"foo" + + "bar" // false'
  },
  {
    test: 'false == "false"',
    answer: 'false == "false" // false'
  },
  {
    test: 'null == ""',
    answer: 'null == "" // false'
  },
  {
    test: '!!"false" == !!"true"',
    answer: '!!"false" == !!"true" // true'
  },
  {
    test: '[‘x’] == ‘x’',
    answer: '[‘x’] == ‘x’ // true '
  },
  {
    test: '[] + null + 1',
    answer: '[] + null + 1 // "null1"'
  },
  {
    test: '0 || "0" && {}',
    answer: '0 || "0" && {} // {}'
  },
  {
    test: '[1,2,3] == [1,2,3]',
    answer: '1,2,3] == [1,2,3] // false'
  },
  {
    test: '{}+[]+{}+[1]',
    answer: '{}+[]+{}+[1] // "0[object Object]1"'
  },
  {
    test: '!+[]+[]+![]',
    answer: '!+[]+[]+![] // "truefalse"'
  },
];

const App = () => {
  return (
    <>
      <HeaderBlock>
        <Header>
          Learn JS/React.js online
        </Header>
        <Paragraph>
          Try different marathons, read more documentation, and grow.
        </Paragraph>
      </HeaderBlock>
      <ContentBlock>
        <Header>
          Implicit type conversion in JavaScript.
        </Header>
        <Paragraph>
          Here is a list of interesting expressions, test your knowledge, then click on the card to see if your answer is correct.
        </Paragraph>
        <CardList item={wordsList} />
      </ContentBlock>
      <HeaderBlock hideBackground>
        <Header>
          I like it very much
        </Header>
        <Paragraph>
          Try and study hard, and you'll see tremendous results of your labor.
        </Paragraph>
        <ReactLogo></ReactLogo>
      </HeaderBlock>
      <SectionImg></SectionImg>
      <FooterBlock 
        privacy="Copyright © 2020"
        name="React.js"
        policy="Privacy Policy"
        faq="FAQ"
        pcsupport="Support"
        designed="Designed by"
        desBy="Shoulders mon Max"
        developed="Developed by"
         devBy=" Rozhko Maksym"
         stick="|"
       />
    </>
  );
}


export default App;
