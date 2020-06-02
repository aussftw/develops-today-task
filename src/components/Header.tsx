import styled from 'styled-components';
import Link from 'next/link';
import AppBar from '@material-ui/core/AppBar';

const Header: React.FC = () => {
  return (
    <HeaderWrapper>
      <StyledHeader>
        <ButtonsWrapper>
          <Link href="/">
            <PostsButton>BLOG</PostsButton>
          </Link>
          <Link href={'/posts/new'}>
            <AddPostsButton> Add Post</AddPostsButton>
          </Link>
        </ButtonsWrapper>
      </StyledHeader>
    </HeaderWrapper>
  );
};

export default Header;

const StyledHeader = styled(AppBar)`
  display: flex;
  align-items: center;
  padding: 10px;
`;
const HeaderWrapper = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  align-items: center;
`;
const ButtonsWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  max-width: 1160px;
  width: 100%;
`;

const PostsButton = styled.p`
  cursor: pointer;
  font-weight: 600;
  font-size: 14px;

  & :hover {
    color: #77a0a9;
  }
`;

const AddPostsButton = styled.button`
  cursor: pointer;
  border-radius: 10px;
  padding: 10px 30px;
  font-size: 14px;
  background-color: #77a0a9;
  color: #fff;
  font-weight: 600;
  text-transform: uppercase;
  line-height: 1.75;
  outline: none;
  border: none;
  box-shadow: 0px 3px 1px -2px rgba(0, 0, 0, 0.2), 0px 2px 2px 0px rgba(0, 0, 0, 0.14),
    0px 1px 5px 0px rgba(0, 0, 0, 0.12);
  transition: background-color 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms, box-shadow 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms,
    border 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;
  & :hover {
    background-color: #6f7d8c;
  }
`;
