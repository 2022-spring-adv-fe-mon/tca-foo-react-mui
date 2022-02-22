import Button from '@mui/material/Button';
import { useNavigate } from 'react-router-dom';

export const Home = () => {

    const nav123 = useNavigate();

    return(
        <>
            <h2>
                Home
            </h2>
            <Button
                variant="outlined"
                onClick={() => nav123("/setup")}
            >
                Play
            </Button>
        </>
    );
};