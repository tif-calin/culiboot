import React from 'react';
import styled from 'styled-components';
import ExternalLink from '../ExternalLink';

const StyledFooter = styled.footer`
  & a {
    margin-top: calc(1rem + 1vh);
    gap: 0.25rem;

    opacity: 0.5;
    transition: opacity 0.15s;

    &:hover {
      opacity: 1;
    }

    &::before, &::after {
      content: "\\2620";
    }
  }
`;

interface Props {};

const Footer: React.FC<Props> = () => {
  return (
    <StyledFooter>
      <ExternalLink 
        href="https://github.com/tif-calin/culiboot/"
      >steal this</ExternalLink>
    </StyledFooter>
  );
};

export default Footer;
