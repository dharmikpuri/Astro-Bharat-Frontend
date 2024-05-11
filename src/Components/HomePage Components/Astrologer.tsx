import React, { Key } from 'react'
import { useGetAllastrologersQuery } from '../../App/service/api';
import AstrologerCard from './AstrologerCard';
interface Astrologer{
    id: Key | null | undefined;
    name:string,
    gender:string,
    email:string,
    languages:[string],
    specialities:[string],
    profileImageUrl:string
   }
const Astrologer = () => {
    const { data, isError, isLoading } = useGetAllastrologersQuery(undefined);
    // console.log(data, "DAta")
    // console.log(isLoading, "isLoading")
    // console.log(isError, "error")

    if (isLoading) return <div>Loading...</div>;
    if (isError) return <div>Error: {isError}</div>;
    return (
        <div>
            {data?.map((el:Astrologer) => (
                <AstrologerCard key={el.id} astrologer={el} onEdit={function (): void {
                    throw new Error('Function not implemented.');
                } } />
            ))}
        </div>
    )
}

export default Astrologer