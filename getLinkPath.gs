function getLinkPath(cellAddress) {
  const sheet = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();
  const richText = sheet.getRange(cellAddress).getRichTextValue();
  const url = richText ? richText.getLinkUrl() : "";

  if (!url) return "";

  return url.replace(/^https?:\/\/[^/]+/, "");
}
