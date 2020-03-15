import React, { Component } from 'react';
import styled from 'styled-components';

const Log = styled.div`
  display: flex;
  padding: 10px 3px;
  border-radius: 3px;
  margin-bottom: 3px;
  background: ${props => props.theme.light};

  > span {
    flex: 1;

    &:first-child {
      max-width: 150px;
    }
  }
`;

const LogTableContainer = styled.div`
  display: table-row;
`;

const LogElement = ({ type, args }) => {
  return (
    <Log>
      <span>{type.toUpperCase()}</span>
      <span>{args.join('; ')}</span>
    </Log>
  );
};

export default class LogsContainer extends Component {
  constructor(props) {
    super();
    this.props = props;
  }

  render() {
    return (
      <LogTableContainer>
        {this.props.logs.length > 0 ? (
          this.props.logs.map((log, i) => {
            return <LogElement key={i} type={log.type} args={log.arguments} />;
          })
        ) : (
          <p>No logs</p>
        )}
      </LogTableContainer>
    );
  }
}
