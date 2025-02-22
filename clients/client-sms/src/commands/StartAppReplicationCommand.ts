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

import { StartAppReplicationRequest, StartAppReplicationResponse } from "../models/models_0";
import {
  deserializeAws_json1_1StartAppReplicationCommand,
  serializeAws_json1_1StartAppReplicationCommand,
} from "../protocols/Aws_json1_1";
import { ServiceInputTypes, ServiceOutputTypes, SMSClientResolvedConfig } from "../SMSClient";

export interface StartAppReplicationCommandInput extends StartAppReplicationRequest {}
export interface StartAppReplicationCommandOutput extends StartAppReplicationResponse, __MetadataBearer {}

/**
 * <p>Starts replicating the specified application by creating replication jobs for each server in the
 *             application.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SMSClient, StartAppReplicationCommand } from "@aws-sdk/client-sms"; // ES Modules import
 * // const { SMSClient, StartAppReplicationCommand } = require("@aws-sdk/client-sms"); // CommonJS import
 * const client = new SMSClient(config);
 * const command = new StartAppReplicationCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link StartAppReplicationCommandInput} for command's `input` shape.
 * @see {@link StartAppReplicationCommandOutput} for command's `response` shape.
 * @see {@link SMSClientResolvedConfig | config} for SMSClient's `config` shape.
 *
 */
export class StartAppReplicationCommand extends $Command<
  StartAppReplicationCommandInput,
  StartAppReplicationCommandOutput,
  SMSClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: StartAppReplicationCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: SMSClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<StartAppReplicationCommandInput, StartAppReplicationCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "SMSClient";
    const commandName = "StartAppReplicationCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: StartAppReplicationRequest.filterSensitiveLog,
      outputFilterSensitiveLog: StartAppReplicationResponse.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: StartAppReplicationCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_1StartAppReplicationCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<StartAppReplicationCommandOutput> {
    return deserializeAws_json1_1StartAppReplicationCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
