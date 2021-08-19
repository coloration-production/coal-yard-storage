// import resolveConfig from 'tailwindcss/resolveConfig';

export const tailwindConfig = () => {
  // Tailwind config
  // return resolveConfig('windi.config.js')
  // return resolveConfig('tailwind.config.js')
}

export const hexToRGB = (h) => {
  let r = 0;
  let g = 0;
  let b = 0;
  if (h.length === 4) {
    r = `0x${h[1]}${h[1]}`;
    g = `0x${h[2]}${h[2]}`;
    b = `0x${h[3]}${h[3]}`;
  } else if (h.length === 7) {
    r = `0x${h[1]}${h[2]}`;
    g = `0x${h[3]}${h[4]}`;
    b = `0x${h[5]}${h[6]}`;
  }
  return `${+r},${+g},${+b}`;
};

export const formatValue = (value) => Intl.NumberFormat('en-US', {
  style: 'currency',
  currency: 'USD',
  maximumSignificantDigits: 3,
  notation: 'compact',
}).format(value)

export const jsonToExcel = (content: any) => {
  return XlsxPopulate.fromBlankAsync()
    .then((workbook) => {

      const sheet = workbook.sheet('Sheet1')

      sheet.cell('A1').value(content)

      //   // 设置A列宽
      // wb.column("A").width(40);
      // // 设置第一行高
      // wb.row(1).height(50);
      // // 标题合并单元格  A列到D列,1行到2行合并
      // wb.range("A1:D2").merged(true)
      //   .value("月考成绩\n2019年12月")
      //   .style("verticalAlignment", "center") //水平居中
      //   .style("horizontalAlignment", "center") //垂直居中
      //   .style("wrapText", true) //自动换行
      //   .style("border",true)
      // // 表头
      // wb.cell("A3")
      //   .value("姓名")
      //   .style("border",true)
      //   .style("verticalAlignment", "center") //水平居中
      //   .style("horizontalAlignment", "center") //垂直居中;

      // wb.cell("B3")
      //   .value("语文")
      //   .style("border",true)
      //   .style("verticalAlignment", "center") //水平居中
      //   .style("horizontalAlignment", "center") //垂直居中;


      // wb.cell("C3")
      //   .value("数学")
      //   .style("border",true)
      //   .style("verticalAlignment", "center") //水平居中
      //   .style("horizontalAlignment", "center") //垂直居中;

      // wb.cell("D3")
      //   .value("英语")
      //   .style("border",true)
      //   .style("verticalAlignment", "center") //水平居中
      //   .style("horizontalAlignment", "center") //垂直居中;

      // // 数据
      // // 张三
      // wb.cell("A4")
      //   .value("张三")
      //   .style("border",true)
      //   .style("verticalAlignment", "center")//水平居中
      //   .style("horizontalAlignment", "center");//垂直居中;

      // wb.cell("B4")
      //   .value("84")
      //   .style("border",true)
      //   .style("verticalAlignment", "center")//水平居中
      //   .style("horizontalAlignment", "center");//垂直居中;


      // wb.cell("C4")
      //   .value("88")
      //   .style("border",true)
      //   .style("verticalAlignment", "center")//水平居中
      //   .style("horizontalAlignment", "center");//垂直居中;

      // wb.cell("D4")
      //   .value("92")
      //   .style("border",true)
      //   .style("verticalAlignment", "center")//水平居中
      //   .style("horizontalAlignment", "center");//垂直居中;

      // // 李四
      // wb.cell("A5")
      //   .value("李四")
      //   .style("border",true)
      //   .style("verticalAlignment", "center")//水平居中
      //   .style("horizontalAlignment", "center");//垂直居中;

      // wb.cell("B5")
      //   .value("77")
      //   .style("border",true)
      //   .style("verticalAlignment", "center")//水平居中
      //   .style("horizontalAlignment", "center");//垂直居中;


      // wb.cell("C5")
      //   .value("98")
      //   .style("border",true)
      //   .style("verticalAlignment", "center")//水平居中
      //   .style("horizontalAlignment", "center");//垂直居中;

      // wb.cell("D5")
      //   .value("87")
      //   .style("border",true)
      //   .style("verticalAlignment", "center")//水平居中
      //   .style("horizontalAlignment", "center");//垂直居中;

      return workbook.outputAsync()
    })
}

export const downloadFile = (blob: Blob, fileName: string) => {
  if (window.navigator && window.navigator.msSaveOrOpenBlob) {
    // If IE, you must uses a different method.
    window.navigator.msSaveOrOpenBlob(blob, fileName)
  }
  else {
    const url = window.URL.createObjectURL(blob)
    const a = document.createElement('a')
    document.body.appendChild(a)
    a.href = url
    a.download = fileName
    a.click()
    window.URL.revokeObjectURL(url)
    document.body.removeChild(a)
  }
}
