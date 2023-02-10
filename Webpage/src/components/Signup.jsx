import { Link } from 'react-router-dom'
import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import MUILink from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import '@fontsource/roboto/300.css';
import { createTheme, ThemeProvider } from '@mui/material/styles';

function Copyright(props) {
    return (
        <Typography variant="body2" color="text.secondary" align="center" {...props}>
            {'Copyright © '}
            <MUILink color="inherit" href="#">
                Kim & Ham
            </MUILink>{' '}
            {new Date().getFullYear()}
            {'.'}
        </Typography>
    );
}

const theme = createTheme();

export default function SignUp() {
    const handleSubmit = (event) => {
        event.preventDefault();
        const data = new FormData(event.currentTarget);
        console.log({
            email: data.get('email'),
            password: data.get('password'),
        });
    };

    return (
        <Box sx={{
            width: '100%',
            height: '100vh',
            display: 'flex',
            justifyContent: 'center',
            backgroundColor: 'white'
        }}>
            <Box sx={{
                width: { sm: "0%", md: "50%", lg: "33.33%" },
                height: "100vh",
                backgroundImage: `url(../images/gallery/1.jpeg)`,
                backgroundRepeat: "no-repeat",
                backgroundPosition: "left",
                backgroundSize: "cover",
                overflow: "hidden"
            }}>

            </Box>
            <ThemeProvider theme={theme}>
                <Container
                    component="main"
                    maxWidth="xs"
                    sx={{
                        backgroundColor: { sm: 'white' },
                        padding: '0'
                    }}>
                    <CssBaseline />
                    <Box
                        sx={{
                            marginTop: "15px",
                            marginLeft: 1
                        }}
                    >
                        <Link to="/"> 메인페이지 </Link>
                    </Box>
                    <Box
                        sx={{
                            marginTop: 6,
                            marginLeft: { xs: 1 },
                            marginRight: { xs: 1 },
                            display: 'flex',
                            flexDirection: 'column',
                            alignItems: 'center',
                        }}
                    >
                        <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
                            <LockOutlinedIcon />
                        </Avatar>
                        <Typography component="h1" variant="h5">
                            회원가입
                        </Typography>
                        <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 3 }}>
                            <Grid container spacing={2}>
                                <Grid item xs={12} sm={6}>
                                    <TextField
                                        autoComplete="given-name"
                                        name="firstName"
                                        required
                                        fullWidth
                                        id="firstName"
                                        label="이름"
                                        autoFocus
                                    />
                                </Grid>
                                <Grid item xs={12} sm={6}>
                                    <TextField
                                        required
                                        fullWidth
                                        id="lastName"
                                        label="성"
                                        name="lastName"
                                        autoComplete="family-name"
                                    />
                                </Grid>
                                <Grid item xs={12}>
                                    <TextField
                                        required
                                        fullWidth
                                        id="email"
                                        label="이메일 주소"
                                        name="email"
                                        autoComplete="email"
                                    />
                                </Grid>
                                <Grid item xs={12}>
                                    <TextField
                                        required
                                        fullWidth
                                        name="password"
                                        label="비밀번호"
                                        type="password"
                                        id="password"
                                        autoComplete="new-password"
                                    />
                                </Grid>
                                <Grid item xs={12}>
                                    <FormControlLabel
                                        control={<Checkbox value="allowExtraEmails" color="primary" />}
                                        label={"본 사이트 이용규약과 개인정보 취급정책에 동의합니다."}
                                    />
                                </Grid>
                            </Grid>
                            <Button
                                type="submit"
                                fullWidth
                                variant="contained"
                                sx={{ mt: 3, mb: 2 }}
                            >
                                회원가입하기!
                            </Button>
                            <Grid container justifyContent="flex-end">
                                <Grid item>
                                    <Link
                                        to="/Login"
                                        style={{
                                            fontFamily: 'Roboto',
                                            fontSize: '14px',
                                            color: 'blue',
                                        }}
                                    >
                                        이미 계정이 있으신가요? 로그인
                                    </Link>
                                </Grid>
                            </Grid>
                        </Box>
                    </Box>
                    <Copyright sx={{ mt: 5 }} />
                </Container>
            </ThemeProvider>
            <Box sx={{
                width: { sm: "0", md: "0", lg: "33.33%" },
                height: "100vh",
                backgroundImage: `url(../images/gallery/9.jpeg)`,
                backgroundRepeat: "no-repeat",
                backgroundPosition: "right",
                backgroundSize: "cover",
                overflow: "hidden"
            }}>
            </Box>
        </Box >
    );
}