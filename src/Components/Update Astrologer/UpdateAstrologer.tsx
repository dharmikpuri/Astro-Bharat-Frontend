import  {useEffect, useState } from 'react';
import { TextField, Checkbox, FormControlLabel, Button, FormGroup, Box, Typography, Container, FormControl, InputLabel, Select, MenuItem, Grid} from '@mui/material';
import {useUpdateAstologerMutation } from '../../App/service/api';
import { useNavigate, useLocation } from 'react-router-dom';

const UpdateAstrologer = () => {
    const location = useLocation();
    console.log(location.state, "State")
    const navigate = useNavigate();
    const [data] = useUpdateAstologerMutation();
    const [selectedLanguages, setSelectedLanguages] = useState<string[]>(location.state.languages || []);
    const [selectedSpecialties, setSelectedSpecialties] = useState<string[]>(location.state.specialities || []);
    const [email, setEmail] = useState<string>(location.state.email || "");
    const [image, setImage] = useState<string>(location.state.profileImageUrl || "");
    const [name, setName] = useState<string>(location.state.name || "");
    const [gender, setGender] = useState<string>(location.state.gender || "");

    const [formData,setFromData] = useState<boolean>(false)

    const handleSelectedLanguages = (language: string) => {
        if (selectedLanguages.includes(language)) {
            setSelectedLanguages(selectedLanguages.filter(item => item !== language));
        } else {
            setSelectedLanguages([...selectedLanguages, language]);
        }
        setFromData(true);
    };
    useEffect(() => {

        console.log(selectedLanguages, "Selected languages")
    }, [])

    const handleSelectedSpecialties = (specialty: string) => {
        if (selectedSpecialties.includes(specialty)) {
            setSelectedSpecialties(selectedSpecialties.filter(item => item !== specialty));
        } else {
            setSelectedSpecialties([...selectedSpecialties, specialty]);
        }
        setFromData(true);
    };


    const handleSubmit = async () => {
        try {
                const formData = {
                    _id: location.state._id,
                    name,
                    gender,
                    email,
                    languages: selectedLanguages,
                    specialities: selectedSpecialties,
                    image: image
                };
                const result = await data(formData);
                alert(result.data.message)
                navigate("/")
        } catch (error) {
            console.log(error)
        }
    };

    return (
        <Container maxWidth="sm" style={{marginTop:"5rem"}}>
            <Typography variant="h4" align="center" gutterBottom>Update Astrologer</Typography>
            <Box component="form" sx={{ width: "100%" }} onSubmit={(e) => {
                e.preventDefault();
                handleSubmit();
            }}>
                <TextField fullWidth label="Image" value={image} onChange={(e) => setImage(e.target.value)} margin="normal" />
                <TextField fullWidth label="Name" value={name} onChange={(e) => { setName(e.target.value); setFromData(true); }} margin="normal" />
                <TextField fullWidth label="Email" type="email" value={email} onChange={(e) => {setEmail(e.target.value); setFromData(true)}} margin="normal" />
                <FormControl fullWidth margin="normal">
                    <InputLabel>Gender</InputLabel>
                    <Select value={gender} onChange={(e) => {setGender(e.target.value as string); setFromData(true)}}>
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
                                <FormControlLabel control={<Checkbox checked={selectedLanguages.includes('English')} onChange={() => handleSelectedLanguages('English')} />} label="English" />
                                <FormControlLabel control={<Checkbox checked={selectedLanguages.includes('Hindi')} onChange={() => handleSelectedLanguages('Hindi')} />} label="Hindi" />
                                <FormControlLabel control={<Checkbox checked={selectedLanguages.includes('Sanskrit')} onChange={() => handleSelectedLanguages('Sanskrit')} />} label="Sanskrit" />
                                <FormControlLabel control={<Checkbox checked={selectedLanguages.includes('Urdu')} onChange={() => handleSelectedLanguages('Urdu')} />} label="Urdu" />
                            </FormGroup>
                        </FormControl>
                    </Grid>
                    <Grid item xs={6}>
                        <FormControl fullWidth>
                            <Typography variant="subtitle1" gutterBottom>Select Specialties</Typography>
                            <FormGroup row>
                                <FormControlLabel control={<Checkbox checked={selectedSpecialties.includes('Vedic Astrology')} onChange={() => handleSelectedSpecialties('Vedic Astrology')} />} label="Vedic Astrology" />
                                <FormControlLabel control={<Checkbox checked={selectedSpecialties.includes('Relational Astrology')} onChange={() => handleSelectedSpecialties('Relational Astrology')} />} label="Relational Astrology" />
                                <FormControlLabel control={<Checkbox checked={selectedSpecialties.includes('Nadi Astrology')} onChange={() => handleSelectedSpecialties('Nadi Astrology')} />} label="Nadi Astrology" />
                                <FormControlLabel control={<Checkbox checked={selectedSpecialties.includes('Predictive Astrology')} onChange={() => handleSelectedSpecialties('Predictive Astrology')} />} label="Predictive Astrology" />
                            </FormGroup>
                        </FormControl>
                    </Grid>
                </Grid>
                <Button type="submit" variant="contained" color="primary" sx={{ marginTop: 2 }} disabled={!formData}>
                    Submit
                </Button>
            </Box>
        </Container>
    );
}

export default UpdateAstrologer