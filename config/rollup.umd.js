import nodeResolve from 'rollup-plugin-node-resolve';
import commonjs from 'rollup-plugin-commonjs';
import cleanup from 'rollup-plugin-cleanup';
import fs from 'fs';

let version = JSON.parse(fs.readFileSync('package.json', 'utf8')).version;

export default {
    input: 'src/CadReader.js',
    output: {
        file: 'dist/index.umd.js',
        format: 'umd',
        name: 'CadReader',
        banner: `// Library for converting CAD files in GeoJSON format\n// Version: ${version}\n`
    },
    plugins: [
        nodeResolve(),
        commonjs(),
        cleanup()
    ]
};