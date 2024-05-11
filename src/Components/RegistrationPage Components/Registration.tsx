import React, { useState } from 'react';
import { TextField, Checkbox, FormControlLabel, Button, FormGroup, Box, Typography, Container, FormControl, InputLabel, Select, MenuItem, Grid, Input } from '@mui/material';
import { useRegisterAstrologerMutation } from '../../App/service/api';

const Registration = () => {
    const [data, registerAstrologer] = useRegisterAstrologerMutation();
    const [selectedLanguages, setSelectedLanguages] = useState<string[]>([]);
    const [selectedSpecialties, setSelectedSpecialties] = useState<string[]>([]);
    const [email, setEmail] = useState<string>("");
    const [image, setImage] = useState<string>("");
    const [name, setName] = useState<string>("");
    const [gender, setGender] = useState<string>("");

    const handleSelectedLanguages = (language: string) => {
        if (selectedLanguages.includes(language)) {
            setSelectedLanguages(selectedLanguages.filter(item => item !== language));
        } else {
            setSelectedLanguages([...selectedLanguages, language]);
        }
    };

    const handleSelectedSpecialties = (specialty: string) => {
        if (selectedSpecialties.includes(specialty)) {
            setSelectedSpecialties(selectedSpecialties.filter(item => item !== specialty));
        } else {
            setSelectedSpecialties([...selectedSpecialties, specialty]);
        }
    };

    const handleSubmit = async () => {
        // const imageUploder = await ImageUpload(image)
        try {
            var imageUrl = await ImageUpload(image);
            if (imageUrl) {
                const obj = {
                    name: name,
                    gender: gender,
                    email: email,
                    languages: selectedLanguages,
                    specialities: selectedSpecialties,
                    profileImageUrl: imageUrl
                };
                const result = await data(obj);
                console.log(result.data.message, "result");
            }
        } catch (error) {
            if (registerAstrologer.data && registerAstrologer.data.message === "Email already registered. Please try with another one.") {
                alert("Email already registered. Please try with another one.");
            } else {
                alert("Registration failed. Please try again later.");
            }
        }
        console.log(registerAstrologer, "registerAstrologer");
    };


    // CLOUDINARY IMAGE CONVETER 
    const ImageUpload = async (image: any) => {
        if (image.type === "image/jpeg" || image.type === "image/png") {
            const data = new FormData();
            data.append("file", image);
            data.append("upload_preset", "ycagprof");
            data.append("cloud_name", "davcdosbg");
            try {
                const response = await fetch(
                    "https://api.cloudinary.com/v1_1/davcdosbg/image/upload",
                    {
                        method: "POST",
                        body: data,
                    }
                );

                if (response.ok) {
                    const responseData = await response.json();
                    setImage(responseData.url.toString());
                    return responseData.url.toString();
                } else {
                    console.error("Failed ");

                    return null;
                }
            } catch (error) {
                console.error("Error");

                return null;
            }
        } else {
            console.error("Image");

            return null;
        }
    };

    return (
        <Container maxWidth="sm">
            <Typography variant="h4" align="center" gutterBottom>Registration</Typography>
            <Box component="form" sx={{ width: "100%" }} onSubmit={(e) => {
                e.preventDefault();
                handleSubmit();
            }}>
                <Input
                
                    value={image}
                    onChange={(e) => setImage(e.target.files[0])}
                    type='file'
                />
                <TextField
                    fullWidth
                    label="Name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    margin="normal"
                />
                <TextField
                    fullWidth
                    label="Email"
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    margin="normal"
                />
                <FormControl fullWidth margin="normal">
                    <InputLabel>Gender</InputLabel>
                    <Select
                        value={gender}
                        onChange={(e) => setGender(e.target.value as string)}
                    >
                        <MenuItem value="">Select Your Gender</MenuItem>
                        <MenuItem value="male">Male</MenuItem>
                        <MenuItem value="female">Female</MenuItem>
                        <MenuItem value="others">Others</MenuItem>
                    </Select>
                </FormControl>
                <Grid container spacing={2} margin="normal">
                    <Grid item xs={6}>
                        <FormControl fullWidth>
                            <Typography variant="subtitle1" gutterBottom>Select Languages</Typography>
                            <FormGroup row>
                                <FormControlLabel
                                    control={<Checkbox checked={selectedLanguages.includes('English')} onChange={() => handleSelectedLanguages('English')} />}
                                    label="English"
                                />
                                <FormControlLabel
                                    control={<Checkbox checked={selectedLanguages.includes('Hindi')} onChange={() => handleSelectedLanguages('Hindi')} />}
                                    label="Hindi"
                                />
                                <FormControlLabel
                                    control={<Checkbox checked={selectedLanguages.includes('Sanskrit')} onChange={() => handleSelectedLanguages('Sanskrit')} />}
                                    label="Sanskrit"
                                />
                                <FormControlLabel
                                    control={<Checkbox checked={selectedLanguages.includes('Urdu')} onChange={() => handleSelectedLanguages('Urdu')} />}
                                    label="Urdu"
                                />
                            </FormGroup>
                        </FormControl>
                    </Grid>
                    <Grid item xs={6}>
                        <FormControl fullWidth>
                            <Typography variant="subtitle1" gutterBottom>Select Specialties</Typography>
                            <FormGroup row>
                                <FormControlLabel
                                    control={<Checkbox checked={selectedSpecialties.includes('Vedic Astrology')} onChange={() => handleSelectedSpecialties('Vedic Astrology')} />}
                                    label="Vedic Astrology"
                                />
                                <FormControlLabel
                                    control={<Checkbox checked={selectedSpecialties.includes('Relational Astrology')} onChange={() => handleSelectedSpecialties('Relational Astrology')} />}
                                    label="Relational Astrology"
                                />
                                <FormControlLabel
                                    control={<Checkbox checked={selectedSpecialties.includes('Nadi Astrology')} onChange={() => handleSelectedSpecialties('Nadi Astrology')} />}
                                    label="Nadi Astrology"
                                />
                                <FormControlLabel
                                    control={<Checkbox checked={selectedSpecialties.includes('Predictive Astrology')} onChange={() => handleSelectedSpecialties('Predictive Astrology')} />}
                                    label="Predictive Astrology"
                                />
                            </FormGroup>
                        </FormControl>
                    </Grid>
                </Grid>
                <Button type="submit" variant="contained" color="primary" sx={{ marginTop: 2 }}>
                    Submit
                </Button>
            </Box>
        </Container>
    );
};

export default Registration;
