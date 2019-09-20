import { createSelector } from 'reselect';

const selectUser = state => state.user;

export const selectCurrentUser = createSelector(
  [selectUser],
  user => user.currentUser
);

export const selectUserSignUpInfo = createSelector(
  [selectUser],
  user => ({
    displayName: user.displayName,
    email: user.email,
    password: user.password,
    confirmPassword: user.confirmPassword
  })
);
