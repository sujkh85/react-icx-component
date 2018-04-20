import React, { Component } from 'react';
import cn from 'classnames';
class IconTab extends Component {
  constructor(props){
    super(props);
    const {defaultSelectIndex=0} = this.props;

    this.state = {
      selectIndex:defaultSelectIndex
    }
  }

  onClickTab=(e)=>{
    let data = e.currentTarget.getAttribute('data');
    let dataSplitList = data.split(',');
    this.setState({
      selectIndex:dataSplitList[1]*1
    },()=>{
      if(this.props.onClick){
        this.props.onClick({tab:dataSplitList[0],index:dataSplitList[1]*1})
      }
    })
  }
  defaultStyles={
    textColor:'#000000',
    bottomLineColor:'#000000',
  }
  tabRenderer=()=>{
    const {tabList=[], styles=this.defaultStyles} = this.props;
    const {selectIndex} = this.state;

    return tabList.map((tab, index)=>{
      let isOn = selectIndex === index
      let bottomLineColor = styles.bottomLineColor ? styles.bottomLineColor : ''
      return(
        <div 
          key={tab} 
          className={cn('icon-contract-tab',{'on':isOn})} 
          data={`${tab},${index}`} 
          onClick={this.onClickTab}
        >
            <span style={{color:styles.textColor}}>{tab}</span>
            <div className="isAfter" style={{backgroundColor:isOn?bottomLineColor:''}}></div>
          </div>
      )
    })  
  }

  render() {
    const {styles=this.defaultStyles} = this.props
    return (
      <div className="icon-contract-category" style={{borderBottom:`2px solid ${styles.bottomLineColor ? styles.bottomLineColor : '#000000' }`}}>
        {this.tabRenderer()}
      </div> 
    );
  }
}

export default IconTab;