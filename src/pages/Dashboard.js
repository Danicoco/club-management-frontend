import React, { useState } from 'react';
import Navbar from '../components/Navbar';
import { PrivateBackground, Segment } from '../styles';
import AddClub from '../components/drawer/AddClub';
import ClubList from '../components/ClubList';
import { useQuery } from 'react-query';
import { allClubs } from '../server';

const Dashboard = () => {
    const { isLoading, data } = useQuery('clubs', allClubs);
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
            <Navbar current="dashboard" />
            <Segment>
            <div className="w100">
                <div className="left mb-3">
                    <AddClub visible={visible} showDrawer={showDrawer} handleClose={handleClose} />
                </div>
            </div>
            {/* line graph */}

            {/* club lists */}
            <ClubList data={data} loading={isLoading} />
            </Segment>
        </div>
    )
}

export default Dashboard;