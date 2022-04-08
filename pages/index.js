import React from 'react';
import LeftHeader from '../components/elements/LeftHeader'
import LeftContainer from '../components/elements/LeftContainer'

class Index extends React.Component {
  static getInitialProps() {
    return {};
  }

  componentDidMount() {}

  componentWillUnmount() {}

  render() {
    return (
      <LeftContainer>
        <LeftHeader/>
      </LeftContainer>
    );
  }
}

export default Index;