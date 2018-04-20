import React, { Component } from 'react';
import MainTemplete from '../../common/layout/MainTemplete';
import DescriptionTemplete from '../../common/layout/DescriptionTemplete'
import ComponentTemplete from '../../common/layout/ComponentTemplete';
import Code from '../../common/Code';
import PropertyTable from '../../common/PropertyTable';
import IconDonutChart from './IconDonutChart';

class IconLoadingContainer extends Component {
  importFromList=[
    {React:'react'},
    {'{IconDonutChart}':'react-icx-component'}
  ]

  propertyTableList=[
    {name:'dataList', type:'array', require:true, default:'', description:'[40,60]같은 퍼센트 배열'},
    {name:'index', type:'number', require:true, default:'', description:'dataList의 타겟 index'},
    {name:'width', type:'number', require:false, default:'300', description:'chart width'},
    {name:'height', type:'number', require:false, default:'300', description:'chart height'},
    {name:'centerFontSize', type:'string', require:false, default:'13px', description:'font size'},
    {name:'chartColor', type:'array', require:false, default:"['#00bfc1','#e0e0e0']", description:'[타겟 index의 색상, 그외 색상] '},
  ]

  render() {
    return (
      <MainTemplete>
        <DescriptionTemplete title="DonutChart">
          Chart.js에 도넛 차트
        </DescriptionTemplete>
        <Code importFromList={this.importFromList}>
          {"<IconDonutChart width={148} height={90} dataList={[40, 60]} centerText={'40%'} centerFontSize={'13px'} index={0} chartColor={['#00bfc1','#e0e0e0']}/>"}<br/><br/>
          {"<IconDonutChart width={148} height={90} dataList={[40, 60]} centerText={'60%'} centerFontSize={'13px'} index={1} chartColor={['#00bfc1','#e0e0e0']} />  "}<br/>
        </Code>

        <DescriptionTemplete>
          chart.js의 donutChart를 사용하여 구현하였습니다.<br/>

        </DescriptionTemplete>

        <ComponentTemplete>
          <div>
            <IconDonutChart width={148} height={90} dataList={[40, 60]} centerText={'40%'} centerFontSize={'13px'} index={0} chartColor={['#00bfc1','#e0e0e0']} />
            <IconDonutChart width={148} height={90} dataList={[40, 60]} centerText={'60%'} centerFontSize={'13px'} index={1} chartColor={['#00bfc1','#e0e0e0']} />  
          </div>
        </ComponentTemplete>
        
        <PropertyTable propertyTableList={this.propertyTableList}/>
      </MainTemplete>
    );
  }
}

export default IconLoadingContainer;