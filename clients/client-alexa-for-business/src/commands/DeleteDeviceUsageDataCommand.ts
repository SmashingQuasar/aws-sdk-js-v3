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

import { AlexaForBusinessClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../AlexaForBusinessClient";
import { DeleteDeviceUsageDataRequest, DeleteDeviceUsageDataResponse } from "../models/models_0";
import {
  deserializeAws_json1_1DeleteDeviceUsageDataCommand,
  serializeAws_json1_1DeleteDeviceUsageDataCommand,
} from "../protocols/Aws_json1_1";

export interface DeleteDeviceUsageDataCommandInput extends DeleteDeviceUsageDataRequest {}
export interface DeleteDeviceUsageDataCommandOutput extends DeleteDeviceUsageDataResponse, __MetadataBearer {}

/**
 * <p>When this action is called for a specified shared device, it allows authorized users to
 *          delete the device's entire previous history of voice input data and associated response
 *          data. This action can be called once every 24 hours for a specific shared device.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { AlexaForBusinessClient, DeleteDeviceUsageDataCommand } from "@aws-sdk/client-alexa-for-business"; // ES Modules import
 * // const { AlexaForBusinessClient, DeleteDeviceUsageDataCommand } = require("@aws-sdk/client-alexa-for-business"); // CommonJS import
 * const client = new AlexaForBusinessClient(config);
 * const command = new DeleteDeviceUsageDataCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DeleteDeviceUsageDataCommandInput} for command's `input` shape.
 * @see {@link DeleteDeviceUsageDataCommandOutput} for command's `response` shape.
 * @see {@link AlexaForBusinessClientResolvedConfig | config} for AlexaForBusinessClient's `config` shape.
 *
 */
export class DeleteDeviceUsageDataCommand extends $Command<
  DeleteDeviceUsageDataCommandInput,
  DeleteDeviceUsageDataCommandOutput,
  AlexaForBusinessClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: DeleteDeviceUsageDataCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: AlexaForBusinessClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<DeleteDeviceUsageDataCommandInput, DeleteDeviceUsageDataCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "AlexaForBusinessClient";
    const commandName = "DeleteDeviceUsageDataCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: DeleteDeviceUsageDataRequest.filterSensitiveLog,
      outputFilterSensitiveLog: DeleteDeviceUsageDataResponse.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: DeleteDeviceUsageDataCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_1DeleteDeviceUsageDataCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<DeleteDeviceUsageDataCommandOutput> {
    return deserializeAws_json1_1DeleteDeviceUsageDataCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
