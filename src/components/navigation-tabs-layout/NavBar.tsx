import { Grid } from '@mui/joy';

import Image from 'next/image';
import CustomNavLink from './CustomNavLink';

const NavBar = () => {
  return (
    <Grid
      container
      sx={{ width: { xs: '100%' } }}
      justifyContent="center"
      alignItems="center"
      gap={3}
    >
      <Grid sx={{ opacity: 0.6, marginRight: 'auto', height: 30 }}>
        <Image
          width={80}
          height={30}
          alt="company logo"
          src="/volta-white-anim.gif"
          data-testid="company_logo"
        />
      </Grid>
      <Grid>
        <CustomNavLink to="/brake-system">Brake system</CustomNavLink>
      </Grid>
      <Grid>
        <CustomNavLink to="/telematics">Telematics</CustomNavLink>
      </Grid>
      <Grid>
        <CustomNavLink to="/climate-control">Climate control</CustomNavLink>
      </Grid>
    </Grid>
  );
};

export default NavBar;
