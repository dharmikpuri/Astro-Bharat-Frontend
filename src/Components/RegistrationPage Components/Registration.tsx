import React, { useState } from 'react';
import { TextField, Checkbox, FormControlLabel, Button, FormGroup, Box } from '@mui/material';

const initialValues = {
    name: '',
    gender: '',
    email: '',
    languages: [],
    specialities: [],
    profileImageUrl: ''
};

const Registration = () => {
    return (
        <form style={{width:"50%",margin:"auto"}}>
            <h1>Registration From</h1>
            <TextField
                label="Name"
                // value={formValues.name}
                // onChange={handleChange('name')}
                fullWidth
                margin="normal"
            />
            <TextField
                label="Gender"
                // value={formValues.gender}
                // onChange={handleChange('gender')}
                fullWidth
                margin="normal"
            />
            <TextField
                label="Email"
                // value={formValues.email}
                // onChange={handleChange('email')}
                fullWidth
                margin="normal"
            />
            <FormGroup>
                <Box>
                    <label>Languages:</label>
                    <Checkbox 
                    // checked={formValues.languages.includes('English')} 
                    // onChange={handleCheckboxChange('languages')} 
                    />
                    English
                    <Checkbox 
                    // checked={formValues.languages.includes('Spanish')} 
                    // onChange={handleCheckboxChange('languages')} 
                    />
                    Spanish
                    <Checkbox 
                    // checked={formValues.languages.includes('French')} 
                    // onChange={handleCheckboxChange('languages')} 
                    />
                    French
                    <Checkbox 
                    // checked={formValues.languages.includes('German')} 
                    // onChange={handleCheckboxChange('languages')} 
                    />
                    German
                </Box>
            </FormGroup>
            <TextField
                label="Profile Image URL"
                // value={formValues.profileImageUrl}
                // onChange={handleChange('profileImageUrl')}
                fullWidth
                margin="normal"
            />
            <Button type="submit" variant="contained" color="primary">
                Submit
            </Button>
        </form>
    )
}

export default Registration