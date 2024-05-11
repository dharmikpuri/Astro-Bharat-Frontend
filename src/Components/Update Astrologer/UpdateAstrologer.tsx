import React, { useState } from 'react';
import { Button, Container, Typography, TextField, FormControl, InputLabel, Select, MenuItem } from '@mui/material';
import Astrologer from '../HomePage Components/Astrologer';
interface EditAstrologerFormProps {
    astrologer: Astrologer;
    onSubmit: (updatedAstrologer: Astrologer) => void;
}

const UpdateAstrologer: React.FC<EditAstrologerFormProps> = ({ astrologer, onSubmit }) => {
    const [name, setName] = useState<string>(astrologer.name);
    const [email, setEmail] = useState<string>(astrologer.email);
    const [gender, setGender] = useState<string>(astrologer.gender);
    const [selectedLanguages, setSelectedLanguages] = useState<[string]>(astrologer.languages || []);
    const [selectedSpecialties, setSelectedSpecialties] = useState<[string]>(astrologer.specialities || []);

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        const updatedAstrologer: Astrologer = {
            name,
            email,
            gender,
            languages: selectedLanguages,
            specialities: selectedSpecialties,
            profileImageUrl: astrologer.profileImageUrl // Preserve the profile image URL
            ,
            id: undefined
        };
        onSubmit(updatedAstrologer);
    };

    return (
        <Container maxWidth="sm">
            <Typography variant="h4" align="center" gutterBottom>Edit Astrologer</Typography>
            <form onSubmit={handleSubmit}>
                <TextField fullWidth label="Name" value={name} onChange={(e) => setName(e.target.value)} margin="normal" />
                <TextField fullWidth label="Email" type="email" value={email} onChange={(e) => setEmail(e.target.value)} margin="normal" />
                <FormControl fullWidth margin="normal">
                    <InputLabel>Gender</InputLabel>
                    <Select value={gender} onChange={(e) => setGender(e.target.value as string)}>
                        <MenuItem value="">Select Your Gender</MenuItem>
                        <MenuItem value="male">Male</MenuItem>
                        <MenuItem value="female">Female</MenuItem>
                        <MenuItem value="others">Others</MenuItem>
                    </Select>
                </FormControl>
                {/* You can add checkboxes for languages and specialties here */}
                <Button type="submit" variant="contained" color="primary" sx={{ marginTop: 2 }}>
                    Submit
                </Button>
            </form>
        </Container>
    );
}

export default UpdateAstrologer;
