import styled from 'styled-components';

export const GithubLinkWrapper = styled.a`
   border-radius: 5px 5px;
   background: #fff;
   position: fixed;
   bottom: 20px;
   right: 20px;
   z-index: 10;
   display: flex;
   align-items: center;
   padding: 5px;

   &:hover {
      background: skyblue;
   }

   /* &::before {
      content: 'Github Link';
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      background: ;
   } */
`;

export const Text = styled.span`
   font-weight: 600;
   padding-left: 5px;
`;

export const Image = styled.img`
   width: 24px;
   height: 24px;
   object-fit: cover;
   object-position: center;
`;
