import React from 'react';
import { Table } from 'antd';
import { useMemo } from 'react';

const Examlist = (data) => {
    console.log(data);
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
        ];
    },[]);
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