import React from 'react';
import ReactDOM from 'react-dom';
import 'antd/dist/antd.css';
import { Tree } from 'antd';
import { ContainerOutlined} from '@ant-design/icons';




function ProjectTree() {
    var onSelect = (selectedKeys, info) => {
        console.log('selected', selectedKeys, info);
      };
      const treeData = [
        {
          title: 'v1',
          key: '123456789',
          extendFo: null,
          children: [
            {
              title: 'teserflow',
              key: 'e26a1ea2-53b9-4e04-a265-ff8aaf040210',
              icon:<ContainerOutlined />,
              isLeaf: true,
            },
            {
              title: 'eserflow_2',
              key: '2a715e5e-1382-4bbb-89be-1a98dfd7b533',
              icon:<ContainerOutlined />,
              isLeaf: true,
            },
            {
              title: 'teserflow_3',
              key: '6b61a3c6-674f-4fe7-8203-b9686a4ca170',
              icon:<ContainerOutlined />,
              isLeaf: true,
            },
            {
              title: 'teserflow_4',
              key: '966c215e-782d-43e4-926d-954e406c20b2',
              icon:<ContainerOutlined />,
              isLeaf: true,
            },
          ],
        },
        {
          title: 'v2',
          key: '9655487855',
          extendFo: null,
          children: [
            {
              title: 'teserflow',
              key: '132ba5b2-a57a-48f7-96ac-590f37ce67fb',
              icon:<ContainerOutlined />,
              isLeaf: true,
            },
            {
              title: 'teserflow_2',
              key: '2d4f6e56-d329-4c08-8926-f57142b9e021',
              icon:<ContainerOutlined />,
              isLeaf: true,
            },
            {
              title: 'teserflow_3',
              key: '96992a35-45ef-43b3-828a-3f6d4530477f',
              icon:<ContainerOutlined />,
              isLeaf: true,
            },
            {
              title: 'teserflow_4',
              key: '356157f1-9416-44b6-8f53-dc8fcb1198d8',
              icon:<ContainerOutlined />,
              isLeaf: true,
            },
          ],
        },
      ];
   
    return (
        <>
      <Tree
        // showLine={true | {showLeafIcon: fa}}
        showIcon
        onSelect={onSelect}
        treeData={treeData}
      />
    
  



        </>
    );




}
export default ProjectTree
