import styled from 'styled-components';
import FlashBasic from '../components/FlashBasic';


const Flash = styled(FlashBasic)`
    border: 1px solid;
    height: 2rem;
    width: 100%;
    padding: .5rem;
    display: flex;
    ${props => props.status ? null : 'display: none;'}
    justify-content: center;
    align-items: center;
    margin-bottom: 1rem;
    background-color: ${props => props.type == 'welcome' ? '#CCE5FF;' : props.type == 'success' ? '#D4EDDA;' : '#F8D7DA;'}
    
    strong {
        margin-right: .9rem;
        text-transform: capitalize;
        font-weight: 900;
        &::after {
            content: '!';
        }
    }
    
    p {
        font-size: 1em;
        font-weight: 600;
        color: #81A8C1;
    }

    @media screen and (min-width: 1024px) {
        width: 30rem;
    }

    @media screen and (max-width: 750px) {
        
    }
`;

export { Flash };
