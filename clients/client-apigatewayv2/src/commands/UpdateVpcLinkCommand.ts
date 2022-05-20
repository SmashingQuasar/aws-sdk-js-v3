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

import { ApiGatewayV2ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ApiGatewayV2Client";
import { UpdateVpcLinkRequest, UpdateVpcLinkResponse } from "../models/models_0";
import {
  deserializeAws_restJson1UpdateVpcLinkCommand,
  serializeAws_restJson1UpdateVpcLinkCommand,
} from "../protocols/Aws_restJson1";

export interface UpdateVpcLinkCommandInput extends UpdateVpcLinkRequest {}
export interface UpdateVpcLinkCommandOutput extends UpdateVpcLinkResponse, __MetadataBearer {}

/**
 * <p>Updates a VPC link.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ApiGatewayV2Client, UpdateVpcLinkCommand } from "@aws-sdk/client-apigatewayv2"; // ES Modules import
 * // const { ApiGatewayV2Client, UpdateVpcLinkCommand } = require("@aws-sdk/client-apigatewayv2"); // CommonJS import
 * const client = new ApiGatewayV2Client(config);
 * const command = new UpdateVpcLinkCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link UpdateVpcLinkCommandInput} for command's `input` shape.
 * @see {@link UpdateVpcLinkCommandOutput} for command's `response` shape.
 * @see {@link ApiGatewayV2ClientResolvedConfig | config} for ApiGatewayV2Client's `config` shape.
 *
 */
export class UpdateVpcLinkCommand extends $Command<
  UpdateVpcLinkCommandInput,
  UpdateVpcLinkCommandOutput,
  ApiGatewayV2ClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: UpdateVpcLinkCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: ApiGatewayV2ClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<UpdateVpcLinkCommandInput, UpdateVpcLinkCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "ApiGatewayV2Client";
    const commandName = "UpdateVpcLinkCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: UpdateVpcLinkRequest.filterSensitiveLog,
      outputFilterSensitiveLog: UpdateVpcLinkResponse.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: UpdateVpcLinkCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_restJson1UpdateVpcLinkCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<UpdateVpcLinkCommandOutput> {
    return deserializeAws_restJson1UpdateVpcLinkCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
