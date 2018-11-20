import React from 'react';
import { Card, Image, Icon, Button } from 'semantic-ui-react';

const DrugCard = drug => {
  const { name, manufacturer, price, url } = drug;
  return (
    <Card>
      <Image src={url} />
      <Card.Content>
        <Card.Header>{name}</Card.Header>
        <Card.Meta>
          <span className="date">{manufacturer}</span>
        </Card.Meta>
      </Card.Content>
      <Card.Content extra>
        <a>
          <Icon name="rub" />
          {price}
        </a>
      </Card.Content>
      <Button>
        Добавить в корзину
      </Button>
    </Card>
  );
};

export default DrugCard;