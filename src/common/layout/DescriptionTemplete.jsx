import React, { Component } from 'react';
import styled from 'styled-components'

const IconDescriptionContainer = styled.div`
  margin-top: 20px;
  margin-bottom: 20px;
  padding: 0px 10px;
`
const Header = styled.div`
  padding: 0 15px;
  & h2 {
    font-size: 20px;
    margin-bottom: 10px;
  }
`
const Content = styled.div`
  padding: 14px 24px;
`

class DescriptionTemplete extends Component {
  render() {
    const { title, children } = this.props 
    console.log(this.props)
    return (
      <IconDescriptionContainer>
        <Header>
          <h2>{title}</h2>
        </Header>
        <Content>
          <p>{children}</p>
        </Content>
      </IconDescriptionContainer>
    );
  }
}

export default DescriptionTemplete;