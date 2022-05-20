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

import { AccessAnalyzerClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../AccessAnalyzerClient";
import { ListAccessPreviewFindingsRequest, ListAccessPreviewFindingsResponse } from "../models/models_0";
import {
  deserializeAws_restJson1ListAccessPreviewFindingsCommand,
  serializeAws_restJson1ListAccessPreviewFindingsCommand,
} from "../protocols/Aws_restJson1";

export interface ListAccessPreviewFindingsCommandInput extends ListAccessPreviewFindingsRequest {}
export interface ListAccessPreviewFindingsCommandOutput extends ListAccessPreviewFindingsResponse, __MetadataBearer {}

/**
 * <p>Retrieves a list of access preview findings generated by the specified access
 *          preview.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { AccessAnalyzerClient, ListAccessPreviewFindingsCommand } from "@aws-sdk/client-accessanalyzer"; // ES Modules import
 * // const { AccessAnalyzerClient, ListAccessPreviewFindingsCommand } = require("@aws-sdk/client-accessanalyzer"); // CommonJS import
 * const client = new AccessAnalyzerClient(config);
 * const command = new ListAccessPreviewFindingsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ListAccessPreviewFindingsCommandInput} for command's `input` shape.
 * @see {@link ListAccessPreviewFindingsCommandOutput} for command's `response` shape.
 * @see {@link AccessAnalyzerClientResolvedConfig | config} for AccessAnalyzerClient's `config` shape.
 *
 */
export class ListAccessPreviewFindingsCommand extends $Command<
  ListAccessPreviewFindingsCommandInput,
  ListAccessPreviewFindingsCommandOutput,
  AccessAnalyzerClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: ListAccessPreviewFindingsCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: AccessAnalyzerClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<ListAccessPreviewFindingsCommandInput, ListAccessPreviewFindingsCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "AccessAnalyzerClient";
    const commandName = "ListAccessPreviewFindingsCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: ListAccessPreviewFindingsRequest.filterSensitiveLog,
      outputFilterSensitiveLog: ListAccessPreviewFindingsResponse.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: ListAccessPreviewFindingsCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_restJson1ListAccessPreviewFindingsCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<ListAccessPreviewFindingsCommandOutput> {
    return deserializeAws_restJson1ListAccessPreviewFindingsCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
