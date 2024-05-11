import React from 'react'
interface Astrologer {
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
    // console.log(astrologer,"astrologer")
    return (
        <div>
            <img src={astrologer.profileImageUrl}/>
            <h2>{astrologer.name}</h2>
            <p>Email: {astrologer.email}</p>
        </div>
    )
}

export default AstrologerCard