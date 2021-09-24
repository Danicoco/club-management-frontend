import React from 'react';
import { Drawer, Button, List } from 'antd';
import { PlusOutlined } from '@ant-design/icons';
import { useMutation, useQuery } from 'react-query';
import { allMembers, inviteMembers } from '../../server';
import MessageAlert from '../MessageAlert';


const AddClub = ({ visible, showDrawer, handleClose, id }) => {
  const mutation = useMutation(inviteMembers);
  const { isLoading, data, error } = useQuery('members-platform', allMembers);

  const onFinish = async(username) => {
    await mutation.mutate({username, id});
  }

    return (
      <>
        <Button type="primary" onClick={showDrawer} icon={<PlusOutlined />}>
          Invite Members
        </Button>
        <Drawer
          title="Create a new account"
          width={520}
          onClose={handleClose}
          visible={visible}
          bodyStyle={{ paddingBottom: 80 }}
        >
        <h3 className="invite">Invite Members</h3>
        {error && (<MessageAlert type="error" message={error.message} />)}
        {mutation.error && (<MessageAlert type="error" message={mutation.error.message} />)}
        {mutation.data && (<MessageAlert type="success" message={mutation.data} />)}
        {isLoading && (
            <MessageAlert type="info" message="Looking up members..." />
        )}
        {data && (
            <List
            dataSource={data}
            bordered
            renderItem={item => (
              <List.Item
                key={item.id}
              >
                <List.Item.Meta
                  title={`${item.first_name} ${item.last_name}`}
                  description={`@${item.username}`}
                  
                />
                <Button
                    type="primary"
                    onClick={() => onFinish(item.username)}
                    >Invite</Button>
              </List.Item>
            )}
          />
        )}
        </Drawer>
      </>
    );
}
export default AddClub