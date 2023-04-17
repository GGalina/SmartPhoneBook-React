import { selectorIsLoggedIn } from 'Redux/Auth/authSelectors';
import { useSelector } from 'react-redux';
import {Container, Title, Desc, LinkBox, Link} from './Home.styled'

export default function Home() {
    const isLoggedIn = useSelector(selectorIsLoggedIn);
    return (
        <>
            {!isLoggedIn && (
            <Container>
                <Title>Hi there!</Title>
                <Desc>Please login or register to review, add and remove contacts from your very own online phonebook.</Desc>
                
                    <LinkBox>
                        <Link to="/register">Sign Up</Link>
                        <Link to="/login">Log In</Link>
                    </LinkBox>
                </Container>
            )}
            {isLoggedIn && (
            <Container>
                <Title>Happy to see you!</Title>
                <Desc>You can add and remove contacts from your very own online phonebook.</Desc>
                    <LinkBox>
                        <Link to="/contacts">My phonebook</Link>
                    </LinkBox>
                </Container>
            )}
        </>
    );
};