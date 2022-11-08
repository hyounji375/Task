import produce from "immer";

const initialState = {
  allPost: [
    {
      id: 1,
      content: "이게 맞나...",
    },
  ],
  allPostLoading: false,
  allPostDone: false,
  allPostError: null,

  addPostLoading: false,
  addPostDone: false,
  addPostError: null,

  removePostLoading: false,
  removePostDone: false,
  removePostError: null,

  updatePostLoading: false,
  updatePostDone: false,
  updatePostError: null,

  deletePostLoading: false,
  deletePostDone: false,
  deletePostError: null,
};

export const ALLPOST_REQUEST = "ALLPOST_REQUEST";
export const ALLPOST_SUCCESS = "ALLPOST_SUCCESS";
export const ALLPOST_FAILURE = "ALLPOST_FAILURE";

export const ADDPOST_REQUEST = "ADDPOST_REQUEST";
export const ADDPOST_SUCCESS = "ADDPOST_SUCCESS";
export const ADDPOST_FAILURE = "ADDPOST_FAILURE";

export const REMOVEPOST_REQUEST = "REMOVEPOST_REQUEST";
export const REMOVEPOST_SUCCESS = "REMOVEPOST_SUCCESS";
export const REMOVEPOST_FAILURE = "REMOVEPOST_FAILURE";

export const UPDATEPOST_REQUEST = "UPDATEPOST_REQUEST";
export const UPDATEPOST_SUCCESS = "UPDATEPOST_SUCCESS";
export const UPDATEPOST_FAILURE = "UPDATEPOST_FAILURE";

const todoReducer = (state = initialState, action) => {
  return produce(state, (draft) => {
    switch (action.type) {
      case ALLPOST_REQUEST:
        draft.allPostLoading = true;
        draft.allPostDone = false;
        draft.allPostError = null;
        break;
      case ALLPOST_SUCCESS:
        draft.allPostLoading = false;
        draft.allPostDone = true;
        draft.allPost = action.data;
        break;
      case ALLPOST_FAILURE:
        draft.allPostLoading = false;
        draft.allPostDone = false;
        draft.allPostError = action.error;
        break;

      case ADDPOST_REQUEST:
        draft.addPostLoading = true;
        draft.addPostDone = false;
        draft.addPostError = null;
        break;
      case ADDPOST_SUCCESS:
        draft.addPostLoading = false;
        draft.addPostDone = true;
        draft.allPost = draft.allPost.concat(action.data);
        break;
      case ADDPOST_FAILURE:
        draft.addPostLoading = false;
        draft.addPostDone = false;
        draft.addPostError = action.error;
        break;

      case REMOVEPOST_REQUEST:
        draft.removePostLoading = true;
        draft.removePostDone = false;
        draft.removePostError = null;
        break;
      case REMOVEPOST_SUCCESS:
        draft.removePostLoading = false;
        draft.removePostDone = true;
        draft.allPost = draft.allPost.filter((v) => v.id !== action.data.id);
        break;
      case REMOVEPOST_FAILURE:
        draft.removePostLoading = false;
        draft.removePostDone = false;
        draft.removePostError = action.error;
        break;

      case UPDATEPOST_REQUEST:
        draft.updatePostLoading = true;
        draft.updatePostDone = false;
        draft.updatePostError = null;
        break;
      case UPDATEPOST_SUCCESS:
        draft.updatePostLoading = false;
        draft.updatePostDone = true;
        const index = draft.allPost.findIndex((v) => v.id === action.data.id);
        draft.allPost[index].content = action.data.content;
        break;
      case UPDATEPOST_FAILURE:
        draft.updatePostLoading = false;
        draft.updatePostDone = false;
        draft.updatePostError = action.error;
        break;
      default:
        return;
    }
  });
};
export default todoReducer;
