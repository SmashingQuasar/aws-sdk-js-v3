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

import { Macie2ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../Macie2Client";
import { CreateCustomDataIdentifierRequest, CreateCustomDataIdentifierResponse } from "../models/models_0";
import {
  deserializeAws_restJson1CreateCustomDataIdentifierCommand,
  serializeAws_restJson1CreateCustomDataIdentifierCommand,
} from "../protocols/Aws_restJson1";

export interface CreateCustomDataIdentifierCommandInput extends CreateCustomDataIdentifierRequest {}
export interface CreateCustomDataIdentifierCommandOutput extends CreateCustomDataIdentifierResponse, __MetadataBearer {}

/**
 * <p>Creates and defines the criteria and other settings for a custom data identifier.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { Macie2Client, CreateCustomDataIdentifierCommand } from "@aws-sdk/client-macie2"; // ES Modules import
 * // const { Macie2Client, CreateCustomDataIdentifierCommand } = require("@aws-sdk/client-macie2"); // CommonJS import
 * const client = new Macie2Client(config);
 * const command = new CreateCustomDataIdentifierCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link CreateCustomDataIdentifierCommandInput} for command's `input` shape.
 * @see {@link CreateCustomDataIdentifierCommandOutput} for command's `response` shape.
 * @see {@link Macie2ClientResolvedConfig | config} for Macie2Client's `config` shape.
 *
 */
export class CreateCustomDataIdentifierCommand extends $Command<
  CreateCustomDataIdentifierCommandInput,
  CreateCustomDataIdentifierCommandOutput,
  Macie2ClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: CreateCustomDataIdentifierCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: Macie2ClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<CreateCustomDataIdentifierCommandInput, CreateCustomDataIdentifierCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "Macie2Client";
    const commandName = "CreateCustomDataIdentifierCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: CreateCustomDataIdentifierRequest.filterSensitiveLog,
      outputFilterSensitiveLog: CreateCustomDataIdentifierResponse.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: CreateCustomDataIdentifierCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_restJson1CreateCustomDataIdentifierCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<CreateCustomDataIdentifierCommandOutput> {
    return deserializeAws_restJson1CreateCustomDataIdentifierCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
