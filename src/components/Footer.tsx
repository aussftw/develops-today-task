import styled from 'styled-components';
import Link from 'next/link';

const Footer: React.FC = () => {
  return (
    <FooterWrapper>
      <ContentWrapper>
        <Link href="/">
          <LinkWrapper>BLOG</LinkWrapper>
        </Link>
        <Copy>Alexander Kaminskiy &copy; 2020</Copy>
      </ContentWrapper>
    </FooterWrapper>
  );
};

export default Footer;

const FooterWrapper = styled.footer`
  background-color: #4b2e39;
  display: flex;
  justify-content: center;
  width: 100%;
  align-items: center;
  color: #fff;
`;

const ContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  padding: 10px;
  max-width: 1160px;
  width: 100%;

  @media (min-width: 992px) {
    padding: 10px 0px 0px 0px;
  }
`;

const LinkWrapper = styled.p`
  cursor: pointer;
  font-weight: 600;
  font-size: 14px;
  margin: 10px 0;
  & :hover {
    color: #77a0a9;
  }
`;

const Copy = styled.p`
  font-size: 13px;
  margin-top: 10px;
  margin-bottom: 20px;
`;
