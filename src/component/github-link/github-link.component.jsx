/* eslint-disable jsx-a11y/anchor-has-content */
import React from 'react';
import { GithubLinkWrapper, Image, Text } from './github-link.styles';
import GithubLogo from '../../assets/github.svg';

const GithubLink = () => {
   return (
      <GithubLinkWrapper
         href='https://github.com/anisma/crwn-clothing'
         target='_blank'
      >
         <Image src={GithubLogo} alt='' />
         <Text>Github Link</Text>
      </GithubLinkWrapper>
   );
};

export default GithubLink;
