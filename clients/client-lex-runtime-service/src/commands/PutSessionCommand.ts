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

import {
  LexRuntimeServiceClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes,
} from "../LexRuntimeServiceClient";
import { PutSessionRequest, PutSessionResponse } from "../models/models_0";
import {
  deserializeAws_restJson1PutSessionCommand,
  serializeAws_restJson1PutSessionCommand,
} from "../protocols/Aws_restJson1";

export interface PutSessionCommandInput extends PutSessionRequest {}
export interface PutSessionCommandOutput extends PutSessionResponse, __MetadataBearer {}

/**
 * <p>Creates a new session or modifies an existing session with an Amazon Lex
 *       bot. Use this operation to enable your application to set the state of the
 *       bot.</p>
 *          <p>For more information, see <a href="https://docs.aws.amazon.com/lex/latest/dg/how-session-api.html">Managing
 *         Sessions</a>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { LexRuntimeServiceClient, PutSessionCommand } from "@aws-sdk/client-lex-runtime-service"; // ES Modules import
 * // const { LexRuntimeServiceClient, PutSessionCommand } = require("@aws-sdk/client-lex-runtime-service"); // CommonJS import
 * const client = new LexRuntimeServiceClient(config);
 * const command = new PutSessionCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link PutSessionCommandInput} for command's `input` shape.
 * @see {@link PutSessionCommandOutput} for command's `response` shape.
 * @see {@link LexRuntimeServiceClientResolvedConfig | config} for LexRuntimeServiceClient's `config` shape.
 *
 */
export class PutSessionCommand extends $Command<
  PutSessionCommandInput,
  PutSessionCommandOutput,
  LexRuntimeServiceClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: PutSessionCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: LexRuntimeServiceClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<PutSessionCommandInput, PutSessionCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "LexRuntimeServiceClient";
    const commandName = "PutSessionCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: PutSessionRequest.filterSensitiveLog,
      outputFilterSensitiveLog: PutSessionResponse.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: PutSessionCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_restJson1PutSessionCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<PutSessionCommandOutput> {
    return deserializeAws_restJson1PutSessionCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
