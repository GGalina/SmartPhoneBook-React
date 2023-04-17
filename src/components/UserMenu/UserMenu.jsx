import { useDispatch } from 'react-redux';
import { logOut } from 'Redux/Auth/authOperations';
import {Container, Welcome, Button} from './UserMenu.styled'

export const UserMenu = () => {
    const dispatch = useDispatch();

    return (
        <Container>
            <Welcome>Welcome, nice to see you </Welcome>
            <Button type="button" onClick={() => dispatch(logOut())}>
                Log Out
            </Button>
        </Container>
    );
};
