/* eslint-disable */
import { gql } from '@apollo/client';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  /** A date string, such as 2007-12-03 (YYYY-MM-DD), compliant with ISO 8601 standard for representation of dates using the Gregorian calendar. */
  Date: any;
  /** A date-time string at UTC, such as 2007-12-03T10:15:30Z, compliant with the date-timeformat outlined in section 5.6 of the RFC 3339 profile of the ISO 8601 standard for representationof dates and times using the Gregorian calendar. */
  DateTime: any;
  Hex: any;
  /** Raw JSON value */
  Json: any;
  /** The Long scalar type represents non-fractional signed whole numeric values. Long can represent values between -(2^63) and 2^63 - 1. */
  Long: any;
  RGBAHue: any;
  RGBATransparency: any;
  /** Slate-compatible RichText AST */
  RichTextAST: any;
};

export type Aggregate = {
  __typename?: 'Aggregate';
  count: Scalars['Int'];
};

/** Asset system model */
export type Asset = Node & {
  __typename?: 'Asset';
  /** The time the document was created */
  createdAt: Scalars['DateTime'];
  /** User that created this document */
  createdBy?: Maybe<User>;
  /** Get the document in other stages */
  documentInStages: Array<Asset>;
  /** The file name */
  fileName: Scalars['String'];
  /** The file handle */
  handle: Scalars['String'];
  /** The height of the file */
  height?: Maybe<Scalars['Float']>;
  /** List of Asset versions */
  history: Array<Version>;
  /** The unique identifier */
  id: Scalars['ID'];
  imageGPU: Array<Gpu>;
  imagesCPU: Array<Cpu>;
  imagesLaptop: Array<Laptop>;
  imagesMotherboard: Array<Motherboard>;
  imagesStorageEquipment: Array<StorageEquipment>;
  /** System Locale field */
  locale: Locale;
  /** Get the other localizations for this document */
  localizations: Array<Asset>;
  /** The mime type of the file */
  mimeType?: Maybe<Scalars['String']>;
  /** The time the document was published. Null on documents in draft stage. */
  publishedAt?: Maybe<Scalars['DateTime']>;
  /** User that last published this document */
  publishedBy?: Maybe<User>;
  scheduledIn: Array<ScheduledOperation>;
  /** The file size */
  size?: Maybe<Scalars['Float']>;
  /** System stage field */
  stage: Stage;
  /** The time the document was updated */
  updatedAt: Scalars['DateTime'];
  /** User that last updated this document */
  updatedBy?: Maybe<User>;
  /** Get the url for the asset with provided transformations applied. */
  url: Scalars['String'];
  /** The file width */
  width?: Maybe<Scalars['Float']>;
};


/** Asset system model */
export type AssetCreatedAtArgs = {
  variation?: SystemDateTimeFieldVariation;
};


/** Asset system model */
export type AssetCreatedByArgs = {
  locales?: InputMaybe<Array<Locale>>;
};


/** Asset system model */
export type AssetDocumentInStagesArgs = {
  includeCurrent?: Scalars['Boolean'];
  inheritLocale?: Scalars['Boolean'];
  stages?: Array<Stage>;
};


/** Asset system model */
export type AssetHistoryArgs = {
  limit?: Scalars['Int'];
  skip?: Scalars['Int'];
  stageOverride?: InputMaybe<Stage>;
};


/** Asset system model */
export type AssetImageGpuArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  locales?: InputMaybe<Array<Locale>>;
  orderBy?: InputMaybe<GpuOrderByInput>;
  skip?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<GpuWhereInput>;
};


/** Asset system model */
export type AssetImagesCpuArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  locales?: InputMaybe<Array<Locale>>;
  orderBy?: InputMaybe<CpuOrderByInput>;
  skip?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<CpuWhereInput>;
};


/** Asset system model */
export type AssetImagesLaptopArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  locales?: InputMaybe<Array<Locale>>;
  orderBy?: InputMaybe<LaptopOrderByInput>;
  skip?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<LaptopWhereInput>;
};


/** Asset system model */
export type AssetImagesMotherboardArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  locales?: InputMaybe<Array<Locale>>;
  orderBy?: InputMaybe<MotherboardOrderByInput>;
  skip?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<MotherboardWhereInput>;
};


/** Asset system model */
export type AssetImagesStorageEquipmentArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  locales?: InputMaybe<Array<Locale>>;
  orderBy?: InputMaybe<StorageEquipmentOrderByInput>;
  skip?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<StorageEquipmentWhereInput>;
};


/** Asset system model */
export type AssetLocalizationsArgs = {
  includeCurrent?: Scalars['Boolean'];
  locales?: Array<Locale>;
};


/** Asset system model */
export type AssetPublishedAtArgs = {
  variation?: SystemDateTimeFieldVariation;
};


/** Asset system model */
export type AssetPublishedByArgs = {
  locales?: InputMaybe<Array<Locale>>;
};


/** Asset system model */
export type AssetScheduledInArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  locales?: InputMaybe<Array<Locale>>;
  skip?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<ScheduledOperationWhereInput>;
};


/** Asset system model */
export type AssetUpdatedAtArgs = {
  variation?: SystemDateTimeFieldVariation;
};


/** Asset system model */
export type AssetUpdatedByArgs = {
  locales?: InputMaybe<Array<Locale>>;
};


/** Asset system model */
export type AssetUrlArgs = {
  transformation?: InputMaybe<AssetTransformationInput>;
};

export type AssetConnectInput = {
  /** Allow to specify document position in list of connected documents, will default to appending at end of list */
  position?: InputMaybe<ConnectPositionInput>;
  /** Document to connect */
  where: AssetWhereUniqueInput;
};

/** A connection to a list of items. */
export type AssetConnection = {
  __typename?: 'AssetConnection';
  aggregate: Aggregate;
  /** A list of edges. */
  edges: Array<AssetEdge>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
};

export type AssetCreateInput = {
  createdAt?: InputMaybe<Scalars['DateTime']>;
  fileName: Scalars['String'];
  handle: Scalars['String'];
  height?: InputMaybe<Scalars['Float']>;
  imageGPU?: InputMaybe<GpuCreateManyInlineInput>;
  imagesCPU?: InputMaybe<CpuCreateManyInlineInput>;
  imagesLaptop?: InputMaybe<LaptopCreateManyInlineInput>;
  imagesMotherboard?: InputMaybe<MotherboardCreateManyInlineInput>;
  imagesStorageEquipment?: InputMaybe<StorageEquipmentCreateManyInlineInput>;
  /** Inline mutations for managing document localizations excluding the default locale */
  localizations?: InputMaybe<AssetCreateLocalizationsInput>;
  mimeType?: InputMaybe<Scalars['String']>;
  size?: InputMaybe<Scalars['Float']>;
  updatedAt?: InputMaybe<Scalars['DateTime']>;
  width?: InputMaybe<Scalars['Float']>;
};

export type AssetCreateLocalizationDataInput = {
  createdAt?: InputMaybe<Scalars['DateTime']>;
  fileName: Scalars['String'];
  handle: Scalars['String'];
  height?: InputMaybe<Scalars['Float']>;
  mimeType?: InputMaybe<Scalars['String']>;
  size?: InputMaybe<Scalars['Float']>;
  updatedAt?: InputMaybe<Scalars['DateTime']>;
  width?: InputMaybe<Scalars['Float']>;
};

export type AssetCreateLocalizationInput = {
  /** Localization input */
  data: AssetCreateLocalizationDataInput;
  locale: Locale;
};

export type AssetCreateLocalizationsInput = {
  /** Create localizations for the newly-created document */
  create?: InputMaybe<Array<AssetCreateLocalizationInput>>;
};

export type AssetCreateManyInlineInput = {
  /** Connect multiple existing Asset documents */
  connect?: InputMaybe<Array<AssetWhereUniqueInput>>;
  /** Create and connect multiple existing Asset documents */
  create?: InputMaybe<Array<AssetCreateInput>>;
};

export type AssetCreateOneInlineInput = {
  /** Connect one existing Asset document */
  connect?: InputMaybe<AssetWhereUniqueInput>;
  /** Create and connect one Asset document */
  create?: InputMaybe<AssetCreateInput>;
};

/** An edge in a connection. */
export type AssetEdge = {
  __typename?: 'AssetEdge';
  /** A cursor for use in pagination. */
  cursor: Scalars['String'];
  /** The item at the end of the edge. */
  node: Asset;
};

/** Identifies documents */
export type AssetManyWhereInput = {
  /** Logical AND on all given filters. */
  AND?: InputMaybe<Array<AssetWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: InputMaybe<Array<AssetWhereInput>>;
  /** Logical OR on all given filters. */
  OR?: InputMaybe<Array<AssetWhereInput>>;
  /** Contains search across all appropriate fields. */
  _search?: InputMaybe<Scalars['String']>;
  createdAt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  createdAt_gt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  createdAt_gte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  createdAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  /** All values less than the given value. */
  createdAt_lt?: InputMaybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  createdAt_lte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  createdAt_not?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not contained in given list. */
  createdAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  createdBy?: InputMaybe<UserWhereInput>;
  documentInStages_every?: InputMaybe<AssetWhereStageInput>;
  documentInStages_none?: InputMaybe<AssetWhereStageInput>;
  documentInStages_some?: InputMaybe<AssetWhereStageInput>;
  id?: InputMaybe<Scalars['ID']>;
  /** All values containing the given string. */
  id_contains?: InputMaybe<Scalars['ID']>;
  /** All values ending with the given string. */
  id_ends_with?: InputMaybe<Scalars['ID']>;
  /** All values that are contained in given list. */
  id_in?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  /** All values that are not equal to given value. */
  id_not?: InputMaybe<Scalars['ID']>;
  /** All values not containing the given string. */
  id_not_contains?: InputMaybe<Scalars['ID']>;
  /** All values not ending with the given string */
  id_not_ends_with?: InputMaybe<Scalars['ID']>;
  /** All values that are not contained in given list. */
  id_not_in?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  /** All values not starting with the given string. */
  id_not_starts_with?: InputMaybe<Scalars['ID']>;
  /** All values starting with the given string. */
  id_starts_with?: InputMaybe<Scalars['ID']>;
  imageGPU_every?: InputMaybe<GpuWhereInput>;
  imageGPU_none?: InputMaybe<GpuWhereInput>;
  imageGPU_some?: InputMaybe<GpuWhereInput>;
  imagesCPU_every?: InputMaybe<CpuWhereInput>;
  imagesCPU_none?: InputMaybe<CpuWhereInput>;
  imagesCPU_some?: InputMaybe<CpuWhereInput>;
  imagesLaptop_every?: InputMaybe<LaptopWhereInput>;
  imagesLaptop_none?: InputMaybe<LaptopWhereInput>;
  imagesLaptop_some?: InputMaybe<LaptopWhereInput>;
  imagesMotherboard_every?: InputMaybe<MotherboardWhereInput>;
  imagesMotherboard_none?: InputMaybe<MotherboardWhereInput>;
  imagesMotherboard_some?: InputMaybe<MotherboardWhereInput>;
  imagesStorageEquipment_every?: InputMaybe<StorageEquipmentWhereInput>;
  imagesStorageEquipment_none?: InputMaybe<StorageEquipmentWhereInput>;
  imagesStorageEquipment_some?: InputMaybe<StorageEquipmentWhereInput>;
  publishedAt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  publishedAt_gt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  publishedAt_gte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  publishedAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  /** All values less than the given value. */
  publishedAt_lt?: InputMaybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  publishedAt_lte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  publishedAt_not?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not contained in given list. */
  publishedAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  publishedBy?: InputMaybe<UserWhereInput>;
  scheduledIn_every?: InputMaybe<ScheduledOperationWhereInput>;
  scheduledIn_none?: InputMaybe<ScheduledOperationWhereInput>;
  scheduledIn_some?: InputMaybe<ScheduledOperationWhereInput>;
  updatedAt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  updatedAt_gt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  updatedAt_gte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  updatedAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  /** All values less than the given value. */
  updatedAt_lt?: InputMaybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  updatedAt_lte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  updatedAt_not?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not contained in given list. */
  updatedAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  updatedBy?: InputMaybe<UserWhereInput>;
};

export enum AssetOrderByInput {
  CreatedAtAsc = 'createdAt_ASC',
  CreatedAtDesc = 'createdAt_DESC',
  FileNameAsc = 'fileName_ASC',
  FileNameDesc = 'fileName_DESC',
  HandleAsc = 'handle_ASC',
  HandleDesc = 'handle_DESC',
  HeightAsc = 'height_ASC',
  HeightDesc = 'height_DESC',
  IdAsc = 'id_ASC',
  IdDesc = 'id_DESC',
  MimeTypeAsc = 'mimeType_ASC',
  MimeTypeDesc = 'mimeType_DESC',
  PublishedAtAsc = 'publishedAt_ASC',
  PublishedAtDesc = 'publishedAt_DESC',
  SizeAsc = 'size_ASC',
  SizeDesc = 'size_DESC',
  UpdatedAtAsc = 'updatedAt_ASC',
  UpdatedAtDesc = 'updatedAt_DESC',
  WidthAsc = 'width_ASC',
  WidthDesc = 'width_DESC'
}

/** Transformations for Assets */
export type AssetTransformationInput = {
  document?: InputMaybe<DocumentTransformationInput>;
  image?: InputMaybe<ImageTransformationInput>;
  /** Pass true if you want to validate the passed transformation parameters */
  validateOptions?: InputMaybe<Scalars['Boolean']>;
};

export type AssetUpdateInput = {
  fileName?: InputMaybe<Scalars['String']>;
  handle?: InputMaybe<Scalars['String']>;
  height?: InputMaybe<Scalars['Float']>;
  imageGPU?: InputMaybe<GpuUpdateManyInlineInput>;
  imagesCPU?: InputMaybe<CpuUpdateManyInlineInput>;
  imagesLaptop?: InputMaybe<LaptopUpdateManyInlineInput>;
  imagesMotherboard?: InputMaybe<MotherboardUpdateManyInlineInput>;
  imagesStorageEquipment?: InputMaybe<StorageEquipmentUpdateManyInlineInput>;
  /** Manage document localizations */
  localizations?: InputMaybe<AssetUpdateLocalizationsInput>;
  mimeType?: InputMaybe<Scalars['String']>;
  size?: InputMaybe<Scalars['Float']>;
  width?: InputMaybe<Scalars['Float']>;
};

export type AssetUpdateLocalizationDataInput = {
  fileName?: InputMaybe<Scalars['String']>;
  handle?: InputMaybe<Scalars['String']>;
  height?: InputMaybe<Scalars['Float']>;
  mimeType?: InputMaybe<Scalars['String']>;
  size?: InputMaybe<Scalars['Float']>;
  width?: InputMaybe<Scalars['Float']>;
};

export type AssetUpdateLocalizationInput = {
  data: AssetUpdateLocalizationDataInput;
  locale: Locale;
};

export type AssetUpdateLocalizationsInput = {
  /** Localizations to create */
  create?: InputMaybe<Array<AssetCreateLocalizationInput>>;
  /** Localizations to delete */
  delete?: InputMaybe<Array<Locale>>;
  /** Localizations to update */
  update?: InputMaybe<Array<AssetUpdateLocalizationInput>>;
  upsert?: InputMaybe<Array<AssetUpsertLocalizationInput>>;
};

export type AssetUpdateManyInlineInput = {
  /** Connect multiple existing Asset documents */
  connect?: InputMaybe<Array<AssetConnectInput>>;
  /** Create and connect multiple Asset documents */
  create?: InputMaybe<Array<AssetCreateInput>>;
  /** Delete multiple Asset documents */
  delete?: InputMaybe<Array<AssetWhereUniqueInput>>;
  /** Disconnect multiple Asset documents */
  disconnect?: InputMaybe<Array<AssetWhereUniqueInput>>;
  /** Override currently-connected documents with multiple existing Asset documents */
  set?: InputMaybe<Array<AssetWhereUniqueInput>>;
  /** Update multiple Asset documents */
  update?: InputMaybe<Array<AssetUpdateWithNestedWhereUniqueInput>>;
  /** Upsert multiple Asset documents */
  upsert?: InputMaybe<Array<AssetUpsertWithNestedWhereUniqueInput>>;
};

export type AssetUpdateManyInput = {
  fileName?: InputMaybe<Scalars['String']>;
  height?: InputMaybe<Scalars['Float']>;
  /** Optional updates to localizations */
  localizations?: InputMaybe<AssetUpdateManyLocalizationsInput>;
  mimeType?: InputMaybe<Scalars['String']>;
  size?: InputMaybe<Scalars['Float']>;
  width?: InputMaybe<Scalars['Float']>;
};

export type AssetUpdateManyLocalizationDataInput = {
  fileName?: InputMaybe<Scalars['String']>;
  height?: InputMaybe<Scalars['Float']>;
  mimeType?: InputMaybe<Scalars['String']>;
  size?: InputMaybe<Scalars['Float']>;
  width?: InputMaybe<Scalars['Float']>;
};

export type AssetUpdateManyLocalizationInput = {
  data: AssetUpdateManyLocalizationDataInput;
  locale: Locale;
};

export type AssetUpdateManyLocalizationsInput = {
  /** Localizations to update */
  update?: InputMaybe<Array<AssetUpdateManyLocalizationInput>>;
};

export type AssetUpdateManyWithNestedWhereInput = {
  /** Update many input */
  data: AssetUpdateManyInput;
  /** Document search */
  where: AssetWhereInput;
};

export type AssetUpdateOneInlineInput = {
  /** Connect existing Asset document */
  connect?: InputMaybe<AssetWhereUniqueInput>;
  /** Create and connect one Asset document */
  create?: InputMaybe<AssetCreateInput>;
  /** Delete currently connected Asset document */
  delete?: InputMaybe<Scalars['Boolean']>;
  /** Disconnect currently connected Asset document */
  disconnect?: InputMaybe<Scalars['Boolean']>;
  /** Update single Asset document */
  update?: InputMaybe<AssetUpdateWithNestedWhereUniqueInput>;
  /** Upsert single Asset document */
  upsert?: InputMaybe<AssetUpsertWithNestedWhereUniqueInput>;
};

export type AssetUpdateWithNestedWhereUniqueInput = {
  /** Document to update */
  data: AssetUpdateInput;
  /** Unique document search */
  where: AssetWhereUniqueInput;
};

export type AssetUpsertInput = {
  /** Create document if it didn't exist */
  create: AssetCreateInput;
  /** Update document if it exists */
  update: AssetUpdateInput;
};

export type AssetUpsertLocalizationInput = {
  create: AssetCreateLocalizationDataInput;
  locale: Locale;
  update: AssetUpdateLocalizationDataInput;
};

export type AssetUpsertWithNestedWhereUniqueInput = {
  /** Upsert data */
  data: AssetUpsertInput;
  /** Unique document search */
  where: AssetWhereUniqueInput;
};

/** This contains a set of filters that can be used to compare values internally */
export type AssetWhereComparatorInput = {
  /** This field can be used to request to check if the entry is outdated by internal comparison */
  outdated_to?: InputMaybe<Scalars['Boolean']>;
};

/** Identifies documents */
export type AssetWhereInput = {
  /** Logical AND on all given filters. */
  AND?: InputMaybe<Array<AssetWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: InputMaybe<Array<AssetWhereInput>>;
  /** Logical OR on all given filters. */
  OR?: InputMaybe<Array<AssetWhereInput>>;
  /** Contains search across all appropriate fields. */
  _search?: InputMaybe<Scalars['String']>;
  createdAt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  createdAt_gt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  createdAt_gte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  createdAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  /** All values less than the given value. */
  createdAt_lt?: InputMaybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  createdAt_lte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  createdAt_not?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not contained in given list. */
  createdAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  createdBy?: InputMaybe<UserWhereInput>;
  documentInStages_every?: InputMaybe<AssetWhereStageInput>;
  documentInStages_none?: InputMaybe<AssetWhereStageInput>;
  documentInStages_some?: InputMaybe<AssetWhereStageInput>;
  fileName?: InputMaybe<Scalars['String']>;
  /** All values containing the given string. */
  fileName_contains?: InputMaybe<Scalars['String']>;
  /** All values ending with the given string. */
  fileName_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are contained in given list. */
  fileName_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** All values that are not equal to given value. */
  fileName_not?: InputMaybe<Scalars['String']>;
  /** All values not containing the given string. */
  fileName_not_contains?: InputMaybe<Scalars['String']>;
  /** All values not ending with the given string */
  fileName_not_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  fileName_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** All values not starting with the given string. */
  fileName_not_starts_with?: InputMaybe<Scalars['String']>;
  /** All values starting with the given string. */
  fileName_starts_with?: InputMaybe<Scalars['String']>;
  handle?: InputMaybe<Scalars['String']>;
  /** All values containing the given string. */
  handle_contains?: InputMaybe<Scalars['String']>;
  /** All values ending with the given string. */
  handle_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are contained in given list. */
  handle_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** All values that are not equal to given value. */
  handle_not?: InputMaybe<Scalars['String']>;
  /** All values not containing the given string. */
  handle_not_contains?: InputMaybe<Scalars['String']>;
  /** All values not ending with the given string */
  handle_not_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  handle_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** All values not starting with the given string. */
  handle_not_starts_with?: InputMaybe<Scalars['String']>;
  /** All values starting with the given string. */
  handle_starts_with?: InputMaybe<Scalars['String']>;
  height?: InputMaybe<Scalars['Float']>;
  /** All values greater than the given value. */
  height_gt?: InputMaybe<Scalars['Float']>;
  /** All values greater than or equal the given value. */
  height_gte?: InputMaybe<Scalars['Float']>;
  /** All values that are contained in given list. */
  height_in?: InputMaybe<Array<InputMaybe<Scalars['Float']>>>;
  /** All values less than the given value. */
  height_lt?: InputMaybe<Scalars['Float']>;
  /** All values less than or equal the given value. */
  height_lte?: InputMaybe<Scalars['Float']>;
  /** All values that are not equal to given value. */
  height_not?: InputMaybe<Scalars['Float']>;
  /** All values that are not contained in given list. */
  height_not_in?: InputMaybe<Array<InputMaybe<Scalars['Float']>>>;
  id?: InputMaybe<Scalars['ID']>;
  /** All values containing the given string. */
  id_contains?: InputMaybe<Scalars['ID']>;
  /** All values ending with the given string. */
  id_ends_with?: InputMaybe<Scalars['ID']>;
  /** All values that are contained in given list. */
  id_in?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  /** All values that are not equal to given value. */
  id_not?: InputMaybe<Scalars['ID']>;
  /** All values not containing the given string. */
  id_not_contains?: InputMaybe<Scalars['ID']>;
  /** All values not ending with the given string */
  id_not_ends_with?: InputMaybe<Scalars['ID']>;
  /** All values that are not contained in given list. */
  id_not_in?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  /** All values not starting with the given string. */
  id_not_starts_with?: InputMaybe<Scalars['ID']>;
  /** All values starting with the given string. */
  id_starts_with?: InputMaybe<Scalars['ID']>;
  imageGPU_every?: InputMaybe<GpuWhereInput>;
  imageGPU_none?: InputMaybe<GpuWhereInput>;
  imageGPU_some?: InputMaybe<GpuWhereInput>;
  imagesCPU_every?: InputMaybe<CpuWhereInput>;
  imagesCPU_none?: InputMaybe<CpuWhereInput>;
  imagesCPU_some?: InputMaybe<CpuWhereInput>;
  imagesLaptop_every?: InputMaybe<LaptopWhereInput>;
  imagesLaptop_none?: InputMaybe<LaptopWhereInput>;
  imagesLaptop_some?: InputMaybe<LaptopWhereInput>;
  imagesMotherboard_every?: InputMaybe<MotherboardWhereInput>;
  imagesMotherboard_none?: InputMaybe<MotherboardWhereInput>;
  imagesMotherboard_some?: InputMaybe<MotherboardWhereInput>;
  imagesStorageEquipment_every?: InputMaybe<StorageEquipmentWhereInput>;
  imagesStorageEquipment_none?: InputMaybe<StorageEquipmentWhereInput>;
  imagesStorageEquipment_some?: InputMaybe<StorageEquipmentWhereInput>;
  mimeType?: InputMaybe<Scalars['String']>;
  /** All values containing the given string. */
  mimeType_contains?: InputMaybe<Scalars['String']>;
  /** All values ending with the given string. */
  mimeType_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are contained in given list. */
  mimeType_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** All values that are not equal to given value. */
  mimeType_not?: InputMaybe<Scalars['String']>;
  /** All values not containing the given string. */
  mimeType_not_contains?: InputMaybe<Scalars['String']>;
  /** All values not ending with the given string */
  mimeType_not_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  mimeType_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** All values not starting with the given string. */
  mimeType_not_starts_with?: InputMaybe<Scalars['String']>;
  /** All values starting with the given string. */
  mimeType_starts_with?: InputMaybe<Scalars['String']>;
  publishedAt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  publishedAt_gt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  publishedAt_gte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  publishedAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  /** All values less than the given value. */
  publishedAt_lt?: InputMaybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  publishedAt_lte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  publishedAt_not?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not contained in given list. */
  publishedAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  publishedBy?: InputMaybe<UserWhereInput>;
  scheduledIn_every?: InputMaybe<ScheduledOperationWhereInput>;
  scheduledIn_none?: InputMaybe<ScheduledOperationWhereInput>;
  scheduledIn_some?: InputMaybe<ScheduledOperationWhereInput>;
  size?: InputMaybe<Scalars['Float']>;
  /** All values greater than the given value. */
  size_gt?: InputMaybe<Scalars['Float']>;
  /** All values greater than or equal the given value. */
  size_gte?: InputMaybe<Scalars['Float']>;
  /** All values that are contained in given list. */
  size_in?: InputMaybe<Array<InputMaybe<Scalars['Float']>>>;
  /** All values less than the given value. */
  size_lt?: InputMaybe<Scalars['Float']>;
  /** All values less than or equal the given value. */
  size_lte?: InputMaybe<Scalars['Float']>;
  /** All values that are not equal to given value. */
  size_not?: InputMaybe<Scalars['Float']>;
  /** All values that are not contained in given list. */
  size_not_in?: InputMaybe<Array<InputMaybe<Scalars['Float']>>>;
  updatedAt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  updatedAt_gt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  updatedAt_gte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  updatedAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  /** All values less than the given value. */
  updatedAt_lt?: InputMaybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  updatedAt_lte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  updatedAt_not?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not contained in given list. */
  updatedAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  updatedBy?: InputMaybe<UserWhereInput>;
  width?: InputMaybe<Scalars['Float']>;
  /** All values greater than the given value. */
  width_gt?: InputMaybe<Scalars['Float']>;
  /** All values greater than or equal the given value. */
  width_gte?: InputMaybe<Scalars['Float']>;
  /** All values that are contained in given list. */
  width_in?: InputMaybe<Array<InputMaybe<Scalars['Float']>>>;
  /** All values less than the given value. */
  width_lt?: InputMaybe<Scalars['Float']>;
  /** All values less than or equal the given value. */
  width_lte?: InputMaybe<Scalars['Float']>;
  /** All values that are not equal to given value. */
  width_not?: InputMaybe<Scalars['Float']>;
  /** All values that are not contained in given list. */
  width_not_in?: InputMaybe<Array<InputMaybe<Scalars['Float']>>>;
};

/** The document in stages filter allows specifying a stage entry to cross compare the same document between different stages */
export type AssetWhereStageInput = {
  /** Logical AND on all given filters. */
  AND?: InputMaybe<Array<AssetWhereStageInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: InputMaybe<Array<AssetWhereStageInput>>;
  /** Logical OR on all given filters. */
  OR?: InputMaybe<Array<AssetWhereStageInput>>;
  /** This field contains fields which can be set as true or false to specify an internal comparison */
  compareWithParent?: InputMaybe<AssetWhereComparatorInput>;
  /** Specify the stage to compare with */
  stage?: InputMaybe<Stage>;
};

/** References Asset record uniquely */
export type AssetWhereUniqueInput = {
  id?: InputMaybe<Scalars['ID']>;
};

export type BatchPayload = {
  __typename?: 'BatchPayload';
  /** The number of nodes that have been affected by the Batch operation. */
  count: Scalars['Long'];
};

export type Cpu = Node & {
  __typename?: 'CPU';
  brand?: Maybe<Scalars['String']>;
  /** The time the document was created */
  createdAt: Scalars['DateTime'];
  /** User that created this document */
  createdBy?: Maybe<User>;
  description?: Maybe<RichText>;
  discountPercent?: Maybe<Scalars['Int']>;
  /** Get the document in other stages */
  documentInStages: Array<Cpu>;
  /** List of CPU versions */
  history: Array<Version>;
  /** The unique identifier */
  id: Scalars['ID'];
  images?: Maybe<Asset>;
  manufacturer?: Maybe<Scalars['String']>;
  manufacturerLink?: Maybe<Scalars['String']>;
  newProduct?: Maybe<Scalars['Boolean']>;
  onDiscount?: Maybe<Scalars['Boolean']>;
  price?: Maybe<Scalars['Int']>;
  promotion?: Maybe<Scalars['Boolean']>;
  /** The time the document was published. Null on documents in draft stage. */
  publishedAt?: Maybe<Scalars['DateTime']>;
  /** User that last published this document */
  publishedBy?: Maybe<User>;
  scheduledIn: Array<ScheduledOperation>;
  slug?: Maybe<Scalars['String']>;
  /** System stage field */
  stage: Stage;
  stock?: Maybe<Scalars['Int']>;
  subtitle?: Maybe<Scalars['String']>;
  title: Scalars['String'];
  /** The time the document was updated */
  updatedAt: Scalars['DateTime'];
  /** User that last updated this document */
  updatedBy?: Maybe<User>;
  warranty?: Maybe<Scalars['Int']>;
};


export type CpuCreatedByArgs = {
  locales?: InputMaybe<Array<Locale>>;
};


export type CpuDocumentInStagesArgs = {
  includeCurrent?: Scalars['Boolean'];
  inheritLocale?: Scalars['Boolean'];
  stages?: Array<Stage>;
};


export type CpuHistoryArgs = {
  limit?: Scalars['Int'];
  skip?: Scalars['Int'];
  stageOverride?: InputMaybe<Stage>;
};


export type CpuImagesArgs = {
  locales?: InputMaybe<Array<Locale>>;
};


export type CpuPublishedByArgs = {
  locales?: InputMaybe<Array<Locale>>;
};


export type CpuScheduledInArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  locales?: InputMaybe<Array<Locale>>;
  skip?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<ScheduledOperationWhereInput>;
};


export type CpuUpdatedByArgs = {
  locales?: InputMaybe<Array<Locale>>;
};

export type CpuConnectInput = {
  /** Allow to specify document position in list of connected documents, will default to appending at end of list */
  position?: InputMaybe<ConnectPositionInput>;
  /** Document to connect */
  where: CpuWhereUniqueInput;
};

/** A connection to a list of items. */
export type CpuConnection = {
  __typename?: 'CPUConnection';
  aggregate: Aggregate;
  /** A list of edges. */
  edges: Array<CpuEdge>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
};

export type CpuCreateInput = {
  brand?: InputMaybe<Scalars['String']>;
  createdAt?: InputMaybe<Scalars['DateTime']>;
  description?: InputMaybe<Scalars['RichTextAST']>;
  discountPercent?: InputMaybe<Scalars['Int']>;
  images?: InputMaybe<AssetCreateOneInlineInput>;
  manufacturer?: InputMaybe<Scalars['String']>;
  manufacturerLink?: InputMaybe<Scalars['String']>;
  newProduct?: InputMaybe<Scalars['Boolean']>;
  onDiscount?: InputMaybe<Scalars['Boolean']>;
  price?: InputMaybe<Scalars['Int']>;
  promotion?: InputMaybe<Scalars['Boolean']>;
  slug?: InputMaybe<Scalars['String']>;
  stock?: InputMaybe<Scalars['Int']>;
  subtitle?: InputMaybe<Scalars['String']>;
  title: Scalars['String'];
  updatedAt?: InputMaybe<Scalars['DateTime']>;
  warranty?: InputMaybe<Scalars['Int']>;
};

export type CpuCreateManyInlineInput = {
  /** Connect multiple existing CPU documents */
  connect?: InputMaybe<Array<CpuWhereUniqueInput>>;
  /** Create and connect multiple existing CPU documents */
  create?: InputMaybe<Array<CpuCreateInput>>;
};

export type CpuCreateOneInlineInput = {
  /** Connect one existing CPU document */
  connect?: InputMaybe<CpuWhereUniqueInput>;
  /** Create and connect one CPU document */
  create?: InputMaybe<CpuCreateInput>;
};

/** An edge in a connection. */
export type CpuEdge = {
  __typename?: 'CPUEdge';
  /** A cursor for use in pagination. */
  cursor: Scalars['String'];
  /** The item at the end of the edge. */
  node: Cpu;
};

/** Identifies documents */
export type CpuManyWhereInput = {
  /** Logical AND on all given filters. */
  AND?: InputMaybe<Array<CpuWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: InputMaybe<Array<CpuWhereInput>>;
  /** Logical OR on all given filters. */
  OR?: InputMaybe<Array<CpuWhereInput>>;
  /** Contains search across all appropriate fields. */
  _search?: InputMaybe<Scalars['String']>;
  brand?: InputMaybe<Scalars['String']>;
  /** All values containing the given string. */
  brand_contains?: InputMaybe<Scalars['String']>;
  /** All values ending with the given string. */
  brand_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are contained in given list. */
  brand_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** All values that are not equal to given value. */
  brand_not?: InputMaybe<Scalars['String']>;
  /** All values not containing the given string. */
  brand_not_contains?: InputMaybe<Scalars['String']>;
  /** All values not ending with the given string */
  brand_not_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  brand_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** All values not starting with the given string. */
  brand_not_starts_with?: InputMaybe<Scalars['String']>;
  /** All values starting with the given string. */
  brand_starts_with?: InputMaybe<Scalars['String']>;
  createdAt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  createdAt_gt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  createdAt_gte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  createdAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  /** All values less than the given value. */
  createdAt_lt?: InputMaybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  createdAt_lte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  createdAt_not?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not contained in given list. */
  createdAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  createdBy?: InputMaybe<UserWhereInput>;
  discountPercent?: InputMaybe<Scalars['Int']>;
  /** All values greater than the given value. */
  discountPercent_gt?: InputMaybe<Scalars['Int']>;
  /** All values greater than or equal the given value. */
  discountPercent_gte?: InputMaybe<Scalars['Int']>;
  /** All values that are contained in given list. */
  discountPercent_in?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
  /** All values less than the given value. */
  discountPercent_lt?: InputMaybe<Scalars['Int']>;
  /** All values less than or equal the given value. */
  discountPercent_lte?: InputMaybe<Scalars['Int']>;
  /** All values that are not equal to given value. */
  discountPercent_not?: InputMaybe<Scalars['Int']>;
  /** All values that are not contained in given list. */
  discountPercent_not_in?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
  documentInStages_every?: InputMaybe<CpuWhereStageInput>;
  documentInStages_none?: InputMaybe<CpuWhereStageInput>;
  documentInStages_some?: InputMaybe<CpuWhereStageInput>;
  id?: InputMaybe<Scalars['ID']>;
  /** All values containing the given string. */
  id_contains?: InputMaybe<Scalars['ID']>;
  /** All values ending with the given string. */
  id_ends_with?: InputMaybe<Scalars['ID']>;
  /** All values that are contained in given list. */
  id_in?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  /** All values that are not equal to given value. */
  id_not?: InputMaybe<Scalars['ID']>;
  /** All values not containing the given string. */
  id_not_contains?: InputMaybe<Scalars['ID']>;
  /** All values not ending with the given string */
  id_not_ends_with?: InputMaybe<Scalars['ID']>;
  /** All values that are not contained in given list. */
  id_not_in?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  /** All values not starting with the given string. */
  id_not_starts_with?: InputMaybe<Scalars['ID']>;
  /** All values starting with the given string. */
  id_starts_with?: InputMaybe<Scalars['ID']>;
  images?: InputMaybe<AssetWhereInput>;
  manufacturer?: InputMaybe<Scalars['String']>;
  manufacturerLink?: InputMaybe<Scalars['String']>;
  /** All values containing the given string. */
  manufacturerLink_contains?: InputMaybe<Scalars['String']>;
  /** All values ending with the given string. */
  manufacturerLink_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are contained in given list. */
  manufacturerLink_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** All values that are not equal to given value. */
  manufacturerLink_not?: InputMaybe<Scalars['String']>;
  /** All values not containing the given string. */
  manufacturerLink_not_contains?: InputMaybe<Scalars['String']>;
  /** All values not ending with the given string */
  manufacturerLink_not_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  manufacturerLink_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** All values not starting with the given string. */
  manufacturerLink_not_starts_with?: InputMaybe<Scalars['String']>;
  /** All values starting with the given string. */
  manufacturerLink_starts_with?: InputMaybe<Scalars['String']>;
  /** All values containing the given string. */
  manufacturer_contains?: InputMaybe<Scalars['String']>;
  /** All values ending with the given string. */
  manufacturer_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are contained in given list. */
  manufacturer_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** All values that are not equal to given value. */
  manufacturer_not?: InputMaybe<Scalars['String']>;
  /** All values not containing the given string. */
  manufacturer_not_contains?: InputMaybe<Scalars['String']>;
  /** All values not ending with the given string */
  manufacturer_not_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  manufacturer_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** All values not starting with the given string. */
  manufacturer_not_starts_with?: InputMaybe<Scalars['String']>;
  /** All values starting with the given string. */
  manufacturer_starts_with?: InputMaybe<Scalars['String']>;
  newProduct?: InputMaybe<Scalars['Boolean']>;
  /** All values that are not equal to given value. */
  newProduct_not?: InputMaybe<Scalars['Boolean']>;
  onDiscount?: InputMaybe<Scalars['Boolean']>;
  /** All values that are not equal to given value. */
  onDiscount_not?: InputMaybe<Scalars['Boolean']>;
  price?: InputMaybe<Scalars['Int']>;
  /** All values greater than the given value. */
  price_gt?: InputMaybe<Scalars['Int']>;
  /** All values greater than or equal the given value. */
  price_gte?: InputMaybe<Scalars['Int']>;
  /** All values that are contained in given list. */
  price_in?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
  /** All values less than the given value. */
  price_lt?: InputMaybe<Scalars['Int']>;
  /** All values less than or equal the given value. */
  price_lte?: InputMaybe<Scalars['Int']>;
  /** All values that are not equal to given value. */
  price_not?: InputMaybe<Scalars['Int']>;
  /** All values that are not contained in given list. */
  price_not_in?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
  promotion?: InputMaybe<Scalars['Boolean']>;
  /** All values that are not equal to given value. */
  promotion_not?: InputMaybe<Scalars['Boolean']>;
  publishedAt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  publishedAt_gt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  publishedAt_gte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  publishedAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  /** All values less than the given value. */
  publishedAt_lt?: InputMaybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  publishedAt_lte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  publishedAt_not?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not contained in given list. */
  publishedAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  publishedBy?: InputMaybe<UserWhereInput>;
  scheduledIn_every?: InputMaybe<ScheduledOperationWhereInput>;
  scheduledIn_none?: InputMaybe<ScheduledOperationWhereInput>;
  scheduledIn_some?: InputMaybe<ScheduledOperationWhereInput>;
  slug?: InputMaybe<Scalars['String']>;
  /** All values containing the given string. */
  slug_contains?: InputMaybe<Scalars['String']>;
  /** All values ending with the given string. */
  slug_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are contained in given list. */
  slug_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** All values that are not equal to given value. */
  slug_not?: InputMaybe<Scalars['String']>;
  /** All values not containing the given string. */
  slug_not_contains?: InputMaybe<Scalars['String']>;
  /** All values not ending with the given string */
  slug_not_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  slug_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** All values not starting with the given string. */
  slug_not_starts_with?: InputMaybe<Scalars['String']>;
  /** All values starting with the given string. */
  slug_starts_with?: InputMaybe<Scalars['String']>;
  stock?: InputMaybe<Scalars['Int']>;
  /** All values greater than the given value. */
  stock_gt?: InputMaybe<Scalars['Int']>;
  /** All values greater than or equal the given value. */
  stock_gte?: InputMaybe<Scalars['Int']>;
  /** All values that are contained in given list. */
  stock_in?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
  /** All values less than the given value. */
  stock_lt?: InputMaybe<Scalars['Int']>;
  /** All values less than or equal the given value. */
  stock_lte?: InputMaybe<Scalars['Int']>;
  /** All values that are not equal to given value. */
  stock_not?: InputMaybe<Scalars['Int']>;
  /** All values that are not contained in given list. */
  stock_not_in?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
  subtitle?: InputMaybe<Scalars['String']>;
  /** All values containing the given string. */
  subtitle_contains?: InputMaybe<Scalars['String']>;
  /** All values ending with the given string. */
  subtitle_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are contained in given list. */
  subtitle_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** All values that are not equal to given value. */
  subtitle_not?: InputMaybe<Scalars['String']>;
  /** All values not containing the given string. */
  subtitle_not_contains?: InputMaybe<Scalars['String']>;
  /** All values not ending with the given string */
  subtitle_not_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  subtitle_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** All values not starting with the given string. */
  subtitle_not_starts_with?: InputMaybe<Scalars['String']>;
  /** All values starting with the given string. */
  subtitle_starts_with?: InputMaybe<Scalars['String']>;
  title?: InputMaybe<Scalars['String']>;
  /** All values containing the given string. */
  title_contains?: InputMaybe<Scalars['String']>;
  /** All values ending with the given string. */
  title_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are contained in given list. */
  title_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** All values that are not equal to given value. */
  title_not?: InputMaybe<Scalars['String']>;
  /** All values not containing the given string. */
  title_not_contains?: InputMaybe<Scalars['String']>;
  /** All values not ending with the given string */
  title_not_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  title_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** All values not starting with the given string. */
  title_not_starts_with?: InputMaybe<Scalars['String']>;
  /** All values starting with the given string. */
  title_starts_with?: InputMaybe<Scalars['String']>;
  updatedAt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  updatedAt_gt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  updatedAt_gte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  updatedAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  /** All values less than the given value. */
  updatedAt_lt?: InputMaybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  updatedAt_lte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  updatedAt_not?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not contained in given list. */
  updatedAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  updatedBy?: InputMaybe<UserWhereInput>;
  warranty?: InputMaybe<Scalars['Int']>;
  /** All values greater than the given value. */
  warranty_gt?: InputMaybe<Scalars['Int']>;
  /** All values greater than or equal the given value. */
  warranty_gte?: InputMaybe<Scalars['Int']>;
  /** All values that are contained in given list. */
  warranty_in?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
  /** All values less than the given value. */
  warranty_lt?: InputMaybe<Scalars['Int']>;
  /** All values less than or equal the given value. */
  warranty_lte?: InputMaybe<Scalars['Int']>;
  /** All values that are not equal to given value. */
  warranty_not?: InputMaybe<Scalars['Int']>;
  /** All values that are not contained in given list. */
  warranty_not_in?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
};

export enum CpuOrderByInput {
  BrandAsc = 'brand_ASC',
  BrandDesc = 'brand_DESC',
  CreatedAtAsc = 'createdAt_ASC',
  CreatedAtDesc = 'createdAt_DESC',
  DiscountPercentAsc = 'discountPercent_ASC',
  DiscountPercentDesc = 'discountPercent_DESC',
  IdAsc = 'id_ASC',
  IdDesc = 'id_DESC',
  ManufacturerLinkAsc = 'manufacturerLink_ASC',
  ManufacturerLinkDesc = 'manufacturerLink_DESC',
  ManufacturerAsc = 'manufacturer_ASC',
  ManufacturerDesc = 'manufacturer_DESC',
  NewProductAsc = 'newProduct_ASC',
  NewProductDesc = 'newProduct_DESC',
  OnDiscountAsc = 'onDiscount_ASC',
  OnDiscountDesc = 'onDiscount_DESC',
  PriceAsc = 'price_ASC',
  PriceDesc = 'price_DESC',
  PromotionAsc = 'promotion_ASC',
  PromotionDesc = 'promotion_DESC',
  PublishedAtAsc = 'publishedAt_ASC',
  PublishedAtDesc = 'publishedAt_DESC',
  SlugAsc = 'slug_ASC',
  SlugDesc = 'slug_DESC',
  StockAsc = 'stock_ASC',
  StockDesc = 'stock_DESC',
  SubtitleAsc = 'subtitle_ASC',
  SubtitleDesc = 'subtitle_DESC',
  TitleAsc = 'title_ASC',
  TitleDesc = 'title_DESC',
  UpdatedAtAsc = 'updatedAt_ASC',
  UpdatedAtDesc = 'updatedAt_DESC',
  WarrantyAsc = 'warranty_ASC',
  WarrantyDesc = 'warranty_DESC'
}

export type CpuUpdateInput = {
  brand?: InputMaybe<Scalars['String']>;
  description?: InputMaybe<Scalars['RichTextAST']>;
  discountPercent?: InputMaybe<Scalars['Int']>;
  images?: InputMaybe<AssetUpdateOneInlineInput>;
  manufacturer?: InputMaybe<Scalars['String']>;
  manufacturerLink?: InputMaybe<Scalars['String']>;
  newProduct?: InputMaybe<Scalars['Boolean']>;
  onDiscount?: InputMaybe<Scalars['Boolean']>;
  price?: InputMaybe<Scalars['Int']>;
  promotion?: InputMaybe<Scalars['Boolean']>;
  slug?: InputMaybe<Scalars['String']>;
  stock?: InputMaybe<Scalars['Int']>;
  subtitle?: InputMaybe<Scalars['String']>;
  title?: InputMaybe<Scalars['String']>;
  warranty?: InputMaybe<Scalars['Int']>;
};

export type CpuUpdateManyInlineInput = {
  /** Connect multiple existing CPU documents */
  connect?: InputMaybe<Array<CpuConnectInput>>;
  /** Create and connect multiple CPU documents */
  create?: InputMaybe<Array<CpuCreateInput>>;
  /** Delete multiple CPU documents */
  delete?: InputMaybe<Array<CpuWhereUniqueInput>>;
  /** Disconnect multiple CPU documents */
  disconnect?: InputMaybe<Array<CpuWhereUniqueInput>>;
  /** Override currently-connected documents with multiple existing CPU documents */
  set?: InputMaybe<Array<CpuWhereUniqueInput>>;
  /** Update multiple CPU documents */
  update?: InputMaybe<Array<CpuUpdateWithNestedWhereUniqueInput>>;
  /** Upsert multiple CPU documents */
  upsert?: InputMaybe<Array<CpuUpsertWithNestedWhereUniqueInput>>;
};

export type CpuUpdateManyInput = {
  brand?: InputMaybe<Scalars['String']>;
  description?: InputMaybe<Scalars['RichTextAST']>;
  discountPercent?: InputMaybe<Scalars['Int']>;
  manufacturer?: InputMaybe<Scalars['String']>;
  manufacturerLink?: InputMaybe<Scalars['String']>;
  newProduct?: InputMaybe<Scalars['Boolean']>;
  onDiscount?: InputMaybe<Scalars['Boolean']>;
  price?: InputMaybe<Scalars['Int']>;
  promotion?: InputMaybe<Scalars['Boolean']>;
  stock?: InputMaybe<Scalars['Int']>;
  subtitle?: InputMaybe<Scalars['String']>;
  warranty?: InputMaybe<Scalars['Int']>;
};

export type CpuUpdateManyWithNestedWhereInput = {
  /** Update many input */
  data: CpuUpdateManyInput;
  /** Document search */
  where: CpuWhereInput;
};

export type CpuUpdateOneInlineInput = {
  /** Connect existing CPU document */
  connect?: InputMaybe<CpuWhereUniqueInput>;
  /** Create and connect one CPU document */
  create?: InputMaybe<CpuCreateInput>;
  /** Delete currently connected CPU document */
  delete?: InputMaybe<Scalars['Boolean']>;
  /** Disconnect currently connected CPU document */
  disconnect?: InputMaybe<Scalars['Boolean']>;
  /** Update single CPU document */
  update?: InputMaybe<CpuUpdateWithNestedWhereUniqueInput>;
  /** Upsert single CPU document */
  upsert?: InputMaybe<CpuUpsertWithNestedWhereUniqueInput>;
};

export type CpuUpdateWithNestedWhereUniqueInput = {
  /** Document to update */
  data: CpuUpdateInput;
  /** Unique document search */
  where: CpuWhereUniqueInput;
};

export type CpuUpsertInput = {
  /** Create document if it didn't exist */
  create: CpuCreateInput;
  /** Update document if it exists */
  update: CpuUpdateInput;
};

export type CpuUpsertWithNestedWhereUniqueInput = {
  /** Upsert data */
  data: CpuUpsertInput;
  /** Unique document search */
  where: CpuWhereUniqueInput;
};

/** This contains a set of filters that can be used to compare values internally */
export type CpuWhereComparatorInput = {
  /** This field can be used to request to check if the entry is outdated by internal comparison */
  outdated_to?: InputMaybe<Scalars['Boolean']>;
};

/** Identifies documents */
export type CpuWhereInput = {
  /** Logical AND on all given filters. */
  AND?: InputMaybe<Array<CpuWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: InputMaybe<Array<CpuWhereInput>>;
  /** Logical OR on all given filters. */
  OR?: InputMaybe<Array<CpuWhereInput>>;
  /** Contains search across all appropriate fields. */
  _search?: InputMaybe<Scalars['String']>;
  brand?: InputMaybe<Scalars['String']>;
  /** All values containing the given string. */
  brand_contains?: InputMaybe<Scalars['String']>;
  /** All values ending with the given string. */
  brand_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are contained in given list. */
  brand_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** All values that are not equal to given value. */
  brand_not?: InputMaybe<Scalars['String']>;
  /** All values not containing the given string. */
  brand_not_contains?: InputMaybe<Scalars['String']>;
  /** All values not ending with the given string */
  brand_not_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  brand_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** All values not starting with the given string. */
  brand_not_starts_with?: InputMaybe<Scalars['String']>;
  /** All values starting with the given string. */
  brand_starts_with?: InputMaybe<Scalars['String']>;
  createdAt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  createdAt_gt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  createdAt_gte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  createdAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  /** All values less than the given value. */
  createdAt_lt?: InputMaybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  createdAt_lte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  createdAt_not?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not contained in given list. */
  createdAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  createdBy?: InputMaybe<UserWhereInput>;
  discountPercent?: InputMaybe<Scalars['Int']>;
  /** All values greater than the given value. */
  discountPercent_gt?: InputMaybe<Scalars['Int']>;
  /** All values greater than or equal the given value. */
  discountPercent_gte?: InputMaybe<Scalars['Int']>;
  /** All values that are contained in given list. */
  discountPercent_in?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
  /** All values less than the given value. */
  discountPercent_lt?: InputMaybe<Scalars['Int']>;
  /** All values less than or equal the given value. */
  discountPercent_lte?: InputMaybe<Scalars['Int']>;
  /** All values that are not equal to given value. */
  discountPercent_not?: InputMaybe<Scalars['Int']>;
  /** All values that are not contained in given list. */
  discountPercent_not_in?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
  documentInStages_every?: InputMaybe<CpuWhereStageInput>;
  documentInStages_none?: InputMaybe<CpuWhereStageInput>;
  documentInStages_some?: InputMaybe<CpuWhereStageInput>;
  id?: InputMaybe<Scalars['ID']>;
  /** All values containing the given string. */
  id_contains?: InputMaybe<Scalars['ID']>;
  /** All values ending with the given string. */
  id_ends_with?: InputMaybe<Scalars['ID']>;
  /** All values that are contained in given list. */
  id_in?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  /** All values that are not equal to given value. */
  id_not?: InputMaybe<Scalars['ID']>;
  /** All values not containing the given string. */
  id_not_contains?: InputMaybe<Scalars['ID']>;
  /** All values not ending with the given string */
  id_not_ends_with?: InputMaybe<Scalars['ID']>;
  /** All values that are not contained in given list. */
  id_not_in?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  /** All values not starting with the given string. */
  id_not_starts_with?: InputMaybe<Scalars['ID']>;
  /** All values starting with the given string. */
  id_starts_with?: InputMaybe<Scalars['ID']>;
  images?: InputMaybe<AssetWhereInput>;
  manufacturer?: InputMaybe<Scalars['String']>;
  manufacturerLink?: InputMaybe<Scalars['String']>;
  /** All values containing the given string. */
  manufacturerLink_contains?: InputMaybe<Scalars['String']>;
  /** All values ending with the given string. */
  manufacturerLink_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are contained in given list. */
  manufacturerLink_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** All values that are not equal to given value. */
  manufacturerLink_not?: InputMaybe<Scalars['String']>;
  /** All values not containing the given string. */
  manufacturerLink_not_contains?: InputMaybe<Scalars['String']>;
  /** All values not ending with the given string */
  manufacturerLink_not_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  manufacturerLink_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** All values not starting with the given string. */
  manufacturerLink_not_starts_with?: InputMaybe<Scalars['String']>;
  /** All values starting with the given string. */
  manufacturerLink_starts_with?: InputMaybe<Scalars['String']>;
  /** All values containing the given string. */
  manufacturer_contains?: InputMaybe<Scalars['String']>;
  /** All values ending with the given string. */
  manufacturer_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are contained in given list. */
  manufacturer_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** All values that are not equal to given value. */
  manufacturer_not?: InputMaybe<Scalars['String']>;
  /** All values not containing the given string. */
  manufacturer_not_contains?: InputMaybe<Scalars['String']>;
  /** All values not ending with the given string */
  manufacturer_not_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  manufacturer_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** All values not starting with the given string. */
  manufacturer_not_starts_with?: InputMaybe<Scalars['String']>;
  /** All values starting with the given string. */
  manufacturer_starts_with?: InputMaybe<Scalars['String']>;
  newProduct?: InputMaybe<Scalars['Boolean']>;
  /** All values that are not equal to given value. */
  newProduct_not?: InputMaybe<Scalars['Boolean']>;
  onDiscount?: InputMaybe<Scalars['Boolean']>;
  /** All values that are not equal to given value. */
  onDiscount_not?: InputMaybe<Scalars['Boolean']>;
  price?: InputMaybe<Scalars['Int']>;
  /** All values greater than the given value. */
  price_gt?: InputMaybe<Scalars['Int']>;
  /** All values greater than or equal the given value. */
  price_gte?: InputMaybe<Scalars['Int']>;
  /** All values that are contained in given list. */
  price_in?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
  /** All values less than the given value. */
  price_lt?: InputMaybe<Scalars['Int']>;
  /** All values less than or equal the given value. */
  price_lte?: InputMaybe<Scalars['Int']>;
  /** All values that are not equal to given value. */
  price_not?: InputMaybe<Scalars['Int']>;
  /** All values that are not contained in given list. */
  price_not_in?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
  promotion?: InputMaybe<Scalars['Boolean']>;
  /** All values that are not equal to given value. */
  promotion_not?: InputMaybe<Scalars['Boolean']>;
  publishedAt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  publishedAt_gt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  publishedAt_gte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  publishedAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  /** All values less than the given value. */
  publishedAt_lt?: InputMaybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  publishedAt_lte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  publishedAt_not?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not contained in given list. */
  publishedAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  publishedBy?: InputMaybe<UserWhereInput>;
  scheduledIn_every?: InputMaybe<ScheduledOperationWhereInput>;
  scheduledIn_none?: InputMaybe<ScheduledOperationWhereInput>;
  scheduledIn_some?: InputMaybe<ScheduledOperationWhereInput>;
  slug?: InputMaybe<Scalars['String']>;
  /** All values containing the given string. */
  slug_contains?: InputMaybe<Scalars['String']>;
  /** All values ending with the given string. */
  slug_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are contained in given list. */
  slug_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** All values that are not equal to given value. */
  slug_not?: InputMaybe<Scalars['String']>;
  /** All values not containing the given string. */
  slug_not_contains?: InputMaybe<Scalars['String']>;
  /** All values not ending with the given string */
  slug_not_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  slug_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** All values not starting with the given string. */
  slug_not_starts_with?: InputMaybe<Scalars['String']>;
  /** All values starting with the given string. */
  slug_starts_with?: InputMaybe<Scalars['String']>;
  stock?: InputMaybe<Scalars['Int']>;
  /** All values greater than the given value. */
  stock_gt?: InputMaybe<Scalars['Int']>;
  /** All values greater than or equal the given value. */
  stock_gte?: InputMaybe<Scalars['Int']>;
  /** All values that are contained in given list. */
  stock_in?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
  /** All values less than the given value. */
  stock_lt?: InputMaybe<Scalars['Int']>;
  /** All values less than or equal the given value. */
  stock_lte?: InputMaybe<Scalars['Int']>;
  /** All values that are not equal to given value. */
  stock_not?: InputMaybe<Scalars['Int']>;
  /** All values that are not contained in given list. */
  stock_not_in?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
  subtitle?: InputMaybe<Scalars['String']>;
  /** All values containing the given string. */
  subtitle_contains?: InputMaybe<Scalars['String']>;
  /** All values ending with the given string. */
  subtitle_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are contained in given list. */
  subtitle_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** All values that are not equal to given value. */
  subtitle_not?: InputMaybe<Scalars['String']>;
  /** All values not containing the given string. */
  subtitle_not_contains?: InputMaybe<Scalars['String']>;
  /** All values not ending with the given string */
  subtitle_not_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  subtitle_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** All values not starting with the given string. */
  subtitle_not_starts_with?: InputMaybe<Scalars['String']>;
  /** All values starting with the given string. */
  subtitle_starts_with?: InputMaybe<Scalars['String']>;
  title?: InputMaybe<Scalars['String']>;
  /** All values containing the given string. */
  title_contains?: InputMaybe<Scalars['String']>;
  /** All values ending with the given string. */
  title_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are contained in given list. */
  title_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** All values that are not equal to given value. */
  title_not?: InputMaybe<Scalars['String']>;
  /** All values not containing the given string. */
  title_not_contains?: InputMaybe<Scalars['String']>;
  /** All values not ending with the given string */
  title_not_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  title_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** All values not starting with the given string. */
  title_not_starts_with?: InputMaybe<Scalars['String']>;
  /** All values starting with the given string. */
  title_starts_with?: InputMaybe<Scalars['String']>;
  updatedAt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  updatedAt_gt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  updatedAt_gte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  updatedAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  /** All values less than the given value. */
  updatedAt_lt?: InputMaybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  updatedAt_lte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  updatedAt_not?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not contained in given list. */
  updatedAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  updatedBy?: InputMaybe<UserWhereInput>;
  warranty?: InputMaybe<Scalars['Int']>;
  /** All values greater than the given value. */
  warranty_gt?: InputMaybe<Scalars['Int']>;
  /** All values greater than or equal the given value. */
  warranty_gte?: InputMaybe<Scalars['Int']>;
  /** All values that are contained in given list. */
  warranty_in?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
  /** All values less than the given value. */
  warranty_lt?: InputMaybe<Scalars['Int']>;
  /** All values less than or equal the given value. */
  warranty_lte?: InputMaybe<Scalars['Int']>;
  /** All values that are not equal to given value. */
  warranty_not?: InputMaybe<Scalars['Int']>;
  /** All values that are not contained in given list. */
  warranty_not_in?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
};

/** The document in stages filter allows specifying a stage entry to cross compare the same document between different stages */
export type CpuWhereStageInput = {
  /** Logical AND on all given filters. */
  AND?: InputMaybe<Array<CpuWhereStageInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: InputMaybe<Array<CpuWhereStageInput>>;
  /** Logical OR on all given filters. */
  OR?: InputMaybe<Array<CpuWhereStageInput>>;
  /** This field contains fields which can be set as true or false to specify an internal comparison */
  compareWithParent?: InputMaybe<CpuWhereComparatorInput>;
  /** Specify the stage to compare with */
  stage?: InputMaybe<Stage>;
};

/** References CPU record uniquely */
export type CpuWhereUniqueInput = {
  id?: InputMaybe<Scalars['ID']>;
  slug?: InputMaybe<Scalars['String']>;
  title?: InputMaybe<Scalars['String']>;
};

/** Representing a color value comprising of HEX, RGBA and css color values */
export type Color = {
  __typename?: 'Color';
  css: Scalars['String'];
  hex: Scalars['Hex'];
  rgba: Rgba;
};

/** Accepts either HEX or RGBA color value. At least one of hex or rgba value should be passed. If both are passed RGBA is used. */
export type ColorInput = {
  hex?: InputMaybe<Scalars['Hex']>;
  rgba?: InputMaybe<RgbaInput>;
};

export type ConnectPositionInput = {
  /** Connect document after specified document */
  after?: InputMaybe<Scalars['ID']>;
  /** Connect document before specified document */
  before?: InputMaybe<Scalars['ID']>;
  /** Connect document at last position */
  end?: InputMaybe<Scalars['Boolean']>;
  /** Connect document at first position */
  start?: InputMaybe<Scalars['Boolean']>;
};

export enum DocumentFileTypes {
  Doc = 'doc',
  Docx = 'docx',
  Html = 'html',
  Jpg = 'jpg',
  Odp = 'odp',
  Ods = 'ods',
  Odt = 'odt',
  Pdf = 'pdf',
  Png = 'png',
  Ppt = 'ppt',
  Pptx = 'pptx',
  Svg = 'svg',
  Txt = 'txt',
  Webp = 'webp',
  Xls = 'xls',
  Xlsx = 'xlsx'
}

export type DocumentOutputInput = {
  /**
   * Transforms a document into a desired file type.
   * See this matrix for format support:
   *
   * PDF:	jpg, odp, ods, odt, png, svg, txt, and webp
   * DOC:	docx, html, jpg, odt, pdf, png, svg, txt, and webp
   * DOCX:	doc, html, jpg, odt, pdf, png, svg, txt, and webp
   * ODT:	doc, docx, html, jpg, pdf, png, svg, txt, and webp
   * XLS:	jpg, pdf, ods, png, svg, xlsx, and webp
   * XLSX:	jpg, pdf, ods, png, svg, xls, and webp
   * ODS:	jpg, pdf, png, xls, svg, xlsx, and webp
   * PPT:	jpg, odp, pdf, png, svg, pptx, and webp
   * PPTX:	jpg, odp, pdf, png, svg, ppt, and webp
   * ODP:	jpg, pdf, png, ppt, svg, pptx, and webp
   * BMP:	jpg, odp, ods, odt, pdf, png, svg, and webp
   * GIF:	jpg, odp, ods, odt, pdf, png, svg, and webp
   * JPG:	jpg, odp, ods, odt, pdf, png, svg, and webp
   * PNG:	jpg, odp, ods, odt, pdf, png, svg, and webp
   * WEBP:	jpg, odp, ods, odt, pdf, png, svg, and webp
   * TIFF:	jpg, odp, ods, odt, pdf, png, svg, and webp
   * AI:	    jpg, odp, ods, odt, pdf, png, svg, and webp
   * PSD:	jpg, odp, ods, odt, pdf, png, svg, and webp
   * SVG:	jpg, odp, ods, odt, pdf, png, and webp
   * HTML:	jpg, odt, pdf, svg, txt, and webp
   * TXT:	jpg, html, odt, pdf, svg, and webp
   */
  format?: InputMaybe<DocumentFileTypes>;
};

/** Transformations for Documents */
export type DocumentTransformationInput = {
  /** Changes the output for the file. */
  output?: InputMaybe<DocumentOutputInput>;
};

export type DocumentVersion = {
  __typename?: 'DocumentVersion';
  createdAt: Scalars['DateTime'];
  data?: Maybe<Scalars['Json']>;
  id: Scalars['ID'];
  revision: Scalars['Int'];
  stage: Stage;
};

export type Gpu = Node & {
  __typename?: 'GPU';
  brand?: Maybe<Scalars['String']>;
  /** The time the document was created */
  createdAt: Scalars['DateTime'];
  /** User that created this document */
  createdBy?: Maybe<User>;
  description?: Maybe<RichText>;
  discountPercent?: Maybe<Scalars['Int']>;
  /** Get the document in other stages */
  documentInStages: Array<Gpu>;
  /** List of GPU versions */
  history: Array<Version>;
  /** The unique identifier */
  id: Scalars['ID'];
  images?: Maybe<Asset>;
  manufacturer?: Maybe<Scalars['String']>;
  manufacturerLink?: Maybe<Scalars['String']>;
  newProduct?: Maybe<Scalars['Boolean']>;
  onDiscount?: Maybe<Scalars['Boolean']>;
  price?: Maybe<Scalars['Int']>;
  promotion?: Maybe<Scalars['Boolean']>;
  /** The time the document was published. Null on documents in draft stage. */
  publishedAt?: Maybe<Scalars['DateTime']>;
  /** User that last published this document */
  publishedBy?: Maybe<User>;
  scheduledIn: Array<ScheduledOperation>;
  slug?: Maybe<Scalars['String']>;
  /** System stage field */
  stage: Stage;
  stock?: Maybe<Scalars['Int']>;
  subtitle?: Maybe<Scalars['String']>;
  title: Scalars['String'];
  /** The time the document was updated */
  updatedAt: Scalars['DateTime'];
  /** User that last updated this document */
  updatedBy?: Maybe<User>;
  warranty?: Maybe<Scalars['Int']>;
};


export type GpuCreatedByArgs = {
  locales?: InputMaybe<Array<Locale>>;
};


export type GpuDocumentInStagesArgs = {
  includeCurrent?: Scalars['Boolean'];
  inheritLocale?: Scalars['Boolean'];
  stages?: Array<Stage>;
};


export type GpuHistoryArgs = {
  limit?: Scalars['Int'];
  skip?: Scalars['Int'];
  stageOverride?: InputMaybe<Stage>;
};


export type GpuImagesArgs = {
  locales?: InputMaybe<Array<Locale>>;
};


export type GpuPublishedByArgs = {
  locales?: InputMaybe<Array<Locale>>;
};


export type GpuScheduledInArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  locales?: InputMaybe<Array<Locale>>;
  skip?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<ScheduledOperationWhereInput>;
};


export type GpuUpdatedByArgs = {
  locales?: InputMaybe<Array<Locale>>;
};

export type GpuConnectInput = {
  /** Allow to specify document position in list of connected documents, will default to appending at end of list */
  position?: InputMaybe<ConnectPositionInput>;
  /** Document to connect */
  where: GpuWhereUniqueInput;
};

/** A connection to a list of items. */
export type GpuConnection = {
  __typename?: 'GPUConnection';
  aggregate: Aggregate;
  /** A list of edges. */
  edges: Array<GpuEdge>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
};

export type GpuCreateInput = {
  brand?: InputMaybe<Scalars['String']>;
  createdAt?: InputMaybe<Scalars['DateTime']>;
  description?: InputMaybe<Scalars['RichTextAST']>;
  discountPercent?: InputMaybe<Scalars['Int']>;
  images?: InputMaybe<AssetCreateOneInlineInput>;
  manufacturer?: InputMaybe<Scalars['String']>;
  manufacturerLink?: InputMaybe<Scalars['String']>;
  newProduct?: InputMaybe<Scalars['Boolean']>;
  onDiscount?: InputMaybe<Scalars['Boolean']>;
  price?: InputMaybe<Scalars['Int']>;
  promotion?: InputMaybe<Scalars['Boolean']>;
  slug?: InputMaybe<Scalars['String']>;
  stock?: InputMaybe<Scalars['Int']>;
  subtitle?: InputMaybe<Scalars['String']>;
  title: Scalars['String'];
  updatedAt?: InputMaybe<Scalars['DateTime']>;
  warranty?: InputMaybe<Scalars['Int']>;
};

export type GpuCreateManyInlineInput = {
  /** Connect multiple existing GPU documents */
  connect?: InputMaybe<Array<GpuWhereUniqueInput>>;
  /** Create and connect multiple existing GPU documents */
  create?: InputMaybe<Array<GpuCreateInput>>;
};

export type GpuCreateOneInlineInput = {
  /** Connect one existing GPU document */
  connect?: InputMaybe<GpuWhereUniqueInput>;
  /** Create and connect one GPU document */
  create?: InputMaybe<GpuCreateInput>;
};

/** An edge in a connection. */
export type GpuEdge = {
  __typename?: 'GPUEdge';
  /** A cursor for use in pagination. */
  cursor: Scalars['String'];
  /** The item at the end of the edge. */
  node: Gpu;
};

/** Identifies documents */
export type GpuManyWhereInput = {
  /** Logical AND on all given filters. */
  AND?: InputMaybe<Array<GpuWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: InputMaybe<Array<GpuWhereInput>>;
  /** Logical OR on all given filters. */
  OR?: InputMaybe<Array<GpuWhereInput>>;
  /** Contains search across all appropriate fields. */
  _search?: InputMaybe<Scalars['String']>;
  brand?: InputMaybe<Scalars['String']>;
  /** All values containing the given string. */
  brand_contains?: InputMaybe<Scalars['String']>;
  /** All values ending with the given string. */
  brand_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are contained in given list. */
  brand_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** All values that are not equal to given value. */
  brand_not?: InputMaybe<Scalars['String']>;
  /** All values not containing the given string. */
  brand_not_contains?: InputMaybe<Scalars['String']>;
  /** All values not ending with the given string */
  brand_not_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  brand_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** All values not starting with the given string. */
  brand_not_starts_with?: InputMaybe<Scalars['String']>;
  /** All values starting with the given string. */
  brand_starts_with?: InputMaybe<Scalars['String']>;
  createdAt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  createdAt_gt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  createdAt_gte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  createdAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  /** All values less than the given value. */
  createdAt_lt?: InputMaybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  createdAt_lte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  createdAt_not?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not contained in given list. */
  createdAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  createdBy?: InputMaybe<UserWhereInput>;
  discountPercent?: InputMaybe<Scalars['Int']>;
  /** All values greater than the given value. */
  discountPercent_gt?: InputMaybe<Scalars['Int']>;
  /** All values greater than or equal the given value. */
  discountPercent_gte?: InputMaybe<Scalars['Int']>;
  /** All values that are contained in given list. */
  discountPercent_in?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
  /** All values less than the given value. */
  discountPercent_lt?: InputMaybe<Scalars['Int']>;
  /** All values less than or equal the given value. */
  discountPercent_lte?: InputMaybe<Scalars['Int']>;
  /** All values that are not equal to given value. */
  discountPercent_not?: InputMaybe<Scalars['Int']>;
  /** All values that are not contained in given list. */
  discountPercent_not_in?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
  documentInStages_every?: InputMaybe<GpuWhereStageInput>;
  documentInStages_none?: InputMaybe<GpuWhereStageInput>;
  documentInStages_some?: InputMaybe<GpuWhereStageInput>;
  id?: InputMaybe<Scalars['ID']>;
  /** All values containing the given string. */
  id_contains?: InputMaybe<Scalars['ID']>;
  /** All values ending with the given string. */
  id_ends_with?: InputMaybe<Scalars['ID']>;
  /** All values that are contained in given list. */
  id_in?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  /** All values that are not equal to given value. */
  id_not?: InputMaybe<Scalars['ID']>;
  /** All values not containing the given string. */
  id_not_contains?: InputMaybe<Scalars['ID']>;
  /** All values not ending with the given string */
  id_not_ends_with?: InputMaybe<Scalars['ID']>;
  /** All values that are not contained in given list. */
  id_not_in?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  /** All values not starting with the given string. */
  id_not_starts_with?: InputMaybe<Scalars['ID']>;
  /** All values starting with the given string. */
  id_starts_with?: InputMaybe<Scalars['ID']>;
  images?: InputMaybe<AssetWhereInput>;
  manufacturer?: InputMaybe<Scalars['String']>;
  manufacturerLink?: InputMaybe<Scalars['String']>;
  /** All values containing the given string. */
  manufacturerLink_contains?: InputMaybe<Scalars['String']>;
  /** All values ending with the given string. */
  manufacturerLink_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are contained in given list. */
  manufacturerLink_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** All values that are not equal to given value. */
  manufacturerLink_not?: InputMaybe<Scalars['String']>;
  /** All values not containing the given string. */
  manufacturerLink_not_contains?: InputMaybe<Scalars['String']>;
  /** All values not ending with the given string */
  manufacturerLink_not_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  manufacturerLink_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** All values not starting with the given string. */
  manufacturerLink_not_starts_with?: InputMaybe<Scalars['String']>;
  /** All values starting with the given string. */
  manufacturerLink_starts_with?: InputMaybe<Scalars['String']>;
  /** All values containing the given string. */
  manufacturer_contains?: InputMaybe<Scalars['String']>;
  /** All values ending with the given string. */
  manufacturer_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are contained in given list. */
  manufacturer_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** All values that are not equal to given value. */
  manufacturer_not?: InputMaybe<Scalars['String']>;
  /** All values not containing the given string. */
  manufacturer_not_contains?: InputMaybe<Scalars['String']>;
  /** All values not ending with the given string */
  manufacturer_not_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  manufacturer_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** All values not starting with the given string. */
  manufacturer_not_starts_with?: InputMaybe<Scalars['String']>;
  /** All values starting with the given string. */
  manufacturer_starts_with?: InputMaybe<Scalars['String']>;
  newProduct?: InputMaybe<Scalars['Boolean']>;
  /** All values that are not equal to given value. */
  newProduct_not?: InputMaybe<Scalars['Boolean']>;
  onDiscount?: InputMaybe<Scalars['Boolean']>;
  /** All values that are not equal to given value. */
  onDiscount_not?: InputMaybe<Scalars['Boolean']>;
  price?: InputMaybe<Scalars['Int']>;
  /** All values greater than the given value. */
  price_gt?: InputMaybe<Scalars['Int']>;
  /** All values greater than or equal the given value. */
  price_gte?: InputMaybe<Scalars['Int']>;
  /** All values that are contained in given list. */
  price_in?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
  /** All values less than the given value. */
  price_lt?: InputMaybe<Scalars['Int']>;
  /** All values less than or equal the given value. */
  price_lte?: InputMaybe<Scalars['Int']>;
  /** All values that are not equal to given value. */
  price_not?: InputMaybe<Scalars['Int']>;
  /** All values that are not contained in given list. */
  price_not_in?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
  promotion?: InputMaybe<Scalars['Boolean']>;
  /** All values that are not equal to given value. */
  promotion_not?: InputMaybe<Scalars['Boolean']>;
  publishedAt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  publishedAt_gt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  publishedAt_gte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  publishedAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  /** All values less than the given value. */
  publishedAt_lt?: InputMaybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  publishedAt_lte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  publishedAt_not?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not contained in given list. */
  publishedAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  publishedBy?: InputMaybe<UserWhereInput>;
  scheduledIn_every?: InputMaybe<ScheduledOperationWhereInput>;
  scheduledIn_none?: InputMaybe<ScheduledOperationWhereInput>;
  scheduledIn_some?: InputMaybe<ScheduledOperationWhereInput>;
  slug?: InputMaybe<Scalars['String']>;
  /** All values containing the given string. */
  slug_contains?: InputMaybe<Scalars['String']>;
  /** All values ending with the given string. */
  slug_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are contained in given list. */
  slug_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** All values that are not equal to given value. */
  slug_not?: InputMaybe<Scalars['String']>;
  /** All values not containing the given string. */
  slug_not_contains?: InputMaybe<Scalars['String']>;
  /** All values not ending with the given string */
  slug_not_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  slug_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** All values not starting with the given string. */
  slug_not_starts_with?: InputMaybe<Scalars['String']>;
  /** All values starting with the given string. */
  slug_starts_with?: InputMaybe<Scalars['String']>;
  stock?: InputMaybe<Scalars['Int']>;
  /** All values greater than the given value. */
  stock_gt?: InputMaybe<Scalars['Int']>;
  /** All values greater than or equal the given value. */
  stock_gte?: InputMaybe<Scalars['Int']>;
  /** All values that are contained in given list. */
  stock_in?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
  /** All values less than the given value. */
  stock_lt?: InputMaybe<Scalars['Int']>;
  /** All values less than or equal the given value. */
  stock_lte?: InputMaybe<Scalars['Int']>;
  /** All values that are not equal to given value. */
  stock_not?: InputMaybe<Scalars['Int']>;
  /** All values that are not contained in given list. */
  stock_not_in?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
  subtitle?: InputMaybe<Scalars['String']>;
  /** All values containing the given string. */
  subtitle_contains?: InputMaybe<Scalars['String']>;
  /** All values ending with the given string. */
  subtitle_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are contained in given list. */
  subtitle_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** All values that are not equal to given value. */
  subtitle_not?: InputMaybe<Scalars['String']>;
  /** All values not containing the given string. */
  subtitle_not_contains?: InputMaybe<Scalars['String']>;
  /** All values not ending with the given string */
  subtitle_not_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  subtitle_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** All values not starting with the given string. */
  subtitle_not_starts_with?: InputMaybe<Scalars['String']>;
  /** All values starting with the given string. */
  subtitle_starts_with?: InputMaybe<Scalars['String']>;
  title?: InputMaybe<Scalars['String']>;
  /** All values containing the given string. */
  title_contains?: InputMaybe<Scalars['String']>;
  /** All values ending with the given string. */
  title_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are contained in given list. */
  title_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** All values that are not equal to given value. */
  title_not?: InputMaybe<Scalars['String']>;
  /** All values not containing the given string. */
  title_not_contains?: InputMaybe<Scalars['String']>;
  /** All values not ending with the given string */
  title_not_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  title_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** All values not starting with the given string. */
  title_not_starts_with?: InputMaybe<Scalars['String']>;
  /** All values starting with the given string. */
  title_starts_with?: InputMaybe<Scalars['String']>;
  updatedAt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  updatedAt_gt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  updatedAt_gte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  updatedAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  /** All values less than the given value. */
  updatedAt_lt?: InputMaybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  updatedAt_lte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  updatedAt_not?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not contained in given list. */
  updatedAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  updatedBy?: InputMaybe<UserWhereInput>;
  warranty?: InputMaybe<Scalars['Int']>;
  /** All values greater than the given value. */
  warranty_gt?: InputMaybe<Scalars['Int']>;
  /** All values greater than or equal the given value. */
  warranty_gte?: InputMaybe<Scalars['Int']>;
  /** All values that are contained in given list. */
  warranty_in?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
  /** All values less than the given value. */
  warranty_lt?: InputMaybe<Scalars['Int']>;
  /** All values less than or equal the given value. */
  warranty_lte?: InputMaybe<Scalars['Int']>;
  /** All values that are not equal to given value. */
  warranty_not?: InputMaybe<Scalars['Int']>;
  /** All values that are not contained in given list. */
  warranty_not_in?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
};

export enum GpuOrderByInput {
  BrandAsc = 'brand_ASC',
  BrandDesc = 'brand_DESC',
  CreatedAtAsc = 'createdAt_ASC',
  CreatedAtDesc = 'createdAt_DESC',
  DiscountPercentAsc = 'discountPercent_ASC',
  DiscountPercentDesc = 'discountPercent_DESC',
  IdAsc = 'id_ASC',
  IdDesc = 'id_DESC',
  ManufacturerLinkAsc = 'manufacturerLink_ASC',
  ManufacturerLinkDesc = 'manufacturerLink_DESC',
  ManufacturerAsc = 'manufacturer_ASC',
  ManufacturerDesc = 'manufacturer_DESC',
  NewProductAsc = 'newProduct_ASC',
  NewProductDesc = 'newProduct_DESC',
  OnDiscountAsc = 'onDiscount_ASC',
  OnDiscountDesc = 'onDiscount_DESC',
  PriceAsc = 'price_ASC',
  PriceDesc = 'price_DESC',
  PromotionAsc = 'promotion_ASC',
  PromotionDesc = 'promotion_DESC',
  PublishedAtAsc = 'publishedAt_ASC',
  PublishedAtDesc = 'publishedAt_DESC',
  SlugAsc = 'slug_ASC',
  SlugDesc = 'slug_DESC',
  StockAsc = 'stock_ASC',
  StockDesc = 'stock_DESC',
  SubtitleAsc = 'subtitle_ASC',
  SubtitleDesc = 'subtitle_DESC',
  TitleAsc = 'title_ASC',
  TitleDesc = 'title_DESC',
  UpdatedAtAsc = 'updatedAt_ASC',
  UpdatedAtDesc = 'updatedAt_DESC',
  WarrantyAsc = 'warranty_ASC',
  WarrantyDesc = 'warranty_DESC'
}

export type GpuUpdateInput = {
  brand?: InputMaybe<Scalars['String']>;
  description?: InputMaybe<Scalars['RichTextAST']>;
  discountPercent?: InputMaybe<Scalars['Int']>;
  images?: InputMaybe<AssetUpdateOneInlineInput>;
  manufacturer?: InputMaybe<Scalars['String']>;
  manufacturerLink?: InputMaybe<Scalars['String']>;
  newProduct?: InputMaybe<Scalars['Boolean']>;
  onDiscount?: InputMaybe<Scalars['Boolean']>;
  price?: InputMaybe<Scalars['Int']>;
  promotion?: InputMaybe<Scalars['Boolean']>;
  slug?: InputMaybe<Scalars['String']>;
  stock?: InputMaybe<Scalars['Int']>;
  subtitle?: InputMaybe<Scalars['String']>;
  title?: InputMaybe<Scalars['String']>;
  warranty?: InputMaybe<Scalars['Int']>;
};

export type GpuUpdateManyInlineInput = {
  /** Connect multiple existing GPU documents */
  connect?: InputMaybe<Array<GpuConnectInput>>;
  /** Create and connect multiple GPU documents */
  create?: InputMaybe<Array<GpuCreateInput>>;
  /** Delete multiple GPU documents */
  delete?: InputMaybe<Array<GpuWhereUniqueInput>>;
  /** Disconnect multiple GPU documents */
  disconnect?: InputMaybe<Array<GpuWhereUniqueInput>>;
  /** Override currently-connected documents with multiple existing GPU documents */
  set?: InputMaybe<Array<GpuWhereUniqueInput>>;
  /** Update multiple GPU documents */
  update?: InputMaybe<Array<GpuUpdateWithNestedWhereUniqueInput>>;
  /** Upsert multiple GPU documents */
  upsert?: InputMaybe<Array<GpuUpsertWithNestedWhereUniqueInput>>;
};

export type GpuUpdateManyInput = {
  brand?: InputMaybe<Scalars['String']>;
  description?: InputMaybe<Scalars['RichTextAST']>;
  discountPercent?: InputMaybe<Scalars['Int']>;
  manufacturer?: InputMaybe<Scalars['String']>;
  manufacturerLink?: InputMaybe<Scalars['String']>;
  newProduct?: InputMaybe<Scalars['Boolean']>;
  onDiscount?: InputMaybe<Scalars['Boolean']>;
  price?: InputMaybe<Scalars['Int']>;
  promotion?: InputMaybe<Scalars['Boolean']>;
  stock?: InputMaybe<Scalars['Int']>;
  subtitle?: InputMaybe<Scalars['String']>;
  warranty?: InputMaybe<Scalars['Int']>;
};

export type GpuUpdateManyWithNestedWhereInput = {
  /** Update many input */
  data: GpuUpdateManyInput;
  /** Document search */
  where: GpuWhereInput;
};

export type GpuUpdateOneInlineInput = {
  /** Connect existing GPU document */
  connect?: InputMaybe<GpuWhereUniqueInput>;
  /** Create and connect one GPU document */
  create?: InputMaybe<GpuCreateInput>;
  /** Delete currently connected GPU document */
  delete?: InputMaybe<Scalars['Boolean']>;
  /** Disconnect currently connected GPU document */
  disconnect?: InputMaybe<Scalars['Boolean']>;
  /** Update single GPU document */
  update?: InputMaybe<GpuUpdateWithNestedWhereUniqueInput>;
  /** Upsert single GPU document */
  upsert?: InputMaybe<GpuUpsertWithNestedWhereUniqueInput>;
};

export type GpuUpdateWithNestedWhereUniqueInput = {
  /** Document to update */
  data: GpuUpdateInput;
  /** Unique document search */
  where: GpuWhereUniqueInput;
};

export type GpuUpsertInput = {
  /** Create document if it didn't exist */
  create: GpuCreateInput;
  /** Update document if it exists */
  update: GpuUpdateInput;
};

export type GpuUpsertWithNestedWhereUniqueInput = {
  /** Upsert data */
  data: GpuUpsertInput;
  /** Unique document search */
  where: GpuWhereUniqueInput;
};

/** This contains a set of filters that can be used to compare values internally */
export type GpuWhereComparatorInput = {
  /** This field can be used to request to check if the entry is outdated by internal comparison */
  outdated_to?: InputMaybe<Scalars['Boolean']>;
};

/** Identifies documents */
export type GpuWhereInput = {
  /** Logical AND on all given filters. */
  AND?: InputMaybe<Array<GpuWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: InputMaybe<Array<GpuWhereInput>>;
  /** Logical OR on all given filters. */
  OR?: InputMaybe<Array<GpuWhereInput>>;
  /** Contains search across all appropriate fields. */
  _search?: InputMaybe<Scalars['String']>;
  brand?: InputMaybe<Scalars['String']>;
  /** All values containing the given string. */
  brand_contains?: InputMaybe<Scalars['String']>;
  /** All values ending with the given string. */
  brand_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are contained in given list. */
  brand_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** All values that are not equal to given value. */
  brand_not?: InputMaybe<Scalars['String']>;
  /** All values not containing the given string. */
  brand_not_contains?: InputMaybe<Scalars['String']>;
  /** All values not ending with the given string */
  brand_not_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  brand_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** All values not starting with the given string. */
  brand_not_starts_with?: InputMaybe<Scalars['String']>;
  /** All values starting with the given string. */
  brand_starts_with?: InputMaybe<Scalars['String']>;
  createdAt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  createdAt_gt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  createdAt_gte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  createdAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  /** All values less than the given value. */
  createdAt_lt?: InputMaybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  createdAt_lte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  createdAt_not?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not contained in given list. */
  createdAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  createdBy?: InputMaybe<UserWhereInput>;
  discountPercent?: InputMaybe<Scalars['Int']>;
  /** All values greater than the given value. */
  discountPercent_gt?: InputMaybe<Scalars['Int']>;
  /** All values greater than or equal the given value. */
  discountPercent_gte?: InputMaybe<Scalars['Int']>;
  /** All values that are contained in given list. */
  discountPercent_in?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
  /** All values less than the given value. */
  discountPercent_lt?: InputMaybe<Scalars['Int']>;
  /** All values less than or equal the given value. */
  discountPercent_lte?: InputMaybe<Scalars['Int']>;
  /** All values that are not equal to given value. */
  discountPercent_not?: InputMaybe<Scalars['Int']>;
  /** All values that are not contained in given list. */
  discountPercent_not_in?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
  documentInStages_every?: InputMaybe<GpuWhereStageInput>;
  documentInStages_none?: InputMaybe<GpuWhereStageInput>;
  documentInStages_some?: InputMaybe<GpuWhereStageInput>;
  id?: InputMaybe<Scalars['ID']>;
  /** All values containing the given string. */
  id_contains?: InputMaybe<Scalars['ID']>;
  /** All values ending with the given string. */
  id_ends_with?: InputMaybe<Scalars['ID']>;
  /** All values that are contained in given list. */
  id_in?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  /** All values that are not equal to given value. */
  id_not?: InputMaybe<Scalars['ID']>;
  /** All values not containing the given string. */
  id_not_contains?: InputMaybe<Scalars['ID']>;
  /** All values not ending with the given string */
  id_not_ends_with?: InputMaybe<Scalars['ID']>;
  /** All values that are not contained in given list. */
  id_not_in?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  /** All values not starting with the given string. */
  id_not_starts_with?: InputMaybe<Scalars['ID']>;
  /** All values starting with the given string. */
  id_starts_with?: InputMaybe<Scalars['ID']>;
  images?: InputMaybe<AssetWhereInput>;
  manufacturer?: InputMaybe<Scalars['String']>;
  manufacturerLink?: InputMaybe<Scalars['String']>;
  /** All values containing the given string. */
  manufacturerLink_contains?: InputMaybe<Scalars['String']>;
  /** All values ending with the given string. */
  manufacturerLink_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are contained in given list. */
  manufacturerLink_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** All values that are not equal to given value. */
  manufacturerLink_not?: InputMaybe<Scalars['String']>;
  /** All values not containing the given string. */
  manufacturerLink_not_contains?: InputMaybe<Scalars['String']>;
  /** All values not ending with the given string */
  manufacturerLink_not_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  manufacturerLink_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** All values not starting with the given string. */
  manufacturerLink_not_starts_with?: InputMaybe<Scalars['String']>;
  /** All values starting with the given string. */
  manufacturerLink_starts_with?: InputMaybe<Scalars['String']>;
  /** All values containing the given string. */
  manufacturer_contains?: InputMaybe<Scalars['String']>;
  /** All values ending with the given string. */
  manufacturer_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are contained in given list. */
  manufacturer_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** All values that are not equal to given value. */
  manufacturer_not?: InputMaybe<Scalars['String']>;
  /** All values not containing the given string. */
  manufacturer_not_contains?: InputMaybe<Scalars['String']>;
  /** All values not ending with the given string */
  manufacturer_not_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  manufacturer_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** All values not starting with the given string. */
  manufacturer_not_starts_with?: InputMaybe<Scalars['String']>;
  /** All values starting with the given string. */
  manufacturer_starts_with?: InputMaybe<Scalars['String']>;
  newProduct?: InputMaybe<Scalars['Boolean']>;
  /** All values that are not equal to given value. */
  newProduct_not?: InputMaybe<Scalars['Boolean']>;
  onDiscount?: InputMaybe<Scalars['Boolean']>;
  /** All values that are not equal to given value. */
  onDiscount_not?: InputMaybe<Scalars['Boolean']>;
  price?: InputMaybe<Scalars['Int']>;
  /** All values greater than the given value. */
  price_gt?: InputMaybe<Scalars['Int']>;
  /** All values greater than or equal the given value. */
  price_gte?: InputMaybe<Scalars['Int']>;
  /** All values that are contained in given list. */
  price_in?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
  /** All values less than the given value. */
  price_lt?: InputMaybe<Scalars['Int']>;
  /** All values less than or equal the given value. */
  price_lte?: InputMaybe<Scalars['Int']>;
  /** All values that are not equal to given value. */
  price_not?: InputMaybe<Scalars['Int']>;
  /** All values that are not contained in given list. */
  price_not_in?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
  promotion?: InputMaybe<Scalars['Boolean']>;
  /** All values that are not equal to given value. */
  promotion_not?: InputMaybe<Scalars['Boolean']>;
  publishedAt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  publishedAt_gt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  publishedAt_gte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  publishedAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  /** All values less than the given value. */
  publishedAt_lt?: InputMaybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  publishedAt_lte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  publishedAt_not?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not contained in given list. */
  publishedAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  publishedBy?: InputMaybe<UserWhereInput>;
  scheduledIn_every?: InputMaybe<ScheduledOperationWhereInput>;
  scheduledIn_none?: InputMaybe<ScheduledOperationWhereInput>;
  scheduledIn_some?: InputMaybe<ScheduledOperationWhereInput>;
  slug?: InputMaybe<Scalars['String']>;
  /** All values containing the given string. */
  slug_contains?: InputMaybe<Scalars['String']>;
  /** All values ending with the given string. */
  slug_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are contained in given list. */
  slug_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** All values that are not equal to given value. */
  slug_not?: InputMaybe<Scalars['String']>;
  /** All values not containing the given string. */
  slug_not_contains?: InputMaybe<Scalars['String']>;
  /** All values not ending with the given string */
  slug_not_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  slug_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** All values not starting with the given string. */
  slug_not_starts_with?: InputMaybe<Scalars['String']>;
  /** All values starting with the given string. */
  slug_starts_with?: InputMaybe<Scalars['String']>;
  stock?: InputMaybe<Scalars['Int']>;
  /** All values greater than the given value. */
  stock_gt?: InputMaybe<Scalars['Int']>;
  /** All values greater than or equal the given value. */
  stock_gte?: InputMaybe<Scalars['Int']>;
  /** All values that are contained in given list. */
  stock_in?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
  /** All values less than the given value. */
  stock_lt?: InputMaybe<Scalars['Int']>;
  /** All values less than or equal the given value. */
  stock_lte?: InputMaybe<Scalars['Int']>;
  /** All values that are not equal to given value. */
  stock_not?: InputMaybe<Scalars['Int']>;
  /** All values that are not contained in given list. */
  stock_not_in?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
  subtitle?: InputMaybe<Scalars['String']>;
  /** All values containing the given string. */
  subtitle_contains?: InputMaybe<Scalars['String']>;
  /** All values ending with the given string. */
  subtitle_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are contained in given list. */
  subtitle_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** All values that are not equal to given value. */
  subtitle_not?: InputMaybe<Scalars['String']>;
  /** All values not containing the given string. */
  subtitle_not_contains?: InputMaybe<Scalars['String']>;
  /** All values not ending with the given string */
  subtitle_not_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  subtitle_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** All values not starting with the given string. */
  subtitle_not_starts_with?: InputMaybe<Scalars['String']>;
  /** All values starting with the given string. */
  subtitle_starts_with?: InputMaybe<Scalars['String']>;
  title?: InputMaybe<Scalars['String']>;
  /** All values containing the given string. */
  title_contains?: InputMaybe<Scalars['String']>;
  /** All values ending with the given string. */
  title_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are contained in given list. */
  title_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** All values that are not equal to given value. */
  title_not?: InputMaybe<Scalars['String']>;
  /** All values not containing the given string. */
  title_not_contains?: InputMaybe<Scalars['String']>;
  /** All values not ending with the given string */
  title_not_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  title_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** All values not starting with the given string. */
  title_not_starts_with?: InputMaybe<Scalars['String']>;
  /** All values starting with the given string. */
  title_starts_with?: InputMaybe<Scalars['String']>;
  updatedAt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  updatedAt_gt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  updatedAt_gte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  updatedAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  /** All values less than the given value. */
  updatedAt_lt?: InputMaybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  updatedAt_lte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  updatedAt_not?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not contained in given list. */
  updatedAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  updatedBy?: InputMaybe<UserWhereInput>;
  warranty?: InputMaybe<Scalars['Int']>;
  /** All values greater than the given value. */
  warranty_gt?: InputMaybe<Scalars['Int']>;
  /** All values greater than or equal the given value. */
  warranty_gte?: InputMaybe<Scalars['Int']>;
  /** All values that are contained in given list. */
  warranty_in?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
  /** All values less than the given value. */
  warranty_lt?: InputMaybe<Scalars['Int']>;
  /** All values less than or equal the given value. */
  warranty_lte?: InputMaybe<Scalars['Int']>;
  /** All values that are not equal to given value. */
  warranty_not?: InputMaybe<Scalars['Int']>;
  /** All values that are not contained in given list. */
  warranty_not_in?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
};

/** The document in stages filter allows specifying a stage entry to cross compare the same document between different stages */
export type GpuWhereStageInput = {
  /** Logical AND on all given filters. */
  AND?: InputMaybe<Array<GpuWhereStageInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: InputMaybe<Array<GpuWhereStageInput>>;
  /** Logical OR on all given filters. */
  OR?: InputMaybe<Array<GpuWhereStageInput>>;
  /** This field contains fields which can be set as true or false to specify an internal comparison */
  compareWithParent?: InputMaybe<GpuWhereComparatorInput>;
  /** Specify the stage to compare with */
  stage?: InputMaybe<Stage>;
};

/** References GPU record uniquely */
export type GpuWhereUniqueInput = {
  id?: InputMaybe<Scalars['ID']>;
  slug?: InputMaybe<Scalars['String']>;
  title?: InputMaybe<Scalars['String']>;
};

export enum ImageFit {
  /** Resizes the image to fit within the specified parameters without distorting, cropping, or changing the aspect ratio. */
  Clip = 'clip',
  /** Resizes the image to fit the specified parameters exactly by removing any parts of the image that don't fit within the boundaries. */
  Crop = 'crop',
  /** Resizes the image to fit within the parameters, but as opposed to 'fit:clip' will not scale the image if the image is smaller than the output size. */
  Max = 'max',
  /** Resizes the image to fit the specified parameters exactly by scaling the image to the desired size. The aspect ratio of the image is not respected and the image can be distorted using this method. */
  Scale = 'scale'
}

export type ImageResizeInput = {
  /** The default value for the fit parameter is fit:clip. */
  fit?: InputMaybe<ImageFit>;
  /** The height in pixels to resize the image to. The value must be an integer from 1 to 10000. */
  height?: InputMaybe<Scalars['Int']>;
  /** The width in pixels to resize the image to. The value must be an integer from 1 to 10000. */
  width?: InputMaybe<Scalars['Int']>;
};

/** Transformations for Images */
export type ImageTransformationInput = {
  /** Resizes the image */
  resize?: InputMaybe<ImageResizeInput>;
};

export type Laptop = Node & {
  __typename?: 'Laptop';
  brand?: Maybe<Scalars['String']>;
  /** The time the document was created */
  createdAt: Scalars['DateTime'];
  /** User that created this document */
  createdBy?: Maybe<User>;
  description?: Maybe<RichText>;
  discountPercent?: Maybe<Scalars['Int']>;
  /** Get the document in other stages */
  documentInStages: Array<Laptop>;
  /** List of Laptop versions */
  history: Array<Version>;
  /** The unique identifier */
  id: Scalars['ID'];
  images?: Maybe<Asset>;
  manufacturer?: Maybe<Scalars['String']>;
  manufacturerLink?: Maybe<Scalars['String']>;
  newProduct?: Maybe<Scalars['Boolean']>;
  onDiscount?: Maybe<Scalars['Boolean']>;
  price?: Maybe<Scalars['Int']>;
  promotion?: Maybe<Scalars['Boolean']>;
  /** The time the document was published. Null on documents in draft stage. */
  publishedAt?: Maybe<Scalars['DateTime']>;
  /** User that last published this document */
  publishedBy?: Maybe<User>;
  scheduledIn: Array<ScheduledOperation>;
  slug?: Maybe<Scalars['String']>;
  /** System stage field */
  stage: Stage;
  stock?: Maybe<Scalars['Int']>;
  subtitle?: Maybe<Scalars['String']>;
  title: Scalars['String'];
  /** The time the document was updated */
  updatedAt: Scalars['DateTime'];
  /** User that last updated this document */
  updatedBy?: Maybe<User>;
  warranty?: Maybe<Scalars['Int']>;
};


export type LaptopCreatedByArgs = {
  locales?: InputMaybe<Array<Locale>>;
};


export type LaptopDocumentInStagesArgs = {
  includeCurrent?: Scalars['Boolean'];
  inheritLocale?: Scalars['Boolean'];
  stages?: Array<Stage>;
};


export type LaptopHistoryArgs = {
  limit?: Scalars['Int'];
  skip?: Scalars['Int'];
  stageOverride?: InputMaybe<Stage>;
};


export type LaptopImagesArgs = {
  locales?: InputMaybe<Array<Locale>>;
};


export type LaptopPublishedByArgs = {
  locales?: InputMaybe<Array<Locale>>;
};


export type LaptopScheduledInArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  locales?: InputMaybe<Array<Locale>>;
  skip?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<ScheduledOperationWhereInput>;
};


export type LaptopUpdatedByArgs = {
  locales?: InputMaybe<Array<Locale>>;
};

export type LaptopConnectInput = {
  /** Allow to specify document position in list of connected documents, will default to appending at end of list */
  position?: InputMaybe<ConnectPositionInput>;
  /** Document to connect */
  where: LaptopWhereUniqueInput;
};

/** A connection to a list of items. */
export type LaptopConnection = {
  __typename?: 'LaptopConnection';
  aggregate: Aggregate;
  /** A list of edges. */
  edges: Array<LaptopEdge>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
};

export type LaptopCreateInput = {
  brand?: InputMaybe<Scalars['String']>;
  createdAt?: InputMaybe<Scalars['DateTime']>;
  description?: InputMaybe<Scalars['RichTextAST']>;
  discountPercent?: InputMaybe<Scalars['Int']>;
  images?: InputMaybe<AssetCreateOneInlineInput>;
  manufacturer?: InputMaybe<Scalars['String']>;
  manufacturerLink?: InputMaybe<Scalars['String']>;
  newProduct?: InputMaybe<Scalars['Boolean']>;
  onDiscount?: InputMaybe<Scalars['Boolean']>;
  price?: InputMaybe<Scalars['Int']>;
  promotion?: InputMaybe<Scalars['Boolean']>;
  slug?: InputMaybe<Scalars['String']>;
  stock?: InputMaybe<Scalars['Int']>;
  subtitle?: InputMaybe<Scalars['String']>;
  title: Scalars['String'];
  updatedAt?: InputMaybe<Scalars['DateTime']>;
  warranty?: InputMaybe<Scalars['Int']>;
};

export type LaptopCreateManyInlineInput = {
  /** Connect multiple existing Laptop documents */
  connect?: InputMaybe<Array<LaptopWhereUniqueInput>>;
  /** Create and connect multiple existing Laptop documents */
  create?: InputMaybe<Array<LaptopCreateInput>>;
};

export type LaptopCreateOneInlineInput = {
  /** Connect one existing Laptop document */
  connect?: InputMaybe<LaptopWhereUniqueInput>;
  /** Create and connect one Laptop document */
  create?: InputMaybe<LaptopCreateInput>;
};

/** An edge in a connection. */
export type LaptopEdge = {
  __typename?: 'LaptopEdge';
  /** A cursor for use in pagination. */
  cursor: Scalars['String'];
  /** The item at the end of the edge. */
  node: Laptop;
};

/** Identifies documents */
export type LaptopManyWhereInput = {
  /** Logical AND on all given filters. */
  AND?: InputMaybe<Array<LaptopWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: InputMaybe<Array<LaptopWhereInput>>;
  /** Logical OR on all given filters. */
  OR?: InputMaybe<Array<LaptopWhereInput>>;
  /** Contains search across all appropriate fields. */
  _search?: InputMaybe<Scalars['String']>;
  brand?: InputMaybe<Scalars['String']>;
  /** All values containing the given string. */
  brand_contains?: InputMaybe<Scalars['String']>;
  /** All values ending with the given string. */
  brand_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are contained in given list. */
  brand_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** All values that are not equal to given value. */
  brand_not?: InputMaybe<Scalars['String']>;
  /** All values not containing the given string. */
  brand_not_contains?: InputMaybe<Scalars['String']>;
  /** All values not ending with the given string */
  brand_not_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  brand_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** All values not starting with the given string. */
  brand_not_starts_with?: InputMaybe<Scalars['String']>;
  /** All values starting with the given string. */
  brand_starts_with?: InputMaybe<Scalars['String']>;
  createdAt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  createdAt_gt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  createdAt_gte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  createdAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  /** All values less than the given value. */
  createdAt_lt?: InputMaybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  createdAt_lte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  createdAt_not?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not contained in given list. */
  createdAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  createdBy?: InputMaybe<UserWhereInput>;
  discountPercent?: InputMaybe<Scalars['Int']>;
  /** All values greater than the given value. */
  discountPercent_gt?: InputMaybe<Scalars['Int']>;
  /** All values greater than or equal the given value. */
  discountPercent_gte?: InputMaybe<Scalars['Int']>;
  /** All values that are contained in given list. */
  discountPercent_in?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
  /** All values less than the given value. */
  discountPercent_lt?: InputMaybe<Scalars['Int']>;
  /** All values less than or equal the given value. */
  discountPercent_lte?: InputMaybe<Scalars['Int']>;
  /** All values that are not equal to given value. */
  discountPercent_not?: InputMaybe<Scalars['Int']>;
  /** All values that are not contained in given list. */
  discountPercent_not_in?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
  documentInStages_every?: InputMaybe<LaptopWhereStageInput>;
  documentInStages_none?: InputMaybe<LaptopWhereStageInput>;
  documentInStages_some?: InputMaybe<LaptopWhereStageInput>;
  id?: InputMaybe<Scalars['ID']>;
  /** All values containing the given string. */
  id_contains?: InputMaybe<Scalars['ID']>;
  /** All values ending with the given string. */
  id_ends_with?: InputMaybe<Scalars['ID']>;
  /** All values that are contained in given list. */
  id_in?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  /** All values that are not equal to given value. */
  id_not?: InputMaybe<Scalars['ID']>;
  /** All values not containing the given string. */
  id_not_contains?: InputMaybe<Scalars['ID']>;
  /** All values not ending with the given string */
  id_not_ends_with?: InputMaybe<Scalars['ID']>;
  /** All values that are not contained in given list. */
  id_not_in?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  /** All values not starting with the given string. */
  id_not_starts_with?: InputMaybe<Scalars['ID']>;
  /** All values starting with the given string. */
  id_starts_with?: InputMaybe<Scalars['ID']>;
  images?: InputMaybe<AssetWhereInput>;
  manufacturer?: InputMaybe<Scalars['String']>;
  manufacturerLink?: InputMaybe<Scalars['String']>;
  /** All values containing the given string. */
  manufacturerLink_contains?: InputMaybe<Scalars['String']>;
  /** All values ending with the given string. */
  manufacturerLink_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are contained in given list. */
  manufacturerLink_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** All values that are not equal to given value. */
  manufacturerLink_not?: InputMaybe<Scalars['String']>;
  /** All values not containing the given string. */
  manufacturerLink_not_contains?: InputMaybe<Scalars['String']>;
  /** All values not ending with the given string */
  manufacturerLink_not_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  manufacturerLink_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** All values not starting with the given string. */
  manufacturerLink_not_starts_with?: InputMaybe<Scalars['String']>;
  /** All values starting with the given string. */
  manufacturerLink_starts_with?: InputMaybe<Scalars['String']>;
  /** All values containing the given string. */
  manufacturer_contains?: InputMaybe<Scalars['String']>;
  /** All values ending with the given string. */
  manufacturer_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are contained in given list. */
  manufacturer_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** All values that are not equal to given value. */
  manufacturer_not?: InputMaybe<Scalars['String']>;
  /** All values not containing the given string. */
  manufacturer_not_contains?: InputMaybe<Scalars['String']>;
  /** All values not ending with the given string */
  manufacturer_not_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  manufacturer_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** All values not starting with the given string. */
  manufacturer_not_starts_with?: InputMaybe<Scalars['String']>;
  /** All values starting with the given string. */
  manufacturer_starts_with?: InputMaybe<Scalars['String']>;
  newProduct?: InputMaybe<Scalars['Boolean']>;
  /** All values that are not equal to given value. */
  newProduct_not?: InputMaybe<Scalars['Boolean']>;
  onDiscount?: InputMaybe<Scalars['Boolean']>;
  /** All values that are not equal to given value. */
  onDiscount_not?: InputMaybe<Scalars['Boolean']>;
  price?: InputMaybe<Scalars['Int']>;
  /** All values greater than the given value. */
  price_gt?: InputMaybe<Scalars['Int']>;
  /** All values greater than or equal the given value. */
  price_gte?: InputMaybe<Scalars['Int']>;
  /** All values that are contained in given list. */
  price_in?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
  /** All values less than the given value. */
  price_lt?: InputMaybe<Scalars['Int']>;
  /** All values less than or equal the given value. */
  price_lte?: InputMaybe<Scalars['Int']>;
  /** All values that are not equal to given value. */
  price_not?: InputMaybe<Scalars['Int']>;
  /** All values that are not contained in given list. */
  price_not_in?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
  promotion?: InputMaybe<Scalars['Boolean']>;
  /** All values that are not equal to given value. */
  promotion_not?: InputMaybe<Scalars['Boolean']>;
  publishedAt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  publishedAt_gt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  publishedAt_gte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  publishedAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  /** All values less than the given value. */
  publishedAt_lt?: InputMaybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  publishedAt_lte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  publishedAt_not?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not contained in given list. */
  publishedAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  publishedBy?: InputMaybe<UserWhereInput>;
  scheduledIn_every?: InputMaybe<ScheduledOperationWhereInput>;
  scheduledIn_none?: InputMaybe<ScheduledOperationWhereInput>;
  scheduledIn_some?: InputMaybe<ScheduledOperationWhereInput>;
  slug?: InputMaybe<Scalars['String']>;
  /** All values containing the given string. */
  slug_contains?: InputMaybe<Scalars['String']>;
  /** All values ending with the given string. */
  slug_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are contained in given list. */
  slug_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** All values that are not equal to given value. */
  slug_not?: InputMaybe<Scalars['String']>;
  /** All values not containing the given string. */
  slug_not_contains?: InputMaybe<Scalars['String']>;
  /** All values not ending with the given string */
  slug_not_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  slug_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** All values not starting with the given string. */
  slug_not_starts_with?: InputMaybe<Scalars['String']>;
  /** All values starting with the given string. */
  slug_starts_with?: InputMaybe<Scalars['String']>;
  stock?: InputMaybe<Scalars['Int']>;
  /** All values greater than the given value. */
  stock_gt?: InputMaybe<Scalars['Int']>;
  /** All values greater than or equal the given value. */
  stock_gte?: InputMaybe<Scalars['Int']>;
  /** All values that are contained in given list. */
  stock_in?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
  /** All values less than the given value. */
  stock_lt?: InputMaybe<Scalars['Int']>;
  /** All values less than or equal the given value. */
  stock_lte?: InputMaybe<Scalars['Int']>;
  /** All values that are not equal to given value. */
  stock_not?: InputMaybe<Scalars['Int']>;
  /** All values that are not contained in given list. */
  stock_not_in?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
  subtitle?: InputMaybe<Scalars['String']>;
  /** All values containing the given string. */
  subtitle_contains?: InputMaybe<Scalars['String']>;
  /** All values ending with the given string. */
  subtitle_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are contained in given list. */
  subtitle_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** All values that are not equal to given value. */
  subtitle_not?: InputMaybe<Scalars['String']>;
  /** All values not containing the given string. */
  subtitle_not_contains?: InputMaybe<Scalars['String']>;
  /** All values not ending with the given string */
  subtitle_not_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  subtitle_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** All values not starting with the given string. */
  subtitle_not_starts_with?: InputMaybe<Scalars['String']>;
  /** All values starting with the given string. */
  subtitle_starts_with?: InputMaybe<Scalars['String']>;
  title?: InputMaybe<Scalars['String']>;
  /** All values containing the given string. */
  title_contains?: InputMaybe<Scalars['String']>;
  /** All values ending with the given string. */
  title_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are contained in given list. */
  title_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** All values that are not equal to given value. */
  title_not?: InputMaybe<Scalars['String']>;
  /** All values not containing the given string. */
  title_not_contains?: InputMaybe<Scalars['String']>;
  /** All values not ending with the given string */
  title_not_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  title_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** All values not starting with the given string. */
  title_not_starts_with?: InputMaybe<Scalars['String']>;
  /** All values starting with the given string. */
  title_starts_with?: InputMaybe<Scalars['String']>;
  updatedAt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  updatedAt_gt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  updatedAt_gte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  updatedAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  /** All values less than the given value. */
  updatedAt_lt?: InputMaybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  updatedAt_lte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  updatedAt_not?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not contained in given list. */
  updatedAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  updatedBy?: InputMaybe<UserWhereInput>;
  warranty?: InputMaybe<Scalars['Int']>;
  /** All values greater than the given value. */
  warranty_gt?: InputMaybe<Scalars['Int']>;
  /** All values greater than or equal the given value. */
  warranty_gte?: InputMaybe<Scalars['Int']>;
  /** All values that are contained in given list. */
  warranty_in?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
  /** All values less than the given value. */
  warranty_lt?: InputMaybe<Scalars['Int']>;
  /** All values less than or equal the given value. */
  warranty_lte?: InputMaybe<Scalars['Int']>;
  /** All values that are not equal to given value. */
  warranty_not?: InputMaybe<Scalars['Int']>;
  /** All values that are not contained in given list. */
  warranty_not_in?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
};

export enum LaptopOrderByInput {
  BrandAsc = 'brand_ASC',
  BrandDesc = 'brand_DESC',
  CreatedAtAsc = 'createdAt_ASC',
  CreatedAtDesc = 'createdAt_DESC',
  DiscountPercentAsc = 'discountPercent_ASC',
  DiscountPercentDesc = 'discountPercent_DESC',
  IdAsc = 'id_ASC',
  IdDesc = 'id_DESC',
  ManufacturerLinkAsc = 'manufacturerLink_ASC',
  ManufacturerLinkDesc = 'manufacturerLink_DESC',
  ManufacturerAsc = 'manufacturer_ASC',
  ManufacturerDesc = 'manufacturer_DESC',
  NewProductAsc = 'newProduct_ASC',
  NewProductDesc = 'newProduct_DESC',
  OnDiscountAsc = 'onDiscount_ASC',
  OnDiscountDesc = 'onDiscount_DESC',
  PriceAsc = 'price_ASC',
  PriceDesc = 'price_DESC',
  PromotionAsc = 'promotion_ASC',
  PromotionDesc = 'promotion_DESC',
  PublishedAtAsc = 'publishedAt_ASC',
  PublishedAtDesc = 'publishedAt_DESC',
  SlugAsc = 'slug_ASC',
  SlugDesc = 'slug_DESC',
  StockAsc = 'stock_ASC',
  StockDesc = 'stock_DESC',
  SubtitleAsc = 'subtitle_ASC',
  SubtitleDesc = 'subtitle_DESC',
  TitleAsc = 'title_ASC',
  TitleDesc = 'title_DESC',
  UpdatedAtAsc = 'updatedAt_ASC',
  UpdatedAtDesc = 'updatedAt_DESC',
  WarrantyAsc = 'warranty_ASC',
  WarrantyDesc = 'warranty_DESC'
}

export type LaptopUpdateInput = {
  brand?: InputMaybe<Scalars['String']>;
  description?: InputMaybe<Scalars['RichTextAST']>;
  discountPercent?: InputMaybe<Scalars['Int']>;
  images?: InputMaybe<AssetUpdateOneInlineInput>;
  manufacturer?: InputMaybe<Scalars['String']>;
  manufacturerLink?: InputMaybe<Scalars['String']>;
  newProduct?: InputMaybe<Scalars['Boolean']>;
  onDiscount?: InputMaybe<Scalars['Boolean']>;
  price?: InputMaybe<Scalars['Int']>;
  promotion?: InputMaybe<Scalars['Boolean']>;
  slug?: InputMaybe<Scalars['String']>;
  stock?: InputMaybe<Scalars['Int']>;
  subtitle?: InputMaybe<Scalars['String']>;
  title?: InputMaybe<Scalars['String']>;
  warranty?: InputMaybe<Scalars['Int']>;
};

export type LaptopUpdateManyInlineInput = {
  /** Connect multiple existing Laptop documents */
  connect?: InputMaybe<Array<LaptopConnectInput>>;
  /** Create and connect multiple Laptop documents */
  create?: InputMaybe<Array<LaptopCreateInput>>;
  /** Delete multiple Laptop documents */
  delete?: InputMaybe<Array<LaptopWhereUniqueInput>>;
  /** Disconnect multiple Laptop documents */
  disconnect?: InputMaybe<Array<LaptopWhereUniqueInput>>;
  /** Override currently-connected documents with multiple existing Laptop documents */
  set?: InputMaybe<Array<LaptopWhereUniqueInput>>;
  /** Update multiple Laptop documents */
  update?: InputMaybe<Array<LaptopUpdateWithNestedWhereUniqueInput>>;
  /** Upsert multiple Laptop documents */
  upsert?: InputMaybe<Array<LaptopUpsertWithNestedWhereUniqueInput>>;
};

export type LaptopUpdateManyInput = {
  brand?: InputMaybe<Scalars['String']>;
  description?: InputMaybe<Scalars['RichTextAST']>;
  discountPercent?: InputMaybe<Scalars['Int']>;
  manufacturer?: InputMaybe<Scalars['String']>;
  manufacturerLink?: InputMaybe<Scalars['String']>;
  newProduct?: InputMaybe<Scalars['Boolean']>;
  onDiscount?: InputMaybe<Scalars['Boolean']>;
  price?: InputMaybe<Scalars['Int']>;
  promotion?: InputMaybe<Scalars['Boolean']>;
  stock?: InputMaybe<Scalars['Int']>;
  subtitle?: InputMaybe<Scalars['String']>;
  warranty?: InputMaybe<Scalars['Int']>;
};

export type LaptopUpdateManyWithNestedWhereInput = {
  /** Update many input */
  data: LaptopUpdateManyInput;
  /** Document search */
  where: LaptopWhereInput;
};

export type LaptopUpdateOneInlineInput = {
  /** Connect existing Laptop document */
  connect?: InputMaybe<LaptopWhereUniqueInput>;
  /** Create and connect one Laptop document */
  create?: InputMaybe<LaptopCreateInput>;
  /** Delete currently connected Laptop document */
  delete?: InputMaybe<Scalars['Boolean']>;
  /** Disconnect currently connected Laptop document */
  disconnect?: InputMaybe<Scalars['Boolean']>;
  /** Update single Laptop document */
  update?: InputMaybe<LaptopUpdateWithNestedWhereUniqueInput>;
  /** Upsert single Laptop document */
  upsert?: InputMaybe<LaptopUpsertWithNestedWhereUniqueInput>;
};

export type LaptopUpdateWithNestedWhereUniqueInput = {
  /** Document to update */
  data: LaptopUpdateInput;
  /** Unique document search */
  where: LaptopWhereUniqueInput;
};

export type LaptopUpsertInput = {
  /** Create document if it didn't exist */
  create: LaptopCreateInput;
  /** Update document if it exists */
  update: LaptopUpdateInput;
};

export type LaptopUpsertWithNestedWhereUniqueInput = {
  /** Upsert data */
  data: LaptopUpsertInput;
  /** Unique document search */
  where: LaptopWhereUniqueInput;
};

/** This contains a set of filters that can be used to compare values internally */
export type LaptopWhereComparatorInput = {
  /** This field can be used to request to check if the entry is outdated by internal comparison */
  outdated_to?: InputMaybe<Scalars['Boolean']>;
};

/** Identifies documents */
export type LaptopWhereInput = {
  /** Logical AND on all given filters. */
  AND?: InputMaybe<Array<LaptopWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: InputMaybe<Array<LaptopWhereInput>>;
  /** Logical OR on all given filters. */
  OR?: InputMaybe<Array<LaptopWhereInput>>;
  /** Contains search across all appropriate fields. */
  _search?: InputMaybe<Scalars['String']>;
  brand?: InputMaybe<Scalars['String']>;
  /** All values containing the given string. */
  brand_contains?: InputMaybe<Scalars['String']>;
  /** All values ending with the given string. */
  brand_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are contained in given list. */
  brand_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** All values that are not equal to given value. */
  brand_not?: InputMaybe<Scalars['String']>;
  /** All values not containing the given string. */
  brand_not_contains?: InputMaybe<Scalars['String']>;
  /** All values not ending with the given string */
  brand_not_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  brand_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** All values not starting with the given string. */
  brand_not_starts_with?: InputMaybe<Scalars['String']>;
  /** All values starting with the given string. */
  brand_starts_with?: InputMaybe<Scalars['String']>;
  createdAt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  createdAt_gt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  createdAt_gte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  createdAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  /** All values less than the given value. */
  createdAt_lt?: InputMaybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  createdAt_lte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  createdAt_not?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not contained in given list. */
  createdAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  createdBy?: InputMaybe<UserWhereInput>;
  discountPercent?: InputMaybe<Scalars['Int']>;
  /** All values greater than the given value. */
  discountPercent_gt?: InputMaybe<Scalars['Int']>;
  /** All values greater than or equal the given value. */
  discountPercent_gte?: InputMaybe<Scalars['Int']>;
  /** All values that are contained in given list. */
  discountPercent_in?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
  /** All values less than the given value. */
  discountPercent_lt?: InputMaybe<Scalars['Int']>;
  /** All values less than or equal the given value. */
  discountPercent_lte?: InputMaybe<Scalars['Int']>;
  /** All values that are not equal to given value. */
  discountPercent_not?: InputMaybe<Scalars['Int']>;
  /** All values that are not contained in given list. */
  discountPercent_not_in?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
  documentInStages_every?: InputMaybe<LaptopWhereStageInput>;
  documentInStages_none?: InputMaybe<LaptopWhereStageInput>;
  documentInStages_some?: InputMaybe<LaptopWhereStageInput>;
  id?: InputMaybe<Scalars['ID']>;
  /** All values containing the given string. */
  id_contains?: InputMaybe<Scalars['ID']>;
  /** All values ending with the given string. */
  id_ends_with?: InputMaybe<Scalars['ID']>;
  /** All values that are contained in given list. */
  id_in?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  /** All values that are not equal to given value. */
  id_not?: InputMaybe<Scalars['ID']>;
  /** All values not containing the given string. */
  id_not_contains?: InputMaybe<Scalars['ID']>;
  /** All values not ending with the given string */
  id_not_ends_with?: InputMaybe<Scalars['ID']>;
  /** All values that are not contained in given list. */
  id_not_in?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  /** All values not starting with the given string. */
  id_not_starts_with?: InputMaybe<Scalars['ID']>;
  /** All values starting with the given string. */
  id_starts_with?: InputMaybe<Scalars['ID']>;
  images?: InputMaybe<AssetWhereInput>;
  manufacturer?: InputMaybe<Scalars['String']>;
  manufacturerLink?: InputMaybe<Scalars['String']>;
  /** All values containing the given string. */
  manufacturerLink_contains?: InputMaybe<Scalars['String']>;
  /** All values ending with the given string. */
  manufacturerLink_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are contained in given list. */
  manufacturerLink_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** All values that are not equal to given value. */
  manufacturerLink_not?: InputMaybe<Scalars['String']>;
  /** All values not containing the given string. */
  manufacturerLink_not_contains?: InputMaybe<Scalars['String']>;
  /** All values not ending with the given string */
  manufacturerLink_not_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  manufacturerLink_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** All values not starting with the given string. */
  manufacturerLink_not_starts_with?: InputMaybe<Scalars['String']>;
  /** All values starting with the given string. */
  manufacturerLink_starts_with?: InputMaybe<Scalars['String']>;
  /** All values containing the given string. */
  manufacturer_contains?: InputMaybe<Scalars['String']>;
  /** All values ending with the given string. */
  manufacturer_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are contained in given list. */
  manufacturer_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** All values that are not equal to given value. */
  manufacturer_not?: InputMaybe<Scalars['String']>;
  /** All values not containing the given string. */
  manufacturer_not_contains?: InputMaybe<Scalars['String']>;
  /** All values not ending with the given string */
  manufacturer_not_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  manufacturer_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** All values not starting with the given string. */
  manufacturer_not_starts_with?: InputMaybe<Scalars['String']>;
  /** All values starting with the given string. */
  manufacturer_starts_with?: InputMaybe<Scalars['String']>;
  newProduct?: InputMaybe<Scalars['Boolean']>;
  /** All values that are not equal to given value. */
  newProduct_not?: InputMaybe<Scalars['Boolean']>;
  onDiscount?: InputMaybe<Scalars['Boolean']>;
  /** All values that are not equal to given value. */
  onDiscount_not?: InputMaybe<Scalars['Boolean']>;
  price?: InputMaybe<Scalars['Int']>;
  /** All values greater than the given value. */
  price_gt?: InputMaybe<Scalars['Int']>;
  /** All values greater than or equal the given value. */
  price_gte?: InputMaybe<Scalars['Int']>;
  /** All values that are contained in given list. */
  price_in?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
  /** All values less than the given value. */
  price_lt?: InputMaybe<Scalars['Int']>;
  /** All values less than or equal the given value. */
  price_lte?: InputMaybe<Scalars['Int']>;
  /** All values that are not equal to given value. */
  price_not?: InputMaybe<Scalars['Int']>;
  /** All values that are not contained in given list. */
  price_not_in?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
  promotion?: InputMaybe<Scalars['Boolean']>;
  /** All values that are not equal to given value. */
  promotion_not?: InputMaybe<Scalars['Boolean']>;
  publishedAt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  publishedAt_gt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  publishedAt_gte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  publishedAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  /** All values less than the given value. */
  publishedAt_lt?: InputMaybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  publishedAt_lte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  publishedAt_not?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not contained in given list. */
  publishedAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  publishedBy?: InputMaybe<UserWhereInput>;
  scheduledIn_every?: InputMaybe<ScheduledOperationWhereInput>;
  scheduledIn_none?: InputMaybe<ScheduledOperationWhereInput>;
  scheduledIn_some?: InputMaybe<ScheduledOperationWhereInput>;
  slug?: InputMaybe<Scalars['String']>;
  /** All values containing the given string. */
  slug_contains?: InputMaybe<Scalars['String']>;
  /** All values ending with the given string. */
  slug_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are contained in given list. */
  slug_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** All values that are not equal to given value. */
  slug_not?: InputMaybe<Scalars['String']>;
  /** All values not containing the given string. */
  slug_not_contains?: InputMaybe<Scalars['String']>;
  /** All values not ending with the given string */
  slug_not_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  slug_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** All values not starting with the given string. */
  slug_not_starts_with?: InputMaybe<Scalars['String']>;
  /** All values starting with the given string. */
  slug_starts_with?: InputMaybe<Scalars['String']>;
  stock?: InputMaybe<Scalars['Int']>;
  /** All values greater than the given value. */
  stock_gt?: InputMaybe<Scalars['Int']>;
  /** All values greater than or equal the given value. */
  stock_gte?: InputMaybe<Scalars['Int']>;
  /** All values that are contained in given list. */
  stock_in?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
  /** All values less than the given value. */
  stock_lt?: InputMaybe<Scalars['Int']>;
  /** All values less than or equal the given value. */
  stock_lte?: InputMaybe<Scalars['Int']>;
  /** All values that are not equal to given value. */
  stock_not?: InputMaybe<Scalars['Int']>;
  /** All values that are not contained in given list. */
  stock_not_in?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
  subtitle?: InputMaybe<Scalars['String']>;
  /** All values containing the given string. */
  subtitle_contains?: InputMaybe<Scalars['String']>;
  /** All values ending with the given string. */
  subtitle_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are contained in given list. */
  subtitle_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** All values that are not equal to given value. */
  subtitle_not?: InputMaybe<Scalars['String']>;
  /** All values not containing the given string. */
  subtitle_not_contains?: InputMaybe<Scalars['String']>;
  /** All values not ending with the given string */
  subtitle_not_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  subtitle_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** All values not starting with the given string. */
  subtitle_not_starts_with?: InputMaybe<Scalars['String']>;
  /** All values starting with the given string. */
  subtitle_starts_with?: InputMaybe<Scalars['String']>;
  title?: InputMaybe<Scalars['String']>;
  /** All values containing the given string. */
  title_contains?: InputMaybe<Scalars['String']>;
  /** All values ending with the given string. */
  title_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are contained in given list. */
  title_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** All values that are not equal to given value. */
  title_not?: InputMaybe<Scalars['String']>;
  /** All values not containing the given string. */
  title_not_contains?: InputMaybe<Scalars['String']>;
  /** All values not ending with the given string */
  title_not_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  title_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** All values not starting with the given string. */
  title_not_starts_with?: InputMaybe<Scalars['String']>;
  /** All values starting with the given string. */
  title_starts_with?: InputMaybe<Scalars['String']>;
  updatedAt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  updatedAt_gt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  updatedAt_gte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  updatedAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  /** All values less than the given value. */
  updatedAt_lt?: InputMaybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  updatedAt_lte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  updatedAt_not?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not contained in given list. */
  updatedAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  updatedBy?: InputMaybe<UserWhereInput>;
  warranty?: InputMaybe<Scalars['Int']>;
  /** All values greater than the given value. */
  warranty_gt?: InputMaybe<Scalars['Int']>;
  /** All values greater than or equal the given value. */
  warranty_gte?: InputMaybe<Scalars['Int']>;
  /** All values that are contained in given list. */
  warranty_in?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
  /** All values less than the given value. */
  warranty_lt?: InputMaybe<Scalars['Int']>;
  /** All values less than or equal the given value. */
  warranty_lte?: InputMaybe<Scalars['Int']>;
  /** All values that are not equal to given value. */
  warranty_not?: InputMaybe<Scalars['Int']>;
  /** All values that are not contained in given list. */
  warranty_not_in?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
};

/** The document in stages filter allows specifying a stage entry to cross compare the same document between different stages */
export type LaptopWhereStageInput = {
  /** Logical AND on all given filters. */
  AND?: InputMaybe<Array<LaptopWhereStageInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: InputMaybe<Array<LaptopWhereStageInput>>;
  /** Logical OR on all given filters. */
  OR?: InputMaybe<Array<LaptopWhereStageInput>>;
  /** This field contains fields which can be set as true or false to specify an internal comparison */
  compareWithParent?: InputMaybe<LaptopWhereComparatorInput>;
  /** Specify the stage to compare with */
  stage?: InputMaybe<Stage>;
};

/** References Laptop record uniquely */
export type LaptopWhereUniqueInput = {
  id?: InputMaybe<Scalars['ID']>;
  slug?: InputMaybe<Scalars['String']>;
  title?: InputMaybe<Scalars['String']>;
};

/** Locale system enumeration */
export enum Locale {
  /** System locale */
  En = 'en'
}

/** Representing a geolocation point with latitude and longitude */
export type Location = {
  __typename?: 'Location';
  distance: Scalars['Float'];
  latitude: Scalars['Float'];
  longitude: Scalars['Float'];
};


/** Representing a geolocation point with latitude and longitude */
export type LocationDistanceArgs = {
  from: LocationInput;
};

/** Input for a geolocation point with latitude and longitude */
export type LocationInput = {
  latitude: Scalars['Float'];
  longitude: Scalars['Float'];
};

export type Motherboard = Node & {
  __typename?: 'Motherboard';
  brand?: Maybe<Scalars['String']>;
  /** The time the document was created */
  createdAt: Scalars['DateTime'];
  /** User that created this document */
  createdBy?: Maybe<User>;
  description?: Maybe<RichText>;
  discountPercent?: Maybe<Scalars['Int']>;
  /** Get the document in other stages */
  documentInStages: Array<Motherboard>;
  /** List of Motherboard versions */
  history: Array<Version>;
  /** The unique identifier */
  id: Scalars['ID'];
  images?: Maybe<Asset>;
  manufacturer?: Maybe<Scalars['String']>;
  manufacturerLink?: Maybe<Scalars['String']>;
  newProduct?: Maybe<Scalars['Boolean']>;
  onDiscount?: Maybe<Scalars['Boolean']>;
  price?: Maybe<Scalars['Int']>;
  promotion?: Maybe<Scalars['Boolean']>;
  /** The time the document was published. Null on documents in draft stage. */
  publishedAt?: Maybe<Scalars['DateTime']>;
  /** User that last published this document */
  publishedBy?: Maybe<User>;
  scheduledIn: Array<ScheduledOperation>;
  slug?: Maybe<Scalars['String']>;
  /** System stage field */
  stage: Stage;
  stock?: Maybe<Scalars['Int']>;
  subtitle?: Maybe<Scalars['String']>;
  title: Scalars['String'];
  /** The time the document was updated */
  updatedAt: Scalars['DateTime'];
  /** User that last updated this document */
  updatedBy?: Maybe<User>;
  warranty?: Maybe<Scalars['Int']>;
};


export type MotherboardCreatedByArgs = {
  locales?: InputMaybe<Array<Locale>>;
};


export type MotherboardDocumentInStagesArgs = {
  includeCurrent?: Scalars['Boolean'];
  inheritLocale?: Scalars['Boolean'];
  stages?: Array<Stage>;
};


export type MotherboardHistoryArgs = {
  limit?: Scalars['Int'];
  skip?: Scalars['Int'];
  stageOverride?: InputMaybe<Stage>;
};


export type MotherboardImagesArgs = {
  locales?: InputMaybe<Array<Locale>>;
};


export type MotherboardPublishedByArgs = {
  locales?: InputMaybe<Array<Locale>>;
};


export type MotherboardScheduledInArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  locales?: InputMaybe<Array<Locale>>;
  skip?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<ScheduledOperationWhereInput>;
};


export type MotherboardUpdatedByArgs = {
  locales?: InputMaybe<Array<Locale>>;
};

export type MotherboardConnectInput = {
  /** Allow to specify document position in list of connected documents, will default to appending at end of list */
  position?: InputMaybe<ConnectPositionInput>;
  /** Document to connect */
  where: MotherboardWhereUniqueInput;
};

/** A connection to a list of items. */
export type MotherboardConnection = {
  __typename?: 'MotherboardConnection';
  aggregate: Aggregate;
  /** A list of edges. */
  edges: Array<MotherboardEdge>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
};

export type MotherboardCreateInput = {
  brand?: InputMaybe<Scalars['String']>;
  createdAt?: InputMaybe<Scalars['DateTime']>;
  description?: InputMaybe<Scalars['RichTextAST']>;
  discountPercent?: InputMaybe<Scalars['Int']>;
  images?: InputMaybe<AssetCreateOneInlineInput>;
  manufacturer?: InputMaybe<Scalars['String']>;
  manufacturerLink?: InputMaybe<Scalars['String']>;
  newProduct?: InputMaybe<Scalars['Boolean']>;
  onDiscount?: InputMaybe<Scalars['Boolean']>;
  price?: InputMaybe<Scalars['Int']>;
  promotion?: InputMaybe<Scalars['Boolean']>;
  slug?: InputMaybe<Scalars['String']>;
  stock?: InputMaybe<Scalars['Int']>;
  subtitle?: InputMaybe<Scalars['String']>;
  title: Scalars['String'];
  updatedAt?: InputMaybe<Scalars['DateTime']>;
  warranty?: InputMaybe<Scalars['Int']>;
};

export type MotherboardCreateManyInlineInput = {
  /** Connect multiple existing Motherboard documents */
  connect?: InputMaybe<Array<MotherboardWhereUniqueInput>>;
  /** Create and connect multiple existing Motherboard documents */
  create?: InputMaybe<Array<MotherboardCreateInput>>;
};

export type MotherboardCreateOneInlineInput = {
  /** Connect one existing Motherboard document */
  connect?: InputMaybe<MotherboardWhereUniqueInput>;
  /** Create and connect one Motherboard document */
  create?: InputMaybe<MotherboardCreateInput>;
};

/** An edge in a connection. */
export type MotherboardEdge = {
  __typename?: 'MotherboardEdge';
  /** A cursor for use in pagination. */
  cursor: Scalars['String'];
  /** The item at the end of the edge. */
  node: Motherboard;
};

/** Identifies documents */
export type MotherboardManyWhereInput = {
  /** Logical AND on all given filters. */
  AND?: InputMaybe<Array<MotherboardWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: InputMaybe<Array<MotherboardWhereInput>>;
  /** Logical OR on all given filters. */
  OR?: InputMaybe<Array<MotherboardWhereInput>>;
  /** Contains search across all appropriate fields. */
  _search?: InputMaybe<Scalars['String']>;
  brand?: InputMaybe<Scalars['String']>;
  /** All values containing the given string. */
  brand_contains?: InputMaybe<Scalars['String']>;
  /** All values ending with the given string. */
  brand_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are contained in given list. */
  brand_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** All values that are not equal to given value. */
  brand_not?: InputMaybe<Scalars['String']>;
  /** All values not containing the given string. */
  brand_not_contains?: InputMaybe<Scalars['String']>;
  /** All values not ending with the given string */
  brand_not_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  brand_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** All values not starting with the given string. */
  brand_not_starts_with?: InputMaybe<Scalars['String']>;
  /** All values starting with the given string. */
  brand_starts_with?: InputMaybe<Scalars['String']>;
  createdAt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  createdAt_gt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  createdAt_gte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  createdAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  /** All values less than the given value. */
  createdAt_lt?: InputMaybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  createdAt_lte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  createdAt_not?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not contained in given list. */
  createdAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  createdBy?: InputMaybe<UserWhereInput>;
  discountPercent?: InputMaybe<Scalars['Int']>;
  /** All values greater than the given value. */
  discountPercent_gt?: InputMaybe<Scalars['Int']>;
  /** All values greater than or equal the given value. */
  discountPercent_gte?: InputMaybe<Scalars['Int']>;
  /** All values that are contained in given list. */
  discountPercent_in?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
  /** All values less than the given value. */
  discountPercent_lt?: InputMaybe<Scalars['Int']>;
  /** All values less than or equal the given value. */
  discountPercent_lte?: InputMaybe<Scalars['Int']>;
  /** All values that are not equal to given value. */
  discountPercent_not?: InputMaybe<Scalars['Int']>;
  /** All values that are not contained in given list. */
  discountPercent_not_in?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
  documentInStages_every?: InputMaybe<MotherboardWhereStageInput>;
  documentInStages_none?: InputMaybe<MotherboardWhereStageInput>;
  documentInStages_some?: InputMaybe<MotherboardWhereStageInput>;
  id?: InputMaybe<Scalars['ID']>;
  /** All values containing the given string. */
  id_contains?: InputMaybe<Scalars['ID']>;
  /** All values ending with the given string. */
  id_ends_with?: InputMaybe<Scalars['ID']>;
  /** All values that are contained in given list. */
  id_in?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  /** All values that are not equal to given value. */
  id_not?: InputMaybe<Scalars['ID']>;
  /** All values not containing the given string. */
  id_not_contains?: InputMaybe<Scalars['ID']>;
  /** All values not ending with the given string */
  id_not_ends_with?: InputMaybe<Scalars['ID']>;
  /** All values that are not contained in given list. */
  id_not_in?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  /** All values not starting with the given string. */
  id_not_starts_with?: InputMaybe<Scalars['ID']>;
  /** All values starting with the given string. */
  id_starts_with?: InputMaybe<Scalars['ID']>;
  images?: InputMaybe<AssetWhereInput>;
  manufacturer?: InputMaybe<Scalars['String']>;
  manufacturerLink?: InputMaybe<Scalars['String']>;
  /** All values containing the given string. */
  manufacturerLink_contains?: InputMaybe<Scalars['String']>;
  /** All values ending with the given string. */
  manufacturerLink_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are contained in given list. */
  manufacturerLink_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** All values that are not equal to given value. */
  manufacturerLink_not?: InputMaybe<Scalars['String']>;
  /** All values not containing the given string. */
  manufacturerLink_not_contains?: InputMaybe<Scalars['String']>;
  /** All values not ending with the given string */
  manufacturerLink_not_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  manufacturerLink_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** All values not starting with the given string. */
  manufacturerLink_not_starts_with?: InputMaybe<Scalars['String']>;
  /** All values starting with the given string. */
  manufacturerLink_starts_with?: InputMaybe<Scalars['String']>;
  /** All values containing the given string. */
  manufacturer_contains?: InputMaybe<Scalars['String']>;
  /** All values ending with the given string. */
  manufacturer_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are contained in given list. */
  manufacturer_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** All values that are not equal to given value. */
  manufacturer_not?: InputMaybe<Scalars['String']>;
  /** All values not containing the given string. */
  manufacturer_not_contains?: InputMaybe<Scalars['String']>;
  /** All values not ending with the given string */
  manufacturer_not_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  manufacturer_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** All values not starting with the given string. */
  manufacturer_not_starts_with?: InputMaybe<Scalars['String']>;
  /** All values starting with the given string. */
  manufacturer_starts_with?: InputMaybe<Scalars['String']>;
  newProduct?: InputMaybe<Scalars['Boolean']>;
  /** All values that are not equal to given value. */
  newProduct_not?: InputMaybe<Scalars['Boolean']>;
  onDiscount?: InputMaybe<Scalars['Boolean']>;
  /** All values that are not equal to given value. */
  onDiscount_not?: InputMaybe<Scalars['Boolean']>;
  price?: InputMaybe<Scalars['Int']>;
  /** All values greater than the given value. */
  price_gt?: InputMaybe<Scalars['Int']>;
  /** All values greater than or equal the given value. */
  price_gte?: InputMaybe<Scalars['Int']>;
  /** All values that are contained in given list. */
  price_in?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
  /** All values less than the given value. */
  price_lt?: InputMaybe<Scalars['Int']>;
  /** All values less than or equal the given value. */
  price_lte?: InputMaybe<Scalars['Int']>;
  /** All values that are not equal to given value. */
  price_not?: InputMaybe<Scalars['Int']>;
  /** All values that are not contained in given list. */
  price_not_in?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
  promotion?: InputMaybe<Scalars['Boolean']>;
  /** All values that are not equal to given value. */
  promotion_not?: InputMaybe<Scalars['Boolean']>;
  publishedAt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  publishedAt_gt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  publishedAt_gte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  publishedAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  /** All values less than the given value. */
  publishedAt_lt?: InputMaybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  publishedAt_lte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  publishedAt_not?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not contained in given list. */
  publishedAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  publishedBy?: InputMaybe<UserWhereInput>;
  scheduledIn_every?: InputMaybe<ScheduledOperationWhereInput>;
  scheduledIn_none?: InputMaybe<ScheduledOperationWhereInput>;
  scheduledIn_some?: InputMaybe<ScheduledOperationWhereInput>;
  slug?: InputMaybe<Scalars['String']>;
  /** All values containing the given string. */
  slug_contains?: InputMaybe<Scalars['String']>;
  /** All values ending with the given string. */
  slug_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are contained in given list. */
  slug_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** All values that are not equal to given value. */
  slug_not?: InputMaybe<Scalars['String']>;
  /** All values not containing the given string. */
  slug_not_contains?: InputMaybe<Scalars['String']>;
  /** All values not ending with the given string */
  slug_not_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  slug_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** All values not starting with the given string. */
  slug_not_starts_with?: InputMaybe<Scalars['String']>;
  /** All values starting with the given string. */
  slug_starts_with?: InputMaybe<Scalars['String']>;
  stock?: InputMaybe<Scalars['Int']>;
  /** All values greater than the given value. */
  stock_gt?: InputMaybe<Scalars['Int']>;
  /** All values greater than or equal the given value. */
  stock_gte?: InputMaybe<Scalars['Int']>;
  /** All values that are contained in given list. */
  stock_in?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
  /** All values less than the given value. */
  stock_lt?: InputMaybe<Scalars['Int']>;
  /** All values less than or equal the given value. */
  stock_lte?: InputMaybe<Scalars['Int']>;
  /** All values that are not equal to given value. */
  stock_not?: InputMaybe<Scalars['Int']>;
  /** All values that are not contained in given list. */
  stock_not_in?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
  subtitle?: InputMaybe<Scalars['String']>;
  /** All values containing the given string. */
  subtitle_contains?: InputMaybe<Scalars['String']>;
  /** All values ending with the given string. */
  subtitle_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are contained in given list. */
  subtitle_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** All values that are not equal to given value. */
  subtitle_not?: InputMaybe<Scalars['String']>;
  /** All values not containing the given string. */
  subtitle_not_contains?: InputMaybe<Scalars['String']>;
  /** All values not ending with the given string */
  subtitle_not_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  subtitle_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** All values not starting with the given string. */
  subtitle_not_starts_with?: InputMaybe<Scalars['String']>;
  /** All values starting with the given string. */
  subtitle_starts_with?: InputMaybe<Scalars['String']>;
  title?: InputMaybe<Scalars['String']>;
  /** All values containing the given string. */
  title_contains?: InputMaybe<Scalars['String']>;
  /** All values ending with the given string. */
  title_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are contained in given list. */
  title_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** All values that are not equal to given value. */
  title_not?: InputMaybe<Scalars['String']>;
  /** All values not containing the given string. */
  title_not_contains?: InputMaybe<Scalars['String']>;
  /** All values not ending with the given string */
  title_not_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  title_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** All values not starting with the given string. */
  title_not_starts_with?: InputMaybe<Scalars['String']>;
  /** All values starting with the given string. */
  title_starts_with?: InputMaybe<Scalars['String']>;
  updatedAt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  updatedAt_gt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  updatedAt_gte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  updatedAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  /** All values less than the given value. */
  updatedAt_lt?: InputMaybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  updatedAt_lte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  updatedAt_not?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not contained in given list. */
  updatedAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  updatedBy?: InputMaybe<UserWhereInput>;
  warranty?: InputMaybe<Scalars['Int']>;
  /** All values greater than the given value. */
  warranty_gt?: InputMaybe<Scalars['Int']>;
  /** All values greater than or equal the given value. */
  warranty_gte?: InputMaybe<Scalars['Int']>;
  /** All values that are contained in given list. */
  warranty_in?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
  /** All values less than the given value. */
  warranty_lt?: InputMaybe<Scalars['Int']>;
  /** All values less than or equal the given value. */
  warranty_lte?: InputMaybe<Scalars['Int']>;
  /** All values that are not equal to given value. */
  warranty_not?: InputMaybe<Scalars['Int']>;
  /** All values that are not contained in given list. */
  warranty_not_in?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
};

export enum MotherboardOrderByInput {
  BrandAsc = 'brand_ASC',
  BrandDesc = 'brand_DESC',
  CreatedAtAsc = 'createdAt_ASC',
  CreatedAtDesc = 'createdAt_DESC',
  DiscountPercentAsc = 'discountPercent_ASC',
  DiscountPercentDesc = 'discountPercent_DESC',
  IdAsc = 'id_ASC',
  IdDesc = 'id_DESC',
  ManufacturerLinkAsc = 'manufacturerLink_ASC',
  ManufacturerLinkDesc = 'manufacturerLink_DESC',
  ManufacturerAsc = 'manufacturer_ASC',
  ManufacturerDesc = 'manufacturer_DESC',
  NewProductAsc = 'newProduct_ASC',
  NewProductDesc = 'newProduct_DESC',
  OnDiscountAsc = 'onDiscount_ASC',
  OnDiscountDesc = 'onDiscount_DESC',
  PriceAsc = 'price_ASC',
  PriceDesc = 'price_DESC',
  PromotionAsc = 'promotion_ASC',
  PromotionDesc = 'promotion_DESC',
  PublishedAtAsc = 'publishedAt_ASC',
  PublishedAtDesc = 'publishedAt_DESC',
  SlugAsc = 'slug_ASC',
  SlugDesc = 'slug_DESC',
  StockAsc = 'stock_ASC',
  StockDesc = 'stock_DESC',
  SubtitleAsc = 'subtitle_ASC',
  SubtitleDesc = 'subtitle_DESC',
  TitleAsc = 'title_ASC',
  TitleDesc = 'title_DESC',
  UpdatedAtAsc = 'updatedAt_ASC',
  UpdatedAtDesc = 'updatedAt_DESC',
  WarrantyAsc = 'warranty_ASC',
  WarrantyDesc = 'warranty_DESC'
}

export type MotherboardUpdateInput = {
  brand?: InputMaybe<Scalars['String']>;
  description?: InputMaybe<Scalars['RichTextAST']>;
  discountPercent?: InputMaybe<Scalars['Int']>;
  images?: InputMaybe<AssetUpdateOneInlineInput>;
  manufacturer?: InputMaybe<Scalars['String']>;
  manufacturerLink?: InputMaybe<Scalars['String']>;
  newProduct?: InputMaybe<Scalars['Boolean']>;
  onDiscount?: InputMaybe<Scalars['Boolean']>;
  price?: InputMaybe<Scalars['Int']>;
  promotion?: InputMaybe<Scalars['Boolean']>;
  slug?: InputMaybe<Scalars['String']>;
  stock?: InputMaybe<Scalars['Int']>;
  subtitle?: InputMaybe<Scalars['String']>;
  title?: InputMaybe<Scalars['String']>;
  warranty?: InputMaybe<Scalars['Int']>;
};

export type MotherboardUpdateManyInlineInput = {
  /** Connect multiple existing Motherboard documents */
  connect?: InputMaybe<Array<MotherboardConnectInput>>;
  /** Create and connect multiple Motherboard documents */
  create?: InputMaybe<Array<MotherboardCreateInput>>;
  /** Delete multiple Motherboard documents */
  delete?: InputMaybe<Array<MotherboardWhereUniqueInput>>;
  /** Disconnect multiple Motherboard documents */
  disconnect?: InputMaybe<Array<MotherboardWhereUniqueInput>>;
  /** Override currently-connected documents with multiple existing Motherboard documents */
  set?: InputMaybe<Array<MotherboardWhereUniqueInput>>;
  /** Update multiple Motherboard documents */
  update?: InputMaybe<Array<MotherboardUpdateWithNestedWhereUniqueInput>>;
  /** Upsert multiple Motherboard documents */
  upsert?: InputMaybe<Array<MotherboardUpsertWithNestedWhereUniqueInput>>;
};

export type MotherboardUpdateManyInput = {
  brand?: InputMaybe<Scalars['String']>;
  description?: InputMaybe<Scalars['RichTextAST']>;
  discountPercent?: InputMaybe<Scalars['Int']>;
  manufacturer?: InputMaybe<Scalars['String']>;
  manufacturerLink?: InputMaybe<Scalars['String']>;
  newProduct?: InputMaybe<Scalars['Boolean']>;
  onDiscount?: InputMaybe<Scalars['Boolean']>;
  price?: InputMaybe<Scalars['Int']>;
  promotion?: InputMaybe<Scalars['Boolean']>;
  stock?: InputMaybe<Scalars['Int']>;
  subtitle?: InputMaybe<Scalars['String']>;
  warranty?: InputMaybe<Scalars['Int']>;
};

export type MotherboardUpdateManyWithNestedWhereInput = {
  /** Update many input */
  data: MotherboardUpdateManyInput;
  /** Document search */
  where: MotherboardWhereInput;
};

export type MotherboardUpdateOneInlineInput = {
  /** Connect existing Motherboard document */
  connect?: InputMaybe<MotherboardWhereUniqueInput>;
  /** Create and connect one Motherboard document */
  create?: InputMaybe<MotherboardCreateInput>;
  /** Delete currently connected Motherboard document */
  delete?: InputMaybe<Scalars['Boolean']>;
  /** Disconnect currently connected Motherboard document */
  disconnect?: InputMaybe<Scalars['Boolean']>;
  /** Update single Motherboard document */
  update?: InputMaybe<MotherboardUpdateWithNestedWhereUniqueInput>;
  /** Upsert single Motherboard document */
  upsert?: InputMaybe<MotherboardUpsertWithNestedWhereUniqueInput>;
};

export type MotherboardUpdateWithNestedWhereUniqueInput = {
  /** Document to update */
  data: MotherboardUpdateInput;
  /** Unique document search */
  where: MotherboardWhereUniqueInput;
};

export type MotherboardUpsertInput = {
  /** Create document if it didn't exist */
  create: MotherboardCreateInput;
  /** Update document if it exists */
  update: MotherboardUpdateInput;
};

export type MotherboardUpsertWithNestedWhereUniqueInput = {
  /** Upsert data */
  data: MotherboardUpsertInput;
  /** Unique document search */
  where: MotherboardWhereUniqueInput;
};

/** This contains a set of filters that can be used to compare values internally */
export type MotherboardWhereComparatorInput = {
  /** This field can be used to request to check if the entry is outdated by internal comparison */
  outdated_to?: InputMaybe<Scalars['Boolean']>;
};

/** Identifies documents */
export type MotherboardWhereInput = {
  /** Logical AND on all given filters. */
  AND?: InputMaybe<Array<MotherboardWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: InputMaybe<Array<MotherboardWhereInput>>;
  /** Logical OR on all given filters. */
  OR?: InputMaybe<Array<MotherboardWhereInput>>;
  /** Contains search across all appropriate fields. */
  _search?: InputMaybe<Scalars['String']>;
  brand?: InputMaybe<Scalars['String']>;
  /** All values containing the given string. */
  brand_contains?: InputMaybe<Scalars['String']>;
  /** All values ending with the given string. */
  brand_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are contained in given list. */
  brand_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** All values that are not equal to given value. */
  brand_not?: InputMaybe<Scalars['String']>;
  /** All values not containing the given string. */
  brand_not_contains?: InputMaybe<Scalars['String']>;
  /** All values not ending with the given string */
  brand_not_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  brand_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** All values not starting with the given string. */
  brand_not_starts_with?: InputMaybe<Scalars['String']>;
  /** All values starting with the given string. */
  brand_starts_with?: InputMaybe<Scalars['String']>;
  createdAt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  createdAt_gt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  createdAt_gte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  createdAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  /** All values less than the given value. */
  createdAt_lt?: InputMaybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  createdAt_lte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  createdAt_not?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not contained in given list. */
  createdAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  createdBy?: InputMaybe<UserWhereInput>;
  discountPercent?: InputMaybe<Scalars['Int']>;
  /** All values greater than the given value. */
  discountPercent_gt?: InputMaybe<Scalars['Int']>;
  /** All values greater than or equal the given value. */
  discountPercent_gte?: InputMaybe<Scalars['Int']>;
  /** All values that are contained in given list. */
  discountPercent_in?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
  /** All values less than the given value. */
  discountPercent_lt?: InputMaybe<Scalars['Int']>;
  /** All values less than or equal the given value. */
  discountPercent_lte?: InputMaybe<Scalars['Int']>;
  /** All values that are not equal to given value. */
  discountPercent_not?: InputMaybe<Scalars['Int']>;
  /** All values that are not contained in given list. */
  discountPercent_not_in?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
  documentInStages_every?: InputMaybe<MotherboardWhereStageInput>;
  documentInStages_none?: InputMaybe<MotherboardWhereStageInput>;
  documentInStages_some?: InputMaybe<MotherboardWhereStageInput>;
  id?: InputMaybe<Scalars['ID']>;
  /** All values containing the given string. */
  id_contains?: InputMaybe<Scalars['ID']>;
  /** All values ending with the given string. */
  id_ends_with?: InputMaybe<Scalars['ID']>;
  /** All values that are contained in given list. */
  id_in?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  /** All values that are not equal to given value. */
  id_not?: InputMaybe<Scalars['ID']>;
  /** All values not containing the given string. */
  id_not_contains?: InputMaybe<Scalars['ID']>;
  /** All values not ending with the given string */
  id_not_ends_with?: InputMaybe<Scalars['ID']>;
  /** All values that are not contained in given list. */
  id_not_in?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  /** All values not starting with the given string. */
  id_not_starts_with?: InputMaybe<Scalars['ID']>;
  /** All values starting with the given string. */
  id_starts_with?: InputMaybe<Scalars['ID']>;
  images?: InputMaybe<AssetWhereInput>;
  manufacturer?: InputMaybe<Scalars['String']>;
  manufacturerLink?: InputMaybe<Scalars['String']>;
  /** All values containing the given string. */
  manufacturerLink_contains?: InputMaybe<Scalars['String']>;
  /** All values ending with the given string. */
  manufacturerLink_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are contained in given list. */
  manufacturerLink_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** All values that are not equal to given value. */
  manufacturerLink_not?: InputMaybe<Scalars['String']>;
  /** All values not containing the given string. */
  manufacturerLink_not_contains?: InputMaybe<Scalars['String']>;
  /** All values not ending with the given string */
  manufacturerLink_not_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  manufacturerLink_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** All values not starting with the given string. */
  manufacturerLink_not_starts_with?: InputMaybe<Scalars['String']>;
  /** All values starting with the given string. */
  manufacturerLink_starts_with?: InputMaybe<Scalars['String']>;
  /** All values containing the given string. */
  manufacturer_contains?: InputMaybe<Scalars['String']>;
  /** All values ending with the given string. */
  manufacturer_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are contained in given list. */
  manufacturer_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** All values that are not equal to given value. */
  manufacturer_not?: InputMaybe<Scalars['String']>;
  /** All values not containing the given string. */
  manufacturer_not_contains?: InputMaybe<Scalars['String']>;
  /** All values not ending with the given string */
  manufacturer_not_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  manufacturer_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** All values not starting with the given string. */
  manufacturer_not_starts_with?: InputMaybe<Scalars['String']>;
  /** All values starting with the given string. */
  manufacturer_starts_with?: InputMaybe<Scalars['String']>;
  newProduct?: InputMaybe<Scalars['Boolean']>;
  /** All values that are not equal to given value. */
  newProduct_not?: InputMaybe<Scalars['Boolean']>;
  onDiscount?: InputMaybe<Scalars['Boolean']>;
  /** All values that are not equal to given value. */
  onDiscount_not?: InputMaybe<Scalars['Boolean']>;
  price?: InputMaybe<Scalars['Int']>;
  /** All values greater than the given value. */
  price_gt?: InputMaybe<Scalars['Int']>;
  /** All values greater than or equal the given value. */
  price_gte?: InputMaybe<Scalars['Int']>;
  /** All values that are contained in given list. */
  price_in?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
  /** All values less than the given value. */
  price_lt?: InputMaybe<Scalars['Int']>;
  /** All values less than or equal the given value. */
  price_lte?: InputMaybe<Scalars['Int']>;
  /** All values that are not equal to given value. */
  price_not?: InputMaybe<Scalars['Int']>;
  /** All values that are not contained in given list. */
  price_not_in?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
  promotion?: InputMaybe<Scalars['Boolean']>;
  /** All values that are not equal to given value. */
  promotion_not?: InputMaybe<Scalars['Boolean']>;
  publishedAt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  publishedAt_gt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  publishedAt_gte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  publishedAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  /** All values less than the given value. */
  publishedAt_lt?: InputMaybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  publishedAt_lte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  publishedAt_not?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not contained in given list. */
  publishedAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  publishedBy?: InputMaybe<UserWhereInput>;
  scheduledIn_every?: InputMaybe<ScheduledOperationWhereInput>;
  scheduledIn_none?: InputMaybe<ScheduledOperationWhereInput>;
  scheduledIn_some?: InputMaybe<ScheduledOperationWhereInput>;
  slug?: InputMaybe<Scalars['String']>;
  /** All values containing the given string. */
  slug_contains?: InputMaybe<Scalars['String']>;
  /** All values ending with the given string. */
  slug_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are contained in given list. */
  slug_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** All values that are not equal to given value. */
  slug_not?: InputMaybe<Scalars['String']>;
  /** All values not containing the given string. */
  slug_not_contains?: InputMaybe<Scalars['String']>;
  /** All values not ending with the given string */
  slug_not_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  slug_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** All values not starting with the given string. */
  slug_not_starts_with?: InputMaybe<Scalars['String']>;
  /** All values starting with the given string. */
  slug_starts_with?: InputMaybe<Scalars['String']>;
  stock?: InputMaybe<Scalars['Int']>;
  /** All values greater than the given value. */
  stock_gt?: InputMaybe<Scalars['Int']>;
  /** All values greater than or equal the given value. */
  stock_gte?: InputMaybe<Scalars['Int']>;
  /** All values that are contained in given list. */
  stock_in?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
  /** All values less than the given value. */
  stock_lt?: InputMaybe<Scalars['Int']>;
  /** All values less than or equal the given value. */
  stock_lte?: InputMaybe<Scalars['Int']>;
  /** All values that are not equal to given value. */
  stock_not?: InputMaybe<Scalars['Int']>;
  /** All values that are not contained in given list. */
  stock_not_in?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
  subtitle?: InputMaybe<Scalars['String']>;
  /** All values containing the given string. */
  subtitle_contains?: InputMaybe<Scalars['String']>;
  /** All values ending with the given string. */
  subtitle_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are contained in given list. */
  subtitle_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** All values that are not equal to given value. */
  subtitle_not?: InputMaybe<Scalars['String']>;
  /** All values not containing the given string. */
  subtitle_not_contains?: InputMaybe<Scalars['String']>;
  /** All values not ending with the given string */
  subtitle_not_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  subtitle_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** All values not starting with the given string. */
  subtitle_not_starts_with?: InputMaybe<Scalars['String']>;
  /** All values starting with the given string. */
  subtitle_starts_with?: InputMaybe<Scalars['String']>;
  title?: InputMaybe<Scalars['String']>;
  /** All values containing the given string. */
  title_contains?: InputMaybe<Scalars['String']>;
  /** All values ending with the given string. */
  title_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are contained in given list. */
  title_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** All values that are not equal to given value. */
  title_not?: InputMaybe<Scalars['String']>;
  /** All values not containing the given string. */
  title_not_contains?: InputMaybe<Scalars['String']>;
  /** All values not ending with the given string */
  title_not_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  title_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** All values not starting with the given string. */
  title_not_starts_with?: InputMaybe<Scalars['String']>;
  /** All values starting with the given string. */
  title_starts_with?: InputMaybe<Scalars['String']>;
  updatedAt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  updatedAt_gt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  updatedAt_gte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  updatedAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  /** All values less than the given value. */
  updatedAt_lt?: InputMaybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  updatedAt_lte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  updatedAt_not?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not contained in given list. */
  updatedAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  updatedBy?: InputMaybe<UserWhereInput>;
  warranty?: InputMaybe<Scalars['Int']>;
  /** All values greater than the given value. */
  warranty_gt?: InputMaybe<Scalars['Int']>;
  /** All values greater than or equal the given value. */
  warranty_gte?: InputMaybe<Scalars['Int']>;
  /** All values that are contained in given list. */
  warranty_in?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
  /** All values less than the given value. */
  warranty_lt?: InputMaybe<Scalars['Int']>;
  /** All values less than or equal the given value. */
  warranty_lte?: InputMaybe<Scalars['Int']>;
  /** All values that are not equal to given value. */
  warranty_not?: InputMaybe<Scalars['Int']>;
  /** All values that are not contained in given list. */
  warranty_not_in?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
};

/** The document in stages filter allows specifying a stage entry to cross compare the same document between different stages */
export type MotherboardWhereStageInput = {
  /** Logical AND on all given filters. */
  AND?: InputMaybe<Array<MotherboardWhereStageInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: InputMaybe<Array<MotherboardWhereStageInput>>;
  /** Logical OR on all given filters. */
  OR?: InputMaybe<Array<MotherboardWhereStageInput>>;
  /** This field contains fields which can be set as true or false to specify an internal comparison */
  compareWithParent?: InputMaybe<MotherboardWhereComparatorInput>;
  /** Specify the stage to compare with */
  stage?: InputMaybe<Stage>;
};

/** References Motherboard record uniquely */
export type MotherboardWhereUniqueInput = {
  id?: InputMaybe<Scalars['ID']>;
  slug?: InputMaybe<Scalars['String']>;
  title?: InputMaybe<Scalars['String']>;
};

export type Mutation = {
  __typename?: 'Mutation';
  /**
   * Create one asset
   * @deprecated Asset mutations will be overhauled soon
   */
  createAsset?: Maybe<Asset>;
  /** Create one cPU */
  createCPU?: Maybe<Cpu>;
  /** Create one gPU */
  createGPU?: Maybe<Gpu>;
  /** Create one laptop */
  createLaptop?: Maybe<Laptop>;
  /** Create one motherboard */
  createMotherboard?: Maybe<Motherboard>;
  /** Create one scheduledRelease */
  createScheduledRelease?: Maybe<ScheduledRelease>;
  /** Create one storageEquipment */
  createStorageEquipment?: Maybe<StorageEquipment>;
  /** Delete one asset from _all_ existing stages. Returns deleted document. */
  deleteAsset?: Maybe<Asset>;
  /** Delete one cPU from _all_ existing stages. Returns deleted document. */
  deleteCPU?: Maybe<Cpu>;
  /** Delete one gPU from _all_ existing stages. Returns deleted document. */
  deleteGPU?: Maybe<Gpu>;
  /** Delete one laptop from _all_ existing stages. Returns deleted document. */
  deleteLaptop?: Maybe<Laptop>;
  /**
   * Delete many Asset documents
   * @deprecated Please use the new paginated many mutation (deleteManyAssetsConnection)
   */
  deleteManyAssets: BatchPayload;
  /** Delete many Asset documents, return deleted documents */
  deleteManyAssetsConnection: AssetConnection;
  /**
   * Delete many CPU documents
   * @deprecated Please use the new paginated many mutation (deleteManyCPUsConnection)
   */
  deleteManyCPUs: BatchPayload;
  /** Delete many CPU documents, return deleted documents */
  deleteManyCPUsConnection: CpuConnection;
  /**
   * Delete many GPU documents
   * @deprecated Please use the new paginated many mutation (deleteManyGPUsConnection)
   */
  deleteManyGPUs: BatchPayload;
  /** Delete many GPU documents, return deleted documents */
  deleteManyGPUsConnection: GpuConnection;
  /**
   * Delete many Laptop documents
   * @deprecated Please use the new paginated many mutation (deleteManyLaptopsConnection)
   */
  deleteManyLaptops: BatchPayload;
  /** Delete many Laptop documents, return deleted documents */
  deleteManyLaptopsConnection: LaptopConnection;
  /**
   * Delete many Motherboard documents
   * @deprecated Please use the new paginated many mutation (deleteManyMotherboardsConnection)
   */
  deleteManyMotherboards: BatchPayload;
  /** Delete many Motherboard documents, return deleted documents */
  deleteManyMotherboardsConnection: MotherboardConnection;
  /**
   * Delete many StorageEquipment documents
   * @deprecated Please use the new paginated many mutation (deleteManyStorage_EquipmentConnection)
   */
  deleteManyStorage_Equipment: BatchPayload;
  /** Delete many StorageEquipment documents, return deleted documents */
  deleteManyStorage_EquipmentConnection: StorageEquipmentConnection;
  /** Delete one motherboard from _all_ existing stages. Returns deleted document. */
  deleteMotherboard?: Maybe<Motherboard>;
  /** Delete and return scheduled operation */
  deleteScheduledOperation?: Maybe<ScheduledOperation>;
  /** Delete one scheduledRelease from _all_ existing stages. Returns deleted document. */
  deleteScheduledRelease?: Maybe<ScheduledRelease>;
  /** Delete one storageEquipment from _all_ existing stages. Returns deleted document. */
  deleteStorageEquipment?: Maybe<StorageEquipment>;
  /** Publish one asset */
  publishAsset?: Maybe<Asset>;
  /** Publish one cPU */
  publishCPU?: Maybe<Cpu>;
  /** Publish one gPU */
  publishGPU?: Maybe<Gpu>;
  /** Publish one laptop */
  publishLaptop?: Maybe<Laptop>;
  /**
   * Publish many Asset documents
   * @deprecated Please use the new paginated many mutation (publishManyAssetsConnection)
   */
  publishManyAssets: BatchPayload;
  /** Publish many Asset documents */
  publishManyAssetsConnection: AssetConnection;
  /**
   * Publish many CPU documents
   * @deprecated Please use the new paginated many mutation (publishManyCPUsConnection)
   */
  publishManyCPUs: BatchPayload;
  /** Publish many CPU documents */
  publishManyCPUsConnection: CpuConnection;
  /**
   * Publish many GPU documents
   * @deprecated Please use the new paginated many mutation (publishManyGPUsConnection)
   */
  publishManyGPUs: BatchPayload;
  /** Publish many GPU documents */
  publishManyGPUsConnection: GpuConnection;
  /**
   * Publish many Laptop documents
   * @deprecated Please use the new paginated many mutation (publishManyLaptopsConnection)
   */
  publishManyLaptops: BatchPayload;
  /** Publish many Laptop documents */
  publishManyLaptopsConnection: LaptopConnection;
  /**
   * Publish many Motherboard documents
   * @deprecated Please use the new paginated many mutation (publishManyMotherboardsConnection)
   */
  publishManyMotherboards: BatchPayload;
  /** Publish many Motherboard documents */
  publishManyMotherboardsConnection: MotherboardConnection;
  /**
   * Publish many StorageEquipment documents
   * @deprecated Please use the new paginated many mutation (publishManyStorage_EquipmentConnection)
   */
  publishManyStorage_Equipment: BatchPayload;
  /** Publish many StorageEquipment documents */
  publishManyStorage_EquipmentConnection: StorageEquipmentConnection;
  /** Publish one motherboard */
  publishMotherboard?: Maybe<Motherboard>;
  /** Publish one storageEquipment */
  publishStorageEquipment?: Maybe<StorageEquipment>;
  /** Schedule to publish one asset */
  schedulePublishAsset?: Maybe<Asset>;
  /** Schedule to publish one cPU */
  schedulePublishCPU?: Maybe<Cpu>;
  /** Schedule to publish one gPU */
  schedulePublishGPU?: Maybe<Gpu>;
  /** Schedule to publish one laptop */
  schedulePublishLaptop?: Maybe<Laptop>;
  /** Schedule to publish one motherboard */
  schedulePublishMotherboard?: Maybe<Motherboard>;
  /** Schedule to publish one storageEquipment */
  schedulePublishStorageEquipment?: Maybe<StorageEquipment>;
  /** Unpublish one asset from selected stages. Unpublish either the complete document with its relations, localizations and base data or specific localizations only. */
  scheduleUnpublishAsset?: Maybe<Asset>;
  /** Unpublish one cPU from selected stages. Unpublish either the complete document with its relations, localizations and base data or specific localizations only. */
  scheduleUnpublishCPU?: Maybe<Cpu>;
  /** Unpublish one gPU from selected stages. Unpublish either the complete document with its relations, localizations and base data or specific localizations only. */
  scheduleUnpublishGPU?: Maybe<Gpu>;
  /** Unpublish one laptop from selected stages. Unpublish either the complete document with its relations, localizations and base data or specific localizations only. */
  scheduleUnpublishLaptop?: Maybe<Laptop>;
  /** Unpublish one motherboard from selected stages. Unpublish either the complete document with its relations, localizations and base data or specific localizations only. */
  scheduleUnpublishMotherboard?: Maybe<Motherboard>;
  /** Unpublish one storageEquipment from selected stages. Unpublish either the complete document with its relations, localizations and base data or specific localizations only. */
  scheduleUnpublishStorageEquipment?: Maybe<StorageEquipment>;
  /** Unpublish one asset from selected stages. Unpublish either the complete document with its relations, localizations and base data or specific localizations only. */
  unpublishAsset?: Maybe<Asset>;
  /** Unpublish one cPU from selected stages. Unpublish either the complete document with its relations, localizations and base data or specific localizations only. */
  unpublishCPU?: Maybe<Cpu>;
  /** Unpublish one gPU from selected stages. Unpublish either the complete document with its relations, localizations and base data or specific localizations only. */
  unpublishGPU?: Maybe<Gpu>;
  /** Unpublish one laptop from selected stages. Unpublish either the complete document with its relations, localizations and base data or specific localizations only. */
  unpublishLaptop?: Maybe<Laptop>;
  /**
   * Unpublish many Asset documents
   * @deprecated Please use the new paginated many mutation (unpublishManyAssetsConnection)
   */
  unpublishManyAssets: BatchPayload;
  /** Find many Asset documents that match criteria in specified stage and unpublish from target stages */
  unpublishManyAssetsConnection: AssetConnection;
  /**
   * Unpublish many CPU documents
   * @deprecated Please use the new paginated many mutation (unpublishManyCPUsConnection)
   */
  unpublishManyCPUs: BatchPayload;
  /** Find many CPU documents that match criteria in specified stage and unpublish from target stages */
  unpublishManyCPUsConnection: CpuConnection;
  /**
   * Unpublish many GPU documents
   * @deprecated Please use the new paginated many mutation (unpublishManyGPUsConnection)
   */
  unpublishManyGPUs: BatchPayload;
  /** Find many GPU documents that match criteria in specified stage and unpublish from target stages */
  unpublishManyGPUsConnection: GpuConnection;
  /**
   * Unpublish many Laptop documents
   * @deprecated Please use the new paginated many mutation (unpublishManyLaptopsConnection)
   */
  unpublishManyLaptops: BatchPayload;
  /** Find many Laptop documents that match criteria in specified stage and unpublish from target stages */
  unpublishManyLaptopsConnection: LaptopConnection;
  /**
   * Unpublish many Motherboard documents
   * @deprecated Please use the new paginated many mutation (unpublishManyMotherboardsConnection)
   */
  unpublishManyMotherboards: BatchPayload;
  /** Find many Motherboard documents that match criteria in specified stage and unpublish from target stages */
  unpublishManyMotherboardsConnection: MotherboardConnection;
  /**
   * Unpublish many StorageEquipment documents
   * @deprecated Please use the new paginated many mutation (unpublishManyStorage_EquipmentConnection)
   */
  unpublishManyStorage_Equipment: BatchPayload;
  /** Find many StorageEquipment documents that match criteria in specified stage and unpublish from target stages */
  unpublishManyStorage_EquipmentConnection: StorageEquipmentConnection;
  /** Unpublish one motherboard from selected stages. Unpublish either the complete document with its relations, localizations and base data or specific localizations only. */
  unpublishMotherboard?: Maybe<Motherboard>;
  /** Unpublish one storageEquipment from selected stages. Unpublish either the complete document with its relations, localizations and base data or specific localizations only. */
  unpublishStorageEquipment?: Maybe<StorageEquipment>;
  /** Update one asset */
  updateAsset?: Maybe<Asset>;
  /** Update one cPU */
  updateCPU?: Maybe<Cpu>;
  /** Update one gPU */
  updateGPU?: Maybe<Gpu>;
  /** Update one laptop */
  updateLaptop?: Maybe<Laptop>;
  /**
   * Update many assets
   * @deprecated Please use the new paginated many mutation (updateManyAssetsConnection)
   */
  updateManyAssets: BatchPayload;
  /** Update many Asset documents */
  updateManyAssetsConnection: AssetConnection;
  /**
   * Update many cPUs
   * @deprecated Please use the new paginated many mutation (updateManyCPUsConnection)
   */
  updateManyCPUs: BatchPayload;
  /** Update many CPU documents */
  updateManyCPUsConnection: CpuConnection;
  /**
   * Update many gPUs
   * @deprecated Please use the new paginated many mutation (updateManyGPUsConnection)
   */
  updateManyGPUs: BatchPayload;
  /** Update many GPU documents */
  updateManyGPUsConnection: GpuConnection;
  /**
   * Update many laptops
   * @deprecated Please use the new paginated many mutation (updateManyLaptopsConnection)
   */
  updateManyLaptops: BatchPayload;
  /** Update many Laptop documents */
  updateManyLaptopsConnection: LaptopConnection;
  /**
   * Update many motherboards
   * @deprecated Please use the new paginated many mutation (updateManyMotherboardsConnection)
   */
  updateManyMotherboards: BatchPayload;
  /** Update many Motherboard documents */
  updateManyMotherboardsConnection: MotherboardConnection;
  /**
   * Update many storage_Equipment
   * @deprecated Please use the new paginated many mutation (updateManyStorage_EquipmentConnection)
   */
  updateManyStorage_Equipment: BatchPayload;
  /** Update many StorageEquipment documents */
  updateManyStorage_EquipmentConnection: StorageEquipmentConnection;
  /** Update one motherboard */
  updateMotherboard?: Maybe<Motherboard>;
  /** Update one scheduledRelease */
  updateScheduledRelease?: Maybe<ScheduledRelease>;
  /** Update one storageEquipment */
  updateStorageEquipment?: Maybe<StorageEquipment>;
  /** Upsert one asset */
  upsertAsset?: Maybe<Asset>;
  /** Upsert one cPU */
  upsertCPU?: Maybe<Cpu>;
  /** Upsert one gPU */
  upsertGPU?: Maybe<Gpu>;
  /** Upsert one laptop */
  upsertLaptop?: Maybe<Laptop>;
  /** Upsert one motherboard */
  upsertMotherboard?: Maybe<Motherboard>;
  /** Upsert one storageEquipment */
  upsertStorageEquipment?: Maybe<StorageEquipment>;
};


export type MutationCreateAssetArgs = {
  data: AssetCreateInput;
};


export type MutationCreateCpuArgs = {
  data: CpuCreateInput;
};


export type MutationCreateGpuArgs = {
  data: GpuCreateInput;
};


export type MutationCreateLaptopArgs = {
  data: LaptopCreateInput;
};


export type MutationCreateMotherboardArgs = {
  data: MotherboardCreateInput;
};


export type MutationCreateScheduledReleaseArgs = {
  data: ScheduledReleaseCreateInput;
};


export type MutationCreateStorageEquipmentArgs = {
  data: StorageEquipmentCreateInput;
};


export type MutationDeleteAssetArgs = {
  where: AssetWhereUniqueInput;
};


export type MutationDeleteCpuArgs = {
  where: CpuWhereUniqueInput;
};


export type MutationDeleteGpuArgs = {
  where: GpuWhereUniqueInput;
};


export type MutationDeleteLaptopArgs = {
  where: LaptopWhereUniqueInput;
};


export type MutationDeleteManyAssetsArgs = {
  where?: InputMaybe<AssetManyWhereInput>;
};


export type MutationDeleteManyAssetsConnectionArgs = {
  after?: InputMaybe<Scalars['ID']>;
  before?: InputMaybe<Scalars['ID']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  skip?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<AssetManyWhereInput>;
};


export type MutationDeleteManyCpUsArgs = {
  where?: InputMaybe<CpuManyWhereInput>;
};


export type MutationDeleteManyCpUsConnectionArgs = {
  after?: InputMaybe<Scalars['ID']>;
  before?: InputMaybe<Scalars['ID']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  skip?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<CpuManyWhereInput>;
};


export type MutationDeleteManyGpUsArgs = {
  where?: InputMaybe<GpuManyWhereInput>;
};


export type MutationDeleteManyGpUsConnectionArgs = {
  after?: InputMaybe<Scalars['ID']>;
  before?: InputMaybe<Scalars['ID']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  skip?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<GpuManyWhereInput>;
};


export type MutationDeleteManyLaptopsArgs = {
  where?: InputMaybe<LaptopManyWhereInput>;
};


export type MutationDeleteManyLaptopsConnectionArgs = {
  after?: InputMaybe<Scalars['ID']>;
  before?: InputMaybe<Scalars['ID']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  skip?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<LaptopManyWhereInput>;
};


export type MutationDeleteManyMotherboardsArgs = {
  where?: InputMaybe<MotherboardManyWhereInput>;
};


export type MutationDeleteManyMotherboardsConnectionArgs = {
  after?: InputMaybe<Scalars['ID']>;
  before?: InputMaybe<Scalars['ID']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  skip?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<MotherboardManyWhereInput>;
};


export type MutationDeleteManyStorage_EquipmentArgs = {
  where?: InputMaybe<StorageEquipmentManyWhereInput>;
};


export type MutationDeleteManyStorage_EquipmentConnectionArgs = {
  after?: InputMaybe<Scalars['ID']>;
  before?: InputMaybe<Scalars['ID']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  skip?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<StorageEquipmentManyWhereInput>;
};


export type MutationDeleteMotherboardArgs = {
  where: MotherboardWhereUniqueInput;
};


export type MutationDeleteScheduledOperationArgs = {
  where: ScheduledOperationWhereUniqueInput;
};


export type MutationDeleteScheduledReleaseArgs = {
  where: ScheduledReleaseWhereUniqueInput;
};


export type MutationDeleteStorageEquipmentArgs = {
  where: StorageEquipmentWhereUniqueInput;
};


export type MutationPublishAssetArgs = {
  locales?: InputMaybe<Array<Locale>>;
  publishBase?: InputMaybe<Scalars['Boolean']>;
  to?: Array<Stage>;
  where: AssetWhereUniqueInput;
  withDefaultLocale?: InputMaybe<Scalars['Boolean']>;
};


export type MutationPublishCpuArgs = {
  to?: Array<Stage>;
  where: CpuWhereUniqueInput;
};


export type MutationPublishGpuArgs = {
  to?: Array<Stage>;
  where: GpuWhereUniqueInput;
};


export type MutationPublishLaptopArgs = {
  to?: Array<Stage>;
  where: LaptopWhereUniqueInput;
};


export type MutationPublishManyAssetsArgs = {
  locales?: InputMaybe<Array<Locale>>;
  publishBase?: InputMaybe<Scalars['Boolean']>;
  to?: Array<Stage>;
  where?: InputMaybe<AssetManyWhereInput>;
  withDefaultLocale?: InputMaybe<Scalars['Boolean']>;
};


export type MutationPublishManyAssetsConnectionArgs = {
  after?: InputMaybe<Scalars['ID']>;
  before?: InputMaybe<Scalars['ID']>;
  first?: InputMaybe<Scalars['Int']>;
  from?: InputMaybe<Stage>;
  last?: InputMaybe<Scalars['Int']>;
  locales?: InputMaybe<Array<Locale>>;
  publishBase?: InputMaybe<Scalars['Boolean']>;
  skip?: InputMaybe<Scalars['Int']>;
  to?: Array<Stage>;
  where?: InputMaybe<AssetManyWhereInput>;
  withDefaultLocale?: InputMaybe<Scalars['Boolean']>;
};


export type MutationPublishManyCpUsArgs = {
  to?: Array<Stage>;
  where?: InputMaybe<CpuManyWhereInput>;
};


export type MutationPublishManyCpUsConnectionArgs = {
  after?: InputMaybe<Scalars['ID']>;
  before?: InputMaybe<Scalars['ID']>;
  first?: InputMaybe<Scalars['Int']>;
  from?: InputMaybe<Stage>;
  last?: InputMaybe<Scalars['Int']>;
  skip?: InputMaybe<Scalars['Int']>;
  to?: Array<Stage>;
  where?: InputMaybe<CpuManyWhereInput>;
};


export type MutationPublishManyGpUsArgs = {
  to?: Array<Stage>;
  where?: InputMaybe<GpuManyWhereInput>;
};


export type MutationPublishManyGpUsConnectionArgs = {
  after?: InputMaybe<Scalars['ID']>;
  before?: InputMaybe<Scalars['ID']>;
  first?: InputMaybe<Scalars['Int']>;
  from?: InputMaybe<Stage>;
  last?: InputMaybe<Scalars['Int']>;
  skip?: InputMaybe<Scalars['Int']>;
  to?: Array<Stage>;
  where?: InputMaybe<GpuManyWhereInput>;
};


export type MutationPublishManyLaptopsArgs = {
  to?: Array<Stage>;
  where?: InputMaybe<LaptopManyWhereInput>;
};


export type MutationPublishManyLaptopsConnectionArgs = {
  after?: InputMaybe<Scalars['ID']>;
  before?: InputMaybe<Scalars['ID']>;
  first?: InputMaybe<Scalars['Int']>;
  from?: InputMaybe<Stage>;
  last?: InputMaybe<Scalars['Int']>;
  skip?: InputMaybe<Scalars['Int']>;
  to?: Array<Stage>;
  where?: InputMaybe<LaptopManyWhereInput>;
};


export type MutationPublishManyMotherboardsArgs = {
  to?: Array<Stage>;
  where?: InputMaybe<MotherboardManyWhereInput>;
};


export type MutationPublishManyMotherboardsConnectionArgs = {
  after?: InputMaybe<Scalars['ID']>;
  before?: InputMaybe<Scalars['ID']>;
  first?: InputMaybe<Scalars['Int']>;
  from?: InputMaybe<Stage>;
  last?: InputMaybe<Scalars['Int']>;
  skip?: InputMaybe<Scalars['Int']>;
  to?: Array<Stage>;
  where?: InputMaybe<MotherboardManyWhereInput>;
};


export type MutationPublishManyStorage_EquipmentArgs = {
  to?: Array<Stage>;
  where?: InputMaybe<StorageEquipmentManyWhereInput>;
};


export type MutationPublishManyStorage_EquipmentConnectionArgs = {
  after?: InputMaybe<Scalars['ID']>;
  before?: InputMaybe<Scalars['ID']>;
  first?: InputMaybe<Scalars['Int']>;
  from?: InputMaybe<Stage>;
  last?: InputMaybe<Scalars['Int']>;
  skip?: InputMaybe<Scalars['Int']>;
  to?: Array<Stage>;
  where?: InputMaybe<StorageEquipmentManyWhereInput>;
};


export type MutationPublishMotherboardArgs = {
  to?: Array<Stage>;
  where: MotherboardWhereUniqueInput;
};


export type MutationPublishStorageEquipmentArgs = {
  to?: Array<Stage>;
  where: StorageEquipmentWhereUniqueInput;
};


export type MutationSchedulePublishAssetArgs = {
  locales?: InputMaybe<Array<Locale>>;
  publishBase?: InputMaybe<Scalars['Boolean']>;
  releaseAt?: InputMaybe<Scalars['DateTime']>;
  releaseId?: InputMaybe<Scalars['String']>;
  to?: Array<Stage>;
  where: AssetWhereUniqueInput;
  withDefaultLocale?: InputMaybe<Scalars['Boolean']>;
};


export type MutationSchedulePublishCpuArgs = {
  releaseAt?: InputMaybe<Scalars['DateTime']>;
  releaseId?: InputMaybe<Scalars['String']>;
  to?: Array<Stage>;
  where: CpuWhereUniqueInput;
};


export type MutationSchedulePublishGpuArgs = {
  releaseAt?: InputMaybe<Scalars['DateTime']>;
  releaseId?: InputMaybe<Scalars['String']>;
  to?: Array<Stage>;
  where: GpuWhereUniqueInput;
};


export type MutationSchedulePublishLaptopArgs = {
  releaseAt?: InputMaybe<Scalars['DateTime']>;
  releaseId?: InputMaybe<Scalars['String']>;
  to?: Array<Stage>;
  where: LaptopWhereUniqueInput;
};


export type MutationSchedulePublishMotherboardArgs = {
  releaseAt?: InputMaybe<Scalars['DateTime']>;
  releaseId?: InputMaybe<Scalars['String']>;
  to?: Array<Stage>;
  where: MotherboardWhereUniqueInput;
};


export type MutationSchedulePublishStorageEquipmentArgs = {
  releaseAt?: InputMaybe<Scalars['DateTime']>;
  releaseId?: InputMaybe<Scalars['String']>;
  to?: Array<Stage>;
  where: StorageEquipmentWhereUniqueInput;
};


export type MutationScheduleUnpublishAssetArgs = {
  from?: Array<Stage>;
  locales?: InputMaybe<Array<Locale>>;
  releaseAt?: InputMaybe<Scalars['DateTime']>;
  releaseId?: InputMaybe<Scalars['String']>;
  unpublishBase?: InputMaybe<Scalars['Boolean']>;
  where: AssetWhereUniqueInput;
};


export type MutationScheduleUnpublishCpuArgs = {
  from?: Array<Stage>;
  releaseAt?: InputMaybe<Scalars['DateTime']>;
  releaseId?: InputMaybe<Scalars['String']>;
  where: CpuWhereUniqueInput;
};


export type MutationScheduleUnpublishGpuArgs = {
  from?: Array<Stage>;
  releaseAt?: InputMaybe<Scalars['DateTime']>;
  releaseId?: InputMaybe<Scalars['String']>;
  where: GpuWhereUniqueInput;
};


export type MutationScheduleUnpublishLaptopArgs = {
  from?: Array<Stage>;
  releaseAt?: InputMaybe<Scalars['DateTime']>;
  releaseId?: InputMaybe<Scalars['String']>;
  where: LaptopWhereUniqueInput;
};


export type MutationScheduleUnpublishMotherboardArgs = {
  from?: Array<Stage>;
  releaseAt?: InputMaybe<Scalars['DateTime']>;
  releaseId?: InputMaybe<Scalars['String']>;
  where: MotherboardWhereUniqueInput;
};


export type MutationScheduleUnpublishStorageEquipmentArgs = {
  from?: Array<Stage>;
  releaseAt?: InputMaybe<Scalars['DateTime']>;
  releaseId?: InputMaybe<Scalars['String']>;
  where: StorageEquipmentWhereUniqueInput;
};


export type MutationUnpublishAssetArgs = {
  from?: Array<Stage>;
  locales?: InputMaybe<Array<Locale>>;
  unpublishBase?: InputMaybe<Scalars['Boolean']>;
  where: AssetWhereUniqueInput;
};


export type MutationUnpublishCpuArgs = {
  from?: Array<Stage>;
  where: CpuWhereUniqueInput;
};


export type MutationUnpublishGpuArgs = {
  from?: Array<Stage>;
  where: GpuWhereUniqueInput;
};


export type MutationUnpublishLaptopArgs = {
  from?: Array<Stage>;
  where: LaptopWhereUniqueInput;
};


export type MutationUnpublishManyAssetsArgs = {
  from?: Array<Stage>;
  locales?: InputMaybe<Array<Locale>>;
  unpublishBase?: InputMaybe<Scalars['Boolean']>;
  where?: InputMaybe<AssetManyWhereInput>;
};


export type MutationUnpublishManyAssetsConnectionArgs = {
  after?: InputMaybe<Scalars['ID']>;
  before?: InputMaybe<Scalars['ID']>;
  first?: InputMaybe<Scalars['Int']>;
  from?: Array<Stage>;
  last?: InputMaybe<Scalars['Int']>;
  locales?: InputMaybe<Array<Locale>>;
  skip?: InputMaybe<Scalars['Int']>;
  stage?: InputMaybe<Stage>;
  unpublishBase?: InputMaybe<Scalars['Boolean']>;
  where?: InputMaybe<AssetManyWhereInput>;
};


export type MutationUnpublishManyCpUsArgs = {
  from?: Array<Stage>;
  where?: InputMaybe<CpuManyWhereInput>;
};


export type MutationUnpublishManyCpUsConnectionArgs = {
  after?: InputMaybe<Scalars['ID']>;
  before?: InputMaybe<Scalars['ID']>;
  first?: InputMaybe<Scalars['Int']>;
  from?: Array<Stage>;
  last?: InputMaybe<Scalars['Int']>;
  skip?: InputMaybe<Scalars['Int']>;
  stage?: InputMaybe<Stage>;
  where?: InputMaybe<CpuManyWhereInput>;
};


export type MutationUnpublishManyGpUsArgs = {
  from?: Array<Stage>;
  where?: InputMaybe<GpuManyWhereInput>;
};


export type MutationUnpublishManyGpUsConnectionArgs = {
  after?: InputMaybe<Scalars['ID']>;
  before?: InputMaybe<Scalars['ID']>;
  first?: InputMaybe<Scalars['Int']>;
  from?: Array<Stage>;
  last?: InputMaybe<Scalars['Int']>;
  skip?: InputMaybe<Scalars['Int']>;
  stage?: InputMaybe<Stage>;
  where?: InputMaybe<GpuManyWhereInput>;
};


export type MutationUnpublishManyLaptopsArgs = {
  from?: Array<Stage>;
  where?: InputMaybe<LaptopManyWhereInput>;
};


export type MutationUnpublishManyLaptopsConnectionArgs = {
  after?: InputMaybe<Scalars['ID']>;
  before?: InputMaybe<Scalars['ID']>;
  first?: InputMaybe<Scalars['Int']>;
  from?: Array<Stage>;
  last?: InputMaybe<Scalars['Int']>;
  skip?: InputMaybe<Scalars['Int']>;
  stage?: InputMaybe<Stage>;
  where?: InputMaybe<LaptopManyWhereInput>;
};


export type MutationUnpublishManyMotherboardsArgs = {
  from?: Array<Stage>;
  where?: InputMaybe<MotherboardManyWhereInput>;
};


export type MutationUnpublishManyMotherboardsConnectionArgs = {
  after?: InputMaybe<Scalars['ID']>;
  before?: InputMaybe<Scalars['ID']>;
  first?: InputMaybe<Scalars['Int']>;
  from?: Array<Stage>;
  last?: InputMaybe<Scalars['Int']>;
  skip?: InputMaybe<Scalars['Int']>;
  stage?: InputMaybe<Stage>;
  where?: InputMaybe<MotherboardManyWhereInput>;
};


export type MutationUnpublishManyStorage_EquipmentArgs = {
  from?: Array<Stage>;
  where?: InputMaybe<StorageEquipmentManyWhereInput>;
};


export type MutationUnpublishManyStorage_EquipmentConnectionArgs = {
  after?: InputMaybe<Scalars['ID']>;
  before?: InputMaybe<Scalars['ID']>;
  first?: InputMaybe<Scalars['Int']>;
  from?: Array<Stage>;
  last?: InputMaybe<Scalars['Int']>;
  skip?: InputMaybe<Scalars['Int']>;
  stage?: InputMaybe<Stage>;
  where?: InputMaybe<StorageEquipmentManyWhereInput>;
};


export type MutationUnpublishMotherboardArgs = {
  from?: Array<Stage>;
  where: MotherboardWhereUniqueInput;
};


export type MutationUnpublishStorageEquipmentArgs = {
  from?: Array<Stage>;
  where: StorageEquipmentWhereUniqueInput;
};


export type MutationUpdateAssetArgs = {
  data: AssetUpdateInput;
  where: AssetWhereUniqueInput;
};


export type MutationUpdateCpuArgs = {
  data: CpuUpdateInput;
  where: CpuWhereUniqueInput;
};


export type MutationUpdateGpuArgs = {
  data: GpuUpdateInput;
  where: GpuWhereUniqueInput;
};


export type MutationUpdateLaptopArgs = {
  data: LaptopUpdateInput;
  where: LaptopWhereUniqueInput;
};


export type MutationUpdateManyAssetsArgs = {
  data: AssetUpdateManyInput;
  where?: InputMaybe<AssetManyWhereInput>;
};


export type MutationUpdateManyAssetsConnectionArgs = {
  after?: InputMaybe<Scalars['ID']>;
  before?: InputMaybe<Scalars['ID']>;
  data: AssetUpdateManyInput;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  skip?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<AssetManyWhereInput>;
};


export type MutationUpdateManyCpUsArgs = {
  data: CpuUpdateManyInput;
  where?: InputMaybe<CpuManyWhereInput>;
};


export type MutationUpdateManyCpUsConnectionArgs = {
  after?: InputMaybe<Scalars['ID']>;
  before?: InputMaybe<Scalars['ID']>;
  data: CpuUpdateManyInput;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  skip?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<CpuManyWhereInput>;
};


export type MutationUpdateManyGpUsArgs = {
  data: GpuUpdateManyInput;
  where?: InputMaybe<GpuManyWhereInput>;
};


export type MutationUpdateManyGpUsConnectionArgs = {
  after?: InputMaybe<Scalars['ID']>;
  before?: InputMaybe<Scalars['ID']>;
  data: GpuUpdateManyInput;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  skip?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<GpuManyWhereInput>;
};


export type MutationUpdateManyLaptopsArgs = {
  data: LaptopUpdateManyInput;
  where?: InputMaybe<LaptopManyWhereInput>;
};


export type MutationUpdateManyLaptopsConnectionArgs = {
  after?: InputMaybe<Scalars['ID']>;
  before?: InputMaybe<Scalars['ID']>;
  data: LaptopUpdateManyInput;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  skip?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<LaptopManyWhereInput>;
};


export type MutationUpdateManyMotherboardsArgs = {
  data: MotherboardUpdateManyInput;
  where?: InputMaybe<MotherboardManyWhereInput>;
};


export type MutationUpdateManyMotherboardsConnectionArgs = {
  after?: InputMaybe<Scalars['ID']>;
  before?: InputMaybe<Scalars['ID']>;
  data: MotherboardUpdateManyInput;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  skip?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<MotherboardManyWhereInput>;
};


export type MutationUpdateManyStorage_EquipmentArgs = {
  data: StorageEquipmentUpdateManyInput;
  where?: InputMaybe<StorageEquipmentManyWhereInput>;
};


export type MutationUpdateManyStorage_EquipmentConnectionArgs = {
  after?: InputMaybe<Scalars['ID']>;
  before?: InputMaybe<Scalars['ID']>;
  data: StorageEquipmentUpdateManyInput;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  skip?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<StorageEquipmentManyWhereInput>;
};


export type MutationUpdateMotherboardArgs = {
  data: MotherboardUpdateInput;
  where: MotherboardWhereUniqueInput;
};


export type MutationUpdateScheduledReleaseArgs = {
  data: ScheduledReleaseUpdateInput;
  where: ScheduledReleaseWhereUniqueInput;
};


export type MutationUpdateStorageEquipmentArgs = {
  data: StorageEquipmentUpdateInput;
  where: StorageEquipmentWhereUniqueInput;
};


export type MutationUpsertAssetArgs = {
  upsert: AssetUpsertInput;
  where: AssetWhereUniqueInput;
};


export type MutationUpsertCpuArgs = {
  upsert: CpuUpsertInput;
  where: CpuWhereUniqueInput;
};


export type MutationUpsertGpuArgs = {
  upsert: GpuUpsertInput;
  where: GpuWhereUniqueInput;
};


export type MutationUpsertLaptopArgs = {
  upsert: LaptopUpsertInput;
  where: LaptopWhereUniqueInput;
};


export type MutationUpsertMotherboardArgs = {
  upsert: MotherboardUpsertInput;
  where: MotherboardWhereUniqueInput;
};


export type MutationUpsertStorageEquipmentArgs = {
  upsert: StorageEquipmentUpsertInput;
  where: StorageEquipmentWhereUniqueInput;
};

/** An object with an ID */
export type Node = {
  /** The id of the object. */
  id: Scalars['ID'];
  /** The Stage of an object */
  stage: Stage;
};

/** Information about pagination in a connection. */
export type PageInfo = {
  __typename?: 'PageInfo';
  /** When paginating forwards, the cursor to continue. */
  endCursor?: Maybe<Scalars['String']>;
  /** When paginating forwards, are there more items? */
  hasNextPage: Scalars['Boolean'];
  /** When paginating backwards, are there more items? */
  hasPreviousPage: Scalars['Boolean'];
  /** Number of items in the current page. */
  pageSize?: Maybe<Scalars['Int']>;
  /** When paginating backwards, the cursor to continue. */
  startCursor?: Maybe<Scalars['String']>;
};

export type PublishLocaleInput = {
  /** Locales to publish */
  locale: Locale;
  /** Stages to publish selected locales to */
  stages: Array<Stage>;
};

export type Query = {
  __typename?: 'Query';
  /** Retrieve a single asset */
  asset?: Maybe<Asset>;
  /** Retrieve document version */
  assetVersion?: Maybe<DocumentVersion>;
  /** Retrieve multiple assets */
  assets: Array<Asset>;
  /** Retrieve multiple assets using the Relay connection interface */
  assetsConnection: AssetConnection;
  /** Retrieve a single cPU */
  cPU?: Maybe<Cpu>;
  /** Retrieve document version */
  cPUVersion?: Maybe<DocumentVersion>;
  /** Retrieve multiple cPUs */
  cPUs: Array<Cpu>;
  /** Retrieve multiple cPUs using the Relay connection interface */
  cPUsConnection: CpuConnection;
  /** Retrieve a single gPU */
  gPU?: Maybe<Gpu>;
  /** Retrieve document version */
  gPUVersion?: Maybe<DocumentVersion>;
  /** Retrieve multiple gPUs */
  gPUs: Array<Gpu>;
  /** Retrieve multiple gPUs using the Relay connection interface */
  gPUsConnection: GpuConnection;
  /** Retrieve a single laptop */
  laptop?: Maybe<Laptop>;
  /** Retrieve document version */
  laptopVersion?: Maybe<DocumentVersion>;
  /** Retrieve multiple laptops */
  laptops: Array<Laptop>;
  /** Retrieve multiple laptops using the Relay connection interface */
  laptopsConnection: LaptopConnection;
  /** Retrieve a single motherboard */
  motherboard?: Maybe<Motherboard>;
  /** Retrieve document version */
  motherboardVersion?: Maybe<DocumentVersion>;
  /** Retrieve multiple motherboards */
  motherboards: Array<Motherboard>;
  /** Retrieve multiple motherboards using the Relay connection interface */
  motherboardsConnection: MotherboardConnection;
  /** Fetches an object given its ID */
  node?: Maybe<Node>;
  /** Retrieve a single scheduledOperation */
  scheduledOperation?: Maybe<ScheduledOperation>;
  /** Retrieve multiple scheduledOperations */
  scheduledOperations: Array<ScheduledOperation>;
  /** Retrieve multiple scheduledOperations using the Relay connection interface */
  scheduledOperationsConnection: ScheduledOperationConnection;
  /** Retrieve a single scheduledRelease */
  scheduledRelease?: Maybe<ScheduledRelease>;
  /** Retrieve multiple scheduledReleases */
  scheduledReleases: Array<ScheduledRelease>;
  /** Retrieve multiple scheduledReleases using the Relay connection interface */
  scheduledReleasesConnection: ScheduledReleaseConnection;
  /** Retrieve a single storageEquipment */
  storageEquipment?: Maybe<StorageEquipment>;
  /** Retrieve document version */
  storageEquipmentVersion?: Maybe<DocumentVersion>;
  /** Retrieve multiple storage_Equipment */
  storage_Equipment: Array<StorageEquipment>;
  /** Retrieve multiple storage_Equipment using the Relay connection interface */
  storage_EquipmentConnection: StorageEquipmentConnection;
  /** Retrieve a single user */
  user?: Maybe<User>;
  /** Retrieve multiple users */
  users: Array<User>;
  /** Retrieve multiple users using the Relay connection interface */
  usersConnection: UserConnection;
};


export type QueryAssetArgs = {
  locales?: Array<Locale>;
  stage?: Stage;
  where: AssetWhereUniqueInput;
};


export type QueryAssetVersionArgs = {
  where: VersionWhereInput;
};


export type QueryAssetsArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  locales?: Array<Locale>;
  orderBy?: InputMaybe<AssetOrderByInput>;
  skip?: InputMaybe<Scalars['Int']>;
  stage?: Stage;
  where?: InputMaybe<AssetWhereInput>;
};


export type QueryAssetsConnectionArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  locales?: Array<Locale>;
  orderBy?: InputMaybe<AssetOrderByInput>;
  skip?: InputMaybe<Scalars['Int']>;
  stage?: Stage;
  where?: InputMaybe<AssetWhereInput>;
};


export type QueryCPuArgs = {
  locales?: Array<Locale>;
  stage?: Stage;
  where: CpuWhereUniqueInput;
};


export type QueryCPuVersionArgs = {
  where: VersionWhereInput;
};


export type QueryCpUsArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  locales?: Array<Locale>;
  orderBy?: InputMaybe<CpuOrderByInput>;
  skip?: InputMaybe<Scalars['Int']>;
  stage?: Stage;
  where?: InputMaybe<CpuWhereInput>;
};


export type QueryCpUsConnectionArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  locales?: Array<Locale>;
  orderBy?: InputMaybe<CpuOrderByInput>;
  skip?: InputMaybe<Scalars['Int']>;
  stage?: Stage;
  where?: InputMaybe<CpuWhereInput>;
};


export type QueryGPuArgs = {
  locales?: Array<Locale>;
  stage?: Stage;
  where: GpuWhereUniqueInput;
};


export type QueryGPuVersionArgs = {
  where: VersionWhereInput;
};


export type QueryGpUsArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  locales?: Array<Locale>;
  orderBy?: InputMaybe<GpuOrderByInput>;
  skip?: InputMaybe<Scalars['Int']>;
  stage?: Stage;
  where?: InputMaybe<GpuWhereInput>;
};


export type QueryGpUsConnectionArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  locales?: Array<Locale>;
  orderBy?: InputMaybe<GpuOrderByInput>;
  skip?: InputMaybe<Scalars['Int']>;
  stage?: Stage;
  where?: InputMaybe<GpuWhereInput>;
};


export type QueryLaptopArgs = {
  locales?: Array<Locale>;
  stage?: Stage;
  where: LaptopWhereUniqueInput;
};


export type QueryLaptopVersionArgs = {
  where: VersionWhereInput;
};


export type QueryLaptopsArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  locales?: Array<Locale>;
  orderBy?: InputMaybe<LaptopOrderByInput>;
  skip?: InputMaybe<Scalars['Int']>;
  stage?: Stage;
  where?: InputMaybe<LaptopWhereInput>;
};


export type QueryLaptopsConnectionArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  locales?: Array<Locale>;
  orderBy?: InputMaybe<LaptopOrderByInput>;
  skip?: InputMaybe<Scalars['Int']>;
  stage?: Stage;
  where?: InputMaybe<LaptopWhereInput>;
};


export type QueryMotherboardArgs = {
  locales?: Array<Locale>;
  stage?: Stage;
  where: MotherboardWhereUniqueInput;
};


export type QueryMotherboardVersionArgs = {
  where: VersionWhereInput;
};


export type QueryMotherboardsArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  locales?: Array<Locale>;
  orderBy?: InputMaybe<MotherboardOrderByInput>;
  skip?: InputMaybe<Scalars['Int']>;
  stage?: Stage;
  where?: InputMaybe<MotherboardWhereInput>;
};


export type QueryMotherboardsConnectionArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  locales?: Array<Locale>;
  orderBy?: InputMaybe<MotherboardOrderByInput>;
  skip?: InputMaybe<Scalars['Int']>;
  stage?: Stage;
  where?: InputMaybe<MotherboardWhereInput>;
};


export type QueryNodeArgs = {
  id: Scalars['ID'];
  locales?: Array<Locale>;
  stage?: Stage;
};


export type QueryScheduledOperationArgs = {
  locales?: Array<Locale>;
  stage?: Stage;
  where: ScheduledOperationWhereUniqueInput;
};


export type QueryScheduledOperationsArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  locales?: Array<Locale>;
  orderBy?: InputMaybe<ScheduledOperationOrderByInput>;
  skip?: InputMaybe<Scalars['Int']>;
  stage?: Stage;
  where?: InputMaybe<ScheduledOperationWhereInput>;
};


export type QueryScheduledOperationsConnectionArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  locales?: Array<Locale>;
  orderBy?: InputMaybe<ScheduledOperationOrderByInput>;
  skip?: InputMaybe<Scalars['Int']>;
  stage?: Stage;
  where?: InputMaybe<ScheduledOperationWhereInput>;
};


export type QueryScheduledReleaseArgs = {
  locales?: Array<Locale>;
  stage?: Stage;
  where: ScheduledReleaseWhereUniqueInput;
};


export type QueryScheduledReleasesArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  locales?: Array<Locale>;
  orderBy?: InputMaybe<ScheduledReleaseOrderByInput>;
  skip?: InputMaybe<Scalars['Int']>;
  stage?: Stage;
  where?: InputMaybe<ScheduledReleaseWhereInput>;
};


export type QueryScheduledReleasesConnectionArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  locales?: Array<Locale>;
  orderBy?: InputMaybe<ScheduledReleaseOrderByInput>;
  skip?: InputMaybe<Scalars['Int']>;
  stage?: Stage;
  where?: InputMaybe<ScheduledReleaseWhereInput>;
};


export type QueryStorageEquipmentArgs = {
  locales?: Array<Locale>;
  stage?: Stage;
  where: StorageEquipmentWhereUniqueInput;
};


export type QueryStorageEquipmentVersionArgs = {
  where: VersionWhereInput;
};


export type QueryStorage_EquipmentArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  locales?: Array<Locale>;
  orderBy?: InputMaybe<StorageEquipmentOrderByInput>;
  skip?: InputMaybe<Scalars['Int']>;
  stage?: Stage;
  where?: InputMaybe<StorageEquipmentWhereInput>;
};


export type QueryStorage_EquipmentConnectionArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  locales?: Array<Locale>;
  orderBy?: InputMaybe<StorageEquipmentOrderByInput>;
  skip?: InputMaybe<Scalars['Int']>;
  stage?: Stage;
  where?: InputMaybe<StorageEquipmentWhereInput>;
};


export type QueryUserArgs = {
  locales?: Array<Locale>;
  stage?: Stage;
  where: UserWhereUniqueInput;
};


export type QueryUsersArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  locales?: Array<Locale>;
  orderBy?: InputMaybe<UserOrderByInput>;
  skip?: InputMaybe<Scalars['Int']>;
  stage?: Stage;
  where?: InputMaybe<UserWhereInput>;
};


export type QueryUsersConnectionArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  locales?: Array<Locale>;
  orderBy?: InputMaybe<UserOrderByInput>;
  skip?: InputMaybe<Scalars['Int']>;
  stage?: Stage;
  where?: InputMaybe<UserWhereInput>;
};

/** Representing a RGBA color value: https://developer.mozilla.org/en-US/docs/Web/CSS/color_value#rgb()_and_rgba() */
export type Rgba = {
  __typename?: 'RGBA';
  a: Scalars['RGBATransparency'];
  b: Scalars['RGBAHue'];
  g: Scalars['RGBAHue'];
  r: Scalars['RGBAHue'];
};

/** Input type representing a RGBA color value: https://developer.mozilla.org/en-US/docs/Web/CSS/color_value#rgb()_and_rgba() */
export type RgbaInput = {
  a: Scalars['RGBATransparency'];
  b: Scalars['RGBAHue'];
  g: Scalars['RGBAHue'];
  r: Scalars['RGBAHue'];
};

/** Custom type representing a rich text value comprising of raw rich text ast, html, markdown and text values */
export type RichText = {
  __typename?: 'RichText';
  /** Returns HTMl representation */
  html: Scalars['String'];
  /** Returns Markdown representation */
  markdown: Scalars['String'];
  /** Returns AST representation */
  raw: Scalars['RichTextAST'];
  /** Returns plain-text contents of RichText */
  text: Scalars['String'];
};

/** Scheduled Operation system model */
export type ScheduledOperation = Node & {
  __typename?: 'ScheduledOperation';
  affectedDocuments: Array<ScheduledOperationAffectedDocument>;
  /** The time the document was created */
  createdAt: Scalars['DateTime'];
  /** User that created this document */
  createdBy?: Maybe<User>;
  /** Operation description */
  description?: Maybe<Scalars['String']>;
  /** Get the document in other stages */
  documentInStages: Array<ScheduledOperation>;
  /** Operation error message */
  errorMessage?: Maybe<Scalars['String']>;
  /** The unique identifier */
  id: Scalars['ID'];
  /** The time the document was published. Null on documents in draft stage. */
  publishedAt?: Maybe<Scalars['DateTime']>;
  /** User that last published this document */
  publishedBy?: Maybe<User>;
  /** Raw operation payload including all details, this field is subject to change */
  rawPayload: Scalars['Json'];
  /** The release this operation is scheduled for */
  release?: Maybe<ScheduledRelease>;
  /** System stage field */
  stage: Stage;
  /** operation Status */
  status: ScheduledOperationStatus;
  /** The time the document was updated */
  updatedAt: Scalars['DateTime'];
  /** User that last updated this document */
  updatedBy?: Maybe<User>;
};


/** Scheduled Operation system model */
export type ScheduledOperationAffectedDocumentsArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  locales?: InputMaybe<Array<Locale>>;
  skip?: InputMaybe<Scalars['Int']>;
};


/** Scheduled Operation system model */
export type ScheduledOperationCreatedByArgs = {
  locales?: InputMaybe<Array<Locale>>;
};


/** Scheduled Operation system model */
export type ScheduledOperationDocumentInStagesArgs = {
  includeCurrent?: Scalars['Boolean'];
  inheritLocale?: Scalars['Boolean'];
  stages?: Array<Stage>;
};


/** Scheduled Operation system model */
export type ScheduledOperationPublishedByArgs = {
  locales?: InputMaybe<Array<Locale>>;
};


/** Scheduled Operation system model */
export type ScheduledOperationReleaseArgs = {
  locales?: InputMaybe<Array<Locale>>;
};


/** Scheduled Operation system model */
export type ScheduledOperationUpdatedByArgs = {
  locales?: InputMaybe<Array<Locale>>;
};

export type ScheduledOperationAffectedDocument = Asset | Cpu | Gpu | Laptop | Motherboard | StorageEquipment;

export type ScheduledOperationConnectInput = {
  /** Allow to specify document position in list of connected documents, will default to appending at end of list */
  position?: InputMaybe<ConnectPositionInput>;
  /** Document to connect */
  where: ScheduledOperationWhereUniqueInput;
};

/** A connection to a list of items. */
export type ScheduledOperationConnection = {
  __typename?: 'ScheduledOperationConnection';
  aggregate: Aggregate;
  /** A list of edges. */
  edges: Array<ScheduledOperationEdge>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
};

export type ScheduledOperationCreateManyInlineInput = {
  /** Connect multiple existing ScheduledOperation documents */
  connect?: InputMaybe<Array<ScheduledOperationWhereUniqueInput>>;
};

export type ScheduledOperationCreateOneInlineInput = {
  /** Connect one existing ScheduledOperation document */
  connect?: InputMaybe<ScheduledOperationWhereUniqueInput>;
};

/** An edge in a connection. */
export type ScheduledOperationEdge = {
  __typename?: 'ScheduledOperationEdge';
  /** A cursor for use in pagination. */
  cursor: Scalars['String'];
  /** The item at the end of the edge. */
  node: ScheduledOperation;
};

/** Identifies documents */
export type ScheduledOperationManyWhereInput = {
  /** Logical AND on all given filters. */
  AND?: InputMaybe<Array<ScheduledOperationWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: InputMaybe<Array<ScheduledOperationWhereInput>>;
  /** Logical OR on all given filters. */
  OR?: InputMaybe<Array<ScheduledOperationWhereInput>>;
  /** Contains search across all appropriate fields. */
  _search?: InputMaybe<Scalars['String']>;
  createdAt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  createdAt_gt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  createdAt_gte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  createdAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  /** All values less than the given value. */
  createdAt_lt?: InputMaybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  createdAt_lte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  createdAt_not?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not contained in given list. */
  createdAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  createdBy?: InputMaybe<UserWhereInput>;
  description?: InputMaybe<Scalars['String']>;
  /** All values containing the given string. */
  description_contains?: InputMaybe<Scalars['String']>;
  /** All values ending with the given string. */
  description_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are contained in given list. */
  description_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** All values that are not equal to given value. */
  description_not?: InputMaybe<Scalars['String']>;
  /** All values not containing the given string. */
  description_not_contains?: InputMaybe<Scalars['String']>;
  /** All values not ending with the given string */
  description_not_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  description_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** All values not starting with the given string. */
  description_not_starts_with?: InputMaybe<Scalars['String']>;
  /** All values starting with the given string. */
  description_starts_with?: InputMaybe<Scalars['String']>;
  errorMessage?: InputMaybe<Scalars['String']>;
  /** All values containing the given string. */
  errorMessage_contains?: InputMaybe<Scalars['String']>;
  /** All values ending with the given string. */
  errorMessage_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are contained in given list. */
  errorMessage_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** All values that are not equal to given value. */
  errorMessage_not?: InputMaybe<Scalars['String']>;
  /** All values not containing the given string. */
  errorMessage_not_contains?: InputMaybe<Scalars['String']>;
  /** All values not ending with the given string */
  errorMessage_not_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  errorMessage_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** All values not starting with the given string. */
  errorMessage_not_starts_with?: InputMaybe<Scalars['String']>;
  /** All values starting with the given string. */
  errorMessage_starts_with?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['ID']>;
  /** All values containing the given string. */
  id_contains?: InputMaybe<Scalars['ID']>;
  /** All values ending with the given string. */
  id_ends_with?: InputMaybe<Scalars['ID']>;
  /** All values that are contained in given list. */
  id_in?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  /** All values that are not equal to given value. */
  id_not?: InputMaybe<Scalars['ID']>;
  /** All values not containing the given string. */
  id_not_contains?: InputMaybe<Scalars['ID']>;
  /** All values not ending with the given string */
  id_not_ends_with?: InputMaybe<Scalars['ID']>;
  /** All values that are not contained in given list. */
  id_not_in?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  /** All values not starting with the given string. */
  id_not_starts_with?: InputMaybe<Scalars['ID']>;
  /** All values starting with the given string. */
  id_starts_with?: InputMaybe<Scalars['ID']>;
  publishedAt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  publishedAt_gt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  publishedAt_gte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  publishedAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  /** All values less than the given value. */
  publishedAt_lt?: InputMaybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  publishedAt_lte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  publishedAt_not?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not contained in given list. */
  publishedAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  publishedBy?: InputMaybe<UserWhereInput>;
  release?: InputMaybe<ScheduledReleaseWhereInput>;
  status?: InputMaybe<ScheduledOperationStatus>;
  /** All values that are contained in given list. */
  status_in?: InputMaybe<Array<InputMaybe<ScheduledOperationStatus>>>;
  /** All values that are not equal to given value. */
  status_not?: InputMaybe<ScheduledOperationStatus>;
  /** All values that are not contained in given list. */
  status_not_in?: InputMaybe<Array<InputMaybe<ScheduledOperationStatus>>>;
  updatedAt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  updatedAt_gt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  updatedAt_gte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  updatedAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  /** All values less than the given value. */
  updatedAt_lt?: InputMaybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  updatedAt_lte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  updatedAt_not?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not contained in given list. */
  updatedAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  updatedBy?: InputMaybe<UserWhereInput>;
};

export enum ScheduledOperationOrderByInput {
  CreatedAtAsc = 'createdAt_ASC',
  CreatedAtDesc = 'createdAt_DESC',
  DescriptionAsc = 'description_ASC',
  DescriptionDesc = 'description_DESC',
  ErrorMessageAsc = 'errorMessage_ASC',
  ErrorMessageDesc = 'errorMessage_DESC',
  IdAsc = 'id_ASC',
  IdDesc = 'id_DESC',
  PublishedAtAsc = 'publishedAt_ASC',
  PublishedAtDesc = 'publishedAt_DESC',
  StatusAsc = 'status_ASC',
  StatusDesc = 'status_DESC',
  UpdatedAtAsc = 'updatedAt_ASC',
  UpdatedAtDesc = 'updatedAt_DESC'
}

/** System Scheduled Operation Status */
export enum ScheduledOperationStatus {
  Canceled = 'CANCELED',
  Completed = 'COMPLETED',
  Failed = 'FAILED',
  InProgress = 'IN_PROGRESS',
  Pending = 'PENDING'
}

export type ScheduledOperationUpdateManyInlineInput = {
  /** Connect multiple existing ScheduledOperation documents */
  connect?: InputMaybe<Array<ScheduledOperationConnectInput>>;
  /** Disconnect multiple ScheduledOperation documents */
  disconnect?: InputMaybe<Array<ScheduledOperationWhereUniqueInput>>;
  /** Override currently-connected documents with multiple existing ScheduledOperation documents */
  set?: InputMaybe<Array<ScheduledOperationWhereUniqueInput>>;
};

export type ScheduledOperationUpdateOneInlineInput = {
  /** Connect existing ScheduledOperation document */
  connect?: InputMaybe<ScheduledOperationWhereUniqueInput>;
  /** Disconnect currently connected ScheduledOperation document */
  disconnect?: InputMaybe<Scalars['Boolean']>;
};

/** Identifies documents */
export type ScheduledOperationWhereInput = {
  /** Logical AND on all given filters. */
  AND?: InputMaybe<Array<ScheduledOperationWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: InputMaybe<Array<ScheduledOperationWhereInput>>;
  /** Logical OR on all given filters. */
  OR?: InputMaybe<Array<ScheduledOperationWhereInput>>;
  /** Contains search across all appropriate fields. */
  _search?: InputMaybe<Scalars['String']>;
  createdAt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  createdAt_gt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  createdAt_gte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  createdAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  /** All values less than the given value. */
  createdAt_lt?: InputMaybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  createdAt_lte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  createdAt_not?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not contained in given list. */
  createdAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  createdBy?: InputMaybe<UserWhereInput>;
  description?: InputMaybe<Scalars['String']>;
  /** All values containing the given string. */
  description_contains?: InputMaybe<Scalars['String']>;
  /** All values ending with the given string. */
  description_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are contained in given list. */
  description_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** All values that are not equal to given value. */
  description_not?: InputMaybe<Scalars['String']>;
  /** All values not containing the given string. */
  description_not_contains?: InputMaybe<Scalars['String']>;
  /** All values not ending with the given string */
  description_not_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  description_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** All values not starting with the given string. */
  description_not_starts_with?: InputMaybe<Scalars['String']>;
  /** All values starting with the given string. */
  description_starts_with?: InputMaybe<Scalars['String']>;
  errorMessage?: InputMaybe<Scalars['String']>;
  /** All values containing the given string. */
  errorMessage_contains?: InputMaybe<Scalars['String']>;
  /** All values ending with the given string. */
  errorMessage_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are contained in given list. */
  errorMessage_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** All values that are not equal to given value. */
  errorMessage_not?: InputMaybe<Scalars['String']>;
  /** All values not containing the given string. */
  errorMessage_not_contains?: InputMaybe<Scalars['String']>;
  /** All values not ending with the given string */
  errorMessage_not_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  errorMessage_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** All values not starting with the given string. */
  errorMessage_not_starts_with?: InputMaybe<Scalars['String']>;
  /** All values starting with the given string. */
  errorMessage_starts_with?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['ID']>;
  /** All values containing the given string. */
  id_contains?: InputMaybe<Scalars['ID']>;
  /** All values ending with the given string. */
  id_ends_with?: InputMaybe<Scalars['ID']>;
  /** All values that are contained in given list. */
  id_in?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  /** All values that are not equal to given value. */
  id_not?: InputMaybe<Scalars['ID']>;
  /** All values not containing the given string. */
  id_not_contains?: InputMaybe<Scalars['ID']>;
  /** All values not ending with the given string */
  id_not_ends_with?: InputMaybe<Scalars['ID']>;
  /** All values that are not contained in given list. */
  id_not_in?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  /** All values not starting with the given string. */
  id_not_starts_with?: InputMaybe<Scalars['ID']>;
  /** All values starting with the given string. */
  id_starts_with?: InputMaybe<Scalars['ID']>;
  publishedAt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  publishedAt_gt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  publishedAt_gte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  publishedAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  /** All values less than the given value. */
  publishedAt_lt?: InputMaybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  publishedAt_lte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  publishedAt_not?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not contained in given list. */
  publishedAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  publishedBy?: InputMaybe<UserWhereInput>;
  release?: InputMaybe<ScheduledReleaseWhereInput>;
  status?: InputMaybe<ScheduledOperationStatus>;
  /** All values that are contained in given list. */
  status_in?: InputMaybe<Array<InputMaybe<ScheduledOperationStatus>>>;
  /** All values that are not equal to given value. */
  status_not?: InputMaybe<ScheduledOperationStatus>;
  /** All values that are not contained in given list. */
  status_not_in?: InputMaybe<Array<InputMaybe<ScheduledOperationStatus>>>;
  updatedAt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  updatedAt_gt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  updatedAt_gte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  updatedAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  /** All values less than the given value. */
  updatedAt_lt?: InputMaybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  updatedAt_lte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  updatedAt_not?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not contained in given list. */
  updatedAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  updatedBy?: InputMaybe<UserWhereInput>;
};

/** References ScheduledOperation record uniquely */
export type ScheduledOperationWhereUniqueInput = {
  id?: InputMaybe<Scalars['ID']>;
};

/** Scheduled Release system model */
export type ScheduledRelease = Node & {
  __typename?: 'ScheduledRelease';
  /** The time the document was created */
  createdAt: Scalars['DateTime'];
  /** User that created this document */
  createdBy?: Maybe<User>;
  /** Release description */
  description?: Maybe<Scalars['String']>;
  /** Get the document in other stages */
  documentInStages: Array<ScheduledRelease>;
  /** Release error message */
  errorMessage?: Maybe<Scalars['String']>;
  /** The unique identifier */
  id: Scalars['ID'];
  /** Whether scheduled release should be run */
  isActive: Scalars['Boolean'];
  /** Whether scheduled release is implicit */
  isImplicit: Scalars['Boolean'];
  /** Operations to run with this release */
  operations: Array<ScheduledOperation>;
  /** The time the document was published. Null on documents in draft stage. */
  publishedAt?: Maybe<Scalars['DateTime']>;
  /** User that last published this document */
  publishedBy?: Maybe<User>;
  /** Release date and time */
  releaseAt?: Maybe<Scalars['DateTime']>;
  /** System stage field */
  stage: Stage;
  /** Release Status */
  status: ScheduledReleaseStatus;
  /** Release Title */
  title?: Maybe<Scalars['String']>;
  /** The time the document was updated */
  updatedAt: Scalars['DateTime'];
  /** User that last updated this document */
  updatedBy?: Maybe<User>;
};


/** Scheduled Release system model */
export type ScheduledReleaseCreatedByArgs = {
  locales?: InputMaybe<Array<Locale>>;
};


/** Scheduled Release system model */
export type ScheduledReleaseDocumentInStagesArgs = {
  includeCurrent?: Scalars['Boolean'];
  inheritLocale?: Scalars['Boolean'];
  stages?: Array<Stage>;
};


/** Scheduled Release system model */
export type ScheduledReleaseOperationsArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  locales?: InputMaybe<Array<Locale>>;
  orderBy?: InputMaybe<ScheduledOperationOrderByInput>;
  skip?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<ScheduledOperationWhereInput>;
};


/** Scheduled Release system model */
export type ScheduledReleasePublishedByArgs = {
  locales?: InputMaybe<Array<Locale>>;
};


/** Scheduled Release system model */
export type ScheduledReleaseUpdatedByArgs = {
  locales?: InputMaybe<Array<Locale>>;
};

export type ScheduledReleaseConnectInput = {
  /** Allow to specify document position in list of connected documents, will default to appending at end of list */
  position?: InputMaybe<ConnectPositionInput>;
  /** Document to connect */
  where: ScheduledReleaseWhereUniqueInput;
};

/** A connection to a list of items. */
export type ScheduledReleaseConnection = {
  __typename?: 'ScheduledReleaseConnection';
  aggregate: Aggregate;
  /** A list of edges. */
  edges: Array<ScheduledReleaseEdge>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
};

export type ScheduledReleaseCreateInput = {
  createdAt?: InputMaybe<Scalars['DateTime']>;
  description?: InputMaybe<Scalars['String']>;
  errorMessage?: InputMaybe<Scalars['String']>;
  isActive?: InputMaybe<Scalars['Boolean']>;
  releaseAt?: InputMaybe<Scalars['DateTime']>;
  title?: InputMaybe<Scalars['String']>;
  updatedAt?: InputMaybe<Scalars['DateTime']>;
};

export type ScheduledReleaseCreateManyInlineInput = {
  /** Connect multiple existing ScheduledRelease documents */
  connect?: InputMaybe<Array<ScheduledReleaseWhereUniqueInput>>;
  /** Create and connect multiple existing ScheduledRelease documents */
  create?: InputMaybe<Array<ScheduledReleaseCreateInput>>;
};

export type ScheduledReleaseCreateOneInlineInput = {
  /** Connect one existing ScheduledRelease document */
  connect?: InputMaybe<ScheduledReleaseWhereUniqueInput>;
  /** Create and connect one ScheduledRelease document */
  create?: InputMaybe<ScheduledReleaseCreateInput>;
};

/** An edge in a connection. */
export type ScheduledReleaseEdge = {
  __typename?: 'ScheduledReleaseEdge';
  /** A cursor for use in pagination. */
  cursor: Scalars['String'];
  /** The item at the end of the edge. */
  node: ScheduledRelease;
};

/** Identifies documents */
export type ScheduledReleaseManyWhereInput = {
  /** Logical AND on all given filters. */
  AND?: InputMaybe<Array<ScheduledReleaseWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: InputMaybe<Array<ScheduledReleaseWhereInput>>;
  /** Logical OR on all given filters. */
  OR?: InputMaybe<Array<ScheduledReleaseWhereInput>>;
  /** Contains search across all appropriate fields. */
  _search?: InputMaybe<Scalars['String']>;
  createdAt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  createdAt_gt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  createdAt_gte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  createdAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  /** All values less than the given value. */
  createdAt_lt?: InputMaybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  createdAt_lte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  createdAt_not?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not contained in given list. */
  createdAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  createdBy?: InputMaybe<UserWhereInput>;
  description?: InputMaybe<Scalars['String']>;
  /** All values containing the given string. */
  description_contains?: InputMaybe<Scalars['String']>;
  /** All values ending with the given string. */
  description_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are contained in given list. */
  description_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** All values that are not equal to given value. */
  description_not?: InputMaybe<Scalars['String']>;
  /** All values not containing the given string. */
  description_not_contains?: InputMaybe<Scalars['String']>;
  /** All values not ending with the given string */
  description_not_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  description_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** All values not starting with the given string. */
  description_not_starts_with?: InputMaybe<Scalars['String']>;
  /** All values starting with the given string. */
  description_starts_with?: InputMaybe<Scalars['String']>;
  errorMessage?: InputMaybe<Scalars['String']>;
  /** All values containing the given string. */
  errorMessage_contains?: InputMaybe<Scalars['String']>;
  /** All values ending with the given string. */
  errorMessage_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are contained in given list. */
  errorMessage_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** All values that are not equal to given value. */
  errorMessage_not?: InputMaybe<Scalars['String']>;
  /** All values not containing the given string. */
  errorMessage_not_contains?: InputMaybe<Scalars['String']>;
  /** All values not ending with the given string */
  errorMessage_not_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  errorMessage_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** All values not starting with the given string. */
  errorMessage_not_starts_with?: InputMaybe<Scalars['String']>;
  /** All values starting with the given string. */
  errorMessage_starts_with?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['ID']>;
  /** All values containing the given string. */
  id_contains?: InputMaybe<Scalars['ID']>;
  /** All values ending with the given string. */
  id_ends_with?: InputMaybe<Scalars['ID']>;
  /** All values that are contained in given list. */
  id_in?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  /** All values that are not equal to given value. */
  id_not?: InputMaybe<Scalars['ID']>;
  /** All values not containing the given string. */
  id_not_contains?: InputMaybe<Scalars['ID']>;
  /** All values not ending with the given string */
  id_not_ends_with?: InputMaybe<Scalars['ID']>;
  /** All values that are not contained in given list. */
  id_not_in?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  /** All values not starting with the given string. */
  id_not_starts_with?: InputMaybe<Scalars['ID']>;
  /** All values starting with the given string. */
  id_starts_with?: InputMaybe<Scalars['ID']>;
  isActive?: InputMaybe<Scalars['Boolean']>;
  /** All values that are not equal to given value. */
  isActive_not?: InputMaybe<Scalars['Boolean']>;
  isImplicit?: InputMaybe<Scalars['Boolean']>;
  /** All values that are not equal to given value. */
  isImplicit_not?: InputMaybe<Scalars['Boolean']>;
  operations_every?: InputMaybe<ScheduledOperationWhereInput>;
  operations_none?: InputMaybe<ScheduledOperationWhereInput>;
  operations_some?: InputMaybe<ScheduledOperationWhereInput>;
  publishedAt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  publishedAt_gt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  publishedAt_gte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  publishedAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  /** All values less than the given value. */
  publishedAt_lt?: InputMaybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  publishedAt_lte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  publishedAt_not?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not contained in given list. */
  publishedAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  publishedBy?: InputMaybe<UserWhereInput>;
  releaseAt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  releaseAt_gt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  releaseAt_gte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  releaseAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  /** All values less than the given value. */
  releaseAt_lt?: InputMaybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  releaseAt_lte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  releaseAt_not?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not contained in given list. */
  releaseAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  status?: InputMaybe<ScheduledReleaseStatus>;
  /** All values that are contained in given list. */
  status_in?: InputMaybe<Array<InputMaybe<ScheduledReleaseStatus>>>;
  /** All values that are not equal to given value. */
  status_not?: InputMaybe<ScheduledReleaseStatus>;
  /** All values that are not contained in given list. */
  status_not_in?: InputMaybe<Array<InputMaybe<ScheduledReleaseStatus>>>;
  title?: InputMaybe<Scalars['String']>;
  /** All values containing the given string. */
  title_contains?: InputMaybe<Scalars['String']>;
  /** All values ending with the given string. */
  title_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are contained in given list. */
  title_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** All values that are not equal to given value. */
  title_not?: InputMaybe<Scalars['String']>;
  /** All values not containing the given string. */
  title_not_contains?: InputMaybe<Scalars['String']>;
  /** All values not ending with the given string */
  title_not_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  title_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** All values not starting with the given string. */
  title_not_starts_with?: InputMaybe<Scalars['String']>;
  /** All values starting with the given string. */
  title_starts_with?: InputMaybe<Scalars['String']>;
  updatedAt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  updatedAt_gt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  updatedAt_gte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  updatedAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  /** All values less than the given value. */
  updatedAt_lt?: InputMaybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  updatedAt_lte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  updatedAt_not?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not contained in given list. */
  updatedAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  updatedBy?: InputMaybe<UserWhereInput>;
};

export enum ScheduledReleaseOrderByInput {
  CreatedAtAsc = 'createdAt_ASC',
  CreatedAtDesc = 'createdAt_DESC',
  DescriptionAsc = 'description_ASC',
  DescriptionDesc = 'description_DESC',
  ErrorMessageAsc = 'errorMessage_ASC',
  ErrorMessageDesc = 'errorMessage_DESC',
  IdAsc = 'id_ASC',
  IdDesc = 'id_DESC',
  IsActiveAsc = 'isActive_ASC',
  IsActiveDesc = 'isActive_DESC',
  IsImplicitAsc = 'isImplicit_ASC',
  IsImplicitDesc = 'isImplicit_DESC',
  PublishedAtAsc = 'publishedAt_ASC',
  PublishedAtDesc = 'publishedAt_DESC',
  ReleaseAtAsc = 'releaseAt_ASC',
  ReleaseAtDesc = 'releaseAt_DESC',
  StatusAsc = 'status_ASC',
  StatusDesc = 'status_DESC',
  TitleAsc = 'title_ASC',
  TitleDesc = 'title_DESC',
  UpdatedAtAsc = 'updatedAt_ASC',
  UpdatedAtDesc = 'updatedAt_DESC'
}

/** System Scheduled Release Status */
export enum ScheduledReleaseStatus {
  Completed = 'COMPLETED',
  Failed = 'FAILED',
  InProgress = 'IN_PROGRESS',
  Pending = 'PENDING'
}

export type ScheduledReleaseUpdateInput = {
  description?: InputMaybe<Scalars['String']>;
  errorMessage?: InputMaybe<Scalars['String']>;
  isActive?: InputMaybe<Scalars['Boolean']>;
  releaseAt?: InputMaybe<Scalars['DateTime']>;
  title?: InputMaybe<Scalars['String']>;
};

export type ScheduledReleaseUpdateManyInlineInput = {
  /** Connect multiple existing ScheduledRelease documents */
  connect?: InputMaybe<Array<ScheduledReleaseConnectInput>>;
  /** Create and connect multiple ScheduledRelease documents */
  create?: InputMaybe<Array<ScheduledReleaseCreateInput>>;
  /** Delete multiple ScheduledRelease documents */
  delete?: InputMaybe<Array<ScheduledReleaseWhereUniqueInput>>;
  /** Disconnect multiple ScheduledRelease documents */
  disconnect?: InputMaybe<Array<ScheduledReleaseWhereUniqueInput>>;
  /** Override currently-connected documents with multiple existing ScheduledRelease documents */
  set?: InputMaybe<Array<ScheduledReleaseWhereUniqueInput>>;
  /** Update multiple ScheduledRelease documents */
  update?: InputMaybe<Array<ScheduledReleaseUpdateWithNestedWhereUniqueInput>>;
  /** Upsert multiple ScheduledRelease documents */
  upsert?: InputMaybe<Array<ScheduledReleaseUpsertWithNestedWhereUniqueInput>>;
};

export type ScheduledReleaseUpdateManyInput = {
  description?: InputMaybe<Scalars['String']>;
  errorMessage?: InputMaybe<Scalars['String']>;
  isActive?: InputMaybe<Scalars['Boolean']>;
  releaseAt?: InputMaybe<Scalars['DateTime']>;
  title?: InputMaybe<Scalars['String']>;
};

export type ScheduledReleaseUpdateManyWithNestedWhereInput = {
  /** Update many input */
  data: ScheduledReleaseUpdateManyInput;
  /** Document search */
  where: ScheduledReleaseWhereInput;
};

export type ScheduledReleaseUpdateOneInlineInput = {
  /** Connect existing ScheduledRelease document */
  connect?: InputMaybe<ScheduledReleaseWhereUniqueInput>;
  /** Create and connect one ScheduledRelease document */
  create?: InputMaybe<ScheduledReleaseCreateInput>;
  /** Delete currently connected ScheduledRelease document */
  delete?: InputMaybe<Scalars['Boolean']>;
  /** Disconnect currently connected ScheduledRelease document */
  disconnect?: InputMaybe<Scalars['Boolean']>;
  /** Update single ScheduledRelease document */
  update?: InputMaybe<ScheduledReleaseUpdateWithNestedWhereUniqueInput>;
  /** Upsert single ScheduledRelease document */
  upsert?: InputMaybe<ScheduledReleaseUpsertWithNestedWhereUniqueInput>;
};

export type ScheduledReleaseUpdateWithNestedWhereUniqueInput = {
  /** Document to update */
  data: ScheduledReleaseUpdateInput;
  /** Unique document search */
  where: ScheduledReleaseWhereUniqueInput;
};

export type ScheduledReleaseUpsertInput = {
  /** Create document if it didn't exist */
  create: ScheduledReleaseCreateInput;
  /** Update document if it exists */
  update: ScheduledReleaseUpdateInput;
};

export type ScheduledReleaseUpsertWithNestedWhereUniqueInput = {
  /** Upsert data */
  data: ScheduledReleaseUpsertInput;
  /** Unique document search */
  where: ScheduledReleaseWhereUniqueInput;
};

/** Identifies documents */
export type ScheduledReleaseWhereInput = {
  /** Logical AND on all given filters. */
  AND?: InputMaybe<Array<ScheduledReleaseWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: InputMaybe<Array<ScheduledReleaseWhereInput>>;
  /** Logical OR on all given filters. */
  OR?: InputMaybe<Array<ScheduledReleaseWhereInput>>;
  /** Contains search across all appropriate fields. */
  _search?: InputMaybe<Scalars['String']>;
  createdAt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  createdAt_gt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  createdAt_gte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  createdAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  /** All values less than the given value. */
  createdAt_lt?: InputMaybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  createdAt_lte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  createdAt_not?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not contained in given list. */
  createdAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  createdBy?: InputMaybe<UserWhereInput>;
  description?: InputMaybe<Scalars['String']>;
  /** All values containing the given string. */
  description_contains?: InputMaybe<Scalars['String']>;
  /** All values ending with the given string. */
  description_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are contained in given list. */
  description_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** All values that are not equal to given value. */
  description_not?: InputMaybe<Scalars['String']>;
  /** All values not containing the given string. */
  description_not_contains?: InputMaybe<Scalars['String']>;
  /** All values not ending with the given string */
  description_not_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  description_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** All values not starting with the given string. */
  description_not_starts_with?: InputMaybe<Scalars['String']>;
  /** All values starting with the given string. */
  description_starts_with?: InputMaybe<Scalars['String']>;
  errorMessage?: InputMaybe<Scalars['String']>;
  /** All values containing the given string. */
  errorMessage_contains?: InputMaybe<Scalars['String']>;
  /** All values ending with the given string. */
  errorMessage_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are contained in given list. */
  errorMessage_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** All values that are not equal to given value. */
  errorMessage_not?: InputMaybe<Scalars['String']>;
  /** All values not containing the given string. */
  errorMessage_not_contains?: InputMaybe<Scalars['String']>;
  /** All values not ending with the given string */
  errorMessage_not_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  errorMessage_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** All values not starting with the given string. */
  errorMessage_not_starts_with?: InputMaybe<Scalars['String']>;
  /** All values starting with the given string. */
  errorMessage_starts_with?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['ID']>;
  /** All values containing the given string. */
  id_contains?: InputMaybe<Scalars['ID']>;
  /** All values ending with the given string. */
  id_ends_with?: InputMaybe<Scalars['ID']>;
  /** All values that are contained in given list. */
  id_in?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  /** All values that are not equal to given value. */
  id_not?: InputMaybe<Scalars['ID']>;
  /** All values not containing the given string. */
  id_not_contains?: InputMaybe<Scalars['ID']>;
  /** All values not ending with the given string */
  id_not_ends_with?: InputMaybe<Scalars['ID']>;
  /** All values that are not contained in given list. */
  id_not_in?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  /** All values not starting with the given string. */
  id_not_starts_with?: InputMaybe<Scalars['ID']>;
  /** All values starting with the given string. */
  id_starts_with?: InputMaybe<Scalars['ID']>;
  isActive?: InputMaybe<Scalars['Boolean']>;
  /** All values that are not equal to given value. */
  isActive_not?: InputMaybe<Scalars['Boolean']>;
  isImplicit?: InputMaybe<Scalars['Boolean']>;
  /** All values that are not equal to given value. */
  isImplicit_not?: InputMaybe<Scalars['Boolean']>;
  operations_every?: InputMaybe<ScheduledOperationWhereInput>;
  operations_none?: InputMaybe<ScheduledOperationWhereInput>;
  operations_some?: InputMaybe<ScheduledOperationWhereInput>;
  publishedAt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  publishedAt_gt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  publishedAt_gte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  publishedAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  /** All values less than the given value. */
  publishedAt_lt?: InputMaybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  publishedAt_lte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  publishedAt_not?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not contained in given list. */
  publishedAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  publishedBy?: InputMaybe<UserWhereInput>;
  releaseAt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  releaseAt_gt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  releaseAt_gte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  releaseAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  /** All values less than the given value. */
  releaseAt_lt?: InputMaybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  releaseAt_lte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  releaseAt_not?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not contained in given list. */
  releaseAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  status?: InputMaybe<ScheduledReleaseStatus>;
  /** All values that are contained in given list. */
  status_in?: InputMaybe<Array<InputMaybe<ScheduledReleaseStatus>>>;
  /** All values that are not equal to given value. */
  status_not?: InputMaybe<ScheduledReleaseStatus>;
  /** All values that are not contained in given list. */
  status_not_in?: InputMaybe<Array<InputMaybe<ScheduledReleaseStatus>>>;
  title?: InputMaybe<Scalars['String']>;
  /** All values containing the given string. */
  title_contains?: InputMaybe<Scalars['String']>;
  /** All values ending with the given string. */
  title_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are contained in given list. */
  title_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** All values that are not equal to given value. */
  title_not?: InputMaybe<Scalars['String']>;
  /** All values not containing the given string. */
  title_not_contains?: InputMaybe<Scalars['String']>;
  /** All values not ending with the given string */
  title_not_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  title_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** All values not starting with the given string. */
  title_not_starts_with?: InputMaybe<Scalars['String']>;
  /** All values starting with the given string. */
  title_starts_with?: InputMaybe<Scalars['String']>;
  updatedAt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  updatedAt_gt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  updatedAt_gte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  updatedAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  /** All values less than the given value. */
  updatedAt_lt?: InputMaybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  updatedAt_lte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  updatedAt_not?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not contained in given list. */
  updatedAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  updatedBy?: InputMaybe<UserWhereInput>;
};

/** References ScheduledRelease record uniquely */
export type ScheduledReleaseWhereUniqueInput = {
  id?: InputMaybe<Scalars['ID']>;
};

/** Stage system enumeration */
export enum Stage {
  /** The Draft is the default stage for all your content. */
  Draft = 'DRAFT',
  /** The Published stage is where you can publish your content to. */
  Published = 'PUBLISHED'
}

export type StorageEquipment = Node & {
  __typename?: 'StorageEquipment';
  brand?: Maybe<Scalars['String']>;
  /** The time the document was created */
  createdAt: Scalars['DateTime'];
  /** User that created this document */
  createdBy?: Maybe<User>;
  description?: Maybe<RichText>;
  discountPercent?: Maybe<Scalars['Int']>;
  /** Get the document in other stages */
  documentInStages: Array<StorageEquipment>;
  /** List of StorageEquipment versions */
  history: Array<Version>;
  /** The unique identifier */
  id: Scalars['ID'];
  images?: Maybe<Asset>;
  manufacturer?: Maybe<Scalars['String']>;
  manufacturerLink?: Maybe<Scalars['String']>;
  newProduct?: Maybe<Scalars['Boolean']>;
  onDiscount?: Maybe<Scalars['Boolean']>;
  price?: Maybe<Scalars['Int']>;
  promotion?: Maybe<Scalars['Boolean']>;
  /** The time the document was published. Null on documents in draft stage. */
  publishedAt?: Maybe<Scalars['DateTime']>;
  /** User that last published this document */
  publishedBy?: Maybe<User>;
  scheduledIn: Array<ScheduledOperation>;
  slug?: Maybe<Scalars['String']>;
  /** System stage field */
  stage: Stage;
  stock?: Maybe<Scalars['Int']>;
  subtitle?: Maybe<Scalars['String']>;
  title: Scalars['String'];
  /** The time the document was updated */
  updatedAt: Scalars['DateTime'];
  /** User that last updated this document */
  updatedBy?: Maybe<User>;
  warranty?: Maybe<Scalars['Int']>;
};


export type StorageEquipmentCreatedByArgs = {
  locales?: InputMaybe<Array<Locale>>;
};


export type StorageEquipmentDocumentInStagesArgs = {
  includeCurrent?: Scalars['Boolean'];
  inheritLocale?: Scalars['Boolean'];
  stages?: Array<Stage>;
};


export type StorageEquipmentHistoryArgs = {
  limit?: Scalars['Int'];
  skip?: Scalars['Int'];
  stageOverride?: InputMaybe<Stage>;
};


export type StorageEquipmentImagesArgs = {
  locales?: InputMaybe<Array<Locale>>;
};


export type StorageEquipmentPublishedByArgs = {
  locales?: InputMaybe<Array<Locale>>;
};


export type StorageEquipmentScheduledInArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  locales?: InputMaybe<Array<Locale>>;
  skip?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<ScheduledOperationWhereInput>;
};


export type StorageEquipmentUpdatedByArgs = {
  locales?: InputMaybe<Array<Locale>>;
};

export type StorageEquipmentConnectInput = {
  /** Allow to specify document position in list of connected documents, will default to appending at end of list */
  position?: InputMaybe<ConnectPositionInput>;
  /** Document to connect */
  where: StorageEquipmentWhereUniqueInput;
};

/** A connection to a list of items. */
export type StorageEquipmentConnection = {
  __typename?: 'StorageEquipmentConnection';
  aggregate: Aggregate;
  /** A list of edges. */
  edges: Array<StorageEquipmentEdge>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
};

export type StorageEquipmentCreateInput = {
  brand?: InputMaybe<Scalars['String']>;
  createdAt?: InputMaybe<Scalars['DateTime']>;
  description?: InputMaybe<Scalars['RichTextAST']>;
  discountPercent?: InputMaybe<Scalars['Int']>;
  images?: InputMaybe<AssetCreateOneInlineInput>;
  manufacturer?: InputMaybe<Scalars['String']>;
  manufacturerLink?: InputMaybe<Scalars['String']>;
  newProduct?: InputMaybe<Scalars['Boolean']>;
  onDiscount?: InputMaybe<Scalars['Boolean']>;
  price?: InputMaybe<Scalars['Int']>;
  promotion?: InputMaybe<Scalars['Boolean']>;
  slug?: InputMaybe<Scalars['String']>;
  stock?: InputMaybe<Scalars['Int']>;
  subtitle?: InputMaybe<Scalars['String']>;
  title: Scalars['String'];
  updatedAt?: InputMaybe<Scalars['DateTime']>;
  warranty?: InputMaybe<Scalars['Int']>;
};

export type StorageEquipmentCreateManyInlineInput = {
  /** Connect multiple existing StorageEquipment documents */
  connect?: InputMaybe<Array<StorageEquipmentWhereUniqueInput>>;
  /** Create and connect multiple existing StorageEquipment documents */
  create?: InputMaybe<Array<StorageEquipmentCreateInput>>;
};

export type StorageEquipmentCreateOneInlineInput = {
  /** Connect one existing StorageEquipment document */
  connect?: InputMaybe<StorageEquipmentWhereUniqueInput>;
  /** Create and connect one StorageEquipment document */
  create?: InputMaybe<StorageEquipmentCreateInput>;
};

/** An edge in a connection. */
export type StorageEquipmentEdge = {
  __typename?: 'StorageEquipmentEdge';
  /** A cursor for use in pagination. */
  cursor: Scalars['String'];
  /** The item at the end of the edge. */
  node: StorageEquipment;
};

/** Identifies documents */
export type StorageEquipmentManyWhereInput = {
  /** Logical AND on all given filters. */
  AND?: InputMaybe<Array<StorageEquipmentWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: InputMaybe<Array<StorageEquipmentWhereInput>>;
  /** Logical OR on all given filters. */
  OR?: InputMaybe<Array<StorageEquipmentWhereInput>>;
  /** Contains search across all appropriate fields. */
  _search?: InputMaybe<Scalars['String']>;
  brand?: InputMaybe<Scalars['String']>;
  /** All values containing the given string. */
  brand_contains?: InputMaybe<Scalars['String']>;
  /** All values ending with the given string. */
  brand_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are contained in given list. */
  brand_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** All values that are not equal to given value. */
  brand_not?: InputMaybe<Scalars['String']>;
  /** All values not containing the given string. */
  brand_not_contains?: InputMaybe<Scalars['String']>;
  /** All values not ending with the given string */
  brand_not_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  brand_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** All values not starting with the given string. */
  brand_not_starts_with?: InputMaybe<Scalars['String']>;
  /** All values starting with the given string. */
  brand_starts_with?: InputMaybe<Scalars['String']>;
  createdAt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  createdAt_gt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  createdAt_gte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  createdAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  /** All values less than the given value. */
  createdAt_lt?: InputMaybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  createdAt_lte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  createdAt_not?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not contained in given list. */
  createdAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  createdBy?: InputMaybe<UserWhereInput>;
  discountPercent?: InputMaybe<Scalars['Int']>;
  /** All values greater than the given value. */
  discountPercent_gt?: InputMaybe<Scalars['Int']>;
  /** All values greater than or equal the given value. */
  discountPercent_gte?: InputMaybe<Scalars['Int']>;
  /** All values that are contained in given list. */
  discountPercent_in?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
  /** All values less than the given value. */
  discountPercent_lt?: InputMaybe<Scalars['Int']>;
  /** All values less than or equal the given value. */
  discountPercent_lte?: InputMaybe<Scalars['Int']>;
  /** All values that are not equal to given value. */
  discountPercent_not?: InputMaybe<Scalars['Int']>;
  /** All values that are not contained in given list. */
  discountPercent_not_in?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
  documentInStages_every?: InputMaybe<StorageEquipmentWhereStageInput>;
  documentInStages_none?: InputMaybe<StorageEquipmentWhereStageInput>;
  documentInStages_some?: InputMaybe<StorageEquipmentWhereStageInput>;
  id?: InputMaybe<Scalars['ID']>;
  /** All values containing the given string. */
  id_contains?: InputMaybe<Scalars['ID']>;
  /** All values ending with the given string. */
  id_ends_with?: InputMaybe<Scalars['ID']>;
  /** All values that are contained in given list. */
  id_in?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  /** All values that are not equal to given value. */
  id_not?: InputMaybe<Scalars['ID']>;
  /** All values not containing the given string. */
  id_not_contains?: InputMaybe<Scalars['ID']>;
  /** All values not ending with the given string */
  id_not_ends_with?: InputMaybe<Scalars['ID']>;
  /** All values that are not contained in given list. */
  id_not_in?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  /** All values not starting with the given string. */
  id_not_starts_with?: InputMaybe<Scalars['ID']>;
  /** All values starting with the given string. */
  id_starts_with?: InputMaybe<Scalars['ID']>;
  images?: InputMaybe<AssetWhereInput>;
  manufacturer?: InputMaybe<Scalars['String']>;
  manufacturerLink?: InputMaybe<Scalars['String']>;
  /** All values containing the given string. */
  manufacturerLink_contains?: InputMaybe<Scalars['String']>;
  /** All values ending with the given string. */
  manufacturerLink_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are contained in given list. */
  manufacturerLink_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** All values that are not equal to given value. */
  manufacturerLink_not?: InputMaybe<Scalars['String']>;
  /** All values not containing the given string. */
  manufacturerLink_not_contains?: InputMaybe<Scalars['String']>;
  /** All values not ending with the given string */
  manufacturerLink_not_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  manufacturerLink_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** All values not starting with the given string. */
  manufacturerLink_not_starts_with?: InputMaybe<Scalars['String']>;
  /** All values starting with the given string. */
  manufacturerLink_starts_with?: InputMaybe<Scalars['String']>;
  /** All values containing the given string. */
  manufacturer_contains?: InputMaybe<Scalars['String']>;
  /** All values ending with the given string. */
  manufacturer_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are contained in given list. */
  manufacturer_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** All values that are not equal to given value. */
  manufacturer_not?: InputMaybe<Scalars['String']>;
  /** All values not containing the given string. */
  manufacturer_not_contains?: InputMaybe<Scalars['String']>;
  /** All values not ending with the given string */
  manufacturer_not_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  manufacturer_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** All values not starting with the given string. */
  manufacturer_not_starts_with?: InputMaybe<Scalars['String']>;
  /** All values starting with the given string. */
  manufacturer_starts_with?: InputMaybe<Scalars['String']>;
  newProduct?: InputMaybe<Scalars['Boolean']>;
  /** All values that are not equal to given value. */
  newProduct_not?: InputMaybe<Scalars['Boolean']>;
  onDiscount?: InputMaybe<Scalars['Boolean']>;
  /** All values that are not equal to given value. */
  onDiscount_not?: InputMaybe<Scalars['Boolean']>;
  price?: InputMaybe<Scalars['Int']>;
  /** All values greater than the given value. */
  price_gt?: InputMaybe<Scalars['Int']>;
  /** All values greater than or equal the given value. */
  price_gte?: InputMaybe<Scalars['Int']>;
  /** All values that are contained in given list. */
  price_in?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
  /** All values less than the given value. */
  price_lt?: InputMaybe<Scalars['Int']>;
  /** All values less than or equal the given value. */
  price_lte?: InputMaybe<Scalars['Int']>;
  /** All values that are not equal to given value. */
  price_not?: InputMaybe<Scalars['Int']>;
  /** All values that are not contained in given list. */
  price_not_in?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
  promotion?: InputMaybe<Scalars['Boolean']>;
  /** All values that are not equal to given value. */
  promotion_not?: InputMaybe<Scalars['Boolean']>;
  publishedAt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  publishedAt_gt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  publishedAt_gte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  publishedAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  /** All values less than the given value. */
  publishedAt_lt?: InputMaybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  publishedAt_lte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  publishedAt_not?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not contained in given list. */
  publishedAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  publishedBy?: InputMaybe<UserWhereInput>;
  scheduledIn_every?: InputMaybe<ScheduledOperationWhereInput>;
  scheduledIn_none?: InputMaybe<ScheduledOperationWhereInput>;
  scheduledIn_some?: InputMaybe<ScheduledOperationWhereInput>;
  slug?: InputMaybe<Scalars['String']>;
  /** All values containing the given string. */
  slug_contains?: InputMaybe<Scalars['String']>;
  /** All values ending with the given string. */
  slug_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are contained in given list. */
  slug_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** All values that are not equal to given value. */
  slug_not?: InputMaybe<Scalars['String']>;
  /** All values not containing the given string. */
  slug_not_contains?: InputMaybe<Scalars['String']>;
  /** All values not ending with the given string */
  slug_not_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  slug_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** All values not starting with the given string. */
  slug_not_starts_with?: InputMaybe<Scalars['String']>;
  /** All values starting with the given string. */
  slug_starts_with?: InputMaybe<Scalars['String']>;
  stock?: InputMaybe<Scalars['Int']>;
  /** All values greater than the given value. */
  stock_gt?: InputMaybe<Scalars['Int']>;
  /** All values greater than or equal the given value. */
  stock_gte?: InputMaybe<Scalars['Int']>;
  /** All values that are contained in given list. */
  stock_in?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
  /** All values less than the given value. */
  stock_lt?: InputMaybe<Scalars['Int']>;
  /** All values less than or equal the given value. */
  stock_lte?: InputMaybe<Scalars['Int']>;
  /** All values that are not equal to given value. */
  stock_not?: InputMaybe<Scalars['Int']>;
  /** All values that are not contained in given list. */
  stock_not_in?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
  subtitle?: InputMaybe<Scalars['String']>;
  /** All values containing the given string. */
  subtitle_contains?: InputMaybe<Scalars['String']>;
  /** All values ending with the given string. */
  subtitle_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are contained in given list. */
  subtitle_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** All values that are not equal to given value. */
  subtitle_not?: InputMaybe<Scalars['String']>;
  /** All values not containing the given string. */
  subtitle_not_contains?: InputMaybe<Scalars['String']>;
  /** All values not ending with the given string */
  subtitle_not_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  subtitle_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** All values not starting with the given string. */
  subtitle_not_starts_with?: InputMaybe<Scalars['String']>;
  /** All values starting with the given string. */
  subtitle_starts_with?: InputMaybe<Scalars['String']>;
  title?: InputMaybe<Scalars['String']>;
  /** All values containing the given string. */
  title_contains?: InputMaybe<Scalars['String']>;
  /** All values ending with the given string. */
  title_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are contained in given list. */
  title_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** All values that are not equal to given value. */
  title_not?: InputMaybe<Scalars['String']>;
  /** All values not containing the given string. */
  title_not_contains?: InputMaybe<Scalars['String']>;
  /** All values not ending with the given string */
  title_not_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  title_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** All values not starting with the given string. */
  title_not_starts_with?: InputMaybe<Scalars['String']>;
  /** All values starting with the given string. */
  title_starts_with?: InputMaybe<Scalars['String']>;
  updatedAt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  updatedAt_gt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  updatedAt_gte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  updatedAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  /** All values less than the given value. */
  updatedAt_lt?: InputMaybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  updatedAt_lte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  updatedAt_not?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not contained in given list. */
  updatedAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  updatedBy?: InputMaybe<UserWhereInput>;
  warranty?: InputMaybe<Scalars['Int']>;
  /** All values greater than the given value. */
  warranty_gt?: InputMaybe<Scalars['Int']>;
  /** All values greater than or equal the given value. */
  warranty_gte?: InputMaybe<Scalars['Int']>;
  /** All values that are contained in given list. */
  warranty_in?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
  /** All values less than the given value. */
  warranty_lt?: InputMaybe<Scalars['Int']>;
  /** All values less than or equal the given value. */
  warranty_lte?: InputMaybe<Scalars['Int']>;
  /** All values that are not equal to given value. */
  warranty_not?: InputMaybe<Scalars['Int']>;
  /** All values that are not contained in given list. */
  warranty_not_in?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
};

export enum StorageEquipmentOrderByInput {
  BrandAsc = 'brand_ASC',
  BrandDesc = 'brand_DESC',
  CreatedAtAsc = 'createdAt_ASC',
  CreatedAtDesc = 'createdAt_DESC',
  DiscountPercentAsc = 'discountPercent_ASC',
  DiscountPercentDesc = 'discountPercent_DESC',
  IdAsc = 'id_ASC',
  IdDesc = 'id_DESC',
  ManufacturerLinkAsc = 'manufacturerLink_ASC',
  ManufacturerLinkDesc = 'manufacturerLink_DESC',
  ManufacturerAsc = 'manufacturer_ASC',
  ManufacturerDesc = 'manufacturer_DESC',
  NewProductAsc = 'newProduct_ASC',
  NewProductDesc = 'newProduct_DESC',
  OnDiscountAsc = 'onDiscount_ASC',
  OnDiscountDesc = 'onDiscount_DESC',
  PriceAsc = 'price_ASC',
  PriceDesc = 'price_DESC',
  PromotionAsc = 'promotion_ASC',
  PromotionDesc = 'promotion_DESC',
  PublishedAtAsc = 'publishedAt_ASC',
  PublishedAtDesc = 'publishedAt_DESC',
  SlugAsc = 'slug_ASC',
  SlugDesc = 'slug_DESC',
  StockAsc = 'stock_ASC',
  StockDesc = 'stock_DESC',
  SubtitleAsc = 'subtitle_ASC',
  SubtitleDesc = 'subtitle_DESC',
  TitleAsc = 'title_ASC',
  TitleDesc = 'title_DESC',
  UpdatedAtAsc = 'updatedAt_ASC',
  UpdatedAtDesc = 'updatedAt_DESC',
  WarrantyAsc = 'warranty_ASC',
  WarrantyDesc = 'warranty_DESC'
}

export type StorageEquipmentUpdateInput = {
  brand?: InputMaybe<Scalars['String']>;
  description?: InputMaybe<Scalars['RichTextAST']>;
  discountPercent?: InputMaybe<Scalars['Int']>;
  images?: InputMaybe<AssetUpdateOneInlineInput>;
  manufacturer?: InputMaybe<Scalars['String']>;
  manufacturerLink?: InputMaybe<Scalars['String']>;
  newProduct?: InputMaybe<Scalars['Boolean']>;
  onDiscount?: InputMaybe<Scalars['Boolean']>;
  price?: InputMaybe<Scalars['Int']>;
  promotion?: InputMaybe<Scalars['Boolean']>;
  slug?: InputMaybe<Scalars['String']>;
  stock?: InputMaybe<Scalars['Int']>;
  subtitle?: InputMaybe<Scalars['String']>;
  title?: InputMaybe<Scalars['String']>;
  warranty?: InputMaybe<Scalars['Int']>;
};

export type StorageEquipmentUpdateManyInlineInput = {
  /** Connect multiple existing StorageEquipment documents */
  connect?: InputMaybe<Array<StorageEquipmentConnectInput>>;
  /** Create and connect multiple StorageEquipment documents */
  create?: InputMaybe<Array<StorageEquipmentCreateInput>>;
  /** Delete multiple StorageEquipment documents */
  delete?: InputMaybe<Array<StorageEquipmentWhereUniqueInput>>;
  /** Disconnect multiple StorageEquipment documents */
  disconnect?: InputMaybe<Array<StorageEquipmentWhereUniqueInput>>;
  /** Override currently-connected documents with multiple existing StorageEquipment documents */
  set?: InputMaybe<Array<StorageEquipmentWhereUniqueInput>>;
  /** Update multiple StorageEquipment documents */
  update?: InputMaybe<Array<StorageEquipmentUpdateWithNestedWhereUniqueInput>>;
  /** Upsert multiple StorageEquipment documents */
  upsert?: InputMaybe<Array<StorageEquipmentUpsertWithNestedWhereUniqueInput>>;
};

export type StorageEquipmentUpdateManyInput = {
  brand?: InputMaybe<Scalars['String']>;
  description?: InputMaybe<Scalars['RichTextAST']>;
  discountPercent?: InputMaybe<Scalars['Int']>;
  manufacturer?: InputMaybe<Scalars['String']>;
  manufacturerLink?: InputMaybe<Scalars['String']>;
  newProduct?: InputMaybe<Scalars['Boolean']>;
  onDiscount?: InputMaybe<Scalars['Boolean']>;
  price?: InputMaybe<Scalars['Int']>;
  promotion?: InputMaybe<Scalars['Boolean']>;
  stock?: InputMaybe<Scalars['Int']>;
  subtitle?: InputMaybe<Scalars['String']>;
  warranty?: InputMaybe<Scalars['Int']>;
};

export type StorageEquipmentUpdateManyWithNestedWhereInput = {
  /** Update many input */
  data: StorageEquipmentUpdateManyInput;
  /** Document search */
  where: StorageEquipmentWhereInput;
};

export type StorageEquipmentUpdateOneInlineInput = {
  /** Connect existing StorageEquipment document */
  connect?: InputMaybe<StorageEquipmentWhereUniqueInput>;
  /** Create and connect one StorageEquipment document */
  create?: InputMaybe<StorageEquipmentCreateInput>;
  /** Delete currently connected StorageEquipment document */
  delete?: InputMaybe<Scalars['Boolean']>;
  /** Disconnect currently connected StorageEquipment document */
  disconnect?: InputMaybe<Scalars['Boolean']>;
  /** Update single StorageEquipment document */
  update?: InputMaybe<StorageEquipmentUpdateWithNestedWhereUniqueInput>;
  /** Upsert single StorageEquipment document */
  upsert?: InputMaybe<StorageEquipmentUpsertWithNestedWhereUniqueInput>;
};

export type StorageEquipmentUpdateWithNestedWhereUniqueInput = {
  /** Document to update */
  data: StorageEquipmentUpdateInput;
  /** Unique document search */
  where: StorageEquipmentWhereUniqueInput;
};

export type StorageEquipmentUpsertInput = {
  /** Create document if it didn't exist */
  create: StorageEquipmentCreateInput;
  /** Update document if it exists */
  update: StorageEquipmentUpdateInput;
};

export type StorageEquipmentUpsertWithNestedWhereUniqueInput = {
  /** Upsert data */
  data: StorageEquipmentUpsertInput;
  /** Unique document search */
  where: StorageEquipmentWhereUniqueInput;
};

/** This contains a set of filters that can be used to compare values internally */
export type StorageEquipmentWhereComparatorInput = {
  /** This field can be used to request to check if the entry is outdated by internal comparison */
  outdated_to?: InputMaybe<Scalars['Boolean']>;
};

/** Identifies documents */
export type StorageEquipmentWhereInput = {
  /** Logical AND on all given filters. */
  AND?: InputMaybe<Array<StorageEquipmentWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: InputMaybe<Array<StorageEquipmentWhereInput>>;
  /** Logical OR on all given filters. */
  OR?: InputMaybe<Array<StorageEquipmentWhereInput>>;
  /** Contains search across all appropriate fields. */
  _search?: InputMaybe<Scalars['String']>;
  brand?: InputMaybe<Scalars['String']>;
  /** All values containing the given string. */
  brand_contains?: InputMaybe<Scalars['String']>;
  /** All values ending with the given string. */
  brand_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are contained in given list. */
  brand_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** All values that are not equal to given value. */
  brand_not?: InputMaybe<Scalars['String']>;
  /** All values not containing the given string. */
  brand_not_contains?: InputMaybe<Scalars['String']>;
  /** All values not ending with the given string */
  brand_not_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  brand_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** All values not starting with the given string. */
  brand_not_starts_with?: InputMaybe<Scalars['String']>;
  /** All values starting with the given string. */
  brand_starts_with?: InputMaybe<Scalars['String']>;
  createdAt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  createdAt_gt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  createdAt_gte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  createdAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  /** All values less than the given value. */
  createdAt_lt?: InputMaybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  createdAt_lte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  createdAt_not?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not contained in given list. */
  createdAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  createdBy?: InputMaybe<UserWhereInput>;
  discountPercent?: InputMaybe<Scalars['Int']>;
  /** All values greater than the given value. */
  discountPercent_gt?: InputMaybe<Scalars['Int']>;
  /** All values greater than or equal the given value. */
  discountPercent_gte?: InputMaybe<Scalars['Int']>;
  /** All values that are contained in given list. */
  discountPercent_in?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
  /** All values less than the given value. */
  discountPercent_lt?: InputMaybe<Scalars['Int']>;
  /** All values less than or equal the given value. */
  discountPercent_lte?: InputMaybe<Scalars['Int']>;
  /** All values that are not equal to given value. */
  discountPercent_not?: InputMaybe<Scalars['Int']>;
  /** All values that are not contained in given list. */
  discountPercent_not_in?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
  documentInStages_every?: InputMaybe<StorageEquipmentWhereStageInput>;
  documentInStages_none?: InputMaybe<StorageEquipmentWhereStageInput>;
  documentInStages_some?: InputMaybe<StorageEquipmentWhereStageInput>;
  id?: InputMaybe<Scalars['ID']>;
  /** All values containing the given string. */
  id_contains?: InputMaybe<Scalars['ID']>;
  /** All values ending with the given string. */
  id_ends_with?: InputMaybe<Scalars['ID']>;
  /** All values that are contained in given list. */
  id_in?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  /** All values that are not equal to given value. */
  id_not?: InputMaybe<Scalars['ID']>;
  /** All values not containing the given string. */
  id_not_contains?: InputMaybe<Scalars['ID']>;
  /** All values not ending with the given string */
  id_not_ends_with?: InputMaybe<Scalars['ID']>;
  /** All values that are not contained in given list. */
  id_not_in?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  /** All values not starting with the given string. */
  id_not_starts_with?: InputMaybe<Scalars['ID']>;
  /** All values starting with the given string. */
  id_starts_with?: InputMaybe<Scalars['ID']>;
  images?: InputMaybe<AssetWhereInput>;
  manufacturer?: InputMaybe<Scalars['String']>;
  manufacturerLink?: InputMaybe<Scalars['String']>;
  /** All values containing the given string. */
  manufacturerLink_contains?: InputMaybe<Scalars['String']>;
  /** All values ending with the given string. */
  manufacturerLink_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are contained in given list. */
  manufacturerLink_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** All values that are not equal to given value. */
  manufacturerLink_not?: InputMaybe<Scalars['String']>;
  /** All values not containing the given string. */
  manufacturerLink_not_contains?: InputMaybe<Scalars['String']>;
  /** All values not ending with the given string */
  manufacturerLink_not_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  manufacturerLink_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** All values not starting with the given string. */
  manufacturerLink_not_starts_with?: InputMaybe<Scalars['String']>;
  /** All values starting with the given string. */
  manufacturerLink_starts_with?: InputMaybe<Scalars['String']>;
  /** All values containing the given string. */
  manufacturer_contains?: InputMaybe<Scalars['String']>;
  /** All values ending with the given string. */
  manufacturer_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are contained in given list. */
  manufacturer_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** All values that are not equal to given value. */
  manufacturer_not?: InputMaybe<Scalars['String']>;
  /** All values not containing the given string. */
  manufacturer_not_contains?: InputMaybe<Scalars['String']>;
  /** All values not ending with the given string */
  manufacturer_not_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  manufacturer_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** All values not starting with the given string. */
  manufacturer_not_starts_with?: InputMaybe<Scalars['String']>;
  /** All values starting with the given string. */
  manufacturer_starts_with?: InputMaybe<Scalars['String']>;
  newProduct?: InputMaybe<Scalars['Boolean']>;
  /** All values that are not equal to given value. */
  newProduct_not?: InputMaybe<Scalars['Boolean']>;
  onDiscount?: InputMaybe<Scalars['Boolean']>;
  /** All values that are not equal to given value. */
  onDiscount_not?: InputMaybe<Scalars['Boolean']>;
  price?: InputMaybe<Scalars['Int']>;
  /** All values greater than the given value. */
  price_gt?: InputMaybe<Scalars['Int']>;
  /** All values greater than or equal the given value. */
  price_gte?: InputMaybe<Scalars['Int']>;
  /** All values that are contained in given list. */
  price_in?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
  /** All values less than the given value. */
  price_lt?: InputMaybe<Scalars['Int']>;
  /** All values less than or equal the given value. */
  price_lte?: InputMaybe<Scalars['Int']>;
  /** All values that are not equal to given value. */
  price_not?: InputMaybe<Scalars['Int']>;
  /** All values that are not contained in given list. */
  price_not_in?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
  promotion?: InputMaybe<Scalars['Boolean']>;
  /** All values that are not equal to given value. */
  promotion_not?: InputMaybe<Scalars['Boolean']>;
  publishedAt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  publishedAt_gt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  publishedAt_gte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  publishedAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  /** All values less than the given value. */
  publishedAt_lt?: InputMaybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  publishedAt_lte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  publishedAt_not?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not contained in given list. */
  publishedAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  publishedBy?: InputMaybe<UserWhereInput>;
  scheduledIn_every?: InputMaybe<ScheduledOperationWhereInput>;
  scheduledIn_none?: InputMaybe<ScheduledOperationWhereInput>;
  scheduledIn_some?: InputMaybe<ScheduledOperationWhereInput>;
  slug?: InputMaybe<Scalars['String']>;
  /** All values containing the given string. */
  slug_contains?: InputMaybe<Scalars['String']>;
  /** All values ending with the given string. */
  slug_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are contained in given list. */
  slug_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** All values that are not equal to given value. */
  slug_not?: InputMaybe<Scalars['String']>;
  /** All values not containing the given string. */
  slug_not_contains?: InputMaybe<Scalars['String']>;
  /** All values not ending with the given string */
  slug_not_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  slug_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** All values not starting with the given string. */
  slug_not_starts_with?: InputMaybe<Scalars['String']>;
  /** All values starting with the given string. */
  slug_starts_with?: InputMaybe<Scalars['String']>;
  stock?: InputMaybe<Scalars['Int']>;
  /** All values greater than the given value. */
  stock_gt?: InputMaybe<Scalars['Int']>;
  /** All values greater than or equal the given value. */
  stock_gte?: InputMaybe<Scalars['Int']>;
  /** All values that are contained in given list. */
  stock_in?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
  /** All values less than the given value. */
  stock_lt?: InputMaybe<Scalars['Int']>;
  /** All values less than or equal the given value. */
  stock_lte?: InputMaybe<Scalars['Int']>;
  /** All values that are not equal to given value. */
  stock_not?: InputMaybe<Scalars['Int']>;
  /** All values that are not contained in given list. */
  stock_not_in?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
  subtitle?: InputMaybe<Scalars['String']>;
  /** All values containing the given string. */
  subtitle_contains?: InputMaybe<Scalars['String']>;
  /** All values ending with the given string. */
  subtitle_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are contained in given list. */
  subtitle_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** All values that are not equal to given value. */
  subtitle_not?: InputMaybe<Scalars['String']>;
  /** All values not containing the given string. */
  subtitle_not_contains?: InputMaybe<Scalars['String']>;
  /** All values not ending with the given string */
  subtitle_not_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  subtitle_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** All values not starting with the given string. */
  subtitle_not_starts_with?: InputMaybe<Scalars['String']>;
  /** All values starting with the given string. */
  subtitle_starts_with?: InputMaybe<Scalars['String']>;
  title?: InputMaybe<Scalars['String']>;
  /** All values containing the given string. */
  title_contains?: InputMaybe<Scalars['String']>;
  /** All values ending with the given string. */
  title_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are contained in given list. */
  title_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** All values that are not equal to given value. */
  title_not?: InputMaybe<Scalars['String']>;
  /** All values not containing the given string. */
  title_not_contains?: InputMaybe<Scalars['String']>;
  /** All values not ending with the given string */
  title_not_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  title_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** All values not starting with the given string. */
  title_not_starts_with?: InputMaybe<Scalars['String']>;
  /** All values starting with the given string. */
  title_starts_with?: InputMaybe<Scalars['String']>;
  updatedAt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  updatedAt_gt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  updatedAt_gte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  updatedAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  /** All values less than the given value. */
  updatedAt_lt?: InputMaybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  updatedAt_lte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  updatedAt_not?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not contained in given list. */
  updatedAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  updatedBy?: InputMaybe<UserWhereInput>;
  warranty?: InputMaybe<Scalars['Int']>;
  /** All values greater than the given value. */
  warranty_gt?: InputMaybe<Scalars['Int']>;
  /** All values greater than or equal the given value. */
  warranty_gte?: InputMaybe<Scalars['Int']>;
  /** All values that are contained in given list. */
  warranty_in?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
  /** All values less than the given value. */
  warranty_lt?: InputMaybe<Scalars['Int']>;
  /** All values less than or equal the given value. */
  warranty_lte?: InputMaybe<Scalars['Int']>;
  /** All values that are not equal to given value. */
  warranty_not?: InputMaybe<Scalars['Int']>;
  /** All values that are not contained in given list. */
  warranty_not_in?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
};

/** The document in stages filter allows specifying a stage entry to cross compare the same document between different stages */
export type StorageEquipmentWhereStageInput = {
  /** Logical AND on all given filters. */
  AND?: InputMaybe<Array<StorageEquipmentWhereStageInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: InputMaybe<Array<StorageEquipmentWhereStageInput>>;
  /** Logical OR on all given filters. */
  OR?: InputMaybe<Array<StorageEquipmentWhereStageInput>>;
  /** This field contains fields which can be set as true or false to specify an internal comparison */
  compareWithParent?: InputMaybe<StorageEquipmentWhereComparatorInput>;
  /** Specify the stage to compare with */
  stage?: InputMaybe<Stage>;
};

/** References StorageEquipment record uniquely */
export type StorageEquipmentWhereUniqueInput = {
  id?: InputMaybe<Scalars['ID']>;
  slug?: InputMaybe<Scalars['String']>;
  title?: InputMaybe<Scalars['String']>;
};

export enum SystemDateTimeFieldVariation {
  Base = 'BASE',
  Combined = 'COMBINED',
  Localization = 'LOCALIZATION'
}

export type UnpublishLocaleInput = {
  /** Locales to unpublish */
  locale: Locale;
  /** Stages to unpublish selected locales from */
  stages: Array<Stage>;
};

/** User system model */
export type User = Node & {
  __typename?: 'User';
  /** The time the document was created */
  createdAt: Scalars['DateTime'];
  /** Get the document in other stages */
  documentInStages: Array<User>;
  /** The unique identifier */
  id: Scalars['ID'];
  /** Flag to determine if user is active or not */
  isActive: Scalars['Boolean'];
  /** User Kind. Can be either MEMBER, PAT or PUBLIC */
  kind: UserKind;
  /** The username */
  name: Scalars['String'];
  /** Profile Picture url */
  picture?: Maybe<Scalars['String']>;
  /** The time the document was published. Null on documents in draft stage. */
  publishedAt?: Maybe<Scalars['DateTime']>;
  /** System stage field */
  stage: Stage;
  /** The time the document was updated */
  updatedAt: Scalars['DateTime'];
};


/** User system model */
export type UserDocumentInStagesArgs = {
  includeCurrent?: Scalars['Boolean'];
  inheritLocale?: Scalars['Boolean'];
  stages?: Array<Stage>;
};

export type UserConnectInput = {
  /** Allow to specify document position in list of connected documents, will default to appending at end of list */
  position?: InputMaybe<ConnectPositionInput>;
  /** Document to connect */
  where: UserWhereUniqueInput;
};

/** A connection to a list of items. */
export type UserConnection = {
  __typename?: 'UserConnection';
  aggregate: Aggregate;
  /** A list of edges. */
  edges: Array<UserEdge>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
};

export type UserCreateManyInlineInput = {
  /** Connect multiple existing User documents */
  connect?: InputMaybe<Array<UserWhereUniqueInput>>;
};

export type UserCreateOneInlineInput = {
  /** Connect one existing User document */
  connect?: InputMaybe<UserWhereUniqueInput>;
};

/** An edge in a connection. */
export type UserEdge = {
  __typename?: 'UserEdge';
  /** A cursor for use in pagination. */
  cursor: Scalars['String'];
  /** The item at the end of the edge. */
  node: User;
};

/** System User Kind */
export enum UserKind {
  Member = 'MEMBER',
  Pat = 'PAT',
  Public = 'PUBLIC',
  Webhook = 'WEBHOOK'
}

/** Identifies documents */
export type UserManyWhereInput = {
  /** Logical AND on all given filters. */
  AND?: InputMaybe<Array<UserWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: InputMaybe<Array<UserWhereInput>>;
  /** Logical OR on all given filters. */
  OR?: InputMaybe<Array<UserWhereInput>>;
  /** Contains search across all appropriate fields. */
  _search?: InputMaybe<Scalars['String']>;
  createdAt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  createdAt_gt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  createdAt_gte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  createdAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  /** All values less than the given value. */
  createdAt_lt?: InputMaybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  createdAt_lte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  createdAt_not?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not contained in given list. */
  createdAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  documentInStages_every?: InputMaybe<UserWhereStageInput>;
  documentInStages_none?: InputMaybe<UserWhereStageInput>;
  documentInStages_some?: InputMaybe<UserWhereStageInput>;
  id?: InputMaybe<Scalars['ID']>;
  /** All values containing the given string. */
  id_contains?: InputMaybe<Scalars['ID']>;
  /** All values ending with the given string. */
  id_ends_with?: InputMaybe<Scalars['ID']>;
  /** All values that are contained in given list. */
  id_in?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  /** All values that are not equal to given value. */
  id_not?: InputMaybe<Scalars['ID']>;
  /** All values not containing the given string. */
  id_not_contains?: InputMaybe<Scalars['ID']>;
  /** All values not ending with the given string */
  id_not_ends_with?: InputMaybe<Scalars['ID']>;
  /** All values that are not contained in given list. */
  id_not_in?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  /** All values not starting with the given string. */
  id_not_starts_with?: InputMaybe<Scalars['ID']>;
  /** All values starting with the given string. */
  id_starts_with?: InputMaybe<Scalars['ID']>;
  isActive?: InputMaybe<Scalars['Boolean']>;
  /** All values that are not equal to given value. */
  isActive_not?: InputMaybe<Scalars['Boolean']>;
  kind?: InputMaybe<UserKind>;
  /** All values that are contained in given list. */
  kind_in?: InputMaybe<Array<InputMaybe<UserKind>>>;
  /** All values that are not equal to given value. */
  kind_not?: InputMaybe<UserKind>;
  /** All values that are not contained in given list. */
  kind_not_in?: InputMaybe<Array<InputMaybe<UserKind>>>;
  name?: InputMaybe<Scalars['String']>;
  /** All values containing the given string. */
  name_contains?: InputMaybe<Scalars['String']>;
  /** All values ending with the given string. */
  name_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are contained in given list. */
  name_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** All values that are not equal to given value. */
  name_not?: InputMaybe<Scalars['String']>;
  /** All values not containing the given string. */
  name_not_contains?: InputMaybe<Scalars['String']>;
  /** All values not ending with the given string */
  name_not_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  name_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** All values not starting with the given string. */
  name_not_starts_with?: InputMaybe<Scalars['String']>;
  /** All values starting with the given string. */
  name_starts_with?: InputMaybe<Scalars['String']>;
  picture?: InputMaybe<Scalars['String']>;
  /** All values containing the given string. */
  picture_contains?: InputMaybe<Scalars['String']>;
  /** All values ending with the given string. */
  picture_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are contained in given list. */
  picture_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** All values that are not equal to given value. */
  picture_not?: InputMaybe<Scalars['String']>;
  /** All values not containing the given string. */
  picture_not_contains?: InputMaybe<Scalars['String']>;
  /** All values not ending with the given string */
  picture_not_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  picture_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** All values not starting with the given string. */
  picture_not_starts_with?: InputMaybe<Scalars['String']>;
  /** All values starting with the given string. */
  picture_starts_with?: InputMaybe<Scalars['String']>;
  publishedAt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  publishedAt_gt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  publishedAt_gte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  publishedAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  /** All values less than the given value. */
  publishedAt_lt?: InputMaybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  publishedAt_lte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  publishedAt_not?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not contained in given list. */
  publishedAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  updatedAt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  updatedAt_gt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  updatedAt_gte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  updatedAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  /** All values less than the given value. */
  updatedAt_lt?: InputMaybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  updatedAt_lte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  updatedAt_not?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not contained in given list. */
  updatedAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
};

export enum UserOrderByInput {
  CreatedAtAsc = 'createdAt_ASC',
  CreatedAtDesc = 'createdAt_DESC',
  IdAsc = 'id_ASC',
  IdDesc = 'id_DESC',
  IsActiveAsc = 'isActive_ASC',
  IsActiveDesc = 'isActive_DESC',
  KindAsc = 'kind_ASC',
  KindDesc = 'kind_DESC',
  NameAsc = 'name_ASC',
  NameDesc = 'name_DESC',
  PictureAsc = 'picture_ASC',
  PictureDesc = 'picture_DESC',
  PublishedAtAsc = 'publishedAt_ASC',
  PublishedAtDesc = 'publishedAt_DESC',
  UpdatedAtAsc = 'updatedAt_ASC',
  UpdatedAtDesc = 'updatedAt_DESC'
}

export type UserUpdateManyInlineInput = {
  /** Connect multiple existing User documents */
  connect?: InputMaybe<Array<UserConnectInput>>;
  /** Disconnect multiple User documents */
  disconnect?: InputMaybe<Array<UserWhereUniqueInput>>;
  /** Override currently-connected documents with multiple existing User documents */
  set?: InputMaybe<Array<UserWhereUniqueInput>>;
};

export type UserUpdateOneInlineInput = {
  /** Connect existing User document */
  connect?: InputMaybe<UserWhereUniqueInput>;
  /** Disconnect currently connected User document */
  disconnect?: InputMaybe<Scalars['Boolean']>;
};

/** This contains a set of filters that can be used to compare values internally */
export type UserWhereComparatorInput = {
  /** This field can be used to request to check if the entry is outdated by internal comparison */
  outdated_to?: InputMaybe<Scalars['Boolean']>;
};

/** Identifies documents */
export type UserWhereInput = {
  /** Logical AND on all given filters. */
  AND?: InputMaybe<Array<UserWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: InputMaybe<Array<UserWhereInput>>;
  /** Logical OR on all given filters. */
  OR?: InputMaybe<Array<UserWhereInput>>;
  /** Contains search across all appropriate fields. */
  _search?: InputMaybe<Scalars['String']>;
  createdAt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  createdAt_gt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  createdAt_gte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  createdAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  /** All values less than the given value. */
  createdAt_lt?: InputMaybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  createdAt_lte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  createdAt_not?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not contained in given list. */
  createdAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  documentInStages_every?: InputMaybe<UserWhereStageInput>;
  documentInStages_none?: InputMaybe<UserWhereStageInput>;
  documentInStages_some?: InputMaybe<UserWhereStageInput>;
  id?: InputMaybe<Scalars['ID']>;
  /** All values containing the given string. */
  id_contains?: InputMaybe<Scalars['ID']>;
  /** All values ending with the given string. */
  id_ends_with?: InputMaybe<Scalars['ID']>;
  /** All values that are contained in given list. */
  id_in?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  /** All values that are not equal to given value. */
  id_not?: InputMaybe<Scalars['ID']>;
  /** All values not containing the given string. */
  id_not_contains?: InputMaybe<Scalars['ID']>;
  /** All values not ending with the given string */
  id_not_ends_with?: InputMaybe<Scalars['ID']>;
  /** All values that are not contained in given list. */
  id_not_in?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  /** All values not starting with the given string. */
  id_not_starts_with?: InputMaybe<Scalars['ID']>;
  /** All values starting with the given string. */
  id_starts_with?: InputMaybe<Scalars['ID']>;
  isActive?: InputMaybe<Scalars['Boolean']>;
  /** All values that are not equal to given value. */
  isActive_not?: InputMaybe<Scalars['Boolean']>;
  kind?: InputMaybe<UserKind>;
  /** All values that are contained in given list. */
  kind_in?: InputMaybe<Array<InputMaybe<UserKind>>>;
  /** All values that are not equal to given value. */
  kind_not?: InputMaybe<UserKind>;
  /** All values that are not contained in given list. */
  kind_not_in?: InputMaybe<Array<InputMaybe<UserKind>>>;
  name?: InputMaybe<Scalars['String']>;
  /** All values containing the given string. */
  name_contains?: InputMaybe<Scalars['String']>;
  /** All values ending with the given string. */
  name_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are contained in given list. */
  name_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** All values that are not equal to given value. */
  name_not?: InputMaybe<Scalars['String']>;
  /** All values not containing the given string. */
  name_not_contains?: InputMaybe<Scalars['String']>;
  /** All values not ending with the given string */
  name_not_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  name_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** All values not starting with the given string. */
  name_not_starts_with?: InputMaybe<Scalars['String']>;
  /** All values starting with the given string. */
  name_starts_with?: InputMaybe<Scalars['String']>;
  picture?: InputMaybe<Scalars['String']>;
  /** All values containing the given string. */
  picture_contains?: InputMaybe<Scalars['String']>;
  /** All values ending with the given string. */
  picture_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are contained in given list. */
  picture_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** All values that are not equal to given value. */
  picture_not?: InputMaybe<Scalars['String']>;
  /** All values not containing the given string. */
  picture_not_contains?: InputMaybe<Scalars['String']>;
  /** All values not ending with the given string */
  picture_not_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  picture_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** All values not starting with the given string. */
  picture_not_starts_with?: InputMaybe<Scalars['String']>;
  /** All values starting with the given string. */
  picture_starts_with?: InputMaybe<Scalars['String']>;
  publishedAt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  publishedAt_gt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  publishedAt_gte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  publishedAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  /** All values less than the given value. */
  publishedAt_lt?: InputMaybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  publishedAt_lte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  publishedAt_not?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not contained in given list. */
  publishedAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  updatedAt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  updatedAt_gt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  updatedAt_gte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  updatedAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  /** All values less than the given value. */
  updatedAt_lt?: InputMaybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  updatedAt_lte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  updatedAt_not?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not contained in given list. */
  updatedAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
};

/** The document in stages filter allows specifying a stage entry to cross compare the same document between different stages */
export type UserWhereStageInput = {
  /** Logical AND on all given filters. */
  AND?: InputMaybe<Array<UserWhereStageInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: InputMaybe<Array<UserWhereStageInput>>;
  /** Logical OR on all given filters. */
  OR?: InputMaybe<Array<UserWhereStageInput>>;
  /** This field contains fields which can be set as true or false to specify an internal comparison */
  compareWithParent?: InputMaybe<UserWhereComparatorInput>;
  /** Specify the stage to compare with */
  stage?: InputMaybe<Stage>;
};

/** References User record uniquely */
export type UserWhereUniqueInput = {
  id?: InputMaybe<Scalars['ID']>;
};

export type Version = {
  __typename?: 'Version';
  createdAt: Scalars['DateTime'];
  id: Scalars['ID'];
  revision: Scalars['Int'];
  stage: Stage;
};

export type VersionWhereInput = {
  id: Scalars['ID'];
  revision: Scalars['Int'];
  stage: Stage;
};

export enum _FilterKind {
  And = 'AND',
  Not = 'NOT',
  Or = 'OR',
  Contains = 'contains',
  ContainsAll = 'contains_all',
  ContainsNone = 'contains_none',
  ContainsSome = 'contains_some',
  EndsWith = 'ends_with',
  Eq = 'eq',
  EqNot = 'eq_not',
  Gt = 'gt',
  Gte = 'gte',
  In = 'in',
  Lt = 'lt',
  Lte = 'lte',
  NotContains = 'not_contains',
  NotEndsWith = 'not_ends_with',
  NotIn = 'not_in',
  NotStartsWith = 'not_starts_with',
  RelationalEvery = 'relational_every',
  RelationalNone = 'relational_none',
  RelationalSingle = 'relational_single',
  RelationalSome = 'relational_some',
  Search = 'search',
  StartsWith = 'starts_with'
}

export enum _MutationInputFieldKind {
  Enum = 'enum',
  Relation = 'relation',
  RichText = 'richText',
  RichTextWithEmbeds = 'richTextWithEmbeds',
  Scalar = 'scalar',
  Union = 'union',
  Virtual = 'virtual'
}

export enum _MutationKind {
  Create = 'create',
  Delete = 'delete',
  DeleteMany = 'deleteMany',
  Publish = 'publish',
  PublishMany = 'publishMany',
  SchedulePublish = 'schedulePublish',
  ScheduleUnpublish = 'scheduleUnpublish',
  Unpublish = 'unpublish',
  UnpublishMany = 'unpublishMany',
  Update = 'update',
  UpdateMany = 'updateMany',
  Upsert = 'upsert'
}

export enum _OrderDirection {
  Asc = 'asc',
  Desc = 'desc'
}

export enum _RelationInputCardinality {
  Many = 'many',
  One = 'one'
}

export enum _RelationInputKind {
  Create = 'create',
  Update = 'update'
}

export enum _RelationKind {
  Regular = 'regular',
  Union = 'union'
}

export enum _SystemDateTimeFieldVariation {
  Base = 'base',
  Combined = 'combined',
  Localization = 'localization'
}

/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  /** A date string, such as 2007-12-03 (YYYY-MM-DD), compliant with ISO 8601 standard for representation of dates using the Gregorian calendar. */
  Date: any;
  /** A date-time string at UTC, such as 2007-12-03T10:15:30Z, compliant with the date-timeformat outlined in section 5.6 of the RFC 3339 profile of the ISO 8601 standard for representationof dates and times using the Gregorian calendar. */
  DateTime: any;
  Hex: any;
  /** Raw JSON value */
  Json: any;
  /** The Long scalar type represents non-fractional signed whole numeric values. Long can represent values between -(2^63) and 2^63 - 1. */
  Long: any;
  RGBAHue: any;
  RGBATransparency: any;
  /** Slate-compatible RichText AST */
  RichTextAST: any;
};

export type Aggregate = {
  __typename?: 'Aggregate';
  count: Scalars['Int'];
};

/** Asset system model */
export type Asset = Node & {
  __typename?: 'Asset';
  /** The time the document was created */
  createdAt: Scalars['DateTime'];
  /** User that created this document */
  createdBy?: Maybe<User>;
  /** Get the document in other stages */
  documentInStages: Array<Asset>;
  /** The file name */
  fileName: Scalars['String'];
  /** The file handle */
  handle: Scalars['String'];
  /** The height of the file */
  height?: Maybe<Scalars['Float']>;
  /** List of Asset versions */
  history: Array<Version>;
  /** The unique identifier */
  id: Scalars['ID'];
  imageGPU: Array<Gpu>;
  imagesCPU: Array<Cpu>;
  imagesLaptop: Array<Laptop>;
  imagesMotherboard: Array<Motherboard>;
  imagesStorageEquipment: Array<StorageEquipment>;
  /** System Locale field */
  locale: Locale;
  /** Get the other localizations for this document */
  localizations: Array<Asset>;
  /** The mime type of the file */
  mimeType?: Maybe<Scalars['String']>;
  /** The time the document was published. Null on documents in draft stage. */
  publishedAt?: Maybe<Scalars['DateTime']>;
  /** User that last published this document */
  publishedBy?: Maybe<User>;
  scheduledIn: Array<ScheduledOperation>;
  /** The file size */
  size?: Maybe<Scalars['Float']>;
  /** System stage field */
  stage: Stage;
  /** The time the document was updated */
  updatedAt: Scalars['DateTime'];
  /** User that last updated this document */
  updatedBy?: Maybe<User>;
  /** Get the url for the asset with provided transformations applied. */
  url: Scalars['String'];
  /** The file width */
  width?: Maybe<Scalars['Float']>;
};


/** Asset system model */
export type AssetCreatedAtArgs = {
  variation?: SystemDateTimeFieldVariation;
};


/** Asset system model */
export type AssetCreatedByArgs = {
  locales?: InputMaybe<Array<Locale>>;
};


/** Asset system model */
export type AssetDocumentInStagesArgs = {
  includeCurrent?: Scalars['Boolean'];
  inheritLocale?: Scalars['Boolean'];
  stages?: Array<Stage>;
};


/** Asset system model */
export type AssetHistoryArgs = {
  limit?: Scalars['Int'];
  skip?: Scalars['Int'];
  stageOverride?: InputMaybe<Stage>;
};


/** Asset system model */
export type AssetImageGpuArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  locales?: InputMaybe<Array<Locale>>;
  orderBy?: InputMaybe<GpuOrderByInput>;
  skip?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<GpuWhereInput>;
};


/** Asset system model */
export type AssetImagesCpuArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  locales?: InputMaybe<Array<Locale>>;
  orderBy?: InputMaybe<CpuOrderByInput>;
  skip?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<CpuWhereInput>;
};


/** Asset system model */
export type AssetImagesLaptopArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  locales?: InputMaybe<Array<Locale>>;
  orderBy?: InputMaybe<LaptopOrderByInput>;
  skip?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<LaptopWhereInput>;
};


/** Asset system model */
export type AssetImagesMotherboardArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  locales?: InputMaybe<Array<Locale>>;
  orderBy?: InputMaybe<MotherboardOrderByInput>;
  skip?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<MotherboardWhereInput>;
};


/** Asset system model */
export type AssetImagesStorageEquipmentArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  locales?: InputMaybe<Array<Locale>>;
  orderBy?: InputMaybe<StorageEquipmentOrderByInput>;
  skip?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<StorageEquipmentWhereInput>;
};


/** Asset system model */
export type AssetLocalizationsArgs = {
  includeCurrent?: Scalars['Boolean'];
  locales?: Array<Locale>;
};


/** Asset system model */
export type AssetPublishedAtArgs = {
  variation?: SystemDateTimeFieldVariation;
};


/** Asset system model */
export type AssetPublishedByArgs = {
  locales?: InputMaybe<Array<Locale>>;
};


/** Asset system model */
export type AssetScheduledInArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  locales?: InputMaybe<Array<Locale>>;
  skip?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<ScheduledOperationWhereInput>;
};


/** Asset system model */
export type AssetUpdatedAtArgs = {
  variation?: SystemDateTimeFieldVariation;
};


/** Asset system model */
export type AssetUpdatedByArgs = {
  locales?: InputMaybe<Array<Locale>>;
};


/** Asset system model */
export type AssetUrlArgs = {
  transformation?: InputMaybe<AssetTransformationInput>;
};

export type AssetConnectInput = {
  /** Allow to specify document position in list of connected documents, will default to appending at end of list */
  position?: InputMaybe<ConnectPositionInput>;
  /** Document to connect */
  where: AssetWhereUniqueInput;
};

/** A connection to a list of items. */
export type AssetConnection = {
  __typename?: 'AssetConnection';
  aggregate: Aggregate;
  /** A list of edges. */
  edges: Array<AssetEdge>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
};

export type AssetCreateInput = {
  createdAt?: InputMaybe<Scalars['DateTime']>;
  fileName: Scalars['String'];
  handle: Scalars['String'];
  height?: InputMaybe<Scalars['Float']>;
  imageGPU?: InputMaybe<GpuCreateManyInlineInput>;
  imagesCPU?: InputMaybe<CpuCreateManyInlineInput>;
  imagesLaptop?: InputMaybe<LaptopCreateManyInlineInput>;
  imagesMotherboard?: InputMaybe<MotherboardCreateManyInlineInput>;
  imagesStorageEquipment?: InputMaybe<StorageEquipmentCreateManyInlineInput>;
  /** Inline mutations for managing document localizations excluding the default locale */
  localizations?: InputMaybe<AssetCreateLocalizationsInput>;
  mimeType?: InputMaybe<Scalars['String']>;
  size?: InputMaybe<Scalars['Float']>;
  updatedAt?: InputMaybe<Scalars['DateTime']>;
  width?: InputMaybe<Scalars['Float']>;
};

export type AssetCreateLocalizationDataInput = {
  createdAt?: InputMaybe<Scalars['DateTime']>;
  fileName: Scalars['String'];
  handle: Scalars['String'];
  height?: InputMaybe<Scalars['Float']>;
  mimeType?: InputMaybe<Scalars['String']>;
  size?: InputMaybe<Scalars['Float']>;
  updatedAt?: InputMaybe<Scalars['DateTime']>;
  width?: InputMaybe<Scalars['Float']>;
};

export type AssetCreateLocalizationInput = {
  /** Localization input */
  data: AssetCreateLocalizationDataInput;
  locale: Locale;
};

export type AssetCreateLocalizationsInput = {
  /** Create localizations for the newly-created document */
  create?: InputMaybe<Array<AssetCreateLocalizationInput>>;
};

export type AssetCreateManyInlineInput = {
  /** Connect multiple existing Asset documents */
  connect?: InputMaybe<Array<AssetWhereUniqueInput>>;
  /** Create and connect multiple existing Asset documents */
  create?: InputMaybe<Array<AssetCreateInput>>;
};

export type AssetCreateOneInlineInput = {
  /** Connect one existing Asset document */
  connect?: InputMaybe<AssetWhereUniqueInput>;
  /** Create and connect one Asset document */
  create?: InputMaybe<AssetCreateInput>;
};

/** An edge in a connection. */
export type AssetEdge = {
  __typename?: 'AssetEdge';
  /** A cursor for use in pagination. */
  cursor: Scalars['String'];
  /** The item at the end of the edge. */
  node: Asset;
};

/** Identifies documents */
export type AssetManyWhereInput = {
  /** Logical AND on all given filters. */
  AND?: InputMaybe<Array<AssetWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: InputMaybe<Array<AssetWhereInput>>;
  /** Logical OR on all given filters. */
  OR?: InputMaybe<Array<AssetWhereInput>>;
  /** Contains search across all appropriate fields. */
  _search?: InputMaybe<Scalars['String']>;
  createdAt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  createdAt_gt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  createdAt_gte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  createdAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  /** All values less than the given value. */
  createdAt_lt?: InputMaybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  createdAt_lte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  createdAt_not?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not contained in given list. */
  createdAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  createdBy?: InputMaybe<UserWhereInput>;
  documentInStages_every?: InputMaybe<AssetWhereStageInput>;
  documentInStages_none?: InputMaybe<AssetWhereStageInput>;
  documentInStages_some?: InputMaybe<AssetWhereStageInput>;
  id?: InputMaybe<Scalars['ID']>;
  /** All values containing the given string. */
  id_contains?: InputMaybe<Scalars['ID']>;
  /** All values ending with the given string. */
  id_ends_with?: InputMaybe<Scalars['ID']>;
  /** All values that are contained in given list. */
  id_in?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  /** All values that are not equal to given value. */
  id_not?: InputMaybe<Scalars['ID']>;
  /** All values not containing the given string. */
  id_not_contains?: InputMaybe<Scalars['ID']>;
  /** All values not ending with the given string */
  id_not_ends_with?: InputMaybe<Scalars['ID']>;
  /** All values that are not contained in given list. */
  id_not_in?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  /** All values not starting with the given string. */
  id_not_starts_with?: InputMaybe<Scalars['ID']>;
  /** All values starting with the given string. */
  id_starts_with?: InputMaybe<Scalars['ID']>;
  imageGPU_every?: InputMaybe<GpuWhereInput>;
  imageGPU_none?: InputMaybe<GpuWhereInput>;
  imageGPU_some?: InputMaybe<GpuWhereInput>;
  imagesCPU_every?: InputMaybe<CpuWhereInput>;
  imagesCPU_none?: InputMaybe<CpuWhereInput>;
  imagesCPU_some?: InputMaybe<CpuWhereInput>;
  imagesLaptop_every?: InputMaybe<LaptopWhereInput>;
  imagesLaptop_none?: InputMaybe<LaptopWhereInput>;
  imagesLaptop_some?: InputMaybe<LaptopWhereInput>;
  imagesMotherboard_every?: InputMaybe<MotherboardWhereInput>;
  imagesMotherboard_none?: InputMaybe<MotherboardWhereInput>;
  imagesMotherboard_some?: InputMaybe<MotherboardWhereInput>;
  imagesStorageEquipment_every?: InputMaybe<StorageEquipmentWhereInput>;
  imagesStorageEquipment_none?: InputMaybe<StorageEquipmentWhereInput>;
  imagesStorageEquipment_some?: InputMaybe<StorageEquipmentWhereInput>;
  publishedAt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  publishedAt_gt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  publishedAt_gte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  publishedAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  /** All values less than the given value. */
  publishedAt_lt?: InputMaybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  publishedAt_lte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  publishedAt_not?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not contained in given list. */
  publishedAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  publishedBy?: InputMaybe<UserWhereInput>;
  scheduledIn_every?: InputMaybe<ScheduledOperationWhereInput>;
  scheduledIn_none?: InputMaybe<ScheduledOperationWhereInput>;
  scheduledIn_some?: InputMaybe<ScheduledOperationWhereInput>;
  updatedAt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  updatedAt_gt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  updatedAt_gte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  updatedAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  /** All values less than the given value. */
  updatedAt_lt?: InputMaybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  updatedAt_lte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  updatedAt_not?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not contained in given list. */
  updatedAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  updatedBy?: InputMaybe<UserWhereInput>;
};

export enum AssetOrderByInput {
  CreatedAtAsc = 'createdAt_ASC',
  CreatedAtDesc = 'createdAt_DESC',
  FileNameAsc = 'fileName_ASC',
  FileNameDesc = 'fileName_DESC',
  HandleAsc = 'handle_ASC',
  HandleDesc = 'handle_DESC',
  HeightAsc = 'height_ASC',
  HeightDesc = 'height_DESC',
  IdAsc = 'id_ASC',
  IdDesc = 'id_DESC',
  MimeTypeAsc = 'mimeType_ASC',
  MimeTypeDesc = 'mimeType_DESC',
  PublishedAtAsc = 'publishedAt_ASC',
  PublishedAtDesc = 'publishedAt_DESC',
  SizeAsc = 'size_ASC',
  SizeDesc = 'size_DESC',
  UpdatedAtAsc = 'updatedAt_ASC',
  UpdatedAtDesc = 'updatedAt_DESC',
  WidthAsc = 'width_ASC',
  WidthDesc = 'width_DESC'
}

/** Transformations for Assets */
export type AssetTransformationInput = {
  document?: InputMaybe<DocumentTransformationInput>;
  image?: InputMaybe<ImageTransformationInput>;
  /** Pass true if you want to validate the passed transformation parameters */
  validateOptions?: InputMaybe<Scalars['Boolean']>;
};

export type AssetUpdateInput = {
  fileName?: InputMaybe<Scalars['String']>;
  handle?: InputMaybe<Scalars['String']>;
  height?: InputMaybe<Scalars['Float']>;
  imageGPU?: InputMaybe<GpuUpdateManyInlineInput>;
  imagesCPU?: InputMaybe<CpuUpdateManyInlineInput>;
  imagesLaptop?: InputMaybe<LaptopUpdateManyInlineInput>;
  imagesMotherboard?: InputMaybe<MotherboardUpdateManyInlineInput>;
  imagesStorageEquipment?: InputMaybe<StorageEquipmentUpdateManyInlineInput>;
  /** Manage document localizations */
  localizations?: InputMaybe<AssetUpdateLocalizationsInput>;
  mimeType?: InputMaybe<Scalars['String']>;
  size?: InputMaybe<Scalars['Float']>;
  width?: InputMaybe<Scalars['Float']>;
};

export type AssetUpdateLocalizationDataInput = {
  fileName?: InputMaybe<Scalars['String']>;
  handle?: InputMaybe<Scalars['String']>;
  height?: InputMaybe<Scalars['Float']>;
  mimeType?: InputMaybe<Scalars['String']>;
  size?: InputMaybe<Scalars['Float']>;
  width?: InputMaybe<Scalars['Float']>;
};

export type AssetUpdateLocalizationInput = {
  data: AssetUpdateLocalizationDataInput;
  locale: Locale;
};

export type AssetUpdateLocalizationsInput = {
  /** Localizations to create */
  create?: InputMaybe<Array<AssetCreateLocalizationInput>>;
  /** Localizations to delete */
  delete?: InputMaybe<Array<Locale>>;
  /** Localizations to update */
  update?: InputMaybe<Array<AssetUpdateLocalizationInput>>;
  upsert?: InputMaybe<Array<AssetUpsertLocalizationInput>>;
};

export type AssetUpdateManyInlineInput = {
  /** Connect multiple existing Asset documents */
  connect?: InputMaybe<Array<AssetConnectInput>>;
  /** Create and connect multiple Asset documents */
  create?: InputMaybe<Array<AssetCreateInput>>;
  /** Delete multiple Asset documents */
  delete?: InputMaybe<Array<AssetWhereUniqueInput>>;
  /** Disconnect multiple Asset documents */
  disconnect?: InputMaybe<Array<AssetWhereUniqueInput>>;
  /** Override currently-connected documents with multiple existing Asset documents */
  set?: InputMaybe<Array<AssetWhereUniqueInput>>;
  /** Update multiple Asset documents */
  update?: InputMaybe<Array<AssetUpdateWithNestedWhereUniqueInput>>;
  /** Upsert multiple Asset documents */
  upsert?: InputMaybe<Array<AssetUpsertWithNestedWhereUniqueInput>>;
};

export type AssetUpdateManyInput = {
  fileName?: InputMaybe<Scalars['String']>;
  height?: InputMaybe<Scalars['Float']>;
  /** Optional updates to localizations */
  localizations?: InputMaybe<AssetUpdateManyLocalizationsInput>;
  mimeType?: InputMaybe<Scalars['String']>;
  size?: InputMaybe<Scalars['Float']>;
  width?: InputMaybe<Scalars['Float']>;
};

export type AssetUpdateManyLocalizationDataInput = {
  fileName?: InputMaybe<Scalars['String']>;
  height?: InputMaybe<Scalars['Float']>;
  mimeType?: InputMaybe<Scalars['String']>;
  size?: InputMaybe<Scalars['Float']>;
  width?: InputMaybe<Scalars['Float']>;
};

export type AssetUpdateManyLocalizationInput = {
  data: AssetUpdateManyLocalizationDataInput;
  locale: Locale;
};

export type AssetUpdateManyLocalizationsInput = {
  /** Localizations to update */
  update?: InputMaybe<Array<AssetUpdateManyLocalizationInput>>;
};

export type AssetUpdateManyWithNestedWhereInput = {
  /** Update many input */
  data: AssetUpdateManyInput;
  /** Document search */
  where: AssetWhereInput;
};

export type AssetUpdateOneInlineInput = {
  /** Connect existing Asset document */
  connect?: InputMaybe<AssetWhereUniqueInput>;
  /** Create and connect one Asset document */
  create?: InputMaybe<AssetCreateInput>;
  /** Delete currently connected Asset document */
  delete?: InputMaybe<Scalars['Boolean']>;
  /** Disconnect currently connected Asset document */
  disconnect?: InputMaybe<Scalars['Boolean']>;
  /** Update single Asset document */
  update?: InputMaybe<AssetUpdateWithNestedWhereUniqueInput>;
  /** Upsert single Asset document */
  upsert?: InputMaybe<AssetUpsertWithNestedWhereUniqueInput>;
};

export type AssetUpdateWithNestedWhereUniqueInput = {
  /** Document to update */
  data: AssetUpdateInput;
  /** Unique document search */
  where: AssetWhereUniqueInput;
};

export type AssetUpsertInput = {
  /** Create document if it didn't exist */
  create: AssetCreateInput;
  /** Update document if it exists */
  update: AssetUpdateInput;
};

export type AssetUpsertLocalizationInput = {
  create: AssetCreateLocalizationDataInput;
  locale: Locale;
  update: AssetUpdateLocalizationDataInput;
};

export type AssetUpsertWithNestedWhereUniqueInput = {
  /** Upsert data */
  data: AssetUpsertInput;
  /** Unique document search */
  where: AssetWhereUniqueInput;
};

/** This contains a set of filters that can be used to compare values internally */
export type AssetWhereComparatorInput = {
  /** This field can be used to request to check if the entry is outdated by internal comparison */
  outdated_to?: InputMaybe<Scalars['Boolean']>;
};

/** Identifies documents */
export type AssetWhereInput = {
  /** Logical AND on all given filters. */
  AND?: InputMaybe<Array<AssetWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: InputMaybe<Array<AssetWhereInput>>;
  /** Logical OR on all given filters. */
  OR?: InputMaybe<Array<AssetWhereInput>>;
  /** Contains search across all appropriate fields. */
  _search?: InputMaybe<Scalars['String']>;
  createdAt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  createdAt_gt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  createdAt_gte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  createdAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  /** All values less than the given value. */
  createdAt_lt?: InputMaybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  createdAt_lte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  createdAt_not?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not contained in given list. */
  createdAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  createdBy?: InputMaybe<UserWhereInput>;
  documentInStages_every?: InputMaybe<AssetWhereStageInput>;
  documentInStages_none?: InputMaybe<AssetWhereStageInput>;
  documentInStages_some?: InputMaybe<AssetWhereStageInput>;
  fileName?: InputMaybe<Scalars['String']>;
  /** All values containing the given string. */
  fileName_contains?: InputMaybe<Scalars['String']>;
  /** All values ending with the given string. */
  fileName_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are contained in given list. */
  fileName_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** All values that are not equal to given value. */
  fileName_not?: InputMaybe<Scalars['String']>;
  /** All values not containing the given string. */
  fileName_not_contains?: InputMaybe<Scalars['String']>;
  /** All values not ending with the given string */
  fileName_not_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  fileName_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** All values not starting with the given string. */
  fileName_not_starts_with?: InputMaybe<Scalars['String']>;
  /** All values starting with the given string. */
  fileName_starts_with?: InputMaybe<Scalars['String']>;
  handle?: InputMaybe<Scalars['String']>;
  /** All values containing the given string. */
  handle_contains?: InputMaybe<Scalars['String']>;
  /** All values ending with the given string. */
  handle_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are contained in given list. */
  handle_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** All values that are not equal to given value. */
  handle_not?: InputMaybe<Scalars['String']>;
  /** All values not containing the given string. */
  handle_not_contains?: InputMaybe<Scalars['String']>;
  /** All values not ending with the given string */
  handle_not_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  handle_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** All values not starting with the given string. */
  handle_not_starts_with?: InputMaybe<Scalars['String']>;
  /** All values starting with the given string. */
  handle_starts_with?: InputMaybe<Scalars['String']>;
  height?: InputMaybe<Scalars['Float']>;
  /** All values greater than the given value. */
  height_gt?: InputMaybe<Scalars['Float']>;
  /** All values greater than or equal the given value. */
  height_gte?: InputMaybe<Scalars['Float']>;
  /** All values that are contained in given list. */
  height_in?: InputMaybe<Array<InputMaybe<Scalars['Float']>>>;
  /** All values less than the given value. */
  height_lt?: InputMaybe<Scalars['Float']>;
  /** All values less than or equal the given value. */
  height_lte?: InputMaybe<Scalars['Float']>;
  /** All values that are not equal to given value. */
  height_not?: InputMaybe<Scalars['Float']>;
  /** All values that are not contained in given list. */
  height_not_in?: InputMaybe<Array<InputMaybe<Scalars['Float']>>>;
  id?: InputMaybe<Scalars['ID']>;
  /** All values containing the given string. */
  id_contains?: InputMaybe<Scalars['ID']>;
  /** All values ending with the given string. */
  id_ends_with?: InputMaybe<Scalars['ID']>;
  /** All values that are contained in given list. */
  id_in?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  /** All values that are not equal to given value. */
  id_not?: InputMaybe<Scalars['ID']>;
  /** All values not containing the given string. */
  id_not_contains?: InputMaybe<Scalars['ID']>;
  /** All values not ending with the given string */
  id_not_ends_with?: InputMaybe<Scalars['ID']>;
  /** All values that are not contained in given list. */
  id_not_in?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  /** All values not starting with the given string. */
  id_not_starts_with?: InputMaybe<Scalars['ID']>;
  /** All values starting with the given string. */
  id_starts_with?: InputMaybe<Scalars['ID']>;
  imageGPU_every?: InputMaybe<GpuWhereInput>;
  imageGPU_none?: InputMaybe<GpuWhereInput>;
  imageGPU_some?: InputMaybe<GpuWhereInput>;
  imagesCPU_every?: InputMaybe<CpuWhereInput>;
  imagesCPU_none?: InputMaybe<CpuWhereInput>;
  imagesCPU_some?: InputMaybe<CpuWhereInput>;
  imagesLaptop_every?: InputMaybe<LaptopWhereInput>;
  imagesLaptop_none?: InputMaybe<LaptopWhereInput>;
  imagesLaptop_some?: InputMaybe<LaptopWhereInput>;
  imagesMotherboard_every?: InputMaybe<MotherboardWhereInput>;
  imagesMotherboard_none?: InputMaybe<MotherboardWhereInput>;
  imagesMotherboard_some?: InputMaybe<MotherboardWhereInput>;
  imagesStorageEquipment_every?: InputMaybe<StorageEquipmentWhereInput>;
  imagesStorageEquipment_none?: InputMaybe<StorageEquipmentWhereInput>;
  imagesStorageEquipment_some?: InputMaybe<StorageEquipmentWhereInput>;
  mimeType?: InputMaybe<Scalars['String']>;
  /** All values containing the given string. */
  mimeType_contains?: InputMaybe<Scalars['String']>;
  /** All values ending with the given string. */
  mimeType_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are contained in given list. */
  mimeType_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** All values that are not equal to given value. */
  mimeType_not?: InputMaybe<Scalars['String']>;
  /** All values not containing the given string. */
  mimeType_not_contains?: InputMaybe<Scalars['String']>;
  /** All values not ending with the given string */
  mimeType_not_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  mimeType_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** All values not starting with the given string. */
  mimeType_not_starts_with?: InputMaybe<Scalars['String']>;
  /** All values starting with the given string. */
  mimeType_starts_with?: InputMaybe<Scalars['String']>;
  publishedAt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  publishedAt_gt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  publishedAt_gte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  publishedAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  /** All values less than the given value. */
  publishedAt_lt?: InputMaybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  publishedAt_lte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  publishedAt_not?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not contained in given list. */
  publishedAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  publishedBy?: InputMaybe<UserWhereInput>;
  scheduledIn_every?: InputMaybe<ScheduledOperationWhereInput>;
  scheduledIn_none?: InputMaybe<ScheduledOperationWhereInput>;
  scheduledIn_some?: InputMaybe<ScheduledOperationWhereInput>;
  size?: InputMaybe<Scalars['Float']>;
  /** All values greater than the given value. */
  size_gt?: InputMaybe<Scalars['Float']>;
  /** All values greater than or equal the given value. */
  size_gte?: InputMaybe<Scalars['Float']>;
  /** All values that are contained in given list. */
  size_in?: InputMaybe<Array<InputMaybe<Scalars['Float']>>>;
  /** All values less than the given value. */
  size_lt?: InputMaybe<Scalars['Float']>;
  /** All values less than or equal the given value. */
  size_lte?: InputMaybe<Scalars['Float']>;
  /** All values that are not equal to given value. */
  size_not?: InputMaybe<Scalars['Float']>;
  /** All values that are not contained in given list. */
  size_not_in?: InputMaybe<Array<InputMaybe<Scalars['Float']>>>;
  updatedAt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  updatedAt_gt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  updatedAt_gte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  updatedAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  /** All values less than the given value. */
  updatedAt_lt?: InputMaybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  updatedAt_lte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  updatedAt_not?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not contained in given list. */
  updatedAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  updatedBy?: InputMaybe<UserWhereInput>;
  width?: InputMaybe<Scalars['Float']>;
  /** All values greater than the given value. */
  width_gt?: InputMaybe<Scalars['Float']>;
  /** All values greater than or equal the given value. */
  width_gte?: InputMaybe<Scalars['Float']>;
  /** All values that are contained in given list. */
  width_in?: InputMaybe<Array<InputMaybe<Scalars['Float']>>>;
  /** All values less than the given value. */
  width_lt?: InputMaybe<Scalars['Float']>;
  /** All values less than or equal the given value. */
  width_lte?: InputMaybe<Scalars['Float']>;
  /** All values that are not equal to given value. */
  width_not?: InputMaybe<Scalars['Float']>;
  /** All values that are not contained in given list. */
  width_not_in?: InputMaybe<Array<InputMaybe<Scalars['Float']>>>;
};

/** The document in stages filter allows specifying a stage entry to cross compare the same document between different stages */
export type AssetWhereStageInput = {
  /** Logical AND on all given filters. */
  AND?: InputMaybe<Array<AssetWhereStageInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: InputMaybe<Array<AssetWhereStageInput>>;
  /** Logical OR on all given filters. */
  OR?: InputMaybe<Array<AssetWhereStageInput>>;
  /** This field contains fields which can be set as true or false to specify an internal comparison */
  compareWithParent?: InputMaybe<AssetWhereComparatorInput>;
  /** Specify the stage to compare with */
  stage?: InputMaybe<Stage>;
};

/** References Asset record uniquely */
export type AssetWhereUniqueInput = {
  id?: InputMaybe<Scalars['ID']>;
};

export type BatchPayload = {
  __typename?: 'BatchPayload';
  /** The number of nodes that have been affected by the Batch operation. */
  count: Scalars['Long'];
};

export type Cpu = Node & {
  __typename?: 'CPU';
  brand?: Maybe<Scalars['String']>;
  /** The time the document was created */
  createdAt: Scalars['DateTime'];
  /** User that created this document */
  createdBy?: Maybe<User>;
  description?: Maybe<RichText>;
  discountPercent?: Maybe<Scalars['Int']>;
  /** Get the document in other stages */
  documentInStages: Array<Cpu>;
  /** List of CPU versions */
  history: Array<Version>;
  /** The unique identifier */
  id: Scalars['ID'];
  images?: Maybe<Asset>;
  manufacturer?: Maybe<Scalars['String']>;
  manufacturerLink?: Maybe<Scalars['String']>;
  newProduct?: Maybe<Scalars['Boolean']>;
  onDiscount?: Maybe<Scalars['Boolean']>;
  price?: Maybe<Scalars['Int']>;
  promotion?: Maybe<Scalars['Boolean']>;
  /** The time the document was published. Null on documents in draft stage. */
  publishedAt?: Maybe<Scalars['DateTime']>;
  /** User that last published this document */
  publishedBy?: Maybe<User>;
  scheduledIn: Array<ScheduledOperation>;
  slug?: Maybe<Scalars['String']>;
  /** System stage field */
  stage: Stage;
  stock?: Maybe<Scalars['Int']>;
  subtitle?: Maybe<Scalars['String']>;
  title: Scalars['String'];
  /** The time the document was updated */
  updatedAt: Scalars['DateTime'];
  /** User that last updated this document */
  updatedBy?: Maybe<User>;
  warranty?: Maybe<Scalars['Int']>;
};


export type CpuCreatedByArgs = {
  locales?: InputMaybe<Array<Locale>>;
};


export type CpuDocumentInStagesArgs = {
  includeCurrent?: Scalars['Boolean'];
  inheritLocale?: Scalars['Boolean'];
  stages?: Array<Stage>;
};


export type CpuHistoryArgs = {
  limit?: Scalars['Int'];
  skip?: Scalars['Int'];
  stageOverride?: InputMaybe<Stage>;
};


export type CpuImagesArgs = {
  locales?: InputMaybe<Array<Locale>>;
};


export type CpuPublishedByArgs = {
  locales?: InputMaybe<Array<Locale>>;
};


export type CpuScheduledInArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  locales?: InputMaybe<Array<Locale>>;
  skip?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<ScheduledOperationWhereInput>;
};


export type CpuUpdatedByArgs = {
  locales?: InputMaybe<Array<Locale>>;
};

export type CpuConnectInput = {
  /** Allow to specify document position in list of connected documents, will default to appending at end of list */
  position?: InputMaybe<ConnectPositionInput>;
  /** Document to connect */
  where: CpuWhereUniqueInput;
};

/** A connection to a list of items. */
export type CpuConnection = {
  __typename?: 'CPUConnection';
  aggregate: Aggregate;
  /** A list of edges. */
  edges: Array<CpuEdge>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
};

export type CpuCreateInput = {
  brand?: InputMaybe<Scalars['String']>;
  createdAt?: InputMaybe<Scalars['DateTime']>;
  description?: InputMaybe<Scalars['RichTextAST']>;
  discountPercent?: InputMaybe<Scalars['Int']>;
  images?: InputMaybe<AssetCreateOneInlineInput>;
  manufacturer?: InputMaybe<Scalars['String']>;
  manufacturerLink?: InputMaybe<Scalars['String']>;
  newProduct?: InputMaybe<Scalars['Boolean']>;
  onDiscount?: InputMaybe<Scalars['Boolean']>;
  price?: InputMaybe<Scalars['Int']>;
  promotion?: InputMaybe<Scalars['Boolean']>;
  slug?: InputMaybe<Scalars['String']>;
  stock?: InputMaybe<Scalars['Int']>;
  subtitle?: InputMaybe<Scalars['String']>;
  title: Scalars['String'];
  updatedAt?: InputMaybe<Scalars['DateTime']>;
  warranty?: InputMaybe<Scalars['Int']>;
};

export type CpuCreateManyInlineInput = {
  /** Connect multiple existing CPU documents */
  connect?: InputMaybe<Array<CpuWhereUniqueInput>>;
  /** Create and connect multiple existing CPU documents */
  create?: InputMaybe<Array<CpuCreateInput>>;
};

export type CpuCreateOneInlineInput = {
  /** Connect one existing CPU document */
  connect?: InputMaybe<CpuWhereUniqueInput>;
  /** Create and connect one CPU document */
  create?: InputMaybe<CpuCreateInput>;
};

/** An edge in a connection. */
export type CpuEdge = {
  __typename?: 'CPUEdge';
  /** A cursor for use in pagination. */
  cursor: Scalars['String'];
  /** The item at the end of the edge. */
  node: Cpu;
};

/** Identifies documents */
export type CpuManyWhereInput = {
  /** Logical AND on all given filters. */
  AND?: InputMaybe<Array<CpuWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: InputMaybe<Array<CpuWhereInput>>;
  /** Logical OR on all given filters. */
  OR?: InputMaybe<Array<CpuWhereInput>>;
  /** Contains search across all appropriate fields. */
  _search?: InputMaybe<Scalars['String']>;
  brand?: InputMaybe<Scalars['String']>;
  /** All values containing the given string. */
  brand_contains?: InputMaybe<Scalars['String']>;
  /** All values ending with the given string. */
  brand_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are contained in given list. */
  brand_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** All values that are not equal to given value. */
  brand_not?: InputMaybe<Scalars['String']>;
  /** All values not containing the given string. */
  brand_not_contains?: InputMaybe<Scalars['String']>;
  /** All values not ending with the given string */
  brand_not_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  brand_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** All values not starting with the given string. */
  brand_not_starts_with?: InputMaybe<Scalars['String']>;
  /** All values starting with the given string. */
  brand_starts_with?: InputMaybe<Scalars['String']>;
  createdAt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  createdAt_gt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  createdAt_gte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  createdAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  /** All values less than the given value. */
  createdAt_lt?: InputMaybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  createdAt_lte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  createdAt_not?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not contained in given list. */
  createdAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  createdBy?: InputMaybe<UserWhereInput>;
  discountPercent?: InputMaybe<Scalars['Int']>;
  /** All values greater than the given value. */
  discountPercent_gt?: InputMaybe<Scalars['Int']>;
  /** All values greater than or equal the given value. */
  discountPercent_gte?: InputMaybe<Scalars['Int']>;
  /** All values that are contained in given list. */
  discountPercent_in?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
  /** All values less than the given value. */
  discountPercent_lt?: InputMaybe<Scalars['Int']>;
  /** All values less than or equal the given value. */
  discountPercent_lte?: InputMaybe<Scalars['Int']>;
  /** All values that are not equal to given value. */
  discountPercent_not?: InputMaybe<Scalars['Int']>;
  /** All values that are not contained in given list. */
  discountPercent_not_in?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
  documentInStages_every?: InputMaybe<CpuWhereStageInput>;
  documentInStages_none?: InputMaybe<CpuWhereStageInput>;
  documentInStages_some?: InputMaybe<CpuWhereStageInput>;
  id?: InputMaybe<Scalars['ID']>;
  /** All values containing the given string. */
  id_contains?: InputMaybe<Scalars['ID']>;
  /** All values ending with the given string. */
  id_ends_with?: InputMaybe<Scalars['ID']>;
  /** All values that are contained in given list. */
  id_in?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  /** All values that are not equal to given value. */
  id_not?: InputMaybe<Scalars['ID']>;
  /** All values not containing the given string. */
  id_not_contains?: InputMaybe<Scalars['ID']>;
  /** All values not ending with the given string */
  id_not_ends_with?: InputMaybe<Scalars['ID']>;
  /** All values that are not contained in given list. */
  id_not_in?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  /** All values not starting with the given string. */
  id_not_starts_with?: InputMaybe<Scalars['ID']>;
  /** All values starting with the given string. */
  id_starts_with?: InputMaybe<Scalars['ID']>;
  images?: InputMaybe<AssetWhereInput>;
  manufacturer?: InputMaybe<Scalars['String']>;
  manufacturerLink?: InputMaybe<Scalars['String']>;
  /** All values containing the given string. */
  manufacturerLink_contains?: InputMaybe<Scalars['String']>;
  /** All values ending with the given string. */
  manufacturerLink_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are contained in given list. */
  manufacturerLink_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** All values that are not equal to given value. */
  manufacturerLink_not?: InputMaybe<Scalars['String']>;
  /** All values not containing the given string. */
  manufacturerLink_not_contains?: InputMaybe<Scalars['String']>;
  /** All values not ending with the given string */
  manufacturerLink_not_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  manufacturerLink_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** All values not starting with the given string. */
  manufacturerLink_not_starts_with?: InputMaybe<Scalars['String']>;
  /** All values starting with the given string. */
  manufacturerLink_starts_with?: InputMaybe<Scalars['String']>;
  /** All values containing the given string. */
  manufacturer_contains?: InputMaybe<Scalars['String']>;
  /** All values ending with the given string. */
  manufacturer_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are contained in given list. */
  manufacturer_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** All values that are not equal to given value. */
  manufacturer_not?: InputMaybe<Scalars['String']>;
  /** All values not containing the given string. */
  manufacturer_not_contains?: InputMaybe<Scalars['String']>;
  /** All values not ending with the given string */
  manufacturer_not_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  manufacturer_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** All values not starting with the given string. */
  manufacturer_not_starts_with?: InputMaybe<Scalars['String']>;
  /** All values starting with the given string. */
  manufacturer_starts_with?: InputMaybe<Scalars['String']>;
  newProduct?: InputMaybe<Scalars['Boolean']>;
  /** All values that are not equal to given value. */
  newProduct_not?: InputMaybe<Scalars['Boolean']>;
  onDiscount?: InputMaybe<Scalars['Boolean']>;
  /** All values that are not equal to given value. */
  onDiscount_not?: InputMaybe<Scalars['Boolean']>;
  price?: InputMaybe<Scalars['Int']>;
  /** All values greater than the given value. */
  price_gt?: InputMaybe<Scalars['Int']>;
  /** All values greater than or equal the given value. */
  price_gte?: InputMaybe<Scalars['Int']>;
  /** All values that are contained in given list. */
  price_in?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
  /** All values less than the given value. */
  price_lt?: InputMaybe<Scalars['Int']>;
  /** All values less than or equal the given value. */
  price_lte?: InputMaybe<Scalars['Int']>;
  /** All values that are not equal to given value. */
  price_not?: InputMaybe<Scalars['Int']>;
  /** All values that are not contained in given list. */
  price_not_in?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
  promotion?: InputMaybe<Scalars['Boolean']>;
  /** All values that are not equal to given value. */
  promotion_not?: InputMaybe<Scalars['Boolean']>;
  publishedAt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  publishedAt_gt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  publishedAt_gte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  publishedAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  /** All values less than the given value. */
  publishedAt_lt?: InputMaybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  publishedAt_lte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  publishedAt_not?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not contained in given list. */
  publishedAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  publishedBy?: InputMaybe<UserWhereInput>;
  scheduledIn_every?: InputMaybe<ScheduledOperationWhereInput>;
  scheduledIn_none?: InputMaybe<ScheduledOperationWhereInput>;
  scheduledIn_some?: InputMaybe<ScheduledOperationWhereInput>;
  slug?: InputMaybe<Scalars['String']>;
  /** All values containing the given string. */
  slug_contains?: InputMaybe<Scalars['String']>;
  /** All values ending with the given string. */
  slug_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are contained in given list. */
  slug_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** All values that are not equal to given value. */
  slug_not?: InputMaybe<Scalars['String']>;
  /** All values not containing the given string. */
  slug_not_contains?: InputMaybe<Scalars['String']>;
  /** All values not ending with the given string */
  slug_not_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  slug_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** All values not starting with the given string. */
  slug_not_starts_with?: InputMaybe<Scalars['String']>;
  /** All values starting with the given string. */
  slug_starts_with?: InputMaybe<Scalars['String']>;
  stock?: InputMaybe<Scalars['Int']>;
  /** All values greater than the given value. */
  stock_gt?: InputMaybe<Scalars['Int']>;
  /** All values greater than or equal the given value. */
  stock_gte?: InputMaybe<Scalars['Int']>;
  /** All values that are contained in given list. */
  stock_in?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
  /** All values less than the given value. */
  stock_lt?: InputMaybe<Scalars['Int']>;
  /** All values less than or equal the given value. */
  stock_lte?: InputMaybe<Scalars['Int']>;
  /** All values that are not equal to given value. */
  stock_not?: InputMaybe<Scalars['Int']>;
  /** All values that are not contained in given list. */
  stock_not_in?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
  subtitle?: InputMaybe<Scalars['String']>;
  /** All values containing the given string. */
  subtitle_contains?: InputMaybe<Scalars['String']>;
  /** All values ending with the given string. */
  subtitle_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are contained in given list. */
  subtitle_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** All values that are not equal to given value. */
  subtitle_not?: InputMaybe<Scalars['String']>;
  /** All values not containing the given string. */
  subtitle_not_contains?: InputMaybe<Scalars['String']>;
  /** All values not ending with the given string */
  subtitle_not_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  subtitle_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** All values not starting with the given string. */
  subtitle_not_starts_with?: InputMaybe<Scalars['String']>;
  /** All values starting with the given string. */
  subtitle_starts_with?: InputMaybe<Scalars['String']>;
  title?: InputMaybe<Scalars['String']>;
  /** All values containing the given string. */
  title_contains?: InputMaybe<Scalars['String']>;
  /** All values ending with the given string. */
  title_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are contained in given list. */
  title_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** All values that are not equal to given value. */
  title_not?: InputMaybe<Scalars['String']>;
  /** All values not containing the given string. */
  title_not_contains?: InputMaybe<Scalars['String']>;
  /** All values not ending with the given string */
  title_not_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  title_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** All values not starting with the given string. */
  title_not_starts_with?: InputMaybe<Scalars['String']>;
  /** All values starting with the given string. */
  title_starts_with?: InputMaybe<Scalars['String']>;
  updatedAt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  updatedAt_gt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  updatedAt_gte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  updatedAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  /** All values less than the given value. */
  updatedAt_lt?: InputMaybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  updatedAt_lte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  updatedAt_not?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not contained in given list. */
  updatedAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  updatedBy?: InputMaybe<UserWhereInput>;
  warranty?: InputMaybe<Scalars['Int']>;
  /** All values greater than the given value. */
  warranty_gt?: InputMaybe<Scalars['Int']>;
  /** All values greater than or equal the given value. */
  warranty_gte?: InputMaybe<Scalars['Int']>;
  /** All values that are contained in given list. */
  warranty_in?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
  /** All values less than the given value. */
  warranty_lt?: InputMaybe<Scalars['Int']>;
  /** All values less than or equal the given value. */
  warranty_lte?: InputMaybe<Scalars['Int']>;
  /** All values that are not equal to given value. */
  warranty_not?: InputMaybe<Scalars['Int']>;
  /** All values that are not contained in given list. */
  warranty_not_in?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
};

export enum CpuOrderByInput {
  BrandAsc = 'brand_ASC',
  BrandDesc = 'brand_DESC',
  CreatedAtAsc = 'createdAt_ASC',
  CreatedAtDesc = 'createdAt_DESC',
  DiscountPercentAsc = 'discountPercent_ASC',
  DiscountPercentDesc = 'discountPercent_DESC',
  IdAsc = 'id_ASC',
  IdDesc = 'id_DESC',
  ManufacturerLinkAsc = 'manufacturerLink_ASC',
  ManufacturerLinkDesc = 'manufacturerLink_DESC',
  ManufacturerAsc = 'manufacturer_ASC',
  ManufacturerDesc = 'manufacturer_DESC',
  NewProductAsc = 'newProduct_ASC',
  NewProductDesc = 'newProduct_DESC',
  OnDiscountAsc = 'onDiscount_ASC',
  OnDiscountDesc = 'onDiscount_DESC',
  PriceAsc = 'price_ASC',
  PriceDesc = 'price_DESC',
  PromotionAsc = 'promotion_ASC',
  PromotionDesc = 'promotion_DESC',
  PublishedAtAsc = 'publishedAt_ASC',
  PublishedAtDesc = 'publishedAt_DESC',
  SlugAsc = 'slug_ASC',
  SlugDesc = 'slug_DESC',
  StockAsc = 'stock_ASC',
  StockDesc = 'stock_DESC',
  SubtitleAsc = 'subtitle_ASC',
  SubtitleDesc = 'subtitle_DESC',
  TitleAsc = 'title_ASC',
  TitleDesc = 'title_DESC',
  UpdatedAtAsc = 'updatedAt_ASC',
  UpdatedAtDesc = 'updatedAt_DESC',
  WarrantyAsc = 'warranty_ASC',
  WarrantyDesc = 'warranty_DESC'
}

export type CpuUpdateInput = {
  brand?: InputMaybe<Scalars['String']>;
  description?: InputMaybe<Scalars['RichTextAST']>;
  discountPercent?: InputMaybe<Scalars['Int']>;
  images?: InputMaybe<AssetUpdateOneInlineInput>;
  manufacturer?: InputMaybe<Scalars['String']>;
  manufacturerLink?: InputMaybe<Scalars['String']>;
  newProduct?: InputMaybe<Scalars['Boolean']>;
  onDiscount?: InputMaybe<Scalars['Boolean']>;
  price?: InputMaybe<Scalars['Int']>;
  promotion?: InputMaybe<Scalars['Boolean']>;
  slug?: InputMaybe<Scalars['String']>;
  stock?: InputMaybe<Scalars['Int']>;
  subtitle?: InputMaybe<Scalars['String']>;
  title?: InputMaybe<Scalars['String']>;
  warranty?: InputMaybe<Scalars['Int']>;
};

export type CpuUpdateManyInlineInput = {
  /** Connect multiple existing CPU documents */
  connect?: InputMaybe<Array<CpuConnectInput>>;
  /** Create and connect multiple CPU documents */
  create?: InputMaybe<Array<CpuCreateInput>>;
  /** Delete multiple CPU documents */
  delete?: InputMaybe<Array<CpuWhereUniqueInput>>;
  /** Disconnect multiple CPU documents */
  disconnect?: InputMaybe<Array<CpuWhereUniqueInput>>;
  /** Override currently-connected documents with multiple existing CPU documents */
  set?: InputMaybe<Array<CpuWhereUniqueInput>>;
  /** Update multiple CPU documents */
  update?: InputMaybe<Array<CpuUpdateWithNestedWhereUniqueInput>>;
  /** Upsert multiple CPU documents */
  upsert?: InputMaybe<Array<CpuUpsertWithNestedWhereUniqueInput>>;
};

export type CpuUpdateManyInput = {
  brand?: InputMaybe<Scalars['String']>;
  description?: InputMaybe<Scalars['RichTextAST']>;
  discountPercent?: InputMaybe<Scalars['Int']>;
  manufacturer?: InputMaybe<Scalars['String']>;
  manufacturerLink?: InputMaybe<Scalars['String']>;
  newProduct?: InputMaybe<Scalars['Boolean']>;
  onDiscount?: InputMaybe<Scalars['Boolean']>;
  price?: InputMaybe<Scalars['Int']>;
  promotion?: InputMaybe<Scalars['Boolean']>;
  stock?: InputMaybe<Scalars['Int']>;
  subtitle?: InputMaybe<Scalars['String']>;
  warranty?: InputMaybe<Scalars['Int']>;
};

export type CpuUpdateManyWithNestedWhereInput = {
  /** Update many input */
  data: CpuUpdateManyInput;
  /** Document search */
  where: CpuWhereInput;
};

export type CpuUpdateOneInlineInput = {
  /** Connect existing CPU document */
  connect?: InputMaybe<CpuWhereUniqueInput>;
  /** Create and connect one CPU document */
  create?: InputMaybe<CpuCreateInput>;
  /** Delete currently connected CPU document */
  delete?: InputMaybe<Scalars['Boolean']>;
  /** Disconnect currently connected CPU document */
  disconnect?: InputMaybe<Scalars['Boolean']>;
  /** Update single CPU document */
  update?: InputMaybe<CpuUpdateWithNestedWhereUniqueInput>;
  /** Upsert single CPU document */
  upsert?: InputMaybe<CpuUpsertWithNestedWhereUniqueInput>;
};

export type CpuUpdateWithNestedWhereUniqueInput = {
  /** Document to update */
  data: CpuUpdateInput;
  /** Unique document search */
  where: CpuWhereUniqueInput;
};

export type CpuUpsertInput = {
  /** Create document if it didn't exist */
  create: CpuCreateInput;
  /** Update document if it exists */
  update: CpuUpdateInput;
};

export type CpuUpsertWithNestedWhereUniqueInput = {
  /** Upsert data */
  data: CpuUpsertInput;
  /** Unique document search */
  where: CpuWhereUniqueInput;
};

/** This contains a set of filters that can be used to compare values internally */
export type CpuWhereComparatorInput = {
  /** This field can be used to request to check if the entry is outdated by internal comparison */
  outdated_to?: InputMaybe<Scalars['Boolean']>;
};

/** Identifies documents */
export type CpuWhereInput = {
  /** Logical AND on all given filters. */
  AND?: InputMaybe<Array<CpuWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: InputMaybe<Array<CpuWhereInput>>;
  /** Logical OR on all given filters. */
  OR?: InputMaybe<Array<CpuWhereInput>>;
  /** Contains search across all appropriate fields. */
  _search?: InputMaybe<Scalars['String']>;
  brand?: InputMaybe<Scalars['String']>;
  /** All values containing the given string. */
  brand_contains?: InputMaybe<Scalars['String']>;
  /** All values ending with the given string. */
  brand_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are contained in given list. */
  brand_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** All values that are not equal to given value. */
  brand_not?: InputMaybe<Scalars['String']>;
  /** All values not containing the given string. */
  brand_not_contains?: InputMaybe<Scalars['String']>;
  /** All values not ending with the given string */
  brand_not_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  brand_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** All values not starting with the given string. */
  brand_not_starts_with?: InputMaybe<Scalars['String']>;
  /** All values starting with the given string. */
  brand_starts_with?: InputMaybe<Scalars['String']>;
  createdAt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  createdAt_gt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  createdAt_gte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  createdAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  /** All values less than the given value. */
  createdAt_lt?: InputMaybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  createdAt_lte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  createdAt_not?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not contained in given list. */
  createdAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  createdBy?: InputMaybe<UserWhereInput>;
  discountPercent?: InputMaybe<Scalars['Int']>;
  /** All values greater than the given value. */
  discountPercent_gt?: InputMaybe<Scalars['Int']>;
  /** All values greater than or equal the given value. */
  discountPercent_gte?: InputMaybe<Scalars['Int']>;
  /** All values that are contained in given list. */
  discountPercent_in?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
  /** All values less than the given value. */
  discountPercent_lt?: InputMaybe<Scalars['Int']>;
  /** All values less than or equal the given value. */
  discountPercent_lte?: InputMaybe<Scalars['Int']>;
  /** All values that are not equal to given value. */
  discountPercent_not?: InputMaybe<Scalars['Int']>;
  /** All values that are not contained in given list. */
  discountPercent_not_in?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
  documentInStages_every?: InputMaybe<CpuWhereStageInput>;
  documentInStages_none?: InputMaybe<CpuWhereStageInput>;
  documentInStages_some?: InputMaybe<CpuWhereStageInput>;
  id?: InputMaybe<Scalars['ID']>;
  /** All values containing the given string. */
  id_contains?: InputMaybe<Scalars['ID']>;
  /** All values ending with the given string. */
  id_ends_with?: InputMaybe<Scalars['ID']>;
  /** All values that are contained in given list. */
  id_in?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  /** All values that are not equal to given value. */
  id_not?: InputMaybe<Scalars['ID']>;
  /** All values not containing the given string. */
  id_not_contains?: InputMaybe<Scalars['ID']>;
  /** All values not ending with the given string */
  id_not_ends_with?: InputMaybe<Scalars['ID']>;
  /** All values that are not contained in given list. */
  id_not_in?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  /** All values not starting with the given string. */
  id_not_starts_with?: InputMaybe<Scalars['ID']>;
  /** All values starting with the given string. */
  id_starts_with?: InputMaybe<Scalars['ID']>;
  images?: InputMaybe<AssetWhereInput>;
  manufacturer?: InputMaybe<Scalars['String']>;
  manufacturerLink?: InputMaybe<Scalars['String']>;
  /** All values containing the given string. */
  manufacturerLink_contains?: InputMaybe<Scalars['String']>;
  /** All values ending with the given string. */
  manufacturerLink_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are contained in given list. */
  manufacturerLink_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** All values that are not equal to given value. */
  manufacturerLink_not?: InputMaybe<Scalars['String']>;
  /** All values not containing the given string. */
  manufacturerLink_not_contains?: InputMaybe<Scalars['String']>;
  /** All values not ending with the given string */
  manufacturerLink_not_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  manufacturerLink_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** All values not starting with the given string. */
  manufacturerLink_not_starts_with?: InputMaybe<Scalars['String']>;
  /** All values starting with the given string. */
  manufacturerLink_starts_with?: InputMaybe<Scalars['String']>;
  /** All values containing the given string. */
  manufacturer_contains?: InputMaybe<Scalars['String']>;
  /** All values ending with the given string. */
  manufacturer_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are contained in given list. */
  manufacturer_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** All values that are not equal to given value. */
  manufacturer_not?: InputMaybe<Scalars['String']>;
  /** All values not containing the given string. */
  manufacturer_not_contains?: InputMaybe<Scalars['String']>;
  /** All values not ending with the given string */
  manufacturer_not_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  manufacturer_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** All values not starting with the given string. */
  manufacturer_not_starts_with?: InputMaybe<Scalars['String']>;
  /** All values starting with the given string. */
  manufacturer_starts_with?: InputMaybe<Scalars['String']>;
  newProduct?: InputMaybe<Scalars['Boolean']>;
  /** All values that are not equal to given value. */
  newProduct_not?: InputMaybe<Scalars['Boolean']>;
  onDiscount?: InputMaybe<Scalars['Boolean']>;
  /** All values that are not equal to given value. */
  onDiscount_not?: InputMaybe<Scalars['Boolean']>;
  price?: InputMaybe<Scalars['Int']>;
  /** All values greater than the given value. */
  price_gt?: InputMaybe<Scalars['Int']>;
  /** All values greater than or equal the given value. */
  price_gte?: InputMaybe<Scalars['Int']>;
  /** All values that are contained in given list. */
  price_in?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
  /** All values less than the given value. */
  price_lt?: InputMaybe<Scalars['Int']>;
  /** All values less than or equal the given value. */
  price_lte?: InputMaybe<Scalars['Int']>;
  /** All values that are not equal to given value. */
  price_not?: InputMaybe<Scalars['Int']>;
  /** All values that are not contained in given list. */
  price_not_in?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
  promotion?: InputMaybe<Scalars['Boolean']>;
  /** All values that are not equal to given value. */
  promotion_not?: InputMaybe<Scalars['Boolean']>;
  publishedAt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  publishedAt_gt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  publishedAt_gte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  publishedAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  /** All values less than the given value. */
  publishedAt_lt?: InputMaybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  publishedAt_lte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  publishedAt_not?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not contained in given list. */
  publishedAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  publishedBy?: InputMaybe<UserWhereInput>;
  scheduledIn_every?: InputMaybe<ScheduledOperationWhereInput>;
  scheduledIn_none?: InputMaybe<ScheduledOperationWhereInput>;
  scheduledIn_some?: InputMaybe<ScheduledOperationWhereInput>;
  slug?: InputMaybe<Scalars['String']>;
  /** All values containing the given string. */
  slug_contains?: InputMaybe<Scalars['String']>;
  /** All values ending with the given string. */
  slug_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are contained in given list. */
  slug_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** All values that are not equal to given value. */
  slug_not?: InputMaybe<Scalars['String']>;
  /** All values not containing the given string. */
  slug_not_contains?: InputMaybe<Scalars['String']>;
  /** All values not ending with the given string */
  slug_not_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  slug_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** All values not starting with the given string. */
  slug_not_starts_with?: InputMaybe<Scalars['String']>;
  /** All values starting with the given string. */
  slug_starts_with?: InputMaybe<Scalars['String']>;
  stock?: InputMaybe<Scalars['Int']>;
  /** All values greater than the given value. */
  stock_gt?: InputMaybe<Scalars['Int']>;
  /** All values greater than or equal the given value. */
  stock_gte?: InputMaybe<Scalars['Int']>;
  /** All values that are contained in given list. */
  stock_in?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
  /** All values less than the given value. */
  stock_lt?: InputMaybe<Scalars['Int']>;
  /** All values less than or equal the given value. */
  stock_lte?: InputMaybe<Scalars['Int']>;
  /** All values that are not equal to given value. */
  stock_not?: InputMaybe<Scalars['Int']>;
  /** All values that are not contained in given list. */
  stock_not_in?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
  subtitle?: InputMaybe<Scalars['String']>;
  /** All values containing the given string. */
  subtitle_contains?: InputMaybe<Scalars['String']>;
  /** All values ending with the given string. */
  subtitle_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are contained in given list. */
  subtitle_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** All values that are not equal to given value. */
  subtitle_not?: InputMaybe<Scalars['String']>;
  /** All values not containing the given string. */
  subtitle_not_contains?: InputMaybe<Scalars['String']>;
  /** All values not ending with the given string */
  subtitle_not_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  subtitle_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** All values not starting with the given string. */
  subtitle_not_starts_with?: InputMaybe<Scalars['String']>;
  /** All values starting with the given string. */
  subtitle_starts_with?: InputMaybe<Scalars['String']>;
  title?: InputMaybe<Scalars['String']>;
  /** All values containing the given string. */
  title_contains?: InputMaybe<Scalars['String']>;
  /** All values ending with the given string. */
  title_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are contained in given list. */
  title_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** All values that are not equal to given value. */
  title_not?: InputMaybe<Scalars['String']>;
  /** All values not containing the given string. */
  title_not_contains?: InputMaybe<Scalars['String']>;
  /** All values not ending with the given string */
  title_not_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  title_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** All values not starting with the given string. */
  title_not_starts_with?: InputMaybe<Scalars['String']>;
  /** All values starting with the given string. */
  title_starts_with?: InputMaybe<Scalars['String']>;
  updatedAt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  updatedAt_gt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  updatedAt_gte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  updatedAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  /** All values less than the given value. */
  updatedAt_lt?: InputMaybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  updatedAt_lte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  updatedAt_not?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not contained in given list. */
  updatedAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  updatedBy?: InputMaybe<UserWhereInput>;
  warranty?: InputMaybe<Scalars['Int']>;
  /** All values greater than the given value. */
  warranty_gt?: InputMaybe<Scalars['Int']>;
  /** All values greater than or equal the given value. */
  warranty_gte?: InputMaybe<Scalars['Int']>;
  /** All values that are contained in given list. */
  warranty_in?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
  /** All values less than the given value. */
  warranty_lt?: InputMaybe<Scalars['Int']>;
  /** All values less than or equal the given value. */
  warranty_lte?: InputMaybe<Scalars['Int']>;
  /** All values that are not equal to given value. */
  warranty_not?: InputMaybe<Scalars['Int']>;
  /** All values that are not contained in given list. */
  warranty_not_in?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
};

/** The document in stages filter allows specifying a stage entry to cross compare the same document between different stages */
export type CpuWhereStageInput = {
  /** Logical AND on all given filters. */
  AND?: InputMaybe<Array<CpuWhereStageInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: InputMaybe<Array<CpuWhereStageInput>>;
  /** Logical OR on all given filters. */
  OR?: InputMaybe<Array<CpuWhereStageInput>>;
  /** This field contains fields which can be set as true or false to specify an internal comparison */
  compareWithParent?: InputMaybe<CpuWhereComparatorInput>;
  /** Specify the stage to compare with */
  stage?: InputMaybe<Stage>;
};

/** References CPU record uniquely */
export type CpuWhereUniqueInput = {
  id?: InputMaybe<Scalars['ID']>;
  slug?: InputMaybe<Scalars['String']>;
  title?: InputMaybe<Scalars['String']>;
};

/** Representing a color value comprising of HEX, RGBA and css color values */
export type Color = {
  __typename?: 'Color';
  css: Scalars['String'];
  hex: Scalars['Hex'];
  rgba: Rgba;
};

/** Accepts either HEX or RGBA color value. At least one of hex or rgba value should be passed. If both are passed RGBA is used. */
export type ColorInput = {
  hex?: InputMaybe<Scalars['Hex']>;
  rgba?: InputMaybe<RgbaInput>;
};

export type ConnectPositionInput = {
  /** Connect document after specified document */
  after?: InputMaybe<Scalars['ID']>;
  /** Connect document before specified document */
  before?: InputMaybe<Scalars['ID']>;
  /** Connect document at last position */
  end?: InputMaybe<Scalars['Boolean']>;
  /** Connect document at first position */
  start?: InputMaybe<Scalars['Boolean']>;
};

export enum DocumentFileTypes {
  Doc = 'doc',
  Docx = 'docx',
  Html = 'html',
  Jpg = 'jpg',
  Odp = 'odp',
  Ods = 'ods',
  Odt = 'odt',
  Pdf = 'pdf',
  Png = 'png',
  Ppt = 'ppt',
  Pptx = 'pptx',
  Svg = 'svg',
  Txt = 'txt',
  Webp = 'webp',
  Xls = 'xls',
  Xlsx = 'xlsx'
}

export type DocumentOutputInput = {
  /**
   * Transforms a document into a desired file type.
   * See this matrix for format support:
   *
   * PDF:	jpg, odp, ods, odt, png, svg, txt, and webp
   * DOC:	docx, html, jpg, odt, pdf, png, svg, txt, and webp
   * DOCX:	doc, html, jpg, odt, pdf, png, svg, txt, and webp
   * ODT:	doc, docx, html, jpg, pdf, png, svg, txt, and webp
   * XLS:	jpg, pdf, ods, png, svg, xlsx, and webp
   * XLSX:	jpg, pdf, ods, png, svg, xls, and webp
   * ODS:	jpg, pdf, png, xls, svg, xlsx, and webp
   * PPT:	jpg, odp, pdf, png, svg, pptx, and webp
   * PPTX:	jpg, odp, pdf, png, svg, ppt, and webp
   * ODP:	jpg, pdf, png, ppt, svg, pptx, and webp
   * BMP:	jpg, odp, ods, odt, pdf, png, svg, and webp
   * GIF:	jpg, odp, ods, odt, pdf, png, svg, and webp
   * JPG:	jpg, odp, ods, odt, pdf, png, svg, and webp
   * PNG:	jpg, odp, ods, odt, pdf, png, svg, and webp
   * WEBP:	jpg, odp, ods, odt, pdf, png, svg, and webp
   * TIFF:	jpg, odp, ods, odt, pdf, png, svg, and webp
   * AI:	    jpg, odp, ods, odt, pdf, png, svg, and webp
   * PSD:	jpg, odp, ods, odt, pdf, png, svg, and webp
   * SVG:	jpg, odp, ods, odt, pdf, png, and webp
   * HTML:	jpg, odt, pdf, svg, txt, and webp
   * TXT:	jpg, html, odt, pdf, svg, and webp
   */
  format?: InputMaybe<DocumentFileTypes>;
};

/** Transformations for Documents */
export type DocumentTransformationInput = {
  /** Changes the output for the file. */
  output?: InputMaybe<DocumentOutputInput>;
};

export type DocumentVersion = {
  __typename?: 'DocumentVersion';
  createdAt: Scalars['DateTime'];
  data?: Maybe<Scalars['Json']>;
  id: Scalars['ID'];
  revision: Scalars['Int'];
  stage: Stage;
};

export type Gpu = Node & {
  __typename?: 'GPU';
  brand?: Maybe<Scalars['String']>;
  /** The time the document was created */
  createdAt: Scalars['DateTime'];
  /** User that created this document */
  createdBy?: Maybe<User>;
  description?: Maybe<RichText>;
  discountPercent?: Maybe<Scalars['Int']>;
  /** Get the document in other stages */
  documentInStages: Array<Gpu>;
  /** List of GPU versions */
  history: Array<Version>;
  /** The unique identifier */
  id: Scalars['ID'];
  images?: Maybe<Asset>;
  manufacturer?: Maybe<Scalars['String']>;
  manufacturerLink?: Maybe<Scalars['String']>;
  newProduct?: Maybe<Scalars['Boolean']>;
  onDiscount?: Maybe<Scalars['Boolean']>;
  price?: Maybe<Scalars['Int']>;
  promotion?: Maybe<Scalars['Boolean']>;
  /** The time the document was published. Null on documents in draft stage. */
  publishedAt?: Maybe<Scalars['DateTime']>;
  /** User that last published this document */
  publishedBy?: Maybe<User>;
  scheduledIn: Array<ScheduledOperation>;
  slug?: Maybe<Scalars['String']>;
  /** System stage field */
  stage: Stage;
  stock?: Maybe<Scalars['Int']>;
  subtitle?: Maybe<Scalars['String']>;
  title: Scalars['String'];
  /** The time the document was updated */
  updatedAt: Scalars['DateTime'];
  /** User that last updated this document */
  updatedBy?: Maybe<User>;
  warranty?: Maybe<Scalars['Int']>;
};


export type GpuCreatedByArgs = {
  locales?: InputMaybe<Array<Locale>>;
};


export type GpuDocumentInStagesArgs = {
  includeCurrent?: Scalars['Boolean'];
  inheritLocale?: Scalars['Boolean'];
  stages?: Array<Stage>;
};


export type GpuHistoryArgs = {
  limit?: Scalars['Int'];
  skip?: Scalars['Int'];
  stageOverride?: InputMaybe<Stage>;
};


export type GpuImagesArgs = {
  locales?: InputMaybe<Array<Locale>>;
};


export type GpuPublishedByArgs = {
  locales?: InputMaybe<Array<Locale>>;
};


export type GpuScheduledInArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  locales?: InputMaybe<Array<Locale>>;
  skip?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<ScheduledOperationWhereInput>;
};


export type GpuUpdatedByArgs = {
  locales?: InputMaybe<Array<Locale>>;
};

export type GpuConnectInput = {
  /** Allow to specify document position in list of connected documents, will default to appending at end of list */
  position?: InputMaybe<ConnectPositionInput>;
  /** Document to connect */
  where: GpuWhereUniqueInput;
};

/** A connection to a list of items. */
export type GpuConnection = {
  __typename?: 'GPUConnection';
  aggregate: Aggregate;
  /** A list of edges. */
  edges: Array<GpuEdge>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
};

export type GpuCreateInput = {
  brand?: InputMaybe<Scalars['String']>;
  createdAt?: InputMaybe<Scalars['DateTime']>;
  description?: InputMaybe<Scalars['RichTextAST']>;
  discountPercent?: InputMaybe<Scalars['Int']>;
  images?: InputMaybe<AssetCreateOneInlineInput>;
  manufacturer?: InputMaybe<Scalars['String']>;
  manufacturerLink?: InputMaybe<Scalars['String']>;
  newProduct?: InputMaybe<Scalars['Boolean']>;
  onDiscount?: InputMaybe<Scalars['Boolean']>;
  price?: InputMaybe<Scalars['Int']>;
  promotion?: InputMaybe<Scalars['Boolean']>;
  slug?: InputMaybe<Scalars['String']>;
  stock?: InputMaybe<Scalars['Int']>;
  subtitle?: InputMaybe<Scalars['String']>;
  title: Scalars['String'];
  updatedAt?: InputMaybe<Scalars['DateTime']>;
  warranty?: InputMaybe<Scalars['Int']>;
};

export type GpuCreateManyInlineInput = {
  /** Connect multiple existing GPU documents */
  connect?: InputMaybe<Array<GpuWhereUniqueInput>>;
  /** Create and connect multiple existing GPU documents */
  create?: InputMaybe<Array<GpuCreateInput>>;
};

export type GpuCreateOneInlineInput = {
  /** Connect one existing GPU document */
  connect?: InputMaybe<GpuWhereUniqueInput>;
  /** Create and connect one GPU document */
  create?: InputMaybe<GpuCreateInput>;
};

/** An edge in a connection. */
export type GpuEdge = {
  __typename?: 'GPUEdge';
  /** A cursor for use in pagination. */
  cursor: Scalars['String'];
  /** The item at the end of the edge. */
  node: Gpu;
};

/** Identifies documents */
export type GpuManyWhereInput = {
  /** Logical AND on all given filters. */
  AND?: InputMaybe<Array<GpuWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: InputMaybe<Array<GpuWhereInput>>;
  /** Logical OR on all given filters. */
  OR?: InputMaybe<Array<GpuWhereInput>>;
  /** Contains search across all appropriate fields. */
  _search?: InputMaybe<Scalars['String']>;
  brand?: InputMaybe<Scalars['String']>;
  /** All values containing the given string. */
  brand_contains?: InputMaybe<Scalars['String']>;
  /** All values ending with the given string. */
  brand_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are contained in given list. */
  brand_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** All values that are not equal to given value. */
  brand_not?: InputMaybe<Scalars['String']>;
  /** All values not containing the given string. */
  brand_not_contains?: InputMaybe<Scalars['String']>;
  /** All values not ending with the given string */
  brand_not_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  brand_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** All values not starting with the given string. */
  brand_not_starts_with?: InputMaybe<Scalars['String']>;
  /** All values starting with the given string. */
  brand_starts_with?: InputMaybe<Scalars['String']>;
  createdAt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  createdAt_gt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  createdAt_gte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  createdAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  /** All values less than the given value. */
  createdAt_lt?: InputMaybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  createdAt_lte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  createdAt_not?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not contained in given list. */
  createdAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  createdBy?: InputMaybe<UserWhereInput>;
  discountPercent?: InputMaybe<Scalars['Int']>;
  /** All values greater than the given value. */
  discountPercent_gt?: InputMaybe<Scalars['Int']>;
  /** All values greater than or equal the given value. */
  discountPercent_gte?: InputMaybe<Scalars['Int']>;
  /** All values that are contained in given list. */
  discountPercent_in?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
  /** All values less than the given value. */
  discountPercent_lt?: InputMaybe<Scalars['Int']>;
  /** All values less than or equal the given value. */
  discountPercent_lte?: InputMaybe<Scalars['Int']>;
  /** All values that are not equal to given value. */
  discountPercent_not?: InputMaybe<Scalars['Int']>;
  /** All values that are not contained in given list. */
  discountPercent_not_in?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
  documentInStages_every?: InputMaybe<GpuWhereStageInput>;
  documentInStages_none?: InputMaybe<GpuWhereStageInput>;
  documentInStages_some?: InputMaybe<GpuWhereStageInput>;
  id?: InputMaybe<Scalars['ID']>;
  /** All values containing the given string. */
  id_contains?: InputMaybe<Scalars['ID']>;
  /** All values ending with the given string. */
  id_ends_with?: InputMaybe<Scalars['ID']>;
  /** All values that are contained in given list. */
  id_in?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  /** All values that are not equal to given value. */
  id_not?: InputMaybe<Scalars['ID']>;
  /** All values not containing the given string. */
  id_not_contains?: InputMaybe<Scalars['ID']>;
  /** All values not ending with the given string */
  id_not_ends_with?: InputMaybe<Scalars['ID']>;
  /** All values that are not contained in given list. */
  id_not_in?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  /** All values not starting with the given string. */
  id_not_starts_with?: InputMaybe<Scalars['ID']>;
  /** All values starting with the given string. */
  id_starts_with?: InputMaybe<Scalars['ID']>;
  images?: InputMaybe<AssetWhereInput>;
  manufacturer?: InputMaybe<Scalars['String']>;
  manufacturerLink?: InputMaybe<Scalars['String']>;
  /** All values containing the given string. */
  manufacturerLink_contains?: InputMaybe<Scalars['String']>;
  /** All values ending with the given string. */
  manufacturerLink_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are contained in given list. */
  manufacturerLink_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** All values that are not equal to given value. */
  manufacturerLink_not?: InputMaybe<Scalars['String']>;
  /** All values not containing the given string. */
  manufacturerLink_not_contains?: InputMaybe<Scalars['String']>;
  /** All values not ending with the given string */
  manufacturerLink_not_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  manufacturerLink_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** All values not starting with the given string. */
  manufacturerLink_not_starts_with?: InputMaybe<Scalars['String']>;
  /** All values starting with the given string. */
  manufacturerLink_starts_with?: InputMaybe<Scalars['String']>;
  /** All values containing the given string. */
  manufacturer_contains?: InputMaybe<Scalars['String']>;
  /** All values ending with the given string. */
  manufacturer_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are contained in given list. */
  manufacturer_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** All values that are not equal to given value. */
  manufacturer_not?: InputMaybe<Scalars['String']>;
  /** All values not containing the given string. */
  manufacturer_not_contains?: InputMaybe<Scalars['String']>;
  /** All values not ending with the given string */
  manufacturer_not_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  manufacturer_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** All values not starting with the given string. */
  manufacturer_not_starts_with?: InputMaybe<Scalars['String']>;
  /** All values starting with the given string. */
  manufacturer_starts_with?: InputMaybe<Scalars['String']>;
  newProduct?: InputMaybe<Scalars['Boolean']>;
  /** All values that are not equal to given value. */
  newProduct_not?: InputMaybe<Scalars['Boolean']>;
  onDiscount?: InputMaybe<Scalars['Boolean']>;
  /** All values that are not equal to given value. */
  onDiscount_not?: InputMaybe<Scalars['Boolean']>;
  price?: InputMaybe<Scalars['Int']>;
  /** All values greater than the given value. */
  price_gt?: InputMaybe<Scalars['Int']>;
  /** All values greater than or equal the given value. */
  price_gte?: InputMaybe<Scalars['Int']>;
  /** All values that are contained in given list. */
  price_in?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
  /** All values less than the given value. */
  price_lt?: InputMaybe<Scalars['Int']>;
  /** All values less than or equal the given value. */
  price_lte?: InputMaybe<Scalars['Int']>;
  /** All values that are not equal to given value. */
  price_not?: InputMaybe<Scalars['Int']>;
  /** All values that are not contained in given list. */
  price_not_in?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
  promotion?: InputMaybe<Scalars['Boolean']>;
  /** All values that are not equal to given value. */
  promotion_not?: InputMaybe<Scalars['Boolean']>;
  publishedAt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  publishedAt_gt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  publishedAt_gte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  publishedAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  /** All values less than the given value. */
  publishedAt_lt?: InputMaybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  publishedAt_lte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  publishedAt_not?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not contained in given list. */
  publishedAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  publishedBy?: InputMaybe<UserWhereInput>;
  scheduledIn_every?: InputMaybe<ScheduledOperationWhereInput>;
  scheduledIn_none?: InputMaybe<ScheduledOperationWhereInput>;
  scheduledIn_some?: InputMaybe<ScheduledOperationWhereInput>;
  slug?: InputMaybe<Scalars['String']>;
  /** All values containing the given string. */
  slug_contains?: InputMaybe<Scalars['String']>;
  /** All values ending with the given string. */
  slug_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are contained in given list. */
  slug_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** All values that are not equal to given value. */
  slug_not?: InputMaybe<Scalars['String']>;
  /** All values not containing the given string. */
  slug_not_contains?: InputMaybe<Scalars['String']>;
  /** All values not ending with the given string */
  slug_not_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  slug_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** All values not starting with the given string. */
  slug_not_starts_with?: InputMaybe<Scalars['String']>;
  /** All values starting with the given string. */
  slug_starts_with?: InputMaybe<Scalars['String']>;
  stock?: InputMaybe<Scalars['Int']>;
  /** All values greater than the given value. */
  stock_gt?: InputMaybe<Scalars['Int']>;
  /** All values greater than or equal the given value. */
  stock_gte?: InputMaybe<Scalars['Int']>;
  /** All values that are contained in given list. */
  stock_in?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
  /** All values less than the given value. */
  stock_lt?: InputMaybe<Scalars['Int']>;
  /** All values less than or equal the given value. */
  stock_lte?: InputMaybe<Scalars['Int']>;
  /** All values that are not equal to given value. */
  stock_not?: InputMaybe<Scalars['Int']>;
  /** All values that are not contained in given list. */
  stock_not_in?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
  subtitle?: InputMaybe<Scalars['String']>;
  /** All values containing the given string. */
  subtitle_contains?: InputMaybe<Scalars['String']>;
  /** All values ending with the given string. */
  subtitle_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are contained in given list. */
  subtitle_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** All values that are not equal to given value. */
  subtitle_not?: InputMaybe<Scalars['String']>;
  /** All values not containing the given string. */
  subtitle_not_contains?: InputMaybe<Scalars['String']>;
  /** All values not ending with the given string */
  subtitle_not_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  subtitle_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** All values not starting with the given string. */
  subtitle_not_starts_with?: InputMaybe<Scalars['String']>;
  /** All values starting with the given string. */
  subtitle_starts_with?: InputMaybe<Scalars['String']>;
  title?: InputMaybe<Scalars['String']>;
  /** All values containing the given string. */
  title_contains?: InputMaybe<Scalars['String']>;
  /** All values ending with the given string. */
  title_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are contained in given list. */
  title_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** All values that are not equal to given value. */
  title_not?: InputMaybe<Scalars['String']>;
  /** All values not containing the given string. */
  title_not_contains?: InputMaybe<Scalars['String']>;
  /** All values not ending with the given string */
  title_not_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  title_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** All values not starting with the given string. */
  title_not_starts_with?: InputMaybe<Scalars['String']>;
  /** All values starting with the given string. */
  title_starts_with?: InputMaybe<Scalars['String']>;
  updatedAt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  updatedAt_gt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  updatedAt_gte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  updatedAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  /** All values less than the given value. */
  updatedAt_lt?: InputMaybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  updatedAt_lte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  updatedAt_not?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not contained in given list. */
  updatedAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  updatedBy?: InputMaybe<UserWhereInput>;
  warranty?: InputMaybe<Scalars['Int']>;
  /** All values greater than the given value. */
  warranty_gt?: InputMaybe<Scalars['Int']>;
  /** All values greater than or equal the given value. */
  warranty_gte?: InputMaybe<Scalars['Int']>;
  /** All values that are contained in given list. */
  warranty_in?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
  /** All values less than the given value. */
  warranty_lt?: InputMaybe<Scalars['Int']>;
  /** All values less than or equal the given value. */
  warranty_lte?: InputMaybe<Scalars['Int']>;
  /** All values that are not equal to given value. */
  warranty_not?: InputMaybe<Scalars['Int']>;
  /** All values that are not contained in given list. */
  warranty_not_in?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
};

export enum GpuOrderByInput {
  BrandAsc = 'brand_ASC',
  BrandDesc = 'brand_DESC',
  CreatedAtAsc = 'createdAt_ASC',
  CreatedAtDesc = 'createdAt_DESC',
  DiscountPercentAsc = 'discountPercent_ASC',
  DiscountPercentDesc = 'discountPercent_DESC',
  IdAsc = 'id_ASC',
  IdDesc = 'id_DESC',
  ManufacturerLinkAsc = 'manufacturerLink_ASC',
  ManufacturerLinkDesc = 'manufacturerLink_DESC',
  ManufacturerAsc = 'manufacturer_ASC',
  ManufacturerDesc = 'manufacturer_DESC',
  NewProductAsc = 'newProduct_ASC',
  NewProductDesc = 'newProduct_DESC',
  OnDiscountAsc = 'onDiscount_ASC',
  OnDiscountDesc = 'onDiscount_DESC',
  PriceAsc = 'price_ASC',
  PriceDesc = 'price_DESC',
  PromotionAsc = 'promotion_ASC',
  PromotionDesc = 'promotion_DESC',
  PublishedAtAsc = 'publishedAt_ASC',
  PublishedAtDesc = 'publishedAt_DESC',
  SlugAsc = 'slug_ASC',
  SlugDesc = 'slug_DESC',
  StockAsc = 'stock_ASC',
  StockDesc = 'stock_DESC',
  SubtitleAsc = 'subtitle_ASC',
  SubtitleDesc = 'subtitle_DESC',
  TitleAsc = 'title_ASC',
  TitleDesc = 'title_DESC',
  UpdatedAtAsc = 'updatedAt_ASC',
  UpdatedAtDesc = 'updatedAt_DESC',
  WarrantyAsc = 'warranty_ASC',
  WarrantyDesc = 'warranty_DESC'
}

export type GpuUpdateInput = {
  brand?: InputMaybe<Scalars['String']>;
  description?: InputMaybe<Scalars['RichTextAST']>;
  discountPercent?: InputMaybe<Scalars['Int']>;
  images?: InputMaybe<AssetUpdateOneInlineInput>;
  manufacturer?: InputMaybe<Scalars['String']>;
  manufacturerLink?: InputMaybe<Scalars['String']>;
  newProduct?: InputMaybe<Scalars['Boolean']>;
  onDiscount?: InputMaybe<Scalars['Boolean']>;
  price?: InputMaybe<Scalars['Int']>;
  promotion?: InputMaybe<Scalars['Boolean']>;
  slug?: InputMaybe<Scalars['String']>;
  stock?: InputMaybe<Scalars['Int']>;
  subtitle?: InputMaybe<Scalars['String']>;
  title?: InputMaybe<Scalars['String']>;
  warranty?: InputMaybe<Scalars['Int']>;
};

export type GpuUpdateManyInlineInput = {
  /** Connect multiple existing GPU documents */
  connect?: InputMaybe<Array<GpuConnectInput>>;
  /** Create and connect multiple GPU documents */
  create?: InputMaybe<Array<GpuCreateInput>>;
  /** Delete multiple GPU documents */
  delete?: InputMaybe<Array<GpuWhereUniqueInput>>;
  /** Disconnect multiple GPU documents */
  disconnect?: InputMaybe<Array<GpuWhereUniqueInput>>;
  /** Override currently-connected documents with multiple existing GPU documents */
  set?: InputMaybe<Array<GpuWhereUniqueInput>>;
  /** Update multiple GPU documents */
  update?: InputMaybe<Array<GpuUpdateWithNestedWhereUniqueInput>>;
  /** Upsert multiple GPU documents */
  upsert?: InputMaybe<Array<GpuUpsertWithNestedWhereUniqueInput>>;
};

export type GpuUpdateManyInput = {
  brand?: InputMaybe<Scalars['String']>;
  description?: InputMaybe<Scalars['RichTextAST']>;
  discountPercent?: InputMaybe<Scalars['Int']>;
  manufacturer?: InputMaybe<Scalars['String']>;
  manufacturerLink?: InputMaybe<Scalars['String']>;
  newProduct?: InputMaybe<Scalars['Boolean']>;
  onDiscount?: InputMaybe<Scalars['Boolean']>;
  price?: InputMaybe<Scalars['Int']>;
  promotion?: InputMaybe<Scalars['Boolean']>;
  stock?: InputMaybe<Scalars['Int']>;
  subtitle?: InputMaybe<Scalars['String']>;
  warranty?: InputMaybe<Scalars['Int']>;
};

export type GpuUpdateManyWithNestedWhereInput = {
  /** Update many input */
  data: GpuUpdateManyInput;
  /** Document search */
  where: GpuWhereInput;
};

export type GpuUpdateOneInlineInput = {
  /** Connect existing GPU document */
  connect?: InputMaybe<GpuWhereUniqueInput>;
  /** Create and connect one GPU document */
  create?: InputMaybe<GpuCreateInput>;
  /** Delete currently connected GPU document */
  delete?: InputMaybe<Scalars['Boolean']>;
  /** Disconnect currently connected GPU document */
  disconnect?: InputMaybe<Scalars['Boolean']>;
  /** Update single GPU document */
  update?: InputMaybe<GpuUpdateWithNestedWhereUniqueInput>;
  /** Upsert single GPU document */
  upsert?: InputMaybe<GpuUpsertWithNestedWhereUniqueInput>;
};

export type GpuUpdateWithNestedWhereUniqueInput = {
  /** Document to update */
  data: GpuUpdateInput;
  /** Unique document search */
  where: GpuWhereUniqueInput;
};

export type GpuUpsertInput = {
  /** Create document if it didn't exist */
  create: GpuCreateInput;
  /** Update document if it exists */
  update: GpuUpdateInput;
};

export type GpuUpsertWithNestedWhereUniqueInput = {
  /** Upsert data */
  data: GpuUpsertInput;
  /** Unique document search */
  where: GpuWhereUniqueInput;
};

/** This contains a set of filters that can be used to compare values internally */
export type GpuWhereComparatorInput = {
  /** This field can be used to request to check if the entry is outdated by internal comparison */
  outdated_to?: InputMaybe<Scalars['Boolean']>;
};

/** Identifies documents */
export type GpuWhereInput = {
  /** Logical AND on all given filters. */
  AND?: InputMaybe<Array<GpuWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: InputMaybe<Array<GpuWhereInput>>;
  /** Logical OR on all given filters. */
  OR?: InputMaybe<Array<GpuWhereInput>>;
  /** Contains search across all appropriate fields. */
  _search?: InputMaybe<Scalars['String']>;
  brand?: InputMaybe<Scalars['String']>;
  /** All values containing the given string. */
  brand_contains?: InputMaybe<Scalars['String']>;
  /** All values ending with the given string. */
  brand_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are contained in given list. */
  brand_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** All values that are not equal to given value. */
  brand_not?: InputMaybe<Scalars['String']>;
  /** All values not containing the given string. */
  brand_not_contains?: InputMaybe<Scalars['String']>;
  /** All values not ending with the given string */
  brand_not_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  brand_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** All values not starting with the given string. */
  brand_not_starts_with?: InputMaybe<Scalars['String']>;
  /** All values starting with the given string. */
  brand_starts_with?: InputMaybe<Scalars['String']>;
  createdAt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  createdAt_gt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  createdAt_gte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  createdAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  /** All values less than the given value. */
  createdAt_lt?: InputMaybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  createdAt_lte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  createdAt_not?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not contained in given list. */
  createdAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  createdBy?: InputMaybe<UserWhereInput>;
  discountPercent?: InputMaybe<Scalars['Int']>;
  /** All values greater than the given value. */
  discountPercent_gt?: InputMaybe<Scalars['Int']>;
  /** All values greater than or equal the given value. */
  discountPercent_gte?: InputMaybe<Scalars['Int']>;
  /** All values that are contained in given list. */
  discountPercent_in?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
  /** All values less than the given value. */
  discountPercent_lt?: InputMaybe<Scalars['Int']>;
  /** All values less than or equal the given value. */
  discountPercent_lte?: InputMaybe<Scalars['Int']>;
  /** All values that are not equal to given value. */
  discountPercent_not?: InputMaybe<Scalars['Int']>;
  /** All values that are not contained in given list. */
  discountPercent_not_in?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
  documentInStages_every?: InputMaybe<GpuWhereStageInput>;
  documentInStages_none?: InputMaybe<GpuWhereStageInput>;
  documentInStages_some?: InputMaybe<GpuWhereStageInput>;
  id?: InputMaybe<Scalars['ID']>;
  /** All values containing the given string. */
  id_contains?: InputMaybe<Scalars['ID']>;
  /** All values ending with the given string. */
  id_ends_with?: InputMaybe<Scalars['ID']>;
  /** All values that are contained in given list. */
  id_in?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  /** All values that are not equal to given value. */
  id_not?: InputMaybe<Scalars['ID']>;
  /** All values not containing the given string. */
  id_not_contains?: InputMaybe<Scalars['ID']>;
  /** All values not ending with the given string */
  id_not_ends_with?: InputMaybe<Scalars['ID']>;
  /** All values that are not contained in given list. */
  id_not_in?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  /** All values not starting with the given string. */
  id_not_starts_with?: InputMaybe<Scalars['ID']>;
  /** All values starting with the given string. */
  id_starts_with?: InputMaybe<Scalars['ID']>;
  images?: InputMaybe<AssetWhereInput>;
  manufacturer?: InputMaybe<Scalars['String']>;
  manufacturerLink?: InputMaybe<Scalars['String']>;
  /** All values containing the given string. */
  manufacturerLink_contains?: InputMaybe<Scalars['String']>;
  /** All values ending with the given string. */
  manufacturerLink_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are contained in given list. */
  manufacturerLink_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** All values that are not equal to given value. */
  manufacturerLink_not?: InputMaybe<Scalars['String']>;
  /** All values not containing the given string. */
  manufacturerLink_not_contains?: InputMaybe<Scalars['String']>;
  /** All values not ending with the given string */
  manufacturerLink_not_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  manufacturerLink_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** All values not starting with the given string. */
  manufacturerLink_not_starts_with?: InputMaybe<Scalars['String']>;
  /** All values starting with the given string. */
  manufacturerLink_starts_with?: InputMaybe<Scalars['String']>;
  /** All values containing the given string. */
  manufacturer_contains?: InputMaybe<Scalars['String']>;
  /** All values ending with the given string. */
  manufacturer_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are contained in given list. */
  manufacturer_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** All values that are not equal to given value. */
  manufacturer_not?: InputMaybe<Scalars['String']>;
  /** All values not containing the given string. */
  manufacturer_not_contains?: InputMaybe<Scalars['String']>;
  /** All values not ending with the given string */
  manufacturer_not_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  manufacturer_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** All values not starting with the given string. */
  manufacturer_not_starts_with?: InputMaybe<Scalars['String']>;
  /** All values starting with the given string. */
  manufacturer_starts_with?: InputMaybe<Scalars['String']>;
  newProduct?: InputMaybe<Scalars['Boolean']>;
  /** All values that are not equal to given value. */
  newProduct_not?: InputMaybe<Scalars['Boolean']>;
  onDiscount?: InputMaybe<Scalars['Boolean']>;
  /** All values that are not equal to given value. */
  onDiscount_not?: InputMaybe<Scalars['Boolean']>;
  price?: InputMaybe<Scalars['Int']>;
  /** All values greater than the given value. */
  price_gt?: InputMaybe<Scalars['Int']>;
  /** All values greater than or equal the given value. */
  price_gte?: InputMaybe<Scalars['Int']>;
  /** All values that are contained in given list. */
  price_in?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
  /** All values less than the given value. */
  price_lt?: InputMaybe<Scalars['Int']>;
  /** All values less than or equal the given value. */
  price_lte?: InputMaybe<Scalars['Int']>;
  /** All values that are not equal to given value. */
  price_not?: InputMaybe<Scalars['Int']>;
  /** All values that are not contained in given list. */
  price_not_in?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
  promotion?: InputMaybe<Scalars['Boolean']>;
  /** All values that are not equal to given value. */
  promotion_not?: InputMaybe<Scalars['Boolean']>;
  publishedAt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  publishedAt_gt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  publishedAt_gte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  publishedAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  /** All values less than the given value. */
  publishedAt_lt?: InputMaybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  publishedAt_lte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  publishedAt_not?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not contained in given list. */
  publishedAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  publishedBy?: InputMaybe<UserWhereInput>;
  scheduledIn_every?: InputMaybe<ScheduledOperationWhereInput>;
  scheduledIn_none?: InputMaybe<ScheduledOperationWhereInput>;
  scheduledIn_some?: InputMaybe<ScheduledOperationWhereInput>;
  slug?: InputMaybe<Scalars['String']>;
  /** All values containing the given string. */
  slug_contains?: InputMaybe<Scalars['String']>;
  /** All values ending with the given string. */
  slug_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are contained in given list. */
  slug_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** All values that are not equal to given value. */
  slug_not?: InputMaybe<Scalars['String']>;
  /** All values not containing the given string. */
  slug_not_contains?: InputMaybe<Scalars['String']>;
  /** All values not ending with the given string */
  slug_not_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  slug_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** All values not starting with the given string. */
  slug_not_starts_with?: InputMaybe<Scalars['String']>;
  /** All values starting with the given string. */
  slug_starts_with?: InputMaybe<Scalars['String']>;
  stock?: InputMaybe<Scalars['Int']>;
  /** All values greater than the given value. */
  stock_gt?: InputMaybe<Scalars['Int']>;
  /** All values greater than or equal the given value. */
  stock_gte?: InputMaybe<Scalars['Int']>;
  /** All values that are contained in given list. */
  stock_in?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
  /** All values less than the given value. */
  stock_lt?: InputMaybe<Scalars['Int']>;
  /** All values less than or equal the given value. */
  stock_lte?: InputMaybe<Scalars['Int']>;
  /** All values that are not equal to given value. */
  stock_not?: InputMaybe<Scalars['Int']>;
  /** All values that are not contained in given list. */
  stock_not_in?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
  subtitle?: InputMaybe<Scalars['String']>;
  /** All values containing the given string. */
  subtitle_contains?: InputMaybe<Scalars['String']>;
  /** All values ending with the given string. */
  subtitle_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are contained in given list. */
  subtitle_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** All values that are not equal to given value. */
  subtitle_not?: InputMaybe<Scalars['String']>;
  /** All values not containing the given string. */
  subtitle_not_contains?: InputMaybe<Scalars['String']>;
  /** All values not ending with the given string */
  subtitle_not_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  subtitle_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** All values not starting with the given string. */
  subtitle_not_starts_with?: InputMaybe<Scalars['String']>;
  /** All values starting with the given string. */
  subtitle_starts_with?: InputMaybe<Scalars['String']>;
  title?: InputMaybe<Scalars['String']>;
  /** All values containing the given string. */
  title_contains?: InputMaybe<Scalars['String']>;
  /** All values ending with the given string. */
  title_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are contained in given list. */
  title_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** All values that are not equal to given value. */
  title_not?: InputMaybe<Scalars['String']>;
  /** All values not containing the given string. */
  title_not_contains?: InputMaybe<Scalars['String']>;
  /** All values not ending with the given string */
  title_not_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  title_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** All values not starting with the given string. */
  title_not_starts_with?: InputMaybe<Scalars['String']>;
  /** All values starting with the given string. */
  title_starts_with?: InputMaybe<Scalars['String']>;
  updatedAt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  updatedAt_gt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  updatedAt_gte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  updatedAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  /** All values less than the given value. */
  updatedAt_lt?: InputMaybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  updatedAt_lte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  updatedAt_not?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not contained in given list. */
  updatedAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  updatedBy?: InputMaybe<UserWhereInput>;
  warranty?: InputMaybe<Scalars['Int']>;
  /** All values greater than the given value. */
  warranty_gt?: InputMaybe<Scalars['Int']>;
  /** All values greater than or equal the given value. */
  warranty_gte?: InputMaybe<Scalars['Int']>;
  /** All values that are contained in given list. */
  warranty_in?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
  /** All values less than the given value. */
  warranty_lt?: InputMaybe<Scalars['Int']>;
  /** All values less than or equal the given value. */
  warranty_lte?: InputMaybe<Scalars['Int']>;
  /** All values that are not equal to given value. */
  warranty_not?: InputMaybe<Scalars['Int']>;
  /** All values that are not contained in given list. */
  warranty_not_in?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
};

/** The document in stages filter allows specifying a stage entry to cross compare the same document between different stages */
export type GpuWhereStageInput = {
  /** Logical AND on all given filters. */
  AND?: InputMaybe<Array<GpuWhereStageInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: InputMaybe<Array<GpuWhereStageInput>>;
  /** Logical OR on all given filters. */
  OR?: InputMaybe<Array<GpuWhereStageInput>>;
  /** This field contains fields which can be set as true or false to specify an internal comparison */
  compareWithParent?: InputMaybe<GpuWhereComparatorInput>;
  /** Specify the stage to compare with */
  stage?: InputMaybe<Stage>;
};

/** References GPU record uniquely */
export type GpuWhereUniqueInput = {
  id?: InputMaybe<Scalars['ID']>;
  slug?: InputMaybe<Scalars['String']>;
  title?: InputMaybe<Scalars['String']>;
};

export enum ImageFit {
  /** Resizes the image to fit within the specified parameters without distorting, cropping, or changing the aspect ratio. */
  Clip = 'clip',
  /** Resizes the image to fit the specified parameters exactly by removing any parts of the image that don't fit within the boundaries. */
  Crop = 'crop',
  /** Resizes the image to fit within the parameters, but as opposed to 'fit:clip' will not scale the image if the image is smaller than the output size. */
  Max = 'max',
  /** Resizes the image to fit the specified parameters exactly by scaling the image to the desired size. The aspect ratio of the image is not respected and the image can be distorted using this method. */
  Scale = 'scale'
}

export type ImageResizeInput = {
  /** The default value for the fit parameter is fit:clip. */
  fit?: InputMaybe<ImageFit>;
  /** The height in pixels to resize the image to. The value must be an integer from 1 to 10000. */
  height?: InputMaybe<Scalars['Int']>;
  /** The width in pixels to resize the image to. The value must be an integer from 1 to 10000. */
  width?: InputMaybe<Scalars['Int']>;
};

/** Transformations for Images */
export type ImageTransformationInput = {
  /** Resizes the image */
  resize?: InputMaybe<ImageResizeInput>;
};

export type Laptop = Node & {
  __typename?: 'Laptop';
  brand?: Maybe<Scalars['String']>;
  /** The time the document was created */
  createdAt: Scalars['DateTime'];
  /** User that created this document */
  createdBy?: Maybe<User>;
  description?: Maybe<RichText>;
  discountPercent?: Maybe<Scalars['Int']>;
  /** Get the document in other stages */
  documentInStages: Array<Laptop>;
  /** List of Laptop versions */
  history: Array<Version>;
  /** The unique identifier */
  id: Scalars['ID'];
  images?: Maybe<Asset>;
  manufacturer?: Maybe<Scalars['String']>;
  manufacturerLink?: Maybe<Scalars['String']>;
  newProduct?: Maybe<Scalars['Boolean']>;
  onDiscount?: Maybe<Scalars['Boolean']>;
  price?: Maybe<Scalars['Int']>;
  promotion?: Maybe<Scalars['Boolean']>;
  /** The time the document was published. Null on documents in draft stage. */
  publishedAt?: Maybe<Scalars['DateTime']>;
  /** User that last published this document */
  publishedBy?: Maybe<User>;
  scheduledIn: Array<ScheduledOperation>;
  slug?: Maybe<Scalars['String']>;
  /** System stage field */
  stage: Stage;
  stock?: Maybe<Scalars['Int']>;
  subtitle?: Maybe<Scalars['String']>;
  title: Scalars['String'];
  /** The time the document was updated */
  updatedAt: Scalars['DateTime'];
  /** User that last updated this document */
  updatedBy?: Maybe<User>;
  warranty?: Maybe<Scalars['Int']>;
};


export type LaptopCreatedByArgs = {
  locales?: InputMaybe<Array<Locale>>;
};


export type LaptopDocumentInStagesArgs = {
  includeCurrent?: Scalars['Boolean'];
  inheritLocale?: Scalars['Boolean'];
  stages?: Array<Stage>;
};


export type LaptopHistoryArgs = {
  limit?: Scalars['Int'];
  skip?: Scalars['Int'];
  stageOverride?: InputMaybe<Stage>;
};


export type LaptopImagesArgs = {
  locales?: InputMaybe<Array<Locale>>;
};


export type LaptopPublishedByArgs = {
  locales?: InputMaybe<Array<Locale>>;
};


export type LaptopScheduledInArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  locales?: InputMaybe<Array<Locale>>;
  skip?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<ScheduledOperationWhereInput>;
};


export type LaptopUpdatedByArgs = {
  locales?: InputMaybe<Array<Locale>>;
};

export type LaptopConnectInput = {
  /** Allow to specify document position in list of connected documents, will default to appending at end of list */
  position?: InputMaybe<ConnectPositionInput>;
  /** Document to connect */
  where: LaptopWhereUniqueInput;
};

/** A connection to a list of items. */
export type LaptopConnection = {
  __typename?: 'LaptopConnection';
  aggregate: Aggregate;
  /** A list of edges. */
  edges: Array<LaptopEdge>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
};

export type LaptopCreateInput = {
  brand?: InputMaybe<Scalars['String']>;
  createdAt?: InputMaybe<Scalars['DateTime']>;
  description?: InputMaybe<Scalars['RichTextAST']>;
  discountPercent?: InputMaybe<Scalars['Int']>;
  images?: InputMaybe<AssetCreateOneInlineInput>;
  manufacturer?: InputMaybe<Scalars['String']>;
  manufacturerLink?: InputMaybe<Scalars['String']>;
  newProduct?: InputMaybe<Scalars['Boolean']>;
  onDiscount?: InputMaybe<Scalars['Boolean']>;
  price?: InputMaybe<Scalars['Int']>;
  promotion?: InputMaybe<Scalars['Boolean']>;
  slug?: InputMaybe<Scalars['String']>;
  stock?: InputMaybe<Scalars['Int']>;
  subtitle?: InputMaybe<Scalars['String']>;
  title: Scalars['String'];
  updatedAt?: InputMaybe<Scalars['DateTime']>;
  warranty?: InputMaybe<Scalars['Int']>;
};

export type LaptopCreateManyInlineInput = {
  /** Connect multiple existing Laptop documents */
  connect?: InputMaybe<Array<LaptopWhereUniqueInput>>;
  /** Create and connect multiple existing Laptop documents */
  create?: InputMaybe<Array<LaptopCreateInput>>;
};

export type LaptopCreateOneInlineInput = {
  /** Connect one existing Laptop document */
  connect?: InputMaybe<LaptopWhereUniqueInput>;
  /** Create and connect one Laptop document */
  create?: InputMaybe<LaptopCreateInput>;
};

/** An edge in a connection. */
export type LaptopEdge = {
  __typename?: 'LaptopEdge';
  /** A cursor for use in pagination. */
  cursor: Scalars['String'];
  /** The item at the end of the edge. */
  node: Laptop;
};

/** Identifies documents */
export type LaptopManyWhereInput = {
  /** Logical AND on all given filters. */
  AND?: InputMaybe<Array<LaptopWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: InputMaybe<Array<LaptopWhereInput>>;
  /** Logical OR on all given filters. */
  OR?: InputMaybe<Array<LaptopWhereInput>>;
  /** Contains search across all appropriate fields. */
  _search?: InputMaybe<Scalars['String']>;
  brand?: InputMaybe<Scalars['String']>;
  /** All values containing the given string. */
  brand_contains?: InputMaybe<Scalars['String']>;
  /** All values ending with the given string. */
  brand_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are contained in given list. */
  brand_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** All values that are not equal to given value. */
  brand_not?: InputMaybe<Scalars['String']>;
  /** All values not containing the given string. */
  brand_not_contains?: InputMaybe<Scalars['String']>;
  /** All values not ending with the given string */
  brand_not_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  brand_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** All values not starting with the given string. */
  brand_not_starts_with?: InputMaybe<Scalars['String']>;
  /** All values starting with the given string. */
  brand_starts_with?: InputMaybe<Scalars['String']>;
  createdAt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  createdAt_gt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  createdAt_gte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  createdAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  /** All values less than the given value. */
  createdAt_lt?: InputMaybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  createdAt_lte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  createdAt_not?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not contained in given list. */
  createdAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  createdBy?: InputMaybe<UserWhereInput>;
  discountPercent?: InputMaybe<Scalars['Int']>;
  /** All values greater than the given value. */
  discountPercent_gt?: InputMaybe<Scalars['Int']>;
  /** All values greater than or equal the given value. */
  discountPercent_gte?: InputMaybe<Scalars['Int']>;
  /** All values that are contained in given list. */
  discountPercent_in?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
  /** All values less than the given value. */
  discountPercent_lt?: InputMaybe<Scalars['Int']>;
  /** All values less than or equal the given value. */
  discountPercent_lte?: InputMaybe<Scalars['Int']>;
  /** All values that are not equal to given value. */
  discountPercent_not?: InputMaybe<Scalars['Int']>;
  /** All values that are not contained in given list. */
  discountPercent_not_in?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
  documentInStages_every?: InputMaybe<LaptopWhereStageInput>;
  documentInStages_none?: InputMaybe<LaptopWhereStageInput>;
  documentInStages_some?: InputMaybe<LaptopWhereStageInput>;
  id?: InputMaybe<Scalars['ID']>;
  /** All values containing the given string. */
  id_contains?: InputMaybe<Scalars['ID']>;
  /** All values ending with the given string. */
  id_ends_with?: InputMaybe<Scalars['ID']>;
  /** All values that are contained in given list. */
  id_in?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  /** All values that are not equal to given value. */
  id_not?: InputMaybe<Scalars['ID']>;
  /** All values not containing the given string. */
  id_not_contains?: InputMaybe<Scalars['ID']>;
  /** All values not ending with the given string */
  id_not_ends_with?: InputMaybe<Scalars['ID']>;
  /** All values that are not contained in given list. */
  id_not_in?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  /** All values not starting with the given string. */
  id_not_starts_with?: InputMaybe<Scalars['ID']>;
  /** All values starting with the given string. */
  id_starts_with?: InputMaybe<Scalars['ID']>;
  images?: InputMaybe<AssetWhereInput>;
  manufacturer?: InputMaybe<Scalars['String']>;
  manufacturerLink?: InputMaybe<Scalars['String']>;
  /** All values containing the given string. */
  manufacturerLink_contains?: InputMaybe<Scalars['String']>;
  /** All values ending with the given string. */
  manufacturerLink_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are contained in given list. */
  manufacturerLink_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** All values that are not equal to given value. */
  manufacturerLink_not?: InputMaybe<Scalars['String']>;
  /** All values not containing the given string. */
  manufacturerLink_not_contains?: InputMaybe<Scalars['String']>;
  /** All values not ending with the given string */
  manufacturerLink_not_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  manufacturerLink_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** All values not starting with the given string. */
  manufacturerLink_not_starts_with?: InputMaybe<Scalars['String']>;
  /** All values starting with the given string. */
  manufacturerLink_starts_with?: InputMaybe<Scalars['String']>;
  /** All values containing the given string. */
  manufacturer_contains?: InputMaybe<Scalars['String']>;
  /** All values ending with the given string. */
  manufacturer_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are contained in given list. */
  manufacturer_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** All values that are not equal to given value. */
  manufacturer_not?: InputMaybe<Scalars['String']>;
  /** All values not containing the given string. */
  manufacturer_not_contains?: InputMaybe<Scalars['String']>;
  /** All values not ending with the given string */
  manufacturer_not_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  manufacturer_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** All values not starting with the given string. */
  manufacturer_not_starts_with?: InputMaybe<Scalars['String']>;
  /** All values starting with the given string. */
  manufacturer_starts_with?: InputMaybe<Scalars['String']>;
  newProduct?: InputMaybe<Scalars['Boolean']>;
  /** All values that are not equal to given value. */
  newProduct_not?: InputMaybe<Scalars['Boolean']>;
  onDiscount?: InputMaybe<Scalars['Boolean']>;
  /** All values that are not equal to given value. */
  onDiscount_not?: InputMaybe<Scalars['Boolean']>;
  price?: InputMaybe<Scalars['Int']>;
  /** All values greater than the given value. */
  price_gt?: InputMaybe<Scalars['Int']>;
  /** All values greater than or equal the given value. */
  price_gte?: InputMaybe<Scalars['Int']>;
  /** All values that are contained in given list. */
  price_in?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
  /** All values less than the given value. */
  price_lt?: InputMaybe<Scalars['Int']>;
  /** All values less than or equal the given value. */
  price_lte?: InputMaybe<Scalars['Int']>;
  /** All values that are not equal to given value. */
  price_not?: InputMaybe<Scalars['Int']>;
  /** All values that are not contained in given list. */
  price_not_in?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
  promotion?: InputMaybe<Scalars['Boolean']>;
  /** All values that are not equal to given value. */
  promotion_not?: InputMaybe<Scalars['Boolean']>;
  publishedAt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  publishedAt_gt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  publishedAt_gte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  publishedAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  /** All values less than the given value. */
  publishedAt_lt?: InputMaybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  publishedAt_lte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  publishedAt_not?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not contained in given list. */
  publishedAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  publishedBy?: InputMaybe<UserWhereInput>;
  scheduledIn_every?: InputMaybe<ScheduledOperationWhereInput>;
  scheduledIn_none?: InputMaybe<ScheduledOperationWhereInput>;
  scheduledIn_some?: InputMaybe<ScheduledOperationWhereInput>;
  slug?: InputMaybe<Scalars['String']>;
  /** All values containing the given string. */
  slug_contains?: InputMaybe<Scalars['String']>;
  /** All values ending with the given string. */
  slug_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are contained in given list. */
  slug_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** All values that are not equal to given value. */
  slug_not?: InputMaybe<Scalars['String']>;
  /** All values not containing the given string. */
  slug_not_contains?: InputMaybe<Scalars['String']>;
  /** All values not ending with the given string */
  slug_not_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  slug_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** All values not starting with the given string. */
  slug_not_starts_with?: InputMaybe<Scalars['String']>;
  /** All values starting with the given string. */
  slug_starts_with?: InputMaybe<Scalars['String']>;
  stock?: InputMaybe<Scalars['Int']>;
  /** All values greater than the given value. */
  stock_gt?: InputMaybe<Scalars['Int']>;
  /** All values greater than or equal the given value. */
  stock_gte?: InputMaybe<Scalars['Int']>;
  /** All values that are contained in given list. */
  stock_in?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
  /** All values less than the given value. */
  stock_lt?: InputMaybe<Scalars['Int']>;
  /** All values less than or equal the given value. */
  stock_lte?: InputMaybe<Scalars['Int']>;
  /** All values that are not equal to given value. */
  stock_not?: InputMaybe<Scalars['Int']>;
  /** All values that are not contained in given list. */
  stock_not_in?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
  subtitle?: InputMaybe<Scalars['String']>;
  /** All values containing the given string. */
  subtitle_contains?: InputMaybe<Scalars['String']>;
  /** All values ending with the given string. */
  subtitle_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are contained in given list. */
  subtitle_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** All values that are not equal to given value. */
  subtitle_not?: InputMaybe<Scalars['String']>;
  /** All values not containing the given string. */
  subtitle_not_contains?: InputMaybe<Scalars['String']>;
  /** All values not ending with the given string */
  subtitle_not_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  subtitle_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** All values not starting with the given string. */
  subtitle_not_starts_with?: InputMaybe<Scalars['String']>;
  /** All values starting with the given string. */
  subtitle_starts_with?: InputMaybe<Scalars['String']>;
  title?: InputMaybe<Scalars['String']>;
  /** All values containing the given string. */
  title_contains?: InputMaybe<Scalars['String']>;
  /** All values ending with the given string. */
  title_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are contained in given list. */
  title_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** All values that are not equal to given value. */
  title_not?: InputMaybe<Scalars['String']>;
  /** All values not containing the given string. */
  title_not_contains?: InputMaybe<Scalars['String']>;
  /** All values not ending with the given string */
  title_not_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  title_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** All values not starting with the given string. */
  title_not_starts_with?: InputMaybe<Scalars['String']>;
  /** All values starting with the given string. */
  title_starts_with?: InputMaybe<Scalars['String']>;
  updatedAt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  updatedAt_gt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  updatedAt_gte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  updatedAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  /** All values less than the given value. */
  updatedAt_lt?: InputMaybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  updatedAt_lte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  updatedAt_not?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not contained in given list. */
  updatedAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  updatedBy?: InputMaybe<UserWhereInput>;
  warranty?: InputMaybe<Scalars['Int']>;
  /** All values greater than the given value. */
  warranty_gt?: InputMaybe<Scalars['Int']>;
  /** All values greater than or equal the given value. */
  warranty_gte?: InputMaybe<Scalars['Int']>;
  /** All values that are contained in given list. */
  warranty_in?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
  /** All values less than the given value. */
  warranty_lt?: InputMaybe<Scalars['Int']>;
  /** All values less than or equal the given value. */
  warranty_lte?: InputMaybe<Scalars['Int']>;
  /** All values that are not equal to given value. */
  warranty_not?: InputMaybe<Scalars['Int']>;
  /** All values that are not contained in given list. */
  warranty_not_in?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
};

export enum LaptopOrderByInput {
  BrandAsc = 'brand_ASC',
  BrandDesc = 'brand_DESC',
  CreatedAtAsc = 'createdAt_ASC',
  CreatedAtDesc = 'createdAt_DESC',
  DiscountPercentAsc = 'discountPercent_ASC',
  DiscountPercentDesc = 'discountPercent_DESC',
  IdAsc = 'id_ASC',
  IdDesc = 'id_DESC',
  ManufacturerLinkAsc = 'manufacturerLink_ASC',
  ManufacturerLinkDesc = 'manufacturerLink_DESC',
  ManufacturerAsc = 'manufacturer_ASC',
  ManufacturerDesc = 'manufacturer_DESC',
  NewProductAsc = 'newProduct_ASC',
  NewProductDesc = 'newProduct_DESC',
  OnDiscountAsc = 'onDiscount_ASC',
  OnDiscountDesc = 'onDiscount_DESC',
  PriceAsc = 'price_ASC',
  PriceDesc = 'price_DESC',
  PromotionAsc = 'promotion_ASC',
  PromotionDesc = 'promotion_DESC',
  PublishedAtAsc = 'publishedAt_ASC',
  PublishedAtDesc = 'publishedAt_DESC',
  SlugAsc = 'slug_ASC',
  SlugDesc = 'slug_DESC',
  StockAsc = 'stock_ASC',
  StockDesc = 'stock_DESC',
  SubtitleAsc = 'subtitle_ASC',
  SubtitleDesc = 'subtitle_DESC',
  TitleAsc = 'title_ASC',
  TitleDesc = 'title_DESC',
  UpdatedAtAsc = 'updatedAt_ASC',
  UpdatedAtDesc = 'updatedAt_DESC',
  WarrantyAsc = 'warranty_ASC',
  WarrantyDesc = 'warranty_DESC'
}

export type LaptopUpdateInput = {
  brand?: InputMaybe<Scalars['String']>;
  description?: InputMaybe<Scalars['RichTextAST']>;
  discountPercent?: InputMaybe<Scalars['Int']>;
  images?: InputMaybe<AssetUpdateOneInlineInput>;
  manufacturer?: InputMaybe<Scalars['String']>;
  manufacturerLink?: InputMaybe<Scalars['String']>;
  newProduct?: InputMaybe<Scalars['Boolean']>;
  onDiscount?: InputMaybe<Scalars['Boolean']>;
  price?: InputMaybe<Scalars['Int']>;
  promotion?: InputMaybe<Scalars['Boolean']>;
  slug?: InputMaybe<Scalars['String']>;
  stock?: InputMaybe<Scalars['Int']>;
  subtitle?: InputMaybe<Scalars['String']>;
  title?: InputMaybe<Scalars['String']>;
  warranty?: InputMaybe<Scalars['Int']>;
};

export type LaptopUpdateManyInlineInput = {
  /** Connect multiple existing Laptop documents */
  connect?: InputMaybe<Array<LaptopConnectInput>>;
  /** Create and connect multiple Laptop documents */
  create?: InputMaybe<Array<LaptopCreateInput>>;
  /** Delete multiple Laptop documents */
  delete?: InputMaybe<Array<LaptopWhereUniqueInput>>;
  /** Disconnect multiple Laptop documents */
  disconnect?: InputMaybe<Array<LaptopWhereUniqueInput>>;
  /** Override currently-connected documents with multiple existing Laptop documents */
  set?: InputMaybe<Array<LaptopWhereUniqueInput>>;
  /** Update multiple Laptop documents */
  update?: InputMaybe<Array<LaptopUpdateWithNestedWhereUniqueInput>>;
  /** Upsert multiple Laptop documents */
  upsert?: InputMaybe<Array<LaptopUpsertWithNestedWhereUniqueInput>>;
};

export type LaptopUpdateManyInput = {
  brand?: InputMaybe<Scalars['String']>;
  description?: InputMaybe<Scalars['RichTextAST']>;
  discountPercent?: InputMaybe<Scalars['Int']>;
  manufacturer?: InputMaybe<Scalars['String']>;
  manufacturerLink?: InputMaybe<Scalars['String']>;
  newProduct?: InputMaybe<Scalars['Boolean']>;
  onDiscount?: InputMaybe<Scalars['Boolean']>;
  price?: InputMaybe<Scalars['Int']>;
  promotion?: InputMaybe<Scalars['Boolean']>;
  stock?: InputMaybe<Scalars['Int']>;
  subtitle?: InputMaybe<Scalars['String']>;
  warranty?: InputMaybe<Scalars['Int']>;
};

export type LaptopUpdateManyWithNestedWhereInput = {
  /** Update many input */
  data: LaptopUpdateManyInput;
  /** Document search */
  where: LaptopWhereInput;
};

export type LaptopUpdateOneInlineInput = {
  /** Connect existing Laptop document */
  connect?: InputMaybe<LaptopWhereUniqueInput>;
  /** Create and connect one Laptop document */
  create?: InputMaybe<LaptopCreateInput>;
  /** Delete currently connected Laptop document */
  delete?: InputMaybe<Scalars['Boolean']>;
  /** Disconnect currently connected Laptop document */
  disconnect?: InputMaybe<Scalars['Boolean']>;
  /** Update single Laptop document */
  update?: InputMaybe<LaptopUpdateWithNestedWhereUniqueInput>;
  /** Upsert single Laptop document */
  upsert?: InputMaybe<LaptopUpsertWithNestedWhereUniqueInput>;
};

export type LaptopUpdateWithNestedWhereUniqueInput = {
  /** Document to update */
  data: LaptopUpdateInput;
  /** Unique document search */
  where: LaptopWhereUniqueInput;
};

export type LaptopUpsertInput = {
  /** Create document if it didn't exist */
  create: LaptopCreateInput;
  /** Update document if it exists */
  update: LaptopUpdateInput;
};

export type LaptopUpsertWithNestedWhereUniqueInput = {
  /** Upsert data */
  data: LaptopUpsertInput;
  /** Unique document search */
  where: LaptopWhereUniqueInput;
};

/** This contains a set of filters that can be used to compare values internally */
export type LaptopWhereComparatorInput = {
  /** This field can be used to request to check if the entry is outdated by internal comparison */
  outdated_to?: InputMaybe<Scalars['Boolean']>;
};

/** Identifies documents */
export type LaptopWhereInput = {
  /** Logical AND on all given filters. */
  AND?: InputMaybe<Array<LaptopWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: InputMaybe<Array<LaptopWhereInput>>;
  /** Logical OR on all given filters. */
  OR?: InputMaybe<Array<LaptopWhereInput>>;
  /** Contains search across all appropriate fields. */
  _search?: InputMaybe<Scalars['String']>;
  brand?: InputMaybe<Scalars['String']>;
  /** All values containing the given string. */
  brand_contains?: InputMaybe<Scalars['String']>;
  /** All values ending with the given string. */
  brand_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are contained in given list. */
  brand_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** All values that are not equal to given value. */
  brand_not?: InputMaybe<Scalars['String']>;
  /** All values not containing the given string. */
  brand_not_contains?: InputMaybe<Scalars['String']>;
  /** All values not ending with the given string */
  brand_not_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  brand_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** All values not starting with the given string. */
  brand_not_starts_with?: InputMaybe<Scalars['String']>;
  /** All values starting with the given string. */
  brand_starts_with?: InputMaybe<Scalars['String']>;
  createdAt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  createdAt_gt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  createdAt_gte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  createdAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  /** All values less than the given value. */
  createdAt_lt?: InputMaybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  createdAt_lte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  createdAt_not?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not contained in given list. */
  createdAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  createdBy?: InputMaybe<UserWhereInput>;
  discountPercent?: InputMaybe<Scalars['Int']>;
  /** All values greater than the given value. */
  discountPercent_gt?: InputMaybe<Scalars['Int']>;
  /** All values greater than or equal the given value. */
  discountPercent_gte?: InputMaybe<Scalars['Int']>;
  /** All values that are contained in given list. */
  discountPercent_in?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
  /** All values less than the given value. */
  discountPercent_lt?: InputMaybe<Scalars['Int']>;
  /** All values less than or equal the given value. */
  discountPercent_lte?: InputMaybe<Scalars['Int']>;
  /** All values that are not equal to given value. */
  discountPercent_not?: InputMaybe<Scalars['Int']>;
  /** All values that are not contained in given list. */
  discountPercent_not_in?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
  documentInStages_every?: InputMaybe<LaptopWhereStageInput>;
  documentInStages_none?: InputMaybe<LaptopWhereStageInput>;
  documentInStages_some?: InputMaybe<LaptopWhereStageInput>;
  id?: InputMaybe<Scalars['ID']>;
  /** All values containing the given string. */
  id_contains?: InputMaybe<Scalars['ID']>;
  /** All values ending with the given string. */
  id_ends_with?: InputMaybe<Scalars['ID']>;
  /** All values that are contained in given list. */
  id_in?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  /** All values that are not equal to given value. */
  id_not?: InputMaybe<Scalars['ID']>;
  /** All values not containing the given string. */
  id_not_contains?: InputMaybe<Scalars['ID']>;
  /** All values not ending with the given string */
  id_not_ends_with?: InputMaybe<Scalars['ID']>;
  /** All values that are not contained in given list. */
  id_not_in?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  /** All values not starting with the given string. */
  id_not_starts_with?: InputMaybe<Scalars['ID']>;
  /** All values starting with the given string. */
  id_starts_with?: InputMaybe<Scalars['ID']>;
  images?: InputMaybe<AssetWhereInput>;
  manufacturer?: InputMaybe<Scalars['String']>;
  manufacturerLink?: InputMaybe<Scalars['String']>;
  /** All values containing the given string. */
  manufacturerLink_contains?: InputMaybe<Scalars['String']>;
  /** All values ending with the given string. */
  manufacturerLink_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are contained in given list. */
  manufacturerLink_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** All values that are not equal to given value. */
  manufacturerLink_not?: InputMaybe<Scalars['String']>;
  /** All values not containing the given string. */
  manufacturerLink_not_contains?: InputMaybe<Scalars['String']>;
  /** All values not ending with the given string */
  manufacturerLink_not_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  manufacturerLink_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** All values not starting with the given string. */
  manufacturerLink_not_starts_with?: InputMaybe<Scalars['String']>;
  /** All values starting with the given string. */
  manufacturerLink_starts_with?: InputMaybe<Scalars['String']>;
  /** All values containing the given string. */
  manufacturer_contains?: InputMaybe<Scalars['String']>;
  /** All values ending with the given string. */
  manufacturer_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are contained in given list. */
  manufacturer_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** All values that are not equal to given value. */
  manufacturer_not?: InputMaybe<Scalars['String']>;
  /** All values not containing the given string. */
  manufacturer_not_contains?: InputMaybe<Scalars['String']>;
  /** All values not ending with the given string */
  manufacturer_not_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  manufacturer_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** All values not starting with the given string. */
  manufacturer_not_starts_with?: InputMaybe<Scalars['String']>;
  /** All values starting with the given string. */
  manufacturer_starts_with?: InputMaybe<Scalars['String']>;
  newProduct?: InputMaybe<Scalars['Boolean']>;
  /** All values that are not equal to given value. */
  newProduct_not?: InputMaybe<Scalars['Boolean']>;
  onDiscount?: InputMaybe<Scalars['Boolean']>;
  /** All values that are not equal to given value. */
  onDiscount_not?: InputMaybe<Scalars['Boolean']>;
  price?: InputMaybe<Scalars['Int']>;
  /** All values greater than the given value. */
  price_gt?: InputMaybe<Scalars['Int']>;
  /** All values greater than or equal the given value. */
  price_gte?: InputMaybe<Scalars['Int']>;
  /** All values that are contained in given list. */
  price_in?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
  /** All values less than the given value. */
  price_lt?: InputMaybe<Scalars['Int']>;
  /** All values less than or equal the given value. */
  price_lte?: InputMaybe<Scalars['Int']>;
  /** All values that are not equal to given value. */
  price_not?: InputMaybe<Scalars['Int']>;
  /** All values that are not contained in given list. */
  price_not_in?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
  promotion?: InputMaybe<Scalars['Boolean']>;
  /** All values that are not equal to given value. */
  promotion_not?: InputMaybe<Scalars['Boolean']>;
  publishedAt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  publishedAt_gt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  publishedAt_gte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  publishedAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  /** All values less than the given value. */
  publishedAt_lt?: InputMaybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  publishedAt_lte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  publishedAt_not?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not contained in given list. */
  publishedAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  publishedBy?: InputMaybe<UserWhereInput>;
  scheduledIn_every?: InputMaybe<ScheduledOperationWhereInput>;
  scheduledIn_none?: InputMaybe<ScheduledOperationWhereInput>;
  scheduledIn_some?: InputMaybe<ScheduledOperationWhereInput>;
  slug?: InputMaybe<Scalars['String']>;
  /** All values containing the given string. */
  slug_contains?: InputMaybe<Scalars['String']>;
  /** All values ending with the given string. */
  slug_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are contained in given list. */
  slug_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** All values that are not equal to given value. */
  slug_not?: InputMaybe<Scalars['String']>;
  /** All values not containing the given string. */
  slug_not_contains?: InputMaybe<Scalars['String']>;
  /** All values not ending with the given string */
  slug_not_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  slug_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** All values not starting with the given string. */
  slug_not_starts_with?: InputMaybe<Scalars['String']>;
  /** All values starting with the given string. */
  slug_starts_with?: InputMaybe<Scalars['String']>;
  stock?: InputMaybe<Scalars['Int']>;
  /** All values greater than the given value. */
  stock_gt?: InputMaybe<Scalars['Int']>;
  /** All values greater than or equal the given value. */
  stock_gte?: InputMaybe<Scalars['Int']>;
  /** All values that are contained in given list. */
  stock_in?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
  /** All values less than the given value. */
  stock_lt?: InputMaybe<Scalars['Int']>;
  /** All values less than or equal the given value. */
  stock_lte?: InputMaybe<Scalars['Int']>;
  /** All values that are not equal to given value. */
  stock_not?: InputMaybe<Scalars['Int']>;
  /** All values that are not contained in given list. */
  stock_not_in?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
  subtitle?: InputMaybe<Scalars['String']>;
  /** All values containing the given string. */
  subtitle_contains?: InputMaybe<Scalars['String']>;
  /** All values ending with the given string. */
  subtitle_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are contained in given list. */
  subtitle_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** All values that are not equal to given value. */
  subtitle_not?: InputMaybe<Scalars['String']>;
  /** All values not containing the given string. */
  subtitle_not_contains?: InputMaybe<Scalars['String']>;
  /** All values not ending with the given string */
  subtitle_not_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  subtitle_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** All values not starting with the given string. */
  subtitle_not_starts_with?: InputMaybe<Scalars['String']>;
  /** All values starting with the given string. */
  subtitle_starts_with?: InputMaybe<Scalars['String']>;
  title?: InputMaybe<Scalars['String']>;
  /** All values containing the given string. */
  title_contains?: InputMaybe<Scalars['String']>;
  /** All values ending with the given string. */
  title_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are contained in given list. */
  title_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** All values that are not equal to given value. */
  title_not?: InputMaybe<Scalars['String']>;
  /** All values not containing the given string. */
  title_not_contains?: InputMaybe<Scalars['String']>;
  /** All values not ending with the given string */
  title_not_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  title_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** All values not starting with the given string. */
  title_not_starts_with?: InputMaybe<Scalars['String']>;
  /** All values starting with the given string. */
  title_starts_with?: InputMaybe<Scalars['String']>;
  updatedAt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  updatedAt_gt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  updatedAt_gte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  updatedAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  /** All values less than the given value. */
  updatedAt_lt?: InputMaybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  updatedAt_lte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  updatedAt_not?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not contained in given list. */
  updatedAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  updatedBy?: InputMaybe<UserWhereInput>;
  warranty?: InputMaybe<Scalars['Int']>;
  /** All values greater than the given value. */
  warranty_gt?: InputMaybe<Scalars['Int']>;
  /** All values greater than or equal the given value. */
  warranty_gte?: InputMaybe<Scalars['Int']>;
  /** All values that are contained in given list. */
  warranty_in?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
  /** All values less than the given value. */
  warranty_lt?: InputMaybe<Scalars['Int']>;
  /** All values less than or equal the given value. */
  warranty_lte?: InputMaybe<Scalars['Int']>;
  /** All values that are not equal to given value. */
  warranty_not?: InputMaybe<Scalars['Int']>;
  /** All values that are not contained in given list. */
  warranty_not_in?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
};

/** The document in stages filter allows specifying a stage entry to cross compare the same document between different stages */
export type LaptopWhereStageInput = {
  /** Logical AND on all given filters. */
  AND?: InputMaybe<Array<LaptopWhereStageInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: InputMaybe<Array<LaptopWhereStageInput>>;
  /** Logical OR on all given filters. */
  OR?: InputMaybe<Array<LaptopWhereStageInput>>;
  /** This field contains fields which can be set as true or false to specify an internal comparison */
  compareWithParent?: InputMaybe<LaptopWhereComparatorInput>;
  /** Specify the stage to compare with */
  stage?: InputMaybe<Stage>;
};

/** References Laptop record uniquely */
export type LaptopWhereUniqueInput = {
  id?: InputMaybe<Scalars['ID']>;
  slug?: InputMaybe<Scalars['String']>;
  title?: InputMaybe<Scalars['String']>;
};

/** Locale system enumeration */
export enum Locale {
  /** System locale */
  En = 'en'
}

/** Representing a geolocation point with latitude and longitude */
export type Location = {
  __typename?: 'Location';
  distance: Scalars['Float'];
  latitude: Scalars['Float'];
  longitude: Scalars['Float'];
};


/** Representing a geolocation point with latitude and longitude */
export type LocationDistanceArgs = {
  from: LocationInput;
};

/** Input for a geolocation point with latitude and longitude */
export type LocationInput = {
  latitude: Scalars['Float'];
  longitude: Scalars['Float'];
};

export type Motherboard = Node & {
  __typename?: 'Motherboard';
  brand?: Maybe<Scalars['String']>;
  /** The time the document was created */
  createdAt: Scalars['DateTime'];
  /** User that created this document */
  createdBy?: Maybe<User>;
  description?: Maybe<RichText>;
  discountPercent?: Maybe<Scalars['Int']>;
  /** Get the document in other stages */
  documentInStages: Array<Motherboard>;
  /** List of Motherboard versions */
  history: Array<Version>;
  /** The unique identifier */
  id: Scalars['ID'];
  images?: Maybe<Asset>;
  manufacturer?: Maybe<Scalars['String']>;
  manufacturerLink?: Maybe<Scalars['String']>;
  newProduct?: Maybe<Scalars['Boolean']>;
  onDiscount?: Maybe<Scalars['Boolean']>;
  price?: Maybe<Scalars['Int']>;
  promotion?: Maybe<Scalars['Boolean']>;
  /** The time the document was published. Null on documents in draft stage. */
  publishedAt?: Maybe<Scalars['DateTime']>;
  /** User that last published this document */
  publishedBy?: Maybe<User>;
  scheduledIn: Array<ScheduledOperation>;
  slug?: Maybe<Scalars['String']>;
  /** System stage field */
  stage: Stage;
  stock?: Maybe<Scalars['Int']>;
  subtitle?: Maybe<Scalars['String']>;
  title: Scalars['String'];
  /** The time the document was updated */
  updatedAt: Scalars['DateTime'];
  /** User that last updated this document */
  updatedBy?: Maybe<User>;
  warranty?: Maybe<Scalars['Int']>;
};


export type MotherboardCreatedByArgs = {
  locales?: InputMaybe<Array<Locale>>;
};


export type MotherboardDocumentInStagesArgs = {
  includeCurrent?: Scalars['Boolean'];
  inheritLocale?: Scalars['Boolean'];
  stages?: Array<Stage>;
};


export type MotherboardHistoryArgs = {
  limit?: Scalars['Int'];
  skip?: Scalars['Int'];
  stageOverride?: InputMaybe<Stage>;
};


export type MotherboardImagesArgs = {
  locales?: InputMaybe<Array<Locale>>;
};


export type MotherboardPublishedByArgs = {
  locales?: InputMaybe<Array<Locale>>;
};


export type MotherboardScheduledInArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  locales?: InputMaybe<Array<Locale>>;
  skip?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<ScheduledOperationWhereInput>;
};


export type MotherboardUpdatedByArgs = {
  locales?: InputMaybe<Array<Locale>>;
};

export type MotherboardConnectInput = {
  /** Allow to specify document position in list of connected documents, will default to appending at end of list */
  position?: InputMaybe<ConnectPositionInput>;
  /** Document to connect */
  where: MotherboardWhereUniqueInput;
};

/** A connection to a list of items. */
export type MotherboardConnection = {
  __typename?: 'MotherboardConnection';
  aggregate: Aggregate;
  /** A list of edges. */
  edges: Array<MotherboardEdge>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
};

export type MotherboardCreateInput = {
  brand?: InputMaybe<Scalars['String']>;
  createdAt?: InputMaybe<Scalars['DateTime']>;
  description?: InputMaybe<Scalars['RichTextAST']>;
  discountPercent?: InputMaybe<Scalars['Int']>;
  images?: InputMaybe<AssetCreateOneInlineInput>;
  manufacturer?: InputMaybe<Scalars['String']>;
  manufacturerLink?: InputMaybe<Scalars['String']>;
  newProduct?: InputMaybe<Scalars['Boolean']>;
  onDiscount?: InputMaybe<Scalars['Boolean']>;
  price?: InputMaybe<Scalars['Int']>;
  promotion?: InputMaybe<Scalars['Boolean']>;
  slug?: InputMaybe<Scalars['String']>;
  stock?: InputMaybe<Scalars['Int']>;
  subtitle?: InputMaybe<Scalars['String']>;
  title: Scalars['String'];
  updatedAt?: InputMaybe<Scalars['DateTime']>;
  warranty?: InputMaybe<Scalars['Int']>;
};

export type MotherboardCreateManyInlineInput = {
  /** Connect multiple existing Motherboard documents */
  connect?: InputMaybe<Array<MotherboardWhereUniqueInput>>;
  /** Create and connect multiple existing Motherboard documents */
  create?: InputMaybe<Array<MotherboardCreateInput>>;
};

export type MotherboardCreateOneInlineInput = {
  /** Connect one existing Motherboard document */
  connect?: InputMaybe<MotherboardWhereUniqueInput>;
  /** Create and connect one Motherboard document */
  create?: InputMaybe<MotherboardCreateInput>;
};

/** An edge in a connection. */
export type MotherboardEdge = {
  __typename?: 'MotherboardEdge';
  /** A cursor for use in pagination. */
  cursor: Scalars['String'];
  /** The item at the end of the edge. */
  node: Motherboard;
};

/** Identifies documents */
export type MotherboardManyWhereInput = {
  /** Logical AND on all given filters. */
  AND?: InputMaybe<Array<MotherboardWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: InputMaybe<Array<MotherboardWhereInput>>;
  /** Logical OR on all given filters. */
  OR?: InputMaybe<Array<MotherboardWhereInput>>;
  /** Contains search across all appropriate fields. */
  _search?: InputMaybe<Scalars['String']>;
  brand?: InputMaybe<Scalars['String']>;
  /** All values containing the given string. */
  brand_contains?: InputMaybe<Scalars['String']>;
  /** All values ending with the given string. */
  brand_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are contained in given list. */
  brand_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** All values that are not equal to given value. */
  brand_not?: InputMaybe<Scalars['String']>;
  /** All values not containing the given string. */
  brand_not_contains?: InputMaybe<Scalars['String']>;
  /** All values not ending with the given string */
  brand_not_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  brand_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** All values not starting with the given string. */
  brand_not_starts_with?: InputMaybe<Scalars['String']>;
  /** All values starting with the given string. */
  brand_starts_with?: InputMaybe<Scalars['String']>;
  createdAt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  createdAt_gt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  createdAt_gte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  createdAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  /** All values less than the given value. */
  createdAt_lt?: InputMaybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  createdAt_lte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  createdAt_not?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not contained in given list. */
  createdAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  createdBy?: InputMaybe<UserWhereInput>;
  discountPercent?: InputMaybe<Scalars['Int']>;
  /** All values greater than the given value. */
  discountPercent_gt?: InputMaybe<Scalars['Int']>;
  /** All values greater than or equal the given value. */
  discountPercent_gte?: InputMaybe<Scalars['Int']>;
  /** All values that are contained in given list. */
  discountPercent_in?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
  /** All values less than the given value. */
  discountPercent_lt?: InputMaybe<Scalars['Int']>;
  /** All values less than or equal the given value. */
  discountPercent_lte?: InputMaybe<Scalars['Int']>;
  /** All values that are not equal to given value. */
  discountPercent_not?: InputMaybe<Scalars['Int']>;
  /** All values that are not contained in given list. */
  discountPercent_not_in?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
  documentInStages_every?: InputMaybe<MotherboardWhereStageInput>;
  documentInStages_none?: InputMaybe<MotherboardWhereStageInput>;
  documentInStages_some?: InputMaybe<MotherboardWhereStageInput>;
  id?: InputMaybe<Scalars['ID']>;
  /** All values containing the given string. */
  id_contains?: InputMaybe<Scalars['ID']>;
  /** All values ending with the given string. */
  id_ends_with?: InputMaybe<Scalars['ID']>;
  /** All values that are contained in given list. */
  id_in?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  /** All values that are not equal to given value. */
  id_not?: InputMaybe<Scalars['ID']>;
  /** All values not containing the given string. */
  id_not_contains?: InputMaybe<Scalars['ID']>;
  /** All values not ending with the given string */
  id_not_ends_with?: InputMaybe<Scalars['ID']>;
  /** All values that are not contained in given list. */
  id_not_in?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  /** All values not starting with the given string. */
  id_not_starts_with?: InputMaybe<Scalars['ID']>;
  /** All values starting with the given string. */
  id_starts_with?: InputMaybe<Scalars['ID']>;
  images?: InputMaybe<AssetWhereInput>;
  manufacturer?: InputMaybe<Scalars['String']>;
  manufacturerLink?: InputMaybe<Scalars['String']>;
  /** All values containing the given string. */
  manufacturerLink_contains?: InputMaybe<Scalars['String']>;
  /** All values ending with the given string. */
  manufacturerLink_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are contained in given list. */
  manufacturerLink_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** All values that are not equal to given value. */
  manufacturerLink_not?: InputMaybe<Scalars['String']>;
  /** All values not containing the given string. */
  manufacturerLink_not_contains?: InputMaybe<Scalars['String']>;
  /** All values not ending with the given string */
  manufacturerLink_not_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  manufacturerLink_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** All values not starting with the given string. */
  manufacturerLink_not_starts_with?: InputMaybe<Scalars['String']>;
  /** All values starting with the given string. */
  manufacturerLink_starts_with?: InputMaybe<Scalars['String']>;
  /** All values containing the given string. */
  manufacturer_contains?: InputMaybe<Scalars['String']>;
  /** All values ending with the given string. */
  manufacturer_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are contained in given list. */
  manufacturer_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** All values that are not equal to given value. */
  manufacturer_not?: InputMaybe<Scalars['String']>;
  /** All values not containing the given string. */
  manufacturer_not_contains?: InputMaybe<Scalars['String']>;
  /** All values not ending with the given string */
  manufacturer_not_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  manufacturer_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** All values not starting with the given string. */
  manufacturer_not_starts_with?: InputMaybe<Scalars['String']>;
  /** All values starting with the given string. */
  manufacturer_starts_with?: InputMaybe<Scalars['String']>;
  newProduct?: InputMaybe<Scalars['Boolean']>;
  /** All values that are not equal to given value. */
  newProduct_not?: InputMaybe<Scalars['Boolean']>;
  onDiscount?: InputMaybe<Scalars['Boolean']>;
  /** All values that are not equal to given value. */
  onDiscount_not?: InputMaybe<Scalars['Boolean']>;
  price?: InputMaybe<Scalars['Int']>;
  /** All values greater than the given value. */
  price_gt?: InputMaybe<Scalars['Int']>;
  /** All values greater than or equal the given value. */
  price_gte?: InputMaybe<Scalars['Int']>;
  /** All values that are contained in given list. */
  price_in?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
  /** All values less than the given value. */
  price_lt?: InputMaybe<Scalars['Int']>;
  /** All values less than or equal the given value. */
  price_lte?: InputMaybe<Scalars['Int']>;
  /** All values that are not equal to given value. */
  price_not?: InputMaybe<Scalars['Int']>;
  /** All values that are not contained in given list. */
  price_not_in?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
  promotion?: InputMaybe<Scalars['Boolean']>;
  /** All values that are not equal to given value. */
  promotion_not?: InputMaybe<Scalars['Boolean']>;
  publishedAt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  publishedAt_gt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  publishedAt_gte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  publishedAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  /** All values less than the given value. */
  publishedAt_lt?: InputMaybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  publishedAt_lte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  publishedAt_not?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not contained in given list. */
  publishedAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  publishedBy?: InputMaybe<UserWhereInput>;
  scheduledIn_every?: InputMaybe<ScheduledOperationWhereInput>;
  scheduledIn_none?: InputMaybe<ScheduledOperationWhereInput>;
  scheduledIn_some?: InputMaybe<ScheduledOperationWhereInput>;
  slug?: InputMaybe<Scalars['String']>;
  /** All values containing the given string. */
  slug_contains?: InputMaybe<Scalars['String']>;
  /** All values ending with the given string. */
  slug_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are contained in given list. */
  slug_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** All values that are not equal to given value. */
  slug_not?: InputMaybe<Scalars['String']>;
  /** All values not containing the given string. */
  slug_not_contains?: InputMaybe<Scalars['String']>;
  /** All values not ending with the given string */
  slug_not_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  slug_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** All values not starting with the given string. */
  slug_not_starts_with?: InputMaybe<Scalars['String']>;
  /** All values starting with the given string. */
  slug_starts_with?: InputMaybe<Scalars['String']>;
  stock?: InputMaybe<Scalars['Int']>;
  /** All values greater than the given value. */
  stock_gt?: InputMaybe<Scalars['Int']>;
  /** All values greater than or equal the given value. */
  stock_gte?: InputMaybe<Scalars['Int']>;
  /** All values that are contained in given list. */
  stock_in?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
  /** All values less than the given value. */
  stock_lt?: InputMaybe<Scalars['Int']>;
  /** All values less than or equal the given value. */
  stock_lte?: InputMaybe<Scalars['Int']>;
  /** All values that are not equal to given value. */
  stock_not?: InputMaybe<Scalars['Int']>;
  /** All values that are not contained in given list. */
  stock_not_in?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
  subtitle?: InputMaybe<Scalars['String']>;
  /** All values containing the given string. */
  subtitle_contains?: InputMaybe<Scalars['String']>;
  /** All values ending with the given string. */
  subtitle_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are contained in given list. */
  subtitle_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** All values that are not equal to given value. */
  subtitle_not?: InputMaybe<Scalars['String']>;
  /** All values not containing the given string. */
  subtitle_not_contains?: InputMaybe<Scalars['String']>;
  /** All values not ending with the given string */
  subtitle_not_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  subtitle_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** All values not starting with the given string. */
  subtitle_not_starts_with?: InputMaybe<Scalars['String']>;
  /** All values starting with the given string. */
  subtitle_starts_with?: InputMaybe<Scalars['String']>;
  title?: InputMaybe<Scalars['String']>;
  /** All values containing the given string. */
  title_contains?: InputMaybe<Scalars['String']>;
  /** All values ending with the given string. */
  title_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are contained in given list. */
  title_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** All values that are not equal to given value. */
  title_not?: InputMaybe<Scalars['String']>;
  /** All values not containing the given string. */
  title_not_contains?: InputMaybe<Scalars['String']>;
  /** All values not ending with the given string */
  title_not_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  title_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** All values not starting with the given string. */
  title_not_starts_with?: InputMaybe<Scalars['String']>;
  /** All values starting with the given string. */
  title_starts_with?: InputMaybe<Scalars['String']>;
  updatedAt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  updatedAt_gt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  updatedAt_gte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  updatedAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  /** All values less than the given value. */
  updatedAt_lt?: InputMaybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  updatedAt_lte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  updatedAt_not?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not contained in given list. */
  updatedAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  updatedBy?: InputMaybe<UserWhereInput>;
  warranty?: InputMaybe<Scalars['Int']>;
  /** All values greater than the given value. */
  warranty_gt?: InputMaybe<Scalars['Int']>;
  /** All values greater than or equal the given value. */
  warranty_gte?: InputMaybe<Scalars['Int']>;
  /** All values that are contained in given list. */
  warranty_in?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
  /** All values less than the given value. */
  warranty_lt?: InputMaybe<Scalars['Int']>;
  /** All values less than or equal the given value. */
  warranty_lte?: InputMaybe<Scalars['Int']>;
  /** All values that are not equal to given value. */
  warranty_not?: InputMaybe<Scalars['Int']>;
  /** All values that are not contained in given list. */
  warranty_not_in?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
};

export enum MotherboardOrderByInput {
  BrandAsc = 'brand_ASC',
  BrandDesc = 'brand_DESC',
  CreatedAtAsc = 'createdAt_ASC',
  CreatedAtDesc = 'createdAt_DESC',
  DiscountPercentAsc = 'discountPercent_ASC',
  DiscountPercentDesc = 'discountPercent_DESC',
  IdAsc = 'id_ASC',
  IdDesc = 'id_DESC',
  ManufacturerLinkAsc = 'manufacturerLink_ASC',
  ManufacturerLinkDesc = 'manufacturerLink_DESC',
  ManufacturerAsc = 'manufacturer_ASC',
  ManufacturerDesc = 'manufacturer_DESC',
  NewProductAsc = 'newProduct_ASC',
  NewProductDesc = 'newProduct_DESC',
  OnDiscountAsc = 'onDiscount_ASC',
  OnDiscountDesc = 'onDiscount_DESC',
  PriceAsc = 'price_ASC',
  PriceDesc = 'price_DESC',
  PromotionAsc = 'promotion_ASC',
  PromotionDesc = 'promotion_DESC',
  PublishedAtAsc = 'publishedAt_ASC',
  PublishedAtDesc = 'publishedAt_DESC',
  SlugAsc = 'slug_ASC',
  SlugDesc = 'slug_DESC',
  StockAsc = 'stock_ASC',
  StockDesc = 'stock_DESC',
  SubtitleAsc = 'subtitle_ASC',
  SubtitleDesc = 'subtitle_DESC',
  TitleAsc = 'title_ASC',
  TitleDesc = 'title_DESC',
  UpdatedAtAsc = 'updatedAt_ASC',
  UpdatedAtDesc = 'updatedAt_DESC',
  WarrantyAsc = 'warranty_ASC',
  WarrantyDesc = 'warranty_DESC'
}

export type MotherboardUpdateInput = {
  brand?: InputMaybe<Scalars['String']>;
  description?: InputMaybe<Scalars['RichTextAST']>;
  discountPercent?: InputMaybe<Scalars['Int']>;
  images?: InputMaybe<AssetUpdateOneInlineInput>;
  manufacturer?: InputMaybe<Scalars['String']>;
  manufacturerLink?: InputMaybe<Scalars['String']>;
  newProduct?: InputMaybe<Scalars['Boolean']>;
  onDiscount?: InputMaybe<Scalars['Boolean']>;
  price?: InputMaybe<Scalars['Int']>;
  promotion?: InputMaybe<Scalars['Boolean']>;
  slug?: InputMaybe<Scalars['String']>;
  stock?: InputMaybe<Scalars['Int']>;
  subtitle?: InputMaybe<Scalars['String']>;
  title?: InputMaybe<Scalars['String']>;
  warranty?: InputMaybe<Scalars['Int']>;
};

export type MotherboardUpdateManyInlineInput = {
  /** Connect multiple existing Motherboard documents */
  connect?: InputMaybe<Array<MotherboardConnectInput>>;
  /** Create and connect multiple Motherboard documents */
  create?: InputMaybe<Array<MotherboardCreateInput>>;
  /** Delete multiple Motherboard documents */
  delete?: InputMaybe<Array<MotherboardWhereUniqueInput>>;
  /** Disconnect multiple Motherboard documents */
  disconnect?: InputMaybe<Array<MotherboardWhereUniqueInput>>;
  /** Override currently-connected documents with multiple existing Motherboard documents */
  set?: InputMaybe<Array<MotherboardWhereUniqueInput>>;
  /** Update multiple Motherboard documents */
  update?: InputMaybe<Array<MotherboardUpdateWithNestedWhereUniqueInput>>;
  /** Upsert multiple Motherboard documents */
  upsert?: InputMaybe<Array<MotherboardUpsertWithNestedWhereUniqueInput>>;
};

export type MotherboardUpdateManyInput = {
  brand?: InputMaybe<Scalars['String']>;
  description?: InputMaybe<Scalars['RichTextAST']>;
  discountPercent?: InputMaybe<Scalars['Int']>;
  manufacturer?: InputMaybe<Scalars['String']>;
  manufacturerLink?: InputMaybe<Scalars['String']>;
  newProduct?: InputMaybe<Scalars['Boolean']>;
  onDiscount?: InputMaybe<Scalars['Boolean']>;
  price?: InputMaybe<Scalars['Int']>;
  promotion?: InputMaybe<Scalars['Boolean']>;
  stock?: InputMaybe<Scalars['Int']>;
  subtitle?: InputMaybe<Scalars['String']>;
  warranty?: InputMaybe<Scalars['Int']>;
};

export type MotherboardUpdateManyWithNestedWhereInput = {
  /** Update many input */
  data: MotherboardUpdateManyInput;
  /** Document search */
  where: MotherboardWhereInput;
};

export type MotherboardUpdateOneInlineInput = {
  /** Connect existing Motherboard document */
  connect?: InputMaybe<MotherboardWhereUniqueInput>;
  /** Create and connect one Motherboard document */
  create?: InputMaybe<MotherboardCreateInput>;
  /** Delete currently connected Motherboard document */
  delete?: InputMaybe<Scalars['Boolean']>;
  /** Disconnect currently connected Motherboard document */
  disconnect?: InputMaybe<Scalars['Boolean']>;
  /** Update single Motherboard document */
  update?: InputMaybe<MotherboardUpdateWithNestedWhereUniqueInput>;
  /** Upsert single Motherboard document */
  upsert?: InputMaybe<MotherboardUpsertWithNestedWhereUniqueInput>;
};

export type MotherboardUpdateWithNestedWhereUniqueInput = {
  /** Document to update */
  data: MotherboardUpdateInput;
  /** Unique document search */
  where: MotherboardWhereUniqueInput;
};

export type MotherboardUpsertInput = {
  /** Create document if it didn't exist */
  create: MotherboardCreateInput;
  /** Update document if it exists */
  update: MotherboardUpdateInput;
};

export type MotherboardUpsertWithNestedWhereUniqueInput = {
  /** Upsert data */
  data: MotherboardUpsertInput;
  /** Unique document search */
  where: MotherboardWhereUniqueInput;
};

/** This contains a set of filters that can be used to compare values internally */
export type MotherboardWhereComparatorInput = {
  /** This field can be used to request to check if the entry is outdated by internal comparison */
  outdated_to?: InputMaybe<Scalars['Boolean']>;
};

/** Identifies documents */
export type MotherboardWhereInput = {
  /** Logical AND on all given filters. */
  AND?: InputMaybe<Array<MotherboardWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: InputMaybe<Array<MotherboardWhereInput>>;
  /** Logical OR on all given filters. */
  OR?: InputMaybe<Array<MotherboardWhereInput>>;
  /** Contains search across all appropriate fields. */
  _search?: InputMaybe<Scalars['String']>;
  brand?: InputMaybe<Scalars['String']>;
  /** All values containing the given string. */
  brand_contains?: InputMaybe<Scalars['String']>;
  /** All values ending with the given string. */
  brand_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are contained in given list. */
  brand_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** All values that are not equal to given value. */
  brand_not?: InputMaybe<Scalars['String']>;
  /** All values not containing the given string. */
  brand_not_contains?: InputMaybe<Scalars['String']>;
  /** All values not ending with the given string */
  brand_not_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  brand_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** All values not starting with the given string. */
  brand_not_starts_with?: InputMaybe<Scalars['String']>;
  /** All values starting with the given string. */
  brand_starts_with?: InputMaybe<Scalars['String']>;
  createdAt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  createdAt_gt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  createdAt_gte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  createdAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  /** All values less than the given value. */
  createdAt_lt?: InputMaybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  createdAt_lte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  createdAt_not?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not contained in given list. */
  createdAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  createdBy?: InputMaybe<UserWhereInput>;
  discountPercent?: InputMaybe<Scalars['Int']>;
  /** All values greater than the given value. */
  discountPercent_gt?: InputMaybe<Scalars['Int']>;
  /** All values greater than or equal the given value. */
  discountPercent_gte?: InputMaybe<Scalars['Int']>;
  /** All values that are contained in given list. */
  discountPercent_in?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
  /** All values less than the given value. */
  discountPercent_lt?: InputMaybe<Scalars['Int']>;
  /** All values less than or equal the given value. */
  discountPercent_lte?: InputMaybe<Scalars['Int']>;
  /** All values that are not equal to given value. */
  discountPercent_not?: InputMaybe<Scalars['Int']>;
  /** All values that are not contained in given list. */
  discountPercent_not_in?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
  documentInStages_every?: InputMaybe<MotherboardWhereStageInput>;
  documentInStages_none?: InputMaybe<MotherboardWhereStageInput>;
  documentInStages_some?: InputMaybe<MotherboardWhereStageInput>;
  id?: InputMaybe<Scalars['ID']>;
  /** All values containing the given string. */
  id_contains?: InputMaybe<Scalars['ID']>;
  /** All values ending with the given string. */
  id_ends_with?: InputMaybe<Scalars['ID']>;
  /** All values that are contained in given list. */
  id_in?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  /** All values that are not equal to given value. */
  id_not?: InputMaybe<Scalars['ID']>;
  /** All values not containing the given string. */
  id_not_contains?: InputMaybe<Scalars['ID']>;
  /** All values not ending with the given string */
  id_not_ends_with?: InputMaybe<Scalars['ID']>;
  /** All values that are not contained in given list. */
  id_not_in?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  /** All values not starting with the given string. */
  id_not_starts_with?: InputMaybe<Scalars['ID']>;
  /** All values starting with the given string. */
  id_starts_with?: InputMaybe<Scalars['ID']>;
  images?: InputMaybe<AssetWhereInput>;
  manufacturer?: InputMaybe<Scalars['String']>;
  manufacturerLink?: InputMaybe<Scalars['String']>;
  /** All values containing the given string. */
  manufacturerLink_contains?: InputMaybe<Scalars['String']>;
  /** All values ending with the given string. */
  manufacturerLink_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are contained in given list. */
  manufacturerLink_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** All values that are not equal to given value. */
  manufacturerLink_not?: InputMaybe<Scalars['String']>;
  /** All values not containing the given string. */
  manufacturerLink_not_contains?: InputMaybe<Scalars['String']>;
  /** All values not ending with the given string */
  manufacturerLink_not_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  manufacturerLink_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** All values not starting with the given string. */
  manufacturerLink_not_starts_with?: InputMaybe<Scalars['String']>;
  /** All values starting with the given string. */
  manufacturerLink_starts_with?: InputMaybe<Scalars['String']>;
  /** All values containing the given string. */
  manufacturer_contains?: InputMaybe<Scalars['String']>;
  /** All values ending with the given string. */
  manufacturer_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are contained in given list. */
  manufacturer_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** All values that are not equal to given value. */
  manufacturer_not?: InputMaybe<Scalars['String']>;
  /** All values not containing the given string. */
  manufacturer_not_contains?: InputMaybe<Scalars['String']>;
  /** All values not ending with the given string */
  manufacturer_not_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  manufacturer_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** All values not starting with the given string. */
  manufacturer_not_starts_with?: InputMaybe<Scalars['String']>;
  /** All values starting with the given string. */
  manufacturer_starts_with?: InputMaybe<Scalars['String']>;
  newProduct?: InputMaybe<Scalars['Boolean']>;
  /** All values that are not equal to given value. */
  newProduct_not?: InputMaybe<Scalars['Boolean']>;
  onDiscount?: InputMaybe<Scalars['Boolean']>;
  /** All values that are not equal to given value. */
  onDiscount_not?: InputMaybe<Scalars['Boolean']>;
  price?: InputMaybe<Scalars['Int']>;
  /** All values greater than the given value. */
  price_gt?: InputMaybe<Scalars['Int']>;
  /** All values greater than or equal the given value. */
  price_gte?: InputMaybe<Scalars['Int']>;
  /** All values that are contained in given list. */
  price_in?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
  /** All values less than the given value. */
  price_lt?: InputMaybe<Scalars['Int']>;
  /** All values less than or equal the given value. */
  price_lte?: InputMaybe<Scalars['Int']>;
  /** All values that are not equal to given value. */
  price_not?: InputMaybe<Scalars['Int']>;
  /** All values that are not contained in given list. */
  price_not_in?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
  promotion?: InputMaybe<Scalars['Boolean']>;
  /** All values that are not equal to given value. */
  promotion_not?: InputMaybe<Scalars['Boolean']>;
  publishedAt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  publishedAt_gt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  publishedAt_gte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  publishedAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  /** All values less than the given value. */
  publishedAt_lt?: InputMaybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  publishedAt_lte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  publishedAt_not?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not contained in given list. */
  publishedAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  publishedBy?: InputMaybe<UserWhereInput>;
  scheduledIn_every?: InputMaybe<ScheduledOperationWhereInput>;
  scheduledIn_none?: InputMaybe<ScheduledOperationWhereInput>;
  scheduledIn_some?: InputMaybe<ScheduledOperationWhereInput>;
  slug?: InputMaybe<Scalars['String']>;
  /** All values containing the given string. */
  slug_contains?: InputMaybe<Scalars['String']>;
  /** All values ending with the given string. */
  slug_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are contained in given list. */
  slug_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** All values that are not equal to given value. */
  slug_not?: InputMaybe<Scalars['String']>;
  /** All values not containing the given string. */
  slug_not_contains?: InputMaybe<Scalars['String']>;
  /** All values not ending with the given string */
  slug_not_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  slug_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** All values not starting with the given string. */
  slug_not_starts_with?: InputMaybe<Scalars['String']>;
  /** All values starting with the given string. */
  slug_starts_with?: InputMaybe<Scalars['String']>;
  stock?: InputMaybe<Scalars['Int']>;
  /** All values greater than the given value. */
  stock_gt?: InputMaybe<Scalars['Int']>;
  /** All values greater than or equal the given value. */
  stock_gte?: InputMaybe<Scalars['Int']>;
  /** All values that are contained in given list. */
  stock_in?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
  /** All values less than the given value. */
  stock_lt?: InputMaybe<Scalars['Int']>;
  /** All values less than or equal the given value. */
  stock_lte?: InputMaybe<Scalars['Int']>;
  /** All values that are not equal to given value. */
  stock_not?: InputMaybe<Scalars['Int']>;
  /** All values that are not contained in given list. */
  stock_not_in?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
  subtitle?: InputMaybe<Scalars['String']>;
  /** All values containing the given string. */
  subtitle_contains?: InputMaybe<Scalars['String']>;
  /** All values ending with the given string. */
  subtitle_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are contained in given list. */
  subtitle_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** All values that are not equal to given value. */
  subtitle_not?: InputMaybe<Scalars['String']>;
  /** All values not containing the given string. */
  subtitle_not_contains?: InputMaybe<Scalars['String']>;
  /** All values not ending with the given string */
  subtitle_not_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  subtitle_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** All values not starting with the given string. */
  subtitle_not_starts_with?: InputMaybe<Scalars['String']>;
  /** All values starting with the given string. */
  subtitle_starts_with?: InputMaybe<Scalars['String']>;
  title?: InputMaybe<Scalars['String']>;
  /** All values containing the given string. */
  title_contains?: InputMaybe<Scalars['String']>;
  /** All values ending with the given string. */
  title_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are contained in given list. */
  title_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** All values that are not equal to given value. */
  title_not?: InputMaybe<Scalars['String']>;
  /** All values not containing the given string. */
  title_not_contains?: InputMaybe<Scalars['String']>;
  /** All values not ending with the given string */
  title_not_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  title_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** All values not starting with the given string. */
  title_not_starts_with?: InputMaybe<Scalars['String']>;
  /** All values starting with the given string. */
  title_starts_with?: InputMaybe<Scalars['String']>;
  updatedAt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  updatedAt_gt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  updatedAt_gte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  updatedAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  /** All values less than the given value. */
  updatedAt_lt?: InputMaybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  updatedAt_lte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  updatedAt_not?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not contained in given list. */
  updatedAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  updatedBy?: InputMaybe<UserWhereInput>;
  warranty?: InputMaybe<Scalars['Int']>;
  /** All values greater than the given value. */
  warranty_gt?: InputMaybe<Scalars['Int']>;
  /** All values greater than or equal the given value. */
  warranty_gte?: InputMaybe<Scalars['Int']>;
  /** All values that are contained in given list. */
  warranty_in?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
  /** All values less than the given value. */
  warranty_lt?: InputMaybe<Scalars['Int']>;
  /** All values less than or equal the given value. */
  warranty_lte?: InputMaybe<Scalars['Int']>;
  /** All values that are not equal to given value. */
  warranty_not?: InputMaybe<Scalars['Int']>;
  /** All values that are not contained in given list. */
  warranty_not_in?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
};

/** The document in stages filter allows specifying a stage entry to cross compare the same document between different stages */
export type MotherboardWhereStageInput = {
  /** Logical AND on all given filters. */
  AND?: InputMaybe<Array<MotherboardWhereStageInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: InputMaybe<Array<MotherboardWhereStageInput>>;
  /** Logical OR on all given filters. */
  OR?: InputMaybe<Array<MotherboardWhereStageInput>>;
  /** This field contains fields which can be set as true or false to specify an internal comparison */
  compareWithParent?: InputMaybe<MotherboardWhereComparatorInput>;
  /** Specify the stage to compare with */
  stage?: InputMaybe<Stage>;
};

/** References Motherboard record uniquely */
export type MotherboardWhereUniqueInput = {
  id?: InputMaybe<Scalars['ID']>;
  slug?: InputMaybe<Scalars['String']>;
  title?: InputMaybe<Scalars['String']>;
};

export type Mutation = {
  __typename?: 'Mutation';
  /**
   * Create one asset
   * @deprecated Asset mutations will be overhauled soon
   */
  createAsset?: Maybe<Asset>;
  /** Create one cPU */
  createCPU?: Maybe<Cpu>;
  /** Create one gPU */
  createGPU?: Maybe<Gpu>;
  /** Create one laptop */
  createLaptop?: Maybe<Laptop>;
  /** Create one motherboard */
  createMotherboard?: Maybe<Motherboard>;
  /** Create one scheduledRelease */
  createScheduledRelease?: Maybe<ScheduledRelease>;
  /** Create one storageEquipment */
  createStorageEquipment?: Maybe<StorageEquipment>;
  /** Delete one asset from _all_ existing stages. Returns deleted document. */
  deleteAsset?: Maybe<Asset>;
  /** Delete one cPU from _all_ existing stages. Returns deleted document. */
  deleteCPU?: Maybe<Cpu>;
  /** Delete one gPU from _all_ existing stages. Returns deleted document. */
  deleteGPU?: Maybe<Gpu>;
  /** Delete one laptop from _all_ existing stages. Returns deleted document. */
  deleteLaptop?: Maybe<Laptop>;
  /**
   * Delete many Asset documents
   * @deprecated Please use the new paginated many mutation (deleteManyAssetsConnection)
   */
  deleteManyAssets: BatchPayload;
  /** Delete many Asset documents, return deleted documents */
  deleteManyAssetsConnection: AssetConnection;
  /**
   * Delete many CPU documents
   * @deprecated Please use the new paginated many mutation (deleteManyCPUsConnection)
   */
  deleteManyCPUs: BatchPayload;
  /** Delete many CPU documents, return deleted documents */
  deleteManyCPUsConnection: CpuConnection;
  /**
   * Delete many GPU documents
   * @deprecated Please use the new paginated many mutation (deleteManyGPUsConnection)
   */
  deleteManyGPUs: BatchPayload;
  /** Delete many GPU documents, return deleted documents */
  deleteManyGPUsConnection: GpuConnection;
  /**
   * Delete many Laptop documents
   * @deprecated Please use the new paginated many mutation (deleteManyLaptopsConnection)
   */
  deleteManyLaptops: BatchPayload;
  /** Delete many Laptop documents, return deleted documents */
  deleteManyLaptopsConnection: LaptopConnection;
  /**
   * Delete many Motherboard documents
   * @deprecated Please use the new paginated many mutation (deleteManyMotherboardsConnection)
   */
  deleteManyMotherboards: BatchPayload;
  /** Delete many Motherboard documents, return deleted documents */
  deleteManyMotherboardsConnection: MotherboardConnection;
  /**
   * Delete many StorageEquipment documents
   * @deprecated Please use the new paginated many mutation (deleteManyStorage_EquipmentConnection)
   */
  deleteManyStorage_Equipment: BatchPayload;
  /** Delete many StorageEquipment documents, return deleted documents */
  deleteManyStorage_EquipmentConnection: StorageEquipmentConnection;
  /** Delete one motherboard from _all_ existing stages. Returns deleted document. */
  deleteMotherboard?: Maybe<Motherboard>;
  /** Delete and return scheduled operation */
  deleteScheduledOperation?: Maybe<ScheduledOperation>;
  /** Delete one scheduledRelease from _all_ existing stages. Returns deleted document. */
  deleteScheduledRelease?: Maybe<ScheduledRelease>;
  /** Delete one storageEquipment from _all_ existing stages. Returns deleted document. */
  deleteStorageEquipment?: Maybe<StorageEquipment>;
  /** Publish one asset */
  publishAsset?: Maybe<Asset>;
  /** Publish one cPU */
  publishCPU?: Maybe<Cpu>;
  /** Publish one gPU */
  publishGPU?: Maybe<Gpu>;
  /** Publish one laptop */
  publishLaptop?: Maybe<Laptop>;
  /**
   * Publish many Asset documents
   * @deprecated Please use the new paginated many mutation (publishManyAssetsConnection)
   */
  publishManyAssets: BatchPayload;
  /** Publish many Asset documents */
  publishManyAssetsConnection: AssetConnection;
  /**
   * Publish many CPU documents
   * @deprecated Please use the new paginated many mutation (publishManyCPUsConnection)
   */
  publishManyCPUs: BatchPayload;
  /** Publish many CPU documents */
  publishManyCPUsConnection: CpuConnection;
  /**
   * Publish many GPU documents
   * @deprecated Please use the new paginated many mutation (publishManyGPUsConnection)
   */
  publishManyGPUs: BatchPayload;
  /** Publish many GPU documents */
  publishManyGPUsConnection: GpuConnection;
  /**
   * Publish many Laptop documents
   * @deprecated Please use the new paginated many mutation (publishManyLaptopsConnection)
   */
  publishManyLaptops: BatchPayload;
  /** Publish many Laptop documents */
  publishManyLaptopsConnection: LaptopConnection;
  /**
   * Publish many Motherboard documents
   * @deprecated Please use the new paginated many mutation (publishManyMotherboardsConnection)
   */
  publishManyMotherboards: BatchPayload;
  /** Publish many Motherboard documents */
  publishManyMotherboardsConnection: MotherboardConnection;
  /**
   * Publish many StorageEquipment documents
   * @deprecated Please use the new paginated many mutation (publishManyStorage_EquipmentConnection)
   */
  publishManyStorage_Equipment: BatchPayload;
  /** Publish many StorageEquipment documents */
  publishManyStorage_EquipmentConnection: StorageEquipmentConnection;
  /** Publish one motherboard */
  publishMotherboard?: Maybe<Motherboard>;
  /** Publish one storageEquipment */
  publishStorageEquipment?: Maybe<StorageEquipment>;
  /** Schedule to publish one asset */
  schedulePublishAsset?: Maybe<Asset>;
  /** Schedule to publish one cPU */
  schedulePublishCPU?: Maybe<Cpu>;
  /** Schedule to publish one gPU */
  schedulePublishGPU?: Maybe<Gpu>;
  /** Schedule to publish one laptop */
  schedulePublishLaptop?: Maybe<Laptop>;
  /** Schedule to publish one motherboard */
  schedulePublishMotherboard?: Maybe<Motherboard>;
  /** Schedule to publish one storageEquipment */
  schedulePublishStorageEquipment?: Maybe<StorageEquipment>;
  /** Unpublish one asset from selected stages. Unpublish either the complete document with its relations, localizations and base data or specific localizations only. */
  scheduleUnpublishAsset?: Maybe<Asset>;
  /** Unpublish one cPU from selected stages. Unpublish either the complete document with its relations, localizations and base data or specific localizations only. */
  scheduleUnpublishCPU?: Maybe<Cpu>;
  /** Unpublish one gPU from selected stages. Unpublish either the complete document with its relations, localizations and base data or specific localizations only. */
  scheduleUnpublishGPU?: Maybe<Gpu>;
  /** Unpublish one laptop from selected stages. Unpublish either the complete document with its relations, localizations and base data or specific localizations only. */
  scheduleUnpublishLaptop?: Maybe<Laptop>;
  /** Unpublish one motherboard from selected stages. Unpublish either the complete document with its relations, localizations and base data or specific localizations only. */
  scheduleUnpublishMotherboard?: Maybe<Motherboard>;
  /** Unpublish one storageEquipment from selected stages. Unpublish either the complete document with its relations, localizations and base data or specific localizations only. */
  scheduleUnpublishStorageEquipment?: Maybe<StorageEquipment>;
  /** Unpublish one asset from selected stages. Unpublish either the complete document with its relations, localizations and base data or specific localizations only. */
  unpublishAsset?: Maybe<Asset>;
  /** Unpublish one cPU from selected stages. Unpublish either the complete document with its relations, localizations and base data or specific localizations only. */
  unpublishCPU?: Maybe<Cpu>;
  /** Unpublish one gPU from selected stages. Unpublish either the complete document with its relations, localizations and base data or specific localizations only. */
  unpublishGPU?: Maybe<Gpu>;
  /** Unpublish one laptop from selected stages. Unpublish either the complete document with its relations, localizations and base data or specific localizations only. */
  unpublishLaptop?: Maybe<Laptop>;
  /**
   * Unpublish many Asset documents
   * @deprecated Please use the new paginated many mutation (unpublishManyAssetsConnection)
   */
  unpublishManyAssets: BatchPayload;
  /** Find many Asset documents that match criteria in specified stage and unpublish from target stages */
  unpublishManyAssetsConnection: AssetConnection;
  /**
   * Unpublish many CPU documents
   * @deprecated Please use the new paginated many mutation (unpublishManyCPUsConnection)
   */
  unpublishManyCPUs: BatchPayload;
  /** Find many CPU documents that match criteria in specified stage and unpublish from target stages */
  unpublishManyCPUsConnection: CpuConnection;
  /**
   * Unpublish many GPU documents
   * @deprecated Please use the new paginated many mutation (unpublishManyGPUsConnection)
   */
  unpublishManyGPUs: BatchPayload;
  /** Find many GPU documents that match criteria in specified stage and unpublish from target stages */
  unpublishManyGPUsConnection: GpuConnection;
  /**
   * Unpublish many Laptop documents
   * @deprecated Please use the new paginated many mutation (unpublishManyLaptopsConnection)
   */
  unpublishManyLaptops: BatchPayload;
  /** Find many Laptop documents that match criteria in specified stage and unpublish from target stages */
  unpublishManyLaptopsConnection: LaptopConnection;
  /**
   * Unpublish many Motherboard documents
   * @deprecated Please use the new paginated many mutation (unpublishManyMotherboardsConnection)
   */
  unpublishManyMotherboards: BatchPayload;
  /** Find many Motherboard documents that match criteria in specified stage and unpublish from target stages */
  unpublishManyMotherboardsConnection: MotherboardConnection;
  /**
   * Unpublish many StorageEquipment documents
   * @deprecated Please use the new paginated many mutation (unpublishManyStorage_EquipmentConnection)
   */
  unpublishManyStorage_Equipment: BatchPayload;
  /** Find many StorageEquipment documents that match criteria in specified stage and unpublish from target stages */
  unpublishManyStorage_EquipmentConnection: StorageEquipmentConnection;
  /** Unpublish one motherboard from selected stages. Unpublish either the complete document with its relations, localizations and base data or specific localizations only. */
  unpublishMotherboard?: Maybe<Motherboard>;
  /** Unpublish one storageEquipment from selected stages. Unpublish either the complete document with its relations, localizations and base data or specific localizations only. */
  unpublishStorageEquipment?: Maybe<StorageEquipment>;
  /** Update one asset */
  updateAsset?: Maybe<Asset>;
  /** Update one cPU */
  updateCPU?: Maybe<Cpu>;
  /** Update one gPU */
  updateGPU?: Maybe<Gpu>;
  /** Update one laptop */
  updateLaptop?: Maybe<Laptop>;
  /**
   * Update many assets
   * @deprecated Please use the new paginated many mutation (updateManyAssetsConnection)
   */
  updateManyAssets: BatchPayload;
  /** Update many Asset documents */
  updateManyAssetsConnection: AssetConnection;
  /**
   * Update many cPUs
   * @deprecated Please use the new paginated many mutation (updateManyCPUsConnection)
   */
  updateManyCPUs: BatchPayload;
  /** Update many CPU documents */
  updateManyCPUsConnection: CpuConnection;
  /**
   * Update many gPUs
   * @deprecated Please use the new paginated many mutation (updateManyGPUsConnection)
   */
  updateManyGPUs: BatchPayload;
  /** Update many GPU documents */
  updateManyGPUsConnection: GpuConnection;
  /**
   * Update many laptops
   * @deprecated Please use the new paginated many mutation (updateManyLaptopsConnection)
   */
  updateManyLaptops: BatchPayload;
  /** Update many Laptop documents */
  updateManyLaptopsConnection: LaptopConnection;
  /**
   * Update many motherboards
   * @deprecated Please use the new paginated many mutation (updateManyMotherboardsConnection)
   */
  updateManyMotherboards: BatchPayload;
  /** Update many Motherboard documents */
  updateManyMotherboardsConnection: MotherboardConnection;
  /**
   * Update many storage_Equipment
   * @deprecated Please use the new paginated many mutation (updateManyStorage_EquipmentConnection)
   */
  updateManyStorage_Equipment: BatchPayload;
  /** Update many StorageEquipment documents */
  updateManyStorage_EquipmentConnection: StorageEquipmentConnection;
  /** Update one motherboard */
  updateMotherboard?: Maybe<Motherboard>;
  /** Update one scheduledRelease */
  updateScheduledRelease?: Maybe<ScheduledRelease>;
  /** Update one storageEquipment */
  updateStorageEquipment?: Maybe<StorageEquipment>;
  /** Upsert one asset */
  upsertAsset?: Maybe<Asset>;
  /** Upsert one cPU */
  upsertCPU?: Maybe<Cpu>;
  /** Upsert one gPU */
  upsertGPU?: Maybe<Gpu>;
  /** Upsert one laptop */
  upsertLaptop?: Maybe<Laptop>;
  /** Upsert one motherboard */
  upsertMotherboard?: Maybe<Motherboard>;
  /** Upsert one storageEquipment */
  upsertStorageEquipment?: Maybe<StorageEquipment>;
};


export type MutationCreateAssetArgs = {
  data: AssetCreateInput;
};


export type MutationCreateCpuArgs = {
  data: CpuCreateInput;
};


export type MutationCreateGpuArgs = {
  data: GpuCreateInput;
};


export type MutationCreateLaptopArgs = {
  data: LaptopCreateInput;
};


export type MutationCreateMotherboardArgs = {
  data: MotherboardCreateInput;
};


export type MutationCreateScheduledReleaseArgs = {
  data: ScheduledReleaseCreateInput;
};


export type MutationCreateStorageEquipmentArgs = {
  data: StorageEquipmentCreateInput;
};


export type MutationDeleteAssetArgs = {
  where: AssetWhereUniqueInput;
};


export type MutationDeleteCpuArgs = {
  where: CpuWhereUniqueInput;
};


export type MutationDeleteGpuArgs = {
  where: GpuWhereUniqueInput;
};


export type MutationDeleteLaptopArgs = {
  where: LaptopWhereUniqueInput;
};


export type MutationDeleteManyAssetsArgs = {
  where?: InputMaybe<AssetManyWhereInput>;
};


export type MutationDeleteManyAssetsConnectionArgs = {
  after?: InputMaybe<Scalars['ID']>;
  before?: InputMaybe<Scalars['ID']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  skip?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<AssetManyWhereInput>;
};


export type MutationDeleteManyCpUsArgs = {
  where?: InputMaybe<CpuManyWhereInput>;
};


export type MutationDeleteManyCpUsConnectionArgs = {
  after?: InputMaybe<Scalars['ID']>;
  before?: InputMaybe<Scalars['ID']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  skip?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<CpuManyWhereInput>;
};


export type MutationDeleteManyGpUsArgs = {
  where?: InputMaybe<GpuManyWhereInput>;
};


export type MutationDeleteManyGpUsConnectionArgs = {
  after?: InputMaybe<Scalars['ID']>;
  before?: InputMaybe<Scalars['ID']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  skip?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<GpuManyWhereInput>;
};


export type MutationDeleteManyLaptopsArgs = {
  where?: InputMaybe<LaptopManyWhereInput>;
};


export type MutationDeleteManyLaptopsConnectionArgs = {
  after?: InputMaybe<Scalars['ID']>;
  before?: InputMaybe<Scalars['ID']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  skip?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<LaptopManyWhereInput>;
};


export type MutationDeleteManyMotherboardsArgs = {
  where?: InputMaybe<MotherboardManyWhereInput>;
};


export type MutationDeleteManyMotherboardsConnectionArgs = {
  after?: InputMaybe<Scalars['ID']>;
  before?: InputMaybe<Scalars['ID']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  skip?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<MotherboardManyWhereInput>;
};


export type MutationDeleteManyStorage_EquipmentArgs = {
  where?: InputMaybe<StorageEquipmentManyWhereInput>;
};


export type MutationDeleteManyStorage_EquipmentConnectionArgs = {
  after?: InputMaybe<Scalars['ID']>;
  before?: InputMaybe<Scalars['ID']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  skip?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<StorageEquipmentManyWhereInput>;
};


export type MutationDeleteMotherboardArgs = {
  where: MotherboardWhereUniqueInput;
};


export type MutationDeleteScheduledOperationArgs = {
  where: ScheduledOperationWhereUniqueInput;
};


export type MutationDeleteScheduledReleaseArgs = {
  where: ScheduledReleaseWhereUniqueInput;
};


export type MutationDeleteStorageEquipmentArgs = {
  where: StorageEquipmentWhereUniqueInput;
};


export type MutationPublishAssetArgs = {
  locales?: InputMaybe<Array<Locale>>;
  publishBase?: InputMaybe<Scalars['Boolean']>;
  to?: Array<Stage>;
  where: AssetWhereUniqueInput;
  withDefaultLocale?: InputMaybe<Scalars['Boolean']>;
};


export type MutationPublishCpuArgs = {
  to?: Array<Stage>;
  where: CpuWhereUniqueInput;
};


export type MutationPublishGpuArgs = {
  to?: Array<Stage>;
  where: GpuWhereUniqueInput;
};


export type MutationPublishLaptopArgs = {
  to?: Array<Stage>;
  where: LaptopWhereUniqueInput;
};


export type MutationPublishManyAssetsArgs = {
  locales?: InputMaybe<Array<Locale>>;
  publishBase?: InputMaybe<Scalars['Boolean']>;
  to?: Array<Stage>;
  where?: InputMaybe<AssetManyWhereInput>;
  withDefaultLocale?: InputMaybe<Scalars['Boolean']>;
};


export type MutationPublishManyAssetsConnectionArgs = {
  after?: InputMaybe<Scalars['ID']>;
  before?: InputMaybe<Scalars['ID']>;
  first?: InputMaybe<Scalars['Int']>;
  from?: InputMaybe<Stage>;
  last?: InputMaybe<Scalars['Int']>;
  locales?: InputMaybe<Array<Locale>>;
  publishBase?: InputMaybe<Scalars['Boolean']>;
  skip?: InputMaybe<Scalars['Int']>;
  to?: Array<Stage>;
  where?: InputMaybe<AssetManyWhereInput>;
  withDefaultLocale?: InputMaybe<Scalars['Boolean']>;
};


export type MutationPublishManyCpUsArgs = {
  to?: Array<Stage>;
  where?: InputMaybe<CpuManyWhereInput>;
};


export type MutationPublishManyCpUsConnectionArgs = {
  after?: InputMaybe<Scalars['ID']>;
  before?: InputMaybe<Scalars['ID']>;
  first?: InputMaybe<Scalars['Int']>;
  from?: InputMaybe<Stage>;
  last?: InputMaybe<Scalars['Int']>;
  skip?: InputMaybe<Scalars['Int']>;
  to?: Array<Stage>;
  where?: InputMaybe<CpuManyWhereInput>;
};


export type MutationPublishManyGpUsArgs = {
  to?: Array<Stage>;
  where?: InputMaybe<GpuManyWhereInput>;
};


export type MutationPublishManyGpUsConnectionArgs = {
  after?: InputMaybe<Scalars['ID']>;
  before?: InputMaybe<Scalars['ID']>;
  first?: InputMaybe<Scalars['Int']>;
  from?: InputMaybe<Stage>;
  last?: InputMaybe<Scalars['Int']>;
  skip?: InputMaybe<Scalars['Int']>;
  to?: Array<Stage>;
  where?: InputMaybe<GpuManyWhereInput>;
};


export type MutationPublishManyLaptopsArgs = {
  to?: Array<Stage>;
  where?: InputMaybe<LaptopManyWhereInput>;
};


export type MutationPublishManyLaptopsConnectionArgs = {
  after?: InputMaybe<Scalars['ID']>;
  before?: InputMaybe<Scalars['ID']>;
  first?: InputMaybe<Scalars['Int']>;
  from?: InputMaybe<Stage>;
  last?: InputMaybe<Scalars['Int']>;
  skip?: InputMaybe<Scalars['Int']>;
  to?: Array<Stage>;
  where?: InputMaybe<LaptopManyWhereInput>;
};


export type MutationPublishManyMotherboardsArgs = {
  to?: Array<Stage>;
  where?: InputMaybe<MotherboardManyWhereInput>;
};


export type MutationPublishManyMotherboardsConnectionArgs = {
  after?: InputMaybe<Scalars['ID']>;
  before?: InputMaybe<Scalars['ID']>;
  first?: InputMaybe<Scalars['Int']>;
  from?: InputMaybe<Stage>;
  last?: InputMaybe<Scalars['Int']>;
  skip?: InputMaybe<Scalars['Int']>;
  to?: Array<Stage>;
  where?: InputMaybe<MotherboardManyWhereInput>;
};


export type MutationPublishManyStorage_EquipmentArgs = {
  to?: Array<Stage>;
  where?: InputMaybe<StorageEquipmentManyWhereInput>;
};


export type MutationPublishManyStorage_EquipmentConnectionArgs = {
  after?: InputMaybe<Scalars['ID']>;
  before?: InputMaybe<Scalars['ID']>;
  first?: InputMaybe<Scalars['Int']>;
  from?: InputMaybe<Stage>;
  last?: InputMaybe<Scalars['Int']>;
  skip?: InputMaybe<Scalars['Int']>;
  to?: Array<Stage>;
  where?: InputMaybe<StorageEquipmentManyWhereInput>;
};


export type MutationPublishMotherboardArgs = {
  to?: Array<Stage>;
  where: MotherboardWhereUniqueInput;
};


export type MutationPublishStorageEquipmentArgs = {
  to?: Array<Stage>;
  where: StorageEquipmentWhereUniqueInput;
};


export type MutationSchedulePublishAssetArgs = {
  locales?: InputMaybe<Array<Locale>>;
  publishBase?: InputMaybe<Scalars['Boolean']>;
  releaseAt?: InputMaybe<Scalars['DateTime']>;
  releaseId?: InputMaybe<Scalars['String']>;
  to?: Array<Stage>;
  where: AssetWhereUniqueInput;
  withDefaultLocale?: InputMaybe<Scalars['Boolean']>;
};


export type MutationSchedulePublishCpuArgs = {
  releaseAt?: InputMaybe<Scalars['DateTime']>;
  releaseId?: InputMaybe<Scalars['String']>;
  to?: Array<Stage>;
  where: CpuWhereUniqueInput;
};


export type MutationSchedulePublishGpuArgs = {
  releaseAt?: InputMaybe<Scalars['DateTime']>;
  releaseId?: InputMaybe<Scalars['String']>;
  to?: Array<Stage>;
  where: GpuWhereUniqueInput;
};


export type MutationSchedulePublishLaptopArgs = {
  releaseAt?: InputMaybe<Scalars['DateTime']>;
  releaseId?: InputMaybe<Scalars['String']>;
  to?: Array<Stage>;
  where: LaptopWhereUniqueInput;
};


export type MutationSchedulePublishMotherboardArgs = {
  releaseAt?: InputMaybe<Scalars['DateTime']>;
  releaseId?: InputMaybe<Scalars['String']>;
  to?: Array<Stage>;
  where: MotherboardWhereUniqueInput;
};


export type MutationSchedulePublishStorageEquipmentArgs = {
  releaseAt?: InputMaybe<Scalars['DateTime']>;
  releaseId?: InputMaybe<Scalars['String']>;
  to?: Array<Stage>;
  where: StorageEquipmentWhereUniqueInput;
};


export type MutationScheduleUnpublishAssetArgs = {
  from?: Array<Stage>;
  locales?: InputMaybe<Array<Locale>>;
  releaseAt?: InputMaybe<Scalars['DateTime']>;
  releaseId?: InputMaybe<Scalars['String']>;
  unpublishBase?: InputMaybe<Scalars['Boolean']>;
  where: AssetWhereUniqueInput;
};


export type MutationScheduleUnpublishCpuArgs = {
  from?: Array<Stage>;
  releaseAt?: InputMaybe<Scalars['DateTime']>;
  releaseId?: InputMaybe<Scalars['String']>;
  where: CpuWhereUniqueInput;
};


export type MutationScheduleUnpublishGpuArgs = {
  from?: Array<Stage>;
  releaseAt?: InputMaybe<Scalars['DateTime']>;
  releaseId?: InputMaybe<Scalars['String']>;
  where: GpuWhereUniqueInput;
};


export type MutationScheduleUnpublishLaptopArgs = {
  from?: Array<Stage>;
  releaseAt?: InputMaybe<Scalars['DateTime']>;
  releaseId?: InputMaybe<Scalars['String']>;
  where: LaptopWhereUniqueInput;
};


export type MutationScheduleUnpublishMotherboardArgs = {
  from?: Array<Stage>;
  releaseAt?: InputMaybe<Scalars['DateTime']>;
  releaseId?: InputMaybe<Scalars['String']>;
  where: MotherboardWhereUniqueInput;
};


export type MutationScheduleUnpublishStorageEquipmentArgs = {
  from?: Array<Stage>;
  releaseAt?: InputMaybe<Scalars['DateTime']>;
  releaseId?: InputMaybe<Scalars['String']>;
  where: StorageEquipmentWhereUniqueInput;
};


export type MutationUnpublishAssetArgs = {
  from?: Array<Stage>;
  locales?: InputMaybe<Array<Locale>>;
  unpublishBase?: InputMaybe<Scalars['Boolean']>;
  where: AssetWhereUniqueInput;
};


export type MutationUnpublishCpuArgs = {
  from?: Array<Stage>;
  where: CpuWhereUniqueInput;
};


export type MutationUnpublishGpuArgs = {
  from?: Array<Stage>;
  where: GpuWhereUniqueInput;
};


export type MutationUnpublishLaptopArgs = {
  from?: Array<Stage>;
  where: LaptopWhereUniqueInput;
};


export type MutationUnpublishManyAssetsArgs = {
  from?: Array<Stage>;
  locales?: InputMaybe<Array<Locale>>;
  unpublishBase?: InputMaybe<Scalars['Boolean']>;
  where?: InputMaybe<AssetManyWhereInput>;
};


export type MutationUnpublishManyAssetsConnectionArgs = {
  after?: InputMaybe<Scalars['ID']>;
  before?: InputMaybe<Scalars['ID']>;
  first?: InputMaybe<Scalars['Int']>;
  from?: Array<Stage>;
  last?: InputMaybe<Scalars['Int']>;
  locales?: InputMaybe<Array<Locale>>;
  skip?: InputMaybe<Scalars['Int']>;
  stage?: InputMaybe<Stage>;
  unpublishBase?: InputMaybe<Scalars['Boolean']>;
  where?: InputMaybe<AssetManyWhereInput>;
};


export type MutationUnpublishManyCpUsArgs = {
  from?: Array<Stage>;
  where?: InputMaybe<CpuManyWhereInput>;
};


export type MutationUnpublishManyCpUsConnectionArgs = {
  after?: InputMaybe<Scalars['ID']>;
  before?: InputMaybe<Scalars['ID']>;
  first?: InputMaybe<Scalars['Int']>;
  from?: Array<Stage>;
  last?: InputMaybe<Scalars['Int']>;
  skip?: InputMaybe<Scalars['Int']>;
  stage?: InputMaybe<Stage>;
  where?: InputMaybe<CpuManyWhereInput>;
};


export type MutationUnpublishManyGpUsArgs = {
  from?: Array<Stage>;
  where?: InputMaybe<GpuManyWhereInput>;
};


export type MutationUnpublishManyGpUsConnectionArgs = {
  after?: InputMaybe<Scalars['ID']>;
  before?: InputMaybe<Scalars['ID']>;
  first?: InputMaybe<Scalars['Int']>;
  from?: Array<Stage>;
  last?: InputMaybe<Scalars['Int']>;
  skip?: InputMaybe<Scalars['Int']>;
  stage?: InputMaybe<Stage>;
  where?: InputMaybe<GpuManyWhereInput>;
};


export type MutationUnpublishManyLaptopsArgs = {
  from?: Array<Stage>;
  where?: InputMaybe<LaptopManyWhereInput>;
};


export type MutationUnpublishManyLaptopsConnectionArgs = {
  after?: InputMaybe<Scalars['ID']>;
  before?: InputMaybe<Scalars['ID']>;
  first?: InputMaybe<Scalars['Int']>;
  from?: Array<Stage>;
  last?: InputMaybe<Scalars['Int']>;
  skip?: InputMaybe<Scalars['Int']>;
  stage?: InputMaybe<Stage>;
  where?: InputMaybe<LaptopManyWhereInput>;
};


export type MutationUnpublishManyMotherboardsArgs = {
  from?: Array<Stage>;
  where?: InputMaybe<MotherboardManyWhereInput>;
};


export type MutationUnpublishManyMotherboardsConnectionArgs = {
  after?: InputMaybe<Scalars['ID']>;
  before?: InputMaybe<Scalars['ID']>;
  first?: InputMaybe<Scalars['Int']>;
  from?: Array<Stage>;
  last?: InputMaybe<Scalars['Int']>;
  skip?: InputMaybe<Scalars['Int']>;
  stage?: InputMaybe<Stage>;
  where?: InputMaybe<MotherboardManyWhereInput>;
};


export type MutationUnpublishManyStorage_EquipmentArgs = {
  from?: Array<Stage>;
  where?: InputMaybe<StorageEquipmentManyWhereInput>;
};


export type MutationUnpublishManyStorage_EquipmentConnectionArgs = {
  after?: InputMaybe<Scalars['ID']>;
  before?: InputMaybe<Scalars['ID']>;
  first?: InputMaybe<Scalars['Int']>;
  from?: Array<Stage>;
  last?: InputMaybe<Scalars['Int']>;
  skip?: InputMaybe<Scalars['Int']>;
  stage?: InputMaybe<Stage>;
  where?: InputMaybe<StorageEquipmentManyWhereInput>;
};


export type MutationUnpublishMotherboardArgs = {
  from?: Array<Stage>;
  where: MotherboardWhereUniqueInput;
};


export type MutationUnpublishStorageEquipmentArgs = {
  from?: Array<Stage>;
  where: StorageEquipmentWhereUniqueInput;
};


export type MutationUpdateAssetArgs = {
  data: AssetUpdateInput;
  where: AssetWhereUniqueInput;
};


export type MutationUpdateCpuArgs = {
  data: CpuUpdateInput;
  where: CpuWhereUniqueInput;
};


export type MutationUpdateGpuArgs = {
  data: GpuUpdateInput;
  where: GpuWhereUniqueInput;
};


export type MutationUpdateLaptopArgs = {
  data: LaptopUpdateInput;
  where: LaptopWhereUniqueInput;
};


export type MutationUpdateManyAssetsArgs = {
  data: AssetUpdateManyInput;
  where?: InputMaybe<AssetManyWhereInput>;
};


export type MutationUpdateManyAssetsConnectionArgs = {
  after?: InputMaybe<Scalars['ID']>;
  before?: InputMaybe<Scalars['ID']>;
  data: AssetUpdateManyInput;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  skip?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<AssetManyWhereInput>;
};


export type MutationUpdateManyCpUsArgs = {
  data: CpuUpdateManyInput;
  where?: InputMaybe<CpuManyWhereInput>;
};


export type MutationUpdateManyCpUsConnectionArgs = {
  after?: InputMaybe<Scalars['ID']>;
  before?: InputMaybe<Scalars['ID']>;
  data: CpuUpdateManyInput;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  skip?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<CpuManyWhereInput>;
};


export type MutationUpdateManyGpUsArgs = {
  data: GpuUpdateManyInput;
  where?: InputMaybe<GpuManyWhereInput>;
};


export type MutationUpdateManyGpUsConnectionArgs = {
  after?: InputMaybe<Scalars['ID']>;
  before?: InputMaybe<Scalars['ID']>;
  data: GpuUpdateManyInput;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  skip?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<GpuManyWhereInput>;
};


export type MutationUpdateManyLaptopsArgs = {
  data: LaptopUpdateManyInput;
  where?: InputMaybe<LaptopManyWhereInput>;
};


export type MutationUpdateManyLaptopsConnectionArgs = {
  after?: InputMaybe<Scalars['ID']>;
  before?: InputMaybe<Scalars['ID']>;
  data: LaptopUpdateManyInput;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  skip?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<LaptopManyWhereInput>;
};


export type MutationUpdateManyMotherboardsArgs = {
  data: MotherboardUpdateManyInput;
  where?: InputMaybe<MotherboardManyWhereInput>;
};


export type MutationUpdateManyMotherboardsConnectionArgs = {
  after?: InputMaybe<Scalars['ID']>;
  before?: InputMaybe<Scalars['ID']>;
  data: MotherboardUpdateManyInput;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  skip?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<MotherboardManyWhereInput>;
};


export type MutationUpdateManyStorage_EquipmentArgs = {
  data: StorageEquipmentUpdateManyInput;
  where?: InputMaybe<StorageEquipmentManyWhereInput>;
};


export type MutationUpdateManyStorage_EquipmentConnectionArgs = {
  after?: InputMaybe<Scalars['ID']>;
  before?: InputMaybe<Scalars['ID']>;
  data: StorageEquipmentUpdateManyInput;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  skip?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<StorageEquipmentManyWhereInput>;
};


export type MutationUpdateMotherboardArgs = {
  data: MotherboardUpdateInput;
  where: MotherboardWhereUniqueInput;
};


export type MutationUpdateScheduledReleaseArgs = {
  data: ScheduledReleaseUpdateInput;
  where: ScheduledReleaseWhereUniqueInput;
};


export type MutationUpdateStorageEquipmentArgs = {
  data: StorageEquipmentUpdateInput;
  where: StorageEquipmentWhereUniqueInput;
};


export type MutationUpsertAssetArgs = {
  upsert: AssetUpsertInput;
  where: AssetWhereUniqueInput;
};


export type MutationUpsertCpuArgs = {
  upsert: CpuUpsertInput;
  where: CpuWhereUniqueInput;
};


export type MutationUpsertGpuArgs = {
  upsert: GpuUpsertInput;
  where: GpuWhereUniqueInput;
};


export type MutationUpsertLaptopArgs = {
  upsert: LaptopUpsertInput;
  where: LaptopWhereUniqueInput;
};


export type MutationUpsertMotherboardArgs = {
  upsert: MotherboardUpsertInput;
  where: MotherboardWhereUniqueInput;
};


export type MutationUpsertStorageEquipmentArgs = {
  upsert: StorageEquipmentUpsertInput;
  where: StorageEquipmentWhereUniqueInput;
};

/** An object with an ID */
export type Node = {
  /** The id of the object. */
  id: Scalars['ID'];
  /** The Stage of an object */
  stage: Stage;
};

/** Information about pagination in a connection. */
export type PageInfo = {
  __typename?: 'PageInfo';
  /** When paginating forwards, the cursor to continue. */
  endCursor?: Maybe<Scalars['String']>;
  /** When paginating forwards, are there more items? */
  hasNextPage: Scalars['Boolean'];
  /** When paginating backwards, are there more items? */
  hasPreviousPage: Scalars['Boolean'];
  /** Number of items in the current page. */
  pageSize?: Maybe<Scalars['Int']>;
  /** When paginating backwards, the cursor to continue. */
  startCursor?: Maybe<Scalars['String']>;
};

export type PublishLocaleInput = {
  /** Locales to publish */
  locale: Locale;
  /** Stages to publish selected locales to */
  stages: Array<Stage>;
};

export type Query = {
  __typename?: 'Query';
  /** Retrieve a single asset */
  asset?: Maybe<Asset>;
  /** Retrieve document version */
  assetVersion?: Maybe<DocumentVersion>;
  /** Retrieve multiple assets */
  assets: Array<Asset>;
  /** Retrieve multiple assets using the Relay connection interface */
  assetsConnection: AssetConnection;
  /** Retrieve a single cPU */
  cPU?: Maybe<Cpu>;
  /** Retrieve document version */
  cPUVersion?: Maybe<DocumentVersion>;
  /** Retrieve multiple cPUs */
  cPUs: Array<Cpu>;
  /** Retrieve multiple cPUs using the Relay connection interface */
  cPUsConnection: CpuConnection;
  /** Retrieve a single gPU */
  gPU?: Maybe<Gpu>;
  /** Retrieve document version */
  gPUVersion?: Maybe<DocumentVersion>;
  /** Retrieve multiple gPUs */
  gPUs: Array<Gpu>;
  /** Retrieve multiple gPUs using the Relay connection interface */
  gPUsConnection: GpuConnection;
  /** Retrieve a single laptop */
  laptop?: Maybe<Laptop>;
  /** Retrieve document version */
  laptopVersion?: Maybe<DocumentVersion>;
  /** Retrieve multiple laptops */
  laptops: Array<Laptop>;
  /** Retrieve multiple laptops using the Relay connection interface */
  laptopsConnection: LaptopConnection;
  /** Retrieve a single motherboard */
  motherboard?: Maybe<Motherboard>;
  /** Retrieve document version */
  motherboardVersion?: Maybe<DocumentVersion>;
  /** Retrieve multiple motherboards */
  motherboards: Array<Motherboard>;
  /** Retrieve multiple motherboards using the Relay connection interface */
  motherboardsConnection: MotherboardConnection;
  /** Fetches an object given its ID */
  node?: Maybe<Node>;
  /** Retrieve a single scheduledOperation */
  scheduledOperation?: Maybe<ScheduledOperation>;
  /** Retrieve multiple scheduledOperations */
  scheduledOperations: Array<ScheduledOperation>;
  /** Retrieve multiple scheduledOperations using the Relay connection interface */
  scheduledOperationsConnection: ScheduledOperationConnection;
  /** Retrieve a single scheduledRelease */
  scheduledRelease?: Maybe<ScheduledRelease>;
  /** Retrieve multiple scheduledReleases */
  scheduledReleases: Array<ScheduledRelease>;
  /** Retrieve multiple scheduledReleases using the Relay connection interface */
  scheduledReleasesConnection: ScheduledReleaseConnection;
  /** Retrieve a single storageEquipment */
  storageEquipment?: Maybe<StorageEquipment>;
  /** Retrieve document version */
  storageEquipmentVersion?: Maybe<DocumentVersion>;
  /** Retrieve multiple storage_Equipment */
  storage_Equipment: Array<StorageEquipment>;
  /** Retrieve multiple storage_Equipment using the Relay connection interface */
  storage_EquipmentConnection: StorageEquipmentConnection;
  /** Retrieve a single user */
  user?: Maybe<User>;
  /** Retrieve multiple users */
  users: Array<User>;
  /** Retrieve multiple users using the Relay connection interface */
  usersConnection: UserConnection;
};


export type QueryAssetArgs = {
  locales?: Array<Locale>;
  stage?: Stage;
  where: AssetWhereUniqueInput;
};


export type QueryAssetVersionArgs = {
  where: VersionWhereInput;
};


export type QueryAssetsArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  locales?: Array<Locale>;
  orderBy?: InputMaybe<AssetOrderByInput>;
  skip?: InputMaybe<Scalars['Int']>;
  stage?: Stage;
  where?: InputMaybe<AssetWhereInput>;
};


export type QueryAssetsConnectionArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  locales?: Array<Locale>;
  orderBy?: InputMaybe<AssetOrderByInput>;
  skip?: InputMaybe<Scalars['Int']>;
  stage?: Stage;
  where?: InputMaybe<AssetWhereInput>;
};


export type QueryCPuArgs = {
  locales?: Array<Locale>;
  stage?: Stage;
  where: CpuWhereUniqueInput;
};


export type QueryCPuVersionArgs = {
  where: VersionWhereInput;
};


export type QueryCpUsArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  locales?: Array<Locale>;
  orderBy?: InputMaybe<CpuOrderByInput>;
  skip?: InputMaybe<Scalars['Int']>;
  stage?: Stage;
  where?: InputMaybe<CpuWhereInput>;
};


export type QueryCpUsConnectionArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  locales?: Array<Locale>;
  orderBy?: InputMaybe<CpuOrderByInput>;
  skip?: InputMaybe<Scalars['Int']>;
  stage?: Stage;
  where?: InputMaybe<CpuWhereInput>;
};


export type QueryGPuArgs = {
  locales?: Array<Locale>;
  stage?: Stage;
  where: GpuWhereUniqueInput;
};


export type QueryGPuVersionArgs = {
  where: VersionWhereInput;
};


export type QueryGpUsArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  locales?: Array<Locale>;
  orderBy?: InputMaybe<GpuOrderByInput>;
  skip?: InputMaybe<Scalars['Int']>;
  stage?: Stage;
  where?: InputMaybe<GpuWhereInput>;
};


export type QueryGpUsConnectionArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  locales?: Array<Locale>;
  orderBy?: InputMaybe<GpuOrderByInput>;
  skip?: InputMaybe<Scalars['Int']>;
  stage?: Stage;
  where?: InputMaybe<GpuWhereInput>;
};


export type QueryLaptopArgs = {
  locales?: Array<Locale>;
  stage?: Stage;
  where: LaptopWhereUniqueInput;
};


export type QueryLaptopVersionArgs = {
  where: VersionWhereInput;
};


export type QueryLaptopsArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  locales?: Array<Locale>;
  orderBy?: InputMaybe<LaptopOrderByInput>;
  skip?: InputMaybe<Scalars['Int']>;
  stage?: Stage;
  where?: InputMaybe<LaptopWhereInput>;
};


export type QueryLaptopsConnectionArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  locales?: Array<Locale>;
  orderBy?: InputMaybe<LaptopOrderByInput>;
  skip?: InputMaybe<Scalars['Int']>;
  stage?: Stage;
  where?: InputMaybe<LaptopWhereInput>;
};


export type QueryMotherboardArgs = {
  locales?: Array<Locale>;
  stage?: Stage;
  where: MotherboardWhereUniqueInput;
};


export type QueryMotherboardVersionArgs = {
  where: VersionWhereInput;
};


export type QueryMotherboardsArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  locales?: Array<Locale>;
  orderBy?: InputMaybe<MotherboardOrderByInput>;
  skip?: InputMaybe<Scalars['Int']>;
  stage?: Stage;
  where?: InputMaybe<MotherboardWhereInput>;
};


export type QueryMotherboardsConnectionArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  locales?: Array<Locale>;
  orderBy?: InputMaybe<MotherboardOrderByInput>;
  skip?: InputMaybe<Scalars['Int']>;
  stage?: Stage;
  where?: InputMaybe<MotherboardWhereInput>;
};


export type QueryNodeArgs = {
  id: Scalars['ID'];
  locales?: Array<Locale>;
  stage?: Stage;
};


export type QueryScheduledOperationArgs = {
  locales?: Array<Locale>;
  stage?: Stage;
  where: ScheduledOperationWhereUniqueInput;
};


export type QueryScheduledOperationsArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  locales?: Array<Locale>;
  orderBy?: InputMaybe<ScheduledOperationOrderByInput>;
  skip?: InputMaybe<Scalars['Int']>;
  stage?: Stage;
  where?: InputMaybe<ScheduledOperationWhereInput>;
};


export type QueryScheduledOperationsConnectionArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  locales?: Array<Locale>;
  orderBy?: InputMaybe<ScheduledOperationOrderByInput>;
  skip?: InputMaybe<Scalars['Int']>;
  stage?: Stage;
  where?: InputMaybe<ScheduledOperationWhereInput>;
};


export type QueryScheduledReleaseArgs = {
  locales?: Array<Locale>;
  stage?: Stage;
  where: ScheduledReleaseWhereUniqueInput;
};


export type QueryScheduledReleasesArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  locales?: Array<Locale>;
  orderBy?: InputMaybe<ScheduledReleaseOrderByInput>;
  skip?: InputMaybe<Scalars['Int']>;
  stage?: Stage;
  where?: InputMaybe<ScheduledReleaseWhereInput>;
};


export type QueryScheduledReleasesConnectionArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  locales?: Array<Locale>;
  orderBy?: InputMaybe<ScheduledReleaseOrderByInput>;
  skip?: InputMaybe<Scalars['Int']>;
  stage?: Stage;
  where?: InputMaybe<ScheduledReleaseWhereInput>;
};


export type QueryStorageEquipmentArgs = {
  locales?: Array<Locale>;
  stage?: Stage;
  where: StorageEquipmentWhereUniqueInput;
};


export type QueryStorageEquipmentVersionArgs = {
  where: VersionWhereInput;
};


export type QueryStorage_EquipmentArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  locales?: Array<Locale>;
  orderBy?: InputMaybe<StorageEquipmentOrderByInput>;
  skip?: InputMaybe<Scalars['Int']>;
  stage?: Stage;
  where?: InputMaybe<StorageEquipmentWhereInput>;
};


export type QueryStorage_EquipmentConnectionArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  locales?: Array<Locale>;
  orderBy?: InputMaybe<StorageEquipmentOrderByInput>;
  skip?: InputMaybe<Scalars['Int']>;
  stage?: Stage;
  where?: InputMaybe<StorageEquipmentWhereInput>;
};


export type QueryUserArgs = {
  locales?: Array<Locale>;
  stage?: Stage;
  where: UserWhereUniqueInput;
};


export type QueryUsersArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  locales?: Array<Locale>;
  orderBy?: InputMaybe<UserOrderByInput>;
  skip?: InputMaybe<Scalars['Int']>;
  stage?: Stage;
  where?: InputMaybe<UserWhereInput>;
};


export type QueryUsersConnectionArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  locales?: Array<Locale>;
  orderBy?: InputMaybe<UserOrderByInput>;
  skip?: InputMaybe<Scalars['Int']>;
  stage?: Stage;
  where?: InputMaybe<UserWhereInput>;
};

/** Representing a RGBA color value: https://developer.mozilla.org/en-US/docs/Web/CSS/color_value#rgb()_and_rgba() */
export type Rgba = {
  __typename?: 'RGBA';
  a: Scalars['RGBATransparency'];
  b: Scalars['RGBAHue'];
  g: Scalars['RGBAHue'];
  r: Scalars['RGBAHue'];
};

/** Input type representing a RGBA color value: https://developer.mozilla.org/en-US/docs/Web/CSS/color_value#rgb()_and_rgba() */
export type RgbaInput = {
  a: Scalars['RGBATransparency'];
  b: Scalars['RGBAHue'];
  g: Scalars['RGBAHue'];
  r: Scalars['RGBAHue'];
};

/** Custom type representing a rich text value comprising of raw rich text ast, html, markdown and text values */
export type RichText = {
  __typename?: 'RichText';
  /** Returns HTMl representation */
  html: Scalars['String'];
  /** Returns Markdown representation */
  markdown: Scalars['String'];
  /** Returns AST representation */
  raw: Scalars['RichTextAST'];
  /** Returns plain-text contents of RichText */
  text: Scalars['String'];
};

/** Scheduled Operation system model */
export type ScheduledOperation = Node & {
  __typename?: 'ScheduledOperation';
  affectedDocuments: Array<ScheduledOperationAffectedDocument>;
  /** The time the document was created */
  createdAt: Scalars['DateTime'];
  /** User that created this document */
  createdBy?: Maybe<User>;
  /** Operation description */
  description?: Maybe<Scalars['String']>;
  /** Get the document in other stages */
  documentInStages: Array<ScheduledOperation>;
  /** Operation error message */
  errorMessage?: Maybe<Scalars['String']>;
  /** The unique identifier */
  id: Scalars['ID'];
  /** The time the document was published. Null on documents in draft stage. */
  publishedAt?: Maybe<Scalars['DateTime']>;
  /** User that last published this document */
  publishedBy?: Maybe<User>;
  /** Raw operation payload including all details, this field is subject to change */
  rawPayload: Scalars['Json'];
  /** The release this operation is scheduled for */
  release?: Maybe<ScheduledRelease>;
  /** System stage field */
  stage: Stage;
  /** operation Status */
  status: ScheduledOperationStatus;
  /** The time the document was updated */
  updatedAt: Scalars['DateTime'];
  /** User that last updated this document */
  updatedBy?: Maybe<User>;
};


/** Scheduled Operation system model */
export type ScheduledOperationAffectedDocumentsArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  locales?: InputMaybe<Array<Locale>>;
  skip?: InputMaybe<Scalars['Int']>;
};


/** Scheduled Operation system model */
export type ScheduledOperationCreatedByArgs = {
  locales?: InputMaybe<Array<Locale>>;
};


/** Scheduled Operation system model */
export type ScheduledOperationDocumentInStagesArgs = {
  includeCurrent?: Scalars['Boolean'];
  inheritLocale?: Scalars['Boolean'];
  stages?: Array<Stage>;
};


/** Scheduled Operation system model */
export type ScheduledOperationPublishedByArgs = {
  locales?: InputMaybe<Array<Locale>>;
};


/** Scheduled Operation system model */
export type ScheduledOperationReleaseArgs = {
  locales?: InputMaybe<Array<Locale>>;
};


/** Scheduled Operation system model */
export type ScheduledOperationUpdatedByArgs = {
  locales?: InputMaybe<Array<Locale>>;
};

export type ScheduledOperationAffectedDocument = Asset | Cpu | Gpu | Laptop | Motherboard | StorageEquipment;

export type ScheduledOperationConnectInput = {
  /** Allow to specify document position in list of connected documents, will default to appending at end of list */
  position?: InputMaybe<ConnectPositionInput>;
  /** Document to connect */
  where: ScheduledOperationWhereUniqueInput;
};

/** A connection to a list of items. */
export type ScheduledOperationConnection = {
  __typename?: 'ScheduledOperationConnection';
  aggregate: Aggregate;
  /** A list of edges. */
  edges: Array<ScheduledOperationEdge>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
};

export type ScheduledOperationCreateManyInlineInput = {
  /** Connect multiple existing ScheduledOperation documents */
  connect?: InputMaybe<Array<ScheduledOperationWhereUniqueInput>>;
};

export type ScheduledOperationCreateOneInlineInput = {
  /** Connect one existing ScheduledOperation document */
  connect?: InputMaybe<ScheduledOperationWhereUniqueInput>;
};

/** An edge in a connection. */
export type ScheduledOperationEdge = {
  __typename?: 'ScheduledOperationEdge';
  /** A cursor for use in pagination. */
  cursor: Scalars['String'];
  /** The item at the end of the edge. */
  node: ScheduledOperation;
};

/** Identifies documents */
export type ScheduledOperationManyWhereInput = {
  /** Logical AND on all given filters. */
  AND?: InputMaybe<Array<ScheduledOperationWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: InputMaybe<Array<ScheduledOperationWhereInput>>;
  /** Logical OR on all given filters. */
  OR?: InputMaybe<Array<ScheduledOperationWhereInput>>;
  /** Contains search across all appropriate fields. */
  _search?: InputMaybe<Scalars['String']>;
  createdAt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  createdAt_gt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  createdAt_gte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  createdAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  /** All values less than the given value. */
  createdAt_lt?: InputMaybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  createdAt_lte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  createdAt_not?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not contained in given list. */
  createdAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  createdBy?: InputMaybe<UserWhereInput>;
  description?: InputMaybe<Scalars['String']>;
  /** All values containing the given string. */
  description_contains?: InputMaybe<Scalars['String']>;
  /** All values ending with the given string. */
  description_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are contained in given list. */
  description_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** All values that are not equal to given value. */
  description_not?: InputMaybe<Scalars['String']>;
  /** All values not containing the given string. */
  description_not_contains?: InputMaybe<Scalars['String']>;
  /** All values not ending with the given string */
  description_not_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  description_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** All values not starting with the given string. */
  description_not_starts_with?: InputMaybe<Scalars['String']>;
  /** All values starting with the given string. */
  description_starts_with?: InputMaybe<Scalars['String']>;
  errorMessage?: InputMaybe<Scalars['String']>;
  /** All values containing the given string. */
  errorMessage_contains?: InputMaybe<Scalars['String']>;
  /** All values ending with the given string. */
  errorMessage_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are contained in given list. */
  errorMessage_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** All values that are not equal to given value. */
  errorMessage_not?: InputMaybe<Scalars['String']>;
  /** All values not containing the given string. */
  errorMessage_not_contains?: InputMaybe<Scalars['String']>;
  /** All values not ending with the given string */
  errorMessage_not_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  errorMessage_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** All values not starting with the given string. */
  errorMessage_not_starts_with?: InputMaybe<Scalars['String']>;
  /** All values starting with the given string. */
  errorMessage_starts_with?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['ID']>;
  /** All values containing the given string. */
  id_contains?: InputMaybe<Scalars['ID']>;
  /** All values ending with the given string. */
  id_ends_with?: InputMaybe<Scalars['ID']>;
  /** All values that are contained in given list. */
  id_in?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  /** All values that are not equal to given value. */
  id_not?: InputMaybe<Scalars['ID']>;
  /** All values not containing the given string. */
  id_not_contains?: InputMaybe<Scalars['ID']>;
  /** All values not ending with the given string */
  id_not_ends_with?: InputMaybe<Scalars['ID']>;
  /** All values that are not contained in given list. */
  id_not_in?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  /** All values not starting with the given string. */
  id_not_starts_with?: InputMaybe<Scalars['ID']>;
  /** All values starting with the given string. */
  id_starts_with?: InputMaybe<Scalars['ID']>;
  publishedAt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  publishedAt_gt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  publishedAt_gte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  publishedAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  /** All values less than the given value. */
  publishedAt_lt?: InputMaybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  publishedAt_lte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  publishedAt_not?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not contained in given list. */
  publishedAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  publishedBy?: InputMaybe<UserWhereInput>;
  release?: InputMaybe<ScheduledReleaseWhereInput>;
  status?: InputMaybe<ScheduledOperationStatus>;
  /** All values that are contained in given list. */
  status_in?: InputMaybe<Array<InputMaybe<ScheduledOperationStatus>>>;
  /** All values that are not equal to given value. */
  status_not?: InputMaybe<ScheduledOperationStatus>;
  /** All values that are not contained in given list. */
  status_not_in?: InputMaybe<Array<InputMaybe<ScheduledOperationStatus>>>;
  updatedAt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  updatedAt_gt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  updatedAt_gte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  updatedAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  /** All values less than the given value. */
  updatedAt_lt?: InputMaybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  updatedAt_lte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  updatedAt_not?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not contained in given list. */
  updatedAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  updatedBy?: InputMaybe<UserWhereInput>;
};

export enum ScheduledOperationOrderByInput {
  CreatedAtAsc = 'createdAt_ASC',
  CreatedAtDesc = 'createdAt_DESC',
  DescriptionAsc = 'description_ASC',
  DescriptionDesc = 'description_DESC',
  ErrorMessageAsc = 'errorMessage_ASC',
  ErrorMessageDesc = 'errorMessage_DESC',
  IdAsc = 'id_ASC',
  IdDesc = 'id_DESC',
  PublishedAtAsc = 'publishedAt_ASC',
  PublishedAtDesc = 'publishedAt_DESC',
  StatusAsc = 'status_ASC',
  StatusDesc = 'status_DESC',
  UpdatedAtAsc = 'updatedAt_ASC',
  UpdatedAtDesc = 'updatedAt_DESC'
}

/** System Scheduled Operation Status */
export enum ScheduledOperationStatus {
  Canceled = 'CANCELED',
  Completed = 'COMPLETED',
  Failed = 'FAILED',
  InProgress = 'IN_PROGRESS',
  Pending = 'PENDING'
}

export type ScheduledOperationUpdateManyInlineInput = {
  /** Connect multiple existing ScheduledOperation documents */
  connect?: InputMaybe<Array<ScheduledOperationConnectInput>>;
  /** Disconnect multiple ScheduledOperation documents */
  disconnect?: InputMaybe<Array<ScheduledOperationWhereUniqueInput>>;
  /** Override currently-connected documents with multiple existing ScheduledOperation documents */
  set?: InputMaybe<Array<ScheduledOperationWhereUniqueInput>>;
};

export type ScheduledOperationUpdateOneInlineInput = {
  /** Connect existing ScheduledOperation document */
  connect?: InputMaybe<ScheduledOperationWhereUniqueInput>;
  /** Disconnect currently connected ScheduledOperation document */
  disconnect?: InputMaybe<Scalars['Boolean']>;
};

/** Identifies documents */
export type ScheduledOperationWhereInput = {
  /** Logical AND on all given filters. */
  AND?: InputMaybe<Array<ScheduledOperationWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: InputMaybe<Array<ScheduledOperationWhereInput>>;
  /** Logical OR on all given filters. */
  OR?: InputMaybe<Array<ScheduledOperationWhereInput>>;
  /** Contains search across all appropriate fields. */
  _search?: InputMaybe<Scalars['String']>;
  createdAt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  createdAt_gt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  createdAt_gte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  createdAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  /** All values less than the given value. */
  createdAt_lt?: InputMaybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  createdAt_lte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  createdAt_not?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not contained in given list. */
  createdAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  createdBy?: InputMaybe<UserWhereInput>;
  description?: InputMaybe<Scalars['String']>;
  /** All values containing the given string. */
  description_contains?: InputMaybe<Scalars['String']>;
  /** All values ending with the given string. */
  description_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are contained in given list. */
  description_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** All values that are not equal to given value. */
  description_not?: InputMaybe<Scalars['String']>;
  /** All values not containing the given string. */
  description_not_contains?: InputMaybe<Scalars['String']>;
  /** All values not ending with the given string */
  description_not_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  description_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** All values not starting with the given string. */
  description_not_starts_with?: InputMaybe<Scalars['String']>;
  /** All values starting with the given string. */
  description_starts_with?: InputMaybe<Scalars['String']>;
  errorMessage?: InputMaybe<Scalars['String']>;
  /** All values containing the given string. */
  errorMessage_contains?: InputMaybe<Scalars['String']>;
  /** All values ending with the given string. */
  errorMessage_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are contained in given list. */
  errorMessage_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** All values that are not equal to given value. */
  errorMessage_not?: InputMaybe<Scalars['String']>;
  /** All values not containing the given string. */
  errorMessage_not_contains?: InputMaybe<Scalars['String']>;
  /** All values not ending with the given string */
  errorMessage_not_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  errorMessage_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** All values not starting with the given string. */
  errorMessage_not_starts_with?: InputMaybe<Scalars['String']>;
  /** All values starting with the given string. */
  errorMessage_starts_with?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['ID']>;
  /** All values containing the given string. */
  id_contains?: InputMaybe<Scalars['ID']>;
  /** All values ending with the given string. */
  id_ends_with?: InputMaybe<Scalars['ID']>;
  /** All values that are contained in given list. */
  id_in?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  /** All values that are not equal to given value. */
  id_not?: InputMaybe<Scalars['ID']>;
  /** All values not containing the given string. */
  id_not_contains?: InputMaybe<Scalars['ID']>;
  /** All values not ending with the given string */
  id_not_ends_with?: InputMaybe<Scalars['ID']>;
  /** All values that are not contained in given list. */
  id_not_in?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  /** All values not starting with the given string. */
  id_not_starts_with?: InputMaybe<Scalars['ID']>;
  /** All values starting with the given string. */
  id_starts_with?: InputMaybe<Scalars['ID']>;
  publishedAt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  publishedAt_gt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  publishedAt_gte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  publishedAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  /** All values less than the given value. */
  publishedAt_lt?: InputMaybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  publishedAt_lte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  publishedAt_not?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not contained in given list. */
  publishedAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  publishedBy?: InputMaybe<UserWhereInput>;
  release?: InputMaybe<ScheduledReleaseWhereInput>;
  status?: InputMaybe<ScheduledOperationStatus>;
  /** All values that are contained in given list. */
  status_in?: InputMaybe<Array<InputMaybe<ScheduledOperationStatus>>>;
  /** All values that are not equal to given value. */
  status_not?: InputMaybe<ScheduledOperationStatus>;
  /** All values that are not contained in given list. */
  status_not_in?: InputMaybe<Array<InputMaybe<ScheduledOperationStatus>>>;
  updatedAt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  updatedAt_gt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  updatedAt_gte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  updatedAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  /** All values less than the given value. */
  updatedAt_lt?: InputMaybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  updatedAt_lte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  updatedAt_not?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not contained in given list. */
  updatedAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  updatedBy?: InputMaybe<UserWhereInput>;
};

/** References ScheduledOperation record uniquely */
export type ScheduledOperationWhereUniqueInput = {
  id?: InputMaybe<Scalars['ID']>;
};

/** Scheduled Release system model */
export type ScheduledRelease = Node & {
  __typename?: 'ScheduledRelease';
  /** The time the document was created */
  createdAt: Scalars['DateTime'];
  /** User that created this document */
  createdBy?: Maybe<User>;
  /** Release description */
  description?: Maybe<Scalars['String']>;
  /** Get the document in other stages */
  documentInStages: Array<ScheduledRelease>;
  /** Release error message */
  errorMessage?: Maybe<Scalars['String']>;
  /** The unique identifier */
  id: Scalars['ID'];
  /** Whether scheduled release should be run */
  isActive: Scalars['Boolean'];
  /** Whether scheduled release is implicit */
  isImplicit: Scalars['Boolean'];
  /** Operations to run with this release */
  operations: Array<ScheduledOperation>;
  /** The time the document was published. Null on documents in draft stage. */
  publishedAt?: Maybe<Scalars['DateTime']>;
  /** User that last published this document */
  publishedBy?: Maybe<User>;
  /** Release date and time */
  releaseAt?: Maybe<Scalars['DateTime']>;
  /** System stage field */
  stage: Stage;
  /** Release Status */
  status: ScheduledReleaseStatus;
  /** Release Title */
  title?: Maybe<Scalars['String']>;
  /** The time the document was updated */
  updatedAt: Scalars['DateTime'];
  /** User that last updated this document */
  updatedBy?: Maybe<User>;
};


/** Scheduled Release system model */
export type ScheduledReleaseCreatedByArgs = {
  locales?: InputMaybe<Array<Locale>>;
};


/** Scheduled Release system model */
export type ScheduledReleaseDocumentInStagesArgs = {
  includeCurrent?: Scalars['Boolean'];
  inheritLocale?: Scalars['Boolean'];
  stages?: Array<Stage>;
};


/** Scheduled Release system model */
export type ScheduledReleaseOperationsArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  locales?: InputMaybe<Array<Locale>>;
  orderBy?: InputMaybe<ScheduledOperationOrderByInput>;
  skip?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<ScheduledOperationWhereInput>;
};


/** Scheduled Release system model */
export type ScheduledReleasePublishedByArgs = {
  locales?: InputMaybe<Array<Locale>>;
};


/** Scheduled Release system model */
export type ScheduledReleaseUpdatedByArgs = {
  locales?: InputMaybe<Array<Locale>>;
};

export type ScheduledReleaseConnectInput = {
  /** Allow to specify document position in list of connected documents, will default to appending at end of list */
  position?: InputMaybe<ConnectPositionInput>;
  /** Document to connect */
  where: ScheduledReleaseWhereUniqueInput;
};

/** A connection to a list of items. */
export type ScheduledReleaseConnection = {
  __typename?: 'ScheduledReleaseConnection';
  aggregate: Aggregate;
  /** A list of edges. */
  edges: Array<ScheduledReleaseEdge>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
};

export type ScheduledReleaseCreateInput = {
  createdAt?: InputMaybe<Scalars['DateTime']>;
  description?: InputMaybe<Scalars['String']>;
  errorMessage?: InputMaybe<Scalars['String']>;
  isActive?: InputMaybe<Scalars['Boolean']>;
  releaseAt?: InputMaybe<Scalars['DateTime']>;
  title?: InputMaybe<Scalars['String']>;
  updatedAt?: InputMaybe<Scalars['DateTime']>;
};

export type ScheduledReleaseCreateManyInlineInput = {
  /** Connect multiple existing ScheduledRelease documents */
  connect?: InputMaybe<Array<ScheduledReleaseWhereUniqueInput>>;
  /** Create and connect multiple existing ScheduledRelease documents */
  create?: InputMaybe<Array<ScheduledReleaseCreateInput>>;
};

export type ScheduledReleaseCreateOneInlineInput = {
  /** Connect one existing ScheduledRelease document */
  connect?: InputMaybe<ScheduledReleaseWhereUniqueInput>;
  /** Create and connect one ScheduledRelease document */
  create?: InputMaybe<ScheduledReleaseCreateInput>;
};

/** An edge in a connection. */
export type ScheduledReleaseEdge = {
  __typename?: 'ScheduledReleaseEdge';
  /** A cursor for use in pagination. */
  cursor: Scalars['String'];
  /** The item at the end of the edge. */
  node: ScheduledRelease;
};

/** Identifies documents */
export type ScheduledReleaseManyWhereInput = {
  /** Logical AND on all given filters. */
  AND?: InputMaybe<Array<ScheduledReleaseWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: InputMaybe<Array<ScheduledReleaseWhereInput>>;
  /** Logical OR on all given filters. */
  OR?: InputMaybe<Array<ScheduledReleaseWhereInput>>;
  /** Contains search across all appropriate fields. */
  _search?: InputMaybe<Scalars['String']>;
  createdAt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  createdAt_gt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  createdAt_gte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  createdAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  /** All values less than the given value. */
  createdAt_lt?: InputMaybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  createdAt_lte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  createdAt_not?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not contained in given list. */
  createdAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  createdBy?: InputMaybe<UserWhereInput>;
  description?: InputMaybe<Scalars['String']>;
  /** All values containing the given string. */
  description_contains?: InputMaybe<Scalars['String']>;
  /** All values ending with the given string. */
  description_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are contained in given list. */
  description_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** All values that are not equal to given value. */
  description_not?: InputMaybe<Scalars['String']>;
  /** All values not containing the given string. */
  description_not_contains?: InputMaybe<Scalars['String']>;
  /** All values not ending with the given string */
  description_not_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  description_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** All values not starting with the given string. */
  description_not_starts_with?: InputMaybe<Scalars['String']>;
  /** All values starting with the given string. */
  description_starts_with?: InputMaybe<Scalars['String']>;
  errorMessage?: InputMaybe<Scalars['String']>;
  /** All values containing the given string. */
  errorMessage_contains?: InputMaybe<Scalars['String']>;
  /** All values ending with the given string. */
  errorMessage_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are contained in given list. */
  errorMessage_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** All values that are not equal to given value. */
  errorMessage_not?: InputMaybe<Scalars['String']>;
  /** All values not containing the given string. */
  errorMessage_not_contains?: InputMaybe<Scalars['String']>;
  /** All values not ending with the given string */
  errorMessage_not_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  errorMessage_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** All values not starting with the given string. */
  errorMessage_not_starts_with?: InputMaybe<Scalars['String']>;
  /** All values starting with the given string. */
  errorMessage_starts_with?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['ID']>;
  /** All values containing the given string. */
  id_contains?: InputMaybe<Scalars['ID']>;
  /** All values ending with the given string. */
  id_ends_with?: InputMaybe<Scalars['ID']>;
  /** All values that are contained in given list. */
  id_in?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  /** All values that are not equal to given value. */
  id_not?: InputMaybe<Scalars['ID']>;
  /** All values not containing the given string. */
  id_not_contains?: InputMaybe<Scalars['ID']>;
  /** All values not ending with the given string */
  id_not_ends_with?: InputMaybe<Scalars['ID']>;
  /** All values that are not contained in given list. */
  id_not_in?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  /** All values not starting with the given string. */
  id_not_starts_with?: InputMaybe<Scalars['ID']>;
  /** All values starting with the given string. */
  id_starts_with?: InputMaybe<Scalars['ID']>;
  isActive?: InputMaybe<Scalars['Boolean']>;
  /** All values that are not equal to given value. */
  isActive_not?: InputMaybe<Scalars['Boolean']>;
  isImplicit?: InputMaybe<Scalars['Boolean']>;
  /** All values that are not equal to given value. */
  isImplicit_not?: InputMaybe<Scalars['Boolean']>;
  operations_every?: InputMaybe<ScheduledOperationWhereInput>;
  operations_none?: InputMaybe<ScheduledOperationWhereInput>;
  operations_some?: InputMaybe<ScheduledOperationWhereInput>;
  publishedAt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  publishedAt_gt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  publishedAt_gte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  publishedAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  /** All values less than the given value. */
  publishedAt_lt?: InputMaybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  publishedAt_lte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  publishedAt_not?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not contained in given list. */
  publishedAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  publishedBy?: InputMaybe<UserWhereInput>;
  releaseAt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  releaseAt_gt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  releaseAt_gte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  releaseAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  /** All values less than the given value. */
  releaseAt_lt?: InputMaybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  releaseAt_lte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  releaseAt_not?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not contained in given list. */
  releaseAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  status?: InputMaybe<ScheduledReleaseStatus>;
  /** All values that are contained in given list. */
  status_in?: InputMaybe<Array<InputMaybe<ScheduledReleaseStatus>>>;
  /** All values that are not equal to given value. */
  status_not?: InputMaybe<ScheduledReleaseStatus>;
  /** All values that are not contained in given list. */
  status_not_in?: InputMaybe<Array<InputMaybe<ScheduledReleaseStatus>>>;
  title?: InputMaybe<Scalars['String']>;
  /** All values containing the given string. */
  title_contains?: InputMaybe<Scalars['String']>;
  /** All values ending with the given string. */
  title_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are contained in given list. */
  title_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** All values that are not equal to given value. */
  title_not?: InputMaybe<Scalars['String']>;
  /** All values not containing the given string. */
  title_not_contains?: InputMaybe<Scalars['String']>;
  /** All values not ending with the given string */
  title_not_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  title_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** All values not starting with the given string. */
  title_not_starts_with?: InputMaybe<Scalars['String']>;
  /** All values starting with the given string. */
  title_starts_with?: InputMaybe<Scalars['String']>;
  updatedAt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  updatedAt_gt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  updatedAt_gte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  updatedAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  /** All values less than the given value. */
  updatedAt_lt?: InputMaybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  updatedAt_lte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  updatedAt_not?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not contained in given list. */
  updatedAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  updatedBy?: InputMaybe<UserWhereInput>;
};

export enum ScheduledReleaseOrderByInput {
  CreatedAtAsc = 'createdAt_ASC',
  CreatedAtDesc = 'createdAt_DESC',
  DescriptionAsc = 'description_ASC',
  DescriptionDesc = 'description_DESC',
  ErrorMessageAsc = 'errorMessage_ASC',
  ErrorMessageDesc = 'errorMessage_DESC',
  IdAsc = 'id_ASC',
  IdDesc = 'id_DESC',
  IsActiveAsc = 'isActive_ASC',
  IsActiveDesc = 'isActive_DESC',
  IsImplicitAsc = 'isImplicit_ASC',
  IsImplicitDesc = 'isImplicit_DESC',
  PublishedAtAsc = 'publishedAt_ASC',
  PublishedAtDesc = 'publishedAt_DESC',
  ReleaseAtAsc = 'releaseAt_ASC',
  ReleaseAtDesc = 'releaseAt_DESC',
  StatusAsc = 'status_ASC',
  StatusDesc = 'status_DESC',
  TitleAsc = 'title_ASC',
  TitleDesc = 'title_DESC',
  UpdatedAtAsc = 'updatedAt_ASC',
  UpdatedAtDesc = 'updatedAt_DESC'
}

/** System Scheduled Release Status */
export enum ScheduledReleaseStatus {
  Completed = 'COMPLETED',
  Failed = 'FAILED',
  InProgress = 'IN_PROGRESS',
  Pending = 'PENDING'
}

export type ScheduledReleaseUpdateInput = {
  description?: InputMaybe<Scalars['String']>;
  errorMessage?: InputMaybe<Scalars['String']>;
  isActive?: InputMaybe<Scalars['Boolean']>;
  releaseAt?: InputMaybe<Scalars['DateTime']>;
  title?: InputMaybe<Scalars['String']>;
};

export type ScheduledReleaseUpdateManyInlineInput = {
  /** Connect multiple existing ScheduledRelease documents */
  connect?: InputMaybe<Array<ScheduledReleaseConnectInput>>;
  /** Create and connect multiple ScheduledRelease documents */
  create?: InputMaybe<Array<ScheduledReleaseCreateInput>>;
  /** Delete multiple ScheduledRelease documents */
  delete?: InputMaybe<Array<ScheduledReleaseWhereUniqueInput>>;
  /** Disconnect multiple ScheduledRelease documents */
  disconnect?: InputMaybe<Array<ScheduledReleaseWhereUniqueInput>>;
  /** Override currently-connected documents with multiple existing ScheduledRelease documents */
  set?: InputMaybe<Array<ScheduledReleaseWhereUniqueInput>>;
  /** Update multiple ScheduledRelease documents */
  update?: InputMaybe<Array<ScheduledReleaseUpdateWithNestedWhereUniqueInput>>;
  /** Upsert multiple ScheduledRelease documents */
  upsert?: InputMaybe<Array<ScheduledReleaseUpsertWithNestedWhereUniqueInput>>;
};

export type ScheduledReleaseUpdateManyInput = {
  description?: InputMaybe<Scalars['String']>;
  errorMessage?: InputMaybe<Scalars['String']>;
  isActive?: InputMaybe<Scalars['Boolean']>;
  releaseAt?: InputMaybe<Scalars['DateTime']>;
  title?: InputMaybe<Scalars['String']>;
};

export type ScheduledReleaseUpdateManyWithNestedWhereInput = {
  /** Update many input */
  data: ScheduledReleaseUpdateManyInput;
  /** Document search */
  where: ScheduledReleaseWhereInput;
};

export type ScheduledReleaseUpdateOneInlineInput = {
  /** Connect existing ScheduledRelease document */
  connect?: InputMaybe<ScheduledReleaseWhereUniqueInput>;
  /** Create and connect one ScheduledRelease document */
  create?: InputMaybe<ScheduledReleaseCreateInput>;
  /** Delete currently connected ScheduledRelease document */
  delete?: InputMaybe<Scalars['Boolean']>;
  /** Disconnect currently connected ScheduledRelease document */
  disconnect?: InputMaybe<Scalars['Boolean']>;
  /** Update single ScheduledRelease document */
  update?: InputMaybe<ScheduledReleaseUpdateWithNestedWhereUniqueInput>;
  /** Upsert single ScheduledRelease document */
  upsert?: InputMaybe<ScheduledReleaseUpsertWithNestedWhereUniqueInput>;
};

export type ScheduledReleaseUpdateWithNestedWhereUniqueInput = {
  /** Document to update */
  data: ScheduledReleaseUpdateInput;
  /** Unique document search */
  where: ScheduledReleaseWhereUniqueInput;
};

export type ScheduledReleaseUpsertInput = {
  /** Create document if it didn't exist */
  create: ScheduledReleaseCreateInput;
  /** Update document if it exists */
  update: ScheduledReleaseUpdateInput;
};

export type ScheduledReleaseUpsertWithNestedWhereUniqueInput = {
  /** Upsert data */
  data: ScheduledReleaseUpsertInput;
  /** Unique document search */
  where: ScheduledReleaseWhereUniqueInput;
};

/** Identifies documents */
export type ScheduledReleaseWhereInput = {
  /** Logical AND on all given filters. */
  AND?: InputMaybe<Array<ScheduledReleaseWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: InputMaybe<Array<ScheduledReleaseWhereInput>>;
  /** Logical OR on all given filters. */
  OR?: InputMaybe<Array<ScheduledReleaseWhereInput>>;
  /** Contains search across all appropriate fields. */
  _search?: InputMaybe<Scalars['String']>;
  createdAt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  createdAt_gt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  createdAt_gte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  createdAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  /** All values less than the given value. */
  createdAt_lt?: InputMaybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  createdAt_lte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  createdAt_not?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not contained in given list. */
  createdAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  createdBy?: InputMaybe<UserWhereInput>;
  description?: InputMaybe<Scalars['String']>;
  /** All values containing the given string. */
  description_contains?: InputMaybe<Scalars['String']>;
  /** All values ending with the given string. */
  description_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are contained in given list. */
  description_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** All values that are not equal to given value. */
  description_not?: InputMaybe<Scalars['String']>;
  /** All values not containing the given string. */
  description_not_contains?: InputMaybe<Scalars['String']>;
  /** All values not ending with the given string */
  description_not_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  description_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** All values not starting with the given string. */
  description_not_starts_with?: InputMaybe<Scalars['String']>;
  /** All values starting with the given string. */
  description_starts_with?: InputMaybe<Scalars['String']>;
  errorMessage?: InputMaybe<Scalars['String']>;
  /** All values containing the given string. */
  errorMessage_contains?: InputMaybe<Scalars['String']>;
  /** All values ending with the given string. */
  errorMessage_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are contained in given list. */
  errorMessage_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** All values that are not equal to given value. */
  errorMessage_not?: InputMaybe<Scalars['String']>;
  /** All values not containing the given string. */
  errorMessage_not_contains?: InputMaybe<Scalars['String']>;
  /** All values not ending with the given string */
  errorMessage_not_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  errorMessage_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** All values not starting with the given string. */
  errorMessage_not_starts_with?: InputMaybe<Scalars['String']>;
  /** All values starting with the given string. */
  errorMessage_starts_with?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['ID']>;
  /** All values containing the given string. */
  id_contains?: InputMaybe<Scalars['ID']>;
  /** All values ending with the given string. */
  id_ends_with?: InputMaybe<Scalars['ID']>;
  /** All values that are contained in given list. */
  id_in?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  /** All values that are not equal to given value. */
  id_not?: InputMaybe<Scalars['ID']>;
  /** All values not containing the given string. */
  id_not_contains?: InputMaybe<Scalars['ID']>;
  /** All values not ending with the given string */
  id_not_ends_with?: InputMaybe<Scalars['ID']>;
  /** All values that are not contained in given list. */
  id_not_in?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  /** All values not starting with the given string. */
  id_not_starts_with?: InputMaybe<Scalars['ID']>;
  /** All values starting with the given string. */
  id_starts_with?: InputMaybe<Scalars['ID']>;
  isActive?: InputMaybe<Scalars['Boolean']>;
  /** All values that are not equal to given value. */
  isActive_not?: InputMaybe<Scalars['Boolean']>;
  isImplicit?: InputMaybe<Scalars['Boolean']>;
  /** All values that are not equal to given value. */
  isImplicit_not?: InputMaybe<Scalars['Boolean']>;
  operations_every?: InputMaybe<ScheduledOperationWhereInput>;
  operations_none?: InputMaybe<ScheduledOperationWhereInput>;
  operations_some?: InputMaybe<ScheduledOperationWhereInput>;
  publishedAt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  publishedAt_gt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  publishedAt_gte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  publishedAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  /** All values less than the given value. */
  publishedAt_lt?: InputMaybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  publishedAt_lte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  publishedAt_not?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not contained in given list. */
  publishedAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  publishedBy?: InputMaybe<UserWhereInput>;
  releaseAt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  releaseAt_gt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  releaseAt_gte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  releaseAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  /** All values less than the given value. */
  releaseAt_lt?: InputMaybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  releaseAt_lte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  releaseAt_not?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not contained in given list. */
  releaseAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  status?: InputMaybe<ScheduledReleaseStatus>;
  /** All values that are contained in given list. */
  status_in?: InputMaybe<Array<InputMaybe<ScheduledReleaseStatus>>>;
  /** All values that are not equal to given value. */
  status_not?: InputMaybe<ScheduledReleaseStatus>;
  /** All values that are not contained in given list. */
  status_not_in?: InputMaybe<Array<InputMaybe<ScheduledReleaseStatus>>>;
  title?: InputMaybe<Scalars['String']>;
  /** All values containing the given string. */
  title_contains?: InputMaybe<Scalars['String']>;
  /** All values ending with the given string. */
  title_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are contained in given list. */
  title_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** All values that are not equal to given value. */
  title_not?: InputMaybe<Scalars['String']>;
  /** All values not containing the given string. */
  title_not_contains?: InputMaybe<Scalars['String']>;
  /** All values not ending with the given string */
  title_not_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  title_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** All values not starting with the given string. */
  title_not_starts_with?: InputMaybe<Scalars['String']>;
  /** All values starting with the given string. */
  title_starts_with?: InputMaybe<Scalars['String']>;
  updatedAt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  updatedAt_gt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  updatedAt_gte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  updatedAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  /** All values less than the given value. */
  updatedAt_lt?: InputMaybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  updatedAt_lte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  updatedAt_not?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not contained in given list. */
  updatedAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  updatedBy?: InputMaybe<UserWhereInput>;
};

/** References ScheduledRelease record uniquely */
export type ScheduledReleaseWhereUniqueInput = {
  id?: InputMaybe<Scalars['ID']>;
};

/** Stage system enumeration */
export enum Stage {
  /** The Draft is the default stage for all your content. */
  Draft = 'DRAFT',
  /** The Published stage is where you can publish your content to. */
  Published = 'PUBLISHED'
}

export type StorageEquipment = Node & {
  __typename?: 'StorageEquipment';
  brand?: Maybe<Scalars['String']>;
  /** The time the document was created */
  createdAt: Scalars['DateTime'];
  /** User that created this document */
  createdBy?: Maybe<User>;
  description?: Maybe<RichText>;
  discountPercent?: Maybe<Scalars['Int']>;
  /** Get the document in other stages */
  documentInStages: Array<StorageEquipment>;
  /** List of StorageEquipment versions */
  history: Array<Version>;
  /** The unique identifier */
  id: Scalars['ID'];
  images?: Maybe<Asset>;
  manufacturer?: Maybe<Scalars['String']>;
  manufacturerLink?: Maybe<Scalars['String']>;
  newProduct?: Maybe<Scalars['Boolean']>;
  onDiscount?: Maybe<Scalars['Boolean']>;
  price?: Maybe<Scalars['Int']>;
  promotion?: Maybe<Scalars['Boolean']>;
  /** The time the document was published. Null on documents in draft stage. */
  publishedAt?: Maybe<Scalars['DateTime']>;
  /** User that last published this document */
  publishedBy?: Maybe<User>;
  scheduledIn: Array<ScheduledOperation>;
  slug?: Maybe<Scalars['String']>;
  /** System stage field */
  stage: Stage;
  stock?: Maybe<Scalars['Int']>;
  subtitle?: Maybe<Scalars['String']>;
  title: Scalars['String'];
  /** The time the document was updated */
  updatedAt: Scalars['DateTime'];
  /** User that last updated this document */
  updatedBy?: Maybe<User>;
  warranty?: Maybe<Scalars['Int']>;
};


export type StorageEquipmentCreatedByArgs = {
  locales?: InputMaybe<Array<Locale>>;
};


export type StorageEquipmentDocumentInStagesArgs = {
  includeCurrent?: Scalars['Boolean'];
  inheritLocale?: Scalars['Boolean'];
  stages?: Array<Stage>;
};


export type StorageEquipmentHistoryArgs = {
  limit?: Scalars['Int'];
  skip?: Scalars['Int'];
  stageOverride?: InputMaybe<Stage>;
};


export type StorageEquipmentImagesArgs = {
  locales?: InputMaybe<Array<Locale>>;
};


export type StorageEquipmentPublishedByArgs = {
  locales?: InputMaybe<Array<Locale>>;
};


export type StorageEquipmentScheduledInArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  locales?: InputMaybe<Array<Locale>>;
  skip?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<ScheduledOperationWhereInput>;
};


export type StorageEquipmentUpdatedByArgs = {
  locales?: InputMaybe<Array<Locale>>;
};

export type StorageEquipmentConnectInput = {
  /** Allow to specify document position in list of connected documents, will default to appending at end of list */
  position?: InputMaybe<ConnectPositionInput>;
  /** Document to connect */
  where: StorageEquipmentWhereUniqueInput;
};

/** A connection to a list of items. */
export type StorageEquipmentConnection = {
  __typename?: 'StorageEquipmentConnection';
  aggregate: Aggregate;
  /** A list of edges. */
  edges: Array<StorageEquipmentEdge>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
};

export type StorageEquipmentCreateInput = {
  brand?: InputMaybe<Scalars['String']>;
  createdAt?: InputMaybe<Scalars['DateTime']>;
  description?: InputMaybe<Scalars['RichTextAST']>;
  discountPercent?: InputMaybe<Scalars['Int']>;
  images?: InputMaybe<AssetCreateOneInlineInput>;
  manufacturer?: InputMaybe<Scalars['String']>;
  manufacturerLink?: InputMaybe<Scalars['String']>;
  newProduct?: InputMaybe<Scalars['Boolean']>;
  onDiscount?: InputMaybe<Scalars['Boolean']>;
  price?: InputMaybe<Scalars['Int']>;
  promotion?: InputMaybe<Scalars['Boolean']>;
  slug?: InputMaybe<Scalars['String']>;
  stock?: InputMaybe<Scalars['Int']>;
  subtitle?: InputMaybe<Scalars['String']>;
  title: Scalars['String'];
  updatedAt?: InputMaybe<Scalars['DateTime']>;
  warranty?: InputMaybe<Scalars['Int']>;
};

export type StorageEquipmentCreateManyInlineInput = {
  /** Connect multiple existing StorageEquipment documents */
  connect?: InputMaybe<Array<StorageEquipmentWhereUniqueInput>>;
  /** Create and connect multiple existing StorageEquipment documents */
  create?: InputMaybe<Array<StorageEquipmentCreateInput>>;
};

export type StorageEquipmentCreateOneInlineInput = {
  /** Connect one existing StorageEquipment document */
  connect?: InputMaybe<StorageEquipmentWhereUniqueInput>;
  /** Create and connect one StorageEquipment document */
  create?: InputMaybe<StorageEquipmentCreateInput>;
};

/** An edge in a connection. */
export type StorageEquipmentEdge = {
  __typename?: 'StorageEquipmentEdge';
  /** A cursor for use in pagination. */
  cursor: Scalars['String'];
  /** The item at the end of the edge. */
  node: StorageEquipment;
};

/** Identifies documents */
export type StorageEquipmentManyWhereInput = {
  /** Logical AND on all given filters. */
  AND?: InputMaybe<Array<StorageEquipmentWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: InputMaybe<Array<StorageEquipmentWhereInput>>;
  /** Logical OR on all given filters. */
  OR?: InputMaybe<Array<StorageEquipmentWhereInput>>;
  /** Contains search across all appropriate fields. */
  _search?: InputMaybe<Scalars['String']>;
  brand?: InputMaybe<Scalars['String']>;
  /** All values containing the given string. */
  brand_contains?: InputMaybe<Scalars['String']>;
  /** All values ending with the given string. */
  brand_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are contained in given list. */
  brand_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** All values that are not equal to given value. */
  brand_not?: InputMaybe<Scalars['String']>;
  /** All values not containing the given string. */
  brand_not_contains?: InputMaybe<Scalars['String']>;
  /** All values not ending with the given string */
  brand_not_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  brand_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** All values not starting with the given string. */
  brand_not_starts_with?: InputMaybe<Scalars['String']>;
  /** All values starting with the given string. */
  brand_starts_with?: InputMaybe<Scalars['String']>;
  createdAt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  createdAt_gt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  createdAt_gte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  createdAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  /** All values less than the given value. */
  createdAt_lt?: InputMaybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  createdAt_lte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  createdAt_not?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not contained in given list. */
  createdAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  createdBy?: InputMaybe<UserWhereInput>;
  discountPercent?: InputMaybe<Scalars['Int']>;
  /** All values greater than the given value. */
  discountPercent_gt?: InputMaybe<Scalars['Int']>;
  /** All values greater than or equal the given value. */
  discountPercent_gte?: InputMaybe<Scalars['Int']>;
  /** All values that are contained in given list. */
  discountPercent_in?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
  /** All values less than the given value. */
  discountPercent_lt?: InputMaybe<Scalars['Int']>;
  /** All values less than or equal the given value. */
  discountPercent_lte?: InputMaybe<Scalars['Int']>;
  /** All values that are not equal to given value. */
  discountPercent_not?: InputMaybe<Scalars['Int']>;
  /** All values that are not contained in given list. */
  discountPercent_not_in?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
  documentInStages_every?: InputMaybe<StorageEquipmentWhereStageInput>;
  documentInStages_none?: InputMaybe<StorageEquipmentWhereStageInput>;
  documentInStages_some?: InputMaybe<StorageEquipmentWhereStageInput>;
  id?: InputMaybe<Scalars['ID']>;
  /** All values containing the given string. */
  id_contains?: InputMaybe<Scalars['ID']>;
  /** All values ending with the given string. */
  id_ends_with?: InputMaybe<Scalars['ID']>;
  /** All values that are contained in given list. */
  id_in?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  /** All values that are not equal to given value. */
  id_not?: InputMaybe<Scalars['ID']>;
  /** All values not containing the given string. */
  id_not_contains?: InputMaybe<Scalars['ID']>;
  /** All values not ending with the given string */
  id_not_ends_with?: InputMaybe<Scalars['ID']>;
  /** All values that are not contained in given list. */
  id_not_in?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  /** All values not starting with the given string. */
  id_not_starts_with?: InputMaybe<Scalars['ID']>;
  /** All values starting with the given string. */
  id_starts_with?: InputMaybe<Scalars['ID']>;
  images?: InputMaybe<AssetWhereInput>;
  manufacturer?: InputMaybe<Scalars['String']>;
  manufacturerLink?: InputMaybe<Scalars['String']>;
  /** All values containing the given string. */
  manufacturerLink_contains?: InputMaybe<Scalars['String']>;
  /** All values ending with the given string. */
  manufacturerLink_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are contained in given list. */
  manufacturerLink_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** All values that are not equal to given value. */
  manufacturerLink_not?: InputMaybe<Scalars['String']>;
  /** All values not containing the given string. */
  manufacturerLink_not_contains?: InputMaybe<Scalars['String']>;
  /** All values not ending with the given string */
  manufacturerLink_not_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  manufacturerLink_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** All values not starting with the given string. */
  manufacturerLink_not_starts_with?: InputMaybe<Scalars['String']>;
  /** All values starting with the given string. */
  manufacturerLink_starts_with?: InputMaybe<Scalars['String']>;
  /** All values containing the given string. */
  manufacturer_contains?: InputMaybe<Scalars['String']>;
  /** All values ending with the given string. */
  manufacturer_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are contained in given list. */
  manufacturer_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** All values that are not equal to given value. */
  manufacturer_not?: InputMaybe<Scalars['String']>;
  /** All values not containing the given string. */
  manufacturer_not_contains?: InputMaybe<Scalars['String']>;
  /** All values not ending with the given string */
  manufacturer_not_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  manufacturer_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** All values not starting with the given string. */
  manufacturer_not_starts_with?: InputMaybe<Scalars['String']>;
  /** All values starting with the given string. */
  manufacturer_starts_with?: InputMaybe<Scalars['String']>;
  newProduct?: InputMaybe<Scalars['Boolean']>;
  /** All values that are not equal to given value. */
  newProduct_not?: InputMaybe<Scalars['Boolean']>;
  onDiscount?: InputMaybe<Scalars['Boolean']>;
  /** All values that are not equal to given value. */
  onDiscount_not?: InputMaybe<Scalars['Boolean']>;
  price?: InputMaybe<Scalars['Int']>;
  /** All values greater than the given value. */
  price_gt?: InputMaybe<Scalars['Int']>;
  /** All values greater than or equal the given value. */
  price_gte?: InputMaybe<Scalars['Int']>;
  /** All values that are contained in given list. */
  price_in?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
  /** All values less than the given value. */
  price_lt?: InputMaybe<Scalars['Int']>;
  /** All values less than or equal the given value. */
  price_lte?: InputMaybe<Scalars['Int']>;
  /** All values that are not equal to given value. */
  price_not?: InputMaybe<Scalars['Int']>;
  /** All values that are not contained in given list. */
  price_not_in?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
  promotion?: InputMaybe<Scalars['Boolean']>;
  /** All values that are not equal to given value. */
  promotion_not?: InputMaybe<Scalars['Boolean']>;
  publishedAt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  publishedAt_gt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  publishedAt_gte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  publishedAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  /** All values less than the given value. */
  publishedAt_lt?: InputMaybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  publishedAt_lte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  publishedAt_not?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not contained in given list. */
  publishedAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  publishedBy?: InputMaybe<UserWhereInput>;
  scheduledIn_every?: InputMaybe<ScheduledOperationWhereInput>;
  scheduledIn_none?: InputMaybe<ScheduledOperationWhereInput>;
  scheduledIn_some?: InputMaybe<ScheduledOperationWhereInput>;
  slug?: InputMaybe<Scalars['String']>;
  /** All values containing the given string. */
  slug_contains?: InputMaybe<Scalars['String']>;
  /** All values ending with the given string. */
  slug_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are contained in given list. */
  slug_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** All values that are not equal to given value. */
  slug_not?: InputMaybe<Scalars['String']>;
  /** All values not containing the given string. */
  slug_not_contains?: InputMaybe<Scalars['String']>;
  /** All values not ending with the given string */
  slug_not_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  slug_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** All values not starting with the given string. */
  slug_not_starts_with?: InputMaybe<Scalars['String']>;
  /** All values starting with the given string. */
  slug_starts_with?: InputMaybe<Scalars['String']>;
  stock?: InputMaybe<Scalars['Int']>;
  /** All values greater than the given value. */
  stock_gt?: InputMaybe<Scalars['Int']>;
  /** All values greater than or equal the given value. */
  stock_gte?: InputMaybe<Scalars['Int']>;
  /** All values that are contained in given list. */
  stock_in?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
  /** All values less than the given value. */
  stock_lt?: InputMaybe<Scalars['Int']>;
  /** All values less than or equal the given value. */
  stock_lte?: InputMaybe<Scalars['Int']>;
  /** All values that are not equal to given value. */
  stock_not?: InputMaybe<Scalars['Int']>;
  /** All values that are not contained in given list. */
  stock_not_in?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
  subtitle?: InputMaybe<Scalars['String']>;
  /** All values containing the given string. */
  subtitle_contains?: InputMaybe<Scalars['String']>;
  /** All values ending with the given string. */
  subtitle_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are contained in given list. */
  subtitle_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** All values that are not equal to given value. */
  subtitle_not?: InputMaybe<Scalars['String']>;
  /** All values not containing the given string. */
  subtitle_not_contains?: InputMaybe<Scalars['String']>;
  /** All values not ending with the given string */
  subtitle_not_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  subtitle_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** All values not starting with the given string. */
  subtitle_not_starts_with?: InputMaybe<Scalars['String']>;
  /** All values starting with the given string. */
  subtitle_starts_with?: InputMaybe<Scalars['String']>;
  title?: InputMaybe<Scalars['String']>;
  /** All values containing the given string. */
  title_contains?: InputMaybe<Scalars['String']>;
  /** All values ending with the given string. */
  title_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are contained in given list. */
  title_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** All values that are not equal to given value. */
  title_not?: InputMaybe<Scalars['String']>;
  /** All values not containing the given string. */
  title_not_contains?: InputMaybe<Scalars['String']>;
  /** All values not ending with the given string */
  title_not_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  title_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** All values not starting with the given string. */
  title_not_starts_with?: InputMaybe<Scalars['String']>;
  /** All values starting with the given string. */
  title_starts_with?: InputMaybe<Scalars['String']>;
  updatedAt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  updatedAt_gt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  updatedAt_gte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  updatedAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  /** All values less than the given value. */
  updatedAt_lt?: InputMaybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  updatedAt_lte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  updatedAt_not?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not contained in given list. */
  updatedAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  updatedBy?: InputMaybe<UserWhereInput>;
  warranty?: InputMaybe<Scalars['Int']>;
  /** All values greater than the given value. */
  warranty_gt?: InputMaybe<Scalars['Int']>;
  /** All values greater than or equal the given value. */
  warranty_gte?: InputMaybe<Scalars['Int']>;
  /** All values that are contained in given list. */
  warranty_in?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
  /** All values less than the given value. */
  warranty_lt?: InputMaybe<Scalars['Int']>;
  /** All values less than or equal the given value. */
  warranty_lte?: InputMaybe<Scalars['Int']>;
  /** All values that are not equal to given value. */
  warranty_not?: InputMaybe<Scalars['Int']>;
  /** All values that are not contained in given list. */
  warranty_not_in?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
};

export enum StorageEquipmentOrderByInput {
  BrandAsc = 'brand_ASC',
  BrandDesc = 'brand_DESC',
  CreatedAtAsc = 'createdAt_ASC',
  CreatedAtDesc = 'createdAt_DESC',
  DiscountPercentAsc = 'discountPercent_ASC',
  DiscountPercentDesc = 'discountPercent_DESC',
  IdAsc = 'id_ASC',
  IdDesc = 'id_DESC',
  ManufacturerLinkAsc = 'manufacturerLink_ASC',
  ManufacturerLinkDesc = 'manufacturerLink_DESC',
  ManufacturerAsc = 'manufacturer_ASC',
  ManufacturerDesc = 'manufacturer_DESC',
  NewProductAsc = 'newProduct_ASC',
  NewProductDesc = 'newProduct_DESC',
  OnDiscountAsc = 'onDiscount_ASC',
  OnDiscountDesc = 'onDiscount_DESC',
  PriceAsc = 'price_ASC',
  PriceDesc = 'price_DESC',
  PromotionAsc = 'promotion_ASC',
  PromotionDesc = 'promotion_DESC',
  PublishedAtAsc = 'publishedAt_ASC',
  PublishedAtDesc = 'publishedAt_DESC',
  SlugAsc = 'slug_ASC',
  SlugDesc = 'slug_DESC',
  StockAsc = 'stock_ASC',
  StockDesc = 'stock_DESC',
  SubtitleAsc = 'subtitle_ASC',
  SubtitleDesc = 'subtitle_DESC',
  TitleAsc = 'title_ASC',
  TitleDesc = 'title_DESC',
  UpdatedAtAsc = 'updatedAt_ASC',
  UpdatedAtDesc = 'updatedAt_DESC',
  WarrantyAsc = 'warranty_ASC',
  WarrantyDesc = 'warranty_DESC'
}

export type StorageEquipmentUpdateInput = {
  brand?: InputMaybe<Scalars['String']>;
  description?: InputMaybe<Scalars['RichTextAST']>;
  discountPercent?: InputMaybe<Scalars['Int']>;
  images?: InputMaybe<AssetUpdateOneInlineInput>;
  manufacturer?: InputMaybe<Scalars['String']>;
  manufacturerLink?: InputMaybe<Scalars['String']>;
  newProduct?: InputMaybe<Scalars['Boolean']>;
  onDiscount?: InputMaybe<Scalars['Boolean']>;
  price?: InputMaybe<Scalars['Int']>;
  promotion?: InputMaybe<Scalars['Boolean']>;
  slug?: InputMaybe<Scalars['String']>;
  stock?: InputMaybe<Scalars['Int']>;
  subtitle?: InputMaybe<Scalars['String']>;
  title?: InputMaybe<Scalars['String']>;
  warranty?: InputMaybe<Scalars['Int']>;
};

export type StorageEquipmentUpdateManyInlineInput = {
  /** Connect multiple existing StorageEquipment documents */
  connect?: InputMaybe<Array<StorageEquipmentConnectInput>>;
  /** Create and connect multiple StorageEquipment documents */
  create?: InputMaybe<Array<StorageEquipmentCreateInput>>;
  /** Delete multiple StorageEquipment documents */
  delete?: InputMaybe<Array<StorageEquipmentWhereUniqueInput>>;
  /** Disconnect multiple StorageEquipment documents */
  disconnect?: InputMaybe<Array<StorageEquipmentWhereUniqueInput>>;
  /** Override currently-connected documents with multiple existing StorageEquipment documents */
  set?: InputMaybe<Array<StorageEquipmentWhereUniqueInput>>;
  /** Update multiple StorageEquipment documents */
  update?: InputMaybe<Array<StorageEquipmentUpdateWithNestedWhereUniqueInput>>;
  /** Upsert multiple StorageEquipment documents */
  upsert?: InputMaybe<Array<StorageEquipmentUpsertWithNestedWhereUniqueInput>>;
};

export type StorageEquipmentUpdateManyInput = {
  brand?: InputMaybe<Scalars['String']>;
  description?: InputMaybe<Scalars['RichTextAST']>;
  discountPercent?: InputMaybe<Scalars['Int']>;
  manufacturer?: InputMaybe<Scalars['String']>;
  manufacturerLink?: InputMaybe<Scalars['String']>;
  newProduct?: InputMaybe<Scalars['Boolean']>;
  onDiscount?: InputMaybe<Scalars['Boolean']>;
  price?: InputMaybe<Scalars['Int']>;
  promotion?: InputMaybe<Scalars['Boolean']>;
  stock?: InputMaybe<Scalars['Int']>;
  subtitle?: InputMaybe<Scalars['String']>;
  warranty?: InputMaybe<Scalars['Int']>;
};

export type StorageEquipmentUpdateManyWithNestedWhereInput = {
  /** Update many input */
  data: StorageEquipmentUpdateManyInput;
  /** Document search */
  where: StorageEquipmentWhereInput;
};

export type StorageEquipmentUpdateOneInlineInput = {
  /** Connect existing StorageEquipment document */
  connect?: InputMaybe<StorageEquipmentWhereUniqueInput>;
  /** Create and connect one StorageEquipment document */
  create?: InputMaybe<StorageEquipmentCreateInput>;
  /** Delete currently connected StorageEquipment document */
  delete?: InputMaybe<Scalars['Boolean']>;
  /** Disconnect currently connected StorageEquipment document */
  disconnect?: InputMaybe<Scalars['Boolean']>;
  /** Update single StorageEquipment document */
  update?: InputMaybe<StorageEquipmentUpdateWithNestedWhereUniqueInput>;
  /** Upsert single StorageEquipment document */
  upsert?: InputMaybe<StorageEquipmentUpsertWithNestedWhereUniqueInput>;
};

export type StorageEquipmentUpdateWithNestedWhereUniqueInput = {
  /** Document to update */
  data: StorageEquipmentUpdateInput;
  /** Unique document search */
  where: StorageEquipmentWhereUniqueInput;
};

export type StorageEquipmentUpsertInput = {
  /** Create document if it didn't exist */
  create: StorageEquipmentCreateInput;
  /** Update document if it exists */
  update: StorageEquipmentUpdateInput;
};

export type StorageEquipmentUpsertWithNestedWhereUniqueInput = {
  /** Upsert data */
  data: StorageEquipmentUpsertInput;
  /** Unique document search */
  where: StorageEquipmentWhereUniqueInput;
};

/** This contains a set of filters that can be used to compare values internally */
export type StorageEquipmentWhereComparatorInput = {
  /** This field can be used to request to check if the entry is outdated by internal comparison */
  outdated_to?: InputMaybe<Scalars['Boolean']>;
};

/** Identifies documents */
export type StorageEquipmentWhereInput = {
  /** Logical AND on all given filters. */
  AND?: InputMaybe<Array<StorageEquipmentWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: InputMaybe<Array<StorageEquipmentWhereInput>>;
  /** Logical OR on all given filters. */
  OR?: InputMaybe<Array<StorageEquipmentWhereInput>>;
  /** Contains search across all appropriate fields. */
  _search?: InputMaybe<Scalars['String']>;
  brand?: InputMaybe<Scalars['String']>;
  /** All values containing the given string. */
  brand_contains?: InputMaybe<Scalars['String']>;
  /** All values ending with the given string. */
  brand_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are contained in given list. */
  brand_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** All values that are not equal to given value. */
  brand_not?: InputMaybe<Scalars['String']>;
  /** All values not containing the given string. */
  brand_not_contains?: InputMaybe<Scalars['String']>;
  /** All values not ending with the given string */
  brand_not_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  brand_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** All values not starting with the given string. */
  brand_not_starts_with?: InputMaybe<Scalars['String']>;
  /** All values starting with the given string. */
  brand_starts_with?: InputMaybe<Scalars['String']>;
  createdAt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  createdAt_gt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  createdAt_gte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  createdAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  /** All values less than the given value. */
  createdAt_lt?: InputMaybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  createdAt_lte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  createdAt_not?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not contained in given list. */
  createdAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  createdBy?: InputMaybe<UserWhereInput>;
  discountPercent?: InputMaybe<Scalars['Int']>;
  /** All values greater than the given value. */
  discountPercent_gt?: InputMaybe<Scalars['Int']>;
  /** All values greater than or equal the given value. */
  discountPercent_gte?: InputMaybe<Scalars['Int']>;
  /** All values that are contained in given list. */
  discountPercent_in?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
  /** All values less than the given value. */
  discountPercent_lt?: InputMaybe<Scalars['Int']>;
  /** All values less than or equal the given value. */
  discountPercent_lte?: InputMaybe<Scalars['Int']>;
  /** All values that are not equal to given value. */
  discountPercent_not?: InputMaybe<Scalars['Int']>;
  /** All values that are not contained in given list. */
  discountPercent_not_in?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
  documentInStages_every?: InputMaybe<StorageEquipmentWhereStageInput>;
  documentInStages_none?: InputMaybe<StorageEquipmentWhereStageInput>;
  documentInStages_some?: InputMaybe<StorageEquipmentWhereStageInput>;
  id?: InputMaybe<Scalars['ID']>;
  /** All values containing the given string. */
  id_contains?: InputMaybe<Scalars['ID']>;
  /** All values ending with the given string. */
  id_ends_with?: InputMaybe<Scalars['ID']>;
  /** All values that are contained in given list. */
  id_in?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  /** All values that are not equal to given value. */
  id_not?: InputMaybe<Scalars['ID']>;
  /** All values not containing the given string. */
  id_not_contains?: InputMaybe<Scalars['ID']>;
  /** All values not ending with the given string */
  id_not_ends_with?: InputMaybe<Scalars['ID']>;
  /** All values that are not contained in given list. */
  id_not_in?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  /** All values not starting with the given string. */
  id_not_starts_with?: InputMaybe<Scalars['ID']>;
  /** All values starting with the given string. */
  id_starts_with?: InputMaybe<Scalars['ID']>;
  images?: InputMaybe<AssetWhereInput>;
  manufacturer?: InputMaybe<Scalars['String']>;
  manufacturerLink?: InputMaybe<Scalars['String']>;
  /** All values containing the given string. */
  manufacturerLink_contains?: InputMaybe<Scalars['String']>;
  /** All values ending with the given string. */
  manufacturerLink_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are contained in given list. */
  manufacturerLink_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** All values that are not equal to given value. */
  manufacturerLink_not?: InputMaybe<Scalars['String']>;
  /** All values not containing the given string. */
  manufacturerLink_not_contains?: InputMaybe<Scalars['String']>;
  /** All values not ending with the given string */
  manufacturerLink_not_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  manufacturerLink_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** All values not starting with the given string. */
  manufacturerLink_not_starts_with?: InputMaybe<Scalars['String']>;
  /** All values starting with the given string. */
  manufacturerLink_starts_with?: InputMaybe<Scalars['String']>;
  /** All values containing the given string. */
  manufacturer_contains?: InputMaybe<Scalars['String']>;
  /** All values ending with the given string. */
  manufacturer_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are contained in given list. */
  manufacturer_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** All values that are not equal to given value. */
  manufacturer_not?: InputMaybe<Scalars['String']>;
  /** All values not containing the given string. */
  manufacturer_not_contains?: InputMaybe<Scalars['String']>;
  /** All values not ending with the given string */
  manufacturer_not_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  manufacturer_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** All values not starting with the given string. */
  manufacturer_not_starts_with?: InputMaybe<Scalars['String']>;
  /** All values starting with the given string. */
  manufacturer_starts_with?: InputMaybe<Scalars['String']>;
  newProduct?: InputMaybe<Scalars['Boolean']>;
  /** All values that are not equal to given value. */
  newProduct_not?: InputMaybe<Scalars['Boolean']>;
  onDiscount?: InputMaybe<Scalars['Boolean']>;
  /** All values that are not equal to given value. */
  onDiscount_not?: InputMaybe<Scalars['Boolean']>;
  price?: InputMaybe<Scalars['Int']>;
  /** All values greater than the given value. */
  price_gt?: InputMaybe<Scalars['Int']>;
  /** All values greater than or equal the given value. */
  price_gte?: InputMaybe<Scalars['Int']>;
  /** All values that are contained in given list. */
  price_in?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
  /** All values less than the given value. */
  price_lt?: InputMaybe<Scalars['Int']>;
  /** All values less than or equal the given value. */
  price_lte?: InputMaybe<Scalars['Int']>;
  /** All values that are not equal to given value. */
  price_not?: InputMaybe<Scalars['Int']>;
  /** All values that are not contained in given list. */
  price_not_in?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
  promotion?: InputMaybe<Scalars['Boolean']>;
  /** All values that are not equal to given value. */
  promotion_not?: InputMaybe<Scalars['Boolean']>;
  publishedAt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  publishedAt_gt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  publishedAt_gte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  publishedAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  /** All values less than the given value. */
  publishedAt_lt?: InputMaybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  publishedAt_lte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  publishedAt_not?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not contained in given list. */
  publishedAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  publishedBy?: InputMaybe<UserWhereInput>;
  scheduledIn_every?: InputMaybe<ScheduledOperationWhereInput>;
  scheduledIn_none?: InputMaybe<ScheduledOperationWhereInput>;
  scheduledIn_some?: InputMaybe<ScheduledOperationWhereInput>;
  slug?: InputMaybe<Scalars['String']>;
  /** All values containing the given string. */
  slug_contains?: InputMaybe<Scalars['String']>;
  /** All values ending with the given string. */
  slug_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are contained in given list. */
  slug_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** All values that are not equal to given value. */
  slug_not?: InputMaybe<Scalars['String']>;
  /** All values not containing the given string. */
  slug_not_contains?: InputMaybe<Scalars['String']>;
  /** All values not ending with the given string */
  slug_not_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  slug_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** All values not starting with the given string. */
  slug_not_starts_with?: InputMaybe<Scalars['String']>;
  /** All values starting with the given string. */
  slug_starts_with?: InputMaybe<Scalars['String']>;
  stock?: InputMaybe<Scalars['Int']>;
  /** All values greater than the given value. */
  stock_gt?: InputMaybe<Scalars['Int']>;
  /** All values greater than or equal the given value. */
  stock_gte?: InputMaybe<Scalars['Int']>;
  /** All values that are contained in given list. */
  stock_in?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
  /** All values less than the given value. */
  stock_lt?: InputMaybe<Scalars['Int']>;
  /** All values less than or equal the given value. */
  stock_lte?: InputMaybe<Scalars['Int']>;
  /** All values that are not equal to given value. */
  stock_not?: InputMaybe<Scalars['Int']>;
  /** All values that are not contained in given list. */
  stock_not_in?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
  subtitle?: InputMaybe<Scalars['String']>;
  /** All values containing the given string. */
  subtitle_contains?: InputMaybe<Scalars['String']>;
  /** All values ending with the given string. */
  subtitle_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are contained in given list. */
  subtitle_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** All values that are not equal to given value. */
  subtitle_not?: InputMaybe<Scalars['String']>;
  /** All values not containing the given string. */
  subtitle_not_contains?: InputMaybe<Scalars['String']>;
  /** All values not ending with the given string */
  subtitle_not_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  subtitle_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** All values not starting with the given string. */
  subtitle_not_starts_with?: InputMaybe<Scalars['String']>;
  /** All values starting with the given string. */
  subtitle_starts_with?: InputMaybe<Scalars['String']>;
  title?: InputMaybe<Scalars['String']>;
  /** All values containing the given string. */
  title_contains?: InputMaybe<Scalars['String']>;
  /** All values ending with the given string. */
  title_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are contained in given list. */
  title_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** All values that are not equal to given value. */
  title_not?: InputMaybe<Scalars['String']>;
  /** All values not containing the given string. */
  title_not_contains?: InputMaybe<Scalars['String']>;
  /** All values not ending with the given string */
  title_not_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  title_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** All values not starting with the given string. */
  title_not_starts_with?: InputMaybe<Scalars['String']>;
  /** All values starting with the given string. */
  title_starts_with?: InputMaybe<Scalars['String']>;
  updatedAt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  updatedAt_gt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  updatedAt_gte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  updatedAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  /** All values less than the given value. */
  updatedAt_lt?: InputMaybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  updatedAt_lte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  updatedAt_not?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not contained in given list. */
  updatedAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  updatedBy?: InputMaybe<UserWhereInput>;
  warranty?: InputMaybe<Scalars['Int']>;
  /** All values greater than the given value. */
  warranty_gt?: InputMaybe<Scalars['Int']>;
  /** All values greater than or equal the given value. */
  warranty_gte?: InputMaybe<Scalars['Int']>;
  /** All values that are contained in given list. */
  warranty_in?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
  /** All values less than the given value. */
  warranty_lt?: InputMaybe<Scalars['Int']>;
  /** All values less than or equal the given value. */
  warranty_lte?: InputMaybe<Scalars['Int']>;
  /** All values that are not equal to given value. */
  warranty_not?: InputMaybe<Scalars['Int']>;
  /** All values that are not contained in given list. */
  warranty_not_in?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
};

/** The document in stages filter allows specifying a stage entry to cross compare the same document between different stages */
export type StorageEquipmentWhereStageInput = {
  /** Logical AND on all given filters. */
  AND?: InputMaybe<Array<StorageEquipmentWhereStageInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: InputMaybe<Array<StorageEquipmentWhereStageInput>>;
  /** Logical OR on all given filters. */
  OR?: InputMaybe<Array<StorageEquipmentWhereStageInput>>;
  /** This field contains fields which can be set as true or false to specify an internal comparison */
  compareWithParent?: InputMaybe<StorageEquipmentWhereComparatorInput>;
  /** Specify the stage to compare with */
  stage?: InputMaybe<Stage>;
};

/** References StorageEquipment record uniquely */
export type StorageEquipmentWhereUniqueInput = {
  id?: InputMaybe<Scalars['ID']>;
  slug?: InputMaybe<Scalars['String']>;
  title?: InputMaybe<Scalars['String']>;
};

export enum SystemDateTimeFieldVariation {
  Base = 'BASE',
  Combined = 'COMBINED',
  Localization = 'LOCALIZATION'
}

export type UnpublishLocaleInput = {
  /** Locales to unpublish */
  locale: Locale;
  /** Stages to unpublish selected locales from */
  stages: Array<Stage>;
};

/** User system model */
export type User = Node & {
  __typename?: 'User';
  /** The time the document was created */
  createdAt: Scalars['DateTime'];
  /** Get the document in other stages */
  documentInStages: Array<User>;
  /** The unique identifier */
  id: Scalars['ID'];
  /** Flag to determine if user is active or not */
  isActive: Scalars['Boolean'];
  /** User Kind. Can be either MEMBER, PAT or PUBLIC */
  kind: UserKind;
  /** The username */
  name: Scalars['String'];
  /** Profile Picture url */
  picture?: Maybe<Scalars['String']>;
  /** The time the document was published. Null on documents in draft stage. */
  publishedAt?: Maybe<Scalars['DateTime']>;
  /** System stage field */
  stage: Stage;
  /** The time the document was updated */
  updatedAt: Scalars['DateTime'];
};


/** User system model */
export type UserDocumentInStagesArgs = {
  includeCurrent?: Scalars['Boolean'];
  inheritLocale?: Scalars['Boolean'];
  stages?: Array<Stage>;
};

export type UserConnectInput = {
  /** Allow to specify document position in list of connected documents, will default to appending at end of list */
  position?: InputMaybe<ConnectPositionInput>;
  /** Document to connect */
  where: UserWhereUniqueInput;
};

/** A connection to a list of items. */
export type UserConnection = {
  __typename?: 'UserConnection';
  aggregate: Aggregate;
  /** A list of edges. */
  edges: Array<UserEdge>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
};

export type UserCreateManyInlineInput = {
  /** Connect multiple existing User documents */
  connect?: InputMaybe<Array<UserWhereUniqueInput>>;
};

export type UserCreateOneInlineInput = {
  /** Connect one existing User document */
  connect?: InputMaybe<UserWhereUniqueInput>;
};

/** An edge in a connection. */
export type UserEdge = {
  __typename?: 'UserEdge';
  /** A cursor for use in pagination. */
  cursor: Scalars['String'];
  /** The item at the end of the edge. */
  node: User;
};

/** System User Kind */
export enum UserKind {
  Member = 'MEMBER',
  Pat = 'PAT',
  Public = 'PUBLIC',
  Webhook = 'WEBHOOK'
}

/** Identifies documents */
export type UserManyWhereInput = {
  /** Logical AND on all given filters. */
  AND?: InputMaybe<Array<UserWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: InputMaybe<Array<UserWhereInput>>;
  /** Logical OR on all given filters. */
  OR?: InputMaybe<Array<UserWhereInput>>;
  /** Contains search across all appropriate fields. */
  _search?: InputMaybe<Scalars['String']>;
  createdAt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  createdAt_gt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  createdAt_gte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  createdAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  /** All values less than the given value. */
  createdAt_lt?: InputMaybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  createdAt_lte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  createdAt_not?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not contained in given list. */
  createdAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  documentInStages_every?: InputMaybe<UserWhereStageInput>;
  documentInStages_none?: InputMaybe<UserWhereStageInput>;
  documentInStages_some?: InputMaybe<UserWhereStageInput>;
  id?: InputMaybe<Scalars['ID']>;
  /** All values containing the given string. */
  id_contains?: InputMaybe<Scalars['ID']>;
  /** All values ending with the given string. */
  id_ends_with?: InputMaybe<Scalars['ID']>;
  /** All values that are contained in given list. */
  id_in?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  /** All values that are not equal to given value. */
  id_not?: InputMaybe<Scalars['ID']>;
  /** All values not containing the given string. */
  id_not_contains?: InputMaybe<Scalars['ID']>;
  /** All values not ending with the given string */
  id_not_ends_with?: InputMaybe<Scalars['ID']>;
  /** All values that are not contained in given list. */
  id_not_in?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  /** All values not starting with the given string. */
  id_not_starts_with?: InputMaybe<Scalars['ID']>;
  /** All values starting with the given string. */
  id_starts_with?: InputMaybe<Scalars['ID']>;
  isActive?: InputMaybe<Scalars['Boolean']>;
  /** All values that are not equal to given value. */
  isActive_not?: InputMaybe<Scalars['Boolean']>;
  kind?: InputMaybe<UserKind>;
  /** All values that are contained in given list. */
  kind_in?: InputMaybe<Array<InputMaybe<UserKind>>>;
  /** All values that are not equal to given value. */
  kind_not?: InputMaybe<UserKind>;
  /** All values that are not contained in given list. */
  kind_not_in?: InputMaybe<Array<InputMaybe<UserKind>>>;
  name?: InputMaybe<Scalars['String']>;
  /** All values containing the given string. */
  name_contains?: InputMaybe<Scalars['String']>;
  /** All values ending with the given string. */
  name_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are contained in given list. */
  name_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** All values that are not equal to given value. */
  name_not?: InputMaybe<Scalars['String']>;
  /** All values not containing the given string. */
  name_not_contains?: InputMaybe<Scalars['String']>;
  /** All values not ending with the given string */
  name_not_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  name_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** All values not starting with the given string. */
  name_not_starts_with?: InputMaybe<Scalars['String']>;
  /** All values starting with the given string. */
  name_starts_with?: InputMaybe<Scalars['String']>;
  picture?: InputMaybe<Scalars['String']>;
  /** All values containing the given string. */
  picture_contains?: InputMaybe<Scalars['String']>;
  /** All values ending with the given string. */
  picture_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are contained in given list. */
  picture_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** All values that are not equal to given value. */
  picture_not?: InputMaybe<Scalars['String']>;
  /** All values not containing the given string. */
  picture_not_contains?: InputMaybe<Scalars['String']>;
  /** All values not ending with the given string */
  picture_not_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  picture_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** All values not starting with the given string. */
  picture_not_starts_with?: InputMaybe<Scalars['String']>;
  /** All values starting with the given string. */
  picture_starts_with?: InputMaybe<Scalars['String']>;
  publishedAt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  publishedAt_gt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  publishedAt_gte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  publishedAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  /** All values less than the given value. */
  publishedAt_lt?: InputMaybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  publishedAt_lte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  publishedAt_not?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not contained in given list. */
  publishedAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  updatedAt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  updatedAt_gt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  updatedAt_gte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  updatedAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  /** All values less than the given value. */
  updatedAt_lt?: InputMaybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  updatedAt_lte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  updatedAt_not?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not contained in given list. */
  updatedAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
};

export enum UserOrderByInput {
  CreatedAtAsc = 'createdAt_ASC',
  CreatedAtDesc = 'createdAt_DESC',
  IdAsc = 'id_ASC',
  IdDesc = 'id_DESC',
  IsActiveAsc = 'isActive_ASC',
  IsActiveDesc = 'isActive_DESC',
  KindAsc = 'kind_ASC',
  KindDesc = 'kind_DESC',
  NameAsc = 'name_ASC',
  NameDesc = 'name_DESC',
  PictureAsc = 'picture_ASC',
  PictureDesc = 'picture_DESC',
  PublishedAtAsc = 'publishedAt_ASC',
  PublishedAtDesc = 'publishedAt_DESC',
  UpdatedAtAsc = 'updatedAt_ASC',
  UpdatedAtDesc = 'updatedAt_DESC'
}

export type UserUpdateManyInlineInput = {
  /** Connect multiple existing User documents */
  connect?: InputMaybe<Array<UserConnectInput>>;
  /** Disconnect multiple User documents */
  disconnect?: InputMaybe<Array<UserWhereUniqueInput>>;
  /** Override currently-connected documents with multiple existing User documents */
  set?: InputMaybe<Array<UserWhereUniqueInput>>;
};

export type UserUpdateOneInlineInput = {
  /** Connect existing User document */
  connect?: InputMaybe<UserWhereUniqueInput>;
  /** Disconnect currently connected User document */
  disconnect?: InputMaybe<Scalars['Boolean']>;
};

/** This contains a set of filters that can be used to compare values internally */
export type UserWhereComparatorInput = {
  /** This field can be used to request to check if the entry is outdated by internal comparison */
  outdated_to?: InputMaybe<Scalars['Boolean']>;
};

/** Identifies documents */
export type UserWhereInput = {
  /** Logical AND on all given filters. */
  AND?: InputMaybe<Array<UserWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: InputMaybe<Array<UserWhereInput>>;
  /** Logical OR on all given filters. */
  OR?: InputMaybe<Array<UserWhereInput>>;
  /** Contains search across all appropriate fields. */
  _search?: InputMaybe<Scalars['String']>;
  createdAt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  createdAt_gt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  createdAt_gte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  createdAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  /** All values less than the given value. */
  createdAt_lt?: InputMaybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  createdAt_lte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  createdAt_not?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not contained in given list. */
  createdAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  documentInStages_every?: InputMaybe<UserWhereStageInput>;
  documentInStages_none?: InputMaybe<UserWhereStageInput>;
  documentInStages_some?: InputMaybe<UserWhereStageInput>;
  id?: InputMaybe<Scalars['ID']>;
  /** All values containing the given string. */
  id_contains?: InputMaybe<Scalars['ID']>;
  /** All values ending with the given string. */
  id_ends_with?: InputMaybe<Scalars['ID']>;
  /** All values that are contained in given list. */
  id_in?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  /** All values that are not equal to given value. */
  id_not?: InputMaybe<Scalars['ID']>;
  /** All values not containing the given string. */
  id_not_contains?: InputMaybe<Scalars['ID']>;
  /** All values not ending with the given string */
  id_not_ends_with?: InputMaybe<Scalars['ID']>;
  /** All values that are not contained in given list. */
  id_not_in?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  /** All values not starting with the given string. */
  id_not_starts_with?: InputMaybe<Scalars['ID']>;
  /** All values starting with the given string. */
  id_starts_with?: InputMaybe<Scalars['ID']>;
  isActive?: InputMaybe<Scalars['Boolean']>;
  /** All values that are not equal to given value. */
  isActive_not?: InputMaybe<Scalars['Boolean']>;
  kind?: InputMaybe<UserKind>;
  /** All values that are contained in given list. */
  kind_in?: InputMaybe<Array<InputMaybe<UserKind>>>;
  /** All values that are not equal to given value. */
  kind_not?: InputMaybe<UserKind>;
  /** All values that are not contained in given list. */
  kind_not_in?: InputMaybe<Array<InputMaybe<UserKind>>>;
  name?: InputMaybe<Scalars['String']>;
  /** All values containing the given string. */
  name_contains?: InputMaybe<Scalars['String']>;
  /** All values ending with the given string. */
  name_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are contained in given list. */
  name_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** All values that are not equal to given value. */
  name_not?: InputMaybe<Scalars['String']>;
  /** All values not containing the given string. */
  name_not_contains?: InputMaybe<Scalars['String']>;
  /** All values not ending with the given string */
  name_not_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  name_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** All values not starting with the given string. */
  name_not_starts_with?: InputMaybe<Scalars['String']>;
  /** All values starting with the given string. */
  name_starts_with?: InputMaybe<Scalars['String']>;
  picture?: InputMaybe<Scalars['String']>;
  /** All values containing the given string. */
  picture_contains?: InputMaybe<Scalars['String']>;
  /** All values ending with the given string. */
  picture_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are contained in given list. */
  picture_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** All values that are not equal to given value. */
  picture_not?: InputMaybe<Scalars['String']>;
  /** All values not containing the given string. */
  picture_not_contains?: InputMaybe<Scalars['String']>;
  /** All values not ending with the given string */
  picture_not_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  picture_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** All values not starting with the given string. */
  picture_not_starts_with?: InputMaybe<Scalars['String']>;
  /** All values starting with the given string. */
  picture_starts_with?: InputMaybe<Scalars['String']>;
  publishedAt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  publishedAt_gt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  publishedAt_gte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  publishedAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  /** All values less than the given value. */
  publishedAt_lt?: InputMaybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  publishedAt_lte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  publishedAt_not?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not contained in given list. */
  publishedAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  updatedAt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  updatedAt_gt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  updatedAt_gte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  updatedAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  /** All values less than the given value. */
  updatedAt_lt?: InputMaybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  updatedAt_lte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  updatedAt_not?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not contained in given list. */
  updatedAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
};

/** The document in stages filter allows specifying a stage entry to cross compare the same document between different stages */
export type UserWhereStageInput = {
  /** Logical AND on all given filters. */
  AND?: InputMaybe<Array<UserWhereStageInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: InputMaybe<Array<UserWhereStageInput>>;
  /** Logical OR on all given filters. */
  OR?: InputMaybe<Array<UserWhereStageInput>>;
  /** This field contains fields which can be set as true or false to specify an internal comparison */
  compareWithParent?: InputMaybe<UserWhereComparatorInput>;
  /** Specify the stage to compare with */
  stage?: InputMaybe<Stage>;
};

/** References User record uniquely */
export type UserWhereUniqueInput = {
  id?: InputMaybe<Scalars['ID']>;
};

export type Version = {
  __typename?: 'Version';
  createdAt: Scalars['DateTime'];
  id: Scalars['ID'];
  revision: Scalars['Int'];
  stage: Stage;
};

export type VersionWhereInput = {
  id: Scalars['ID'];
  revision: Scalars['Int'];
  stage: Stage;
};

export enum _FilterKind {
  And = 'AND',
  Not = 'NOT',
  Or = 'OR',
  Contains = 'contains',
  ContainsAll = 'contains_all',
  ContainsNone = 'contains_none',
  ContainsSome = 'contains_some',
  EndsWith = 'ends_with',
  Eq = 'eq',
  EqNot = 'eq_not',
  Gt = 'gt',
  Gte = 'gte',
  In = 'in',
  Lt = 'lt',
  Lte = 'lte',
  NotContains = 'not_contains',
  NotEndsWith = 'not_ends_with',
  NotIn = 'not_in',
  NotStartsWith = 'not_starts_with',
  RelationalEvery = 'relational_every',
  RelationalNone = 'relational_none',
  RelationalSingle = 'relational_single',
  RelationalSome = 'relational_some',
  Search = 'search',
  StartsWith = 'starts_with'
}

export enum _MutationInputFieldKind {
  Enum = 'enum',
  Relation = 'relation',
  RichText = 'richText',
  RichTextWithEmbeds = 'richTextWithEmbeds',
  Scalar = 'scalar',
  Union = 'union',
  Virtual = 'virtual'
}

export enum _MutationKind {
  Create = 'create',
  Delete = 'delete',
  DeleteMany = 'deleteMany',
  Publish = 'publish',
  PublishMany = 'publishMany',
  SchedulePublish = 'schedulePublish',
  ScheduleUnpublish = 'scheduleUnpublish',
  Unpublish = 'unpublish',
  UnpublishMany = 'unpublishMany',
  Update = 'update',
  UpdateMany = 'updateMany',
  Upsert = 'upsert'
}

export enum _OrderDirection {
  Asc = 'asc',
  Desc = 'desc'
}

export enum _RelationInputCardinality {
  Many = 'many',
  One = 'one'
}

export enum _RelationInputKind {
  Create = 'create',
  Update = 'update'
}

export enum _RelationKind {
  Regular = 'regular',
  Union = 'union'
}

export enum _SystemDateTimeFieldVariation {
  Base = 'base',
  Combined = 'combined',
  Localization = 'localization'
}
