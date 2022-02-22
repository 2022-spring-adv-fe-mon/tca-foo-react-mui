import Button from '@mui/material/Button';
import { useNavigate } from 'react-router-dom';

export const Home = ({gameResults}) => {

    const nav123 = useNavigate();

    return(
        <>
            <h2>
                Home ({gameResults.length})
            </h2>
            <Button
                variant="outlined"
                onClick={() => nav123("/setup")}
            >
                Play
            </Button>
            <h3>
                Previous games
            </h3>
            <ul>
                {gameResults.map(x => <li>{x.start} - {x.end}</li>)}
            </ul>
        </>
    );
};