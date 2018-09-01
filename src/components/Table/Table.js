import React from 'react';
import { Icon, Label, Menu, Table } from 'semantic-ui-react';
import _ from 'lodash';
import 'semantic-ui-css/semantic.min.css';
import './table.scss';

class TableExample extends React.Component {
  state = {
    column: 'productId',
    data: this.props.rows,
    direction: null,
  }

  handleSort = clickedColumn => () => {
    const { column, data, direction } = this.state

    if (column !== clickedColumn) {
      this.setState({
        column: clickedColumn,
        data: _.sortBy(data, [clickedColumn]),
        direction: 'ascending',
      })

      return
    }

    this.setState({
      data: data.reverse(),
      direction: direction === 'ascending' ? 'descending' : 'ascending',
    })
  }

  render() {
    const { column, direction, data } = this.state;
    const tableRows = data.map((row, index) => {
      return (<Table.Row className={row.statusColour} key={index}>
        <Table.Cell>
          <Label ribbon>First</Label>
        </Table.Cell>
        <Table.Cell>{row.productId}</Table.Cell>
        <Table.Cell>{row.description}</Table.Cell>
        <Table.Cell>{row.brand}</Table.Cell>
        <Table.Cell>{row.category}</Table.Cell>
        <Table.Cell>{row.division}</Table.Cell>
        <Table.Cell>{row.group}</Table.Cell>
        <Table.Cell>{row.slugs}</Table.Cell>
        <Table.Cell>{row.hybrisApprovalStatus}</Table.Cell>
        <Table.Cell>{row.totalDaysInStock}</Table.Cell>
        <Table.Cell>{row['top50byUnits/Value']}</Table.Cell>
        <Table.Cell>{row.productLocation}</Table.Cell>
        <Table.Cell>{row.pOUnits}</Table.Cell>
        <Table.Cell>{row.percentageDelivered}</Table.Cell>
        <Table.Cell>{row['pre-AllocatedUnits']}</Table.Cell>
        <Table.Cell>{row.inventoryStockUnits}</Table.Cell>
        <Table.Cell>{row.inventoryStockSellingPrice}</Table.Cell>
        <Table.Cell>{row.websiteAvailableStockUnits}</Table.Cell>
        <Table.Cell>{row.deliveredDateIntoBusiness}</Table.Cell>
        <Table.Cell>{row.dateTransferredToPhotoStudio}</Table.Cell>
        <Table.Cell>{row.expetedDateIntoBusiness}</Table.Cell>
        <Table.Cell>{row.deliveredDateIntoBusiness}</Table.Cell>
      </Table.Row>);
    });

    return (<Table sortable celled>
      <Table.Header>
        <Table.Row>
          <Table.HeaderCell></Table.HeaderCell>
          <Table.HeaderCell
            sorted={column === 'productId' ? direction : null}
            onClick={this.handleSort('productId')}>
            ProductId
          </Table.HeaderCell>
          <Table.HeaderCell>Header</Table.HeaderCell>
          <Table.HeaderCell
            sorted={column === 'brand' ? direction : null}
            onClick={this.handleSort('brand')}>
            Brand
          </Table.HeaderCell>
          <Table.HeaderCell>Header</Table.HeaderCell>
          <Table.HeaderCell>Header</Table.HeaderCell>
          <Table.HeaderCell>Header</Table.HeaderCell>
          <Table.HeaderCell>Header</Table.HeaderCell>
          <Table.HeaderCell
            sorted={column === 'hybrisApprovalStatus' ? direction : null}
            onClick={this.handleSort('hybrisApprovalStatus')}>
            Hybris Approval Status
          </Table.HeaderCell>
          <Table.HeaderCell>Header</Table.HeaderCell>
          <Table.HeaderCell>Header</Table.HeaderCell>
          <Table.HeaderCell>Header</Table.HeaderCell>
          <Table.HeaderCell>Header</Table.HeaderCell>
          <Table.HeaderCell>Header</Table.HeaderCell>
          <Table.HeaderCell>Header</Table.HeaderCell>
          <Table.HeaderCell>Header</Table.HeaderCell>
          <Table.HeaderCell>Header</Table.HeaderCell>
          <Table.HeaderCell>Header</Table.HeaderCell>
          <Table.HeaderCell>Header</Table.HeaderCell>
          <Table.HeaderCell>Header</Table.HeaderCell>
          <Table.HeaderCell>Header</Table.HeaderCell>
          <Table.HeaderCell>Header</Table.HeaderCell>
        </Table.Row>
      </Table.Header>

      <Table.Body>
        {tableRows}
      </Table.Body>

      <Table.Footer>
        <Table.Row>
          <Table.HeaderCell colSpan='43'>
            <Menu floated='right' pagination>
              <Menu.Item as='a' icon>
                <Icon name='chevron left' />
              </Menu.Item>
              <Menu.Item as='a'>1</Menu.Item>
              <Menu.Item as='a'>2</Menu.Item>
              <Menu.Item as='a'>3</Menu.Item>
              <Menu.Item as='a'>4</Menu.Item>
              <Menu.Item as='a' icon>
                <Icon name='chevron right' />
              </Menu.Item>
            </Menu>
          </Table.HeaderCell>
        </Table.Row>
      </Table.Footer>
    </Table >);
  }
}

export default TableExample;
