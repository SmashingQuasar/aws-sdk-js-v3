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

import { MediaPackageVodClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../MediaPackageVodClient";
import { DescribeAssetRequest, DescribeAssetResponse } from "../models/models_0";
import {
  deserializeAws_restJson1DescribeAssetCommand,
  serializeAws_restJson1DescribeAssetCommand,
} from "../protocols/Aws_restJson1";

export interface DescribeAssetCommandInput extends DescribeAssetRequest {}
export interface DescribeAssetCommandOutput extends DescribeAssetResponse, __MetadataBearer {}

/**
 * Returns a description of a MediaPackage VOD Asset resource.
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { MediaPackageVodClient, DescribeAssetCommand } from "@aws-sdk/client-mediapackage-vod"; // ES Modules import
 * // const { MediaPackageVodClient, DescribeAssetCommand } = require("@aws-sdk/client-mediapackage-vod"); // CommonJS import
 * const client = new MediaPackageVodClient(config);
 * const command = new DescribeAssetCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DescribeAssetCommandInput} for command's `input` shape.
 * @see {@link DescribeAssetCommandOutput} for command's `response` shape.
 * @see {@link MediaPackageVodClientResolvedConfig | config} for MediaPackageVodClient's `config` shape.
 *
 */
export class DescribeAssetCommand extends $Command<
  DescribeAssetCommandInput,
  DescribeAssetCommandOutput,
  MediaPackageVodClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: DescribeAssetCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: MediaPackageVodClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<DescribeAssetCommandInput, DescribeAssetCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "MediaPackageVodClient";
    const commandName = "DescribeAssetCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: DescribeAssetRequest.filterSensitiveLog,
      outputFilterSensitiveLog: DescribeAssetResponse.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: DescribeAssetCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_restJson1DescribeAssetCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<DescribeAssetCommandOutput> {
    return deserializeAws_restJson1DescribeAssetCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
