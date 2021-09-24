import React from 'react';
import { Drawer, Form, Button, Input } from 'antd';
import { PlusOutlined } from '@ant-design/icons';
import { useMutation, useQueryClient } from 'react-query';
import { addClub } from '../../server';
import MessageAlert from '../MessageAlert';



const AddClub = ({ visible, showDrawer, handleClose }) => {
  const queryClient = useQueryClient();
  const mutation = useMutation(addClub, { onSuccess: () => queryClient.invalidateQueries("clubs") });

  const onFinish = async(values) => {
    await mutation.mutate(values);
  }

    return (
      <>
        <Button type="primary" onClick={showDrawer} icon={<PlusOutlined />}>
          Create New Club
        </Button>
        <Drawer
          title="Create a new account"
          width={520}
          onClose={handleClose}
          visible={visible}
          bodyStyle={{ paddingBottom: 80 }}
        >
        {mutation.error && (<MessageAlert type="error" message={mutation.error.message} />)}
        {mutation.data && (<MessageAlert type="success" message={mutation.data.message} />)}
          <Form layout="vertical" onFinish={onFinish}>
            <Form.Item
                  name="name"
                  label="Club Name"
                  rules={[{ required: true, message: 'Please enter club name' }]}
                >
                  <Input placeholder="Please enter club name" />
            </Form.Item>

            <Form.Item
                  name="description"
                  label="Club Description"
                >
                <Input.TextArea rows={4} placeholder="please enter description" />
            </Form.Item>

            <Button
            type="primary"
            block
            loading={mutation.isLoading}
            htmlType="submit"
            >Create Club</Button>
          </Form>
        </Drawer>
      </>
    );
}
export default AddClub