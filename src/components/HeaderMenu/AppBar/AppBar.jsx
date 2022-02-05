import { useSelector } from 'react-redux';
import Navigation from '../Navigation/Navigation';
import UserMenu from '../UserMenu/UserMenu';
import AuthNav from '../AuthNav/AuthNav';
import AppBar from '@mui/material/AppBar';
import authSelectors from '../../../redux/auth/auth-selectors';
import s from './AppBar.module.css';

export default function Appbar() {
  const isLoggedIn = useSelector(authSelectors.getIsLoggedIn);
  console.log(isLoggedIn);
  return (
    <AppBar position="static" fullWidth>
      <header className={s.header}>
        <Navigation />
        {/* <AuthNav /> */}
        {isLoggedIn ? <UserMenu /> : <AuthNav />}
      </header>
    </AppBar>
  );
}
