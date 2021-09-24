import React from 'react';
import { Table, Select } from 'antd';
import { removeMembers } from '../server';
import { useMutation, useQueryClient } from 'react-query';

const columns = [
    {
        title: 'Name',
        dataIndex: 'name',
    },
    {
        title: 'username',
        dataIndex: 'username',
    },
    {
        title: 'status',
        dataIndex: 'status',
    },
    {
        title: 'Date Invited',
        dataIndex: 'createdAt',
    },
    {
        title: "Action",
        dataIndex: "action"
    }
]

const Tables = ({ data, loading }) => {
    const queryClient = useQueryClient();
    const mutation = useMutation(removeMembers, { onSuccess: () => queryClient.invalidateQueries("club-member") });

    const OnRemove = async(value, event) => {
        const id = event.key;
        if(value === "delete") {
            await mutation.mutate({id});
        }
    }

    const datax = []
    if(data){
        data.map(({ id, full_name, username, status, createdAt }) => {
            datax.push({
                key: id,
                name: full_name,
                username: username,
                status: status,
                createdAt: createdAt,
                action: <Select style={{ width: '120px' }} defaultValue="delete" onSelect={OnRemove}>
                    <Select.Option value="delete" key={id}>Remove Member</Select.Option>
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
