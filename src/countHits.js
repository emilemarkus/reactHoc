import React, { Component } from "react";

const countHits = (WrappedComponent) => {
  class CountHits extends Component {
    state = {
      hits: 0
    };

    handleClick = () => {
      this.setState((prevState) => {
        return {
          hits: prevState.hits + 1
        };
      });
    };
    componentDidUpdate(PrevProps, prevState) {
      if (this.state !== prevState) {
        const CompName = WrappedComponent.name;
        this.props.reduceHandler(CompName);
      }
    }

    render() {
      return (
        <WrappedComponent
          {...this.props}
          handleClick={this.handleClick}
          hocState={this.state}
        />
      );
    }
  }

  return CountHits;
};

export default countHits;
