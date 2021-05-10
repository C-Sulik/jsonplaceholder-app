export const fetchingStatuses = {
  pending: 'pending',
  fulfilled: 'fulfilled',
  rejected: 'rejected',
} as const;

export type FetchingStatus = keyof typeof fetchingStatuses;
