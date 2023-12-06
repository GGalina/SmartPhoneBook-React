import { ContactForm } from 'components/ContactForm/ContactForm';
import { ContactList } from 'components/ContactList/ContactList';
import { Filter } from 'components/Filter/Filter';
import { Container, Title, SubTitle,  Image} from './Phonebook.styled';

export default function Phonebook() {
  return (
      <Container>
        <Image/>
        <Title>Phonebook</Title>
        <ContactForm />
        <SubTitle>Contacts</SubTitle>
        <Filter />
        <ContactList />
      </Container>
  );
};
