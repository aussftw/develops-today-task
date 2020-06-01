import Button from '@material-ui/core/Button';
import styled from 'styled-components';
import Link from 'next/link';
import AppBar from '@material-ui/core/AppBar';

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

const Header: React.FC = () => {
  return (
    <HeaderWrapper>
      <StyledHeader>
        <ButtonsWrapper>
          <Link href="/">
            <Button>Posts</Button>
          </Link>
          <Link href={'/posts/new'}>
            <Button variant="contained" color="secondary">
              Add Post
            </Button>
          </Link>
        </ButtonsWrapper>
      </StyledHeader>
    </HeaderWrapper>
  );
};

export default Header;
