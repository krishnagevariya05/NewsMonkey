import { getByTitle } from '@testing-library/react';
import React, { Component } from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

export class NewsItem extends Component {

  render() {
    let {title, description, imageUrl, newsUrl} = this.props;
    return (
      <div className='my-3'>
        <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={!imageUrl?"https://techcrunch.com/wp-content/uploads/2022/09/Screen-Shot-2022-09-08-at-2.24.34-PM-1.png?w=1200":imageUrl} />
      <Card.Body>
        <Card.Title>{title}</Card.Title>
        <Card.Text>
          {description}
        </Card.Text>
        <Button variant="primary" className='btn btn-sm btn-dark' rel="noreferrer" href={newsUrl} target='_blank'>Read More</Button>
      </Card.Body>
    </Card>
      </div>
    )
  }
}

export default NewsItem