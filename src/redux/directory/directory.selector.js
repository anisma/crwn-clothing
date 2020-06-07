import { createSelector } from 'reselect';

// input selector
const selectDirectory = (state) => state.directory;

// output selectors
export const selectDirectorySections = createSelector(
   [selectDirectory],
   (directory) => directory.sections
);
