import React from 'react';
import { Input, Space, Collapse } from 'antd';
import './Leads.css';

const { Search } = Input;

function Lead() {

  const text = (
    <>
    <span
      style={{
        paddingLeft: 24,
      }}
    >
      Beverages
    </span>
   <span
      style={{
        paddingLeft: 24,
      }}
    >
      Fruit and Vegetable
    </span>
    <span
      style={{
        paddingLeft: 24,
      }}
    >
      Dairy
    </span>
    <span
      style={{
        paddingLeft: 24,
      }}
    >
    Women Health
    </span>
  </>
  );
  const items = [
    {
      key: '1',
      label: 'Topics',
      children: text,
    },
    {
      key: '2',
      label: 'Campaign',
      children: text,
    },
    {
      key: '3',
      label: 'Country',
      children: text,
    },
    ,
    {
      key: '4',
      label: 'Job tile',
      children: text,
    },
    {
      key: '5',
      label: 'Nature of the Business',
      children: text,
    }
  ];
      const onClick = (e) => {
        console.log('click ', e);
      };

      const onSearch = (value, _e, info) => console.log(info?.source, value);

  return (
    <div>
        <div className="container">
            <div className="filterSection">
                <h1 className="filterTitle">Filter your Search</h1>
                <Space direction="vertical" className="searchInput">
                    <Search placeholder="Search by company name" onSearch={onSearch} enterButton />
                </Space>
            </div>

            <div className="topicsMenu">
             <Collapse items={items} bordered={false} defaultActiveKey={['1']} />;
            </div>
        <div>
            <button className="filterButton">
             <span className="filterButtonText">Filter</span>
            </button>

        </div>

        </div>

    </div>
  )
}

export default Lead;
