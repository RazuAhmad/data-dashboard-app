import { createTheme } from "@mui/material";
import { lime, purple, red,blue } from "@mui/material/colors";

export const theme = createTheme({
    palette: {
      primary: blue,
      secondary: purple,
    },

    typography:{
        fontFamily:[
          'Inter',
          'Plus Jakarta Sans'
        ].join(','),
        
        fontSize:23
    }
  });

