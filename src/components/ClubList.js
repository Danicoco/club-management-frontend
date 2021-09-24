import React from 'react';
import { Table, Select } from 'antd';
import { deleteClubs } from '../server';
import { useMutation, useQueryClient } from 'react-query';
import { useHistory } from 'react-router-dom';

const columns = [
    {
        title: 'Club Name',
        dataIndex: 'name',
    },
    {
        title: 'Club Description',
        dataIndex: 'description',
    },
    {
        title: "Action",
        dataIndex: "action"
    }
]

const Tables = ({ data, loading }) => {
    const queryClient = useQueryClient();
    const mutation = useMutation(deleteClubs, { onSuccess: () => queryClient.invalidateQueries("clubs") });
    const history = useHistory();

    const OnRemove = async(value, event) => {
        const id = event.key;
        if(value === "delete") {
            await mutation.mutate({id});
        }

        if(value === "members") {
            console.log(`This is my id ${id}`);
            history.push(`/club/${id}`);
        }
    }

    const datax = []
    if(data){
        data.map(({ id, name, description }) => {
            datax.push({
                key: id,
                name: name,
                description: description,
                action: <Select style={{ width: '120px' }} defaultValue="members" onSelect={OnRemove}>
                    <Select.Option value="members" key={id}>View Members</Select.Option>
                    <Select.Option value="delete" key={id}>Delete Club</Select.Option>
                </Select>
            })
        });
    }
    return (
        <div>
            <Table 
            columns={columns} 
            dataSource={datax}
            loading={loading}
            />
        </div>
    )
}

export default Tables;
