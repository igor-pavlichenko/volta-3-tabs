import { Link, useTheme } from '@mui/joy';
import { NavLink, NavLinkProps } from 'react-router-dom';

type Props = {
  children: React.ReactNode;
  to: NavLinkProps['to'];
};

const CustomNavLink = (props: Props) => {
  const { palette } = useTheme();
  return (
    <Link
      color="neutral"
      component={NavLink}
      sx={{ fontSize: '1rem', textTransform: 'uppercase', fontWeight: 500 }}
      style={({ isActive }) =>
        isActive
          ? {
              color: palette.primary.softColor,
              textDecoration: 'underline',
            }
          : undefined
      }
      {...props}
    />
  );
};

export default CustomNavLink;
