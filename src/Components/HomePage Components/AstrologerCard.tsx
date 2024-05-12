import { Button } from '@mui/material';
import React from 'react'
import { useNavigate } from 'react-router-dom';

export interface Astrologer {
    _id: string,
    name: string,
    gender: string,
    email: string,
    languages: [string],
    specialities: [string],
    profileImageUrl: string
}

interface AstrologerCardProps {
    astrologer: Astrologer;
}
const AstrologerCard: React.FC<AstrologerCardProps> = ({ astrologer }) => {
    const navigate= useNavigate();


    return (
        <>
            <div>
                <img src={astrologer.profileImageUrl} />
                <h2>{astrologer.name}</h2>
                <p>Email: {astrologer.email}</p>
                <Button variant="outlined" onClick={()=>navigate(`/updateAstrologer/${astrologer._id}`,{state:astrologer})}>Edit</Button>
            </div>

          
        </>


    )
}

export default AstrologerCard