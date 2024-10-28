import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signOut, User } from 'firebase/auth';
import { createContext, useContext, useEffect, useState, ReactNode } from 'react';
import { auth, db } from '../services/firebase';
import { doc, getDoc, setDoc } from 'firebase/firestore';

interface AuthContextType {
  user: User | null;
  login: (email: string, password: string) => Promise<any>;
  signUp: (email: string, password: string) => Promise<any>;
  logOut: () => any;
}

const AuthContext = createContext<AuthContextType | null>(null);

interface AuthContextProviderProps {
  children: ReactNode;
}

export const AuthContextProvider: React.FC<AuthContextProviderProps> = ({ children }) => {
  const [user, setUser] = useState<User | null>(null);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
    });

    return () => {
      unsubscribe();
    };
  }, []);

  async function login(email: string, password: string) {
    try {
      console.log(email,password);
      
    await signInWithEmailAndPassword(auth, email, password);
      
    } catch (error:any) {
      return error?.code.split('/')[1].split('-').join(' ')
    }
  }

  async function signUp(email: string, password: string) {
    try {
      await createUserWithEmailAndPassword(auth, email, password);

      const userDocRef = doc(db, 'users', email);
        await setDoc(userDocRef, {
          favShows: [],
        });
    
    } catch (error: any) {
      return error?.code.split('/')[1].split('-').join(" ")


    }
  }


  function logOut() {
    signOut(auth);
  }

  return (
    <AuthContext.Provider value={{ user, login, signUp, logOut }}>
      {children}
    </AuthContext.Provider>
  );
};



export function UserAuth() {
  return (
    useContext(AuthContext)
  )
}
