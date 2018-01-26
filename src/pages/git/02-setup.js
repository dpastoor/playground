import React from 'react';
import Main from './components/_Main';
import CodeBlock from '../../components/CodeBlock';
import DevHomework from '../../components/layout/DevHomework';
import CodepenLink from '../../components/CodepenLink';
import DownloadLink from '../../components/DownloadLink';

const Tutorial = () => (
  <div>
    <h2>Your First Repository</h2>

    <h4>Create a new repository</h4>
    <p>
      The first thing we want to do is create a new repository. We can do this by creating a new directory and navigating inside
    </p>
    <CodeBlock>
      {
`mkdir first-repo
cd first-repo`
}
    </CodeBlock>

    <p>
    We can initialize the repository 
    </p>
    <CodeBlock>
      {
        `git init`
      }
    </CodeBlock>

    <p> this will initialize the git repository, and create a hidden <code>.git </code> folder that will store metadata
    </p>
   </div>
);

const Homework = () => (
  <DevHomework title="Next up: Tracking Content">
    <p>
      Amazing right? In the next section we will learn how git tracks and manages files 

    </p>
  </DevHomework>
);

export default () => <Main currentPageNum={2} tutorial={<Tutorial />} homework={<Homework />} />;
