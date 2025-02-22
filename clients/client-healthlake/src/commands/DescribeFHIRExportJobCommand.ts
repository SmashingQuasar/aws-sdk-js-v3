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

import { HealthLakeClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../HealthLakeClient";
import { DescribeFHIRExportJobRequest, DescribeFHIRExportJobResponse } from "../models/models_0";
import {
  deserializeAws_json1_0DescribeFHIRExportJobCommand,
  serializeAws_json1_0DescribeFHIRExportJobCommand,
} from "../protocols/Aws_json1_0";

export interface DescribeFHIRExportJobCommandInput extends DescribeFHIRExportJobRequest {}
export interface DescribeFHIRExportJobCommandOutput extends DescribeFHIRExportJobResponse, __MetadataBearer {}

/**
 * <p>Displays the properties of a FHIR export job, including the ID, ARN, name, and the status of the job.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { HealthLakeClient, DescribeFHIRExportJobCommand } from "@aws-sdk/client-healthlake"; // ES Modules import
 * // const { HealthLakeClient, DescribeFHIRExportJobCommand } = require("@aws-sdk/client-healthlake"); // CommonJS import
 * const client = new HealthLakeClient(config);
 * const command = new DescribeFHIRExportJobCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DescribeFHIRExportJobCommandInput} for command's `input` shape.
 * @see {@link DescribeFHIRExportJobCommandOutput} for command's `response` shape.
 * @see {@link HealthLakeClientResolvedConfig | config} for HealthLakeClient's `config` shape.
 *
 */
export class DescribeFHIRExportJobCommand extends $Command<
  DescribeFHIRExportJobCommandInput,
  DescribeFHIRExportJobCommandOutput,
  HealthLakeClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: DescribeFHIRExportJobCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: HealthLakeClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<DescribeFHIRExportJobCommandInput, DescribeFHIRExportJobCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "HealthLakeClient";
    const commandName = "DescribeFHIRExportJobCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: DescribeFHIRExportJobRequest.filterSensitiveLog,
      outputFilterSensitiveLog: DescribeFHIRExportJobResponse.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: DescribeFHIRExportJobCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_0DescribeFHIRExportJobCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<DescribeFHIRExportJobCommandOutput> {
    return deserializeAws_json1_0DescribeFHIRExportJobCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
