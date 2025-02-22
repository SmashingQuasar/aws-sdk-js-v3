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

import { CodePipelineClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../CodePipelineClient";
import { PutThirdPartyJobSuccessResultInput } from "../models/models_0";
import {
  deserializeAws_json1_1PutThirdPartyJobSuccessResultCommand,
  serializeAws_json1_1PutThirdPartyJobSuccessResultCommand,
} from "../protocols/Aws_json1_1";

export interface PutThirdPartyJobSuccessResultCommandInput extends PutThirdPartyJobSuccessResultInput {}
export interface PutThirdPartyJobSuccessResultCommandOutput extends __MetadataBearer {}

/**
 * <p>Represents the success of a third party job as returned to the pipeline by a job
 *             worker. Used for partner actions only.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CodePipelineClient, PutThirdPartyJobSuccessResultCommand } from "@aws-sdk/client-codepipeline"; // ES Modules import
 * // const { CodePipelineClient, PutThirdPartyJobSuccessResultCommand } = require("@aws-sdk/client-codepipeline"); // CommonJS import
 * const client = new CodePipelineClient(config);
 * const command = new PutThirdPartyJobSuccessResultCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link PutThirdPartyJobSuccessResultCommandInput} for command's `input` shape.
 * @see {@link PutThirdPartyJobSuccessResultCommandOutput} for command's `response` shape.
 * @see {@link CodePipelineClientResolvedConfig | config} for CodePipelineClient's `config` shape.
 *
 */
export class PutThirdPartyJobSuccessResultCommand extends $Command<
  PutThirdPartyJobSuccessResultCommandInput,
  PutThirdPartyJobSuccessResultCommandOutput,
  CodePipelineClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: PutThirdPartyJobSuccessResultCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: CodePipelineClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<PutThirdPartyJobSuccessResultCommandInput, PutThirdPartyJobSuccessResultCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "CodePipelineClient";
    const commandName = "PutThirdPartyJobSuccessResultCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: PutThirdPartyJobSuccessResultInput.filterSensitiveLog,
      outputFilterSensitiveLog: (output: any) => output,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: PutThirdPartyJobSuccessResultCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_1PutThirdPartyJobSuccessResultCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<PutThirdPartyJobSuccessResultCommandOutput> {
    return deserializeAws_json1_1PutThirdPartyJobSuccessResultCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
