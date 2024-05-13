
import { DataGrid, GridColDef } from '@mui/x-data-grid';
import { Button } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import Astrologer from './Astrologer';

interface AstrologerCardProps {
    astrologer: Astrologer;
}

const AstrologerCard: React.FC<AstrologerCardProps> = ({ astrologer }) => {
    const navigate = useNavigate();

    const columns: GridColDef[] = [
        {
            field: "profileImageUrl",
            headerName: "Profile Image",
            renderCell: (params) => <img src={params.value} alt="Astrologer" style={{width:50, height:50, borderRadius:"50%"}} />,
        },
        { field: 'name', headerName: 'Name', flex: 1 },
        { field: 'gender', headerName: 'Gender', flex: 1 },
        { field: 'email', headerName: 'Email', flex: 1 },
        {
            field: 'languages',
            headerName: 'Languages',
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
                <Button variant="outlined" onClick={() => navigate(`/updateAstrologer/${params.id}`, { state: astrologer })}>
                    Edit
                </Button>
            ),
        },
    ];

    const rows = [astrologer];

    return (
        <div style={{ height: "150px", width: '100%', border: '1px solid #ccc', borderRadius: '8px', overflow: 'hidden',marginBottom:"0.5rem" }}>
            <DataGrid
                rows={rows}
                columns={columns}
                autoHeight
                disableColumnMenu
                disableColumnSelector
                hideFooterPagination
                getRowId={(el) => el._id}
            />
        </div>
    );
};

export default AstrologerCard;
