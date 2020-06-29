import styled from 'styled-components';
import FlashBasic from '../components/FlashBasic';


const Flash = styled(FlashBasic)`
    position: absolute;
    top: 4rem;
    left: 10%;
    border: 1px solid;
    height: 2rem;
    width: 80%;
    padding: .5rem;
    display: flex;
    ${props => props.status ? null : 'display: none;'}
    justify-content: center;
    align-items: center;

    background-color: ${props => props.type == 'welcome' ? '#CCE5FF;' : props.type == 'success' ? '#D4EDDA;' : '#F8D7DA;'}

    strong {
        margin-right: .4rem;
        text-transform: capitalize;
        font-weight: 900;
        &::after {
            content: '!';
        }
    }

    @media screen and (min-width: 1024px) {
        width: 30rem;
        left: calc(50% - 15rem);
    }
`;

export { Flash };
