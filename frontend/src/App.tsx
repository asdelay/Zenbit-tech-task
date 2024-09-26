import React from "react";
import { HeaderButton } from "./components/HeaderButton.tsx";
import { TitlePage } from "./components/TitlePage.tsx";
import { OpenDeals } from "./components/OpenDeals.tsx";
import { Header } from "./components/Header.tsx";
import { Link } from "react-router-dom";
import { useAppSelector, useAppDispatch } from "./redux/hooks.ts";
import { signOut } from "./redux/features/users/userSlice.ts";
function App() {
  const dispatch = useAppDispatch()
  const isUserLogged = useAppSelector(state => state.users.isUserLoggedIn)
  return (
    <div className="font-serif">
      <div className="wrapper">
        <Header >
          {
            isUserLogged ? <HeaderButton onClick={() => dispatch(signOut())} className="text-gold border border-gold mr-5">Sign Out</HeaderButton>
             : (
              <>
                <Link to="/login"><HeaderButton className="text-gold border border-gold">Log In</HeaderButton></Link>
                <Link to='/register'><HeaderButton className="bg-gold mr-[32px] lg:mr-[80px]">Sign Up</HeaderButton></Link>
              </>
            )
          }
          
        </Header>
        <main>
          <TitlePage />
          <OpenDeals />
        </main>
      </div>
    </div>
  );
}

export default App;
