const toolkit = require('./toolkit');

class Grid {
  constructor(container) {
    this._$container = container;
  }

  build() {
    const matrix = toolkit.makeMatrix();

    const rowGroupClasses = ['row_g_top', 'row_g_middle', 'row_g_bottom'];
    const colGroupClasses = ['col_g_top', 'col_g_middle', 'col_g_bottom'];


    const $cells = matrix.map(rowValues => rowValues
      .map((cellValues, colIndex) => {
        return $('<span>')
            .addClass(colGroupClasses[colIndex % 3])
            .text(cellValues)
    }));

    const $divArray = $cells.map(($sapnArray, rowIndex) => {
      return $('<div>')
          .addClass('row')
          .addClass(rowGroupClasses[rowIndex % 3])
          .append($sapnArray);
    })

    this._$container.append($divArray);
  }
}

new Grid($('#container')).build();