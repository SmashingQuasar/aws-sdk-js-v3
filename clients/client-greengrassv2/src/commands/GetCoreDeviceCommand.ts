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

import { GreengrassV2ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../GreengrassV2Client";
import { GetCoreDeviceRequest, GetCoreDeviceResponse } from "../models/models_0";
import {
  deserializeAws_restJson1GetCoreDeviceCommand,
  serializeAws_restJson1GetCoreDeviceCommand,
} from "../protocols/Aws_restJson1";

export interface GetCoreDeviceCommandInput extends GetCoreDeviceRequest {}
export interface GetCoreDeviceCommandOutput extends GetCoreDeviceResponse, __MetadataBearer {}

/**
 * <p>Retrieves metadata for a Greengrass core device.</p>
 *          <note>
 *             <p>IoT Greengrass relies on individual devices to send status updates to the Amazon Web Services Cloud. If the IoT Greengrass Core
 *         software isn't running on the device, or if device isn't connected to the Amazon Web Services Cloud, then
 *         the reported status of that device might not reflect its current status. The status timestamp
 *         indicates when the device status was last updated.</p>
 *             <p>Core devices send status updates at the following times:</p>
 *             <ul>
 *                <li>
 *                   <p>When the IoT Greengrass Core software starts</p>
 *                </li>
 *                <li>
 *                   <p>When the core device receives a deployment from the Amazon Web Services Cloud</p>
 *                </li>
 *                <li>
 *                   <p>When the status of any component on the core device becomes <code>BROKEN</code>
 *                   </p>
 *                </li>
 *                <li>
 *                   <p>At a <a href="https://docs.aws.amazon.com/greengrass/v2/developerguide/greengrass-nucleus-component.html#greengrass-nucleus-component-configuration-fss">regular interval
 *             that you can configure</a>, which defaults to 24 hours</p>
 *                </li>
 *             </ul>
 *          </note>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { GreengrassV2Client, GetCoreDeviceCommand } from "@aws-sdk/client-greengrassv2"; // ES Modules import
 * // const { GreengrassV2Client, GetCoreDeviceCommand } = require("@aws-sdk/client-greengrassv2"); // CommonJS import
 * const client = new GreengrassV2Client(config);
 * const command = new GetCoreDeviceCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link GetCoreDeviceCommandInput} for command's `input` shape.
 * @see {@link GetCoreDeviceCommandOutput} for command's `response` shape.
 * @see {@link GreengrassV2ClientResolvedConfig | config} for GreengrassV2Client's `config` shape.
 *
 */
export class GetCoreDeviceCommand extends $Command<
  GetCoreDeviceCommandInput,
  GetCoreDeviceCommandOutput,
  GreengrassV2ClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: GetCoreDeviceCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: GreengrassV2ClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<GetCoreDeviceCommandInput, GetCoreDeviceCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "GreengrassV2Client";
    const commandName = "GetCoreDeviceCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: GetCoreDeviceRequest.filterSensitiveLog,
      outputFilterSensitiveLog: GetCoreDeviceResponse.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: GetCoreDeviceCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_restJson1GetCoreDeviceCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<GetCoreDeviceCommandOutput> {
    return deserializeAws_restJson1GetCoreDeviceCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
