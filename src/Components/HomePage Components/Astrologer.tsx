import React, { Key, useEffect } from 'react'
import { useGetAllastrologersQuery } from '../../App/service/api';
import AstrologerCard from './AstrologerCard';
import Loading from '../LoadingIndicator/Loading';
interface Astrologer {
    _id: string;
    name: string,
    gender: string,
    email: string,
    languages: [string],
    specialities: [string],
    profileImageUrl: string
}
const Astrologer = () => {
    const { data, isError, isLoading,refetch } = useGetAllastrologersQuery(undefined);
    console.log(data, "DAta")
    // console.log(isLoading, "isLoading")
    // console.log(isError, "error")
useEffect(()=>{
    refetch();
},[])
    if (isLoading) return <div><Loading /></div>;
    if (isError) return <div>Error: {isError}</div>;
    return (
        <div>
            {data && [...data].reverse().map((el: Astrologer) => (
                <AstrologerCard key={el._id} astrologer={el} />
            ))}

        </div>
    )
}

export default Astrologer