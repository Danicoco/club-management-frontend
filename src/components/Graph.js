import React from 'react';
import { Line } from 'react-chartjs-2';

const Graph = ({ graphData }) => {

    const labels = [];
    const data = [];
    if(graphData){
        graphData.map((item) => {
            labels.push(item.full_name);
            data.push(item.createdAt);
        })
    }
    const chartData = {
        labels: labels,
        datasets:[
          {
            label:'Members',
            data: data,
            backgroundColor:[
              'rgba(255, 99, 132, 0.6)',
              'rgba(255, 159, 64, 0.6)',
              'rgba(255, 99, 132, 0.6)'
            ]
          }
        ]
      }

    return (
        <Line
          data={chartData}
          height={150}
          width={150}
          options={{
            title:{
              display: "Members",
              fontSize:10
            }
          }}
        />
    )
}

export default Graph;