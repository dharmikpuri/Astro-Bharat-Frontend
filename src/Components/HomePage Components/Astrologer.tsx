import { useEffect } from 'react'
import { useGetAllastrologersQuery } from '../../App/service/api';
import Loading from '../LoadingIndicator/Loading';
import { DataGrid, GridColDef } from '@mui/x-data-grid';
import { Button } from '@mui/material';
import { useNavigate } from 'react-router-dom';
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
    const navigate = useNavigate();

    const { data, isError, isLoading, refetch } = useGetAllastrologersQuery(undefined);
    console.log(data, "DAta")
    // console.log(isLoading, "isLoading")
    // console.log(isError, "error")
    useEffect(() => {
        refetch();
    }, [window.scrollTo(0, 0)])
    if (isLoading) return <div><Loading /></div>;
    if (isError) return <div>Error: {isError}</div>;

    const columns: GridColDef[] = [
        {
            field: "profileImageUrl",
            headerName: "Profile Image",
            flex: 1,
            renderCell: (params) => <img src={params.value} alt="Astrologer" style={{ width: 50, height: 50, borderRadius: "50%" }} />,
        },
        { field: 'name', headerName: 'Name', flex: 1 },
        { field: 'gender', headerName: 'Gender', flex: 1 },
        { field: 'email', headerName: 'Email', flex: 1 },
        {
            field: 'languages',
            headerName: 'Languages',
            flex: 1
        },
        {
            field: 'specialities',
            headerName: 'Specialities',
            flex: 1
        },
        {
            field: 'edit',
            flex: 1,
            renderCell: (params) => (
                <Button variant="outlined" onClick={() => navigate(`/updateAstrologer/${params.id}`, { state: data.find((item: Astrologer) => item._id === params.id) })}>
                    Edit
                </Button>
            ),
        },
    ];
    const reversedData = [...data].reverse();
    return (
        <div style={{ marginTop: "5rem" }}>
            <DataGrid
                rows={reversedData}
                columns={columns}
                getRowId={(row) => row._id}
                disableColumnMenu
                disableColumnSelector
                hideFooterPagination
                checkboxSelection
                disableRowSelectionOnClick
            />
        </div>
    )
}

export default Astrologer