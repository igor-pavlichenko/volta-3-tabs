import { Grid } from '@mui/joy';

import Image from 'next/image';
import { BoardName } from '~/app/api/available-boards/route';
import CustomNavLink from './CustomNavLink';

type Props = {
  boards: Array<BoardName>;
};
const NavBar = ({ boards }: Props) => {
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
      {boards.includes('brake-system') && (
        <Grid>
          <CustomNavLink to="/brake-system">Brake system</CustomNavLink>
        </Grid>
      )}
      {boards.includes('telematics') && (
        <Grid>
          <CustomNavLink to="/telematics">Telematics</CustomNavLink>
        </Grid>
      )}
      {boards.includes('climate-control') && (
        <Grid>
          <CustomNavLink to="/climate-control">Climate control</CustomNavLink>
        </Grid>
      )}
    </Grid>
  );
};

export default NavBar;
