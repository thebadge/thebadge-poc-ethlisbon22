import { GraphQLClient } from 'graphql-request'
import { ClientError } from 'graphql-request/dist/types'
import * as Dom from 'graphql-request/dist/types.dom'
import gql from 'graphql-tag'
import useSWR, { SWRConfiguration as SWRConfigInterface, Key as SWRKeyInterface } from 'swr'
export type Maybe<T> = T | null
export type InputMaybe<T> = Maybe<T>
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] }
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> }
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> }
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string
  String: string
  Boolean: boolean
  Int: number
  Float: number
  BigDecimal: any
  BigInt: any
  Bytes: any
}

export type Badge = {
  __typename?: 'Badge'
  badgeType: BadgeType
  evidenceMetadataUrl?: Maybe<Scalars['String']>
  id: Scalars['ID']
  status: BadgeStatus
  user: User
}

export enum BadgeStatus {
  Approved = 'Approved',
  Challenged = 'Challenged',
  InReview = 'InReview',
  Removed = 'Removed',
}

export type BadgeType = {
  __typename?: 'BadgeType'
  badgesMintedAmount: Scalars['BigInt']
  curator?: Maybe<Curator>
  emitter: Emitter
  feeAndDeposit?: Maybe<Scalars['BigInt']>
  id: Scalars['ID']
  klerosDeposit?: Maybe<Scalars['BigInt']>
  klerosMetadataURL?: Maybe<Scalars['String']>
  klerosTCRList?: Maybe<Scalars['Bytes']>
  metadataURL: Scalars['String']
  mintCost: Scalars['BigInt']
  mintFee: Scalars['BigInt']
  mintedBadges: Array<Badge>
  paused: Scalars['Boolean']
  type: TypeOfBadge
  validFor: Scalars['BigInt']
}

export type BadgeTypeMintedBadgesArgs = {
  first?: InputMaybe<Scalars['Int']>
  orderBy?: InputMaybe<Badge_OrderBy>
  orderDirection?: InputMaybe<OrderDirection>
  skip?: InputMaybe<Scalars['Int']>
  where?: InputMaybe<Badge_Filter>
}

export type BadgeType_Filter = {
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>
  badgesMintedAmount?: InputMaybe<Scalars['BigInt']>
  badgesMintedAmount_gt?: InputMaybe<Scalars['BigInt']>
  badgesMintedAmount_gte?: InputMaybe<Scalars['BigInt']>
  badgesMintedAmount_in?: InputMaybe<Array<Scalars['BigInt']>>
  badgesMintedAmount_lt?: InputMaybe<Scalars['BigInt']>
  badgesMintedAmount_lte?: InputMaybe<Scalars['BigInt']>
  badgesMintedAmount_not?: InputMaybe<Scalars['BigInt']>
  badgesMintedAmount_not_in?: InputMaybe<Array<Scalars['BigInt']>>
  curator?: InputMaybe<Curator>
  curator_in?: InputMaybe<Array<Curator>>
  curator_not?: InputMaybe<Curator>
  curator_not_in?: InputMaybe<Array<Curator>>
  emitter?: InputMaybe<Scalars['String']>
  emitter_?: InputMaybe<Emitter_Filter>
  emitter_contains?: InputMaybe<Scalars['String']>
  emitter_contains_nocase?: InputMaybe<Scalars['String']>
  emitter_ends_with?: InputMaybe<Scalars['String']>
  emitter_ends_with_nocase?: InputMaybe<Scalars['String']>
  emitter_gt?: InputMaybe<Scalars['String']>
  emitter_gte?: InputMaybe<Scalars['String']>
  emitter_in?: InputMaybe<Array<Scalars['String']>>
  emitter_lt?: InputMaybe<Scalars['String']>
  emitter_lte?: InputMaybe<Scalars['String']>
  emitter_not?: InputMaybe<Scalars['String']>
  emitter_not_contains?: InputMaybe<Scalars['String']>
  emitter_not_contains_nocase?: InputMaybe<Scalars['String']>
  emitter_not_ends_with?: InputMaybe<Scalars['String']>
  emitter_not_ends_with_nocase?: InputMaybe<Scalars['String']>
  emitter_not_in?: InputMaybe<Array<Scalars['String']>>
  emitter_not_starts_with?: InputMaybe<Scalars['String']>
  emitter_not_starts_with_nocase?: InputMaybe<Scalars['String']>
  emitter_starts_with?: InputMaybe<Scalars['String']>
  emitter_starts_with_nocase?: InputMaybe<Scalars['String']>
  feeAndDeposit?: InputMaybe<Scalars['BigInt']>
  feeAndDeposit_gt?: InputMaybe<Scalars['BigInt']>
  feeAndDeposit_gte?: InputMaybe<Scalars['BigInt']>
  feeAndDeposit_in?: InputMaybe<Array<Scalars['BigInt']>>
  feeAndDeposit_lt?: InputMaybe<Scalars['BigInt']>
  feeAndDeposit_lte?: InputMaybe<Scalars['BigInt']>
  feeAndDeposit_not?: InputMaybe<Scalars['BigInt']>
  feeAndDeposit_not_in?: InputMaybe<Array<Scalars['BigInt']>>
  id?: InputMaybe<Scalars['ID']>
  id_gt?: InputMaybe<Scalars['ID']>
  id_gte?: InputMaybe<Scalars['ID']>
  id_in?: InputMaybe<Array<Scalars['ID']>>
  id_lt?: InputMaybe<Scalars['ID']>
  id_lte?: InputMaybe<Scalars['ID']>
  id_not?: InputMaybe<Scalars['ID']>
  id_not_in?: InputMaybe<Array<Scalars['ID']>>
  klerosDeposit?: InputMaybe<Scalars['BigInt']>
  klerosDeposit_gt?: InputMaybe<Scalars['BigInt']>
  klerosDeposit_gte?: InputMaybe<Scalars['BigInt']>
  klerosDeposit_in?: InputMaybe<Array<Scalars['BigInt']>>
  klerosDeposit_lt?: InputMaybe<Scalars['BigInt']>
  klerosDeposit_lte?: InputMaybe<Scalars['BigInt']>
  klerosDeposit_not?: InputMaybe<Scalars['BigInt']>
  klerosDeposit_not_in?: InputMaybe<Array<Scalars['BigInt']>>
  klerosMetadataURL?: InputMaybe<Scalars['String']>
  klerosMetadataURL_contains?: InputMaybe<Scalars['String']>
  klerosMetadataURL_contains_nocase?: InputMaybe<Scalars['String']>
  klerosMetadataURL_ends_with?: InputMaybe<Scalars['String']>
  klerosMetadataURL_ends_with_nocase?: InputMaybe<Scalars['String']>
  klerosMetadataURL_gt?: InputMaybe<Scalars['String']>
  klerosMetadataURL_gte?: InputMaybe<Scalars['String']>
  klerosMetadataURL_in?: InputMaybe<Array<Scalars['String']>>
  klerosMetadataURL_lt?: InputMaybe<Scalars['String']>
  klerosMetadataURL_lte?: InputMaybe<Scalars['String']>
  klerosMetadataURL_not?: InputMaybe<Scalars['String']>
  klerosMetadataURL_not_contains?: InputMaybe<Scalars['String']>
  klerosMetadataURL_not_contains_nocase?: InputMaybe<Scalars['String']>
  klerosMetadataURL_not_ends_with?: InputMaybe<Scalars['String']>
  klerosMetadataURL_not_ends_with_nocase?: InputMaybe<Scalars['String']>
  klerosMetadataURL_not_in?: InputMaybe<Array<Scalars['String']>>
  klerosMetadataURL_not_starts_with?: InputMaybe<Scalars['String']>
  klerosMetadataURL_not_starts_with_nocase?: InputMaybe<Scalars['String']>
  klerosMetadataURL_starts_with?: InputMaybe<Scalars['String']>
  klerosMetadataURL_starts_with_nocase?: InputMaybe<Scalars['String']>
  klerosTCRList?: InputMaybe<Scalars['Bytes']>
  klerosTCRList_contains?: InputMaybe<Scalars['Bytes']>
  klerosTCRList_in?: InputMaybe<Array<Scalars['Bytes']>>
  klerosTCRList_not?: InputMaybe<Scalars['Bytes']>
  klerosTCRList_not_contains?: InputMaybe<Scalars['Bytes']>
  klerosTCRList_not_in?: InputMaybe<Array<Scalars['Bytes']>>
  metadataURL?: InputMaybe<Scalars['String']>
  metadataURL_contains?: InputMaybe<Scalars['String']>
  metadataURL_contains_nocase?: InputMaybe<Scalars['String']>
  metadataURL_ends_with?: InputMaybe<Scalars['String']>
  metadataURL_ends_with_nocase?: InputMaybe<Scalars['String']>
  metadataURL_gt?: InputMaybe<Scalars['String']>
  metadataURL_gte?: InputMaybe<Scalars['String']>
  metadataURL_in?: InputMaybe<Array<Scalars['String']>>
  metadataURL_lt?: InputMaybe<Scalars['String']>
  metadataURL_lte?: InputMaybe<Scalars['String']>
  metadataURL_not?: InputMaybe<Scalars['String']>
  metadataURL_not_contains?: InputMaybe<Scalars['String']>
  metadataURL_not_contains_nocase?: InputMaybe<Scalars['String']>
  metadataURL_not_ends_with?: InputMaybe<Scalars['String']>
  metadataURL_not_ends_with_nocase?: InputMaybe<Scalars['String']>
  metadataURL_not_in?: InputMaybe<Array<Scalars['String']>>
  metadataURL_not_starts_with?: InputMaybe<Scalars['String']>
  metadataURL_not_starts_with_nocase?: InputMaybe<Scalars['String']>
  metadataURL_starts_with?: InputMaybe<Scalars['String']>
  metadataURL_starts_with_nocase?: InputMaybe<Scalars['String']>
  mintCost?: InputMaybe<Scalars['BigInt']>
  mintCost_gt?: InputMaybe<Scalars['BigInt']>
  mintCost_gte?: InputMaybe<Scalars['BigInt']>
  mintCost_in?: InputMaybe<Array<Scalars['BigInt']>>
  mintCost_lt?: InputMaybe<Scalars['BigInt']>
  mintCost_lte?: InputMaybe<Scalars['BigInt']>
  mintCost_not?: InputMaybe<Scalars['BigInt']>
  mintCost_not_in?: InputMaybe<Array<Scalars['BigInt']>>
  mintFee?: InputMaybe<Scalars['BigInt']>
  mintFee_gt?: InputMaybe<Scalars['BigInt']>
  mintFee_gte?: InputMaybe<Scalars['BigInt']>
  mintFee_in?: InputMaybe<Array<Scalars['BigInt']>>
  mintFee_lt?: InputMaybe<Scalars['BigInt']>
  mintFee_lte?: InputMaybe<Scalars['BigInt']>
  mintFee_not?: InputMaybe<Scalars['BigInt']>
  mintFee_not_in?: InputMaybe<Array<Scalars['BigInt']>>
  mintedBadges_?: InputMaybe<Badge_Filter>
  paused?: InputMaybe<Scalars['Boolean']>
  paused_in?: InputMaybe<Array<Scalars['Boolean']>>
  paused_not?: InputMaybe<Scalars['Boolean']>
  paused_not_in?: InputMaybe<Array<Scalars['Boolean']>>
  type?: InputMaybe<TypeOfBadge>
  type_in?: InputMaybe<Array<TypeOfBadge>>
  type_not?: InputMaybe<TypeOfBadge>
  type_not_in?: InputMaybe<Array<TypeOfBadge>>
  validFor?: InputMaybe<Scalars['BigInt']>
  validFor_gt?: InputMaybe<Scalars['BigInt']>
  validFor_gte?: InputMaybe<Scalars['BigInt']>
  validFor_in?: InputMaybe<Array<Scalars['BigInt']>>
  validFor_lt?: InputMaybe<Scalars['BigInt']>
  validFor_lte?: InputMaybe<Scalars['BigInt']>
  validFor_not?: InputMaybe<Scalars['BigInt']>
  validFor_not_in?: InputMaybe<Array<Scalars['BigInt']>>
}

export enum BadgeType_OrderBy {
  BadgesMintedAmount = 'badgesMintedAmount',
  Curator = 'curator',
  Emitter = 'emitter',
  FeeAndDeposit = 'feeAndDeposit',
  Id = 'id',
  KlerosDeposit = 'klerosDeposit',
  KlerosMetadataUrl = 'klerosMetadataURL',
  KlerosTcrList = 'klerosTCRList',
  MetadataUrl = 'metadataURL',
  MintCost = 'mintCost',
  MintFee = 'mintFee',
  MintedBadges = 'mintedBadges',
  Paused = 'paused',
  Type = 'type',
  ValidFor = 'validFor',
}

export type Badge_Filter = {
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>
  badgeType?: InputMaybe<Scalars['String']>
  badgeType_?: InputMaybe<BadgeType_Filter>
  badgeType_contains?: InputMaybe<Scalars['String']>
  badgeType_contains_nocase?: InputMaybe<Scalars['String']>
  badgeType_ends_with?: InputMaybe<Scalars['String']>
  badgeType_ends_with_nocase?: InputMaybe<Scalars['String']>
  badgeType_gt?: InputMaybe<Scalars['String']>
  badgeType_gte?: InputMaybe<Scalars['String']>
  badgeType_in?: InputMaybe<Array<Scalars['String']>>
  badgeType_lt?: InputMaybe<Scalars['String']>
  badgeType_lte?: InputMaybe<Scalars['String']>
  badgeType_not?: InputMaybe<Scalars['String']>
  badgeType_not_contains?: InputMaybe<Scalars['String']>
  badgeType_not_contains_nocase?: InputMaybe<Scalars['String']>
  badgeType_not_ends_with?: InputMaybe<Scalars['String']>
  badgeType_not_ends_with_nocase?: InputMaybe<Scalars['String']>
  badgeType_not_in?: InputMaybe<Array<Scalars['String']>>
  badgeType_not_starts_with?: InputMaybe<Scalars['String']>
  badgeType_not_starts_with_nocase?: InputMaybe<Scalars['String']>
  badgeType_starts_with?: InputMaybe<Scalars['String']>
  badgeType_starts_with_nocase?: InputMaybe<Scalars['String']>
  evidenceMetadataUrl?: InputMaybe<Scalars['String']>
  evidenceMetadataUrl_contains?: InputMaybe<Scalars['String']>
  evidenceMetadataUrl_contains_nocase?: InputMaybe<Scalars['String']>
  evidenceMetadataUrl_ends_with?: InputMaybe<Scalars['String']>
  evidenceMetadataUrl_ends_with_nocase?: InputMaybe<Scalars['String']>
  evidenceMetadataUrl_gt?: InputMaybe<Scalars['String']>
  evidenceMetadataUrl_gte?: InputMaybe<Scalars['String']>
  evidenceMetadataUrl_in?: InputMaybe<Array<Scalars['String']>>
  evidenceMetadataUrl_lt?: InputMaybe<Scalars['String']>
  evidenceMetadataUrl_lte?: InputMaybe<Scalars['String']>
  evidenceMetadataUrl_not?: InputMaybe<Scalars['String']>
  evidenceMetadataUrl_not_contains?: InputMaybe<Scalars['String']>
  evidenceMetadataUrl_not_contains_nocase?: InputMaybe<Scalars['String']>
  evidenceMetadataUrl_not_ends_with?: InputMaybe<Scalars['String']>
  evidenceMetadataUrl_not_ends_with_nocase?: InputMaybe<Scalars['String']>
  evidenceMetadataUrl_not_in?: InputMaybe<Array<Scalars['String']>>
  evidenceMetadataUrl_not_starts_with?: InputMaybe<Scalars['String']>
  evidenceMetadataUrl_not_starts_with_nocase?: InputMaybe<Scalars['String']>
  evidenceMetadataUrl_starts_with?: InputMaybe<Scalars['String']>
  evidenceMetadataUrl_starts_with_nocase?: InputMaybe<Scalars['String']>
  id?: InputMaybe<Scalars['ID']>
  id_gt?: InputMaybe<Scalars['ID']>
  id_gte?: InputMaybe<Scalars['ID']>
  id_in?: InputMaybe<Array<Scalars['ID']>>
  id_lt?: InputMaybe<Scalars['ID']>
  id_lte?: InputMaybe<Scalars['ID']>
  id_not?: InputMaybe<Scalars['ID']>
  id_not_in?: InputMaybe<Array<Scalars['ID']>>
  status?: InputMaybe<BadgeStatus>
  status_in?: InputMaybe<Array<BadgeStatus>>
  status_not?: InputMaybe<BadgeStatus>
  status_not_in?: InputMaybe<Array<BadgeStatus>>
  user?: InputMaybe<Scalars['String']>
  user_?: InputMaybe<User_Filter>
  user_contains?: InputMaybe<Scalars['String']>
  user_contains_nocase?: InputMaybe<Scalars['String']>
  user_ends_with?: InputMaybe<Scalars['String']>
  user_ends_with_nocase?: InputMaybe<Scalars['String']>
  user_gt?: InputMaybe<Scalars['String']>
  user_gte?: InputMaybe<Scalars['String']>
  user_in?: InputMaybe<Array<Scalars['String']>>
  user_lt?: InputMaybe<Scalars['String']>
  user_lte?: InputMaybe<Scalars['String']>
  user_not?: InputMaybe<Scalars['String']>
  user_not_contains?: InputMaybe<Scalars['String']>
  user_not_contains_nocase?: InputMaybe<Scalars['String']>
  user_not_ends_with?: InputMaybe<Scalars['String']>
  user_not_ends_with_nocase?: InputMaybe<Scalars['String']>
  user_not_in?: InputMaybe<Array<Scalars['String']>>
  user_not_starts_with?: InputMaybe<Scalars['String']>
  user_not_starts_with_nocase?: InputMaybe<Scalars['String']>
  user_starts_with?: InputMaybe<Scalars['String']>
  user_starts_with_nocase?: InputMaybe<Scalars['String']>
}

export enum Badge_OrderBy {
  BadgeType = 'badgeType',
  EvidenceMetadataUrl = 'evidenceMetadataUrl',
  Id = 'id',
  Status = 'status',
  User = 'user',
}

export type BlockChangedFilter = {
  number_gte: Scalars['Int']
}

export type Block_Height = {
  hash?: InputMaybe<Scalars['Bytes']>
  number?: InputMaybe<Scalars['Int']>
  number_gte?: InputMaybe<Scalars['Int']>
}

export enum Curator {
  Kleros = 'Kleros',
}

export type Emitter = {
  __typename?: 'Emitter'
  badgeTypes?: Maybe<Array<BadgeType>>
  creator: Scalars['Bytes']
  id: Scalars['Bytes']
  isVerified: Scalars['Boolean']
  metadata: Scalars['String']
}

export type EmitterBadgeTypesArgs = {
  first?: InputMaybe<Scalars['Int']>
  orderBy?: InputMaybe<BadgeType_OrderBy>
  orderDirection?: InputMaybe<OrderDirection>
  skip?: InputMaybe<Scalars['Int']>
  where?: InputMaybe<BadgeType_Filter>
}

export type Emitter_Filter = {
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>
  badgeTypes_?: InputMaybe<BadgeType_Filter>
  creator?: InputMaybe<Scalars['Bytes']>
  creator_contains?: InputMaybe<Scalars['Bytes']>
  creator_in?: InputMaybe<Array<Scalars['Bytes']>>
  creator_not?: InputMaybe<Scalars['Bytes']>
  creator_not_contains?: InputMaybe<Scalars['Bytes']>
  creator_not_in?: InputMaybe<Array<Scalars['Bytes']>>
  id?: InputMaybe<Scalars['Bytes']>
  id_contains?: InputMaybe<Scalars['Bytes']>
  id_in?: InputMaybe<Array<Scalars['Bytes']>>
  id_not?: InputMaybe<Scalars['Bytes']>
  id_not_contains?: InputMaybe<Scalars['Bytes']>
  id_not_in?: InputMaybe<Array<Scalars['Bytes']>>
  isVerified?: InputMaybe<Scalars['Boolean']>
  isVerified_in?: InputMaybe<Array<Scalars['Boolean']>>
  isVerified_not?: InputMaybe<Scalars['Boolean']>
  isVerified_not_in?: InputMaybe<Array<Scalars['Boolean']>>
  metadata?: InputMaybe<Scalars['String']>
  metadata_contains?: InputMaybe<Scalars['String']>
  metadata_contains_nocase?: InputMaybe<Scalars['String']>
  metadata_ends_with?: InputMaybe<Scalars['String']>
  metadata_ends_with_nocase?: InputMaybe<Scalars['String']>
  metadata_gt?: InputMaybe<Scalars['String']>
  metadata_gte?: InputMaybe<Scalars['String']>
  metadata_in?: InputMaybe<Array<Scalars['String']>>
  metadata_lt?: InputMaybe<Scalars['String']>
  metadata_lte?: InputMaybe<Scalars['String']>
  metadata_not?: InputMaybe<Scalars['String']>
  metadata_not_contains?: InputMaybe<Scalars['String']>
  metadata_not_contains_nocase?: InputMaybe<Scalars['String']>
  metadata_not_ends_with?: InputMaybe<Scalars['String']>
  metadata_not_ends_with_nocase?: InputMaybe<Scalars['String']>
  metadata_not_in?: InputMaybe<Array<Scalars['String']>>
  metadata_not_starts_with?: InputMaybe<Scalars['String']>
  metadata_not_starts_with_nocase?: InputMaybe<Scalars['String']>
  metadata_starts_with?: InputMaybe<Scalars['String']>
  metadata_starts_with_nocase?: InputMaybe<Scalars['String']>
}

export enum Emitter_OrderBy {
  BadgeTypes = 'badgeTypes',
  Creator = 'creator',
  Id = 'id',
  IsVerified = 'isVerified',
  Metadata = 'metadata',
}

/** Defines the order direction, either ascending or descending */
export enum OrderDirection {
  Asc = 'asc',
  Desc = 'desc',
}

export type Query = {
  __typename?: 'Query'
  /** Access to subgraph metadata */
  _meta?: Maybe<_Meta_>
  badge?: Maybe<Badge>
  badgeType?: Maybe<BadgeType>
  badgeTypes: Array<BadgeType>
  badges: Array<Badge>
  emitter?: Maybe<Emitter>
  emitters: Array<Emitter>
  user?: Maybe<User>
  users: Array<User>
}

export type Query_MetaArgs = {
  block?: InputMaybe<Block_Height>
}

export type QueryBadgeArgs = {
  block?: InputMaybe<Block_Height>
  id: Scalars['ID']
  subgraphError?: _SubgraphErrorPolicy_
}

export type QueryBadgeTypeArgs = {
  block?: InputMaybe<Block_Height>
  id: Scalars['ID']
  subgraphError?: _SubgraphErrorPolicy_
}

export type QueryBadgeTypesArgs = {
  block?: InputMaybe<Block_Height>
  first?: InputMaybe<Scalars['Int']>
  orderBy?: InputMaybe<BadgeType_OrderBy>
  orderDirection?: InputMaybe<OrderDirection>
  skip?: InputMaybe<Scalars['Int']>
  subgraphError?: _SubgraphErrorPolicy_
  where?: InputMaybe<BadgeType_Filter>
}

export type QueryBadgesArgs = {
  block?: InputMaybe<Block_Height>
  first?: InputMaybe<Scalars['Int']>
  orderBy?: InputMaybe<Badge_OrderBy>
  orderDirection?: InputMaybe<OrderDirection>
  skip?: InputMaybe<Scalars['Int']>
  subgraphError?: _SubgraphErrorPolicy_
  where?: InputMaybe<Badge_Filter>
}

export type QueryEmitterArgs = {
  block?: InputMaybe<Block_Height>
  id: Scalars['ID']
  subgraphError?: _SubgraphErrorPolicy_
}

export type QueryEmittersArgs = {
  block?: InputMaybe<Block_Height>
  first?: InputMaybe<Scalars['Int']>
  orderBy?: InputMaybe<Emitter_OrderBy>
  orderDirection?: InputMaybe<OrderDirection>
  skip?: InputMaybe<Scalars['Int']>
  subgraphError?: _SubgraphErrorPolicy_
  where?: InputMaybe<Emitter_Filter>
}

export type QueryUserArgs = {
  block?: InputMaybe<Block_Height>
  id: Scalars['ID']
  subgraphError?: _SubgraphErrorPolicy_
}

export type QueryUsersArgs = {
  block?: InputMaybe<Block_Height>
  first?: InputMaybe<Scalars['Int']>
  orderBy?: InputMaybe<User_OrderBy>
  orderDirection?: InputMaybe<OrderDirection>
  skip?: InputMaybe<Scalars['Int']>
  subgraphError?: _SubgraphErrorPolicy_
  where?: InputMaybe<User_Filter>
}

export type Subscription = {
  __typename?: 'Subscription'
  /** Access to subgraph metadata */
  _meta?: Maybe<_Meta_>
  badge?: Maybe<Badge>
  badgeType?: Maybe<BadgeType>
  badgeTypes: Array<BadgeType>
  badges: Array<Badge>
  emitter?: Maybe<Emitter>
  emitters: Array<Emitter>
  user?: Maybe<User>
  users: Array<User>
}

export type Subscription_MetaArgs = {
  block?: InputMaybe<Block_Height>
}

export type SubscriptionBadgeArgs = {
  block?: InputMaybe<Block_Height>
  id: Scalars['ID']
  subgraphError?: _SubgraphErrorPolicy_
}

export type SubscriptionBadgeTypeArgs = {
  block?: InputMaybe<Block_Height>
  id: Scalars['ID']
  subgraphError?: _SubgraphErrorPolicy_
}

export type SubscriptionBadgeTypesArgs = {
  block?: InputMaybe<Block_Height>
  first?: InputMaybe<Scalars['Int']>
  orderBy?: InputMaybe<BadgeType_OrderBy>
  orderDirection?: InputMaybe<OrderDirection>
  skip?: InputMaybe<Scalars['Int']>
  subgraphError?: _SubgraphErrorPolicy_
  where?: InputMaybe<BadgeType_Filter>
}

export type SubscriptionBadgesArgs = {
  block?: InputMaybe<Block_Height>
  first?: InputMaybe<Scalars['Int']>
  orderBy?: InputMaybe<Badge_OrderBy>
  orderDirection?: InputMaybe<OrderDirection>
  skip?: InputMaybe<Scalars['Int']>
  subgraphError?: _SubgraphErrorPolicy_
  where?: InputMaybe<Badge_Filter>
}

export type SubscriptionEmitterArgs = {
  block?: InputMaybe<Block_Height>
  id: Scalars['ID']
  subgraphError?: _SubgraphErrorPolicy_
}

export type SubscriptionEmittersArgs = {
  block?: InputMaybe<Block_Height>
  first?: InputMaybe<Scalars['Int']>
  orderBy?: InputMaybe<Emitter_OrderBy>
  orderDirection?: InputMaybe<OrderDirection>
  skip?: InputMaybe<Scalars['Int']>
  subgraphError?: _SubgraphErrorPolicy_
  where?: InputMaybe<Emitter_Filter>
}

export type SubscriptionUserArgs = {
  block?: InputMaybe<Block_Height>
  id: Scalars['ID']
  subgraphError?: _SubgraphErrorPolicy_
}

export type SubscriptionUsersArgs = {
  block?: InputMaybe<Block_Height>
  first?: InputMaybe<Scalars['Int']>
  orderBy?: InputMaybe<User_OrderBy>
  orderDirection?: InputMaybe<OrderDirection>
  skip?: InputMaybe<Scalars['Int']>
  subgraphError?: _SubgraphErrorPolicy_
  where?: InputMaybe<User_Filter>
}

export enum TypeOfBadge {
  Custom = 'Custom',
  OffChain = 'OffChain',
}

export type User = {
  __typename?: 'User'
  badges: Array<Badge>
  id: Scalars['Bytes']
  mintedBadges: Scalars['BigInt']
}

export type UserBadgesArgs = {
  first?: InputMaybe<Scalars['Int']>
  orderBy?: InputMaybe<Badge_OrderBy>
  orderDirection?: InputMaybe<OrderDirection>
  skip?: InputMaybe<Scalars['Int']>
  where?: InputMaybe<Badge_Filter>
}

export type User_Filter = {
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>
  badges?: InputMaybe<Array<Scalars['String']>>
  badges_?: InputMaybe<Badge_Filter>
  badges_contains?: InputMaybe<Array<Scalars['String']>>
  badges_contains_nocase?: InputMaybe<Array<Scalars['String']>>
  badges_not?: InputMaybe<Array<Scalars['String']>>
  badges_not_contains?: InputMaybe<Array<Scalars['String']>>
  badges_not_contains_nocase?: InputMaybe<Array<Scalars['String']>>
  id?: InputMaybe<Scalars['Bytes']>
  id_contains?: InputMaybe<Scalars['Bytes']>
  id_in?: InputMaybe<Array<Scalars['Bytes']>>
  id_not?: InputMaybe<Scalars['Bytes']>
  id_not_contains?: InputMaybe<Scalars['Bytes']>
  id_not_in?: InputMaybe<Array<Scalars['Bytes']>>
  mintedBadges?: InputMaybe<Scalars['BigInt']>
  mintedBadges_gt?: InputMaybe<Scalars['BigInt']>
  mintedBadges_gte?: InputMaybe<Scalars['BigInt']>
  mintedBadges_in?: InputMaybe<Array<Scalars['BigInt']>>
  mintedBadges_lt?: InputMaybe<Scalars['BigInt']>
  mintedBadges_lte?: InputMaybe<Scalars['BigInt']>
  mintedBadges_not?: InputMaybe<Scalars['BigInt']>
  mintedBadges_not_in?: InputMaybe<Array<Scalars['BigInt']>>
}

export enum User_OrderBy {
  Badges = 'badges',
  Id = 'id',
  MintedBadges = 'mintedBadges',
}

export type _Block_ = {
  __typename?: '_Block_'
  /** The hash of the block */
  hash?: Maybe<Scalars['Bytes']>
  /** The block number */
  number: Scalars['Int']
  /** Integer representation of the timestamp stored in blocks for the chain */
  timestamp?: Maybe<Scalars['Int']>
}

/** The type for the top-level _meta field */
export type _Meta_ = {
  __typename?: '_Meta_'
  /**
   * Information about a specific subgraph block. The hash of the block
   * will be null if the _meta field has a block constraint that asks for
   * a block number. It will be filled if the _meta field has no block constraint
   * and therefore asks for the latest  block
   *
   */
  block: _Block_
  /** The deployment ID */
  deployment: Scalars['String']
  /** If `true`, the subgraph encountered indexing errors at some past block */
  hasIndexingErrors: Scalars['Boolean']
}

export enum _SubgraphErrorPolicy_ {
  /** Data will be returned even if the subgraph has indexing errors */
  Allow = 'allow',
  /** If the subgraph has indexing errors, data will be omitted. The default. */
  Deny = 'deny',
}

export type SubgraphErrorsQueryVariables = Exact<{ [key: string]: never }>

export type SubgraphErrorsQuery = {
  __typename?: 'Query'
  _meta?: { __typename?: '_Meta_'; hasIndexingErrors: boolean } | null
}

export const SubgraphErrorsDocument = gql`
  query subgraphErrors {
    _meta {
      hasIndexingErrors
    }
  }
`

export type SdkFunctionWrapper = <T>(
  action: (requestHeaders?: Record<string, string>) => Promise<T>,
  operationName: string,
  operationType?: string,
) => Promise<T>

const defaultWrapper: SdkFunctionWrapper = (action, _operationName, _operationType) => action()

export function getSdk(client: GraphQLClient, withWrapper: SdkFunctionWrapper = defaultWrapper) {
  return {
    subgraphErrors(
      variables?: SubgraphErrorsQueryVariables,
      requestHeaders?: Dom.RequestInit['headers'],
    ): Promise<SubgraphErrorsQuery> {
      return withWrapper(
        (wrappedRequestHeaders) =>
          client.request<SubgraphErrorsQuery>(SubgraphErrorsDocument, variables, {
            ...requestHeaders,
            ...wrappedRequestHeaders,
          }),
        'subgraphErrors',
        'query',
      )
    },
  }
}
export type Sdk = ReturnType<typeof getSdk>
export function getSdkWithHooks(
  client: GraphQLClient,
  withWrapper: SdkFunctionWrapper = defaultWrapper,
) {
  const sdk = getSdk(client, withWrapper)
  const genKey = <V extends Record<string, unknown> = Record<string, unknown>>(
    name: string,
    object: V = {} as V,
  ): SWRKeyInterface => [
    name,
    ...Object.keys(object)
      .sort()
      .map((key) => object[key]),
  ]
  return {
    ...sdk,
    useSubgraphErrors(
      variables?: SubgraphErrorsQueryVariables,
      config?: SWRConfigInterface<SubgraphErrorsQuery, ClientError>,
    ) {
      return useSWR<SubgraphErrorsQuery, ClientError>(
        genKey<SubgraphErrorsQueryVariables>('SubgraphErrors', variables),
        () => sdk.subgraphErrors(variables),
        config,
      )
    },
  }
}
export type SdkWithHooks = ReturnType<typeof getSdkWithHooks>
