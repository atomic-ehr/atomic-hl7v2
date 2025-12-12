/**
 * HL7v2 Debug Server
 *
 * A simple debug tool for parsing and highlighting HL7v2 messages.
 * Run with: bun --hot src/debug-server.ts
 */

import { highlightHL7Message, getHighlightStyles } from "./hl7v2/highlight";
import { parseToNamed } from "./hl7v2/schema-parser";

const SAMPLE_MESSAGE = `MSH|^~\\&|HOSPITAL_APP|HOSPITAL_FAC|REC_APP|REC_FAC|20231201120000||ADT^A01^ADT_A01|MSG00001|P|2.5.1
EVN|A01|20231201120000
PID|1||12345678^^^HOSP^MR~987-65-4321^^^SSA^SS||Smith^John^Robert^Jr^Dr||19800515|M|||123 Main St^^Anytown^CA^12345^USA||555-123-4567|555-987-6543||S|CAT|12345678
PV1|1|I|ICU^101^A^HOSP||||1234^Johnson^Sarah^M^Dr|||SUR||||ADM|A0||1234^Johnson^Sarah^M^Dr|INP||||||||||||||||||HOSP|||||20231201120000
DG1|1||J18.9^Pneumonia, unspecified organism^ICD10|||A
AL1|1|DA|PCN^Penicillin^L|MO|Rash`;

function renderPage(): string {
  return `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>HL7v2 Debug Tool</title>
  <script src="https://cdn.tailwindcss.com"></script>
  <script src="https://unpkg.com/htmx.org@2.0.4"></script>
  <style>
    ${getHighlightStyles()}
    .hl7-output {
      font-family: ui-monospace, SFMono-Regular, "SF Mono", Menlo, Consolas, monospace;
      font-size: 13px;
      line-height: 1.6;
      white-space: pre-wrap;
      word-break: break-all;
    }
  </style>
</head>
<body class="bg-gray-100 min-h-screen">
  <div class="container mx-auto px-4 py-8 max-w-6xl">
    <h1 class="text-3xl font-bold text-gray-800 mb-2">HL7v2 Debug Tool</h1>
    <p class="text-gray-600 mb-6">Parse and highlight HL7v2 messages with field metadata tooltips</p>

    <div class="space-y-6">
      <!-- Input Panel -->
      <div class="bg-white rounded-lg shadow-md p-6">
        <div class="flex justify-between items-center mb-4">
          <h2 class="text-lg font-semibold text-gray-700">Input Message</h2>
          <button
            type="button"
            class="text-sm px-3 py-1 bg-gray-200 hover:bg-gray-300 rounded text-gray-700"
            onclick="document.getElementById('message').value = \`${SAMPLE_MESSAGE.replace(/`/g, '\\`').replace(/\\/g, '\\\\')}\`"
          >
            Load Sample
          </button>
        </div>
        <form hx-post="/parse" hx-target="#result" hx-swap="innerHTML">
          <textarea
            id="message"
            name="message"
            class="w-full h-48 p-3 border border-gray-300 rounded-lg font-mono text-sm focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            placeholder="Paste your HL7v2 message here..."
          ></textarea>
          <button
            type="submit"
            class="mt-4 w-full bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-4 rounded-lg transition-colors"
          >
            Parse & Highlight
          </button>
        </form>
      </div>

      <!-- Output Panel -->
      <div id="result" class="text-gray-500 bg-white rounded-lg shadow-md p-6">
        Enter an HL7v2 message and click "Parse & Highlight" to see the result.
      </div>
    </div>

    <div class="mt-6 text-center text-gray-500 text-sm">
      Hover over fields to see metadata (field name, data type, required status)
    </div>
  </div>
</body>
</html>`;
}

function renderResult(message: string): string {
  if (!message || message.trim() === "") {
    return `<div class="text-gray-500">No message provided</div>`;
  }

  let highlighted: string;
  let parsed: string;
  let error: string | null = null;

  try {
    highlighted = highlightHL7Message(message);
  } catch (e) {
    highlighted = `<div class="text-red-500">Highlight error: ${e instanceof Error ? e.message : String(e)}</div>`;
  }

  try {
    const parsedMessage = parseToNamed(message);
    parsed = JSON.stringify(parsedMessage, null, 2);
  } catch (e) {
    error = e instanceof Error ? e.message : String(e);
    parsed = "";
  }

  return `
    <div class="space-y-6">
      <!-- Highlighted Output -->
      <div>
        <h3 class="text-sm font-medium text-gray-600 mb-2">Highlighted Message</h3>
        <div class="bg-gray-50 border border-gray-200 rounded-lg p-4 overflow-x-auto">
          <div class="hl7-output">${highlighted}</div>
        </div>
      </div>

      <!-- Parsed JSON -->
      <div>
        <h3 class="text-sm font-medium text-gray-600 mb-2">Parsed Structure (JSON)</h3>
        ${error
          ? `<div class="bg-red-50 border border-red-200 rounded-lg p-4 text-red-700">${error}</div>`
          : `<pre class="bg-gray-900 text-gray-100 rounded-lg p-4 overflow-x-auto text-xs">${escapeHtml(parsed)}</pre>`
        }
      </div>
    </div>
  `;
}

function escapeHtml(text: string): string {
  return text
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}

const port = process.env.PORT || 3333;

const server = Bun.serve({
  port,
  async fetch(req) {
    const url = new URL(req.url);

    if (url.pathname === "/" && req.method === "GET") {
      return new Response(renderPage(), {
        headers: { "Content-Type": "text/html" },
      });
    }

    if (url.pathname === "/parse" && req.method === "POST") {
      const formData = await req.formData();
      const message = formData.get("message")?.toString() || "";
      return new Response(renderResult(message), {
        headers: { "Content-Type": "text/html" },
      });
    }

    return new Response("Not Found", { status: 404 });
  },
});

console.log(`HL7v2 Debug Server running at http://localhost:${server.port}`);
