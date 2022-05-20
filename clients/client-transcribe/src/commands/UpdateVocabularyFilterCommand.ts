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

import { UpdateVocabularyFilterRequest, UpdateVocabularyFilterResponse } from "../models/models_0";
import {
  deserializeAws_json1_1UpdateVocabularyFilterCommand,
  serializeAws_json1_1UpdateVocabularyFilterCommand,
} from "../protocols/Aws_json1_1";
import { ServiceInputTypes, ServiceOutputTypes, TranscribeClientResolvedConfig } from "../TranscribeClient";

export interface UpdateVocabularyFilterCommandInput extends UpdateVocabularyFilterRequest {}
export interface UpdateVocabularyFilterCommandOutput extends UpdateVocabularyFilterResponse, __MetadataBearer {}

/**
 * <p>Updates a vocabulary filter with a new list of filtered words.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { TranscribeClient, UpdateVocabularyFilterCommand } from "@aws-sdk/client-transcribe"; // ES Modules import
 * // const { TranscribeClient, UpdateVocabularyFilterCommand } = require("@aws-sdk/client-transcribe"); // CommonJS import
 * const client = new TranscribeClient(config);
 * const command = new UpdateVocabularyFilterCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link UpdateVocabularyFilterCommandInput} for command's `input` shape.
 * @see {@link UpdateVocabularyFilterCommandOutput} for command's `response` shape.
 * @see {@link TranscribeClientResolvedConfig | config} for TranscribeClient's `config` shape.
 *
 */
export class UpdateVocabularyFilterCommand extends $Command<
  UpdateVocabularyFilterCommandInput,
  UpdateVocabularyFilterCommandOutput,
  TranscribeClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: UpdateVocabularyFilterCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: TranscribeClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<UpdateVocabularyFilterCommandInput, UpdateVocabularyFilterCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "TranscribeClient";
    const commandName = "UpdateVocabularyFilterCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: UpdateVocabularyFilterRequest.filterSensitiveLog,
      outputFilterSensitiveLog: UpdateVocabularyFilterResponse.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: UpdateVocabularyFilterCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_1UpdateVocabularyFilterCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<UpdateVocabularyFilterCommandOutput> {
    return deserializeAws_json1_1UpdateVocabularyFilterCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
