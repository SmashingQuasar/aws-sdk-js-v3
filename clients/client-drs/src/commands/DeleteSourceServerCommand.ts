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

import { DrsClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../DrsClient";
import { DeleteSourceServerRequest, DeleteSourceServerResponse } from "../models/models_0";
import {
  deserializeAws_restJson1DeleteSourceServerCommand,
  serializeAws_restJson1DeleteSourceServerCommand,
} from "../protocols/Aws_restJson1";

export interface DeleteSourceServerCommandInput extends DeleteSourceServerRequest {}
export interface DeleteSourceServerCommandOutput extends DeleteSourceServerResponse, __MetadataBearer {}

/**
 * <p>Deletes a single Source Server by ID. The Source Server must be disconnected first.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { DrsClient, DeleteSourceServerCommand } from "@aws-sdk/client-drs"; // ES Modules import
 * // const { DrsClient, DeleteSourceServerCommand } = require("@aws-sdk/client-drs"); // CommonJS import
 * const client = new DrsClient(config);
 * const command = new DeleteSourceServerCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DeleteSourceServerCommandInput} for command's `input` shape.
 * @see {@link DeleteSourceServerCommandOutput} for command's `response` shape.
 * @see {@link DrsClientResolvedConfig | config} for DrsClient's `config` shape.
 *
 */
export class DeleteSourceServerCommand extends $Command<
  DeleteSourceServerCommandInput,
  DeleteSourceServerCommandOutput,
  DrsClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: DeleteSourceServerCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: DrsClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<DeleteSourceServerCommandInput, DeleteSourceServerCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "DrsClient";
    const commandName = "DeleteSourceServerCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: DeleteSourceServerRequest.filterSensitiveLog,
      outputFilterSensitiveLog: DeleteSourceServerResponse.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: DeleteSourceServerCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_restJson1DeleteSourceServerCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<DeleteSourceServerCommandOutput> {
    return deserializeAws_restJson1DeleteSourceServerCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
