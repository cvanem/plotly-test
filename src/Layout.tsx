import Signal from './Signal';
import { Box, Divider, Grid } from '@mui/material';
import useWidth from './ViewPort/hooks/useWidth';
import useHeight from './ViewPort/hooks/useHeight';
import { grey, red } from '@mui/material/colors';
import Signal3D from './Signal3D';

const customData = value => Math.sin(value * 2);
const getData = Math.sin;

const ml = 7;
const sideBarWidth = 200;
const toolBarHeight = 48;
const signalsHeight = 100;
export default function Layout() {
  const width = useWidth();
  const height = useHeight();
  return (
    <>
      <Box sx={{ textAlign: 'center', width: '100%', pt: 1.5, height: toolBarHeight, background: grey[200] }}>Toolbar placeholder</Box>
      <Grid container spacing={0}>
        <Grid item xs>
          <Grid container spacing={0} alignItems='center'>
            <Grid item xs sx={{ height: height - signalsHeight - toolBarHeight }}>
              <Signal3D width={width - sideBarWidth} height={height - signalsHeight - toolBarHeight} />
            </Grid>
            <Grid item xs={12}>
              <Divider />
            </Grid>
            <Grid item xs={12}>
              <Grid container alignItems='center' spacing={0}>
                <Grid item sx={{ fontSize: 12, fontWeight: 700, px: 1.5, pt: 1.25, width: ml * 8 - sideBarWidth }}>
                  CH01
                </Grid>
                <Grid item xs>
                  <Signal id='signal-1' delay={60} getData={getData} width={width - ml * 8 - sideBarWidth} />
                </Grid>
              </Grid>
            </Grid>
            <Grid item xs={12}>
              <Divider sx={{ mt: 1, mb: 0 }} />
            </Grid>
            <Grid item xs={12}>
              <Grid container alignItems='center' spacing={0}>
                <Grid item sx={{ fontSize: 12, fontWeight: 700, px: 1.5, pt: 1.25, width: ml * 8 - sideBarWidth }}>
                  CH02
                </Grid>
                <Grid item xs>
                  <Signal id='signal-2' delay={60} getData={customData} width={width - ml * 8 - sideBarWidth} color={red[300]} />
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
        <Grid item sx={{ pt: 4, textAlign: 'center', width: sideBarWidth, height: height - toolBarHeight, background: grey[300] }}>
          Side bar
        </Grid>
      </Grid>
    </>
  );
}
