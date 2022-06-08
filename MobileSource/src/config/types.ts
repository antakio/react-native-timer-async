import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { Action } from '@reduxjs/toolkit';
import { StatusBarStyle } from 'react-native';
import store from '../redux/store';

// #region "API Types"
export interface Actor {
  id: number;
  login: string;
  display_login: string;
  gravatar_id: string;
  url: string;
  avatar_url: string;
}

export interface Repo {
  id: number;
  name: string;
  url: string;
}

export interface User {
  login: string;
  id: number;
  node_id: string;
  avatar_url: string;
  gravatar_id: string;
  url: string;
  html_url: string;
  followers_url: string;
  following_url: string;
  gists_url: string;
  starred_url: string;
  subscriptions_url: string;
  organizations_url: string;
  repos_url: string;
  events_url: string;
  received_events_url: string;
  type: string;
  site_admin: boolean;
}

export interface Owner {
  login: string;
  id: number;
  node_id: string;
  avatar_url: string;
  gravatar_id: string;
  url: string;
  html_url: string;
  followers_url: string;
  following_url: string;
  gists_url: string;
  starred_url: string;
  subscriptions_url: string;
  organizations_url: string;
  repos_url: string;
  events_url: string;
  received_events_url: string;
  type: string;
  site_admin: boolean;
}

export interface License {
  key: string;
  name: string;
  spdx_id: string;
  url: string;
  node_id: string;
}

export interface Head {
  label: string;
  ref: string;
  sha: string;
  user: User;
  repo: Repo;
}

export interface Base {
  label: string;
  ref: string;
  sha: string;
  user: User;
  repo: Repo;
}

export interface Self {
  href: string;
}

export interface Html {
  href: string;
}

export interface Issue {
  href: string;
}

export interface Comments {
  href: string;
}

export interface ReviewComments {
  href: string;
}

export interface ReviewComment {
  href: string;
}

export interface Commits {
  href: string;
}

export interface Statuses {
  href: string;
}

export interface Links {
  self: Self;
  html: Html;
  issue: Issue;
  comments: Comments;
  review_comments: ReviewComments;
  review_comment: ReviewComment;
  commits: Commits;
  statuses: Statuses;
}

export interface PullRequest {
  url: string;
  id: number;
  node_id: string;
  html_url: string;
  diff_url: string;
  patch_url: string;
  issue_url: string;
  number: number;
  state: string;
  locked: boolean;
  title: string;
  user: User;
  body: string;
  created_at: Date;
  updated_at: Date;
  closed_at?: unknown;
  merged_at?: unknown;
  merge_commit_sha?: unknown;
  assignee?: unknown;
  assignees: unknown[];
  requested_reviewers: unknown[];
  requested_teams: unknown[];
  labels: unknown[];
  milestone?: unknown;
  draft: boolean;
  commits_url: string;
  review_comments_url: string;
  review_comment_url: string;
  comments_url: string;
  statuses_url: string;
  head: Head;
  base: Base;
  _links: Links;
  author_association: string;
  auto_merge?: unknown;
  active_lock_reason?: unknown;
  merged: boolean;
  mergeable?: unknown;
  rebaseable?: unknown;
  mergeable_state: string;
  merged_by?: unknown;
  comments: number;
  review_comments: number;
  maintainer_can_modify: boolean;
  commits: number;
  additions: number;
  deletions: number;
  changed_files: number;
}

export interface Payload {
  action: string;
  number: number;
  pull_request: PullRequest;
}

export interface Org {
  id: number;
  login: string;
  gravatar_id: string;
  url: string;
  avatar_url: string;
}

export interface EventObject {
  id: string;
  type: string;
  actor: Actor;
  repo: Repo;
  payload: Payload;
  public: boolean;
  created_at: Date;
  org: Org;
}
// #endregion

// #region "Navigation Types"
type RootStackParamList = {
  Events: undefined;
  Event: { event: EventObject };
};

export type EventScreenProps = NativeStackScreenProps<RootStackParamList, 'Event', 'event-id'>;

export type EventsState = {
  items: EventObject[] | [];
  error: string | null;
  isLoading: boolean | null;
  timer: boolean | null;
};

// #endregion

// #region "Redux Types"
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export interface ActionWithPayload<T> extends Action {
  payload: T;
}

export interface IRootState {
  eventsReducer: EventsState;
}

export type TimerStatuses = {}
// #endregion

// #region "Component Types"
export interface ListRenderItemInfo<T> {
  item: T;
  index: number;
  separators: {
    highlight: () => void;
    unhighlight: () => void;
    updateProps: (select: 'leading' | 'trailing', newProps: unknown) => void;
  };
}

export interface AppStatusBarProps {
  barStyle?: StatusBarStyle;
  backgroundColor?: string;
}
// #endregion
