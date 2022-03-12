function mapByHeadings(content, headers) {
  const rows = content.split("\n");
  return rows.map((item) => {
    const cols = item.split(",");

    if (cols.length !== headers.length) {
      throw new Error("Incorrect amount of headers");
    }

    let value = {};
    cols.forEach((element, index) => {
      value[headers[index]] = element;
    });
    return value;
  });
}

module.exports = { mapByHeadings };
