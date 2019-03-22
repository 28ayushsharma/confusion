import { PROMOTIONS } from '../shared/promotions';

export const Promotions = (state = PROMOTIONS, action ) =>{
    switch(action.type){
        //default is no change in state
        default : 
            return state;
    }
}