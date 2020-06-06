import { createSelector } from 'reselect';

//input selector
const selectUser = (state) => state.user;

//output selectors
export const selectCurrentUser = createSelector(
   [selectUser],
   (user) => user.currentUser
);
