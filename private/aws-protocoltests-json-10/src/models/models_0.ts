// smithy-typescript generated code
import { ExceptionOptionType as __ExceptionOptionType } from "@aws-sdk/smithy-client";

import { JSONRPC10ServiceException as __BaseException } from "./JSONRPC10ServiceException";

export interface ComplexNestedErrorData {
  Foo?: string;
}

export namespace ComplexNestedErrorData {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ComplexNestedErrorData): any => ({
    ...obj,
  });
}

/**
 * This error is thrown when a request is invalid.
 */
export class ComplexError extends __BaseException {
  readonly name: "ComplexError" = "ComplexError";
  readonly $fault: "client" = "client";
  TopLevel?: string;
  Nested?: ComplexNestedErrorData;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<ComplexError, __BaseException>) {
    super({
      name: "ComplexError",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, ComplexError.prototype);
    this.TopLevel = opts.TopLevel;
    this.Nested = opts.Nested;
  }
}

export interface EmptyInputAndEmptyOutputInput {}

export namespace EmptyInputAndEmptyOutputInput {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: EmptyInputAndEmptyOutputInput): any => ({
    ...obj,
  });
}

export interface EmptyInputAndEmptyOutputOutput {}

export namespace EmptyInputAndEmptyOutputOutput {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: EmptyInputAndEmptyOutputOutput): any => ({
    ...obj,
  });
}

export interface EndpointWithHostLabelOperationInput {
  label: string | undefined;
}

export namespace EndpointWithHostLabelOperationInput {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: EndpointWithHostLabelOperationInput): any => ({
    ...obj,
  });
}

/**
 * This error has test cases that test some of the dark corners of Amazon service
 * framework history. It should only be implemented by clients.
 */
export class FooError extends __BaseException {
  readonly name: "FooError" = "FooError";
  readonly $fault: "server" = "server";
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<FooError, __BaseException>) {
    super({
      name: "FooError",
      $fault: "server",
      ...opts,
    });
    Object.setPrototypeOf(this, FooError.prototype);
  }
}

export interface GreetingWithErrorsInput {
  greeting?: string;
}

export namespace GreetingWithErrorsInput {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: GreetingWithErrorsInput): any => ({
    ...obj,
  });
}

export interface GreetingWithErrorsOutput {
  greeting?: string;
}

export namespace GreetingWithErrorsOutput {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: GreetingWithErrorsOutput): any => ({
    ...obj,
  });
}

/**
 * This error is thrown when an invalid greeting value is provided.
 */
export class InvalidGreeting extends __BaseException {
  readonly name: "InvalidGreeting" = "InvalidGreeting";
  readonly $fault: "client" = "client";
  Message?: string;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<InvalidGreeting, __BaseException>) {
    super({
      name: "InvalidGreeting",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, InvalidGreeting.prototype);
    this.Message = opts.Message;
  }
}

export enum FooEnum {
  BAR = "Bar",
  BAZ = "Baz",
  FOO = "Foo",
  ONE = "1",
  ZERO = "0",
}

export interface GreetingStruct {
  hi?: string;
}

export namespace GreetingStruct {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: GreetingStruct): any => ({
    ...obj,
  });
}

/**
 * A union with a representative set of types for members.
 */
export type MyUnion =
  | MyUnion.BlobValueMember
  | MyUnion.BooleanValueMember
  | MyUnion.EnumValueMember
  | MyUnion.ListValueMember
  | MyUnion.MapValueMember
  | MyUnion.NumberValueMember
  | MyUnion.StringValueMember
  | MyUnion.StructureValueMember
  | MyUnion.TimestampValueMember
  | MyUnion.$UnknownMember;

export namespace MyUnion {
  export interface StringValueMember {
    stringValue: string;
    booleanValue?: never;
    numberValue?: never;
    blobValue?: never;
    timestampValue?: never;
    enumValue?: never;
    listValue?: never;
    mapValue?: never;
    structureValue?: never;
    $unknown?: never;
  }

  export interface BooleanValueMember {
    stringValue?: never;
    booleanValue: boolean;
    numberValue?: never;
    blobValue?: never;
    timestampValue?: never;
    enumValue?: never;
    listValue?: never;
    mapValue?: never;
    structureValue?: never;
    $unknown?: never;
  }

  export interface NumberValueMember {
    stringValue?: never;
    booleanValue?: never;
    numberValue: number;
    blobValue?: never;
    timestampValue?: never;
    enumValue?: never;
    listValue?: never;
    mapValue?: never;
    structureValue?: never;
    $unknown?: never;
  }

  export interface BlobValueMember {
    stringValue?: never;
    booleanValue?: never;
    numberValue?: never;
    blobValue: Uint8Array;
    timestampValue?: never;
    enumValue?: never;
    listValue?: never;
    mapValue?: never;
    structureValue?: never;
    $unknown?: never;
  }

  export interface TimestampValueMember {
    stringValue?: never;
    booleanValue?: never;
    numberValue?: never;
    blobValue?: never;
    timestampValue: Date;
    enumValue?: never;
    listValue?: never;
    mapValue?: never;
    structureValue?: never;
    $unknown?: never;
  }

  export interface EnumValueMember {
    stringValue?: never;
    booleanValue?: never;
    numberValue?: never;
    blobValue?: never;
    timestampValue?: never;
    enumValue: FooEnum | string;
    listValue?: never;
    mapValue?: never;
    structureValue?: never;
    $unknown?: never;
  }

  export interface ListValueMember {
    stringValue?: never;
    booleanValue?: never;
    numberValue?: never;
    blobValue?: never;
    timestampValue?: never;
    enumValue?: never;
    listValue: string[];
    mapValue?: never;
    structureValue?: never;
    $unknown?: never;
  }

  export interface MapValueMember {
    stringValue?: never;
    booleanValue?: never;
    numberValue?: never;
    blobValue?: never;
    timestampValue?: never;
    enumValue?: never;
    listValue?: never;
    mapValue: { [key: string]: string };
    structureValue?: never;
    $unknown?: never;
  }

  export interface StructureValueMember {
    stringValue?: never;
    booleanValue?: never;
    numberValue?: never;
    blobValue?: never;
    timestampValue?: never;
    enumValue?: never;
    listValue?: never;
    mapValue?: never;
    structureValue: GreetingStruct;
    $unknown?: never;
  }

  export interface $UnknownMember {
    stringValue?: never;
    booleanValue?: never;
    numberValue?: never;
    blobValue?: never;
    timestampValue?: never;
    enumValue?: never;
    listValue?: never;
    mapValue?: never;
    structureValue?: never;
    $unknown: [string, any];
  }

  export interface Visitor<T> {
    stringValue: (value: string) => T;
    booleanValue: (value: boolean) => T;
    numberValue: (value: number) => T;
    blobValue: (value: Uint8Array) => T;
    timestampValue: (value: Date) => T;
    enumValue: (value: FooEnum | string) => T;
    listValue: (value: string[]) => T;
    mapValue: (value: { [key: string]: string }) => T;
    structureValue: (value: GreetingStruct) => T;
    _: (name: string, value: any) => T;
  }

  export const visit = <T>(value: MyUnion, visitor: Visitor<T>): T => {
    if (value.stringValue !== undefined) return visitor.stringValue(value.stringValue);
    if (value.booleanValue !== undefined) return visitor.booleanValue(value.booleanValue);
    if (value.numberValue !== undefined) return visitor.numberValue(value.numberValue);
    if (value.blobValue !== undefined) return visitor.blobValue(value.blobValue);
    if (value.timestampValue !== undefined) return visitor.timestampValue(value.timestampValue);
    if (value.enumValue !== undefined) return visitor.enumValue(value.enumValue);
    if (value.listValue !== undefined) return visitor.listValue(value.listValue);
    if (value.mapValue !== undefined) return visitor.mapValue(value.mapValue);
    if (value.structureValue !== undefined) return visitor.structureValue(value.structureValue);
    return visitor._(value.$unknown[0], value.$unknown[1]);
  };

  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: MyUnion): any => {
    if (obj.stringValue !== undefined) return { stringValue: obj.stringValue };
    if (obj.booleanValue !== undefined) return { booleanValue: obj.booleanValue };
    if (obj.numberValue !== undefined) return { numberValue: obj.numberValue };
    if (obj.blobValue !== undefined) return { blobValue: obj.blobValue };
    if (obj.timestampValue !== undefined) return { timestampValue: obj.timestampValue };
    if (obj.enumValue !== undefined) return { enumValue: obj.enumValue };
    if (obj.listValue !== undefined) return { listValue: obj.listValue };
    if (obj.mapValue !== undefined) return { mapValue: obj.mapValue };
    if (obj.structureValue !== undefined)
      return { structureValue: GreetingStruct.filterSensitiveLog(obj.structureValue) };
    if (obj.$unknown !== undefined) return { [obj.$unknown[0]]: "UNKNOWN" };
  };
}

export interface JsonUnionsInput {
  /**
   * A union with a representative set of types for members.
   */
  contents?: MyUnion;
}

export namespace JsonUnionsInput {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: JsonUnionsInput): any => ({
    ...obj,
    ...(obj.contents && { contents: MyUnion.filterSensitiveLog(obj.contents) }),
  });
}

export interface JsonUnionsOutput {
  /**
   * A union with a representative set of types for members.
   */
  contents?: MyUnion;
}

export namespace JsonUnionsOutput {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: JsonUnionsOutput): any => ({
    ...obj,
    ...(obj.contents && { contents: MyUnion.filterSensitiveLog(obj.contents) }),
  });
}

export interface NoInputAndOutputOutput {}

export namespace NoInputAndOutputOutput {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: NoInputAndOutputOutput): any => ({
    ...obj,
  });
}

export interface SimpleScalarPropertiesInput {
  floatValue?: number;
  doubleValue?: number;
}

export namespace SimpleScalarPropertiesInput {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: SimpleScalarPropertiesInput): any => ({
    ...obj,
  });
}

export interface SimpleScalarPropertiesOutput {
  floatValue?: number;
  doubleValue?: number;
}

export namespace SimpleScalarPropertiesOutput {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: SimpleScalarPropertiesOutput): any => ({
    ...obj,
  });
}
