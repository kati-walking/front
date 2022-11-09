import * as React from 'react';
import { useCallback } from 'react';
import { useNavigate ,useParams,unstable_HistoryRouter,useLocation} from 'react-router-dom';
import axios, {AxiosRequestConfig, AxiosResponse,AxiosError} from 'axios';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';

function createData(
    From:string,
    Subject:string
){
    return {From,Subject}
}

export default function MailList(){
    const theme = createTheme();
    const params = useParams();
    console.log(params);
    return(
        <ThemeProvider theme={theme}>
            <Container component="main" maxWidth="xl">
                <CssBaseline />
                <Box
                    sx={{
                        marginTop: 8,
                        display: 'block',
                        alignItems: 'center',
                    }}
                >

                </Box>
            </Container>
        </ThemeProvider >
    )
}