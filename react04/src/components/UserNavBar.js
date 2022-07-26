import React from 'react';
import data from '../data/information';
import styled from 'styled-components';
import {Link} from 'react-router-dom';

const UserNavBarDom = styled.div`
    display: flex;
    flex-direction: column;

`;

const UserNavBar = () => {
    return (
        <>
        <UserNavBarDom>
            {data.members.map((member, i) => (
                <Link to={`/about/${member.nickname}`} key={i}>
                    {member.nickname}
                </Link>
            ))}
        </UserNavBarDom>
        </>
    );
};

export default UserNavBar;

