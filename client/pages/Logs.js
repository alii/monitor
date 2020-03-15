import React, { Component } from 'react';
import styled from 'styled-components';

const Log = styled.div`
  display: flex;
  padding: 10px 3px;
  border-radius: 3px;
  margin-bottom: 3px;

  color: black;
  background: ${props => props.theme.light};

  > span {
    flex: 1;

    &:first-child {
      max-width: 150px;
    }
  }
`;

const Table = styled.div`
  display: table;
  width: 100%;
  height: 100%;
  border-radius: 20px;
`;

const TableRow = styled.div`
  display: table-row;
  height: 100%;
`;

const TableCell = styled.div`
  display: table-cell;
  height: 100%;
`;

const LogTableContainerWrapper = styled.div`
  height: 100%;
  position: relative;
  overflow-y: auto;
`;

const LogTableContainer = styled.div`
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
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
      <Table>
        <TableRow>
          <TableCell>
            <LogTableContainerWrapper>
              <LogTableContainer>
                {this.props.logs.length > 0 ? (
                  this.props.logs.map((log, i) => {
                    return <LogElement key={i} type={log.type} args={log.arguments} />;
                  })
                ) : (
                  <p>No logs</p>
                )}
              </LogTableContainer>
            </LogTableContainerWrapper>
          </TableCell>
        </TableRow>
      </Table>
    );
  }
}
