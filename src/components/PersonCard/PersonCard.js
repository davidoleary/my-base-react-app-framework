
import 'semantic-ui-css/semantic.min.css';
import React from 'react';
import { Card, Icon, Image } from 'semantic-ui-react';

class CardExampleCard extends React.Component {
  render() {

    if (this.props.mini) {
      return (<Card>
        <Card.Content>
          <Card.Header>Matthew</Card.Header>
          <Card.Meta>
            <span className='date'>Joined in 2015</span>
          </Card.Meta>
        </Card.Content>
      </Card>);
    }
    return (<Card>
      <Image src='http://fillmurray.com/200/200' />
      <Card.Content>
        <Card.Header>Matthew</Card.Header>
        <Card.Meta>
          <span className='date'>Joined in 2015</span>
        </Card.Meta>
        <Card.Description>Matthew is a musician living in Nashville.</Card.Description>
      </Card.Content>
      <Card.Content extra>
        <a>
          <Icon name='user' />
          22 Friends
        </a>
      </Card.Content>
    </Card>);
  }
}

export default CardExampleCard;

