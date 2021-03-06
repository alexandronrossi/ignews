import { FaGithub } from 'react-icons/fa';
import { useSession, signIn, signOut } from 'next-auth/react';
import { FiX } from 'react-icons/fi';

import styles from './style.module.scss';

export function SignInButton() {
    const { data: session } = useSession();

    return session ? (
        <button
            type="button" 
            className={ styles.signInButton }
            onClick={() => signOut()}
        >
            <FaGithub color="#04B361" />
            { session.user.name }
            <FiX color="#737380" className={ styles.closeIcon } />
        </button>
    ) : (
        <button
            type="button" 
            className={ styles.signInButton }
            onClick={ () => signIn('github') }
        >
            <FaGithub color="#EBA417" />
            Sign in with Github
        </button>
    );
}