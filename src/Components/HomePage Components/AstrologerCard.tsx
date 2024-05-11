import { Button } from '@mui/material';
import React from 'react'
export interface Astrologer {
    name: string,
    gender: string,
    email: string,
    languages: [string],
    specialities: [string],
    profileImageUrl: string
}

interface AstrologerCardProps {
    astrologer: Astrologer;
    onEdit: () => void;
}
const AstrologerCard: React.FC<AstrologerCardProps> = ({ astrologer,onEdit }) => {
    // console.log(astrologer,"astrologer")
    return (
        <div>
            <img src={astrologer.profileImageUrl}/>
            <h2>{astrologer.name}</h2>
            <p>Email: {astrologer.email}</p>
            <Button variant="outlined" onClick={onEdit}>Edit</Button>
        </div>
    )
}

export default AstrologerCard