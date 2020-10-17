export const SEE_SEARCH_VALUE = "SEE_SEARCH_VALUE";
export const NOT_SEE_SEARCH_VALUE = "Not_SEE_SEARCH_VALUE";

export function SeeSearchValue() {
  return {
    type: SEE_SEARCH_VALUE,
  };
}

export function NotSeeSearchValue() {
  return {
    type: NOT_SEE_SEARCH_VALUE,
  };
}
