import React from 'react';
import { Input, Space, Menu } from 'antd';
import './Leads.css';

const { Search } = Input;

function Lead() {
  const items = [
    {
      key: '1',
      label: 'Topics',
      children: [
        {
          key: '1.1',
          label:<div style={{ display: 'flex', gap:'10px'}}>
            <p style={{ border :"1px sold red", borderRadius: '50px' , backgroundColor:'red'}}>'Beverages</p>
            <p style={{ border :"1px sold red", borderRadius: '50px', backgroundColor:'red' }}>'Beverages</p>
            <p style={{ border :"1px sold red", borderRadius: '50px', backgroundColor:'red'}}>'Beverages</p>
            <p style={{ border :"1px sold red", borderRadius: '50px', backgroundColor:'red'}}>'Beverages'</p>
            </div> ,
          type: 'group'
        },
        {
          key: '1.2',
          label: 'Fruit and Vegetable',
          type: 'group',
        },
        {
          key: '1.3',
          label: 'Dairy',
          type: 'group',
        },
        {
          key: '1.4',
          label: 'Women Health',
          type: 'group',
        },
      ],
    },
    {
      key: '2',
      label: 'Campaign',
      children: [
        {
          key: '2.1',
          label: 'Example 1',
          type: 'group'
        },
        {
          key: '2.2',
          label: 'Example 2',
          type: 'group',
        },
      ],
    },
    {
      key: '3',
      label: 'Country',
      children: [
        {
          key: '3.1',
          label: 'Country 1',
          type: 'group'
        },
        {
          key: '3.2',
          label: 'Country 2',
          type: 'group',
        },
      ],
    },
    {
      key: '4',
      label: 'Job tile',
      children: [
        {
          key: '4.1',
          label: 'Job Title 1',
          type: 'group'
        },
        {
          key: '4.2',
          label: 'Job Title 2',
          type: 'group',
        },
      ],
    },
    {
      key: '5',
      label: 'Nature of the Business',
      children: [
        {
          key: '5.1',
          label: 'Business Type 1',
          type: 'group'
        },
        {
          key: '5.2',
          label: 'Business Type 2',
          type: 'group',
        },
      ],
    },
  ];

  const onClick = (e) => {
    console.log('click ', e);
  };

  const onSearch = (value, _e, info) => console.log(info?.source, value);

  return (
    <div>
      <div className="container">
        <div className="filterSection">
          <p className="filterTitle">Filter your Search</p>
          <Space direction="vertical" className="searchInput">
            <Search placeholder="Search by company name" onSearch={onSearch} enterButton />
          </Space>
        </div>

        <div className="topicsMenu">
          <Menu
            onClick={onClick}
            defaultSelectedKeys={['1']}
            defaultOpenKeys={['1']}
            mode="inline"
            items={items}
          />
        </div>

        <div>
          <button className="filterButton">
            <span className="filterButtonText">Filter</span>
          </button>
        </div>
      </div>
    </div>
  );
}

export default Lead;
