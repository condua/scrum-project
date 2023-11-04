import React from 'react';
import { Table } from 'antd';
import { useMemo } from 'react';

const Examlist = (data) => {
    console.log(data);
    console.log(data.content);
    const columns = useMemo(() => {
        return [
            {
                title: 'Id',
                dataIndex: 'Id',
                key: 'Id',
                className: 'Id',
            },
            {
                title: 'Tên',
                dataIndex: 'Name',
                key: 'Name',
                className: 'Name',
            },
            {
                title: 'Mã',
                dataIndex: 'Password',
                key: 'Password',
                className: 'Password',
            },
        ];
    },[]);
    return (
        <div className='List'>
            <Table
            columns={columns}
            dataSource={data}
            bordered={false}
            pagination={false}
        />
        </div>
    );
};

export default Examlist;