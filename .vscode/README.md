# VS Code MCP Configuration

This directory contains the MCP (Model Context Protocol) configuration template for VS Code.

## Setup Instructions

1. **Copy the template to your VS Code user directory**:
   
   **macOS/Linux**:
   ```bash
   cp .vscode/mcp.json.template ~/.vscode/mcp.json
   ```
   
   **Windows**:
   ```powershell
   copy .vscode\mcp.json.template %APPDATA%\Code\User\mcp.json
   ```

2. **Get your API keys**:
   - **Kendo UI**: Get your free trial key at [telerik.com/mcp-servers](https://www.telerik.com/mcp-servers) (no credit card needed)
   - **GitHub** (optional): Create a token at [github.com/settings/tokens](https://github.com/settings/tokens)

3. **Edit the configuration file** and replace the placeholder values:
   - Replace `YOUR_KENDO_API_KEY_HERE` with your actual Kendo UI API key
   - Replace `YOUR_GITHUB_TOKEN_HERE` with your GitHub token (if using GitHub MCP)

4. **Enable MCP in VS Code**:
   - Open VS Code Settings
   - Search for `chat.mcp.gallery.enabled`
   - Enable the setting

5. **Restart VS Code**

## Available MCP Servers

- **Angular CLI MCP** - Execute Angular CLI commands (no API key required)
- **Kendo UI Generator** - Generate professional Kendo UI components
- **GitHub MCP** - Manage repositories, commits, PRs, and issues (optional)
- **Context7 MCP** - Enhanced context management (optional, no API key required)

## Usage Examples

Once configured, you can ask GitHub Copilot:
- "Generate a new Angular service called `api-client`"
- "Use @kendo_ui_generator to add a chart showing monthly sales"
- "Create a login form with Kendo UI inputs and validation"

## More Information

For more details about MCP in VS Code, visit:
https://code.visualstudio.com/docs/copilot/customization/mcp-servers
