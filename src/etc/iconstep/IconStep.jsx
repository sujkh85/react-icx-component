import React, { Component } from 'react';

class StepList extends Component {
  getStepClassName=(index)=>{
    const {step=0} = this.props;
    let result = ''
    if(index === step){
      result = 'on'
    } else if(index < step){
      result = 'done';
    }
    
    return `icon-step-list ${result}`
  }

  render() {
    const {stepList=['1', '2'], descriptionList, step=0} = this.props;
    return (
      <div className="icon-step"> {/* step (진행 단계도) */}
        <div className="icon-step-container">
          {stepList.map((item, index)=>{
            return(
              <div className={this.getStepClassName(index)} key={index}> {/* 완료된 step-list에게는 done 클래스 */}
                <div className="icon-step-title">{item}</div>
                <div className="icon-step-circle"></div>
              </div>
            )
          })}
        </div>
        {descriptionList && <div className="icon-step-description">  {/* 현재 진행 중인 단계의 설명 */}
          {descriptionList[step]}
        </div>}
      </div>
    );
  }
}

export default StepList;