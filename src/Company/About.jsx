import React, { useState } from "react";
import "../css/about.css";
import Avatar from '@mui/joy/Avatar';
import Button from '@mui/joy/Button';
import Modal from '@mui/joy/Modal';
import ModalClose from '@mui/joy/ModalClose';
import Card from '@mui/joy/Card';
import CardContent from '@mui/joy/CardContent';
import Typography from '@mui/joy/Typography';
import Sheet from '@mui/joy/Sheet';

function About() {
    const [open, setOpen] = useState(false);

    return (
        <div className="container-about">
            <Card>
                <h1>About Us</h1>
                <div className="profile">
                    <div className="desc-about">
                        <p>Codevo is a technology company that focuses on developing modern and innovative websites.
                            We combine creativity, cutting-edge technology and user experience to provide digital solutions
                            that meet your business needs. With a dedicated team of professionals, Codevo delivers responsive,
                            secure and optimized website creation services, designed to enhance our clients' digital presence.
                        </p>
                        <Button variant="outlined" color="neutral" onClick={() => setOpen(true)}>
                        Click here!
                        </Button>
                        <Modal
                            aria-labelledby="modal-title"
                            aria-describedby="modal-desc"
                            open={open}
                            onClose={() => setOpen(false)}
                            sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}
                        >
                            <Sheet
                                variant="outlined"
                                sx={{ maxWidth: 500, borderRadius: 'md', p: 3, boxShadow: 'lg' }}
                            >
                                <ModalClose variant="plain" sx={{ m: 1 }} />
                                <Typography
                                    component="h2"
                                    id="modal-title"
                                    level="h4"
                                    textColor="inherit"
                                    sx={{ fontWeight: 'lg', mb: 1 }}
                                >
                                    This is the modal title
                                </Typography>
                                <Typography id="modal-desc" textColor="text.tertiary">
                                    Make sure to use <code>aria-labelledby</code> on the modal dialog with an
                                    optional <code>aria-describedby</code> attribute.
                                </Typography>
                            </Sheet>
                        </Modal>
                    </div>
                    <div className="structure">
                        <Card sx={{ maxWidth: '100%', width: '250px', boxShadow: 'lg' }}>
                            <CardContent sx={{ alignItems: 'center', textAlign: 'center' }}>
                                <Avatar src="/img/ceo.jpeg" sx={{ '--Avatar-size': '3rem' }} />
                                <Typography level="title-lg" className="name">Adrian Kingsley</Typography>
                                <Typography level="body-sm" className="small-text">
                                    Chief Executive Officer
                                </Typography>
                            </CardContent>
                        </Card>
                        <Card sx={{ maxWidth: '100%', width: '250px', boxShadow: 'lg' }}>
                            <CardContent sx={{ alignItems: 'center', textAlign: 'center' }}>
                                <Avatar src="/img/cto.jpeg" sx={{ '--Avatar-size': '3rem' }} />
                                <Typography level="title-lg" className="name">Nathaniel Cross</Typography>
                                <Typography level="body-sm" className="small-text">
                                    Chief Technology Officer
                                </Typography>
                            </CardContent>
                        </Card>
                        <Card sx={{ maxWidth: '100%', width: '250px', boxShadow: 'lg' }}>
                            <CardContent sx={{ alignItems: 'center', textAlign: 'center' }}>
                                <Avatar src="/img/coo.jpeg" sx={{ '--Avatar-size': '3rem' }} />
                                <Typography level="title-lg" className="name">Grace Mitchell</Typography>
                                <Typography level="body-sm" className="small-text">
                                    Chief Operating Officer
                                </Typography>
                            </CardContent>
                        </Card>
                        <Card sx={{ maxWidth: '100%', width: '250px', boxShadow: 'lg' }}>
                            <CardContent sx={{ alignItems: 'center', textAlign: 'center' }}>
                                <Avatar src="/img/cao.jpeg" sx={{ '--Avatar-size': '3rem' }} />
                                <Typography level="title-lg" className="name">Samuel Ellis</Typography>
                                <Typography level="body-sm" className="small-text">
                                    Chief Analytics Officer
                                </Typography>
                            </CardContent>
                        </Card>
                    </div>
                </div>
            </Card>
        </div>
    );
}

export default About;