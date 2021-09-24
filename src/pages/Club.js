import React, { useState } from 'react';
import Navbar from '../components/Navbar';
import { PrivateBackground, Segment } from '../styles';
import { useParams } from 'react-router-dom';
import InviteMembers from '../components/drawer/InviteMembers'
import Graph from '../components/Graph';
import MemberList from '../components/MemberList'
import { useQuery } from 'react-query';
import { clubMembers } from '../server';

const Club = () => {
    const { id } = useParams();
    const { isLoading, data } = useQuery('club-member', () => clubMembers({id}));
    const [visible, setVisible] = useState(false);

    const showDrawer = () => {
        setVisible(true);
    }

    const handleClose = () => {
        setVisible(false);
    }
    return (
        <div>
            <PrivateBackground />
            <Navbar current="club" />
            <Segment>
            <div className="w100">
                <div className="left mb-3">
                    <InviteMembers visible={visible} showDrawer={showDrawer} handleClose={handleClose} id={id} />
                </div>
            </div>
            {/* line graph */}
            <div className="graph">
                <Graph graphData={data} />
            </div>
            {/* club lists */}
            <MemberList loading={isLoading} data={data} />
            </Segment>
        </div>
    )
}

export default Club;