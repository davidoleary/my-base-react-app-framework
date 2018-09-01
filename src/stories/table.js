import React from 'react';
import { storiesOf } from '@storybook/react';
import TableExamplePagination from '../components/Table';


const rows = [];
let statuses = ['IN_PROGESS', 'PROPOSED', 'REJECTED', 'CONFIRMED', 'READY_FOR_MERCHANDISING', 'VISUAL_MERCHANDISING', 'FINAL'];
for (let i = 0; i < 5; i++) {
  const status = statuses[Math.floor(Math.random() * statuses.length)];

  rows.push({
    statusColour: '',
    productId: `someId${i}`,
    description: 'an expensive thing',
    brand: 'some brand',
    category: 'some cat',
    division: 'HOMEWARE',
    group: 'some group',
    slugs: '/something',
    hybrisApprovalStatus: status,
    totalDaysInStock: 70,
    'top50byUnits/Value': 'what?',
    productLocation: 'DC',
    pOUnits: 19,
    percentageDelivered: 90,
    'pre-AllocatedUnits': 10,
    inventoryStockUnits: 12,
    inventoryStockSellingPrice: 5,
    websiteAvailableStockUnits: 2,
    deliveredDateIntoBusiness: Date.now(),
    dateTransferredToPhotoStudio: Date.now(),
    expetedDateIntoBusiness: Date.now(),
  });
}

const colouredRows = [];
const colors = ['yellow', 'blue', 'green', 'cream'];
statuses = ['IN_PROGESS', 'PROPOSED', 'REJECTED', 'CONFIRMED', 'READY_FOR_MERCHANDISING', 'VISUAL_MERCHANDISING', 'FINAL'];
for (let i = 0; i < 200; i++) {
  const colour = colors[Math.floor(Math.random() * colors.length)];
  const status = statuses[Math.floor(Math.random() * statuses.length)];

  colouredRows.push({
    statusColour: colour,
    productId: `someId${i}`,
    description: 'an expensive thing',
    brand: 'some brand',
    category: 'some cat',
    division: 'HOMEWARE',
    group: 'some group',
    slugs: '/something',
    hybrisApprovalStatus: status,
    totalDaysInStock: 70,
    'top50byUnits/Value': 'what?',
    productLocation: 'DC',
    pOUnits: 19,
    percentageDelivered: 90,
    'pre-AllocatedUnits': 10,
    inventoryStockUnits: 12,
    inventoryStockSellingPrice: 5,
    websiteAvailableStockUnits: 2,
    deliveredDateIntoBusiness: Date.now(),
    dateTransferredToPhotoStudio: Date.now(),
    expetedDateIntoBusiness: Date.now(),
  });
}


const largeNumberOfRows = [];
statuses = ['IN_PROGESS', 'PROPOSED', 'REJECTED', 'CONFIRMED', 'READY_FOR_MERCHANDISING', 'VISUAL_MERCHANDISING', 'FINAL'];
for (let i = 0; i < 200; i++) {
  const status = statuses[Math.floor(Math.random() * statuses.length)];

  largeNumberOfRows.push({
    statusColour: '',
    productId: `someId${i}`,
    description: 'an expensive thing',
    brand: 'some brand',
    category: 'some cat',
    division: 'HOMEWARE',
    group: 'some group',
    slugs: '/something',
    hybrisApprovalStatus: status,
    totalDaysInStock: 70,
    'top50byUnits/Value': 'what?',
    productLocation: 'DC',
    pOUnits: 19,
    percentageDelivered: 90,
    'pre-AllocatedUnits': 10,
    inventoryStockUnits: 12,
    inventoryStockSellingPrice: 5,
    websiteAvailableStockUnits: 2,
    deliveredDateIntoBusiness: Date.now(),
    dateTransferredToPhotoStudio: Date.now(),
    expetedDateIntoBusiness: Date.now(),
  });
}

storiesOf('TableExamplePagination', module)
  .add('Simple', () => <TableExamplePagination rows={rows} />)
  .add('Large', () => <TableExamplePagination rows={largeNumberOfRows} />)
  .add('Colored rows', () => <TableExamplePagination rows={colouredRows} />);
