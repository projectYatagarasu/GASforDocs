function getLinkPath(row) {
  const sheet = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();
  const cell = sheet.getRange(row, 2); // B列
  const richText = cell.getRichTextValue();
  const url = richText ? richText.getLinkUrl() : "";

  if (!url) return "";

  return url.replace(/^https?:\/\/[^/]+/, "");
}
