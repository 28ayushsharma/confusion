import React, { Component } from 'react';
import { Card, CardImg, CardImgOverlay, CardText, CardBody, CardTitle, ListGroup} from 'reactstrap';

class DishDetail extends Component{

    renderDish (dish) {
        return(
            <Card>
                <CardImg width="100%" src={dish.image} alt={dish.name} />
                <CardImgOverlay> </CardImgOverlay>
                <CardBody>
                    <CardTitle>{dish.name}</CardTitle>
                    <CardText>{dish.description}</CardText>
                </CardBody>
            </Card>
        );
    }

    renderComments(comments){
        return(
            <div>
                <h3>Comments</h3>
                <ListGroup className="list-unstyled">
                    {comments.map((comment) => {
                        return(
                            <div key={comment.id}>
                                <li   >{comment.comment} {comment.author}</li>
                                <li >-- {comment.author}, {new Intl.DateTimeFormat('en-US',
                                    { year: 'numeric', month: 'long', day: '2-digit' }).format(new Date(comment.date))}</li>
                            </div>
                        );
                    })}        
                </ListGroup>
            </div>
        );
    }

    render(){
        const dish = this.props.dish;
        console.log(dish);
        if(dish != null){
            return(
                <div>
                    <div className="col-12 col-md-5 m-1">
                        {this.renderDish(dish)}
                    </div>
                    <div className="col-12 col-md-5 m-1">
                        <div>
                            {this.renderComments(dish.comments)}
                        </div>
                    </div>
                </div>
            );
            
        }else{
            return( <div></div>);
        }
    }

}
export default DishDetail;