import React from "react";
import { Card } from 'primereact/card';
import { Button } from 'primereact/button';
import { Image } from 'primereact/image';
import Grid from '@mui/material/Grid';
import '../css/home.css';

function Home() {
    return (
        <div className="card-container">
            <Card className="custom-card">
                <Grid container spacing={4} alignItems="center"> 
                    <Grid item xs={12} md={6.2}> 
                        <div className="desc">
                            <h1>Welcome to CODEVO!</h1>
                            <h5><i>Innovating the digital future</i></h5>
                            <Button
                                label="About us ->"
                                severity="secondary"
                                outlined
                                style={{ borderRadius: '10px', marginTop: '15px' }}
                                className="hover-button"
                            />
                        </div>
                    </Grid>

                    <Grid item xs={12} md={5}> 
                        <Grid container spacing={1}>
                            <Grid item xs={12} md={7}>
                                <Grid container direction="column" spacing={2}> 
                                    <Grid item xs={12}>
                                        <Image src="/img/1.jpeg" alt="Image" width="95%" className="image-rounded" />
                                    </Grid>
                                    <Grid item xs={12}>
                                        <Image src="/img/2.jpeg" alt="Image" width="95%" className="image-rounded" />
                                    </Grid>
                                </Grid>
                            </Grid>

                            <Grid item xs={12} md={4} container alignItems="center" justifyContent="center">
                                <Image src="/img/5.jpg" alt="Image" width="161%" className="image-rounded" />
                            </Grid>
                        </Grid>
                    </Grid>
                </Grid>
            </Card>

        </div>
    );
}

export default Home;
