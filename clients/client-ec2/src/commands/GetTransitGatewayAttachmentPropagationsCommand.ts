// smithy-typescript generated code
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { HttpRequest as __HttpRequest, HttpResponse as __HttpResponse } from "@aws-sdk/protocol-http";
import { Command as $Command } from "@aws-sdk/smithy-client";
import {
  FinalizeHandlerArguments,
  Handler,
  HandlerExecutionContext,
  HttpHandlerOptions as __HttpHandlerOptions,
  MetadataBearer as __MetadataBearer,
  MiddlewareStack,
  SerdeContext as __SerdeContext,
} from "@aws-sdk/types";

import { EC2ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../EC2Client";
import {
  GetTransitGatewayAttachmentPropagationsRequest,
  GetTransitGatewayAttachmentPropagationsResult,
} from "../models/models_5";
import {
  deserializeAws_ec2GetTransitGatewayAttachmentPropagationsCommand,
  serializeAws_ec2GetTransitGatewayAttachmentPropagationsCommand,
} from "../protocols/Aws_ec2";

export interface GetTransitGatewayAttachmentPropagationsCommandInput
  extends GetTransitGatewayAttachmentPropagationsRequest {}
export interface GetTransitGatewayAttachmentPropagationsCommandOutput
  extends GetTransitGatewayAttachmentPropagationsResult,
    __MetadataBearer {}

/**
 * <p>Lists the route tables to which the specified resource attachment propagates routes.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { EC2Client, GetTransitGatewayAttachmentPropagationsCommand } from "@aws-sdk/client-ec2"; // ES Modules import
 * // const { EC2Client, GetTransitGatewayAttachmentPropagationsCommand } = require("@aws-sdk/client-ec2"); // CommonJS import
 * const client = new EC2Client(config);
 * const command = new GetTransitGatewayAttachmentPropagationsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link GetTransitGatewayAttachmentPropagationsCommandInput} for command's `input` shape.
 * @see {@link GetTransitGatewayAttachmentPropagationsCommandOutput} for command's `response` shape.
 * @see {@link EC2ClientResolvedConfig | config} for EC2Client's `config` shape.
 *
 */
export class GetTransitGatewayAttachmentPropagationsCommand extends $Command<
  GetTransitGatewayAttachmentPropagationsCommandInput,
  GetTransitGatewayAttachmentPropagationsCommandOutput,
  EC2ClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: GetTransitGatewayAttachmentPropagationsCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: EC2ClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<
    GetTransitGatewayAttachmentPropagationsCommandInput,
    GetTransitGatewayAttachmentPropagationsCommandOutput
  > {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "EC2Client";
    const commandName = "GetTransitGatewayAttachmentPropagationsCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: GetTransitGatewayAttachmentPropagationsRequest.filterSensitiveLog,
      outputFilterSensitiveLog: GetTransitGatewayAttachmentPropagationsResult.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(
    input: GetTransitGatewayAttachmentPropagationsCommandInput,
    context: __SerdeContext
  ): Promise<__HttpRequest> {
    return serializeAws_ec2GetTransitGatewayAttachmentPropagationsCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<GetTransitGatewayAttachmentPropagationsCommandOutput> {
    return deserializeAws_ec2GetTransitGatewayAttachmentPropagationsCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
