import React, { Component } from 'react';
import styled from 'styled-components'

const IconComponentContainer = styled.div`
  box-shadow: rgba(0, 0, 0, 0.12) 0px 1px 6px, rgba(0, 0, 0, 0.12) 0px 1px 4px;
  border-radius: 2px;
  margin-bottom: 32px;

`
const Header = styled.div`
  height: 56px;
  padding: 0 15px;
  background-color: #eee;
  & h2 {
    font-size: 20px;
    line-height: 56px;
  }
`
const Content = styled.div`
  padding: 24px;
`

class ComponentTemplete extends Component {
  render() {
    return (
      <IconComponentContainer>
        <Header>
          <h2>Sample examples</h2>
        </Header>
        <Content>
        {this.props.children}
        </Content>
      </IconComponentContainer>
    );
  }
}

export default ComponentTemplete;