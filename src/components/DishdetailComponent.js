import React, { Component } from 'react';
import { Card, CardImg, CardImgOverlay, CardText, CardBody, CardTitle, ListGroup} from 'reactstrap';

class DishDetail extends Component{
    constructor(props){
        super(props)       
    }

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
            <ListGroup componentClass="ul">
                {comments.map((comment) => {
                    return(
                    <li key={comment.id} className="list-group-item" >{comment.comment} {comment.author}</li>
                    );
                })}        
            </ListGroup>
        );
    }

    render(){
        const dish = this.props.dishdetail
        if(dish != null){
            return(
                <div className="row">
                    <div className="col-12 col-md-5 m-1">
                        {this.renderDish(dish)}
                    </div>
                    <div>
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