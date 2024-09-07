import React from 'react';
import RegistrationForm from 'components/RegistrationForm/RegistrationForm';
import { PageContainer, SignUpSection} from './SignUpPage.styled'; // Correct path
import Loader from 'components/Loader/Loader';
import { useSelector } from 'react-redux';
import { selectIsLoading } from '../../redux/auth/auth.selectors'; // Correct path



const SignUpPage = () => {
  const isLoading = useSelector(selectIsLoading);

  return (
    <PageContainer>
      <SignUpSection>
        {isLoading ? (
          <Loader /> // Show loader if loading
        ) : (
          <>
            <RegistrationForm />
            {/* Place Google button here, inside SignUpSection */}
          
              
          </>
        )}
      </SignUpSection>
        </PageContainer>
  );
};

export default SignUpPage;
