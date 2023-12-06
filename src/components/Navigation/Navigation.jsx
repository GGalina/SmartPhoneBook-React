import { AuthNav } from 'components/AuthNav/AuthNav';
import { UserMenu } from 'components/UserMenu/UserMenu';
import { useSelector } from 'react-redux';
import { selectorIsLoggedIn } from 'Redux/Auth/authSelectors';
import { Link, NavigationContainer, Box} from './Navigation.styled';

export const Navigation = () => {
    const isLoggedIn = useSelector(selectorIsLoggedIn);

    return (
        <NavigationContainer>
            <Box>
                <Link to="/"> Home </Link>
                {isLoggedIn && <Link to="/contacts"> Phonebook </Link>}
            </Box>
            {!isLoggedIn && <AuthNav />}
            {isLoggedIn && <UserMenu />}
        </NavigationContainer>
    );
};