import { COMMENTS } from '../shared/comments'
import * as ActionTypes from './ActionTypes'

export const Comments = (state = COMMENTS, action) =>{
    switch(action.type){
        case ActionTypes.ADD_COMMENTS:
            var comment = action.payload;
            comment.id = state.length;
            comment.date = new Date().toISOString();
            console.log("New comment");
            console.log(comment);
            return state.concat(comment);
        default:
            return state;
    }
};