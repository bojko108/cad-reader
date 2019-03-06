import LineByLineReader from 'line-by-line';

export default class CadReader {
  constructor(options = {}) {
    this._useAliases = options.useAliases || false;
    this._encoding = options.encoding || 'utf-8';
    this._skipEmptyLines = options.skipEmptyLines !== undefined ? options.skipEmptyLines : true;
  }

  readFile(input_cad_file) {
    if (!input_cad_file) throw 'CAD File not defined';

    return new Promise((yes, no) => {
      const reader = new LineByLineReader(input_cad_file, { encoding: this._encoding, skipEmptyLines: this._skipEmptyLines });

      reader.on('line', line => {
        console.log(line);
      });
      reader.on('end', () => {
        yes('done');
      });
      reader.on('error', error => {
        no(error);
      });
    });
  }
}
