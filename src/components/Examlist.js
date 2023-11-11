import React from 'react';
import { Table } from 'antd';
import { useMemo, useCallback } from 'react';
import { Button} from 'antd/es/radio';
import { EyeOutlined, CloseCircleOutlined} from '@ant-design/icons';

const Examlist = (data) => {
    console.log(data);
    const renderAction = useCallback(
        data => {
            return (
                <div className="Action">
                        <Button
                            size="small"
                            className="my-btn"
                           
                        >
                            <EyeOutlined/>
                        </Button>
                        <Button
                            size="small"
                            className="my-btn"
                           
                        >
                            <CloseCircleOutlined />
                        </Button>
                </div>
            );
        },
        []
    );
    const columns = useMemo(() => {
        return [
            {
                title: 'Id',
                dataIndex: '_id',
                key: '_id',
                className: 'Id',
            },
            {
                title: 'Tên',
                dataIndex: 'name',
                key: 'name',
                className: 'Name',
            },
            {
                title: 'Mã',
                dataIndex: 'password',
                key: 'password',
                className: 'Password',
            },
            {
                title: 'Hành động',
                key: 'action',
                width: 150,
                render: renderAction,
            },
        ];
    },[renderAction]);
    return (
        <div className='List'>
            <Table
            columns={columns}
            dataSource={data.data}
            bordered={false}
            pagination={false}
        />
        </div>
    );
};

export default Examlist;