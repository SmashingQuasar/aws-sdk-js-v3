// smithy-typescript generated code
import {
  ExceptionOptionType as __ExceptionOptionType,
  LazyJsonString as __LazyJsonString,
  SENSITIVE_STRING,
} from "@aws-sdk/smithy-client";

import { NetworkManagerServiceException as __BaseException } from "./NetworkManagerServiceException";

export interface AcceptAttachmentRequest {
  /**
   * <p>The ID of the attachment. </p>
   */
  AttachmentId: string | undefined;
}

export namespace AcceptAttachmentRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: AcceptAttachmentRequest): any => ({
    ...obj,
  });
}

export enum AttachmentType {
  CONNECT = "CONNECT",
  SITE_TO_SITE_VPN = "SITE_TO_SITE_VPN",
  VPC = "VPC",
}

/**
 * <p>Describes a tag.</p>
 */
export interface Tag {
  /**
   * <p>The tag key.</p>
   *         <p>Constraints: Maximum length of 128 characters.</p>
   */
  Key?: string;

  /**
   * <p>The tag value.</p>
   *         <p>Constraints: Maximum length of 256 characters.</p>
   */
  Value?: string;
}

export namespace Tag {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: Tag): any => ({
    ...obj,
  });
}

/**
 * <p>Describes a proposed segment change. In some cases, the segment change must first be evaluated and accepted. </p>
 */
export interface ProposedSegmentChange {
  /**
   * <p>The key-value tags that changed for the segment.</p>
   */
  Tags?: Tag[];

  /**
   * <p>The rule number in the policy document that applies to this change.</p>
   */
  AttachmentPolicyRuleNumber?: number;

  /**
   * <p>The name of the segment to change.</p>
   */
  SegmentName?: string;
}

export namespace ProposedSegmentChange {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ProposedSegmentChange): any => ({
    ...obj,
  });
}

export enum AttachmentState {
  AVAILABLE = "AVAILABLE",
  CREATING = "CREATING",
  DELETING = "DELETING",
  FAILED = "FAILED",
  PENDING_ATTACHMENT_ACCEPTANCE = "PENDING_ATTACHMENT_ACCEPTANCE",
  PENDING_NETWORK_UPDATE = "PENDING_NETWORK_UPDATE",
  PENDING_TAG_ACCEPTANCE = "PENDING_TAG_ACCEPTANCE",
  REJECTED = "REJECTED",
  UPDATING = "UPDATING",
}

/**
 * <p>Describes a core network attachment.</p>
 */
export interface Attachment {
  /**
   * <p>A core network ID.</p>
   */
  CoreNetworkId?: string;

  /**
   * <p>The ARN of a core network.</p>
   */
  CoreNetworkArn?: string;

  /**
   * <p>The ID of the attachment.</p>
   */
  AttachmentId?: string;

  /**
   * <p>The ID of the attachment account owner.</p>
   */
  OwnerAccountId?: string;

  /**
   * <p>The type of attachment.</p>
   */
  AttachmentType?: AttachmentType | string;

  /**
   * <p>The state of the attachment.</p>
   */
  State?: AttachmentState | string;

  /**
   * <p>The Region where the edge is located.</p>
   */
  EdgeLocation?: string;

  /**
   * <p>The attachment resource ARN.</p>
   */
  ResourceArn?: string;

  /**
   * <p>The policy rule number associated with the attachment.</p>
   */
  AttachmentPolicyRuleNumber?: number;

  /**
   * <p>The name of the segment attachment.</p>
   */
  SegmentName?: string;

  /**
   * <p>The tags associated with the attachment.</p>
   */
  Tags?: Tag[];

  /**
   * <p>The attachment to move from one segment to another.</p>
   */
  ProposedSegmentChange?: ProposedSegmentChange;

  /**
   * <p>The timestamp when the attachment was created.</p>
   */
  CreatedAt?: Date;

  /**
   * <p>The timestamp when the attachment was last updated.</p>
   */
  UpdatedAt?: Date;
}

export namespace Attachment {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: Attachment): any => ({
    ...obj,
  });
}

export interface AcceptAttachmentResponse {
  /**
   * <p>The response to the attachment request. </p>
   */
  Attachment?: Attachment;
}

export namespace AcceptAttachmentResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: AcceptAttachmentResponse): any => ({
    ...obj,
  });
}

/**
 * <p>You do not have sufficient access to perform this action.</p>
 */
export class AccessDeniedException extends __BaseException {
  readonly name: "AccessDeniedException" = "AccessDeniedException";
  readonly $fault: "client" = "client";
  Message: string | undefined;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<AccessDeniedException, __BaseException>) {
    super({
      name: "AccessDeniedException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, AccessDeniedException.prototype);
    this.Message = opts.Message;
  }
}

/**
 * <p>There was a conflict processing the request. Updating or deleting the resource can
 *             cause an inconsistent state.</p>
 */
export class ConflictException extends __BaseException {
  readonly name: "ConflictException" = "ConflictException";
  readonly $fault: "client" = "client";
  Message: string | undefined;
  /**
   * <p>The ID of the resource.</p>
   */
  ResourceId: string | undefined;

  /**
   * <p>The resource type.</p>
   */
  ResourceType: string | undefined;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<ConflictException, __BaseException>) {
    super({
      name: "ConflictException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, ConflictException.prototype);
    this.Message = opts.Message;
    this.ResourceId = opts.ResourceId;
    this.ResourceType = opts.ResourceType;
  }
}

/**
 * <p>The request has failed due to an internal error.</p>
 */
export class InternalServerException extends __BaseException {
  readonly name: "InternalServerException" = "InternalServerException";
  readonly $fault: "server" = "server";
  Message: string | undefined;
  /**
   * <p>Indicates when to retry the request.</p>
   */
  RetryAfterSeconds?: number;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<InternalServerException, __BaseException>) {
    super({
      name: "InternalServerException",
      $fault: "server",
      ...opts,
    });
    Object.setPrototypeOf(this, InternalServerException.prototype);
    this.Message = opts.Message;
    this.RetryAfterSeconds = opts.RetryAfterSeconds;
  }
}

/**
 * <p>The specified resource could not be found.</p>
 */
export class ResourceNotFoundException extends __BaseException {
  readonly name: "ResourceNotFoundException" = "ResourceNotFoundException";
  readonly $fault: "client" = "client";
  Message: string | undefined;
  /**
   * <p>The ID of the resource.</p>
   */
  ResourceId: string | undefined;

  /**
   * <p>The resource type.</p>
   */
  ResourceType: string | undefined;

  /**
   * <p>The specified resource could not be found.</p>
   */
  Context?: { [key: string]: string };
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<ResourceNotFoundException, __BaseException>) {
    super({
      name: "ResourceNotFoundException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, ResourceNotFoundException.prototype);
    this.Message = opts.Message;
    this.ResourceId = opts.ResourceId;
    this.ResourceType = opts.ResourceType;
    this.Context = opts.Context;
  }
}

/**
 * <p>The request was denied due to request throttling.</p>
 */
export class ThrottlingException extends __BaseException {
  readonly name: "ThrottlingException" = "ThrottlingException";
  readonly $fault: "client" = "client";
  Message: string | undefined;
  /**
   * <p>Indicates when to retry the request.</p>
   */
  RetryAfterSeconds?: number;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<ThrottlingException, __BaseException>) {
    super({
      name: "ThrottlingException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, ThrottlingException.prototype);
    this.Message = opts.Message;
    this.RetryAfterSeconds = opts.RetryAfterSeconds;
  }
}

/**
 * <p>Describes a validation exception for a field.</p>
 */
export interface ValidationExceptionField {
  /**
   * <p>The name of the field.</p>
   */
  Name: string | undefined;

  /**
   * <p>The message for the field.</p>
   */
  Message: string | undefined;
}

export namespace ValidationExceptionField {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ValidationExceptionField): any => ({
    ...obj,
  });
}

export enum ValidationExceptionReason {
  CANNOT_PARSE = "CannotParse",
  FIELD_VALIDATION_FAILED = "FieldValidationFailed",
  OTHER = "Other",
  UNKNOWN_OPERATION = "UnknownOperation",
}

/**
 * <p>The input fails to satisfy the constraints.</p>
 */
export class ValidationException extends __BaseException {
  readonly name: "ValidationException" = "ValidationException";
  readonly $fault: "client" = "client";
  Message: string | undefined;
  /**
   * <p>The reason for the error.</p>
   */
  Reason?: ValidationExceptionReason | string;

  /**
   * <p>The fields that caused the error, if applicable.</p>
   */
  Fields?: ValidationExceptionField[];
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<ValidationException, __BaseException>) {
    super({
      name: "ValidationException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, ValidationException.prototype);
    this.Message = opts.Message;
    this.Reason = opts.Reason;
    this.Fields = opts.Fields;
  }
}

export interface AccountStatus {
  AccountId?: string;
  SLRDeploymentStatus?: string;
}

export namespace AccountStatus {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: AccountStatus): any => ({
    ...obj,
  });
}

export interface AssociateConnectPeerRequest {
  /**
   * <p>The ID of your global network.</p>
   */
  GlobalNetworkId: string | undefined;

  /**
   * <p>The ID of the Connect peer.</p>
   */
  ConnectPeerId: string | undefined;

  /**
   * <p>The ID of the device.</p>
   */
  DeviceId: string | undefined;

  /**
   * <p>The ID of the link.</p>
   */
  LinkId?: string;
}

export namespace AssociateConnectPeerRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: AssociateConnectPeerRequest): any => ({
    ...obj,
  });
}

export enum ConnectPeerAssociationState {
  available = "AVAILABLE",
  deleted = "DELETED",
  deleting = "DELETING",
  pending = "PENDING",
}

/**
 * <p>Describes a core network Connect peer association.</p>
 */
export interface ConnectPeerAssociation {
  /**
   * <p>The ID of the Connect peer.</p>
   */
  ConnectPeerId?: string;

  /**
   * <p>The ID of the global network.</p>
   */
  GlobalNetworkId?: string;

  /**
   * <p>The ID of the device to connect to.</p>
   */
  DeviceId?: string;

  /**
   * <p>The ID of the link.</p>
   */
  LinkId?: string;

  /**
   * <p>The state of the Connect peer association.</p>
   */
  State?: ConnectPeerAssociationState | string;
}

export namespace ConnectPeerAssociation {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ConnectPeerAssociation): any => ({
    ...obj,
  });
}

export interface AssociateConnectPeerResponse {
  /**
   * <p>The response to the Connect peer request.</p>
   */
  ConnectPeerAssociation?: ConnectPeerAssociation;
}

export namespace AssociateConnectPeerResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: AssociateConnectPeerResponse): any => ({
    ...obj,
  });
}

/**
 * <p>A service limit was exceeded.</p>
 */
export class ServiceQuotaExceededException extends __BaseException {
  readonly name: "ServiceQuotaExceededException" = "ServiceQuotaExceededException";
  readonly $fault: "client" = "client";
  /**
   * <p>The error message.</p>
   */
  Message: string | undefined;

  /**
   * <p>The ID of the resource.</p>
   */
  ResourceId?: string;

  /**
   * <p>The resource type.</p>
   */
  ResourceType?: string;

  /**
   * <p>The limit code.</p>
   */
  LimitCode: string | undefined;

  /**
   * <p>The service code.</p>
   */
  ServiceCode: string | undefined;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<ServiceQuotaExceededException, __BaseException>) {
    super({
      name: "ServiceQuotaExceededException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, ServiceQuotaExceededException.prototype);
    this.Message = opts.Message;
    this.ResourceId = opts.ResourceId;
    this.ResourceType = opts.ResourceType;
    this.LimitCode = opts.LimitCode;
    this.ServiceCode = opts.ServiceCode;
  }
}

export interface AssociateCustomerGatewayRequest {
  /**
   * <p>The Amazon Resource Name (ARN) of the customer gateway.</p>
   */
  CustomerGatewayArn: string | undefined;

  /**
   * <p>The ID of the global network.</p>
   */
  GlobalNetworkId: string | undefined;

  /**
   * <p>The ID of the device.</p>
   */
  DeviceId: string | undefined;

  /**
   * <p>The ID of the link.</p>
   */
  LinkId?: string;
}

export namespace AssociateCustomerGatewayRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: AssociateCustomerGatewayRequest): any => ({
    ...obj,
  });
}

export enum CustomerGatewayAssociationState {
  available = "AVAILABLE",
  deleted = "DELETED",
  deleting = "DELETING",
  pending = "PENDING",
}

/**
 * <p>Describes the association between a customer gateway, a device, and a link.</p>
 */
export interface CustomerGatewayAssociation {
  /**
   * <p>The Amazon Resource Name (ARN) of the customer gateway.</p>
   */
  CustomerGatewayArn?: string;

  /**
   * <p>The ID of the global network.</p>
   */
  GlobalNetworkId?: string;

  /**
   * <p>The ID of the device.</p>
   */
  DeviceId?: string;

  /**
   * <p>The ID of the link.</p>
   */
  LinkId?: string;

  /**
   * <p>The association state.</p>
   */
  State?: CustomerGatewayAssociationState | string;
}

export namespace CustomerGatewayAssociation {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: CustomerGatewayAssociation): any => ({
    ...obj,
  });
}

export interface AssociateCustomerGatewayResponse {
  /**
   * <p>The customer gateway association.</p>
   */
  CustomerGatewayAssociation?: CustomerGatewayAssociation;
}

export namespace AssociateCustomerGatewayResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: AssociateCustomerGatewayResponse): any => ({
    ...obj,
  });
}

export interface AssociateLinkRequest {
  /**
   * <p>The ID of the global network.</p>
   */
  GlobalNetworkId: string | undefined;

  /**
   * <p>The ID of the device.</p>
   */
  DeviceId: string | undefined;

  /**
   * <p>The ID of the link.</p>
   */
  LinkId: string | undefined;
}

export namespace AssociateLinkRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: AssociateLinkRequest): any => ({
    ...obj,
  });
}

export enum LinkAssociationState {
  available = "AVAILABLE",
  deleted = "DELETED",
  deleting = "DELETING",
  pending = "PENDING",
}

/**
 * <p>Describes the association between a device and a link.</p>
 */
export interface LinkAssociation {
  /**
   * <p>The ID of the global network.</p>
   */
  GlobalNetworkId?: string;

  /**
   * <p>The device ID for the link association.</p>
   */
  DeviceId?: string;

  /**
   * <p>The ID of the link.</p>
   */
  LinkId?: string;

  /**
   * <p>The state of the association.</p>
   */
  LinkAssociationState?: LinkAssociationState | string;
}

export namespace LinkAssociation {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: LinkAssociation): any => ({
    ...obj,
  });
}

export interface AssociateLinkResponse {
  /**
   * <p>The link association.</p>
   */
  LinkAssociation?: LinkAssociation;
}

export namespace AssociateLinkResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: AssociateLinkResponse): any => ({
    ...obj,
  });
}

export interface AssociateTransitGatewayConnectPeerRequest {
  /**
   * <p>The ID of the global network.</p>
   */
  GlobalNetworkId: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the Connect peer.</p>
   */
  TransitGatewayConnectPeerArn: string | undefined;

  /**
   * <p>The ID of the device.</p>
   */
  DeviceId: string | undefined;

  /**
   * <p>The ID of the link.</p>
   */
  LinkId?: string;
}

export namespace AssociateTransitGatewayConnectPeerRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: AssociateTransitGatewayConnectPeerRequest): any => ({
    ...obj,
  });
}

export enum TransitGatewayConnectPeerAssociationState {
  available = "AVAILABLE",
  deleted = "DELETED",
  deleting = "DELETING",
  pending = "PENDING",
}

/**
 * <p>Describes a transit gateway Connect peer association.</p>
 */
export interface TransitGatewayConnectPeerAssociation {
  /**
   * <p>The Amazon Resource Name (ARN) of the transit gateway Connect peer.</p>
   */
  TransitGatewayConnectPeerArn?: string;

  /**
   * <p>The ID of the global network.</p>
   */
  GlobalNetworkId?: string;

  /**
   * <p>The ID of the device.</p>
   */
  DeviceId?: string;

  /**
   * <p>The ID of the link.</p>
   */
  LinkId?: string;

  /**
   * <p>The state of the association.</p>
   */
  State?: TransitGatewayConnectPeerAssociationState | string;
}

export namespace TransitGatewayConnectPeerAssociation {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: TransitGatewayConnectPeerAssociation): any => ({
    ...obj,
  });
}

export interface AssociateTransitGatewayConnectPeerResponse {
  /**
   * <p>The transit gateway Connect peer association.</p>
   */
  TransitGatewayConnectPeerAssociation?: TransitGatewayConnectPeerAssociation;
}

export namespace AssociateTransitGatewayConnectPeerResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: AssociateTransitGatewayConnectPeerResponse): any => ({
    ...obj,
  });
}

/**
 * <p>Specifies a location in Amazon Web Services.</p>
 */
export interface AWSLocation {
  /**
   * <p>The Zone that the device is located in. Specify the ID of an Availability Zone, Local
   *             Zone, Wavelength Zone, or an Outpost.</p>
   */
  Zone?: string;

  /**
   * <p>The Amazon Resource Name (ARN) of the subnet that the device is located in.</p>
   */
  SubnetArn?: string;
}

export namespace AWSLocation {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: AWSLocation): any => ({
    ...obj,
  });
}

/**
 * <p>Describes bandwidth information.</p>
 */
export interface Bandwidth {
  /**
   * <p>Upload speed in Mbps.</p>
   */
  UploadSpeed?: number;

  /**
   * <p>Download speed in Mbps.</p>
   */
  DownloadSpeed?: number;
}

export namespace Bandwidth {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: Bandwidth): any => ({
    ...obj,
  });
}

/**
 * <p>Describes the BGP options.</p>
 */
export interface BgpOptions {
  /**
   * <p>The Peer ASN of the BGP.</p>
   */
  PeerAsn?: number;
}

export namespace BgpOptions {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: BgpOptions): any => ({
    ...obj,
  });
}

export enum ChangeAction {
  ADD = "ADD",
  MODIFY = "MODIFY",
  REMOVE = "REMOVE",
}

export enum ChangeSetState {
  EXECUTING = "EXECUTING",
  EXECUTION_SUCCEEDED = "EXECUTION_SUCCEEDED",
  FAILED_GENERATION = "FAILED_GENERATION",
  OUT_OF_DATE = "OUT_OF_DATE",
  PENDING_GENERATION = "PENDING_GENERATION",
  READY_TO_EXECUTE = "READY_TO_EXECUTE",
}

export enum ChangeType {
  ATTACHMENT_MAPPING = "ATTACHMENT_MAPPING",
  ATTACHMENT_ROUTE_PROPAGATION = "ATTACHMENT_ROUTE_PROPAGATION",
  ATTACHMENT_ROUTE_STATIC = "ATTACHMENT_ROUTE_STATIC",
  CORE_NETWORK_EDGE = "CORE_NETWORK_EDGE",
  CORE_NETWORK_SEGMENT = "CORE_NETWORK_SEGMENT",
}

export enum TunnelProtocol {
  GRE = "GRE",
}

/**
 * <p>Describes a core network Connect attachment options.</p>
 */
export interface ConnectAttachmentOptions {
  /**
   * <p>The protocol used for the attachment connection.</p>
   */
  Protocol?: TunnelProtocol | string;
}

export namespace ConnectAttachmentOptions {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ConnectAttachmentOptions): any => ({
    ...obj,
  });
}

/**
 * <p>Describes a core network Connect attachment.</p>
 */
export interface ConnectAttachment {
  /**
   * <p>The attachment details.</p>
   */
  Attachment?: Attachment;

  /**
   * <p>The ID of the transport attachment.</p>
   */
  TransportAttachmentId?: string;

  /**
   * <p>Options for connecting an attachment.</p>
   */
  Options?: ConnectAttachmentOptions;
}

export namespace ConnectAttachment {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ConnectAttachment): any => ({
    ...obj,
  });
}

export enum ConnectionState {
  available = "AVAILABLE",
  deleting = "DELETING",
  pending = "PENDING",
  updating = "UPDATING",
}

/**
 * <p>Describes a connection.</p>
 */
export interface Connection {
  /**
   * <p>The ID of the connection.</p>
   */
  ConnectionId?: string;

  /**
   * <p>The Amazon Resource Name (ARN) of the connection.</p>
   */
  ConnectionArn?: string;

  /**
   * <p>The ID of the global network.</p>
   */
  GlobalNetworkId?: string;

  /**
   * <p>The ID of the first device in the connection.</p>
   */
  DeviceId?: string;

  /**
   * <p>The ID of the second device in the connection.</p>
   */
  ConnectedDeviceId?: string;

  /**
   * <p>The ID of the link for the first device in the connection.</p>
   */
  LinkId?: string;

  /**
   * <p>The ID of the link for the second device in the connection.</p>
   */
  ConnectedLinkId?: string;

  /**
   * <p>The description of the connection.</p>
   */
  Description?: string;

  /**
   * <p>The date and time that the connection was created.</p>
   */
  CreatedAt?: Date;

  /**
   * <p>The state of the connection.</p>
   */
  State?: ConnectionState | string;

  /**
   * <p>The tags for the connection.</p>
   */
  Tags?: Tag[];
}

export namespace Connection {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: Connection): any => ({
    ...obj,
  });
}

export enum ConnectionStatus {
  DOWN = "DOWN",
  UP = "UP",
}

export enum ConnectionType {
  BGP = "BGP",
  IPSEC = "IPSEC",
}

/**
 * <p>Describes connection health.</p>
 */
export interface ConnectionHealth {
  /**
   * <p>The connection type.</p>
   */
  Type?: ConnectionType | string;

  /**
   * <p>The connection status.</p>
   */
  Status?: ConnectionStatus | string;

  /**
   * <p>The time the status was last updated.</p>
   */
  Timestamp?: Date;
}

export namespace ConnectionHealth {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ConnectionHealth): any => ({
    ...obj,
  });
}

/**
 * <p>Describes a core network BGP configuration.</p>
 */
export interface ConnectPeerBgpConfiguration {
  /**
   * <p>The ASN of the Coret Network.</p>
   */
  CoreNetworkAsn?: number;

  /**
   * <p>The ASN of the Connect peer.</p>
   */
  PeerAsn?: number;

  /**
   * <p>The address of a core network.</p>
   */
  CoreNetworkAddress?: string;

  /**
   * <p>The address of a core network Connect peer.</p>
   */
  PeerAddress?: string;
}

export namespace ConnectPeerBgpConfiguration {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ConnectPeerBgpConfiguration): any => ({
    ...obj,
  });
}

/**
 * <p>Describes a core network Connect peer configuration.</p>
 */
export interface ConnectPeerConfiguration {
  /**
   * <p>The IP address of a core network.</p>
   */
  CoreNetworkAddress?: string;

  /**
   * <p>The IP address of the Connect peer.</p>
   */
  PeerAddress?: string;

  /**
   * <p>The inside IP addresses used for a Connect peer configuration.</p>
   */
  InsideCidrBlocks?: string[];

  /**
   * <p>The protocol used for a Connect peer configuration.</p>
   */
  Protocol?: TunnelProtocol | string;

  /**
   * <p>The Connect peer BGP configurations.</p>
   */
  BgpConfigurations?: ConnectPeerBgpConfiguration[];
}

export namespace ConnectPeerConfiguration {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ConnectPeerConfiguration): any => ({
    ...obj,
  });
}

export enum ConnectPeerState {
  AVAILABLE = "AVAILABLE",
  CREATING = "CREATING",
  DELETING = "DELETING",
  FAILED = "FAILED",
}

/**
 * <p>Describes a core network Connect peer.</p>
 */
export interface ConnectPeer {
  /**
   * <p>The ID of a core network.</p>
   */
  CoreNetworkId?: string;

  /**
   * <p>The ID of the attachment to connect.</p>
   */
  ConnectAttachmentId?: string;

  /**
   * <p>The ID of the Connect peer.</p>
   */
  ConnectPeerId?: string;

  /**
   * <p>The Connect peer Regions where edges are located.</p>
   */
  EdgeLocation?: string;

  /**
   * <p>The state of the Connect peer.</p>
   */
  State?: ConnectPeerState | string;

  /**
   * <p>The timestamp when the Connect peer was created.</p>
   */
  CreatedAt?: Date;

  /**
   * <p>The configuration of the Connect peer.</p>
   */
  Configuration?: ConnectPeerConfiguration;

  /**
   * <p>The tags associated with the Connect peer.</p>
   */
  Tags?: Tag[];
}

export namespace ConnectPeer {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ConnectPeer): any => ({
    ...obj,
  });
}

/**
 * <p>Summary description of a Connect peer.</p>
 */
export interface ConnectPeerSummary {
  /**
   * <p>The ID of a core network.</p>
   */
  CoreNetworkId?: string;

  /**
   * <p>The ID of a Connect peer attachment.</p>
   */
  ConnectAttachmentId?: string;

  /**
   * <p>The ID of a Connect peer.</p>
   */
  ConnectPeerId?: string;

  /**
   * <p>The Region where the edge is located.</p>
   */
  EdgeLocation?: string;

  /**
   * <p>The state of a Connect peer.</p>
   */
  ConnectPeerState?: ConnectPeerState | string;

  /**
   * <p>The timestamp when a Connect peer was created.</p>
   */
  CreatedAt?: Date;

  /**
   * <p>The tags associated with a Connect peer summary.</p>
   */
  Tags?: Tag[];
}

export namespace ConnectPeerSummary {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ConnectPeerSummary): any => ({
    ...obj,
  });
}

/**
 * <p>Describes a core network edge.</p>
 */
export interface CoreNetworkEdge {
  /**
   * <p>The Region where a core network edge is located.</p>
   */
  EdgeLocation?: string;

  /**
   * <p>The ASN of a core network edge.</p>
   */
  Asn?: number;

  /**
   * <p>The inside IP addresses used for core network edges.</p>
   */
  InsideCidrBlocks?: string[];
}

export namespace CoreNetworkEdge {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: CoreNetworkEdge): any => ({
    ...obj,
  });
}

/**
 * <p>Describes a core network segment, which are dedicated routes. Only attachments within this segment can communicate with each other.</p>
 */
export interface CoreNetworkSegment {
  /**
   * <p>The name of a core network segment.</p>
   */
  Name?: string;

  /**
   * <p>The Regions where the edges are located.</p>
   */
  EdgeLocations?: string[];

  /**
   * <p>The shared segments of a core network.</p>
   */
  SharedSegments?: string[];
}

export namespace CoreNetworkSegment {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: CoreNetworkSegment): any => ({
    ...obj,
  });
}

export enum CoreNetworkState {
  AVAILABLE = "AVAILABLE",
  CREATING = "CREATING",
  DELETING = "DELETING",
  UPDATING = "UPDATING",
}

/**
 * <p>Describes a core network.</p>
 */
export interface CoreNetwork {
  /**
   * <p>The ID of the global network that your core network is a part of. </p>
   */
  GlobalNetworkId?: string;

  /**
   * <p>The ID of a core network.</p>
   */
  CoreNetworkId?: string;

  /**
   * <p>The ARN of a core network.</p>
   */
  CoreNetworkArn?: string;

  /**
   * <p>The description of a core network.</p>
   */
  Description?: string;

  /**
   * <p>The timestamp when a core network was created.</p>
   */
  CreatedAt?: Date;

  /**
   * <p>The current state of a core network.</p>
   */
  State?: CoreNetworkState | string;

  /**
   * <p>The segments within a core network.</p>
   */
  Segments?: CoreNetworkSegment[];

  /**
   * <p>The edges within a core network.</p>
   */
  Edges?: CoreNetworkEdge[];

  /**
   * <p>The tags associated with a core network.</p>
   */
  Tags?: Tag[];
}

export namespace CoreNetwork {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: CoreNetwork): any => ({
    ...obj,
  });
}

/**
 * <p>Describes a core network change.</p>
 */
export interface CoreNetworkChangeValues {
  /**
   * <p>The names of the segments in a core network.</p>
   */
  SegmentName?: string;

  /**
   * <p>The Regions where edges are located in a core network. </p>
   */
  EdgeLocations?: string[];

  /**
   * <p>The ASN of a core network.</p>
   */
  Asn?: number;

  /**
   * <p>The IP addresses used for a core network.</p>
   */
  Cidr?: string;

  /**
   * <p>The ID of the destination.</p>
   */
  DestinationIdentifier?: string;

  /**
   * <p>The inside IP addresses used for core network change values.</p>
   */
  InsideCidrBlocks?: string[];

  /**
   * <p>The shared segments for a core network change value. </p>
   */
  SharedSegments?: string[];
}

export namespace CoreNetworkChangeValues {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: CoreNetworkChangeValues): any => ({
    ...obj,
  });
}

/**
 * <p>Details describing a core network change.</p>
 */
export interface CoreNetworkChange {
  /**
   * <p>The type of change.</p>
   */
  Type?: ChangeType | string;

  /**
   * <p>The action to take for a core network.</p>
   */
  Action?: ChangeAction | string;

  /**
   * <p>The resource identifier.</p>
   */
  Identifier?: string;

  /**
   * <p>The previous values for a core network.</p>
   */
  PreviousValues?: CoreNetworkChangeValues;

  /**
   * <p>The new value for a core network</p>
   */
  NewValues?: CoreNetworkChangeValues;
}

export namespace CoreNetworkChange {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: CoreNetworkChange): any => ({
    ...obj,
  });
}

export enum CoreNetworkPolicyAlias {
  LATEST = "LATEST",
  LIVE = "LIVE",
}

/**
 * <p>Provides details about an error in a core network policy.</p>
 */
export interface CoreNetworkPolicyError {
  /**
   * <p>The error code associated with a core network policy error.</p>
   */
  ErrorCode: string | undefined;

  /**
   * <p>The message associated with a core network policy error code.</p>
   */
  Message: string | undefined;

  /**
   * <p>The JSON path where the error was discovered in the policy document.</p>
   */
  Path?: string;
}

export namespace CoreNetworkPolicyError {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: CoreNetworkPolicyError): any => ({
    ...obj,
  });
}

/**
 * <p>Describes a core network policy. You can have only one LIVE Core Policy.</p>
 */
export interface CoreNetworkPolicy {
  /**
   * <p>The ID of a core network.</p>
   */
  CoreNetworkId?: string;

  /**
   * <p>The ID of the policy version.</p>
   */
  PolicyVersionId?: number;

  /**
   * <p>Whether a core network policy is the current LIVE policy or the most recently submitted policy.</p>
   */
  Alias?: CoreNetworkPolicyAlias | string;

  /**
   * <p>The description of a core network policy.</p>
   */
  Description?: string;

  /**
   * <p>The timestamp when a core network policy was created.</p>
   */
  CreatedAt?: Date;

  /**
   * <p>The state of a core network policy.</p>
   */
  ChangeSetState?: ChangeSetState | string;

  /**
   * <p>Describes any errors in a core network policy.</p>
   */
  PolicyErrors?: CoreNetworkPolicyError[];

  /**
   * <p>Describes a core network policy.</p>
   */
  PolicyDocument?: __LazyJsonString | string;
}

export namespace CoreNetworkPolicy {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: CoreNetworkPolicy): any => ({
    ...obj,
  });
}

/**
 * <p>Describes a core network policy exception.</p>
 */
export class CoreNetworkPolicyException extends __BaseException {
  readonly name: "CoreNetworkPolicyException" = "CoreNetworkPolicyException";
  readonly $fault: "client" = "client";
  Message: string | undefined;
  /**
   * <p>Describes a core network policy exception.</p>
   */
  Errors?: CoreNetworkPolicyError[];
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<CoreNetworkPolicyException, __BaseException>) {
    super({
      name: "CoreNetworkPolicyException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, CoreNetworkPolicyException.prototype);
    this.Message = opts.Message;
    this.Errors = opts.Errors;
  }
}

/**
 * <p>Describes a core network policy version.</p>
 */
export interface CoreNetworkPolicyVersion {
  /**
   * <p>The ID of a core network.</p>
   */
  CoreNetworkId?: string;

  /**
   * <p>The ID of the policy version.</p>
   */
  PolicyVersionId?: number;

  /**
   * <p>Whether a core network policy is the current policy or the most recently submitted policy.</p>
   */
  Alias?: CoreNetworkPolicyAlias | string;

  /**
   * <p>The description of a core network policy version.</p>
   */
  Description?: string;

  /**
   * <p>The timestamp when a core network policy version was created.</p>
   */
  CreatedAt?: Date;

  /**
   * <p>The status of the policy version change set.</p>
   */
  ChangeSetState?: ChangeSetState | string;
}

export namespace CoreNetworkPolicyVersion {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: CoreNetworkPolicyVersion): any => ({
    ...obj,
  });
}

/**
 * <p>Returns details about a core network edge.</p>
 */
export interface CoreNetworkSegmentEdgeIdentifier {
  /**
   * <p>The ID of a core network.</p>
   */
  CoreNetworkId?: string;

  /**
   * <p>The name of the segment edge.</p>
   */
  SegmentName?: string;

  /**
   * <p>The Region where the segment edge is located.</p>
   */
  EdgeLocation?: string;
}

export namespace CoreNetworkSegmentEdgeIdentifier {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: CoreNetworkSegmentEdgeIdentifier): any => ({
    ...obj,
  });
}

/**
 * <p>Returns summary information about a core network.</p>
 */
export interface CoreNetworkSummary {
  /**
   * <p>The ID of a core network.</p>
   */
  CoreNetworkId?: string;

  /**
   * <p>a core network ARN.</p>
   */
  CoreNetworkArn?: string;

  /**
   * <p>The global network ID.</p>
   */
  GlobalNetworkId?: string;

  /**
   * <p>The ID of the account owner.</p>
   */
  OwnerAccountId?: string;

  /**
   * <p>The state of a core network.</p>
   */
  State?: CoreNetworkState | string;

  /**
   * <p>The description of a core network.</p>
   */
  Description?: string;

  /**
   * <p>The key-value tags associated with a core network summary.</p>
   */
  Tags?: Tag[];
}

export namespace CoreNetworkSummary {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: CoreNetworkSummary): any => ({
    ...obj,
  });
}

export interface CreateConnectAttachmentRequest {
  /**
   * <p>The ID of a core network where you want to create the attachment. </p>
   */
  CoreNetworkId: string | undefined;

  /**
   * <p>The Region where the edge is located.</p>
   */
  EdgeLocation: string | undefined;

  /**
   * <p>The ID of the attachment between the two connections.</p>
   */
  TransportAttachmentId: string | undefined;

  /**
   * <p>Options for creating an attachment.</p>
   */
  Options: ConnectAttachmentOptions | undefined;

  /**
   * <p>The list of key-value tags associated with the request.</p>
   */
  Tags?: Tag[];

  /**
   * <p>The client token associated with the request.</p>
   */
  ClientToken?: string;
}

export namespace CreateConnectAttachmentRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: CreateConnectAttachmentRequest): any => ({
    ...obj,
  });
}

export interface CreateConnectAttachmentResponse {
  /**
   * <p>The response to a Connect attachment request.</p>
   */
  ConnectAttachment?: ConnectAttachment;
}

export namespace CreateConnectAttachmentResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: CreateConnectAttachmentResponse): any => ({
    ...obj,
  });
}

export interface CreateConnectionRequest {
  /**
   * <p>The ID of the global network.</p>
   */
  GlobalNetworkId: string | undefined;

  /**
   * <p>The ID of the first device in the connection.</p>
   */
  DeviceId: string | undefined;

  /**
   * <p>The ID of the second device in the connection.</p>
   */
  ConnectedDeviceId: string | undefined;

  /**
   * <p>The ID of the link for the first device.</p>
   */
  LinkId?: string;

  /**
   * <p>The ID of the link for the second device.</p>
   */
  ConnectedLinkId?: string;

  /**
   * <p>A description of the connection.</p>
   *         <p>Length Constraints: Maximum length of 256 characters.</p>
   */
  Description?: string;

  /**
   * <p>The tags to apply to the resource during creation.</p>
   */
  Tags?: Tag[];
}

export namespace CreateConnectionRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: CreateConnectionRequest): any => ({
    ...obj,
  });
}

export interface CreateConnectionResponse {
  /**
   * <p>Information about the connection.</p>
   */
  Connection?: Connection;
}

export namespace CreateConnectionResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: CreateConnectionResponse): any => ({
    ...obj,
  });
}

export interface CreateConnectPeerRequest {
  /**
   * <p>The ID of the connection attachment.</p>
   */
  ConnectAttachmentId: string | undefined;

  /**
   * <p>A Connect peer core network address.</p>
   */
  CoreNetworkAddress?: string;

  /**
   * <p>The Connect peer address.</p>
   */
  PeerAddress: string | undefined;

  /**
   * <p>The Connect peer BGP options.</p>
   */
  BgpOptions?: BgpOptions;

  /**
   * <p>The inside IP addresses used for BGP peering.</p>
   */
  InsideCidrBlocks: string[] | undefined;

  /**
   * <p>The tags associated with the peer request.</p>
   */
  Tags?: Tag[];

  /**
   * <p>The client token associated with the request.</p>
   */
  ClientToken?: string;
}

export namespace CreateConnectPeerRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: CreateConnectPeerRequest): any => ({
    ...obj,
  });
}

export interface CreateConnectPeerResponse {
  /**
   * <p>The response to the request.</p>
   */
  ConnectPeer?: ConnectPeer;
}

export namespace CreateConnectPeerResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: CreateConnectPeerResponse): any => ({
    ...obj,
  });
}

export interface CreateCoreNetworkRequest {
  /**
   * <p>The ID of the global network that a core network will be a part of. </p>
   */
  GlobalNetworkId: string | undefined;

  /**
   * <p>The description of a core network.</p>
   */
  Description?: string;

  /**
   * <p>Key-value tags associated with a core network request.</p>
   */
  Tags?: Tag[];

  /**
   * <p>The policy document for creating a core network.</p>
   */
  PolicyDocument?: string;

  /**
   * <p>The client token associated with a core network request.</p>
   */
  ClientToken?: string;
}

export namespace CreateCoreNetworkRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: CreateCoreNetworkRequest): any => ({
    ...obj,
  });
}

export interface CreateCoreNetworkResponse {
  /**
   * <p>Returns details about a core network.</p>
   */
  CoreNetwork?: CoreNetwork;
}

export namespace CreateCoreNetworkResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: CreateCoreNetworkResponse): any => ({
    ...obj,
  });
}

/**
 * <p>Describes a location.</p>
 */
export interface Location {
  /**
   * <p>The physical address.</p>
   */
  Address?: string;

  /**
   * <p>The latitude.</p>
   */
  Latitude?: string;

  /**
   * <p>The longitude.</p>
   */
  Longitude?: string;
}

export namespace Location {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: Location): any => ({
    ...obj,
  });
}

export interface CreateDeviceRequest {
  /**
   * <p>The ID of the global network.</p>
   */
  GlobalNetworkId: string | undefined;

  /**
   * <p>The Amazon Web Services location of the device, if applicable. For an on-premises device, you can omit this parameter.</p>
   */
  AWSLocation?: AWSLocation;

  /**
   * <p>A description of the device.</p>
   *         <p>Constraints: Maximum length of 256 characters.</p>
   */
  Description?: string;

  /**
   * <p>The type of the device.</p>
   */
  Type?: string;

  /**
   * <p>The vendor of the device.</p>
   *         <p>Constraints: Maximum length of 128 characters.</p>
   */
  Vendor?: string;

  /**
   * <p>The model of the device.</p>
   *         <p>Constraints: Maximum length of 128 characters.</p>
   */
  Model?: string;

  /**
   * <p>The serial number of the device.</p>
   *         <p>Constraints: Maximum length of 128 characters.</p>
   */
  SerialNumber?: string;

  /**
   * <p>The location of the device.</p>
   */
  Location?: Location;

  /**
   * <p>The ID of the site.</p>
   */
  SiteId?: string;

  /**
   * <p>The tags to apply to the resource during creation.</p>
   */
  Tags?: Tag[];
}

export namespace CreateDeviceRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: CreateDeviceRequest): any => ({
    ...obj,
    ...(obj.Location && { Location: SENSITIVE_STRING }),
  });
}

export enum DeviceState {
  available = "AVAILABLE",
  deleting = "DELETING",
  pending = "PENDING",
  updating = "UPDATING",
}

/**
 * <p>Describes a device.</p>
 */
export interface Device {
  /**
   * <p>The ID of the device.</p>
   */
  DeviceId?: string;

  /**
   * <p>The Amazon Resource Name (ARN) of the device.</p>
   */
  DeviceArn?: string;

  /**
   * <p>The ID of the global network.</p>
   */
  GlobalNetworkId?: string;

  /**
   * <p>The Amazon Web Services location of the device.</p>
   */
  AWSLocation?: AWSLocation;

  /**
   * <p>The description of the device.</p>
   */
  Description?: string;

  /**
   * <p>The device type.</p>
   */
  Type?: string;

  /**
   * <p>The device vendor.</p>
   */
  Vendor?: string;

  /**
   * <p>The device model.</p>
   */
  Model?: string;

  /**
   * <p>The device serial number.</p>
   */
  SerialNumber?: string;

  /**
   * <p>The site location.</p>
   */
  Location?: Location;

  /**
   * <p>The site ID.</p>
   */
  SiteId?: string;

  /**
   * <p>The date and time that the site was created.</p>
   */
  CreatedAt?: Date;

  /**
   * <p>The device state.</p>
   */
  State?: DeviceState | string;

  /**
   * <p>The tags for the device.</p>
   */
  Tags?: Tag[];
}

export namespace Device {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: Device): any => ({
    ...obj,
    ...(obj.Location && { Location: SENSITIVE_STRING }),
  });
}

export interface CreateDeviceResponse {
  /**
   * <p>Information about the device.</p>
   */
  Device?: Device;
}

export namespace CreateDeviceResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: CreateDeviceResponse): any => ({
    ...obj,
    ...(obj.Device && { Device: Device.filterSensitiveLog(obj.Device) }),
  });
}

export interface CreateGlobalNetworkRequest {
  /**
   * <p>A description of the global network.</p>
   *         <p>Constraints: Maximum length of 256 characters.</p>
   */
  Description?: string;

  /**
   * <p>The tags to apply to the resource during creation.</p>
   */
  Tags?: Tag[];
}

export namespace CreateGlobalNetworkRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: CreateGlobalNetworkRequest): any => ({
    ...obj,
  });
}

export enum GlobalNetworkState {
  available = "AVAILABLE",
  deleting = "DELETING",
  pending = "PENDING",
  updating = "UPDATING",
}

/**
 * <p>Describes a global network. This is a single private network acting as a high-level container for your network objects, including an Amazon Web Services-managed Core Network.</p>
 */
export interface GlobalNetwork {
  /**
   * <p>The ID of the global network.</p>
   */
  GlobalNetworkId?: string;

  /**
   * <p>The Amazon Resource Name (ARN) of the global network.</p>
   */
  GlobalNetworkArn?: string;

  /**
   * <p>The description of the global network.</p>
   */
  Description?: string;

  /**
   * <p>The date and time that the global network was created.</p>
   */
  CreatedAt?: Date;

  /**
   * <p>The state of the global network.</p>
   */
  State?: GlobalNetworkState | string;

  /**
   * <p>The tags for the global network.</p>
   */
  Tags?: Tag[];
}

export namespace GlobalNetwork {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: GlobalNetwork): any => ({
    ...obj,
  });
}

export interface CreateGlobalNetworkResponse {
  /**
   * <p>Information about the global network object.</p>
   */
  GlobalNetwork?: GlobalNetwork;
}

export namespace CreateGlobalNetworkResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: CreateGlobalNetworkResponse): any => ({
    ...obj,
  });
}

export interface CreateLinkRequest {
  /**
   * <p>The ID of the global network.</p>
   */
  GlobalNetworkId: string | undefined;

  /**
   * <p>A description of the link.</p>
   *         <p>Constraints: Maximum length of 256 characters.</p>
   */
  Description?: string;

  /**
   * <p>The type of the link.</p>
   *         <p>Constraints: Maximum length of 128 characters. Cannot include the following characters: | \ ^</p>
   */
  Type?: string;

  /**
   * <p> The upload speed and download speed in Mbps. </p>
   */
  Bandwidth: Bandwidth | undefined;

  /**
   * <p>The provider of the link.</p>
   *         <p>Constraints: Maximum length of 128 characters. Cannot include the following characters: | \ ^</p>
   */
  Provider?: string;

  /**
   * <p>The ID of the site.</p>
   */
  SiteId: string | undefined;

  /**
   * <p>The tags to apply to the resource during creation.</p>
   */
  Tags?: Tag[];
}

export namespace CreateLinkRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: CreateLinkRequest): any => ({
    ...obj,
  });
}

export enum LinkState {
  available = "AVAILABLE",
  deleting = "DELETING",
  pending = "PENDING",
  updating = "UPDATING",
}

/**
 * <p>Describes a link.</p>
 */
export interface Link {
  /**
   * <p>The ID of the link.</p>
   */
  LinkId?: string;

  /**
   * <p>The Amazon Resource Name (ARN) of the link.</p>
   */
  LinkArn?: string;

  /**
   * <p>The ID of the global network.</p>
   */
  GlobalNetworkId?: string;

  /**
   * <p>The ID of the site.</p>
   */
  SiteId?: string;

  /**
   * <p>The description of the link.</p>
   */
  Description?: string;

  /**
   * <p>The type of the link.</p>
   */
  Type?: string;

  /**
   * <p>The bandwidth for the link.</p>
   */
  Bandwidth?: Bandwidth;

  /**
   * <p>The provider of the link.</p>
   */
  Provider?: string;

  /**
   * <p>The date and time that the link was created.</p>
   */
  CreatedAt?: Date;

  /**
   * <p>The state of the link.</p>
   */
  State?: LinkState | string;

  /**
   * <p>The tags for the link.</p>
   */
  Tags?: Tag[];
}

export namespace Link {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: Link): any => ({
    ...obj,
  });
}

export interface CreateLinkResponse {
  /**
   * <p>Information about the link.</p>
   */
  Link?: Link;
}

export namespace CreateLinkResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: CreateLinkResponse): any => ({
    ...obj,
  });
}

export interface CreateSiteRequest {
  /**
   * <p>The ID of the global network.</p>
   */
  GlobalNetworkId: string | undefined;

  /**
   * <p>A description of your site.</p>
   *         <p>Constraints: Maximum length of 256 characters.</p>
   */
  Description?: string;

  /**
   * <p>The site location. This information is used for visualization in the Network Manager console. If you specify the address, the latitude and longitude are automatically calculated.</p>
   *         <ul>
   *             <li>
   *                <p>
   *                   <code>Address</code>: The physical address of the site.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>Latitude</code>: The latitude of the site. </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>Longitude</code>: The longitude of the site.</p>
   *             </li>
   *          </ul>
   */
  Location?: Location;

  /**
   * <p>The tags to apply to the resource during creation.</p>
   */
  Tags?: Tag[];
}

export namespace CreateSiteRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: CreateSiteRequest): any => ({
    ...obj,
    ...(obj.Location && { Location: SENSITIVE_STRING }),
  });
}

export enum SiteState {
  available = "AVAILABLE",
  deleting = "DELETING",
  pending = "PENDING",
  updating = "UPDATING",
}

/**
 * <p>Describes a site.</p>
 */
export interface Site {
  /**
   * <p>The ID of the site.</p>
   */
  SiteId?: string;

  /**
   * <p>The Amazon Resource Name (ARN) of the site.</p>
   */
  SiteArn?: string;

  /**
   * <p>The ID of the global network.</p>
   */
  GlobalNetworkId?: string;

  /**
   * <p>The description of the site.</p>
   */
  Description?: string;

  /**
   * <p>The location of the site.</p>
   */
  Location?: Location;

  /**
   * <p>The date and time that the site was created.</p>
   */
  CreatedAt?: Date;

  /**
   * <p>The state of the site.</p>
   */
  State?: SiteState | string;

  /**
   * <p>The tags for the site.</p>
   */
  Tags?: Tag[];
}

export namespace Site {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: Site): any => ({
    ...obj,
    ...(obj.Location && { Location: SENSITIVE_STRING }),
  });
}

export interface CreateSiteResponse {
  /**
   * <p>Information about the site.</p>
   */
  Site?: Site;
}

export namespace CreateSiteResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: CreateSiteResponse): any => ({
    ...obj,
    ...(obj.Site && { Site: Site.filterSensitiveLog(obj.Site) }),
  });
}

export interface CreateSiteToSiteVpnAttachmentRequest {
  /**
   * <p>The ID of a core network where you're creating a site-to-site VPN attachment.</p>
   */
  CoreNetworkId: string | undefined;

  /**
   * <p>The ARN identifying the VPN attachment.</p>
   */
  VpnConnectionArn: string | undefined;

  /**
   * <p>The tags associated with the request.</p>
   */
  Tags?: Tag[];

  /**
   * <p>The client token associated with the request.</p>
   */
  ClientToken?: string;
}

export namespace CreateSiteToSiteVpnAttachmentRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: CreateSiteToSiteVpnAttachmentRequest): any => ({
    ...obj,
  });
}

/**
 * <p>Creates a site-to-site VPN attachment.</p>
 */
export interface SiteToSiteVpnAttachment {
  /**
   * <p>Provides details about a site-to-site VPN attachment.</p>
   */
  Attachment?: Attachment;

  /**
   * <p>The ARN of the site-to-site VPN attachment. </p>
   */
  VpnConnectionArn?: string;
}

export namespace SiteToSiteVpnAttachment {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: SiteToSiteVpnAttachment): any => ({
    ...obj,
  });
}

export interface CreateSiteToSiteVpnAttachmentResponse {
  /**
   * <p>Details about a site-to-site VPN attachment.</p>
   */
  SiteToSiteVpnAttachment?: SiteToSiteVpnAttachment;
}

export namespace CreateSiteToSiteVpnAttachmentResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: CreateSiteToSiteVpnAttachmentResponse): any => ({
    ...obj,
  });
}

/**
 * <p>Describes the VPC options.</p>
 */
export interface VpcOptions {
  /**
   * <p>Indicates whether IPv6 is supported.</p>
   */
  Ipv6Support?: boolean;
}

export namespace VpcOptions {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: VpcOptions): any => ({
    ...obj,
  });
}

export interface CreateVpcAttachmentRequest {
  /**
   * <p>The ID of a core network for the VPC attachment.</p>
   */
  CoreNetworkId: string | undefined;

  /**
   * <p>The ARN of the VPC.</p>
   */
  VpcArn: string | undefined;

  /**
   * <p>The subnet ARN of the VPC attachment.</p>
   */
  SubnetArns: string[] | undefined;

  /**
   * <p>Options for the VPC attachment.</p>
   */
  Options?: VpcOptions;

  /**
   * <p>The key-value tags associated with the request.</p>
   */
  Tags?: Tag[];

  /**
   * <p>The client token associated with the request.</p>
   */
  ClientToken?: string;
}

export namespace CreateVpcAttachmentRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: CreateVpcAttachmentRequest): any => ({
    ...obj,
  });
}

/**
 * <p>Describes a VPC attachment.</p>
 */
export interface VpcAttachment {
  /**
   * <p>Provides details about the VPC attachment.</p>
   */
  Attachment?: Attachment;

  /**
   * <p>The subnet ARNs.</p>
   */
  SubnetArns?: string[];

  /**
   * <p>Provides details about the VPC attachment.</p>
   */
  Options?: VpcOptions;
}

export namespace VpcAttachment {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: VpcAttachment): any => ({
    ...obj,
  });
}

export interface CreateVpcAttachmentResponse {
  /**
   * <p>Provides details about the VPC attachment.</p>
   */
  VpcAttachment?: VpcAttachment;
}

export namespace CreateVpcAttachmentResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: CreateVpcAttachmentResponse): any => ({
    ...obj,
  });
}

export interface DeleteAttachmentRequest {
  /**
   * <p>The ID of the attachment to delete.</p>
   */
  AttachmentId: string | undefined;
}

export namespace DeleteAttachmentRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DeleteAttachmentRequest): any => ({
    ...obj,
  });
}

export interface DeleteAttachmentResponse {
  /**
   * <p>Information about the deleted attachment.</p>
   */
  Attachment?: Attachment;
}

export namespace DeleteAttachmentResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DeleteAttachmentResponse): any => ({
    ...obj,
  });
}

export interface DeleteConnectionRequest {
  /**
   * <p>The ID of the global network.</p>
   */
  GlobalNetworkId: string | undefined;

  /**
   * <p>The ID of the connection.</p>
   */
  ConnectionId: string | undefined;
}

export namespace DeleteConnectionRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DeleteConnectionRequest): any => ({
    ...obj,
  });
}

export interface DeleteConnectionResponse {
  /**
   * <p>Information about the connection.</p>
   */
  Connection?: Connection;
}

export namespace DeleteConnectionResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DeleteConnectionResponse): any => ({
    ...obj,
  });
}

export interface DeleteConnectPeerRequest {
  /**
   * <p>The ID of the deleted Connect peer.</p>
   */
  ConnectPeerId: string | undefined;
}

export namespace DeleteConnectPeerRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DeleteConnectPeerRequest): any => ({
    ...obj,
  });
}

export interface DeleteConnectPeerResponse {
  /**
   * <p>Information about the deleted Connect peer.</p>
   */
  ConnectPeer?: ConnectPeer;
}

export namespace DeleteConnectPeerResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DeleteConnectPeerResponse): any => ({
    ...obj,
  });
}

export interface DeleteCoreNetworkRequest {
  /**
   * <p>The network ID of the deleted core network.</p>
   */
  CoreNetworkId: string | undefined;
}

export namespace DeleteCoreNetworkRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DeleteCoreNetworkRequest): any => ({
    ...obj,
  });
}

export interface DeleteCoreNetworkResponse {
  /**
   * <p>Information about the deleted core network.</p>
   */
  CoreNetwork?: CoreNetwork;
}

export namespace DeleteCoreNetworkResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DeleteCoreNetworkResponse): any => ({
    ...obj,
  });
}

export interface DeleteCoreNetworkPolicyVersionRequest {
  /**
   * <p>The ID of a core network for the deleted policy.</p>
   */
  CoreNetworkId: string | undefined;

  /**
   * <p>The version ID of the deleted policy.</p>
   */
  PolicyVersionId: number | undefined;
}

export namespace DeleteCoreNetworkPolicyVersionRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DeleteCoreNetworkPolicyVersionRequest): any => ({
    ...obj,
  });
}

export interface DeleteCoreNetworkPolicyVersionResponse {
  /**
   * <p>Returns information about the deleted policy version. </p>
   */
  CoreNetworkPolicy?: CoreNetworkPolicy;
}

export namespace DeleteCoreNetworkPolicyVersionResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DeleteCoreNetworkPolicyVersionResponse): any => ({
    ...obj,
  });
}

export interface DeleteDeviceRequest {
  /**
   * <p>The ID of the global network.</p>
   */
  GlobalNetworkId: string | undefined;

  /**
   * <p>The ID of the device.</p>
   */
  DeviceId: string | undefined;
}

export namespace DeleteDeviceRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DeleteDeviceRequest): any => ({
    ...obj,
  });
}

export interface DeleteDeviceResponse {
  /**
   * <p>Information about the device.</p>
   */
  Device?: Device;
}

export namespace DeleteDeviceResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DeleteDeviceResponse): any => ({
    ...obj,
    ...(obj.Device && { Device: Device.filterSensitiveLog(obj.Device) }),
  });
}

export interface DeleteGlobalNetworkRequest {
  /**
   * <p>The ID of the global network.</p>
   */
  GlobalNetworkId: string | undefined;
}

export namespace DeleteGlobalNetworkRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DeleteGlobalNetworkRequest): any => ({
    ...obj,
  });
}

export interface DeleteGlobalNetworkResponse {
  /**
   * <p>Information about the global network.</p>
   */
  GlobalNetwork?: GlobalNetwork;
}

export namespace DeleteGlobalNetworkResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DeleteGlobalNetworkResponse): any => ({
    ...obj,
  });
}

export interface DeleteLinkRequest {
  /**
   * <p>The ID of the global network.</p>
   */
  GlobalNetworkId: string | undefined;

  /**
   * <p>The ID of the link.</p>
   */
  LinkId: string | undefined;
}

export namespace DeleteLinkRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DeleteLinkRequest): any => ({
    ...obj,
  });
}

export interface DeleteLinkResponse {
  /**
   * <p>Information about the link.</p>
   */
  Link?: Link;
}

export namespace DeleteLinkResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DeleteLinkResponse): any => ({
    ...obj,
  });
}

export interface DeleteResourcePolicyRequest {
  /**
   * <p>The ARN of the policy to delete.</p>
   */
  ResourceArn: string | undefined;
}

export namespace DeleteResourcePolicyRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DeleteResourcePolicyRequest): any => ({
    ...obj,
  });
}

export interface DeleteResourcePolicyResponse {}

export namespace DeleteResourcePolicyResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DeleteResourcePolicyResponse): any => ({
    ...obj,
  });
}

export interface DeleteSiteRequest {
  /**
   * <p>The ID of the global network.</p>
   */
  GlobalNetworkId: string | undefined;

  /**
   * <p>The ID of the site.</p>
   */
  SiteId: string | undefined;
}

export namespace DeleteSiteRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DeleteSiteRequest): any => ({
    ...obj,
  });
}

export interface DeleteSiteResponse {
  /**
   * <p>Information about the site.</p>
   */
  Site?: Site;
}

export namespace DeleteSiteResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DeleteSiteResponse): any => ({
    ...obj,
    ...(obj.Site && { Site: Site.filterSensitiveLog(obj.Site) }),
  });
}

export interface DeregisterTransitGatewayRequest {
  /**
   * <p>The ID of the global network.</p>
   */
  GlobalNetworkId: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the transit gateway.</p>
   */
  TransitGatewayArn: string | undefined;
}

export namespace DeregisterTransitGatewayRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DeregisterTransitGatewayRequest): any => ({
    ...obj,
  });
}

export enum TransitGatewayRegistrationState {
  available = "AVAILABLE",
  deleted = "DELETED",
  deleting = "DELETING",
  failed = "FAILED",
  pending = "PENDING",
}

/**
 * <p>Describes the status of a transit gateway registration.</p>
 */
export interface TransitGatewayRegistrationStateReason {
  /**
   * <p>The code for the state reason.</p>
   */
  Code?: TransitGatewayRegistrationState | string;

  /**
   * <p>The message for the state reason.</p>
   */
  Message?: string;
}

export namespace TransitGatewayRegistrationStateReason {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: TransitGatewayRegistrationStateReason): any => ({
    ...obj,
  });
}

/**
 * <p>Describes the registration of a transit gateway to a global network.</p>
 */
export interface TransitGatewayRegistration {
  /**
   * <p>The ID of the global network.</p>
   */
  GlobalNetworkId?: string;

  /**
   * <p>The Amazon Resource Name (ARN) of the transit gateway.</p>
   */
  TransitGatewayArn?: string;

  /**
   * <p>The state of the transit gateway registration.</p>
   */
  State?: TransitGatewayRegistrationStateReason;
}

export namespace TransitGatewayRegistration {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: TransitGatewayRegistration): any => ({
    ...obj,
  });
}

export interface DeregisterTransitGatewayResponse {
  /**
   * <p>The transit gateway registration information.</p>
   */
  TransitGatewayRegistration?: TransitGatewayRegistration;
}

export namespace DeregisterTransitGatewayResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DeregisterTransitGatewayResponse): any => ({
    ...obj,
  });
}

export interface DescribeGlobalNetworksRequest {
  /**
   * <p>The IDs of one or more global networks. The maximum is 10.</p>
   */
  GlobalNetworkIds?: string[];

  /**
   * <p>The maximum number of results to return.</p>
   */
  MaxResults?: number;

  /**
   * <p>The token for the next page of results.</p>
   */
  NextToken?: string;
}

export namespace DescribeGlobalNetworksRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DescribeGlobalNetworksRequest): any => ({
    ...obj,
  });
}

export interface DescribeGlobalNetworksResponse {
  /**
   * <p>Information about the global networks.</p>
   */
  GlobalNetworks?: GlobalNetwork[];

  /**
   * <p>The token for the next page of results.</p>
   */
  NextToken?: string;
}

export namespace DescribeGlobalNetworksResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DescribeGlobalNetworksResponse): any => ({
    ...obj,
  });
}

export interface DisassociateConnectPeerRequest {
  /**
   * <p>The ID of the global network.</p>
   */
  GlobalNetworkId: string | undefined;

  /**
   * <p>The ID of the Connect peer to disassociate from a device.</p>
   */
  ConnectPeerId: string | undefined;
}

export namespace DisassociateConnectPeerRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DisassociateConnectPeerRequest): any => ({
    ...obj,
  });
}

export interface DisassociateConnectPeerResponse {
  /**
   * <p>Describes the Connect peer association.</p>
   */
  ConnectPeerAssociation?: ConnectPeerAssociation;
}

export namespace DisassociateConnectPeerResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DisassociateConnectPeerResponse): any => ({
    ...obj,
  });
}

export interface DisassociateCustomerGatewayRequest {
  /**
   * <p>The ID of the global network.</p>
   */
  GlobalNetworkId: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the customer gateway.</p>
   */
  CustomerGatewayArn: string | undefined;
}

export namespace DisassociateCustomerGatewayRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DisassociateCustomerGatewayRequest): any => ({
    ...obj,
  });
}

export interface DisassociateCustomerGatewayResponse {
  /**
   * <p>Information about the customer gateway association.</p>
   */
  CustomerGatewayAssociation?: CustomerGatewayAssociation;
}

export namespace DisassociateCustomerGatewayResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DisassociateCustomerGatewayResponse): any => ({
    ...obj,
  });
}

export interface DisassociateLinkRequest {
  /**
   * <p>The ID of the global network.</p>
   */
  GlobalNetworkId: string | undefined;

  /**
   * <p>The ID of the device.</p>
   */
  DeviceId: string | undefined;

  /**
   * <p>The ID of the link.</p>
   */
  LinkId: string | undefined;
}

export namespace DisassociateLinkRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DisassociateLinkRequest): any => ({
    ...obj,
  });
}

export interface DisassociateLinkResponse {
  /**
   * <p>Information about the link association.</p>
   */
  LinkAssociation?: LinkAssociation;
}

export namespace DisassociateLinkResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DisassociateLinkResponse): any => ({
    ...obj,
  });
}

export interface DisassociateTransitGatewayConnectPeerRequest {
  /**
   * <p>The ID of the global network.</p>
   */
  GlobalNetworkId: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the transit gateway Connect peer.</p>
   */
  TransitGatewayConnectPeerArn: string | undefined;
}

export namespace DisassociateTransitGatewayConnectPeerRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DisassociateTransitGatewayConnectPeerRequest): any => ({
    ...obj,
  });
}

export interface DisassociateTransitGatewayConnectPeerResponse {
  /**
   * <p>The transit gateway Connect peer association.</p>
   */
  TransitGatewayConnectPeerAssociation?: TransitGatewayConnectPeerAssociation;
}

export namespace DisassociateTransitGatewayConnectPeerResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DisassociateTransitGatewayConnectPeerResponse): any => ({
    ...obj,
  });
}

export interface ExecuteCoreNetworkChangeSetRequest {
  /**
   * <p>The ID of a core network.</p>
   */
  CoreNetworkId: string | undefined;

  /**
   * <p>The ID of the policy version.</p>
   */
  PolicyVersionId: number | undefined;
}

export namespace ExecuteCoreNetworkChangeSetRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ExecuteCoreNetworkChangeSetRequest): any => ({
    ...obj,
  });
}

export interface ExecuteCoreNetworkChangeSetResponse {}

export namespace ExecuteCoreNetworkChangeSetResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ExecuteCoreNetworkChangeSetResponse): any => ({
    ...obj,
  });
}

export interface GetConnectAttachmentRequest {
  /**
   * <p>The ID of the attachment.</p>
   */
  AttachmentId: string | undefined;
}

export namespace GetConnectAttachmentRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: GetConnectAttachmentRequest): any => ({
    ...obj,
  });
}

export interface GetConnectAttachmentResponse {
  /**
   * <p>Details about the Connect attachment.</p>
   */
  ConnectAttachment?: ConnectAttachment;
}

export namespace GetConnectAttachmentResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: GetConnectAttachmentResponse): any => ({
    ...obj,
  });
}

export interface GetConnectionsRequest {
  /**
   * <p>The ID of the global network.</p>
   */
  GlobalNetworkId: string | undefined;

  /**
   * <p>One or more connection IDs.</p>
   */
  ConnectionIds?: string[];

  /**
   * <p>The ID of the device.</p>
   */
  DeviceId?: string;

  /**
   * <p>The maximum number of results to return.</p>
   */
  MaxResults?: number;

  /**
   * <p>The token for the next page of results.</p>
   */
  NextToken?: string;
}

export namespace GetConnectionsRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: GetConnectionsRequest): any => ({
    ...obj,
  });
}

export interface GetConnectionsResponse {
  /**
   * <p>Information about the connections.</p>
   */
  Connections?: Connection[];

  /**
   * <p>The token to use for the next page of results.</p>
   */
  NextToken?: string;
}

export namespace GetConnectionsResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: GetConnectionsResponse): any => ({
    ...obj,
  });
}

export interface GetConnectPeerRequest {
  /**
   * <p>The ID of the Connect peer.</p>
   */
  ConnectPeerId: string | undefined;
}

export namespace GetConnectPeerRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: GetConnectPeerRequest): any => ({
    ...obj,
  });
}

export interface GetConnectPeerResponse {
  /**
   * <p>Returns information about a core network Connect peer.</p>
   */
  ConnectPeer?: ConnectPeer;
}

export namespace GetConnectPeerResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: GetConnectPeerResponse): any => ({
    ...obj,
  });
}

export interface GetConnectPeerAssociationsRequest {
  /**
   * <p>The ID of the global network.</p>
   */
  GlobalNetworkId: string | undefined;

  /**
   * <p>The IDs of the Connect peers.</p>
   */
  ConnectPeerIds?: string[];

  /**
   * <p>The maximum number of results to return.</p>
   */
  MaxResults?: number;

  /**
   * <p>The token for the next page of results.</p>
   */
  NextToken?: string;
}

export namespace GetConnectPeerAssociationsRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: GetConnectPeerAssociationsRequest): any => ({
    ...obj,
  });
}

export interface GetConnectPeerAssociationsResponse {
  /**
   * <p>Displays a list of Connect peer associations.</p>
   */
  ConnectPeerAssociations?: ConnectPeerAssociation[];

  /**
   * <p>The token for the next page of results.</p>
   */
  NextToken?: string;
}

export namespace GetConnectPeerAssociationsResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: GetConnectPeerAssociationsResponse): any => ({
    ...obj,
  });
}

export interface GetCoreNetworkRequest {
  /**
   * <p>The ID of a core network.</p>
   */
  CoreNetworkId: string | undefined;
}

export namespace GetCoreNetworkRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: GetCoreNetworkRequest): any => ({
    ...obj,
  });
}

export interface GetCoreNetworkResponse {
  /**
   * <p>Details about a core network.</p>
   */
  CoreNetwork?: CoreNetwork;
}

export namespace GetCoreNetworkResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: GetCoreNetworkResponse): any => ({
    ...obj,
  });
}

export interface GetCoreNetworkChangeSetRequest {
  /**
   * <p>The ID of a core network.</p>
   */
  CoreNetworkId: string | undefined;

  /**
   * <p>The ID of the policy version.</p>
   */
  PolicyVersionId: number | undefined;

  /**
   * <p>The maximum number of results to return.</p>
   */
  MaxResults?: number;

  /**
   * <p>The token for the next page of results.</p>
   */
  NextToken?: string;
}

export namespace GetCoreNetworkChangeSetRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: GetCoreNetworkChangeSetRequest): any => ({
    ...obj,
  });
}

export interface GetCoreNetworkChangeSetResponse {
  /**
   * <p>Describes a core network changes.</p>
   */
  CoreNetworkChanges?: CoreNetworkChange[];

  /**
   * <p>The token for the next page of results.</p>
   */
  NextToken?: string;
}

export namespace GetCoreNetworkChangeSetResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: GetCoreNetworkChangeSetResponse): any => ({
    ...obj,
  });
}

export interface GetCoreNetworkPolicyRequest {
  /**
   * <p>The ID of a core network.</p>
   */
  CoreNetworkId: string | undefined;

  /**
   * <p>The ID of a core network policy version.</p>
   */
  PolicyVersionId?: number;

  /**
   * <p>The alias of a core network policy </p>
   */
  Alias?: CoreNetworkPolicyAlias | string;
}

export namespace GetCoreNetworkPolicyRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: GetCoreNetworkPolicyRequest): any => ({
    ...obj,
  });
}

export interface GetCoreNetworkPolicyResponse {
  /**
   * <p>The details about a core network policy.</p>
   */
  CoreNetworkPolicy?: CoreNetworkPolicy;
}

export namespace GetCoreNetworkPolicyResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: GetCoreNetworkPolicyResponse): any => ({
    ...obj,
  });
}

export interface GetCustomerGatewayAssociationsRequest {
  /**
   * <p>The ID of the global network.</p>
   */
  GlobalNetworkId: string | undefined;

  /**
   * <p>One or more customer gateway Amazon Resource Names (ARNs). The maximum is 10.</p>
   */
  CustomerGatewayArns?: string[];

  /**
   * <p>The maximum number of results to return.</p>
   */
  MaxResults?: number;

  /**
   * <p>The token for the next page of results.</p>
   */
  NextToken?: string;
}

export namespace GetCustomerGatewayAssociationsRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: GetCustomerGatewayAssociationsRequest): any => ({
    ...obj,
  });
}

export interface GetCustomerGatewayAssociationsResponse {
  /**
   * <p>The customer gateway associations.</p>
   */
  CustomerGatewayAssociations?: CustomerGatewayAssociation[];

  /**
   * <p>The token for the next page of results.</p>
   */
  NextToken?: string;
}

export namespace GetCustomerGatewayAssociationsResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: GetCustomerGatewayAssociationsResponse): any => ({
    ...obj,
  });
}

export interface GetDevicesRequest {
  /**
   * <p>The ID of the global network.</p>
   */
  GlobalNetworkId: string | undefined;

  /**
   * <p>One or more device IDs. The maximum is 10.</p>
   */
  DeviceIds?: string[];

  /**
   * <p>The ID of the site.</p>
   */
  SiteId?: string;

  /**
   * <p>The maximum number of results to return.</p>
   */
  MaxResults?: number;

  /**
   * <p>The token for the next page of results.</p>
   */
  NextToken?: string;
}

export namespace GetDevicesRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: GetDevicesRequest): any => ({
    ...obj,
  });
}

export interface GetDevicesResponse {
  /**
   * <p>The devices.</p>
   */
  Devices?: Device[];

  /**
   * <p>The token for the next page of results.</p>
   */
  NextToken?: string;
}

export namespace GetDevicesResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: GetDevicesResponse): any => ({
    ...obj,
    ...(obj.Devices && { Devices: obj.Devices.map((item) => Device.filterSensitiveLog(item)) }),
  });
}

export interface GetLinkAssociationsRequest {
  /**
   * <p>The ID of the global network.</p>
   */
  GlobalNetworkId: string | undefined;

  /**
   * <p>The ID of the device.</p>
   */
  DeviceId?: string;

  /**
   * <p>The ID of the link.</p>
   */
  LinkId?: string;

  /**
   * <p>The maximum number of results to return.</p>
   */
  MaxResults?: number;

  /**
   * <p>The token for the next page of results.</p>
   */
  NextToken?: string;
}

export namespace GetLinkAssociationsRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: GetLinkAssociationsRequest): any => ({
    ...obj,
  });
}

export interface GetLinkAssociationsResponse {
  /**
   * <p>The link associations.</p>
   */
  LinkAssociations?: LinkAssociation[];

  /**
   * <p>The token for the next page of results.</p>
   */
  NextToken?: string;
}

export namespace GetLinkAssociationsResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: GetLinkAssociationsResponse): any => ({
    ...obj,
  });
}

export interface GetLinksRequest {
  /**
   * <p>The ID of the global network.</p>
   */
  GlobalNetworkId: string | undefined;

  /**
   * <p>One or more link IDs. The maximum is 10.</p>
   */
  LinkIds?: string[];

  /**
   * <p>The ID of the site.</p>
   */
  SiteId?: string;

  /**
   * <p>The link type.</p>
   */
  Type?: string;

  /**
   * <p>The link provider.</p>
   */
  Provider?: string;

  /**
   * <p>The maximum number of results to return.</p>
   */
  MaxResults?: number;

  /**
   * <p>The token for the next page of results.</p>
   */
  NextToken?: string;
}

export namespace GetLinksRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: GetLinksRequest): any => ({
    ...obj,
  });
}

export interface GetLinksResponse {
  /**
   * <p>The links.</p>
   */
  Links?: Link[];

  /**
   * <p>The token for the next page of results.</p>
   */
  NextToken?: string;
}

export namespace GetLinksResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: GetLinksResponse): any => ({
    ...obj,
  });
}

export interface GetNetworkResourceCountsRequest {
  /**
   * <p>The ID of the global network.</p>
   */
  GlobalNetworkId: string | undefined;

  /**
   * <p>The resource type.</p>
   *          <p>The following are the supported resource types for Direct Connect:</p>
   *         <ul>
   *             <li>
   *                 <p>
   *                   <code>dxcon</code>
   *                </p>
   *             </li>
   *             <li>
   *                 <p>
   *                   <code>dx-gateway</code>
   *                </p>
   *             </li>
   *             <li>
   *                 <p>
   *                   <code>dx-vif</code>
   *                </p>
   *             </li>
   *          </ul>
   *
   *         <p>The following are the supported resource types for Network Manager:</p>
   *         <ul>
   *             <li>
   *                 <p>
   *                   <code>connection</code>
   *                </p>
   *             </li>
   *             <li>
   *                 <p>
   *                   <code>device</code>
   *                </p>
   *             </li>
   *             <li>
   *                 <p>
   *                   <code>link</code>
   *                </p>
   *             </li>
   *             <li>
   *                 <p>
   *                   <code>site</code>
   *                </p>
   *             </li>
   *          </ul>
   *
   *         <p>The following are the supported resource types for Amazon VPC:</p>
   *         <ul>
   *             <li>
   *                 <p>
   *                   <code>customer-gateway</code>
   *                </p>
   *             </li>
   *             <li>
   *                 <p>
   *                   <code>transit-gateway</code>
   *                </p>
   *             </li>
   *             <li>
   *                 <p>
   *                   <code>transit-gateway-attachment</code>
   *                </p>
   *             </li>
   *             <li>
   *                 <p>
   *                   <code>transit-gateway-connect-peer</code>
   *                </p>
   *             </li>
   *             <li>
   *                 <p>
   *                   <code>transit-gateway-route-table</code>
   *                </p>
   *             </li>
   *             <li>
   *                 <p>
   *                   <code>vpn-connection</code>
   *                </p>
   *             </li>
   *          </ul>
   */
  ResourceType?: string;

  /**
   * <p>The maximum number of results to return.</p>
   */
  MaxResults?: number;

  /**
   * <p>The token for the next page of results.</p>
   */
  NextToken?: string;
}

export namespace GetNetworkResourceCountsRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: GetNetworkResourceCountsRequest): any => ({
    ...obj,
  });
}

/**
 * <p>Describes a resource count.</p>
 */
export interface NetworkResourceCount {
  /**
   * <p>The resource type.</p>
   */
  ResourceType?: string;

  /**
   * <p>The resource count.</p>
   */
  Count?: number;
}

export namespace NetworkResourceCount {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: NetworkResourceCount): any => ({
    ...obj,
  });
}

export interface GetNetworkResourceCountsResponse {
  /**
   * <p>The count of resources.</p>
   */
  NetworkResourceCounts?: NetworkResourceCount[];

  /**
   * <p>The token for the next page of results.</p>
   */
  NextToken?: string;
}

export namespace GetNetworkResourceCountsResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: GetNetworkResourceCountsResponse): any => ({
    ...obj,
  });
}

export interface GetNetworkResourceRelationshipsRequest {
  /**
   * <p>The ID of the global network.</p>
   */
  GlobalNetworkId: string | undefined;

  /**
   * <p>The ID of a core network.</p>
   */
  CoreNetworkId?: string;

  /**
   * <p>The ARN of the registered gateway.</p>
   */
  RegisteredGatewayArn?: string;

  /**
   * <p>The Amazon Web Services Region.</p>
   */
  AwsRegion?: string;

  /**
   * <p>The Amazon Web Services account ID.</p>
   */
  AccountId?: string;

  /**
   * <p>The resource type.</p>
   *         <p>The following are the supported resource types for Direct Connect:</p>
   *         <ul>
   *             <li>
   *                 <p>
   *                   <code>dxcon</code>
   *                </p>
   *             </li>
   *             <li>
   *                 <p>
   *                   <code>dx-gateway</code>
   *                </p>
   *             </li>
   *             <li>
   *                 <p>
   *                   <code>dx-vif</code>
   *                </p>
   *             </li>
   *          </ul>
   *
   *         <p>The following are the supported resource types for Network Manager:</p>
   *         <ul>
   *             <li>
   *                 <p>
   *                   <code>connection</code>
   *                </p>
   *             </li>
   *             <li>
   *                 <p>
   *                   <code>device</code>
   *                </p>
   *             </li>
   *             <li>
   *                 <p>
   *                   <code>link</code>
   *                </p>
   *             </li>
   *             <li>
   *                 <p>
   *                   <code>site</code>
   *                </p>
   *             </li>
   *          </ul>
   *
   *         <p>The following are the supported resource types for Amazon VPC:</p>
   *         <ul>
   *             <li>
   *                 <p>
   *                   <code>customer-gateway</code>
   *                </p>
   *             </li>
   *             <li>
   *                 <p>
   *                   <code>transit-gateway</code>
   *                </p>
   *             </li>
   *             <li>
   *                 <p>
   *                   <code>transit-gateway-attachment</code>
   *                </p>
   *             </li>
   *             <li>
   *                 <p>
   *                   <code>transit-gateway-connect-peer</code>
   *                </p>
   *             </li>
   *             <li>
   *                 <p>
   *                   <code>transit-gateway-route-table</code>
   *                </p>
   *             </li>
   *             <li>
   *                 <p>
   *                   <code>vpn-connection</code>
   *                </p>
   *             </li>
   *          </ul>
   */
  ResourceType?: string;

  /**
   * <p>The ARN of the gateway.</p>
   */
  ResourceArn?: string;

  /**
   * <p>The maximum number of results to return.</p>
   */
  MaxResults?: number;

  /**
   * <p>The token for the next page of results.</p>
   */
  NextToken?: string;
}

export namespace GetNetworkResourceRelationshipsRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: GetNetworkResourceRelationshipsRequest): any => ({
    ...obj,
  });
}

/**
 * <p>Describes a resource relationship.</p>
 */
export interface Relationship {
  /**
   * <p>The ARN of the resource.</p>
   */
  From?: string;

  /**
   * <p>The ARN of the resource.</p>
   */
  To?: string;
}

export namespace Relationship {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: Relationship): any => ({
    ...obj,
  });
}

export interface GetNetworkResourceRelationshipsResponse {
  /**
   * <p>The resource relationships.</p>
   */
  Relationships?: Relationship[];

  /**
   * <p>The token for the next page of results.</p>
   */
  NextToken?: string;
}

export namespace GetNetworkResourceRelationshipsResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: GetNetworkResourceRelationshipsResponse): any => ({
    ...obj,
  });
}

export interface GetNetworkResourcesRequest {
  /**
   * <p>The ID of the global network.</p>
   */
  GlobalNetworkId: string | undefined;

  /**
   * <p>The ID of a core network.</p>
   */
  CoreNetworkId?: string;

  /**
   * <p>The ARN of the gateway.</p>
   */
  RegisteredGatewayArn?: string;

  /**
   * <p>The Amazon Web Services Region.</p>
   */
  AwsRegion?: string;

  /**
   * <p>The Amazon Web Services account ID.</p>
   */
  AccountId?: string;

  /**
   * <p>The resource type.</p>
   *          <p>The following are the supported resource types for Direct Connect:</p>
   *         <ul>
   *             <li>
   *                <p>
   *                   <code>dxcon</code> - The definition model is
   *                     <a href="https://docs.aws.amazon.com/directconnect/latest/APIReference/API_Connection.html">Connection</a>.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>dx-gateway</code> - The definition model is
   *                     <a href="https://docs.aws.amazon.com/directconnect/latest/APIReference/API_DirectConnectGateway.html">DirectConnectGateway</a>.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>dx-vif</code> - The definition model is
   *                     <a href="https://docs.aws.amazon.com/directconnect/latest/APIReference/API_VirtualInterface.html">VirtualInterface</a>.</p>
   *             </li>
   *          </ul>
   *
   *          <p>The following are the supported resource types for Network Manager:</p>
   *         <ul>
   *             <li>
   *                <p>
   *                   <code>connection</code> - The definition model is
   *                     <a href="https://docs.aws.amazon.com/networkmanager/latest/APIReference/API_Connection.html">Connection</a>.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>device</code> - The definition model is
   *                     <a href="https://docs.aws.amazon.com/networkmanager/latest/APIReference/API_Device.html">Device</a>.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>link</code> - The definition model is
   *                     <a href="https://docs.aws.amazon.com/networkmanager/latest/APIReference/API_Link.html">Link</a>.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>site</code> - The definition model is
   *                     <a href="https://docs.aws.amazon.com/networkmanager/latest/APIReference/API_Site.html">Site</a>.</p>
   *             </li>
   *          </ul>
   *
   *          <p>The following are the supported resource types for Amazon VPC:</p>
   *         <ul>
   *             <li>
   *                <p>
   *                   <code>customer-gateway</code> - The definition model is
   *                     <a href="https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_CustomerGateway.html">CustomerGateway</a>.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>transit-gateway</code> - The definition model is
   *                     <a href="https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_TransitGateway.html">TransitGateway</a>.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>transit-gateway-attachment</code> - The definition model is
   *                     <a href="https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_TransitGatewayAttachment.html">TransitGatewayAttachment</a>.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>transit-gateway-connect-peer</code> - The definition model is
   *                     <a href="https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_TransitGatewayConnectPeer.html">TransitGatewayConnectPeer</a>.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>transit-gateway-route-table</code> - The definition model is
   *                     <a href="https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_TransitGatewayRouteTable.html">TransitGatewayRouteTable</a>.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>vpn-connection</code> - The definition model is
   *                     <a href="https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_VpnConnection.html">VpnConnection</a>.</p>
   *             </li>
   *          </ul>
   */
  ResourceType?: string;

  /**
   * <p>The ARN of the resource.</p>
   */
  ResourceArn?: string;

  /**
   * <p>The maximum number of results to return.</p>
   */
  MaxResults?: number;

  /**
   * <p>The token for the next page of results.</p>
   */
  NextToken?: string;
}

export namespace GetNetworkResourcesRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: GetNetworkResourcesRequest): any => ({
    ...obj,
  });
}

/**
 * <p>Describes a network resource.</p>
 */
export interface NetworkResource {
  /**
   * <p>The ARN of the gateway.</p>
   */
  RegisteredGatewayArn?: string;

  /**
   * <p>a core network ID.</p>
   */
  CoreNetworkId?: string;

  /**
   * <p>The Amazon Web Services Region.</p>
   */
  AwsRegion?: string;

  /**
   * <p>The Amazon Web Services account ID.</p>
   */
  AccountId?: string;

  /**
   * <p>The resource type.</p>
   *          <p>The following are the supported resource types for Direct Connect:</p>
   *         <ul>
   *             <li>
   *                 <p>
   *                   <code>dxcon</code>
   *                </p>
   *             </li>
   *             <li>
   *                 <p>
   *                   <code>dx-gateway</code>
   *                </p>
   *             </li>
   *             <li>
   *                 <p>
   *                   <code>dx-vif</code>
   *                </p>
   *             </li>
   *          </ul>
   *
   *         <p>The following are the supported resource types for Network Manager:</p>
   *         <ul>
   *             <li>
   *                 <p>
   *                   <code>connection</code>
   *                </p>
   *             </li>
   *             <li>
   *                 <p>
   *                   <code>device</code>
   *                </p>
   *             </li>
   *             <li>
   *                 <p>
   *                   <code>link</code>
   *                </p>
   *             </li>
   *             <li>
   *                 <p>
   *                   <code>site</code>
   *                </p>
   *             </li>
   *          </ul>
   *
   *         <p>The following are the supported resource types for Amazon VPC:</p>
   *         <ul>
   *             <li>
   *                 <p>
   *                   <code>customer-gateway</code>
   *                </p>
   *             </li>
   *             <li>
   *                 <p>
   *                   <code>transit-gateway</code>
   *                </p>
   *             </li>
   *             <li>
   *                 <p>
   *                   <code>transit-gateway-attachment</code>
   *                </p>
   *             </li>
   *             <li>
   *                 <p>
   *                   <code>transit-gateway-connect-peer</code>
   *                </p>
   *             </li>
   *             <li>
   *                 <p>
   *                   <code>transit-gateway-route-table</code>
   *                </p>
   *             </li>
   *             <li>
   *                 <p>
   *                   <code>vpn-connection</code>
   *                </p>
   *             </li>
   *          </ul>
   */
  ResourceType?: string;

  /**
   * <p>The ID of the resource.</p>
   */
  ResourceId?: string;

  /**
   * <p>The ARN of the resource.</p>
   */
  ResourceArn?: string;

  /**
   * <p>Information about the resource, in JSON format. Network Manager gets this information by describing the resource using its Describe API call.</p>
   */
  Definition?: string;

  /**
   * <p>The time that the resource definition was retrieved.</p>
   */
  DefinitionTimestamp?: Date;

  /**
   * <p>The tags.</p>
   */
  Tags?: Tag[];

  /**
   * <p>The resource metadata.</p>
   */
  Metadata?: { [key: string]: string };
}

export namespace NetworkResource {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: NetworkResource): any => ({
    ...obj,
  });
}

export interface GetNetworkResourcesResponse {
  /**
   * <p>The network resources.</p>
   */
  NetworkResources?: NetworkResource[];

  /**
   * <p>The token for the next page of results.</p>
   */
  NextToken?: string;
}

export namespace GetNetworkResourcesResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: GetNetworkResourcesResponse): any => ({
    ...obj,
  });
}

/**
 * <p>Describes a route table.</p>
 */
export interface RouteTableIdentifier {
  /**
   * <p>The ARN of the transit gateway route table.</p>
   */
  TransitGatewayRouteTableArn?: string;

  /**
   * <p>The segment edge in a core network.</p>
   */
  CoreNetworkSegmentEdge?: CoreNetworkSegmentEdgeIdentifier;
}

export namespace RouteTableIdentifier {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: RouteTableIdentifier): any => ({
    ...obj,
  });
}

export enum RouteState {
  ACTIVE = "ACTIVE",
  BLACKHOLE = "BLACKHOLE",
}

export enum RouteType {
  PROPAGATED = "PROPAGATED",
  STATIC = "STATIC",
}

export interface GetNetworkRoutesRequest {
  /**
   * <p>The ID of the global network.</p>
   */
  GlobalNetworkId: string | undefined;

  /**
   * <p>The ID of the route table.</p>
   */
  RouteTableIdentifier: RouteTableIdentifier | undefined;

  /**
   * <p>An exact CIDR block.</p>
   */
  ExactCidrMatches?: string[];

  /**
   * <p>The most specific route that matches the traffic (longest prefix match).</p>
   */
  LongestPrefixMatches?: string[];

  /**
   * <p>The routes with a subnet that match the specified CIDR filter.</p>
   */
  SubnetOfMatches?: string[];

  /**
   * <p>The routes with a CIDR that encompasses the CIDR filter. Example: If you specify 10.0.1.0/30, then the result returns 10.0.1.0/29.</p>
   */
  SupernetOfMatches?: string[];

  /**
   * <p>The IDs of the prefix lists.</p>
   */
  PrefixListIds?: string[];

  /**
   * <p>The route states.</p>
   */
  States?: (RouteState | string)[];

  /**
   * <p>The route types.</p>
   */
  Types?: (RouteType | string)[];

  /**
   * <p>Filter by route table destination. Possible Values: TRANSIT_GATEWAY_ATTACHMENT_ID, RESOURCE_ID, or RESOURCE_TYPE.</p>
   */
  DestinationFilters?: { [key: string]: string[] };
}

export namespace GetNetworkRoutesRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: GetNetworkRoutesRequest): any => ({
    ...obj,
  });
}

/**
 * <p>Describes the destination of a network route.</p>
 */
export interface NetworkRouteDestination {
  /**
   * <p>The ID of a core network attachment.</p>
   */
  CoreNetworkAttachmentId?: string;

  /**
   * <p>The ID of the transit gateway attachment.</p>
   */
  TransitGatewayAttachmentId?: string;

  /**
   * <p>The name of the segment.</p>
   */
  SegmentName?: string;

  /**
   * <p>The edge location for the network destination.</p>
   */
  EdgeLocation?: string;

  /**
   * <p>The resource type.</p>
   */
  ResourceType?: string;

  /**
   * <p>The ID of the resource.</p>
   */
  ResourceId?: string;
}

export namespace NetworkRouteDestination {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: NetworkRouteDestination): any => ({
    ...obj,
  });
}

/**
 * <p>Describes a network route.</p>
 */
export interface NetworkRoute {
  /**
   * <p>A unique identifier for the route, such as a CIDR block.</p>
   */
  DestinationCidrBlock?: string;

  /**
   * <p>The destinations.</p>
   */
  Destinations?: NetworkRouteDestination[];

  /**
   * <p>The ID of the prefix list.</p>
   */
  PrefixListId?: string;

  /**
   * <p>The route state. The possible values are <code>active</code> and <code>blackhole</code>.</p>
   */
  State?: RouteState | string;

  /**
   * <p>The route type. The possible values are <code>propagated</code> and <code>static</code>.</p>
   */
  Type?: RouteType | string;
}

export namespace NetworkRoute {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: NetworkRoute): any => ({
    ...obj,
  });
}

export enum RouteTableType {
  CORE_NETWORK_SEGMENT = "CORE_NETWORK_SEGMENT",
  TRANSIT_GATEWAY_ROUTE_TABLE = "TRANSIT_GATEWAY_ROUTE_TABLE",
}

export interface GetNetworkRoutesResponse {
  /**
   * <p>The ARN of the route table.</p>
   */
  RouteTableArn?: string;

  /**
   * <p>Describes a core network segment edge.</p>
   */
  CoreNetworkSegmentEdge?: CoreNetworkSegmentEdgeIdentifier;

  /**
   * <p>The route table type.</p>
   */
  RouteTableType?: RouteTableType | string;

  /**
   * <p>The route table creation time.</p>
   */
  RouteTableTimestamp?: Date;

  /**
   * <p>The network routes.</p>
   */
  NetworkRoutes?: NetworkRoute[];
}

export namespace GetNetworkRoutesResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: GetNetworkRoutesResponse): any => ({
    ...obj,
  });
}

export interface GetNetworkTelemetryRequest {
  /**
   * <p>The ID of the global network.</p>
   */
  GlobalNetworkId: string | undefined;

  /**
   * <p>The ID of a core network.</p>
   */
  CoreNetworkId?: string;

  /**
   * <p>The ARN of the gateway.</p>
   */
  RegisteredGatewayArn?: string;

  /**
   * <p>The Amazon Web Services Region.</p>
   */
  AwsRegion?: string;

  /**
   * <p>The Amazon Web Services account ID.</p>
   */
  AccountId?: string;

  /**
   * <p>The resource type.</p>
   *         <p>The following are the supported resource types for Direct Connect:</p>
   *         <ul>
   *             <li>
   *                 <p>
   *                   <code>dxcon</code>
   *                </p>
   *             </li>
   *             <li>
   *                 <p>
   *                   <code>dx-gateway</code>
   *                </p>
   *             </li>
   *             <li>
   *                 <p>
   *                   <code>dx-vif</code>
   *                </p>
   *             </li>
   *          </ul>
   *
   *         <p>The following are the supported resource types for Network Manager:</p>
   *         <ul>
   *             <li>
   *                 <p>
   *                   <code>connection</code>
   *                </p>
   *             </li>
   *             <li>
   *                 <p>
   *                   <code>device</code>
   *                </p>
   *             </li>
   *             <li>
   *                 <p>
   *                   <code>link</code>
   *                </p>
   *             </li>
   *             <li>
   *                 <p>
   *                   <code>site</code>
   *                </p>
   *             </li>
   *          </ul>
   *
   *         <p>The following are the supported resource types for Amazon VPC:</p>
   *         <ul>
   *             <li>
   *                 <p>
   *                   <code>customer-gateway</code>
   *                </p>
   *             </li>
   *             <li>
   *                 <p>
   *                   <code>transit-gateway</code>
   *                </p>
   *             </li>
   *             <li>
   *                 <p>
   *                   <code>transit-gateway-attachment</code>
   *                </p>
   *             </li>
   *             <li>
   *                 <p>
   *                   <code>transit-gateway-connect-peer</code>
   *                </p>
   *             </li>
   *             <li>
   *                 <p>
   *                   <code>transit-gateway-route-table</code>
   *                </p>
   *             </li>
   *             <li>
   *                 <p>
   *                   <code>vpn-connection</code>
   *                </p>
   *             </li>
   *          </ul>
   */
  ResourceType?: string;

  /**
   * <p>The ARN of the resource.</p>
   */
  ResourceArn?: string;

  /**
   * <p>The maximum number of results to return.</p>
   */
  MaxResults?: number;

  /**
   * <p>The token for the next page of results.</p>
   */
  NextToken?: string;
}

export namespace GetNetworkTelemetryRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: GetNetworkTelemetryRequest): any => ({
    ...obj,
  });
}

/**
 * <p>Describes the telemetry information for a resource.</p>
 */
export interface NetworkTelemetry {
  /**
   * <p>The ARN of the gateway.</p>
   */
  RegisteredGatewayArn?: string;

  /**
   * <p>The ID of a core network.</p>
   */
  CoreNetworkId?: string;

  /**
   * <p>The Amazon Web Services Region.</p>
   */
  AwsRegion?: string;

  /**
   * <p>The Amazon Web Services account ID.</p>
   */
  AccountId?: string;

  /**
   * <p>The resource type.</p>
   */
  ResourceType?: string;

  /**
   * <p>The ID of the resource.</p>
   */
  ResourceId?: string;

  /**
   * <p>The ARN of the resource.</p>
   */
  ResourceArn?: string;

  /**
   * <p>The address.</p>
   */
  Address?: string;

  /**
   * <p>The connection health.</p>
   */
  Health?: ConnectionHealth;
}

export namespace NetworkTelemetry {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: NetworkTelemetry): any => ({
    ...obj,
  });
}

export interface GetNetworkTelemetryResponse {
  /**
   * <p>The network telemetry.</p>
   */
  NetworkTelemetry?: NetworkTelemetry[];

  /**
   * <p>The token for the next page of results.</p>
   */
  NextToken?: string;
}

export namespace GetNetworkTelemetryResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: GetNetworkTelemetryResponse): any => ({
    ...obj,
  });
}

export interface GetResourcePolicyRequest {
  /**
   * <p>The ARN of the resource.</p>
   */
  ResourceArn: string | undefined;
}

export namespace GetResourcePolicyRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: GetResourcePolicyRequest): any => ({
    ...obj,
  });
}

export interface GetResourcePolicyResponse {
  /**
   * <p>The resource policy document.</p>
   */
  PolicyDocument?: __LazyJsonString | string;
}

export namespace GetResourcePolicyResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: GetResourcePolicyResponse): any => ({
    ...obj,
  });
}

export interface GetRouteAnalysisRequest {
  /**
   * <p>The ID of the global network.</p>
   */
  GlobalNetworkId: string | undefined;

  /**
   * <p>The ID of the route analysis.</p>
   */
  RouteAnalysisId: string | undefined;
}

export namespace GetRouteAnalysisRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: GetRouteAnalysisRequest): any => ({
    ...obj,
  });
}

/**
 * <p>Describes a source or a destination.</p>
 */
export interface RouteAnalysisEndpointOptions {
  /**
   * <p>The ARN of the transit gateway attachment.</p>
   */
  TransitGatewayAttachmentArn?: string;

  /**
   * <p>The ARN of the transit gateway.</p>
   */
  TransitGatewayArn?: string;

  /**
   * <p>The IP address.</p>
   */
  IpAddress?: string;
}

export namespace RouteAnalysisEndpointOptions {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: RouteAnalysisEndpointOptions): any => ({
    ...obj,
  });
}

export enum RouteAnalysisCompletionReasonCode {
  BLACKHOLE_ROUTE_FOR_DESTINATION_FOUND = "BLACKHOLE_ROUTE_FOR_DESTINATION_FOUND",
  CYCLIC_PATH_DETECTED = "CYCLIC_PATH_DETECTED",
  INACTIVE_ROUTE_FOR_DESTINATION_FOUND = "INACTIVE_ROUTE_FOR_DESTINATION_FOUND",
  MAX_HOPS_EXCEEDED = "MAX_HOPS_EXCEEDED",
  NO_DESTINATION_ARN_PROVIDED = "NO_DESTINATION_ARN_PROVIDED",
  POSSIBLE_MIDDLEBOX = "POSSIBLE_MIDDLEBOX",
  ROUTE_NOT_FOUND = "ROUTE_NOT_FOUND",
  TRANSIT_GATEWAY_ATTACHMENT = "TRANSIT_GATEWAY_ATTACHMENT_ATTACH_ARN_NO_MATCH",
  TRANSIT_GATEWAY_ATTACHMENT_NOT_FOUND = "TRANSIT_GATEWAY_ATTACHMENT_NOT_FOUND",
  TRANSIT_GATEWAY_ATTACHMENT_NOT_IN_TRANSIT_GATEWAY = "TRANSIT_GATEWAY_ATTACHMENT_NOT_IN_TRANSIT_GATEWAY",
  TRANSIT_GATEWAY_ATTACHMENT_STABLE_ROUTE_TABLE_NOT_FOUND = "TRANSIT_GATEWAY_ATTACHMENT_STABLE_ROUTE_TABLE_NOT_FOUND",
}

export enum RouteAnalysisCompletionResultCode {
  CONNECTED = "CONNECTED",
  NOT_CONNECTED = "NOT_CONNECTED",
}

/**
 * <p>Describes the status of an analysis at completion.</p>
 */
export interface RouteAnalysisCompletion {
  /**
   * <p>The result of the analysis. If the status is <code>NOT_CONNECTED</code>, check the
   *             reason code.</p>
   */
  ResultCode?: RouteAnalysisCompletionResultCode | string;

  /**
   * <p>The reason code. Available only if a connection is not found.</p>
   *         <ul>
   *             <li>
   *                <p>
   *                   <code>BLACKHOLE_ROUTE_FOR_DESTINATION_FOUND</code> - Found a black hole route with the destination CIDR block.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>CYCLIC_PATH_DETECTED</code> - Found the same resource multiple times while traversing the path.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>INACTIVE_ROUTE_FOR_DESTINATION_FOUND</code> - Found an inactive route with the destination CIDR block.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>MAX_HOPS_EXCEEDED</code> - Analysis exceeded 64 hops without finding the destination.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>ROUTE_NOT_FOUND</code> - Cannot find a route table with the destination CIDR block.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>TGW_ATTACH_ARN_NO_MATCH</code> - Found an attachment, but not with the correct destination ARN.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>TGW_ATTACH_NOT_FOUND</code> - Cannot find an attachment.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>TGW_ATTACH_NOT_IN_TGW</code> - Found an attachment, but not to the correct transit gateway.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>TGW_ATTACH_STABLE_ROUTE_TABLE_NOT_FOUND</code> - The state of the route table association is not associated.</p>
   *             </li>
   *          </ul>
   */
  ReasonCode?: RouteAnalysisCompletionReasonCode | string;

  /**
   * <p>Additional information about the path. Available only if a connection is not found.</p>
   */
  ReasonContext?: { [key: string]: string };
}

export namespace RouteAnalysisCompletion {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: RouteAnalysisCompletion): any => ({
    ...obj,
  });
}

/**
 * <p>Describes a network resource.</p>
 */
export interface NetworkResourceSummary {
  /**
   * <p>The ARN of the gateway.</p>
   */
  RegisteredGatewayArn?: string;

  /**
   * <p>The ARN of the resource.</p>
   */
  ResourceArn?: string;

  /**
   * <p>The resource type.</p>
   */
  ResourceType?: string;

  /**
   * <p>Information about the resource, in JSON format. Network Manager gets this information by describing the resource using its Describe API call.</p>
   */
  Definition?: string;

  /**
   * <p>The value for the Name tag.</p>
   */
  NameTag?: string;

  /**
   * <p>Indicates whether this is a middlebox appliance.</p>
   */
  IsMiddlebox?: boolean;
}

export namespace NetworkResourceSummary {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: NetworkResourceSummary): any => ({
    ...obj,
  });
}

/**
 * <p>Describes a path component.</p>
 */
export interface PathComponent {
  /**
   * <p>The sequence number in the path. The destination is 0.</p>
   */
  Sequence?: number;

  /**
   * <p>The resource.</p>
   */
  Resource?: NetworkResourceSummary;

  /**
   * <p>The destination CIDR block in the route table.</p>
   */
  DestinationCidrBlock?: string;
}

export namespace PathComponent {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: PathComponent): any => ({
    ...obj,
  });
}

/**
 * <p>Describes a route analysis path.</p>
 */
export interface RouteAnalysisPath {
  /**
   * <p>The status of the analysis at completion.</p>
   */
  CompletionStatus?: RouteAnalysisCompletion;

  /**
   * <p>The route analysis path.</p>
   */
  Path?: PathComponent[];
}

export namespace RouteAnalysisPath {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: RouteAnalysisPath): any => ({
    ...obj,
  });
}

export enum RouteAnalysisStatus {
  completed = "COMPLETED",
  failed = "FAILED",
  running = "RUNNING",
}

/**
 * <p>Describes a route analysis.</p>
 */
export interface RouteAnalysis {
  /**
   * <p>The ID of the global network.</p>
   */
  GlobalNetworkId?: string;

  /**
   * <p>The ID of the AWS account that created the route analysis.</p>
   */
  OwnerAccountId?: string;

  /**
   * <p>The ID of the route analysis.</p>
   */
  RouteAnalysisId?: string;

  /**
   * <p>The time that the analysis started.</p>
   */
  StartTimestamp?: Date;

  /**
   * <p>The status of the route analysis.</p>
   */
  Status?: RouteAnalysisStatus | string;

  /**
   * <p>The source.</p>
   */
  Source?: RouteAnalysisEndpointOptions;

  /**
   * <p>The destination.</p>
   */
  Destination?: RouteAnalysisEndpointOptions;

  /**
   * <p>Indicates whether to analyze the return path. The return path is not analyzed if the forward path
   *             analysis does not succeed.</p>
   */
  IncludeReturnPath?: boolean;

  /**
   * <p>Indicates whether to include the location of middlebox appliances in the route analysis.</p>
   */
  UseMiddleboxes?: boolean;

  /**
   * <p>The forward path.</p>
   */
  ForwardPath?: RouteAnalysisPath;

  /**
   * <p>The return path.</p>
   */
  ReturnPath?: RouteAnalysisPath;
}

export namespace RouteAnalysis {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: RouteAnalysis): any => ({
    ...obj,
  });
}

export interface GetRouteAnalysisResponse {
  /**
   * <p>The route analysis.</p>
   */
  RouteAnalysis?: RouteAnalysis;
}

export namespace GetRouteAnalysisResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: GetRouteAnalysisResponse): any => ({
    ...obj,
  });
}

export interface GetSitesRequest {
  /**
   * <p>The ID of the global network.</p>
   */
  GlobalNetworkId: string | undefined;

  /**
   * <p>One or more site IDs. The maximum is 10.</p>
   */
  SiteIds?: string[];

  /**
   * <p>The maximum number of results to return.</p>
   */
  MaxResults?: number;

  /**
   * <p>The token for the next page of results.</p>
   */
  NextToken?: string;
}

export namespace GetSitesRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: GetSitesRequest): any => ({
    ...obj,
  });
}

export interface GetSitesResponse {
  /**
   * <p>The sites.</p>
   */
  Sites?: Site[];

  /**
   * <p>The token for the next page of results.</p>
   */
  NextToken?: string;
}

export namespace GetSitesResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: GetSitesResponse): any => ({
    ...obj,
    ...(obj.Sites && { Sites: obj.Sites.map((item) => Site.filterSensitiveLog(item)) }),
  });
}

export interface GetSiteToSiteVpnAttachmentRequest {
  /**
   * <p>The ID of the attachment.</p>
   */
  AttachmentId: string | undefined;
}

export namespace GetSiteToSiteVpnAttachmentRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: GetSiteToSiteVpnAttachmentRequest): any => ({
    ...obj,
  });
}

export interface GetSiteToSiteVpnAttachmentResponse {
  /**
   * <p>Describes the site-to-site attachment.</p>
   */
  SiteToSiteVpnAttachment?: SiteToSiteVpnAttachment;
}

export namespace GetSiteToSiteVpnAttachmentResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: GetSiteToSiteVpnAttachmentResponse): any => ({
    ...obj,
  });
}

export interface GetTransitGatewayConnectPeerAssociationsRequest {
  /**
   * <p>The ID of the global network.</p>
   */
  GlobalNetworkId: string | undefined;

  /**
   * <p>One or more transit gateway Connect peer Amazon Resource Names (ARNs).</p>
   */
  TransitGatewayConnectPeerArns?: string[];

  /**
   * <p>The maximum number of results to return.</p>
   */
  MaxResults?: number;

  /**
   * <p>The token for the next page of results.</p>
   */
  NextToken?: string;
}

export namespace GetTransitGatewayConnectPeerAssociationsRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: GetTransitGatewayConnectPeerAssociationsRequest): any => ({
    ...obj,
  });
}

export interface GetTransitGatewayConnectPeerAssociationsResponse {
  /**
   * <p>Information about the transit gateway Connect peer associations.</p>
   */
  TransitGatewayConnectPeerAssociations?: TransitGatewayConnectPeerAssociation[];

  /**
   * <p>The token to use for the next page of results.</p>
   */
  NextToken?: string;
}

export namespace GetTransitGatewayConnectPeerAssociationsResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: GetTransitGatewayConnectPeerAssociationsResponse): any => ({
    ...obj,
  });
}

export interface GetTransitGatewayRegistrationsRequest {
  /**
   * <p>The ID of the global network.</p>
   */
  GlobalNetworkId: string | undefined;

  /**
   * <p>The Amazon Resource Names (ARNs) of one or more transit gateways. The maximum is
   *             10.</p>
   */
  TransitGatewayArns?: string[];

  /**
   * <p>The maximum number of results to return.</p>
   */
  MaxResults?: number;

  /**
   * <p>The token for the next page of results.</p>
   */
  NextToken?: string;
}

export namespace GetTransitGatewayRegistrationsRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: GetTransitGatewayRegistrationsRequest): any => ({
    ...obj,
  });
}

export interface GetTransitGatewayRegistrationsResponse {
  /**
   * <p>The transit gateway registrations.</p>
   */
  TransitGatewayRegistrations?: TransitGatewayRegistration[];

  /**
   * <p>The token for the next page of results.</p>
   */
  NextToken?: string;
}

export namespace GetTransitGatewayRegistrationsResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: GetTransitGatewayRegistrationsResponse): any => ({
    ...obj,
  });
}

export interface GetVpcAttachmentRequest {
  /**
   * <p>The ID of the attachment.</p>
   */
  AttachmentId: string | undefined;
}

export namespace GetVpcAttachmentRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: GetVpcAttachmentRequest): any => ({
    ...obj,
  });
}

export interface GetVpcAttachmentResponse {
  /**
   * <p>Returns details about a VPC attachment.</p>
   */
  VpcAttachment?: VpcAttachment;
}

export namespace GetVpcAttachmentResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: GetVpcAttachmentResponse): any => ({
    ...obj,
  });
}

export interface ListAttachmentsRequest {
  /**
   * <p>The ID of a core network.</p>
   */
  CoreNetworkId?: string;

  /**
   * <p>The type of attachment.</p>
   */
  AttachmentType?: AttachmentType | string;

  /**
   * <p>The Region where the edge is located.</p>
   */
  EdgeLocation?: string;

  /**
   * <p>The state of the attachment.</p>
   */
  State?: AttachmentState | string;

  /**
   * <p>The maximum number of results to return.</p>
   */
  MaxResults?: number;

  /**
   * <p>The token for the next page of results.</p>
   */
  NextToken?: string;
}

export namespace ListAttachmentsRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ListAttachmentsRequest): any => ({
    ...obj,
  });
}

export interface ListAttachmentsResponse {
  /**
   * <p>Describes the list of attachments.</p>
   */
  Attachments?: Attachment[];

  /**
   * <p>The token for the next page of results.</p>
   */
  NextToken?: string;
}

export namespace ListAttachmentsResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ListAttachmentsResponse): any => ({
    ...obj,
  });
}

export interface ListConnectPeersRequest {
  /**
   * <p>The ID of a core network.</p>
   */
  CoreNetworkId?: string;

  /**
   * <p>The ID of the attachment.</p>
   */
  ConnectAttachmentId?: string;

  /**
   * <p>The maximum number of results to return.</p>
   */
  MaxResults?: number;

  /**
   * <p>The token for the next page of results.</p>
   */
  NextToken?: string;
}

export namespace ListConnectPeersRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ListConnectPeersRequest): any => ({
    ...obj,
  });
}

export interface ListConnectPeersResponse {
  /**
   * <p>Describes the Connect peers.</p>
   */
  ConnectPeers?: ConnectPeerSummary[];

  /**
   * <p>The token for the next page of results.</p>
   */
  NextToken?: string;
}

export namespace ListConnectPeersResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ListConnectPeersResponse): any => ({
    ...obj,
  });
}

export interface ListCoreNetworkPolicyVersionsRequest {
  /**
   * <p>The ID of a core network.</p>
   */
  CoreNetworkId: string | undefined;

  /**
   * <p>The maximum number of results to return.</p>
   */
  MaxResults?: number;

  /**
   * <p>The token for the next page of results.</p>
   */
  NextToken?: string;
}

export namespace ListCoreNetworkPolicyVersionsRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ListCoreNetworkPolicyVersionsRequest): any => ({
    ...obj,
  });
}

export interface ListCoreNetworkPolicyVersionsResponse {
  /**
   * <p>Describes core network policy versions.</p>
   */
  CoreNetworkPolicyVersions?: CoreNetworkPolicyVersion[];

  /**
   * <p>The token for the next page of results.</p>
   */
  NextToken?: string;
}

export namespace ListCoreNetworkPolicyVersionsResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ListCoreNetworkPolicyVersionsResponse): any => ({
    ...obj,
  });
}

export interface ListCoreNetworksRequest {
  /**
   * <p>The maximum number of results to return.</p>
   */
  MaxResults?: number;

  /**
   * <p>The token for the next page of results.</p>
   */
  NextToken?: string;
}

export namespace ListCoreNetworksRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ListCoreNetworksRequest): any => ({
    ...obj,
  });
}

export interface ListCoreNetworksResponse {
  /**
   * <p>Describes the list of core networks.</p>
   */
  CoreNetworks?: CoreNetworkSummary[];

  /**
   * <p>The token for the next page of results.</p>
   */
  NextToken?: string;
}

export namespace ListCoreNetworksResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ListCoreNetworksResponse): any => ({
    ...obj,
  });
}

export interface ListOrganizationServiceAccessStatusRequest {
  MaxResults?: number;
  NextToken?: string;
}

export namespace ListOrganizationServiceAccessStatusRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ListOrganizationServiceAccessStatusRequest): any => ({
    ...obj,
  });
}

export interface OrganizationStatus {
  OrganizationId?: string;
  OrganizationAwsServiceAccessStatus?: string;
  SLRDeploymentStatus?: string;
  AccountStatusList?: AccountStatus[];
}

export namespace OrganizationStatus {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: OrganizationStatus): any => ({
    ...obj,
  });
}

export interface ListOrganizationServiceAccessStatusResponse {
  OrganizationStatus?: OrganizationStatus;
  NextToken?: string;
}

export namespace ListOrganizationServiceAccessStatusResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ListOrganizationServiceAccessStatusResponse): any => ({
    ...obj,
  });
}

export interface ListTagsForResourceRequest {
  /**
   * <p>The Amazon Resource Name (ARN) of the resource.</p>
   */
  ResourceArn: string | undefined;
}

export namespace ListTagsForResourceRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ListTagsForResourceRequest): any => ({
    ...obj,
  });
}

export interface ListTagsForResourceResponse {
  /**
   * <p>The list of tags.</p>
   */
  TagList?: Tag[];
}

export namespace ListTagsForResourceResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ListTagsForResourceResponse): any => ({
    ...obj,
  });
}

export interface PutCoreNetworkPolicyRequest {
  /**
   * <p>The ID of a core network.</p>
   */
  CoreNetworkId: string | undefined;

  /**
   * <p>The policy document.</p>
   */
  PolicyDocument: __LazyJsonString | string | undefined;

  /**
   * <p>a core network policy description.</p>
   */
  Description?: string;

  /**
   * <p>The ID of a core network policy. </p>
   */
  LatestVersionId?: number;

  /**
   * <p>The client token associated with the request.</p>
   */
  ClientToken?: string;
}

export namespace PutCoreNetworkPolicyRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: PutCoreNetworkPolicyRequest): any => ({
    ...obj,
  });
}

export interface PutCoreNetworkPolicyResponse {
  /**
   * <p>Describes the changed core network policy.</p>
   */
  CoreNetworkPolicy?: CoreNetworkPolicy;
}

export namespace PutCoreNetworkPolicyResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: PutCoreNetworkPolicyResponse): any => ({
    ...obj,
  });
}

export interface PutResourcePolicyRequest {
  /**
   * <p>The JSON resource policy document.</p>
   */
  PolicyDocument: __LazyJsonString | string | undefined;

  /**
   * <p>The ARN of the resource policy. </p>
   */
  ResourceArn: string | undefined;
}

export namespace PutResourcePolicyRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: PutResourcePolicyRequest): any => ({
    ...obj,
  });
}

export interface PutResourcePolicyResponse {}

export namespace PutResourcePolicyResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: PutResourcePolicyResponse): any => ({
    ...obj,
  });
}

export interface RegisterTransitGatewayRequest {
  /**
   * <p>The ID of the global network.</p>
   */
  GlobalNetworkId: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the transit gateway.</p>
   */
  TransitGatewayArn: string | undefined;
}

export namespace RegisterTransitGatewayRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: RegisterTransitGatewayRequest): any => ({
    ...obj,
  });
}

export interface RegisterTransitGatewayResponse {
  /**
   * <p>Information about the transit gateway registration.</p>
   */
  TransitGatewayRegistration?: TransitGatewayRegistration;
}

export namespace RegisterTransitGatewayResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: RegisterTransitGatewayResponse): any => ({
    ...obj,
  });
}

export interface RejectAttachmentRequest {
  /**
   * <p>The ID of the attachment.</p>
   */
  AttachmentId: string | undefined;
}

export namespace RejectAttachmentRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: RejectAttachmentRequest): any => ({
    ...obj,
  });
}

export interface RejectAttachmentResponse {
  /**
   * <p>Describes the rejected attachment request.</p>
   */
  Attachment?: Attachment;
}

export namespace RejectAttachmentResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: RejectAttachmentResponse): any => ({
    ...obj,
  });
}

export interface RestoreCoreNetworkPolicyVersionRequest {
  /**
   * <p>The ID of a core network.</p>
   */
  CoreNetworkId: string | undefined;

  /**
   * <p>The ID of the policy version to restore.</p>
   */
  PolicyVersionId: number | undefined;
}

export namespace RestoreCoreNetworkPolicyVersionRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: RestoreCoreNetworkPolicyVersionRequest): any => ({
    ...obj,
  });
}

export interface RestoreCoreNetworkPolicyVersionResponse {
  /**
   * <p>Describes the restored core network policy.</p>
   */
  CoreNetworkPolicy?: CoreNetworkPolicy;
}

export namespace RestoreCoreNetworkPolicyVersionResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: RestoreCoreNetworkPolicyVersionResponse): any => ({
    ...obj,
  });
}

export interface StartOrganizationServiceAccessUpdateRequest {
  Action: string | undefined;
}

export namespace StartOrganizationServiceAccessUpdateRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: StartOrganizationServiceAccessUpdateRequest): any => ({
    ...obj,
  });
}

export interface StartOrganizationServiceAccessUpdateResponse {
  OrganizationStatus?: OrganizationStatus;
}

export namespace StartOrganizationServiceAccessUpdateResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: StartOrganizationServiceAccessUpdateResponse): any => ({
    ...obj,
  });
}

/**
 * <p>Describes a source or a destination.</p>
 */
export interface RouteAnalysisEndpointOptionsSpecification {
  /**
   * <p>The ARN of the transit gateway attachment.</p>
   */
  TransitGatewayAttachmentArn?: string;

  /**
   * <p>The IP address.</p>
   */
  IpAddress?: string;
}

export namespace RouteAnalysisEndpointOptionsSpecification {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: RouteAnalysisEndpointOptionsSpecification): any => ({
    ...obj,
  });
}

export interface StartRouteAnalysisRequest {
  /**
   * <p>The ID of the global network.</p>
   */
  GlobalNetworkId: string | undefined;

  /**
   * <p>The source from which traffic originates.</p>
   */
  Source: RouteAnalysisEndpointOptionsSpecification | undefined;

  /**
   * <p>The destination.</p>
   */
  Destination: RouteAnalysisEndpointOptionsSpecification | undefined;

  /**
   * <p>Indicates whether to analyze the return path. The default is <code>false</code>.</p>
   */
  IncludeReturnPath?: boolean;

  /**
   * <p>Indicates whether to include the location of middlebox appliances in the route analysis.
   *             The default is <code>false</code>.</p>
   */
  UseMiddleboxes?: boolean;
}

export namespace StartRouteAnalysisRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: StartRouteAnalysisRequest): any => ({
    ...obj,
  });
}

export interface StartRouteAnalysisResponse {
  /**
   * <p>The route analysis.</p>
   */
  RouteAnalysis?: RouteAnalysis;
}

export namespace StartRouteAnalysisResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: StartRouteAnalysisResponse): any => ({
    ...obj,
  });
}

export interface TagResourceRequest {
  /**
   * <p>The Amazon Resource Name (ARN) of the resource.</p>
   */
  ResourceArn: string | undefined;

  /**
   * <p>The tags to apply to the specified resource.</p>
   */
  Tags: Tag[] | undefined;
}

export namespace TagResourceRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: TagResourceRequest): any => ({
    ...obj,
  });
}

export interface TagResourceResponse {}

export namespace TagResourceResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: TagResourceResponse): any => ({
    ...obj,
  });
}

export interface UntagResourceRequest {
  /**
   * <p>The Amazon Resource Name (ARN) of the resource.</p>
   */
  ResourceArn: string | undefined;

  /**
   * <p>The tag keys to remove from the specified resource.</p>
   */
  TagKeys: string[] | undefined;
}

export namespace UntagResourceRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: UntagResourceRequest): any => ({
    ...obj,
  });
}

export interface UntagResourceResponse {}

export namespace UntagResourceResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: UntagResourceResponse): any => ({
    ...obj,
  });
}

export interface UpdateConnectionRequest {
  /**
   * <p>The ID of the global network.</p>
   */
  GlobalNetworkId: string | undefined;

  /**
   * <p>The ID of the connection.</p>
   */
  ConnectionId: string | undefined;

  /**
   * <p>The ID of the link for the first device in the connection.</p>
   */
  LinkId?: string;

  /**
   * <p>The ID of the link for the second device in the connection.</p>
   */
  ConnectedLinkId?: string;

  /**
   * <p>A description of the connection.</p>
   *         <p>Length Constraints: Maximum length of 256 characters.</p>
   */
  Description?: string;
}

export namespace UpdateConnectionRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: UpdateConnectionRequest): any => ({
    ...obj,
  });
}

export interface UpdateConnectionResponse {
  /**
   * <p>Information about the connection.</p>
   */
  Connection?: Connection;
}

export namespace UpdateConnectionResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: UpdateConnectionResponse): any => ({
    ...obj,
  });
}

export interface UpdateCoreNetworkRequest {
  /**
   * <p>The ID of a core network.</p>
   */
  CoreNetworkId: string | undefined;

  /**
   * <p>The description of the update.</p>
   */
  Description?: string;
}

export namespace UpdateCoreNetworkRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: UpdateCoreNetworkRequest): any => ({
    ...obj,
  });
}

export interface UpdateCoreNetworkResponse {
  /**
   * <p>Returns information about a core network update.</p>
   */
  CoreNetwork?: CoreNetwork;
}

export namespace UpdateCoreNetworkResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: UpdateCoreNetworkResponse): any => ({
    ...obj,
  });
}

export interface UpdateDeviceRequest {
  /**
   * <p>The ID of the global network.</p>
   */
  GlobalNetworkId: string | undefined;

  /**
   * <p>The ID of the device.</p>
   */
  DeviceId: string | undefined;

  /**
   * <p>The Amazon Web Services location of the device, if applicable. For an on-premises device, you can omit this parameter.</p>
   */
  AWSLocation?: AWSLocation;

  /**
   * <p>A description of the device.</p>
   *         <p>Constraints: Maximum length of 256 characters.</p>
   */
  Description?: string;

  /**
   * <p>The type of the device.</p>
   */
  Type?: string;

  /**
   * <p>The vendor of the device.</p>
   *         <p>Constraints: Maximum length of 128 characters.</p>
   */
  Vendor?: string;

  /**
   * <p>The model of the device.</p>
   *         <p>Constraints: Maximum length of 128 characters.</p>
   */
  Model?: string;

  /**
   * <p>The serial number of the device.</p>
   *         <p>Constraints: Maximum length of 128 characters.</p>
   */
  SerialNumber?: string;

  /**
   * <p>Describes a location.</p>
   */
  Location?: Location;

  /**
   * <p>The ID of the site.</p>
   */
  SiteId?: string;
}

export namespace UpdateDeviceRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: UpdateDeviceRequest): any => ({
    ...obj,
    ...(obj.Location && { Location: SENSITIVE_STRING }),
  });
}

export interface UpdateDeviceResponse {
  /**
   * <p>Information about the device.</p>
   */
  Device?: Device;
}

export namespace UpdateDeviceResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: UpdateDeviceResponse): any => ({
    ...obj,
    ...(obj.Device && { Device: Device.filterSensitiveLog(obj.Device) }),
  });
}

export interface UpdateGlobalNetworkRequest {
  /**
   * <p>The ID of your global network.</p>
   */
  GlobalNetworkId: string | undefined;

  /**
   * <p>A description of the global network.</p>
   *         <p>Constraints: Maximum length of 256 characters.</p>
   */
  Description?: string;
}

export namespace UpdateGlobalNetworkRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: UpdateGlobalNetworkRequest): any => ({
    ...obj,
  });
}

export interface UpdateGlobalNetworkResponse {
  /**
   * <p>Information about the global network object.</p>
   */
  GlobalNetwork?: GlobalNetwork;
}

export namespace UpdateGlobalNetworkResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: UpdateGlobalNetworkResponse): any => ({
    ...obj,
  });
}

export interface UpdateLinkRequest {
  /**
   * <p>The ID of the global network.</p>
   */
  GlobalNetworkId: string | undefined;

  /**
   * <p>The ID of the link.</p>
   */
  LinkId: string | undefined;

  /**
   * <p>A description of the link.</p>
   *         <p>Constraints: Maximum length of 256 characters.</p>
   */
  Description?: string;

  /**
   * <p>The type of the link.</p>
   *         <p>Constraints: Maximum length of 128 characters.</p>
   */
  Type?: string;

  /**
   * <p>The upload and download speed in Mbps. </p>
   */
  Bandwidth?: Bandwidth;

  /**
   * <p>The provider of the link.</p>
   *         <p>Constraints: Maximum length of 128 characters.</p>
   */
  Provider?: string;
}

export namespace UpdateLinkRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: UpdateLinkRequest): any => ({
    ...obj,
  });
}

export interface UpdateLinkResponse {
  /**
   * <p>Information about the link.</p>
   */
  Link?: Link;
}

export namespace UpdateLinkResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: UpdateLinkResponse): any => ({
    ...obj,
  });
}

export interface UpdateNetworkResourceMetadataRequest {
  /**
   * <p>The ID of the global network.</p>
   */
  GlobalNetworkId: string | undefined;

  /**
   * <p>The ARN of the resource.</p>
   */
  ResourceArn: string | undefined;

  /**
   * <p>The resource metadata.</p>
   */
  Metadata: { [key: string]: string } | undefined;
}

export namespace UpdateNetworkResourceMetadataRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: UpdateNetworkResourceMetadataRequest): any => ({
    ...obj,
  });
}

export interface UpdateNetworkResourceMetadataResponse {
  /**
   * <p>The ARN of the resource.</p>
   */
  ResourceArn?: string;

  /**
   * <p>The updated resource metadata.</p>
   */
  Metadata?: { [key: string]: string };
}

export namespace UpdateNetworkResourceMetadataResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: UpdateNetworkResourceMetadataResponse): any => ({
    ...obj,
  });
}

export interface UpdateSiteRequest {
  /**
   * <p>The ID of the global network.</p>
   */
  GlobalNetworkId: string | undefined;

  /**
   * <p>The ID of your site.</p>
   */
  SiteId: string | undefined;

  /**
   * <p>A description of your site.</p>
   *         <p>Constraints: Maximum length of 256 characters.</p>
   */
  Description?: string;

  /**
   * <p>The site location:</p>
   *         <ul>
   *             <li>
   *                <p>
   *                   <code>Address</code>: The physical address of the site.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>Latitude</code>: The latitude of the site. </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>Longitude</code>: The longitude of the site.</p>
   *             </li>
   *          </ul>
   */
  Location?: Location;
}

export namespace UpdateSiteRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: UpdateSiteRequest): any => ({
    ...obj,
    ...(obj.Location && { Location: SENSITIVE_STRING }),
  });
}

export interface UpdateSiteResponse {
  /**
   * <p>Information about the site.</p>
   */
  Site?: Site;
}

export namespace UpdateSiteResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: UpdateSiteResponse): any => ({
    ...obj,
    ...(obj.Site && { Site: Site.filterSensitiveLog(obj.Site) }),
  });
}

export interface UpdateVpcAttachmentRequest {
  /**
   * <p>The ID of the attachment.</p>
   */
  AttachmentId: string | undefined;

  /**
   * <p>Adds a subnet ARN to the VPC attachment.</p>
   */
  AddSubnetArns?: string[];

  /**
   * <p>Removes a subnet ARN from the attachment.</p>
   */
  RemoveSubnetArns?: string[];

  /**
   * <p>Additional options for updating the VPC attachment. </p>
   */
  Options?: VpcOptions;
}

export namespace UpdateVpcAttachmentRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: UpdateVpcAttachmentRequest): any => ({
    ...obj,
  });
}

export interface UpdateVpcAttachmentResponse {
  /**
   * <p>Describes the updated VPC attachment.</p>
   */
  VpcAttachment?: VpcAttachment;
}

export namespace UpdateVpcAttachmentResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: UpdateVpcAttachmentResponse): any => ({
    ...obj,
  });
}
