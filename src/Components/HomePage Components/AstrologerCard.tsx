
// import { DataGrid, GridColDef } from '@mui/x-data-grid';
// import { Button } from '@mui/material';
// import { useNavigate } from 'react-router-dom';
// import Astrologer from './Astrologer';

// interface AstrologerCardProps {
//     astrologer: Astrologer;
// }

// const AstrologerCard: React.FC<AstrologerCardProps> = ({ astrologer }) => {
//     const navigate = useNavigate();

//     const columns: GridColDef[] = [
//         {
//             field: "profileImageUrl",
//             headerName: "Profile Image",
//             flex:1,
//             renderCell: (params) => <img src={params.value} alt="Astrologer" style={{ width: 50, height: 50, borderRadius: "50%" }} />,
//         },
//         { field: 'name', headerName: 'Name', flex: 1 },
//         { field: 'gender', headerName: 'Gender', flex: 1 },
//         { field: 'email', headerName: 'Email', flex: 1 },
//         {
//             field: 'languages',
//             headerName: 'Languages',
//             flex:1
//         },
//         {
//             field: 'specialities',
//             headerName: 'Specialities',
//             flex: 1
//         },
//         {
//             field: 'edit',
//             flex: 1,
//             renderCell: (params) => (
//                 <Button variant="outlined" onClick={() => navigate(`/updateAstrologer/${params.id}`, { state: astrologer })}>
//                     Edit
//                 </Button>
//             ),
//         },
//     ];

//     // const rows = [astrologer];

//     return (
//         <div>
//            <DataGrid
//           rows={[astrologer]}
//           columns={columns}
//           getRowId={(row) => row._id}
//           disableColumnMenu
//           disableColumnSelector
//           hideFooterPagination
//         />
//          </div>
//     );
// };

// export default AstrologerCard;
