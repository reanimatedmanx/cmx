import FieldController from '../../Controller';

export default class FileController extends FieldController {
  getQueryFragment = () => `
    ${this.path} {
       id
       path
       filename
       mimetype
       encoding
       publicUrlTransformed(transformation: { width: "60", height: "60" }) {
         url
       }
    }
  `;
}
