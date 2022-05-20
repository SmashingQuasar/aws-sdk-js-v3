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

import { CreateFolderMembershipRequest, CreateFolderMembershipResponse } from "../models/models_0";
import {
  deserializeAws_restJson1CreateFolderMembershipCommand,
  serializeAws_restJson1CreateFolderMembershipCommand,
} from "../protocols/Aws_restJson1";
import { QuickSightClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../QuickSightClient";

export interface CreateFolderMembershipCommandInput extends CreateFolderMembershipRequest {}
export interface CreateFolderMembershipCommandOutput extends CreateFolderMembershipResponse, __MetadataBearer {}

/**
 * <p>Adds an asset, such as a dashboard, analysis, or dataset into a folder.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { QuickSightClient, CreateFolderMembershipCommand } from "@aws-sdk/client-quicksight"; // ES Modules import
 * // const { QuickSightClient, CreateFolderMembershipCommand } = require("@aws-sdk/client-quicksight"); // CommonJS import
 * const client = new QuickSightClient(config);
 * const command = new CreateFolderMembershipCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link CreateFolderMembershipCommandInput} for command's `input` shape.
 * @see {@link CreateFolderMembershipCommandOutput} for command's `response` shape.
 * @see {@link QuickSightClientResolvedConfig | config} for QuickSightClient's `config` shape.
 *
 */
export class CreateFolderMembershipCommand extends $Command<
  CreateFolderMembershipCommandInput,
  CreateFolderMembershipCommandOutput,
  QuickSightClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: CreateFolderMembershipCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: QuickSightClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<CreateFolderMembershipCommandInput, CreateFolderMembershipCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "QuickSightClient";
    const commandName = "CreateFolderMembershipCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: CreateFolderMembershipRequest.filterSensitiveLog,
      outputFilterSensitiveLog: CreateFolderMembershipResponse.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: CreateFolderMembershipCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_restJson1CreateFolderMembershipCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<CreateFolderMembershipCommandOutput> {
    return deserializeAws_restJson1CreateFolderMembershipCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
