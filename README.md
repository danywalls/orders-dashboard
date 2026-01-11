# Orders Dashboard - Kendo UI Article

This source code is part of the article **"Angular MCP and Kendo: Make Agents Work for You"**, demonstrating how to use **Angular MCP** and the **Kendo Agentic UI Generator** to automate Angular development.

**Author:** Dany Paredes  
**Blog:** https://www.telerik.com/blogs/author/dany-paredes

## What This Project Demonstrates

This dashboard showcases:
- ✅ **Angular MCP** - Automate Angular CLI commands directly from your AI editor
- ✅ **Kendo Agentic UI Generator** - Generate professional Kendo UI components using AI
- ✅ Responsive layout with Kendo Grid and components
- ✅ Production-ready code without copy-pasting from documentation

## MCP Configuration

This project includes a ready-to-use MCP configuration template at `.cursor/mcp.json.template` with:
- **Angular CLI MCP** - For running Angular commands
- **Kendo UI Generator MCP** - For generating Kendo UI components
- **GitHub MCP** - For Git operations (optional)
- **Context7 MCP** - For enhanced context (optional)

### Setup MCP

1. Copy the template to your editor's config:
   ```bash
   # For Cursor
   cp .cursor/mcp.json.template ~/.cursor/mcp.json
   ```

2. Get your **Kendo UI API Key** (free trial, no credit card):
   - Visit [telerik.com/mcp-servers](https://www.telerik.com/mcp-servers)
   - Click "Get Access code" and sign in
   - Copy your API key

3. Edit `~/.cursor/mcp.json` and replace `PASTE_YOUR_KEY_HERE` with your actual key

4. Restart your editor

## Getting Started

Install dependencies:
```bash
npm install
```

Run the development server:
```bash
ng serve
```

Open your browser at `http://localhost:4200/`

## Build

```bash
ng build
```

## Try These Commands

Once MCP is configured, ask your AI assistant:
- "Create a new component called `customer-list`"
- "Use @kendo_ui_generator to add a chart showing monthly sales"
- "Generate a login form with Kendo UI inputs and validation"

Let the tools do the work for you!
