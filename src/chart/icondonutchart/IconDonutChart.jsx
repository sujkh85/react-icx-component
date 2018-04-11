import React, { Component } from 'react';
import chartjs from 'chart.js';

class IconDonutChart extends Component {
  options={
    //레이아웃
    layout: {
        padding: {
            left: 0,
            right: 50,
            top: 0,
            bottom: 0
        }
    },
    //타이틀
    title:{
      display:false,
      position:'top',
      fontSize:20,
      fontFamily:"'Helvetica Neue', 'Helvetica', 'Arial', sans-serif",
      fontColor:'#666',
      fontStyle:'bold',
      text:'chart!!!'
    },
    //튤팁
    tooltips:{
      enabled:false
    },
    //라벨
    legend:{
      display:false,
      position:'right',
      labels:{
        //라벨컬러
        fontColor:'rgb(255, 99, 132)',
      },
    },
    //호버 이벤트 발생하여 재랜더링 방지코드
    hover:{
      mode:null
    },
    events:[],
    animation: {
      duration: 0
    },
    percentageInnerCutout : 10
  }

  getBackgroundColor=()=>{
    let {dataList, index, chartColor=['#00bfc1','#e0e0e0']} = this.props;
    let backgroundColorList = [];
    
    dataList.forEach((item, idx)=>{
      if(index === idx){
        backgroundColorList.push(chartColor[0])
      } else {
        backgroundColorList.push(chartColor[1])
      }
    })
    return backgroundColorList;
  }

  getData=()=>{
    let {dataList} = this.props
    let data = {
      datasets: [{
          data: dataList,
          backgroundColor: this.getBackgroundColor(),
          borderWidth:0
      }]
    };

    return data;
  }

  drawScore=(centerText)=>{
    let {centerFontSize='13px'} = this.props;
    let ctx = this.chartController.ctx;
    ctx.fillStyle = '#000000';
    ctx.textAlign = 'center';
    ctx.textBaseline = 'middle';
    ctx.font = `${centerFontSize} Arial`;
    ctx.fillText(centerText, this.chartController.chart.width/3, this.chartController.chart.height/2);
  }

  componentWillReceiveProps(nextProps) {
    const {centerText , dataList} = this.props
    if(centerText !== nextProps.centerText || dataList !== nextProps.dataList){
      this.chartController.chart.config.data.datasets[0].data = nextProps.dataList;
      this.chartController.update()
      this.drawScore(nextProps.centerText ?  nextProps.centerText : 0);  
    }
  }

  
  componentDidMount() {
    const {centerText} = this.props
    let ctx = this.canvas.getContext('2d');
    this.chartController = new chartjs(ctx,{
        type: 'doughnut',
        data: this.getData(),
        options: this.options
    });

    setTimeout(() => {
      this.drawScore(centerText?centerText:0);  
    }, 1000);
    setTimeout(() => {
      this.drawScore(centerText?centerText:0);  
    }, 2000);
    setTimeout(() => {
      this.drawScore(centerText?centerText:0);  
    }, 3000);
  }
  
  render() {
    const {width=300, height=300} = this.props;
    return (
      <div style={{width:width,height:height}}>
        <canvas ref={(canvas)=>{this.canvas = canvas}}></canvas>
      </div>
    );
  }
}

export default IconDonutChart;